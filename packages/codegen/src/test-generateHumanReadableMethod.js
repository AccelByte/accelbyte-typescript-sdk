/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

const _ = require('lodash')

/**
 * This file is used to test the "generateHumanReadableMethod" function
 */

const REMOVED_KEYWORDS = [
  '/admin/',
  '/public/',
  '/v1/',
  '/v2/',
  '/v3/',
  '/v4/',
  '/v5/',
  '/namespace/' /* Note, it's not plural */,
  '/namespaces/',
  '/{namespace}/'
]

const mappedMethod = (httpMethod, isForm) => {
  if (httpMethod === 'get') {
    return 'get'
  } else if (httpMethod === 'post' && isForm) {
    return 'post'
  } else if (httpMethod === 'post') {
    return 'create'
  } else if (httpMethod === 'put') {
    return 'update'
  } else if (httpMethod === 'patch') {
    return 'patch'
  } else if (httpMethod === 'delete') {
    return 'delete'
  }
}

function replaceAll(string, search, replace) {
  return string.split(search).join(replace)
}

const resolveConflicts = (path, generatedMethod, existingMethods) => {
  // generatedMethod = generatedMethod.replace('Namespaces', '')
  try {
    testConflict(path, generatedMethod, existingMethods)
  } catch (e) {
    if (path.indexOf('/namespaces/') >= 0) {
      generatedMethod += '_ByNS'
    }
  }

  try {
    testConflict(path, generatedMethod, existingMethods)
  } catch (e) {
    if (path.indexOf('/v4/') >= 0) {
      generatedMethod += '_v4'
    }
  }

  try {
    testConflict(path, generatedMethod, existingMethods)
  } catch (e) {
    if (path.indexOf('/v3/') >= 0) {
      generatedMethod += '_v3'
    }
  }

  try {
    testConflict(path, generatedMethod, existingMethods)
  } catch (e) {
    if (path.indexOf('/v2/') >= 0) {
      generatedMethod += '_v2'
    }
  }

  try {
    testConflict(path, generatedMethod, existingMethods)
  } catch (e) {
    if (path.indexOf('/admin/') >= 0) {
      generatedMethod += '_admin'
    }
  }

  // Still failed? dump it and fail the code gen build
  testConflict(path, generatedMethod, existingMethods)

  return generatedMethod
}

const testConflict = (path, generatedMethod, existingMethods) => {
  if (existingMethods[generatedMethod]) {
    const conflictingMethod = { path, generatedMethod }
    throw Error(
      `Duplicate method conflict in ${JSON.stringify(conflictingMethod)},\n existingMethods: ${JSON.stringify(existingMethods, null, 2)}`
    )
  }
}

const generateNaturalLangMethod = ({ servicePrefix, path, httpMethod, isForm, existingMethods }) => {
  let path_ = path
  path_ = path_.replace(`/${servicePrefix}/`, '/')
  REMOVED_KEYWORDS.forEach(prefix => {
    path_ = path_.replace(prefix, '/')
  })
  path_ = path_.substring(1) // remove first '/'

  // Example GET /xxx/yyy/{id}/items is "fetchItems" PLURAL
  // Example GET /xxx/yyy/{id}/items/{itemId} is "fetchItem" SINGULAR
  const isPlural = httpMethod === 'get' && !(path.slice(-1) === '}') // last char is '}'
  if (!isPlural) {
    path_ = replaceAll(path_, 'ies/', 'y/') // parties, countries, policies
    path_ = replaceAll(path_, 's/', '/')
    if (path_.indexOf('status') < 0) {
      path_ = path_.replace(/ies$/, 'y')
      path_ = path_.replace(/s$/, '')
    } // remove all tail end "s" -> /profiles, /users except /status
  } // make it non plural

  const arrLastWords = path_.split('}/')
  let lastWords = arrLastWords[arrLastWords.length - 1]

  const extractLastWord = lastWords_ => {
    let res = lastWords_
    res = res.split('/{')[0]
    return res
  }
  // convert "/dlcs/latest/byGameAppId/{appId" to "/dlcs/latest/byGameAppId" by dropping "{appId"
  lastWords = extractLastWord(lastWords)
  if (lastWords.indexOf('{') >= 0 && arrLastWords.length > 1) {
    lastWords = arrLastWords[arrLastWords.length - 2]
    lastWords = extractLastWord(lastWords)
  }

  const listBeforeLastWords = []
  let foundParam = false
  const listByParams = []

  // reverse iterate retrieving last words of the endpoint
  const pathElements = path_.split('/')
  pathElements
    .slice()
    .reverse()
    .forEach(item => {
      if (item.indexOf('}') >= 0) {
        foundParam = true
        let param = item.replace('{', '')
        param = param.replace('}', '')
        param = 'Byword' + _.upperFirst(param) + ''
        listByParams.push(param)
      } else if (!foundParam) {
        if (lastWords.indexOf(item) === -1) {
          listBeforeLastWords.push(item)
        }
      } else {
        foundParam = false
      }
    })

  const genPath = _.upperFirst(lastWords) + '/' + listBeforeLastWords.join('/') + listByParams.reverse().join('/')
  let generatedMethod = _.camelCase(mappedMethod(httpMethod, isForm) + genPath)
  generatedMethod = replaceAll(generatedMethod, 'Byword', '_By') // lodash remvoes the '_'
  generatedMethod = resolveConflicts(path, generatedMethod, existingMethods)
  return generatedMethod
}

// const path = '/buildinfo/admin/namespaces/{namespace}/v2/diff/signedurl'
// const path = '/buildinfo/admin/namespaces/{namespace}/v2/diff/signedurl/{sourceBuildId}'
// const path = '/buildinfo/admin/namespaces/{namespace}/v2/diff/signedurl/{sourceBuildId}/{destinationBuildId}'
const path = '/buildinfo/admin/namespaces/{namespace}/v2/diff/signedurl/{sourceBuildId}/{destinationBuildId}'
// const path = '/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles/status'
// const path = '/buildinfo/public/namespaces/{namespace}/apps/latest/byDLCAppId/{dlcAppId}'
// const path = '/buildinfo/public/namespaces/{namespace}/apps/latest/byDLCAppId/{dlcAppId}/items/{itemId}'
// const path = '/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles'
// const path = '/basic/v1/public/namespaces/{namespace}/users/{userId}/status'
// const path = '/odin-config/v1/admin/namespaces/{namespace}/templates'
// const path = '/odin-config/v1/admin/namespaces/{namespace}/templates/{template}/configs'
// const path = '/public/policies/countries/{countryCode}'
// const path = '/public/policies/namespaces/{namespace}/countries/{countryCode}'
// const path = '/public/policies/namespaces/{namespace}/countries'
// const path = '/agreement/public/eligibilities/namespaces/{namespace}'

const method = generateNaturalLangMethod({
  path,
  httpMethod: 'get',
  isForm: false,
  existingMethods: {},
  servicePrefix: 'buildinfo'
})

console.log('METHOD:', method)
