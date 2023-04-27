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
import { Achievements$ } from './endpoints/Achievements$.js'
import { PublicAchievementResponse } from './definitions/PublicAchievementResponse.js'
import { PublicAchievementsResponse } from './definitions/PublicAchievementsResponse.js'

export function AchievementsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * <p>Required permission <code>NAMESPACE:{namespace}:ACHIEVEMENT [READ]</code> and scope <code>social</code></p>
   */
  async function getAchievements(queryParams: {
    tags?: string[]
    sortBy?: string | null
    language: string | null
    limit?: number
    offset?: number
    global?: boolean | null
  }): Promise<PublicAchievementsResponse> {
    const $ = new Achievements$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAchievements(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required permission <code>NAMESPACE:{namespace}:ACHIEVEMENT [READ]</code> and scope <code>social</code></p>
   */
  async function getAchievement_ByAchievementCode(
    achievementCode: string,
    queryParams: { language: string | null }
  ): Promise<PublicAchievementResponse> {
    const $ = new Achievements$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAchievement_ByAchievementCode(achievementCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getAchievements,
    getAchievement_ByAchievementCode
  }
}
