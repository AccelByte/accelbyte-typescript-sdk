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
import { BulkUnlockAchievementRequest } from '../generated-definitions/BulkUnlockAchievementRequest.js'
import { BulkUnlockAchievementResponseArray } from '../generated-definitions/BulkUnlockAchievementResponseArray.js'
import { PaginatedUserAchievementResponse } from '../generated-definitions/PaginatedUserAchievementResponse.js'
import { UserAchievements$ } from './endpoints/UserAchievements$.js'

export function UserAchievementsApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getAchievements_ByUserId(
    userId: string,
    queryParams?: {
      limit?: number
      offset?: number
      preferUnlocked?: boolean | null
      sortBy?: 'achievedAt' | 'achievedAt:asc' | 'achievedAt:desc' | 'createdAt' | 'createdAt:asc' | 'createdAt:desc'
      tags?: string[]
    }
  ): Promise<AxiosResponse<PaginatedUserAchievementResponse>> {
    const $ = new UserAchievements$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAchievements_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateAchievementBulkUnlock_ByUserId(
    userId: string,
    data: BulkUnlockAchievementRequest
  ): Promise<AxiosResponse<BulkUnlockAchievementResponseArray>> {
    const $ = new UserAchievements$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateAchievementBulkUnlock_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateUnlock_ByUserId_ByAchievementCode(userId: string, achievementCode: string): Promise<AxiosResponse<unknown>> {
    const $ = new UserAchievements$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUnlock_ByUserId_ByAchievementCode(userId, achievementCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt; &lt;p&gt;Note:&lt;/p&gt; &lt;p&gt; User Achievement status value mean: &lt;code&gt;status = 1 (in progress)&lt;/code&gt; and &lt;code&gt;status = 2 (unlocked)&lt;/code&gt;&lt;/p&gt; &lt;p&gt; &lt;code&gt;achievedAt&lt;/code&gt; value will return default value: &lt;code&gt;0001-01-01T00:00:00Z&lt;/code&gt; for user achievement that locked or in progress&lt;/p&gt;
     */
    getAchievements_ByUserId,
    /**
     * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
     */
    updateAchievementBulkUnlock_ByUserId,
    /**
     * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
     */
    updateUnlock_ByUserId_ByAchievementCode
  }
}
