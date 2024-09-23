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
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { BulkCycleStatsAdd } from '../generated-definitions/BulkCycleStatsAdd.js'
import { BulkStatCycleOperationResultArray } from '../generated-definitions/BulkStatCycleOperationResultArray.js'
import { BulkStatCycleRequest } from '../generated-definitions/BulkStatCycleRequest.js'
import { BulkStatCycleResult } from '../generated-definitions/BulkStatCycleResult.js'
import { StatCycleCreate } from '../generated-definitions/StatCycleCreate.js'
import { StatCycleInfo } from '../generated-definitions/StatCycleInfo.js'
import { StatCyclePagingSlicedResult } from '../generated-definitions/StatCyclePagingSlicedResult.js'
import { StatCycleUpdate } from '../generated-definitions/StatCycleUpdate.js'
import { StatImportInfo } from '../generated-definitions/StatImportInfo.js'
import { StatCycleConfigurationAdmin$ } from './endpoints/StatCycleConfigurationAdmin$.js'

export function StatCycleConfigurationAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getStatCycles(queryParams?: {
    cycleType?: 'ANNUALLY' | 'DAILY' | 'MONTHLY' | 'SEASONAL' | 'WEEKLY'
    limit?: number
    name?: string | null
    offset?: number
    sortBy?: string | null
    status?: 'ACTIVE' | 'INIT' | 'STOPPED'
  }): Promise<AxiosResponse<StatCyclePagingSlicedResult>> {
    const $ = new StatCycleConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatCycles(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createStatCycle(data: StatCycleCreate): Promise<AxiosResponse<StatCycleInfo>> {
    const $ = new StatCycleConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStatCycle(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createStatCycleBulk(data: BulkStatCycleRequest): Promise<AxiosResponse<BulkStatCycleResult>> {
    const $ = new StatCycleConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStatCycleBulk(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStatCyclesExport(): Promise<AxiosResponse<unknown>> {
    const $ = new StatCycleConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatCyclesExport()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createStatCycleImport(
    data: { file?: File },
    queryParams?: { replaceExisting?: boolean | null }
  ): Promise<AxiosResponse<StatImportInfo>> {
    const $ = new StatCycleConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStatCycleImport(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteStatCycle_ByCycleId(cycleId: string): Promise<AxiosResponse<unknown>> {
    const $ = new StatCycleConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteStatCycle_ByCycleId(cycleId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStatCycle_ByCycleId(cycleId: string): Promise<AxiosResponse<StatCycleInfo>> {
    const $ = new StatCycleConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatCycle_ByCycleId(cycleId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateStatCycle_ByCycleId(cycleId: string, data: StatCycleUpdate): Promise<AxiosResponse<StatCycleInfo>> {
    const $ = new StatCycleConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStatCycle_ByCycleId(cycleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateStop_ByCycleId(cycleId: string): Promise<AxiosResponse<StatCycleInfo>> {
    const $ = new StatCycleConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStop_ByCycleId(cycleId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createStatAddBulk_ByCycleId(
    cycleId: string,
    data: BulkCycleStatsAdd
  ): Promise<AxiosResponse<BulkStatCycleOperationResultArray>> {
    const $ = new StatCycleConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStatAddBulk_ByCycleId(cycleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * List stat cycles by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycles&lt;/li&gt;&lt;/ul&gt;
     */
    getStatCycles,
    /**
     * Create stat cycle.&lt;br&gt;Fields:&lt;ul&gt;&lt;li&gt;id: Cycle id, consist of alphanumeric characters with a maximum of 32 characters. if not provided will be generated. &lt;b&gt;(optional)&lt;/b&gt;.&lt;/li&gt;&lt;li&gt;name: Cycle name, maximum length is 128 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt;&lt;li&gt;resetTime: Reset time must follow &lt;b&gt;hours:minutes&lt;/b&gt; in 24 hours format e.g. 01:30, 23:15. &lt;b&gt;(required)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;resetDay: Reset Day follows the ISO-8601 standard, from 1 (Monday) to 7 (Sunday). Required when cycleType is WEEKLY.&lt;/li&gt;&lt;li&gt;resetDate: Reset Date must be a number 1 - 31. Required when cycleType is MONTHLY or ANNUALLY.&lt;/li&gt;&lt;li&gt;resetMonth: Reset Month must be a number 1 - 12. Required when cycleType is ANNUALLY.&lt;/li&gt;&lt;li&gt;seasonPeriod: Season period must be a number greater than or equal to 1 (days). Required when cycleType is SEASONAL.&lt;/li&gt;&lt;li&gt;start: Start time must follow RFC3339 standard. e.g. 2023-02-24T05:10:24.865Z. &lt;b&gt;(required)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;end: End time must follow RFC3339 standard. e.g. 2023-02-24T05:10:24.865Z.&lt;/li&gt;&lt;/ul&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created stat cycle&lt;/li&gt;&lt;/ul&gt;
     */
    createStatCycle,
    /**
     * Bulk get stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of stat cycles&lt;/li&gt;&lt;/ul&gt;
     */
    createStatCycleBulk,
    /**
     * Export all stat cycle configurations for a given namespace into file At current, only JSON file is supported.&lt;p&gt;
     */
    getStatCyclesExport,
    /**
     * Import stat cycle configurations for a given namespace from file. At current, only JSON file is supported.&lt;p&gt;
     */
    createStatCycleImport,
    /**
     * Deletes stat cycle.&lt;br&gt;
     */
    deleteStatCycle_ByCycleId,
    /**
     * Get stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycle info&lt;/ul&gt;
     */
    getStatCycle_ByCycleId,
    /**
     * Update stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated stat cycle&lt;/li&gt;&lt;/ul&gt;
     */
    updateStatCycle_ByCycleId,
    /**
     * Stop stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated stat cycle&lt;/li&gt;&lt;/ul&gt;
     */
    updateStop_ByCycleId,
    /**
     * Bulk add stat cycle to stats.&lt;br&gt;
     */
    createStatAddBulk_ByCycleId
  }
}
