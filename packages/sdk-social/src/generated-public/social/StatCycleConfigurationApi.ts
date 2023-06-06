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
import { BulkStatCycleRequest } from './definitions/BulkStatCycleRequest.js'
import { BulkStatCycleResult } from './definitions/BulkStatCycleResult.js'
import { StatCycleConfiguration$ } from './endpoints/StatCycleConfiguration$.js'
import { StatCycleInfo } from './definitions/StatCycleInfo.js'
import { StatCyclePagingSlicedResult } from './definitions/StatCyclePagingSlicedResult.js'

export function StatCycleConfigurationApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * List stat cycles by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:STAT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycles&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStatCycles(queryParams?: {
    cycleType?: 'ANNUALLY' | 'DAILY' | 'MONTHLY' | 'SEASONAL' | 'WEEKLY'
    limit?: number
    name?: string | null
    offset?: number
    sortBy?: string | null
    status?: 'ACTIVE' | 'INIT' | 'STOPPED'
  }): Promise<StatCyclePagingSlicedResult> {
    const $ = new StatCycleConfiguration$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getStatCycles(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk get stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:STAT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of stat cycles&lt;/li&gt;&lt;/ul&gt;
   */
  async function createStatCycleBulk(data: BulkStatCycleRequest): Promise<BulkStatCycleResult> {
    const $ = new StatCycleConfiguration$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createStatCycleBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:STAT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycle info&lt;/ul&gt;
   */
  async function getStatCycle_ByCycleId(cycleId: string): Promise<StatCycleInfo> {
    const $ = new StatCycleConfiguration$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getStatCycle_ByCycleId(cycleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getStatCycles,
    createStatCycleBulk,
    getStatCycle_ByCycleId
  }
}
