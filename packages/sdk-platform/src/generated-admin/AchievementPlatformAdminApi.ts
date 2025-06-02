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
import { SteamAchievementUpdateRequest } from '../generated-definitions/SteamAchievementUpdateRequest.js'
import { XblAchievementUpdateRequest } from '../generated-definitions/XblAchievementUpdateRequest.js'
import { XblUserAchievements } from '../generated-definitions/XblUserAchievements.js'
import { AchievementPlatformAdmin$ } from './endpoints/AchievementPlatformAdmin$.js'

export function AchievementPlatformAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getAchievementXbl_ByUserId(
    userId: string,
    queryParams: { xboxUserId: string | null }
  ): Promise<AxiosResponse<XblUserAchievements>> {
    const $ = new AchievementPlatformAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAchievementXbl_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateAchievementXbl_ByUserId(userId: string, data: XblAchievementUpdateRequest): Promise<AxiosResponse<unknown>> {
    const $ = new AchievementPlatformAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateAchievementXbl_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateAchievementSteam_ByUserId(userId: string, data: SteamAchievementUpdateRequest): Promise<AxiosResponse<unknown>> {
    const $ = new AchievementPlatformAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateAchievementSteam_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to get xbox live user achievements(Only for test).
     */
    getAchievementXbl_ByUserId,
    /**
     * This API is used to update xbox live achievements.
     */
    updateAchievementXbl_ByUserId,
    /**
     * This API is used to unlock steam achievement.
     */
    updateAchievementSteam_ByUserId
  }
}
