/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { GlobalAchievements$ } from './endpoints/GlobalAchievements$.js'
import { PaginatedContributorResponse } from './definitions/PaginatedContributorResponse.js'
import { PaginatedGlobalAchievementResponse } from './definitions/PaginatedGlobalAchievementResponse.js'
import { PaginatedUserContributionResponse } from './definitions/PaginatedUserContributionResponse.js'

export function GlobalAchievementsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt; &lt;p&gt;Note:&lt;/p&gt; &lt;p&gt; Global achievement status value mean: &lt;code&gt;status = 1 (in progress)&lt;/code&gt; and &lt;code&gt;status = 2 (unlocked)&lt;/code&gt;&lt;/p&gt;
   */
  async function getGlobalAchievements(queryParams?: {
    achievementCodes?: string | null
    limit?: number
    offset?: number
    sortBy?: string | null
    status?: string | null
    tags?: string[]
  }): Promise<PaginatedGlobalAchievementResponse> {
    const $ = new GlobalAchievements$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getGlobalAchievements(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
   */
  async function getGlobalAchievements_ByUserId(
    userId: string,
    queryParams?: { achievementCodes?: string | null; limit?: number; offset?: number; sortBy?: string | null; tags?: string[] }
  ): Promise<PaginatedUserContributionResponse> {
    const $ = new GlobalAchievements$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getGlobalAchievements_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
   */
  async function getContributorsGlobal_ByAchievementCode(
    achievementCode: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null }
  ): Promise<PaginatedContributorResponse> {
    const $ = new GlobalAchievements$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getContributorsGlobal_ByAchievementCode(achievementCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt; &lt;p&gt;Note:&lt;/p&gt; &lt;p&gt; Global achievement should be unlocked to claim the reward. Only contributor of global achievement are eligible for rewards
   */
  async function createClaimGlobal_ByUserId_ByAchievementCode(achievementCode: string, userId: string): Promise<unknown> {
    const $ = new GlobalAchievements$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createClaimGlobal_ByUserId_ByAchievementCode(achievementCode, userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getGlobalAchievements,
    getGlobalAchievements_ByUserId,
    getContributorsGlobal_ByAchievementCode,
    createClaimGlobal_ByUserId_ByAchievementCode
  }
}
