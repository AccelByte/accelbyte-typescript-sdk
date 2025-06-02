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
import { BulkStatCycleRequest } from '../generated-definitions/BulkStatCycleRequest.js'
import { BulkStatCycleResult } from '../generated-definitions/BulkStatCycleResult.js'
import { StatCycleInfo } from '../generated-definitions/StatCycleInfo.js'
import { StatCyclePagingSlicedResult } from '../generated-definitions/StatCyclePagingSlicedResult.js'
import { StatCycleConfiguration$ } from './endpoints/StatCycleConfiguration$.js'

export function StatCycleConfigurationApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
    const $ = new StatCycleConfiguration$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatCycles(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createStatCycleBulk(data: BulkStatCycleRequest): Promise<AxiosResponse<BulkStatCycleResult>> {
    const $ = new StatCycleConfiguration$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStatCycleBulk(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStatCycle_ByCycleId(cycleId: string): Promise<AxiosResponse<StatCycleInfo>> {
    const $ = new StatCycleConfiguration$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatCycle_ByCycleId(cycleId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * List stat cycles by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycles&lt;/li&gt;&lt;/ul&gt;
     */
    getStatCycles,
    /**
     * Bulk get stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of stat cycles&lt;/li&gt;&lt;/ul&gt;
     */
    createStatCycleBulk,
    /**
     * Get stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycle info&lt;/ul&gt;
     */
    getStatCycle_ByCycleId
  }
}
