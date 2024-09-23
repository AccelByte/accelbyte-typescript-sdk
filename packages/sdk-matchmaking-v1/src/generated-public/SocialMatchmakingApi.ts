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
import { UpdatePlayTimeWeightRequest } from '../generated-definitions/UpdatePlayTimeWeightRequest.js'
import { UpdatePlayerPlaytimeWeightResponse } from '../generated-definitions/UpdatePlayerPlaytimeWeightResponse.js'
import { SocialMatchmaking$ } from './endpoints/SocialMatchmaking$.js'

export function SocialMatchmakingApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function patchSocialPlaytimeWeight(data: UpdatePlayTimeWeightRequest): Promise<AxiosResponse<UpdatePlayerPlaytimeWeightResponse>> {
    const $ = new SocialMatchmaking$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchSocialPlaytimeWeight(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Update a connection weight between player and playtime. This endpoint is intended to be called by admin for debugging purpose on social matchmaking rule.
     */
    patchSocialPlaytimeWeight
  }
}
