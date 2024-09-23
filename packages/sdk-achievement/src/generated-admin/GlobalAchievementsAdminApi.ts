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
import { PaginatedContributorResponse } from '../generated-definitions/PaginatedContributorResponse.js'
import { PaginatedGlobalAchievementResponse } from '../generated-definitions/PaginatedGlobalAchievementResponse.js'
import { PaginatedUserContributionResponse } from '../generated-definitions/PaginatedUserContributionResponse.js'
import { GlobalAchievementsAdmin$ } from './endpoints/GlobalAchievementsAdmin$.js'

export function GlobalAchievementsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getGlobalAchievements(queryParams?: {
    achievementCodes?: string | null
    limit?: number
    offset?: number
    sortBy?: string | null
    status?: string | null
    tags?: string[]
  }): Promise<AxiosResponse<PaginatedGlobalAchievementResponse>> {
    const $ = new GlobalAchievementsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGlobalAchievements(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getGlobalAchievements_ByUserId(
    userId: string,
    queryParams?: { achievementCodes?: string | null; limit?: number; offset?: number; sortBy?: string | null; tags?: string[] }
  ): Promise<AxiosResponse<PaginatedUserContributionResponse>> {
    const $ = new GlobalAchievementsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGlobalAchievements_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteResetGlobal_ByAchievementCode(achievementCode: string): Promise<AxiosResponse<unknown>> {
    const $ = new GlobalAchievementsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteResetGlobal_ByAchievementCode(achievementCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getContributorsGlobal_ByAchievementCode(
    achievementCode: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null }
  ): Promise<AxiosResponse<PaginatedContributorResponse>> {
    const $ = new GlobalAchievementsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContributorsGlobal_ByAchievementCode(achievementCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt; &lt;p&gt;Note:&lt;/p&gt; &lt;p&gt; Global achievement status value mean: &lt;code&gt;status = 1 (in progress)&lt;/code&gt; and &lt;code&gt;status = 2 (unlocked)&lt;/code&gt;&lt;/p&gt;
     */
    getGlobalAchievements,
    /**
     * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
     */
    getGlobalAchievements_ByUserId,
    /**
     * &lt;p&gt;[TEST FACILITY ONLY]&lt;/p&gt; &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [DELETE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt; &lt;/p&gt;
     */
    deleteResetGlobal_ByAchievementCode,
    /**
     * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
     */
    getContributorsGlobal_ByAchievementCode
  }
}
