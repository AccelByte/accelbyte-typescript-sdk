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
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { AchievementPlatformAdmin$ } from './endpoints/AchievementPlatformAdmin$.js'
import { SteamAchievementUpdateRequest } from '../generated-definitions/SteamAchievementUpdateRequest.js'
import { XblAchievementUpdateRequest } from '../generated-definitions/XblAchievementUpdateRequest.js'
import { XblUserAchievements } from '../generated-definitions/XblUserAchievements.js'

export function AchievementPlatformAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * This API is used to get xbox live user achievements(Only for test).
   */
  async function getAchievementXbl_ByUserId(userId: string, queryParams: { xboxUserId: string | null }): Promise<XblUserAchievements> {
    const $ = new AchievementPlatformAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getAchievementXbl_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to update xbox live achievements.
   */
  async function updateAchievementXbl_ByUserId(userId: string, data: XblAchievementUpdateRequest): Promise<unknown> {
    const $ = new AchievementPlatformAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateAchievementXbl_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to unlock steam achievement.
   */
  async function updateAchievementSteam_ByUserId(userId: string, data: SteamAchievementUpdateRequest): Promise<unknown> {
    const $ = new AchievementPlatformAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
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
