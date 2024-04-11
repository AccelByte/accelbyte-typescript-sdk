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
import { ArchiveLeaderboardSignedUrlResponseArray } from '../generated-definitions/ArchiveLeaderboardSignedUrlResponseArray.js'
import { GetLeaderboardRankingResp } from '../generated-definitions/GetLeaderboardRankingResp.js'
import { GetPublicLeaderboardRankingResponse } from '../generated-definitions/GetPublicLeaderboardRankingResponse.js'
import { LeaderboardData$ } from './endpoints/LeaderboardData$.js'
import { UserRankingResponse } from '../generated-definitions/UserRankingResponse.js'

export function LeaderboardDataApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * &lt;p&gt;Get rankings in current week leaderboard.&lt;/p&gt;
   */
  async function getWeek_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<GetLeaderboardRankingResp> {
    const $ = new LeaderboardData$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getWeek_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Get rankings in current month leaderboard.&lt;/p&gt;
   */
  async function getMonth_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<GetLeaderboardRankingResp> {
    const $ = new LeaderboardData$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getMonth_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Get rankings in today leaderboard.&lt;/p&gt;
   */
  async function getToday_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<GetLeaderboardRankingResp> {
    const $ = new LeaderboardData$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getToday_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Get rankings in current season leaderboard.&lt;/p&gt;
   */
  async function getSeason_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<GetLeaderboardRankingResp> {
    const $ = new LeaderboardData$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getSeason_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  &lt;p&gt;Get rankings in an all time leaderboard.&lt;/p&gt;
   */
  async function getAlltime_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<GetLeaderboardRankingResp> {
    const $ = new LeaderboardData$(Network.create(requestConfig), namespace, isZodEnabled)
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
    const $ = new LeaderboardData$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getAlltime_ByLeaderboardCode_ByNS(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  &lt;p&gt;Get signed url in an all time leaderboard that archived. NOTE: This will be a bulk endpoint to get sign url&lt;/p&gt;
   */
  async function getArchived_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams: { leaderboardCodes: string | null; slug?: string | null }
  ): Promise<ArchiveLeaderboardSignedUrlResponseArray> {
    const $ = new LeaderboardData$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getArchived_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete user ranking Remove entry with provided userId from leaderboard. If leaderboard with given leaderboard code not found, it will return http status not found (404). If the leaderboard is found and no entry found in it, it will still return success (204)
   */
  async function deleteUser_ByLeaderboardCode_ByUserId(leaderboardCode: string, userId: string): Promise<unknown> {
    const $ = new LeaderboardData$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteUser_ByLeaderboardCode_ByUserId(leaderboardCode, userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Get user ranking in leaderboard&lt;/p&gt;
   */
  async function getUser_ByLeaderboardCode_ByUserId(
    leaderboardCode: string,
    userId: string,
    queryParams?: { previousVersion?: number }
  ): Promise<UserRankingResponse> {
    const $ = new LeaderboardData$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getUser_ByLeaderboardCode_ByUserId(leaderboardCode, userId, queryParams)
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
    deleteUser_ByLeaderboardCode_ByUserId,
    getUser_ByLeaderboardCode_ByUserId
  }
}
