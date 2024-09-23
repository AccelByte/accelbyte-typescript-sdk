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
import { PlatformAccountClosureClientRequest } from '../generated-definitions/PlatformAccountClosureClientRequest.js'
import { PlatformAccountClosureClientResponse } from '../generated-definitions/PlatformAccountClosureClientResponse.js'
import { PlatformAccountClosureClientAdmin$ } from './endpoints/PlatformAccountClosureClientAdmin$.js'

export function PlatformAccountClosureClientAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function deleteClosureClient_ByPlatform(platform: string): Promise<AxiosResponse<unknown>> {
    const $ = new PlatformAccountClosureClientAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteClosureClient_ByPlatform(platform)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getClosureClient_ByPlatform(platform: string): Promise<AxiosResponse<PlatformAccountClosureClientResponse>> {
    const $ = new PlatformAccountClosureClientAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getClosureClient_ByPlatform(platform)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateClosureClient_ByPlatform(
    platform: string,
    data: PlatformAccountClosureClientRequest
  ): Promise<AxiosResponse<unknown>> {
    const $ = new PlatformAccountClosureClientAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateClosureClient_ByPlatform(platform, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Delete platform account closure client.
     */
    deleteClosureClient_ByPlatform,
    /**
     * Get platform account closure config. Scope: account
     */
    getClosureClient_ByPlatform,
    /**
     * Update platform account closure client. Scope: account
     */
    updateClosureClient_ByPlatform
  }
}
