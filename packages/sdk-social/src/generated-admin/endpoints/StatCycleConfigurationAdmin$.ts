/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { BulkCycleStatsAdd } from '../../generated-definitions/BulkCycleStatsAdd.js'
import { BulkStatCycleOperationResultArray } from '../../generated-definitions/BulkStatCycleOperationResultArray.js'
import { BulkStatCycleRequest } from '../../generated-definitions/BulkStatCycleRequest.js'
import { BulkStatCycleResult } from '../../generated-definitions/BulkStatCycleResult.js'
import { StatCycleCreate } from '../../generated-definitions/StatCycleCreate.js'
import { StatCycleInfo } from '../../generated-definitions/StatCycleInfo.js'
import { StatCyclePagingSlicedResult } from '../../generated-definitions/StatCyclePagingSlicedResult.js'
import { StatCycleUpdate } from '../../generated-definitions/StatCycleUpdate.js'
import { StatImportInfo } from '../../generated-definitions/StatImportInfo.js'

export class StatCycleConfigurationAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * List stat cycles by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycles&lt;/li&gt;&lt;/ul&gt;
   */
  getStatCycles(queryParams?: {
    cycleType?: 'ANNUALLY' | 'DAILY' | 'MONTHLY' | 'SEASONAL' | 'WEEKLY'
    limit?: number
    name?: string | null
    offset?: number
    sortBy?: string | null
    status?: 'ACTIVE' | 'INIT' | 'STOPPED'
  }): Promise<IResponse<StatCyclePagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/statCycles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      StatCyclePagingSlicedResult,
      'StatCyclePagingSlicedResult'
    )
  }

  /**
   * Create stat cycle.&lt;br&gt;Fields:&lt;ul&gt;&lt;li&gt;name: Cycle name, maximum length is 128 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt;&lt;li&gt;resetTime: Reset time must follow &lt;b&gt;hours:minutes&lt;/b&gt; in 24 hours format e.g. 01:30, 23:15. &lt;b&gt;(required)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;resetDay: Reset Day follows the ISO-8601 standard, from 1 (Monday) to 7 (Sunday). Required when cycleType is WEEKLY.&lt;/li&gt;&lt;li&gt;resetDate: Reset Date must be a number 1 - 31. Required when cycleType is MONTHLY or ANNUALLY.&lt;/li&gt;&lt;li&gt;resetMonth: Reset Month must be a number 1 - 12. Required when cycleType is ANNUALLY.&lt;/li&gt;&lt;li&gt;seasonPeriod: Season period must be a number greater than or equal to 1 (days). Required when cycleType is SEASONAL.&lt;/li&gt;&lt;li&gt;start: Start time must follow RFC3339 standard. e.g. 2023-02-24T05:10:24.865Z. &lt;b&gt;(required)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;end: End time must follow RFC3339 standard. e.g. 2023-02-24T05:10:24.865Z.&lt;/li&gt;&lt;/ul&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created stat cycle&lt;/li&gt;&lt;/ul&gt;
   */
  createStatCycle(data: StatCycleCreate): Promise<IResponse<StatCycleInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/statCycles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, StatCycleInfo, 'StatCycleInfo')
  }

  /**
   * Bulk get stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of stat cycles&lt;/li&gt;&lt;/ul&gt;
   */
  createStatCycleBulk(data: BulkStatCycleRequest): Promise<IResponse<BulkStatCycleResult>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/statCycles/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BulkStatCycleResult, 'BulkStatCycleResult')
  }

  /**
   * Export all stat cycle configurations for a given namespace into file At current, only JSON file is supported.&lt;p&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;*Required permission*: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getStatCyclesExport(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/statCycles/export'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Import stat cycle configurations for a given namespace from file. At current, only JSON file is supported.&lt;p&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;*Required permission*: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  createStatCycleImport(data: { file?: File }, queryParams?: { replaceExisting?: boolean | null }): Promise<IResponse<StatImportInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/statCycles/import'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, StatImportInfo, 'StatImportInfo')
  }

  /**
   * Deletes stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  deleteStatCycle_ByCycleId(cycleId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/statCycles/{cycleId}'
      .replace('{namespace}', this.namespace)
      .replace('{cycleId}', cycleId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycle info&lt;/ul&gt;
   */
  getStatCycle_ByCycleId(cycleId: string): Promise<IResponse<StatCycleInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/statCycles/{cycleId}'
      .replace('{namespace}', this.namespace)
      .replace('{cycleId}', cycleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, StatCycleInfo, 'StatCycleInfo')
  }

  /**
   * Update stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated stat cycle&lt;/li&gt;&lt;/ul&gt;
   */
  updateStatCycle_ByCycleId(cycleId: string, data: StatCycleUpdate): Promise<IResponse<StatCycleInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/statCycles/{cycleId}'
      .replace('{namespace}', this.namespace)
      .replace('{cycleId}', cycleId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, StatCycleInfo, 'StatCycleInfo')
  }

  /**
   * Stop stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated stat cycle&lt;/li&gt;&lt;/ul&gt;
   */
  updateStop_ByCycleId(cycleId: string): Promise<IResponse<StatCycleInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/statCycles/{cycleId}/stop'
      .replace('{namespace}', this.namespace)
      .replace('{cycleId}', cycleId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, StatCycleInfo, 'StatCycleInfo')
  }

  /**
   * Bulk add stat cycle to stats.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:STAT&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  createStatAddBulk_ByCycleId(cycleId: string, data: BulkCycleStatsAdd): Promise<IResponse<BulkStatCycleOperationResultArray>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/admin/namespaces/{namespace}/statCycles/{cycleId}/stats/add/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{cycleId}', cycleId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkStatCycleOperationResultArray,
      'BulkStatCycleOperationResultArray'
    )
  }
}
