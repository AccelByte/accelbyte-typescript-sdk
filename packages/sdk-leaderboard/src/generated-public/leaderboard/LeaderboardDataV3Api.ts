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
import { GetLeaderboardRankingResp } from './definitions/GetLeaderboardRankingResp.js'
import { LeaderboardDataV3$ } from './endpoints/LeaderboardDataV3$.js'
import { UserRankingResponseV3 } from './definitions/UserRankingResponseV3.js'

export function LeaderboardDataV3Api(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * &lt;p&gt;Get rankings in an all time leaderboard.&lt;/p&gt;
   */
  async function getAlltime_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<GetLeaderboardRankingResp> {
    const $ = new LeaderboardDataV3$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAlltime_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Get user ranking in leaderboard&lt;/p&gt;
   */
  async function getUser_ByLeaderboardCode_ByUserId(leaderboardCode: string, userId: string): Promise<UserRankingResponseV3> {
    const $ = new LeaderboardDataV3$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUser_ByLeaderboardCode_ByUserId(leaderboardCode, userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Get rankings in cycle leaderboard.&lt;/p&gt;
   */
  async function getCycle_ByLeaderboardCode_ByCycleId(
    leaderboardCode: string,
    cycleId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<GetLeaderboardRankingResp> {
    const $ = new LeaderboardDataV3$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getCycle_ByLeaderboardCode_ByCycleId(leaderboardCode, cycleId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getAlltime_ByLeaderboardCode,
    getUser_ByLeaderboardCode_ByUserId,
    getCycle_ByLeaderboardCode_ByCycleId
  }
}
