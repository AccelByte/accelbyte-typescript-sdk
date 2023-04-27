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
import { ArchiveLeaderboardSignedUrlResponseArray } from './definitions/ArchiveLeaderboardSignedUrlResponseArray.js'
import { GetLeaderboardRankingResp } from './definitions/GetLeaderboardRankingResp.js'
import { GetPublicLeaderboardRankingResponse } from './definitions/GetPublicLeaderboardRankingResponse.js'
import { LeaderboardData$ } from './endpoints/LeaderboardData$.js'
import { UserRankingResponse } from './definitions/UserRankingResponse.js'

export function LeaderboardDataApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * <p>Get rankings in current week leaderboard.</p>
   */
  async function getWeek_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<GetLeaderboardRankingResp> {
    const $ = new LeaderboardData$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getWeek_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Get rankings in current month leaderboard.</p>
   */
  async function getMonth_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<GetLeaderboardRankingResp> {
    const $ = new LeaderboardData$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getMonth_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Get rankings in today leaderboard.</p>
   */
  async function getToday_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<GetLeaderboardRankingResp> {
    const $ = new LeaderboardData$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getToday_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Get rankings in current season leaderboard.</p>
   */
  async function getSeason_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<GetLeaderboardRankingResp> {
    const $ = new LeaderboardData$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getSeason_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  <p>Get rankings in an all time leaderboard.</p>
   */
  async function getAlltime_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<GetLeaderboardRankingResp> {
    const $ = new LeaderboardData$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAlltime_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get rankings in an all time leaderboard.
   */
  async function getAlltime_ByLeaderboardCode_ByNS(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<GetPublicLeaderboardRankingResponse> {
    const $ = new LeaderboardData$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAlltime_ByLeaderboardCode_ByNS(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  <p>Get signed url in an all time leaderboard that archived. NOTE: This will be a bulk endpoint to get sign url</p>
   */
  async function getArchived_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams: { leaderboardCodes: string | null; slug?: string | null }
  ): Promise<ArchiveLeaderboardSignedUrlResponseArray> {
    const $ = new LeaderboardData$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getArchived_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Get user ranking in leaderboard</p>
   */
  async function getUser_ByLeaderboardCode_ByUserId(leaderboardCode: string, userId: string): Promise<UserRankingResponse> {
    const $ = new LeaderboardData$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUser_ByLeaderboardCode_ByUserId(leaderboardCode, userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete user ranking Required permission: NAMESPACE:{namespace}:LEADERBOARD:USER:{userId} [DELETE] Remove entry with provided userId from leaderboard. If leaderboard with given leaderboard code not found, it will return http status not found (404). If the leaderboard is found and no entry found in it, it will still return success (204)
   */
  async function deleteUser_ByLeaderboardCode_ByUserId(leaderboardCode: string, userId: string): Promise<unknown> {
    const $ = new LeaderboardData$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteUser_ByLeaderboardCode_ByUserId(leaderboardCode, userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getWeek_ByLeaderboardCode,
    getMonth_ByLeaderboardCode,
    getToday_ByLeaderboardCode,
    getSeason_ByLeaderboardCode,
    getAlltime_ByLeaderboardCode,
    getAlltime_ByLeaderboardCode_ByNS,
    getArchived_ByLeaderboardCode,
    getUser_ByLeaderboardCode_ByUserId,
    deleteUser_ByLeaderboardCode_ByUserId
  }
}
