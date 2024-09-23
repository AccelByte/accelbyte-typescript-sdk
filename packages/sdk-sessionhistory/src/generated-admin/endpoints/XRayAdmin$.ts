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
import { XRayAcquiringDsQueryResponse } from '../../generated-definitions/XRayAcquiringDsQueryResponse.js'
import { XRayAcquiringDsWaitTimeQueryResponse } from '../../generated-definitions/XRayAcquiringDsWaitTimeQueryResponse.js'
import { XRayBulkTicketObservabilityRequest } from '../../generated-definitions/XRayBulkTicketObservabilityRequest.js'
import { XRayBulkTicketObservabilityResponse } from '../../generated-definitions/XRayBulkTicketObservabilityResponse.js'
import { XRayCanceledMatchmakingTicketQueryResponse } from '../../generated-definitions/XRayCanceledMatchmakingTicketQueryResponse.js'
import { XRayCreatedMatchmakingTicketQueryResponse } from '../../generated-definitions/XRayCreatedMatchmakingTicketQueryResponse.js'
import { XRayExpiredMatchmakingTicketQueryResponse } from '../../generated-definitions/XRayExpiredMatchmakingTicketQueryResponse.js'
import { XRayMatchHistorQueryResponse } from '../../generated-definitions/XRayMatchHistorQueryResponse.js'
import { XRayMatchLengthDurationQueryResponse } from '../../generated-definitions/XRayMatchLengthDurationQueryResponse.js'
import { XRayMatchMatchmakingQueryResponse } from '../../generated-definitions/XRayMatchMatchmakingQueryResponse.js'
import { XRayMatchMatchmakingTicketQueryResponse } from '../../generated-definitions/XRayMatchMatchmakingTicketQueryResponse.js'
import { XRayMatchPoolPodTickMatchResponse } from '../../generated-definitions/XRayMatchPoolPodTickMatchResponse.js'
import { XRayMatchPoolPodTickQueryResponse } from '../../generated-definitions/XRayMatchPoolPodTickQueryResponse.js'
import { XRayMatchPoolPodTickTicketResponse } from '../../generated-definitions/XRayMatchPoolPodTickTicketResponse.js'
import { XRayMatchPoolQueryResponse } from '../../generated-definitions/XRayMatchPoolQueryResponse.js'
import { XRayMatchTicketHistoryQueryResponse } from '../../generated-definitions/XRayMatchTicketHistoryQueryResponse.js'
import { XRayMatchesQueryResponse } from '../../generated-definitions/XRayMatchesQueryResponse.js'
import { XRayTicketObservabilityRequest } from '../../generated-definitions/XRayTicketObservabilityRequest.js'
import { XRayTicketObservabilityResponse } from '../../generated-definitions/XRayTicketObservabilityResponse.js'
import { XRayTicketQueryResponse } from '../../generated-definitions/XRayTicketQueryResponse.js'
import { XRayTotalActiveSessionQueryResponse } from '../../generated-definitions/XRayTotalActiveSessionQueryResponse.js'
import { XRayTotalPlayerPersessionAvgQueryResponse } from '../../generated-definitions/XRayTotalPlayerPersessionAvgQueryResponse.js'

