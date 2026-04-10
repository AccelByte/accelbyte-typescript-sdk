/*
 * Copyright (c) 2018-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { applyPatch, Operation } from 'fast-json-patch'
import fs from 'fs'
import _ from 'lodash'
import path from 'path'
import { PermissionType, removeAdminPrefix } from './helpers/utils'
import { Endpoint, EndpointParameters } from './Swagger'
import { templateApiClass } from './templates/template-api-class'
import { templateClass } from './templates/template-class'
import { templateQuery } from './templates/template-query'

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

export class ParserUtils {
  static getVersionSuffixFromPath(path: string) {
    const version2_3_4_etc = path.match(/\/v([2-9]|[1-9]\d+)\/+/)
    const methodSuffix = version2_3_4_etc ? `_v${version2_3_4_etc[1]}` : ''
    return methodSuffix
  }

  static replaceAll = (text, search, replace) => {
    return text.split(search).join(replace)
  }

  static generateClassName = (tag: string, isAdmin: boolean) => {
    const className = _.upperFirst(_.camelCase(tag))
    const formattedApiName = removeAdminPrefix(className)
    const classGenName = isAdmin ? formattedApiName + 'Admin$' : formattedApiName + '$'
    return { className: formattedApiName, classGenName }
  }

  static generateApiName = (tag: string, isAdmin: boolean) => {
    const apiName = _.upperFirst(_.camelCase(tag))
    const formattedApiName = removeAdminPrefix(apiName)
    const apiGenName = isAdmin ? formattedApiName + 'AdminApi' : formattedApiName + 'Api'
    return { apiName, apiGenName }
  }

  static parseQueryParamAttributeDefault = (definition: EndpointParameters) => {
    const attrName = definition.name.slice(definition.name.lastIndexOf('.') + 1)
    let defaultValue = definition.default

    if (definition.type === 'array' && Array.isArray(definition.default)) {
      const mappedDefaultValue = definition.default.map(defaultValue =>
        typeof defaultValue === 'string' ? `'${defaultValue}'` : defaultValue
      )
      defaultValue = `[${mappedDefaultValue.join(', ')}]`
    }

    if (definition.type === 'string') {
      defaultValue = `'${definition.default}'`
    }
    return `${attrName}: ${defaultValue}`
  }

  static parseType = (pathParam: EndpointParameters) => {
    if (isSwaggerIntegerType(pathParam.type || pathParam?.schema?.type)) return 'number'
    if (pathParam.type === 'array') {
      if (isSwaggerIntegerType(pathParam.items.type)) return 'number[]'
      return `${pathParam.items.type ?? 'any'}[]`
    }
    if (pathParam?.schema?.type === 'array') {
      if (isSwaggerIntegerType(pathParam.schema.items.type)) return 'number[]'
      return `${pathParam.schema.items.type ?? 'any'}[]`
    }
    if (pathParam?.schema?.type) return pathParam.schema.type
    return pathParam.type
  }

  static parseQueryParamsType = (queryParams: EndpointParameters[]) => {
    const result = queryParams.map(queryParam => ParserUtils.parseAttributeType(queryParam)).join(', ')
    return result
  }

  static isAnyQueryParamRequired = (queryParams: EndpointParameters[]) => {
    return queryParams.some(queryParam => queryParam.required)
  }

  static convertDashesToTitleCase = str => {
    const result = str
      .split('-') // split the string at the hyphen
      .map((word, index) => {
        // capitalize the first letter of each word
        if (index === 0) {
          return word.charAt(0).toUpperCase() + word.slice(1)
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      })
      .join('') // join the words together without a separator
    return result
  }

  static parseQueryParamsDefault = (queryParams: EndpointParameters[]) => {
    const result = queryParams
      .filter(queryParam => !!queryParam.default && !queryParam.required)
      .map(ParserUtils.parseQueryParamAttributeDefault)
      .join(',')
    return result ? `${result},` : ''
  }

  static parseBodyParamsImports = (bodyParams: EndpointParameters[]) => {
    return bodyParams.map(bodyParams => ParserUtils.parseRefImport(bodyParams)).filter(Boolean)
  }

  static parseImportDir = ($ref: string) => {
    let ref = $ref.replace('.', '/')
    if (ref[ref.length - 1] === '.' || ref[ref.length - 1] === '/') {
      ref = ref.slice(0, -1)
    }
    if (!ref.includes('/')) {
      return ''
    } else {
      return ref.slice(0, ref.lastIndexOf('/')).replace('#', '.')
    }
  }

  static parseRefImport = (bodyParam: EndpointParameters) => {
    const $ref = bodyParam?.schema?.$ref || bodyParam?.schema?.items?.$ref
    if (!$ref || $ref.endsWith('__dictionary__')) {
      return null
    }
    const type = ParserUtils.parseRefType($ref)
    return `import { ${type} } from '../../generated-definitions/${type}.js'`
  }

  static parseRefType = ($ref: string) => {
    if ($ref.endsWith('__dictionary__')) return '__dictionary__'

    let ref = $ref.replace('.', '/')
    if (ref[ref.length - 1] === '.' || ref[ref.length - 1] === '/') {
      ref = ref.slice(0, -1)
    }
    const val = ref.slice(ref.lastIndexOf('/') + 1)
    // Converting it to TitleCase breaks schema refs. E.g. UserDataURL schema is converted to UserDataUrl breaking refs
    return _.upperFirst(_.camelCase(val)).replace(/( \w)/g, group => group.replace(' ', '').toUpperCase())
  }

  static parseAttributeType = (definition: EndpointParameters) => {
    const required = definition.required ? '' : '?'

    const attrName = definition.name.slice(definition.name.lastIndexOf('.') + 1)

    if (definition.enum) {
      const enums = definition.enum.map(enm => (definition.type === 'string' ? `'${enm}'` : enm)).join(' | ')
      return `${attrName}${required}: ${enums}`
    }

    if (definition.type && ParserUtils.parseType(definition) === 'number') {
      return `${attrName}${required}: number`
    }

    if (definition.type && ParserUtils.parseType(definition) === 'number[]') {
      return `${attrName}${required}: number[]`
    }

    if (definition?.schema?.type && ParserUtils.parseType(definition) === 'number') {
      return `${attrName}${required}: number`
    }

    if (definition.type && definition.type === 'array') {
      return `${attrName}${required}: ${definition.items.type ?? 'any'}[]`
    }

    if (definition?.schema?.type && definition.schema.type === 'array') {
      return `${attrName}${required}: ${definition.schema.items.type ?? 'any'}[]`
    }

    if (definition.type && definition.type === 'file') {
      return `${attrName}${required}: File`
    }

    if (definition?.schema?.type && definition.schema.type === 'file') {
      return `${attrName}${required}: File`
    }

    if (definition.type && definition.type) {
      return `${attrName}${required}: ${definition.type} | null`
    }

    if (definition?.schema?.type && definition.schema.type) {
      return `${attrName}${required}: ${definition.schema.type} | null`
    }

    return `${attrName}${required}: any`
  }

  static parseBodyParamsType = (bodyParams: EndpointParameters[]): string => {
    const [bodyParam] = bodyParams

    if (!bodyParam) return null

    if (bodyParams.length > 0 && bodyParam?.name !== 'body' && !bodyParam?.schema) {
      let retBodyParams = `{${bodyParams.map(bodyParam => ParserUtils.parseAttributeType(bodyParam)).join(',')}}`
      retBodyParams = retBodyParams.replace('file?: file', 'file?: File') // fixed TS type File
      return retBodyParams
    }

    if (bodyParam?.schema?.type === 'array' && !bodyParam?.schema?.items?.$ref) {
      if (isSwaggerIntegerType(bodyParam.schema.items.type)) return 'number[]'
      return `${bodyParam.schema.items.type ?? 'any'}[]`
    }

    if (bodyParam?.schema?.type === 'array' && bodyParam?.schema?.items?.$ref) {
      return `${ParserUtils.parseRefType(bodyParam.schema.items.$ref)}[]`
    }

    if (bodyParam?.schema?.$ref) {
      return ParserUtils.parseRefType(bodyParam.schema.$ref)
    }

    if (bodyParam?.schema?.additionalProperties?.type === 'object') {
      return 'any'
    }

    return null
  }

  static get2xxResponses(methodEntity: Endpoint['responses']): string[] {
    const keys = Object.keys(methodEntity)
    const responseClasses = []
    const statusCodes = keys.filter(key => String(key).startsWith('2'))

    statusCodes.forEach(key => {
      const sch = methodEntity[key].schema
      const schV3 = methodEntity[key].content && methodEntity[key].content['application/json'].schema
      if (sch?.$ref) {
        responseClasses.push(ParserUtils.parseRefType(sch.$ref))
      } else if (sch?.type === 'array' && sch.items?.$ref) {
        responseClasses.push(`${ParserUtils.parseRefType(sch.items.$ref)}Array`) // Adds support for z.array() types
      } else if (schV3?.$ref) {
        responseClasses.push(ParserUtils.parseRefType(schV3.$ref))
      } else {
        // TODO add support for non $ref types. E.g. { type: 'array', items: { type: 'string', enum: [ 'WALLET',   'XSOLLA', .. ] } }
      }
    })
    return responseClasses
  }

  static isFormUrlEncoded(httpMethod: string, contentTypes: string[]): boolean {
    if (!contentTypes || contentTypes.length < 1) {
      return false
    }
    if (!['post', 'put', 'patch'].includes(httpMethod)) {
      return false
    }
    return contentTypes.includes('application/x-www-form-urlencoded')
  }

  static filterPathParams(parameters?: EndpointParameters[]): EndpointParameters[] {
    if (!parameters) {
      return []
    }
    return parameters.filter(parameter => parameter.in === 'path')
  }

  /**
   * This method converts this
   * POST `/gdpr/public/namespaces/{namespace}/users/{userId}/requests/{requestDate}/generate`
   *
   * to this
   * `createGenerateByRequestIdByUserId`
   */
  static generateNaturalLangMethod = ({ servicePrefix, path, httpMethod, isForm, existingMethods, permissionType }) => {
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
      path_ = ParserUtils.replaceAll(path_, 'ies/', 'y/') // parties, countries, policies
      path_ = ParserUtils.replaceAll(path_, 's/', '/')
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
    let generatedMethod = _.camelCase(mappedMethod(httpMethod, isForm, permissionType) + genPath)
    generatedMethod = ParserUtils.replaceAll(generatedMethod, 'Byword', '_By') // lodash removes the '_'
    const testedGeneratedMethod = generatedMethod + ParserUtils.getVersionSuffixFromPath(path)
    generatedMethod = resolveConflicts({ path, generatedMethod, testedGeneratedMethod, existingMethods })
    generatedMethod = generatedMethod + ParserUtils.getVersionSuffixFromPath(path)
    return generatedMethod
  }

  static filterBodyParams(parameters?: EndpointParameters[]) {
    if (Array.isArray(parameters) && parameters.length > 0) {
      return parameters.filter(parameter => parameter.in === 'body' || parameter.in === 'formData')
    }
    return []
  }

  static filterQueryParameters(parameters?: EndpointParameters[]): EndpointParameters[] {
    if (!parameters) {
      return []
    }
    return parameters.filter(parameter => parameter.in === 'query')
  }

  static mkdirIfNotExist(dirToCreate: string) {
    if (!fs.existsSync(dirToCreate)) {
      fs.mkdirSync(dirToCreate, { recursive: true })
    }
  }

  static writeClassFile(distDir: string, apiName: string, apiBuffer: string, imports?: string[]) {
    const fileContent = templateClass(apiName, apiBuffer, imports)
    fs.writeFileSync(`${distDir}/${apiName}.ts`, ParserUtils.prependCopyrightHeader(fileContent))
  }

  static writeAtomFile(distDir: string, apiName: string, fileContent: string) {
    ParserUtils.mkdirIfNotExist(distDir)
    fs.writeFileSync(`${distDir}/${apiName}.atom.ts`, ParserUtils.prependCopyrightHeader(fileContent))
  }

  static writeQueryFile(
    distDir: string,
    apiName: string,
    apiBuffer: string,
    imports: string[],
    serviceNameTitle: string,
    returnMethods: string,
    paramImports: string[],
    sdkName: string
  ) {
    if (apiBuffer.length < 1) {
      return null
    }
    const queryFileName = `${apiName.replace('Api', '')}.query`
    ParserUtils.mkdirIfNotExist(distDir)
    const fileContent = templateQuery(apiName, apiBuffer, imports, serviceNameTitle, returnMethods, paramImports, sdkName)
    fs.writeFileSync(`${distDir}/${queryFileName}.ts`, ParserUtils.prependCopyrightHeader(fileContent))

    return queryFileName
  }

  static writeXVersion(distDir: string, xversionJson: string, apiInfo) {
    fs.mkdirSync(distDir, { recursive: true })

    if (xversionJson) {
      console.log('x-version:', xversionJson)
      fs.writeFileSync(`${distDir}/version.json`, JSON.stringify(xversionJson, null, 2))
    } else {
      const customVersion = {
        ...apiInfo,
        gitHash: apiInfo.version
      }
      console.error(`!!!! Missing x-version for ${distDir} ${customVersion}`)
      fs.writeFileSync(`${distDir}/version.json`, JSON.stringify(customVersion, null, 2))
    }
  }

  static writeApiFile(
    distDir: string,
    apiName: string,
    apiBuffer: string,
    imports: string[],
    returnMethodsDescription: Record<string, string>
  ) {
    const newImports = []
    imports.forEach(el => {
      newImports.push(el.replace('../../generated-definitions', '../generated-definitions'))
    })
    const fileContent = templateApiClass(apiName, apiBuffer, newImports, returnMethodsDescription)
    fs.writeFileSync(`${distDir}/${apiName}.ts`, ParserUtils.prependCopyrightHeader(fileContent))
  }

  static writeApiMainFile(distDir: string, serviceName: string, fileContent: string) {
    fs.writeFileSync(`${distDir}/${serviceName}.ts`, ParserUtils.prependCopyrightHeader(fileContent))
  }

  static writeSnippetFile(distDir: string, name: string, docBuffer: string) {
    let snippetFileName = ParserUtils.replaceAll(name, ' ', '-').toLowerCase()
    snippetFileName = snippetFileName.replace('justice-', '')
    snippetFileName = 'snippet-' + snippetFileName + '.json'
    fs.writeFileSync(`${distDir}/${snippetFileName}`, docBuffer)
  }

  static writeDefinitionFile(distDir: string, name: string, buffer: string) {
    ParserUtils.mkdirIfNotExist(distDir)
    fs.writeFileSync(path.join(distDir, `${name}.ts`), ParserUtils.prependCopyrightHeader(buffer))
  }

  static writeAllImportsFile(distDir: string, buffer: string) {
    ParserUtils.mkdirIfNotExist(distDir)
    fs.writeFileSync(path.join(distDir, 'all-imports.ts'), ParserUtils.prependCopyrightHeader(buffer))
  }

  static writeAllQueryImportsFile(distDir: string, buffer: string) {
    ParserUtils.mkdirIfNotExist(distDir)
    fs.writeFileSync(path.join(distDir, 'all-query-imports.ts'), ParserUtils.prependCopyrightHeader(buffer))
  }

  static toCamelCase(str: string) {
    return str
      .split('/')
      .map(function (word, index) {
        // If it is the first word make sure to lowercase all the chars.
        if (index === 0) {
          return word.toLowerCase()
        }
        // If it is not the first word only upper case the first char
        return ParserUtils.toCamelCaseWord(word)
      })
      .join('')
  }

  static toCamelCaseWord(word: string) {
    if (!word) {
      return ''
    }
    // convert hyphen separated case to camel case
    word = word.replace(/(-\w)/g, m => m[1].toUpperCase())
    // capitalize first letter
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  static toTitleCaseWord(word: string) {
    if (!word) {
      return ''
    }
    return word.replace(/\w\S*/g, txt => {
      return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
    })
  }

  static applyPatchIfExists(
    swaggerFilePath: string,
    possibleSwaggerPatchFilePath: string,
    swaggerPatchedFilePath: string,
    swaggerPatchedDir: string
  ) {
    if (!fs.existsSync(swaggerPatchedDir)) {
      fs.mkdirSync(swaggerPatchedDir, { recursive: true })
    }

    if (!fs.existsSync(possibleSwaggerPatchFilePath)) {
      fs.copyFileSync(swaggerFilePath, swaggerPatchedFilePath)
      return
    }
    const swaggerContent = JSON.parse(fs.readFileSync(swaggerFilePath, 'utf8'))
    const swaggerPatchFileContent: Operation[] = JSON.parse(fs.readFileSync(possibleSwaggerPatchFilePath, 'utf8'))

    // Check out the existence of the paths listed in the Swagger JSON patch.
    for (const patchEntry of swaggerPatchFileContent) {
      // Trim out empty string array elements.
      const segments = patchEntry.path.split('/').filter(Boolean)
      let currentNode = swaggerContent
      // This `aggregatedPath` is to pinpoint the erroring path, so that we can display the exact path where it errors
      // and not the entire `patchEntry.path`.
      let aggregatedPath = ''

      for (let i = 0; i < segments.length; i++) {
        const segment = segments[i]
        aggregatedPath += `/${segment}`

        // Replace the JSON pointers.
        // More on this: https://jsonpatch.com/#json-pointer.
        const effectiveSegment = segment.replace(/(~1)/g, '/').replace(/(~0)/g, '~')

        if (!currentNode[effectiveSegment]) {
          if (i + 1 === segments.length && patchEntry.op === 'add') {
            // Only allow missing node when we're adding a node and we're at the end of the segment array.
            // No-op.
          } else {
            // If it's not leaf node yet, then throw error.
            // If it's leaf node and the mode isn't "add", then throw error.
            throw new Error(
              [
                `JSON patch error: operation "${patchEntry.op}" on path "${aggregatedPath}" fails because the path doesn't exist in ${swaggerFilePath}. This may be caused by:\n`,
                '1. The related service has patched the service, so patch is no longer needed.',
                '2. There is a breaking change on the service that causes the path to change.\n',
                `In any case, revisit this file: "${possibleSwaggerPatchFilePath}", then try again.\n`
              ].join('\n')
            )
          }
        }

        currentNode = currentNode[effectiveSegment]
      }
    }

    const { newDocument } = applyPatch(swaggerContent, swaggerPatchFileContent)
    fs.writeFileSync(swaggerPatchedFilePath, JSON.stringify(newDocument, null, 2))
  }

  static getRelativePathToWebSdkSrcFolder(srcFolder: string, targetSrcFolder: string) {
    // For example:
    // Input: ../../accelbyte-typescript-sdk/packages/sdk/src/generated/...
    // Output: ./generated/...
    // Need to replace for Windows as `/` becomes `\`.
    const replaced = srcFolder.replace(/\\/g, '/')
    return replaced.replace(/\\/g, '/').replace(targetSrcFolder, './')
  }

  static prependCopyrightHeader = (content: string): string => {
    const currentYear = new Date().getFullYear()
    return `/* 
 * Copyright (c) 2022${currentYear > 2022 ? `-${currentYear}` : ''} AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
${content}`
  }

  static sortPathParamsByPath = (pathParams: EndpointParameters[], path: string) => {
    const params = path.match(/{\w*}/g) || []
    const cleanParams = params.map(param => param.replace('{', '').replace('}', ''))
    return pathParams.sort((a, b) => cleanParams.indexOf(a.name) - cleanParams.indexOf(b.name))
  }
}

