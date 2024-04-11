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
import { DeleteBulkLeaderboardsReq } from '../generated-definitions/DeleteBulkLeaderboardsReq.js'
import { DeleteBulkLeaderboardsResp } from '../generated-definitions/DeleteBulkLeaderboardsResp.js'
import { GetAllLeaderboardConfigsRespV3 } from '../generated-definitions/GetAllLeaderboardConfigsRespV3.js'
import { GetLeaderboardConfigRespV3 } from '../generated-definitions/GetLeaderboardConfigRespV3.js'
import { LeaderboardConfigReqV3 } from '../generated-definitions/LeaderboardConfigReqV3.js'
import { LeaderboardConfigurationV3Admin$ } from './endpoints/LeaderboardConfigurationV3Admin$.js'
import { UpdateLeaderboardConfigReqV3 } from '../generated-definitions/UpdateLeaderboardConfigReqV3.js'

export function LeaderboardConfigurationV3AdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * &lt;p&gt;This endpoint return all leaderboard configurations&lt;/p&gt;
   */
  async function getLeaderboards(queryParams?: {
    isDeleted?: boolean | null
    limit?: number
    offset?: number
  }): Promise<GetAllLeaderboardConfigsRespV3> {
    const $ = new LeaderboardConfigurationV3Admin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getLeaderboards(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;&lt;b&gt;Fields :&lt;/b&gt;&lt;/p&gt; &lt;ul&gt;&lt;li&gt;leaderboardCode: unique leaderboard config code must be lowercase and maximum length is 48 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;name: leaderboard name, maximum length for leaderboard name is 128 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;description: leaderboard description, maximum length for leaderboard description is 2048 characters. &lt;b&gt;(optional)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;iconURL: leaderboard icon image url. &lt;b&gt;(optional)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;allTime: if true, all time leaderboard will be created. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;descending: leaderboard order. If true, the points will be sorted in descending order. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;statCode: Stat Code is related with statistic code in statistic service. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;cycleIds: Statistic cycle ids that will be tracked in the leaderboard. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;/ul&gt;
   */
  async function createLeaderboard(data: LeaderboardConfigReqV3): Promise<GetLeaderboardConfigRespV3> {
    const $ = new LeaderboardConfigurationV3Admin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createLeaderboard(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint delete multiple leaderboards configuration in one request&lt;/p&gt;
   */
  async function createLeaderboardDelete(data: DeleteBulkLeaderboardsReq): Promise<DeleteBulkLeaderboardsResp> {
    const $ = new LeaderboardConfigurationV3Admin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createLeaderboardDelete(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint delete a leaderboard configuration&lt;/p&gt;
   */
  async function deleteLeaderboard_ByLeaderboardCode(leaderboardCode: string): Promise<unknown> {
    const $ = new LeaderboardConfigurationV3Admin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteLeaderboard_ByLeaderboardCode(leaderboardCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint returns a leaderboard configuration&lt;/p&gt;
   */
  async function getLeaderboard_ByLeaderboardCode(leaderboardCode: string): Promise<GetLeaderboardConfigRespV3> {
    const $ = new LeaderboardConfigurationV3Admin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getLeaderboard_ByLeaderboardCode(leaderboardCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;&lt;b&gt;Fields :&lt;/b&gt;&lt;/p&gt; &lt;ul&gt;&lt;li&gt;leaderboardCode: unique leaderboard config code must be lowercase and maximum length is 48 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;name: leaderboard name, maximum length for leaderboard name is 128 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;description: leaderboard description, maximum length for leaderboard description is 2048 characters. &lt;b&gt;(optional)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;iconURL: leaderboard icon image url. &lt;b&gt;(optional)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;allTime: if true, all time leaderboard will be created. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;descending: leaderboard order. If true, the points will be sorted in descending order. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;statCode: Stat Code is related with statistic code in statistic service. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;cycleIds: Statistic cycle ids that will be tracked in the leaderboard. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;/ul&gt;
   */
  async function updateLeaderboard_ByLeaderboardCode(
    leaderboardCode: string,
    data: UpdateLeaderboardConfigReqV3
  ): Promise<GetLeaderboardConfigRespV3> {
    const $ = new LeaderboardConfigurationV3Admin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateLeaderboard_ByLeaderboardCode(leaderboardCode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;&lt;b&gt;[Test Facility Only]&lt;/b&gt;&lt;/p&gt; &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD:HARDDELETE [DELETE]&#39;&lt;/p&gt; &lt;p&gt;This endpoint will delete leaderboard configuration and its data&lt;/p&gt; &lt;p&gt;Note: this endpoint only works on development environment, you might want to use &lt;b&gt;archive endpoint&lt;/b&gt; instead hard delete.&lt;/p&gt;
   */
  async function deleteHard_ByLeaderboardCode(leaderboardCode: string): Promise<unknown> {
    const $ = new LeaderboardConfigurationV3Admin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteHard_ByLeaderboardCode(leaderboardCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getLeaderboards,
    createLeaderboard,
    createLeaderboardDelete,
    deleteLeaderboard_ByLeaderboardCode,
    getLeaderboard_ByLeaderboardCode,
    updateLeaderboard_ByLeaderboardCode,
    deleteHard_ByLeaderboardCode
  }
}
