/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { StatCreate } from '../generated-definitions/StatCreate.js'
import { StatImportInfo } from '../generated-definitions/StatImportInfo.js'
import { StatInfo } from '../generated-definitions/StatInfo.js'
import { StatPagingSlicedResult } from '../generated-definitions/StatPagingSlicedResult.js'
import { StatUpdate } from '../generated-definitions/StatUpdate.js'
import { StatConfigurationAdmin$ } from './endpoints/StatConfigurationAdmin$.js'

export function StatConfigurationAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getStats(queryParams?: {
    cycleIds?: string | null
    isGlobal?: boolean | null
    isPublic?: boolean | null
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<StatPagingSlicedResult>> {
    const $ = new StatConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStats(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createStat(data: StatCreate): Promise<AxiosResponse<StatInfo>> {
    const $ = new StatConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStat(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStatsExport(): Promise<AxiosResponse<unknown>> {
    const $ = new StatConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatsExport()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createStatImport(
    data: { file?: File },
    queryParams?: { replaceExisting?: boolean | null }
  ): Promise<AxiosResponse<StatImportInfo>> {
    const $ = new StatConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStatImport(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStatsSearch(queryParams: {
    keyword: string | null
    isGlobal?: boolean | null
    isPublic?: boolean | null
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<StatPagingSlicedResult>> {
    const $ = new StatConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatsSearch(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteStat_ByStatCode(statCode: string): Promise<AxiosResponse<unknown>> {
    const $ = new StatConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteStat_ByStatCode(statCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStat_ByStatCode(statCode: string): Promise<AxiosResponse<StatInfo>> {
    const $ = new StatConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStat_ByStatCode(statCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchStat_ByStatCode(statCode: string, data: StatUpdate): Promise<AxiosResponse<StatInfo>> {
    const $ = new StatConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchStat_ByStatCode(statCode, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteTied_ByStatCode(statCode: string): Promise<AxiosResponse<unknown>> {
    const $ = new StatConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteTied_ByStatCode(statCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * List stats by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stats&lt;/li&gt;&lt;/ul&gt;
     */
    getStats,
    /**
     * Create stat.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created stat template&lt;/li&gt;&lt;li&gt;default minimum value is 0&lt;/li&gt;&lt;li&gt;default maximum value is 1.7976931348623157e+308&lt;/li&gt;&lt;li&gt;Field globalAggregationMethod will be ignored when setAsGlobal field is false&lt;/li&gt;&lt;/ul&gt;
     */
    createStat,
    /**
     * Export all stat configurations for a given namespace into file At current, only JSON file is supported.
     */
    getStatsExport,
    /**
     * Import stat configurations for a given namespace from file. At current, only JSON file is supported.
     */
    createStatImport,
    /**
     * Query stats by keyword.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;i&gt;: stats&lt;/li&gt;&lt;/ul&gt;
     */
    getStatsSearch,
    /**
     * Deletes stat template.&lt;br&gt;
     */
    deleteStat_ByStatCode,
    /**
     * Get stat by statCode.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat info&lt;/ul&gt;
     */
    getStat_ByStatCode,
    /**
     * Update stat.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated stat&lt;/li&gt;&lt;li&gt;&lt;i&gt;Field globalAggregationMethod will be ignored when the stat is not set as global&lt;/li&gt;&lt;li&gt;&lt;i&gt;Field globalAggregationMethod is not updatable when the stat status is TIED&lt;/li&gt;&lt;li&gt;&lt;i&gt;Field visibility is not updatable when the stat status is TIED&lt;/li&gt;&lt;/ul&gt;
     */
    patchStat_ByStatCode,
    /**
     * Deletes stat template.
     */
    deleteTied_ByStatCode
  }
}
