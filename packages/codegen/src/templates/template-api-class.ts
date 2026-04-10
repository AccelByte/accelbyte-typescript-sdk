/*
 * Copyright (c) 2018-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { generateImports } from './template-class'

const getImportableVarMap = () => ({
  '@accelbyte/sdk': ['CodeGenUtil', 'Response', 'Validate', 'SdkSetConfigParam', 'Network', 'AccelByteSDK'],
  axios: ['AxiosDefaults', 'HeadersDefaults']
})

const makeNewImportVarMap = () => ({
  '@accelbyte/sdk': ['AccelByteSDK', 'SdkSetConfigParam', 'ApiUtils', 'Network'],
  axios: ['AxiosRequestConfig', 'AxiosResponse']
})

const API_TYPE_ONLY_VARS = new Set([
  'AxiosRequestConfig',
  'AxiosResponse',
  'AxiosDefaults',
  'HeadersDefaults',
  'AccelByteSDK',
  'SdkSetConfigParam',
  'Response'
])

export const templateApiClass = (
  className: string,
  body: string,
  importStatements: string[],
  returnMethods: Record<string, string>
): string => {
  const returnsMethodsWithDescription = Object.keys(returnMethods).reduce((acc, key) => {
    acc += `
    ${returnMethods[key]}\n${key},`
    return acc
  }, '')
  const $className = className.replace(/Api$/, '$')
  return `/**
 * AUTO GENERATED
 */
${generateImports(body, importStatements, makeNewImportVarMap(), getImportableVarMap(), API_TYPE_ONLY_VARS)}
${`import { ${$className} } from './endpoints/${$className}.js'\n`}

export function ${className}(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  ${body}

  return {
    ${returnsMethodsWithDescription}
  }
}
  `
}
