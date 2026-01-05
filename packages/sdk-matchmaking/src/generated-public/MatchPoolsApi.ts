/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { ExternalFailureMetricRecord } from '../generated-definitions/ExternalFailureMetricRecord.js'
import { ListMatchPoolTicketsResponse } from '../generated-definitions/ListMatchPoolTicketsResponse.js'
import { ListMatchPoolsResponse } from '../generated-definitions/ListMatchPoolsResponse.js'
import { MatchPool } from '../generated-definitions/MatchPool.js'
import { MatchPoolConfig } from '../generated-definitions/MatchPoolConfig.js'
import { PlayerMetricRecord } from '../generated-definitions/PlayerMetricRecord.js'
import { TicketMetricResultRecord } from '../generated-definitions/TicketMetricResultRecord.js'
import { MatchPools$ } from './endpoints/MatchPools$.js'

export function MatchPoolsApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function getMatchPools(queryParams?: {
    limit?: number
    name?: string | null
    offset?: number
  }): Promise<AxiosResponse<ListMatchPoolsResponse>> {
    const $ = new MatchPools$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMatchPools(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createMatchPool(data: MatchPool): Promise<AxiosResponse<unknown>> {
    const $ = new MatchPools$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createMatchPool(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteMatchPool_ByPool(pool: string): Promise<AxiosResponse<unknown>> {
    const $ = new MatchPools$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteMatchPool_ByPool(pool)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getMatchPool_ByPool(pool: string): Promise<AxiosResponse<MatchPool>> {
    const $ = new MatchPools$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMatchPool_ByPool(pool)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateMatchPool_ByPool(pool: string, data: MatchPoolConfig): Promise<AxiosResponse<MatchPool>> {
    const $ = new MatchPools$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateMatchPool_ByPool(pool, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getMetrics_ByPool(pool: string): Promise<AxiosResponse<TicketMetricResultRecord>> {
    const $ = new MatchPools$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMetrics_ByPool(pool)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getTickets_ByPool(
    pool: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<ListMatchPoolTicketsResponse>> {
    const $ = new MatchPools$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTickets_ByPool(pool, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getMetricsPlayer_ByPool(pool: string): Promise<AxiosResponse<PlayerMetricRecord>> {
    const $ = new MatchPools$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMetricsPlayer_ByPool(pool)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getMetricsPlayer_ByPool_ByNS(pool: string): Promise<AxiosResponse<PlayerMetricRecord>> {
    const $ = new MatchPools$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMetricsPlayer_ByPool_ByNS(pool)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createMetricExternalFailure_ByPool(pool: string, data: ExternalFailureMetricRecord): Promise<AxiosResponse<unknown>> {
    const $ = new MatchPools$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createMetricExternalFailure_ByPool(pool, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * List matchmaking pools.
     */
    getMatchPools,
    /**
     * Creates a new matchmaking pool. A pool is isolated from other pools (i.e. tickets may be matched with other tickets in the same pool, but not with tickets in other pools). Each pool has its own matchmaking rules and/or logic. ticket_expiration_seconds and backfill_ticket_expiration_seconds will be set to 300 seconds (5 minutes) by default if not filled. Match Function holds information about the name of the match logic server that matchmaking can refers to. By default we provide (&#34;default&#34; and &#34;basic&#34;). Match Function will be used as reference value for Match Function Overrides if not set. In case Customer would like to use matchmaking service default match logic, then specify it in &#34;match_function_overrides&#34;. This sample configuration will let matchmaking service will use &#34;default&#34; match logic for make matches, while validation will hit both &#34;default&#34; and &#34;custom&#34; match logics. e.g. { &#34;match_function&#34;: &#34;custom&#34;, &#34;match_function_overrides&#34;: { &#34;validation&#34;: []{&#34;default&#34;,&#34;custom&#34;}, &#34;make_matches&#34;: &#34;default&#34;, } }
     */
    createMatchPool,
    /**
     * Deletes an existing matchmaking pool.
     */
    deleteMatchPool_ByPool,
    /**
     * Get details for a specific match pool
     */
    getMatchPool_ByPool,
    /**
     * Updates an existing matchmaking pool. ticket_expiration_seconds and backfill_ticket_expiration_seconds will be set to 300 seconds (5 minutes) by default if not filled. Match Function holds information about the name of the match logic server that matchmaking can refers to. By default we provide (&#34;default&#34; and &#34;basic&#34;). Match Function will be used as reference value for Match Function Overrides if not set. In case Customer would like to use matchmaking service default match logic, then specify it in &#34;match_function_overrides&#34;. This sample configuration will let matchmaking service will use &#34;default&#34; match logic for make matches, while validation will hit both &#34;default&#34; and &#34;custom&#34; match logics. e.g. { &#34;match_function&#34;: &#34;custom&#34;, &#34;match_function_overrides&#34;: { &#34;validation&#34;: []{&#34;default&#34;,&#34;custom&#34;}, &#34;make_matches&#34;: &#34;default&#34;, } }
     */
    updateMatchPool_ByPool,
    /**
     * Get metric for a specific match pool Result: queueTime in seconds
     */
    getMetrics_ByPool,
    /**
     * Get tickets in queue for a specific match pool Result: number of tickets and list of ticket detail in a match pool.
     */
    getTickets_ByPool,
    /**
     * Get player metric for a specific match pool
     */
    getMetricsPlayer_ByPool,
    /**
     * Public get player metric for a specific match pool
     */
    getMetricsPlayer_ByPool_ByNS,
    /**
     * Post metrics for external flow failure in a specific match pool
     */
    createMetricExternalFailure_ByPool
  }
}
