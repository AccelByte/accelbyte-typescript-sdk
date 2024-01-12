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
import { ArchiveLeaderboardReq } from '../generated-definitions/ArchiveLeaderboardReq.js'
import { ArchiveLeaderboardSignedUrlResponseArray } from '../generated-definitions/ArchiveLeaderboardSignedUrlResponseArray.js'
import { GetLeaderboardRankingResp } from '../generated-definitions/GetLeaderboardRankingResp.js'
import { LeaderboardDataAdmin$ } from './endpoints/LeaderboardDataAdmin$.js'
import { UpdateUserPointAdminV1Request } from '../generated-definitions/UpdateUserPointAdminV1Request.js'
import { UpdateUserPointAdminV1Response } from '../generated-definitions/UpdateUserPointAdminV1Response.js'
import { UserRankingResponse } from '../generated-definitions/UserRankingResponse.js'

export function LeaderboardDataAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Delete user ranking across leaderboard Required permission: ADMIN:NAMESPACE:{namespace}:LEADERBOARD:USER [DELETE] Remove entry with provided userId from leaderboard.
   */
  async function deleteUser_ByUserId(userId: string, queryParams: { leaderboardCode: string[] }): Promise<unknown> {
    const $ = new LeaderboardDataAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteUser_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Admin Get signed url in an all time leaderboard that archived. Notes: This will be a bulk endpoint to get sign url&lt;/p&gt;
   */
  async function getLeaderboardsArchived(queryParams: {
    leaderboardCodes: string | null
    slug?: string | null
  }): Promise<ArchiveLeaderboardSignedUrlResponseArray> {
    const $ = new LeaderboardDataAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getLeaderboardsArchived(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [CREATE]&#39;&lt;/p&gt; &lt;p&gt;Archive leaderboard ranking data for specified leaderboard codes. NOTE: This will remove all data of the leaderboard on every slug, remove the leaderboard code on stat mapping, and remove the leaderboard on the queue reset. This will be a bulk endpoint&lt;/p&gt;
   */
  async function createLeaderboardArchived(data: ArchiveLeaderboardReq): Promise<unknown> {
    const $ = new LeaderboardDataAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createLeaderboardArchived(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [READ]&#39;&lt;/p&gt; &lt;p&gt;Get rankings in current week leaderboard.&lt;/p&gt;
   */
  async function getWeek_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<GetLeaderboardRankingResp> {
    const $ = new LeaderboardDataAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getWeek_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [READ]&#39;&lt;/p&gt; &lt;p&gt;Get rankings in current month leaderboard.&lt;/p&gt;
   */
  async function getMonth_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<GetLeaderboardRankingResp> {
    const $ = new LeaderboardDataAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getMonth_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;&lt;b&gt;[Test Facility Only]&lt;/b&gt;&lt;/p&gt; &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [DELETE]&#39;&lt;/p&gt; &lt;p&gt;This endpoint will delete user ranking by leaderboard code&lt;/p&gt; &lt;p&gt;Note: this endpoint only works on development environment.&lt;/p&gt;
   */
  async function deleteReset_ByLeaderboardCode(leaderboardCode: string): Promise<unknown> {
    const $ = new LeaderboardDataAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteReset_ByLeaderboardCode(leaderboardCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [READ]&#39;&lt;/p&gt; &lt;p&gt;Get rankings in today leaderboard.&lt;/p&gt;
   */
  async function getToday_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<GetLeaderboardRankingResp> {
    const $ = new LeaderboardDataAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getToday_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [READ]&#39;&lt;/p&gt; &lt;p&gt;Get rankings in current season leaderboard.&lt;/p&gt;
   */
  async function getSeason_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<GetLeaderboardRankingResp> {
    const $ = new LeaderboardDataAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getSeason_ByLeaderboardCode(leaderboardCode, queryParams)
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
    const $ = new LeaderboardDataAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAlltime_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete user ranking Required permission: ADMIN:NAMESPACE:{namespace}:LEADERBOARD:USER [DELETE] Remove entry with provided userId from leaderboard. If leaderboard with given leaderboard code not found, it will return http status not found (404). If the leaderboard is found and no entry found in it, it will still return success (204)
   */
  async function deleteUser_ByLeaderboardCode_ByUserId(leaderboardCode: string, userId: string): Promise<unknown> {
    const $ = new LeaderboardDataAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteUser_ByLeaderboardCode_ByUserId(leaderboardCode, userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [READ]&#39;&lt;/p&gt; &lt;p&gt;Get user ranking in leaderboard&lt;/p&gt;
   */
  async function getUser_ByLeaderboardCode_ByUserId(
    leaderboardCode: string,
    userId: string,
    queryParams?: { previousVersion?: number }
  ): Promise<UserRankingResponse> {
    const $ = new LeaderboardDataAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUser_ByLeaderboardCode_ByUserId(leaderboardCode, userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Update user point in a leaderboard. This endpoint uses for test utility only.&lt;/p&gt; &lt;p&gt;Other detail info:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;Required permission: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:(userId):LEADERBOARD&#34;, action=4 (UPDATE)&lt;/li&gt; &lt;li&gt;Returns: user ranking&lt;/li&gt; &lt;/ul&gt;
   */
  async function updateUser_ByLeaderboardCode_ByUserId(
    leaderboardCode: string,
    userId: string,
    data: UpdateUserPointAdminV1Request
  ): Promise<UpdateUserPointAdminV1Response> {
    const $ = new LeaderboardDataAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateUser_ByLeaderboardCode_ByUserId(leaderboardCode, userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteUser_ByUserId,
    getLeaderboardsArchived,
    createLeaderboardArchived,
    getWeek_ByLeaderboardCode,
    getMonth_ByLeaderboardCode,
    deleteReset_ByLeaderboardCode,
    getToday_ByLeaderboardCode,
    getSeason_ByLeaderboardCode,
    getAlltime_ByLeaderboardCode,
    deleteUser_ByLeaderboardCode_ByUserId,
    getUser_ByLeaderboardCode_ByUserId,
    updateUser_ByLeaderboardCode_ByUserId
  }
}
