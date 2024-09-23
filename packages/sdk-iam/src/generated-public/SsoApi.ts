/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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

import { Sso$ } from './endpoints/Sso$.js'

export function SsoApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getSso_ByPlatformId_v3(platformId: string, queryParams?: { payload?: string | null }): Promise<AxiosResponse<unknown>> {
    const $ = new Sso$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSso_ByPlatformId_v3(platformId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createLogout_ByPlatformId_v3(platformId: string): Promise<AxiosResponse<unknown>> {
    const $ = new Sso$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createLogout_ByPlatformId_v3(platformId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    getSso_ByPlatformId_v3,
    /**
     * Logout user&#39;s session on platform that logged in using SSO. Supported platforms: - discourse
     */
    createLogout_ByPlatformId_v3
  }
}
