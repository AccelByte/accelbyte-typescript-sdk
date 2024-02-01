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
import { BulkCycleStatsAdd } from '../generated-definitions/BulkCycleStatsAdd.js'
import { BulkStatCycleOperationResultArray } from '../generated-definitions/BulkStatCycleOperationResultArray.js'
import { BulkStatCycleRequest } from '../generated-definitions/BulkStatCycleRequest.js'
import { BulkStatCycleResult } from '../generated-definitions/BulkStatCycleResult.js'
import { StatCycleConfigurationAdmin$ } from './endpoints/StatCycleConfigurationAdmin$.js'
import { StatCycleCreate } from '../generated-definitions/StatCycleCreate.js'
import { StatCycleInfo } from '../generated-definitions/StatCycleInfo.js'
import { StatCyclePagingSlicedResult } from '../generated-definitions/StatCyclePagingSlicedResult.js'
import { StatCycleUpdate } from '../generated-definitions/StatCycleUpdate.js'
import { StatImportInfo } from '../generated-definitions/StatImportInfo.js'

export function StatCycleConfigurationAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * List stat cycles by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycles&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStatCycles(queryParams?: {
    cycleType?: 'ANNUALLY' | 'DAILY' | 'MONTHLY' | 'SEASONAL' | 'WEEKLY'
    limit?: number
    name?: string | null
    offset?: number
    sortBy?: string | null
    status?: 'ACTIVE' | 'INIT' | 'STOPPED'
  }): Promise<StatCyclePagingSlicedResult> {
    const $ = new StatCycleConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getStatCycles(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create stat cycle.&lt;br&gt;Fields:&lt;ul&gt;&lt;li&gt;name: Cycle name, maximum length is 128 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt;&lt;li&gt;resetTime: Reset time must follow &lt;b&gt;hours:minutes&lt;/b&gt; in 24 hours format e.g. 01:30, 23:15. &lt;b&gt;(required)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;resetDay: Reset Day follows the ISO-8601 standard, from 1 (Monday) to 7 (Sunday). Required when cycleType is WEEKLY.&lt;/li&gt;&lt;li&gt;resetDate: Reset Date must be a number 1 - 31. Required when cycleType is MONTHLY or ANNUALLY.&lt;/li&gt;&lt;li&gt;resetMonth: Reset Month must be a number 1 - 12. Required when cycleType is ANNUALLY.&lt;/li&gt;&lt;li&gt;seasonPeriod: Season period must be a number greater than or equal to 1 (days). Required when cycleType is SEASONAL.&lt;/li&gt;&lt;li&gt;start: Start time must follow RFC3339 standard. e.g. 2023-02-24T05:10:24.865Z. &lt;b&gt;(required)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;end: End time must follow RFC3339 standard. e.g. 2023-02-24T05:10:24.865Z.&lt;/li&gt;&lt;/ul&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created stat cycle&lt;/li&gt;&lt;/ul&gt;
   */
  async function createStatCycle(data: StatCycleCreate): Promise<StatCycleInfo> {
    const $ = new StatCycleConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createStatCycle(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk get stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of stat cycles&lt;/li&gt;&lt;/ul&gt;
   */
  async function createStatCycleBulk(data: BulkStatCycleRequest): Promise<BulkStatCycleResult> {
    const $ = new StatCycleConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createStatCycleBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Export all stat cycle configurations for a given namespace into file At current, only JSON file is supported.&lt;p&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;*Required permission*: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStatCyclesExport(): Promise<unknown> {
    const $ = new StatCycleConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getStatCyclesExport()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Import stat cycle configurations for a given namespace from file. At current, only JSON file is supported.&lt;p&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;*Required permission*: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function createStatCycleImport(data: { file?: File }, queryParams?: { replaceExisting?: boolean | null }): Promise<StatImportInfo> {
    const $ = new StatCycleConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createStatCycleImport(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Deletes stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteStatCycle_ByCycleId(cycleId: string): Promise<unknown> {
    const $ = new StatCycleConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteStatCycle_ByCycleId(cycleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycle info&lt;/ul&gt;
   */
  async function getStatCycle_ByCycleId(cycleId: string): Promise<StatCycleInfo> {
    const $ = new StatCycleConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getStatCycle_ByCycleId(cycleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated stat cycle&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateStatCycle_ByCycleId(cycleId: string, data: StatCycleUpdate): Promise<StatCycleInfo> {
    const $ = new StatCycleConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateStatCycle_ByCycleId(cycleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Stop stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated stat cycle&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateStop_ByCycleId(cycleId: string): Promise<StatCycleInfo> {
    const $ = new StatCycleConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateStop_ByCycleId(cycleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk add stat cycle to stats.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function createStatAddBulk_ByCycleId(cycleId: string, data: BulkCycleStatsAdd): Promise<BulkStatCycleOperationResultArray> {
    const $ = new StatCycleConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createStatAddBulk_ByCycleId(cycleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getStatCycles,
    createStatCycle,
    createStatCycleBulk,
    getStatCyclesExport,
    createStatCycleImport,
    deleteStatCycle_ByCycleId,
    getStatCycle_ByCycleId,
    updateStatCycle_ByCycleId,
    updateStop_ByCycleId,
    createStatAddBulk_ByCycleId
  }
}
