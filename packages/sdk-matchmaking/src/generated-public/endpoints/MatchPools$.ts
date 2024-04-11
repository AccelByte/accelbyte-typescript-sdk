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
import { ListMatchPoolTicketsResponse } from '../../generated-definitions/ListMatchPoolTicketsResponse.js'
import { ListMatchPoolsResponse } from '../../generated-definitions/ListMatchPoolsResponse.js'
import { MatchPool } from '../../generated-definitions/MatchPool.js'
import { MatchPoolConfig } from '../../generated-definitions/MatchPoolConfig.js'
import { PlayerMetricRecord } from '../../generated-definitions/PlayerMetricRecord.js'
import { TicketMetricResultRecord } from '../../generated-definitions/TicketMetricResultRecord.js'

export class MatchPools$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * List matchmaking pools.
   */
  getMatchPools(queryParams?: { limit?: number; name?: string | null; offset?: number }): Promise<IResponse<ListMatchPoolsResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-pools'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ListMatchPoolsResponse, 'ListMatchPoolsResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Creates a new matchmaking pool. A pool is isolated from other pools (i.e. tickets may be matched with other tickets in the same pool, but not with tickets in other pools). Each pool has its own matchmaking rules and/or logic. ticket_expiration_seconds and backfill_ticket_expiration_seconds will be set to 300 seconds (5 minutes) by default if not filled. Match Function holds information about the name of the match logic server that matchmaking can refers to. By default we provide (&#34;default&#34; and &#34;basic&#34;). Match Function will be used as reference value for Match Function Overrides if not set. In case Customer would like to use matchmaking service default match logic, then specify it in &#34;match_function_overrides&#34;. This sample configuration will let matchmaking service will use &#34;default&#34; match logic for make matches, while validation will hit both &#34;default&#34; and &#34;custom&#34; match logics. e.g. { &#34;match_function&#34;: &#34;custom&#34;, &#34;match_function_overrides&#34;: { &#34;validation&#34;: []{&#34;default&#34;,&#34;custom&#34;}, &#34;make_matches&#34;: &#34;default&#34;, } }
   */
  createMatchPool(data: MatchPool): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-pools'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Deletes an existing matchmaking pool.
   */
  deleteMatchPool_ByPool(pool: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-pools/{pool}'.replace('{namespace}', this.namespace).replace('{pool}', pool)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get details for a specific match pool
   */
  getMatchPool_ByPool(pool: string): Promise<IResponse<MatchPool>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-pools/{pool}'.replace('{namespace}', this.namespace).replace('{pool}', pool)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, MatchPool, 'MatchPool')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Updates an existing matchmaking pool. ticket_expiration_seconds and backfill_ticket_expiration_seconds will be set to 300 seconds (5 minutes) by default if not filled. Match Function holds information about the name of the match logic server that matchmaking can refers to. By default we provide (&#34;default&#34; and &#34;basic&#34;). Match Function will be used as reference value for Match Function Overrides if not set. In case Customer would like to use matchmaking service default match logic, then specify it in &#34;match_function_overrides&#34;. This sample configuration will let matchmaking service will use &#34;default&#34; match logic for make matches, while validation will hit both &#34;default&#34; and &#34;custom&#34; match logics. e.g. { &#34;match_function&#34;: &#34;custom&#34;, &#34;match_function_overrides&#34;: { &#34;validation&#34;: []{&#34;default&#34;,&#34;custom&#34;}, &#34;make_matches&#34;: &#34;default&#34;, } }
   */
  updateMatchPool_ByPool(pool: string, data: MatchPoolConfig): Promise<IResponse<MatchPool>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-pools/{pool}'.replace('{namespace}', this.namespace).replace('{pool}', pool)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, MatchPool, 'MatchPool')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get metric for a specific match pool Result: queueTime in seconds
   */
  getMetrics_ByPool(pool: string): Promise<IResponse<TicketMetricResultRecord>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-pools/{pool}/metrics'
      .replace('{namespace}', this.namespace)
      .replace('{pool}', pool)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, TicketMetricResultRecord, 'TicketMetricResultRecord')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get tickets in queue for a specific match pool Result: number of tickets and list of ticket detail in a match pool.
   */
  getTickets_ByPool(pool: string, queryParams?: { limit?: number; offset?: number }): Promise<IResponse<ListMatchPoolTicketsResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-pools/{pool}/tickets'
      .replace('{namespace}', this.namespace)
      .replace('{pool}', pool)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ListMatchPoolTicketsResponse, 'ListMatchPoolTicketsResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get player metric for a specific match pool
   */
  getMetricsPlayer_ByPool(pool: string): Promise<IResponse<PlayerMetricRecord>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-pools/{pool}/metrics/player'
      .replace('{namespace}', this.namespace)
      .replace('{pool}', pool)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PlayerMetricRecord, 'PlayerMetricRecord')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
