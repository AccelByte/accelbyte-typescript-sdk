/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { InputValidationConfigVersion } from '../generated-definitions/InputValidationConfigVersion.js'
import { InputValidationsPublicResponse } from '../generated-definitions/InputValidationsPublicResponse.js'
import { InputValidations$ } from './endpoints/InputValidations$.js'

export function InputValidationsApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getInputValidations_v3(queryParams?: {
    defaultOnEmpty?: boolean | null
    languageCode?: string | null
  }): Promise<AxiosResponse<InputValidationsPublicResponse>> {
    const $ = new InputValidations$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInputValidations_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getInputValidation_ByField_v3(field: string): Promise<AxiosResponse<InputValidationConfigVersion>> {
    const $ = new InputValidations$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInputValidation_ByField_v3(field)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * No role required This endpoint is to get list of input validation configuration. &lt;code&gt;regex&lt;/code&gt; parameter will be returned if &lt;code&gt;isCustomRegex&lt;/code&gt; is true. Otherwise, it will be empty.
     */
    getInputValidations_v3,
    /**
     * This endpoint is to get input validation configuration by field.
     */
    getInputValidation_ByField_v3
  }
}
