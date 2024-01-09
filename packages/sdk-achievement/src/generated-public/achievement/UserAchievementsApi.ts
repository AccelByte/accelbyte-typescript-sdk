/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { PaginatedUserAchievementResponse } from './definitions/PaginatedUserAchievementResponse.js'
import { UserAchievements$ } from './endpoints/UserAchievements$.js'

export function UserAchievementsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt; &lt;p&gt;Note:&lt;/p&gt; &lt;p&gt; User Achievement status value mean: &lt;code&gt;status = 1 (in progress)&lt;/code&gt; and &lt;code&gt;status = 2 (unlocked)&lt;/code&gt;&lt;/p&gt; &lt;p&gt; &lt;code&gt;achievedAt&lt;/code&gt; value will return default value: &lt;code&gt;0001-01-01T00:00:00Z&lt;/code&gt; for user achievement that locked or in progress&lt;/p&gt;
   */
  async function getAchievements_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; preferUnlocked?: boolean | null; sortBy?: string | null; tags?: string[] }
  ): Promise<PaginatedUserAchievementResponse> {
    const $ = new UserAchievements$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAchievements_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
   */
  async function updateUnlock_ByUserId_ByAchievementCode(userId: string, achievementCode: string): Promise<unknown> {
    const $ = new UserAchievements$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateUnlock_ByUserId_ByAchievementCode(userId, achievementCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getAchievements_ByUserId,
    updateUnlock_ByUserId_ByAchievementCode
  }
}
