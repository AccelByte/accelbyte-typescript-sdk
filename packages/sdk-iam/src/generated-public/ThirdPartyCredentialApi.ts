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
import { PublicThirdPartyPlatformInfoArray } from '../generated-definitions/PublicThirdPartyPlatformInfoArray.js'
import { ThirdPartyCredential$ } from './endpoints/ThirdPartyCredential$.js'

export function ThirdPartyCredentialApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getPlatformsClientsOidc_v3(queryParams: {
    clientId: string | null
  }): Promise<AxiosResponse<PublicThirdPartyPlatformInfoArray>> {
    const $ = new ThirdPartyCredential$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlatformsClientsOidc_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPlatformsClientsActive_v3(): Promise<AxiosResponse<PublicThirdPartyPlatformInfoArray>> {
    const $ = new ThirdPartyCredential$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlatformsClientsActive_v3()
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This is the Public API to Get All Active OIDC Platform Credential By Client ID
     */
    getPlatformsClientsOidc_v3,
    /**
     * This is the Public API to Get All Active 3rd Platform Credential.
     */
    getPlatformsClientsActive_v3
  }
}
