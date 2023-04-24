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
import { PaginatedUserAchievementResponse } from './definitions/PaginatedUserAchievementResponse'
import { UserAchievements$ } from './endpoints/UserAchievements$'

export function UserAchievementsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * <p>Required permission <code>NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [READ]</code> and scope <code>social</code></p> <p>Note:</p> <p> User Achievement status value mean: <code>status = 1 (in progress)</code> and <code>status = 2 (unlocked)</code></p> <p> <code>achievedAt</code> value will return default value: <code>0001-01-01T00:00:00Z</code> for user achievement that locked or in progress</p>
   */
  async function getAchievements_ByUserId(
    userId: string,
    queryParams?: { tags?: string[]; limit?: number; offset?: number; preferUnlocked?: boolean | null; sortBy?: string | null }
  ): Promise<PaginatedUserAchievementResponse> {
    const $ = new UserAchievements$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAchievements_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required permission <code>NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [UPDATE]</code> and scope <code>social</code></p>
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
