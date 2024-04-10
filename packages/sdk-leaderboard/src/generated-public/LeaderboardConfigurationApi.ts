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
import { GetAllLeaderboardConfigsPublicResp } from '../generated-definitions/GetAllLeaderboardConfigsPublicResp.js'
import { LeaderboardConfigReq } from '../generated-definitions/LeaderboardConfigReq.js'
import { LeaderboardConfiguration$ } from './endpoints/LeaderboardConfiguration$.js'

export function LeaderboardConfigurationApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * &lt;p&gt;This endpoint return all leaderboard configurations&lt;/p&gt;
   */
  async function getLeaderboards(queryParams?: {
    isArchived?: boolean | null
    isDeleted?: boolean | null
    limit?: number
    offset?: number
  }): Promise<GetAllLeaderboardConfigsPublicResp> {
    const $ = new LeaderboardConfiguration$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getLeaderboards(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public endpoint to create a new leaderboard. &lt;p&gt;&lt;b&gt;Fields :&lt;/b&gt;&lt;/p&gt; &lt;ul&gt;&lt;li&gt;LeaderboardConfig code must be lowercase and maximum length is 48 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;Maximum length for leaderboard name is 128 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;Start time must be follow RFC3339 standard. e.g. 2020-10-02T15:00:00.05Z&lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;Season period must be greater than 31 days.&lt;/li&gt; &lt;li&gt;If seasonPeriod is filled, the LeaderboardConfig would have seasonal leaderboard.&lt;/li&gt; &lt;li&gt;Reset Date must be a number 1 - 31. Default is &#39;1&#39;.&lt;/li&gt; &lt;li&gt;Reset Day must be a number 0 - 6. 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday (day of week). Default is &#39;0&#39;.&lt;/li&gt; &lt;li&gt;Reset time must be &lt;b&gt;hours:minutes&lt;/b&gt; in 24 hours format e.g. 01:30, 10:30, 15:30, 23:15.Default is &#39;00:00&#39;.&lt;/li&gt; &lt;li&gt;Stat Code is related with statistic code in statistic service. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;/ul&gt;
   */
  async function createLeaderboard(data: LeaderboardConfigReq): Promise<LeaderboardConfigReq> {
    const $ = new LeaderboardConfiguration$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createLeaderboard(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint return all leaderboard configurations
   */
  async function getLeaderboards_ByNS(queryParams?: { limit?: number; offset?: number }): Promise<GetAllLeaderboardConfigsPublicResp> {
    const $ = new LeaderboardConfiguration$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getLeaderboards_ByNS(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getLeaderboards,
    createLeaderboard,
    getLeaderboards_ByNS
  }
}
