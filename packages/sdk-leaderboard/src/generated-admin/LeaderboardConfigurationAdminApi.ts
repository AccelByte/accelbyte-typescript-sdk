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
import { DeleteBulkLeaderboardsReq } from '../generated-definitions/DeleteBulkLeaderboardsReq.js'
import { DeleteBulkLeaderboardsResp } from '../generated-definitions/DeleteBulkLeaderboardsResp.js'
import { GetAllLeaderboardConfigsResp } from '../generated-definitions/GetAllLeaderboardConfigsResp.js'
import { GetLeaderboardConfigResp } from '../generated-definitions/GetLeaderboardConfigResp.js'
import { LeaderboardConfigReq } from '../generated-definitions/LeaderboardConfigReq.js'
import { UpdateLeaderboardConfigReq } from '../generated-definitions/UpdateLeaderboardConfigReq.js'
import { LeaderboardConfigurationAdmin$ } from './endpoints/LeaderboardConfigurationAdmin$.js'

export function LeaderboardConfigurationAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * &lt;p&gt;This endpoint return all leaderboard configurations&lt;/p&gt;
   */
  async function getLeaderboards(queryParams?: {
    isArchived?: boolean | null
    isDeleted?: boolean | null
    limit?: number
    offset?: number
  }): Promise<GetAllLeaderboardConfigsResp> {
    const $ = new LeaderboardConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getLeaderboards(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;&lt;b&gt;Fields :&lt;/b&gt;&lt;/p&gt; &lt;ul&gt;&lt;li&gt;LeaderboardConfig code must be lowercase and maximum length is 48 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;Maximum length for leaderboard name is 128 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;Start time must be follow RFC3339 standard. e.g. 2020-10-02T15:00:00.05Z&lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;Season period must be greater than 31 days.&lt;/li&gt; &lt;li&gt;If seasonPeriod is filled, the LeaderboardConfig would have seasonal leaderboard.&lt;/li&gt; &lt;li&gt;Reset Date must be a number 1 - 31. Default is &#39;1&#39;.&lt;/li&gt; &lt;li&gt;Reset Day must be a number 0 - 6. 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday (day of week). Default is &#39;0&#39;.&lt;/li&gt; &lt;li&gt;Reset time must be &lt;b&gt;hours:minutes&lt;/b&gt; in 24 hours format e.g. 01:30, 10:30, 15:30, 23:15.Default is &#39;00:00&#39;.&lt;/li&gt; &lt;li&gt;Stat Code is related with statistic code in statistic service. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;/ul&gt;
   */
  async function createLeaderboard(data: LeaderboardConfigReq): Promise<LeaderboardConfigReq> {
    const $ = new LeaderboardConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createLeaderboard(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint delete multiple leaderboards configuration in one request&lt;/p&gt;
   */
  async function createLeaderboardDelete(data: DeleteBulkLeaderboardsReq): Promise<DeleteBulkLeaderboardsResp> {
    const $ = new LeaderboardConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createLeaderboardDelete(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint delete a leaderboard configuration&lt;/p&gt;
   */
  async function deleteLeaderboard_ByLeaderboardCode(leaderboardCode: string): Promise<unknown> {
    const $ = new LeaderboardConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteLeaderboard_ByLeaderboardCode(leaderboardCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint returns a leaderboard configuration&lt;/p&gt;
   */
  async function getLeaderboard_ByLeaderboardCode(leaderboardCode: string): Promise<GetLeaderboardConfigResp> {
    const $ = new LeaderboardConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getLeaderboard_ByLeaderboardCode(leaderboardCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;&lt;b&gt;Fields :&lt;/b&gt;&lt;/p&gt; &lt;ul&gt; &lt;li&gt;Maximum length for leaderboard name is 128 characters.&lt;/li&gt; &lt;li&gt;Start time must be follow RFC3339 standard. e.g. 2020-10-02T15:00:00.05Z&lt;/li&gt; &lt;li&gt;Season period must be greater than 31 days.&lt;/li&gt; &lt;li&gt;If seasonPeriod is filled, the LeaderboardConfig would have seasonal leaderboard.&lt;/li&gt; &lt;li&gt;Reset Date must be a number 1 - 31. Default is &#39;1&#39;.&lt;/li&gt; &lt;li&gt;Reset Day must be a number 0 - 6. 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday (day of week). Default is &#39;0&#39;.&lt;/li&gt; &lt;li&gt;Reset time must be &lt;b&gt;hours:minutes&lt;/b&gt; in 24 hours format e.g. 01:30, 10:30, 15:30, 23:15.&lt;/li&gt; &lt;/ul&gt;
   */
  async function updateLeaderboard_ByLeaderboardCode(
    leaderboardCode: string,
    data: UpdateLeaderboardConfigReq
  ): Promise<GetLeaderboardConfigResp> {
    const $ = new LeaderboardConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateLeaderboard_ByLeaderboardCode(leaderboardCode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;&lt;b&gt;[Test Facility Only]&lt;/b&gt;&lt;/p&gt; &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD:HARDDELETE [DELETE]&#39;&lt;/p&gt; &lt;p&gt;This endpoint will delete leaderboard configuration and its data&lt;/p&gt; &lt;p&gt;Note: this endpoint only works on development environment, you might want to use &lt;b&gt;archive endpoint&lt;/b&gt; instead hard delete.&lt;/p&gt;
   */
  async function deleteHard_ByLeaderboardCode(leaderboardCode: string): Promise<unknown> {
    const $ = new LeaderboardConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
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