const mappedMethod = (httpMethod: string, isForm: boolean, permissionType?: PermissionType) => {
  if (httpMethod === 'get') {
    // return 'fetch'
    return 'get'
  } else if (httpMethod === 'post' && isForm) {
    return 'post'
  } else if (httpMethod === 'post' && permissionType === 'READ') {
    return 'fetch'
  } else if (httpMethod === 'post' && permissionType === 'UPDATE') {
    return 'update'
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

const resolveConflicts = ({ path, generatedMethod, testedGeneratedMethod, existingMethods }) => {
  let _testedGenMethod = testedGeneratedMethod
  try {
    testConflict(path, _testedGenMethod, existingMethods)
  } catch (e) {
    if (path.indexOf('/namespaces/') >= 0) {
      generatedMethod += '_ByNS'
      // below avoids adding double suffix _ByNS_admin
      _testedGenMethod += '_ByNS'
    }
  }

  try {
    testConflict(path, _testedGenMethod, existingMethods)
  } catch (e) {
    if (path.indexOf('/admin/') >= 0) {
      generatedMethod += '_admin'
      _testedGenMethod += '_admin'
    }
  }

  // Still failed? Try using the parent resource segment (the word before the last {param}) to disambiguate.
  // e.g. /changes/{id}/systems and /releases/{id}/systems both drop 'changes'/'releases' during generation,
  // /changes/{id}/systems -> getSystemsReleaseIntegratorIntegration_ById_ByChanges
  try {
    testConflict(path, _testedGenMethod, existingMethods)
  } catch (e) {
    const parentSegmentMatch = path.match(/\/([^/{}]+)\/{[^}]+}\/[^/]*$/)

    if (parentSegmentMatch) {
      const suffix = '_By' + _.upperFirst(_.camelCase(parentSegmentMatch[1]))
      generatedMethod += suffix
      _testedGenMethod += suffix
    }
  }

  // Still failed? dump it and fail the code gen build
  testConflict(path, _testedGenMethod, existingMethods)

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

const isSwaggerIntegerType = (type: string) => {
  return type === 'integer' || type === 'int'
}
