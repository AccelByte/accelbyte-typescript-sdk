/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { ConfigValueResponseV3 } from '../generated-definitions/ConfigValueResponseV3.js'
import { InternalConfigResponseV3 } from '../generated-definitions/InternalConfigResponseV3.js'
import { Config$ } from './endpoints/Config$.js'

export function ConfigApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getConfigPublic_v3(): Promise<AxiosResponse<InternalConfigResponseV3>> {
    const $ = new Config$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigPublic_v3()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getConfig_ByConfigKey_v3(configKey: string): Promise<AxiosResponse<ConfigValueResponseV3>> {
    const $ = new Config$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfig_ByConfigKey_v3(configKey)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    getConfigPublic_v3,
    /**
     * This endpoint return the value of config key. The namespace should be publisher namespace or studio namespace. Note: this endpoint does not need any authorization. **Supported config key:** * uniqueDisplayNameEnabled * usernameDisabled * mandatoryEmailVerificationEnabled * verificationCodeType If the key is verificationCodeType, then possible value format will be &#39;{collection}:{N}&#39;; example: &#39;ABCDEFGHI:6&#39;, &#39;ABCDEFGHI1234:8&#39;,&#39;01234567894:7&#39;
     */
    getConfig_ByConfigKey_v3
  }
}
