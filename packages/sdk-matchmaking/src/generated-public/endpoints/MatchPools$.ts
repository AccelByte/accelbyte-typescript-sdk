/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { ListMatchPoolTicketsResponse } from '../../generated-definitions/ListMatchPoolTicketsResponse.js'
import { ListMatchPoolsResponse } from '../../generated-definitions/ListMatchPoolsResponse.js'
import { MatchPool } from '../../generated-definitions/MatchPool.js'
import { MatchPoolConfig } from '../../generated-definitions/MatchPoolConfig.js'
import { PlayerMetricRecord } from '../../generated-definitions/PlayerMetricRecord.js'
import { TicketMetricResultRecord } from '../../generated-definitions/TicketMetricResultRecord.js'

export class MatchPools$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * List matchmaking pools.
   */
  getMatchPools(queryParams?: { limit?: number; name?: string | null; offset?: number }): Promise<Response<ListMatchPoolsResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-pools'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListMatchPoolsResponse,
      'ListMatchPoolsResponse'
    )
  }
  /**
   * Creates a new matchmaking pool. A pool is isolated from other pools (i.e. tickets may be matched with other tickets in the same pool, but not with tickets in other pools). Each pool has its own matchmaking rules and/or logic. ticket_expiration_seconds and backfill_ticket_expiration_seconds will be set to 300 seconds (5 minutes) by default if not filled. Match Function holds information about the name of the match logic server that matchmaking can refers to. By default we provide (&#34;default&#34; and &#34;basic&#34;). Match Function will be used as reference value for Match Function Overrides if not set. In case Customer would like to use matchmaking service default match logic, then specify it in &#34;match_function_overrides&#34;. This sample configuration will let matchmaking service will use &#34;default&#34; match logic for make matches, while validation will hit both &#34;default&#34; and &#34;custom&#34; match logics. e.g. { &#34;match_function&#34;: &#34;custom&#34;, &#34;match_function_overrides&#34;: { &#34;validation&#34;: []{&#34;default&#34;,&#34;custom&#34;}, &#34;make_matches&#34;: &#34;default&#34;, } }
   */
  createMatchPool(data: MatchPool): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-pools'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Deletes an existing matchmaking pool.
   */
  deleteMatchPool_ByPool(pool: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-pools/{pool}'.replace('{namespace}', this.namespace).replace('{pool}', pool)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get details for a specific match pool
   */
  getMatchPool_ByPool(pool: string): Promise<Response<MatchPool>> {
    const params = {} as AxiosRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-pools/{pool}'.replace('{namespace}', this.namespace).replace('{pool}', pool)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MatchPool, 'MatchPool')
  }
  /**
   * Updates an existing matchmaking pool. ticket_expiration_seconds and backfill_ticket_expiration_seconds will be set to 300 seconds (5 minutes) by default if not filled. Match Function holds information about the name of the match logic server that matchmaking can refers to. By default we provide (&#34;default&#34; and &#34;basic&#34;). Match Function will be used as reference value for Match Function Overrides if not set. In case Customer would like to use matchmaking service default match logic, then specify it in &#34;match_function_overrides&#34;. This sample configuration will let matchmaking service will use &#34;default&#34; match logic for make matches, while validation will hit both &#34;default&#34; and &#34;custom&#34; match logics. e.g. { &#34;match_function&#34;: &#34;custom&#34;, &#34;match_function_overrides&#34;: { &#34;validation&#34;: []{&#34;default&#34;,&#34;custom&#34;}, &#34;make_matches&#34;: &#34;default&#34;, } }
   */
  updateMatchPool_ByPool(pool: string, data: MatchPoolConfig): Promise<Response<MatchPool>> {
    const params = {} as AxiosRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-pools/{pool}'.replace('{namespace}', this.namespace).replace('{pool}', pool)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MatchPool, 'MatchPool')
  }
  /**
   * Get metric for a specific match pool Result: queueTime in seconds
   */
  getMetrics_ByPool(pool: string): Promise<Response<TicketMetricResultRecord>> {
    const params = {} as AxiosRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-pools/{pool}/metrics'
      .replace('{namespace}', this.namespace)
      .replace('{pool}', pool)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      TicketMetricResultRecord,
      'TicketMetricResultRecord'
    )
  }
  /**
   * Get tickets in queue for a specific match pool Result: number of tickets and list of ticket detail in a match pool.
   */
  getTickets_ByPool(pool: string, queryParams?: { limit?: number; offset?: number }): Promise<Response<ListMatchPoolTicketsResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-pools/{pool}/tickets'
      .replace('{namespace}', this.namespace)
      .replace('{pool}', pool)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListMatchPoolTicketsResponse,
      'ListMatchPoolTicketsResponse'
    )
  }
  /**
   * Get player metric for a specific match pool
   */
  getMetricsPlayer_ByPool(pool: string): Promise<Response<PlayerMetricRecord>> {
    const params = {} as AxiosRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-pools/{pool}/metrics/player'
      .replace('{namespace}', this.namespace)
      .replace('{pool}', pool)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PlayerMetricRecord, 'PlayerMetricRecord')
  }
  /**
   * Public get player metric for a specific match pool
   */
  getMetricsPlayer_ByPool_ByNS(pool: string): Promise<Response<PlayerMetricRecord>> {
    const params = {} as AxiosRequestConfig
    const url = '/match2/v1/public/namespaces/{namespace}/match-pools/{pool}/metrics/player'
      .replace('{namespace}', this.namespace)
      .replace('{pool}', pool)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PlayerMetricRecord, 'PlayerMetricRecord')
  }
}
