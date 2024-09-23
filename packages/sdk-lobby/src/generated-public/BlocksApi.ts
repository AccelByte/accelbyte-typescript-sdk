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
import { NativeUserBlockRequest } from '../generated-definitions/NativeUserBlockRequest.js'
import { NativeUserBlockResponseArray } from '../generated-definitions/NativeUserBlockResponseArray.js'
import { Blocks$ } from './endpoints/Blocks$.js'

export function BlocksApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function patchSyncMeBlock(data: NativeUserBlockRequest[]): Promise<AxiosResponse<NativeUserBlockResponseArray>> {
    const $ = new Blocks$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchSyncMeBlock(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Sync blocked user using server to server call to native first party server. Supported platforms: ps5, ps4 and pspc : the default environment would be sp-int, can be override using psnEnv. psnEnv consist of sp-int (default), prod-qa, np
     */
    patchSyncMeBlock
  }
}
