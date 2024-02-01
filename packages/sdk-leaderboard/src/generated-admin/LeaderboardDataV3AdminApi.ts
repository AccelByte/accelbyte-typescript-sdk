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
import { GetLeaderboardRankingResp } from '../generated-definitions/GetLeaderboardRankingResp.js'
import { LeaderboardDataV3Admin$ } from './endpoints/LeaderboardDataV3Admin$.js'
import { UserRankingResponseV3 } from '../generated-definitions/UserRankingResponseV3.js'

export function LeaderboardDataV3AdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Delete user ranking across leaderboard Required permission: ADMIN:NAMESPACE:{namespace}:LEADERBOARD:USER [DELETE] Remove entry with provided userId from leaderboard.
   */
  async function deleteUser_ByUserId(userId: string, queryParams: { leaderboardCode: string[] }): Promise<unknown> {
    const $ = new LeaderboardDataV3Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteUser_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;&lt;b&gt;[Test Facility Only]&lt;/b&gt;&lt;/p&gt; &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [DELETE]&#39;&lt;/p&gt; &lt;p&gt;This endpoint will delete user ranking by leaderboard code&lt;/p&gt; &lt;p&gt;Note: this endpoint only works on development environment.&lt;/p&gt;
   */
  async function deleteReset_ByLeaderboardCode(leaderboardCode: string): Promise<unknown> {
    const $ = new LeaderboardDataV3Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteReset_ByLeaderboardCode(leaderboardCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [READ]&#39;&lt;/p&gt; &lt;p&gt;Get rankings in an all time leaderboard.&lt;/p&gt;
   */
  async function getAlltime_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<GetLeaderboardRankingResp> {
    const $ = new LeaderboardDataV3Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getAlltime_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete user ranking Required permission: ADMIN:NAMESPACE:{namespace}:LEADERBOARD:USER [DELETE] Remove entry with provided userId from leaderboard. If leaderboard with given leaderboard code not found, it will return http status not found (404). If the leaderboard is found and no entry found in it, it will still return success (204)
   */
  async function deleteUser_ByLeaderboardCode_ByUserId(leaderboardCode: string, userId: string): Promise<unknown> {
    const $ = new LeaderboardDataV3Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteUser_ByLeaderboardCode_ByUserId(leaderboardCode, userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [READ]&#39;&lt;/p&gt; &lt;p&gt;Get user ranking in leaderboard&lt;/p&gt;
   */
  async function getUser_ByLeaderboardCode_ByUserId(leaderboardCode: string, userId: string): Promise<UserRankingResponseV3> {
    const $ = new LeaderboardDataV3Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getUser_ByLeaderboardCode_ByUserId(leaderboardCode, userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [READ]&#39;&lt;/p&gt; &lt;p&gt;Get rankings in cycle leaderboard.&lt;/p&gt;
   */
  async function getCycle_ByLeaderboardCode_ByCycleId(
    leaderboardCode: string,
    cycleId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<GetLeaderboardRankingResp> {
    const $ = new LeaderboardDataV3Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getCycle_ByLeaderboardCode_ByCycleId(leaderboardCode, cycleId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteUser_ByUserId,
    deleteReset_ByLeaderboardCode,
    getAlltime_ByLeaderboardCode,
    deleteUser_ByLeaderboardCode_ByUserId,
    getUser_ByLeaderboardCode_ByUserId,
    getCycle_ByLeaderboardCode_ByCycleId
  }
}
