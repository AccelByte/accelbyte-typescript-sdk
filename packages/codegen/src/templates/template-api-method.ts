/*
 * Copyright (c) 2018-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { getResponseType } from '../helpers/utils'
import { ParserUtils } from '../ParserUtils'
import { EndpointParameters } from '../Swagger'

export const templateApiMethod = ({
  classMethod,
  httpMethod,
  path,
  pathParams,
  bodyParams,
  responseClasses,
  classGenName,
  methodParams,
  methodParamsNoTypes,
  xSecurity
}: {
  classMethod: string
  httpMethod: string
  path: string
  pathParams: EndpointParameters[]
  bodyParams: EndpointParameters[]
  responseClasses: string[]
  classGenName: string
  methodParams: string
  methodParamsNoTypes: string
  // Reference: https://accelbyte.atlassian.net/wiki/spaces/CW/pages/2991423677/Draft+Swagger+validation+for+API+explorer+content+proposal.
  // Endpoint with `x-security` means it requires authentication.
  xSecurity: Array<Record<string, string[]>> | undefined
}) => {
  let newPath = `'${path}'`
  let snippetMethod = ''

  for (const pathParam of pathParams) {
    const type = ParserUtils.parseType(pathParam)
    const pName = pathParam.name === 'namespace' ? 'this.namespace' : pathParam.name
    if (path.match(`{${pathParam.name}}`)) {
      if (type === 'string') {
        newPath = `${newPath}.replace('{${pathParam.name}}', ${pName})`
      } else {
        newPath = `${newPath}.replace('{${pathParam.name}}', String(${pName}))`
      }
    }
  }

  const snippetShellArgs: string[] = ['--location --request', `${httpMethod} '__DOMAIN__${path}'`, "--header 'accept: application/json'"]
  const snippetApiArgs: string[] = []

  // Admin paths _usually_ always require authentication.
  // If it's public, then it can't be helped, we need to rely on `x-security` that's provided from the domain service teams.
  if (xSecurity !== undefined || path.includes('/admin')) {
    snippetShellArgs.push("--header 'Authorization: Bearer {access_token}'")
    snippetApiArgs.push("{ axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } }".trim())
  }

  if (httpMethod !== 'get') {
    const curlParams = bodyParams?.map(ob => {
      return ` "${ob.name}": ""`
    })

    // Prevent sending `--data-raw` in case of `DELETE` method without body.
    if (curlParams.length > 0) {
      snippetShellArgs.push(`--data-raw '{ ${curlParams}}'`)
    }
  }

  const snippetShell = `curl ${snippetShellArgs.join(' \\\n    ')}`

  const { responseType, responseTypeInAxiosResponse } = getResponseType({ responseClasses })

  const methodImpl = `
  async function ${classMethod}(${methodParams}): ${responseTypeInAxiosResponse} {
    const $ = new ${classGenName}(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.${classMethod}(${methodParamsNoTypes})
    if (resp.error) throw resp.error
    return resp.response
  }
  `
  const snippetPromiseString = responseType !== 'unknown' ? `Promise<${responseType}>` : 'Promise'
  snippetMethod += `${classMethod}(${methodParams}) \n   // return ${snippetPromiseString}`

  return {
    generatedMethodString: methodImpl,
    snippetApiArgs,
    snippetMethod,
    snippetShell
  }
}