export class XRayAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Create ticket observability request Request body details (all attributes are optional): Timestamp : timestamp when calling this endpoint Action : support one of the following value: 1. &#34;matchFound&#34; 2. &#34;matchNotFound&#34; 3. &#34;flexed&#34; TicketID : ticket ID MatchID : match ID will be filled only when match found Namespace : ticket current namespace GameMode : ticket current matchpool ActiveAllianceRule : current active alliance ruleset ActiveMatchingRule : current active matching ruleset Function : name of the function that called the endpoint Iteration : total iteration before match found TimeToMatchSec : time to match (in seconds) will be filled only when match found UnmatchReason : reason when unable to find match RemainingTickets : remaining ticket when unable to find match RemainingPlayersPerTicket : remaining players when unable to find match UnbackfillReason : reason when unable to backfill IsBackfillMatch : flag to distinguish between new match and backfill match IsRuleSetFlexed : flag if ruleset is getting flexed TickID : tick id for the matchmaking tick SessionTickID : session tick id for differentiate session when doing matches
   */
  createXrayTicket_v2(data: XRayTicketObservabilityRequest): Promise<Response<XRayTicketObservabilityResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionhistory/v2/admin/namespaces/{namespace}/xray/tickets'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XRayTicketObservabilityResponse,
      'XRayTicketObservabilityResponse'
    )
  }
  /**
   * Create bulk ticket observability request Request body details (all attributes are optional): Timestamp : timestamp when calling this endpoint Action : support one of the following value: 1. &#34;matchFound&#34; 2. &#34;matchNotFound&#34; 3. &#34;flexed&#34; PartyID : ticket Party ID MatchID : match ID will be filled only when match found Namespace : ticket current namespace GameMode : ticket current matchpool ActiveAllianceRule : current active alliance ruleset ActiveMatchingRule : current active matching ruleset Function : name of the function that called the endpoint Iteration : total iteration before match found TimeToMatchSec : time to match (in seconds) will be filled only when match found UnmatchReason : reason when unable to find match RemainingTickets : remaining ticket when unable to find match RemainingPlayersPerTicket : remaining players when unable to find match UnbackfillReason : reason when unable to backfill IsBackfillMatch : flag to distinguish between new match and backfill match IsRuleSetFlexed : flag if ruleset is getting flexed TickID : tick id for the matchmaking tick SessionTickID : session tick id for differentiate session when doing matches
   */
  createXrayTicketBulk_v2(data: XRayBulkTicketObservabilityRequest): Promise<Response<XRayBulkTicketObservabilityResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionhistory/v2/admin/namespaces/{namespace}/xray/tickets/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XRayBulkTicketObservabilityResponse,
      'XRayBulkTicketObservabilityResponse'
    )
  }
  /**
   * Query xray timeline by ticketID
   */
  getXrayTicket_ByTicketId_v2(
    ticketId: string,
    queryParams: { endDate: string | null; startDate: string | null; limit?: number; offset?: number }
  ): Promise<Response<XRayTicketQueryResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/sessionhistory/v2/admin/namespaces/{namespace}/xray/tickets/{ticketId}'
      .replace('{namespace}', this.namespace)
      .replace('{ticketId}', ticketId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XRayTicketQueryResponse,
      'XRayTicketQueryResponse'
    )
  }
  /**
   * Query total match.
   */
  getXrayMetricsTotalMatch_v2(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string[]
  }): Promise<Response<XRayMatchMatchmakingQueryResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/sessionhistory/v2/admin/namespaces/{namespace}/xray/metrics/total-match'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XRayMatchMatchmakingQueryResponse,
      'XRayMatchMatchmakingQueryResponse'
    )
  }
  /**
   * Query total success and failed claim DS.
   */
  getXrayMetricsAcquiringDs_v2(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string[]
  }): Promise<Response<XRayAcquiringDsQueryResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/sessionhistory/v2/admin/namespaces/{namespace}/xray/metrics/acquiring-ds'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XRayAcquiringDsQueryResponse,
      'XRayAcquiringDsQueryResponse'
    )
  }
  /**
   * Query xray match pool. query can using matchpool array with separate &#34;,&#34;
   */
  getXrayMatchPool_ByPoolName_v2(
    poolName: string[],
    queryParams: { endDate: string | null; startDate: string | null }
  ): Promise<Response<XRayMatchPoolQueryResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/sessionhistory/v2/admin/namespaces/{namespace}/xray/match-pools/{poolName}'
      .replace('{namespace}', this.namespace)
      .replace('{poolName}', String(poolName))
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XRayMatchPoolQueryResponse,
      'XRayMatchPoolQueryResponse'
    )
  }
  /**
   * Query xray timeline by userID or ticketID
   */
  getTicketsXray_ByUserId_v2(
    userId: string,
    queryParams: { endDate: string | null; startDate: string | null; limit?: number; offset?: number }
  ): Promise<Response<XRayTicketQueryResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/sessionhistory/v2/admin/namespaces/{namespace}/xray/users/{userId}/tickets'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XRayTicketQueryResponse,
      'XRayTicketQueryResponse'
    )
  }
  /**
   * Query xray timeline by matchID.
   */
  getTicketsXray_ByMatchId_v2(matchId: string): Promise<Response<XRayMatchesQueryResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionhistory/v2/admin/namespaces/{namespace}/xray/matches/{matchId}/tickets'
      .replace('{namespace}', this.namespace)
      .replace('{matchId}', matchId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XRayMatchesQueryResponse,
      'XRayMatchesQueryResponse'
    )
  }
  /**
   * Query total ticket match.
   */
  getXrayMetricsTotalTicketMatch_v2(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string[]
  }): Promise<Response<XRayMatchMatchmakingTicketQueryResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/sessionhistory/v2/admin/namespaces/{namespace}/xray/metrics/total-ticket-match'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XRayMatchMatchmakingTicketQueryResponse,
      'XRayMatchMatchmakingTicketQueryResponse'
    )
  }
  /**
   * Query xray match histories.
   */
  getHistoriesXray_ByMatchId_v2(
    matchId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<Response<XRayMatchHistorQueryResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/sessionhistory/v2/admin/namespaces/{namespace}/xray/matches/{matchId}/histories'
      .replace('{namespace}', this.namespace)
      .replace('{matchId}', matchId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XRayMatchHistorQueryResponse,
      'XRayMatchHistorQueryResponse'
    )
  }
  /**
   * Query total active session.
   */
  getXrayMetricsTotalActiveSession_v2(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string[]
    region?: string | null
  }): Promise<Response<XRayTotalActiveSessionQueryResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/sessionhistory/v2/admin/namespaces/{namespace}/xray/metrics/total-active-session'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XRayTotalActiveSessionQueryResponse,
      'XRayTotalActiveSessionQueryResponse'
    )
  }
  /**
   * Query total ticket created.
   */
  getXrayMetricsTotalTicketCreated_v2(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string[]
  }): Promise<Response<XRayCreatedMatchmakingTicketQueryResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/sessionhistory/v2/admin/namespaces/{namespace}/xray/metrics/total-ticket-created'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XRayCreatedMatchmakingTicketQueryResponse,
      'XRayCreatedMatchmakingTicketQueryResponse'
    )
  }
  /**
   * Query total ticket expired.
   */
  getXrayMetricsTotalTicketExpired_v2(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string[]
  }): Promise<Response<XRayExpiredMatchmakingTicketQueryResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/sessionhistory/v2/admin/namespaces/{namespace}/xray/metrics/total-ticket-expired'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XRayExpiredMatchmakingTicketQueryResponse,
      'XRayExpiredMatchmakingTicketQueryResponse'
    )
  }
  /**
   * Query total ticket canceled.
   */
  getXrayMetricsTotalTicketCanceled_v2(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string[]
  }): Promise<Response<XRayCanceledMatchmakingTicketQueryResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/sessionhistory/v2/admin/namespaces/{namespace}/xray/metrics/total-ticket-canceled'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XRayCanceledMatchmakingTicketQueryResponse,
      'XRayCanceledMatchmakingTicketQueryResponse'
    )
  }
  /**
   * Query match length duration avg. time in seconds
   */
  getXrayMetricsMatchLengthDurationAvg_v2(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string[]
  }): Promise<Response<XRayMatchLengthDurationQueryResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/sessionhistory/v2/admin/namespaces/{namespace}/xray/metrics/match-length-duration-avg'.replace(
      '{namespace}',
      this.namespace
    )
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XRayMatchLengthDurationQueryResponse,
      'XRayMatchLengthDurationQueryResponse'
    )
  }
  /**
   * Query match length duration p99. time in seconds
   */
  getXrayMetricsMatchLengthDurationP99_v2(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string[]
  }): Promise<Response<XRayMatchLengthDurationQueryResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/sessionhistory/v2/admin/namespaces/{namespace}/xray/metrics/match-length-duration-p99'.replace(
      '{namespace}',
      this.namespace
    )
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XRayMatchLengthDurationQueryResponse,
      'XRayMatchLengthDurationQueryResponse'
    )
  }
  /**
   * Query xray match ticket histories.
   */
  getTicketHistoriesXray_ByMatchId_v2(matchId: string): Promise<Response<XRayMatchTicketHistoryQueryResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionhistory/v2/admin/namespaces/{namespace}/xray/matches/{matchId}/ticket-histories'
      .replace('{namespace}', this.namespace)
      .replace('{matchId}', matchId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XRayMatchTicketHistoryQueryResponse,
      'XRayMatchTicketHistoryQueryResponse'
    )
  }
  /**
   * Query acquiring ds wait time average. time in seconds
   */
  getXrayMetricsAcquiringDsWaitTimeAvg_v2(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string[]
  }): Promise<Response<XRayAcquiringDsWaitTimeQueryResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/sessionhistory/v2/admin/namespaces/{namespace}/xray/metrics/acquiring-ds-wait-time-avg'.replace(
      '{namespace}',
      this.namespace
    )
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XRayAcquiringDsWaitTimeQueryResponse,
      'XRayAcquiringDsWaitTimeQueryResponse'
    )
  }
  /**
   * Query total player persession average.
   */
  getXrayMetricsTotalPlayerPersessionAvg_v2(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string[]
  }): Promise<Response<XRayTotalPlayerPersessionAvgQueryResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/sessionhistory/v2/admin/namespaces/{namespace}/xray/metrics/total-player-persession-avg'.replace(
      '{namespace}',
      this.namespace
    )
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XRayTotalPlayerPersessionAvgQueryResponse,
      'XRayTotalPlayerPersessionAvgQueryResponse'
    )
  }
  /**
   * Query xray match pool ticks.
   */
  getTicksXray_ByPoolName_ByPodName_v2(
    poolName: string,
    podName: string,
    queryParams: { endDate: string | null; startDate: string | null; all?: boolean | null; limit?: number; offset?: number }
  ): Promise<Response<XRayMatchPoolPodTickQueryResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/sessionhistory/v2/admin/namespaces/{namespace}/xray/match-pools/{poolName}/pods/{podName}/ticks'
      .replace('{namespace}', this.namespace)
      .replace('{poolName}', poolName)
      .replace('{podName}', podName)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XRayMatchPoolPodTickQueryResponse,
      'XRayMatchPoolPodTickQueryResponse'
    )
  }
  /**
   * Query xray match pool tick matches by tick id.
   */
  getMatchesXray_ByPoolName_ByPodName_ByTickId_v2(
    poolName: string,
    podName: string,
    tickId: string
  ): Promise<Response<XRayMatchPoolPodTickMatchResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionhistory/v2/admin/namespaces/{namespace}/xray/match-pools/{poolName}/pods/{podName}/ticks/{tickId}/matches'
      .replace('{namespace}', this.namespace)
      .replace('{poolName}', poolName)
      .replace('{podName}', podName)
      .replace('{tickId}', tickId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XRayMatchPoolPodTickMatchResponse,
      'XRayMatchPoolPodTickMatchResponse'
    )
  }
  /**
   * Query xray match pool tick tickets detail by tick id.
   */
  getTicketsXray_ByPoolName_ByPodName_ByTickId_v2(
    poolName: string,
    podName: string,
    tickId: string
  ): Promise<Response<XRayMatchPoolPodTickTicketResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionhistory/v2/admin/namespaces/{namespace}/xray/match-pools/{poolName}/pods/{podName}/ticks/{tickId}/tickets'
      .replace('{namespace}', this.namespace)
      .replace('{poolName}', poolName)
      .replace('{podName}', podName)
      .replace('{tickId}', tickId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      XRayMatchPoolPodTickTicketResponse,
      'XRayMatchPoolPodTickTicketResponse'
    )
  }
}
