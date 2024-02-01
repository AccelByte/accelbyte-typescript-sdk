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
import { StatConfigurationAdmin$ } from './endpoints/StatConfigurationAdmin$.js'
import { StatCreate } from '../generated-definitions/StatCreate.js'
import { StatImportInfo } from '../generated-definitions/StatImportInfo.js'
import { StatInfo } from '../generated-definitions/StatInfo.js'
import { StatPagingSlicedResult } from '../generated-definitions/StatPagingSlicedResult.js'
import { StatUpdate } from '../generated-definitions/StatUpdate.js'

export function StatConfigurationAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * List stats by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stats&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStats(queryParams?: {
    cycleIds?: string | null
    isGlobal?: boolean | null
    isPublic?: boolean | null
    limit?: number
    offset?: number
  }): Promise<StatPagingSlicedResult> {
    const $ = new StatConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getStats(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create stat.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created stat template&lt;/li&gt;&lt;li&gt;default minimum value is 0&lt;/li&gt;&lt;li&gt;default maximum value is 1.7976931348623157e+308&lt;/li&gt;&lt;/ul&gt;
   */
  async function createStat(data: StatCreate): Promise<StatInfo> {
    const $ = new StatConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createStat(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Export all stat configurations for a given namespace into file At current, only JSON file is supported.&lt;p&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;*Required permission*: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStatsExport(): Promise<unknown> {
    const $ = new StatConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getStatsExport()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Import stat configurations for a given namespace from file. At current, only JSON file is supported.&lt;p&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;*Required permission*: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function createStatImport(data: { file?: File }, queryParams?: { replaceExisting?: boolean | null }): Promise<StatImportInfo> {
    const $ = new StatConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createStatImport(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query stats by keyword.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;i&gt;: stats&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStatsSearch(queryParams: {
    keyword: string | null
    isGlobal?: boolean | null
    isPublic?: boolean | null
    limit?: number
    offset?: number
  }): Promise<StatPagingSlicedResult> {
    const $ = new StatConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getStatsSearch(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Deletes stat template.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteStat_ByStatCode(statCode: string): Promise<unknown> {
    const $ = new StatConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteStat_ByStatCode(statCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get stat by statCode.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat info&lt;/ul&gt;
   */
  async function getStat_ByStatCode(statCode: string): Promise<StatInfo> {
    const $ = new StatConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getStat_ByStatCode(statCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update stat.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated stat&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchStat_ByStatCode(statCode: string, data: StatUpdate): Promise<StatInfo> {
    const $ = new StatConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.patchStat_ByStatCode(statCode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Deletes stat template.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteTied_ByStatCode(statCode: string): Promise<unknown> {
    const $ = new StatConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteTied_ByStatCode(statCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getStats,
    createStat,
    getStatsExport,
    createStatImport,
    getStatsSearch,
    deleteStat_ByStatCode,
    getStat_ByStatCode,
    patchStat_ByStatCode,
    deleteTied_ByStatCode
  }
}
