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
import { AchievementPlatformAdmin$ } from './endpoints/AchievementPlatformAdmin$.js'
import { SteamAchievementUpdateRequest } from '../generated-definitions/SteamAchievementUpdateRequest.js'
import { XblAchievementUpdateRequest } from '../generated-definitions/XblAchievementUpdateRequest.js'
import { XblUserAchievements } from '../generated-definitions/XblUserAchievements.js'

export function AchievementPlatformAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This API is used to get xbox live user achievements(Only for test).&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getAchievementXbl_ByUserId(userId: string, queryParams: { xboxUserId: string | null }): Promise<XblUserAchievements> {
    const $ = new AchievementPlatformAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAchievementXbl_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to update xbox live achievements.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateAchievementXbl_ByUserId(userId: string, data: XblAchievementUpdateRequest): Promise<unknown> {
    const $ = new AchievementPlatformAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateAchievementXbl_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to unlock steam achievement.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateAchievementSteam_ByUserId(userId: string, data: SteamAchievementUpdateRequest): Promise<unknown> {
    const $ = new AchievementPlatformAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateAchievementSteam_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getAchievementXbl_ByUserId,
    updateAchievementXbl_ByUserId,
    updateAchievementSteam_ByUserId
  }
}
