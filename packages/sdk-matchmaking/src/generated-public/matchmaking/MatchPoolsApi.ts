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
import { ListMatchPoolsResponse } from './definitions/ListMatchPoolsResponse.js'
import { MatchPool } from './definitions/MatchPool.js'
import { MatchPoolConfig } from './definitions/MatchPoolConfig.js'
import { MatchPools$ } from './endpoints/MatchPools$.js'
import { PlayerMetricRecord } from './definitions/PlayerMetricRecord.js'
import { TicketMetricResultRecord } from './definitions/TicketMetricResultRecord.js'

export function MatchPoolsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:POOL [READ] Required Scope: social List matchmaking pools.
   */
  async function getMatchPools(queryParams?: { limit?: number; offset?: number }): Promise<ListMatchPoolsResponse> {
    const $ = new MatchPools$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getMatchPools(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:POOL [CREATE] Required Scope: social Creates a new matchmaking pool. A pool is isolated from other pools (i.e. tickets may be matched with other tickets in the same pool, but not with tickets in other pools). Each pool has its own matchmaking rules and/or logic. ticket_expiration_seconds and backfill_ticket_expiration_seconds will be set to 300 seconds (5 minutes) by default if not filled. Match Function holds information about the name of the match logic server that matchmaking can refers to. By default we provide (&#34;default&#34; and &#34;basic&#34;). Match Function will be used as reference value for Match Function Overrides if not set. In case Customer would like to use matchmaking service default match logic, then specify it in &#34;match_function_overrides&#34;. This sample configuration will let matchmaking service will use &#34;default&#34; match logic for make matches, while validation will hit both &#34;default&#34; and &#34;custom&#34; match logics. e.g. { &#34;match_function&#34;: &#34;custom&#34;, &#34;match_function_overrides&#34;: { &#34;validation&#34;: []{&#34;default&#34;,&#34;custom&#34;}, &#34;make_matches&#34;: &#34;default&#34;, } }
   */
  async function createMatchPool(data: MatchPool): Promise<unknown> {
    const $ = new MatchPools$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createMatchPool(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:POOL [DELETE] Required Scope: social Deletes an existing matchmaking pool.
   */
  async function deleteMatchPool_ByPool(pool: string): Promise<unknown> {
    const $ = new MatchPools$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteMatchPool_ByPool(pool)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:POOL [READ] Required Scope: social Get details for a specific match pool
   */
  async function getMatchPool_ByPool(pool: string): Promise<MatchPool> {
    const $ = new MatchPools$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getMatchPool_ByPool(pool)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:POOL [UPDATE] Required Scope: social Updates an existing matchmaking pool. ticket_expiration_seconds and backfill_ticket_expiration_seconds will be set to 300 seconds (5 minutes) by default if not filled. Match Function holds information about the name of the match logic server that matchmaking can refers to. By default we provide (&#34;default&#34; and &#34;basic&#34;). Match Function will be used as reference value for Match Function Overrides if not set. In case Customer would like to use matchmaking service default match logic, then specify it in &#34;match_function_overrides&#34;. This sample configuration will let matchmaking service will use &#34;default&#34; match logic for make matches, while validation will hit both &#34;default&#34; and &#34;custom&#34; match logics. e.g. { &#34;match_function&#34;: &#34;custom&#34;, &#34;match_function_overrides&#34;: { &#34;validation&#34;: []{&#34;default&#34;,&#34;custom&#34;}, &#34;make_matches&#34;: &#34;default&#34;, } }
   */
  async function updateMatchPool_ByPool(pool: string, data: MatchPoolConfig): Promise<MatchPool> {
    const $ = new MatchPools$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateMatchPool_ByPool(pool, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:POOL:METRICS [READ] Required Scope: social Get metric for a specific match pool Result: queueTime in seconds
   */
  async function getMetrics_ByPool(pool: string): Promise<TicketMetricResultRecord> {
    const $ = new MatchPools$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getMetrics_ByPool(pool)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:MATCHMAKING:POOL:METRICS [READ] Required Scope: social Get player metric for a specific match pool
   */
  async function getMetricsPlayer_ByPool(pool: string): Promise<PlayerMetricRecord> {
    const $ = new MatchPools$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getMetricsPlayer_ByPool(pool)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getMatchPools,
    createMatchPool,
    deleteMatchPool_ByPool,
    getMatchPool_ByPool,
    updateMatchPool_ByPool,
    getMetrics_ByPool,
    getMetricsPlayer_ByPool
  }
}
