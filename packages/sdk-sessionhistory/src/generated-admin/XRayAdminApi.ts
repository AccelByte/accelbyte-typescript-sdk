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
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { XRayAcquiringDsQueryResponse } from '../generated-definitions/XRayAcquiringDsQueryResponse.js'
import { XRayAcquiringDsWaitTimeQueryResponse } from '../generated-definitions/XRayAcquiringDsWaitTimeQueryResponse.js'
import { XRayCanceledMatchmakingTicketQueryResponse } from '../generated-definitions/XRayCanceledMatchmakingTicketQueryResponse.js'
import { XRayCreatedMatchmakingTicketQueryResponse } from '../generated-definitions/XRayCreatedMatchmakingTicketQueryResponse.js'
import { XRayExpiredMatchmakingTicketQueryResponse } from '../generated-definitions/XRayExpiredMatchmakingTicketQueryResponse.js'
import { XRayMatchHistorQueryResponse } from '../generated-definitions/XRayMatchHistorQueryResponse.js'
import { XRayMatchLengthDurationQueryResponse } from '../generated-definitions/XRayMatchLengthDurationQueryResponse.js'
import { XRayMatchMatchmakingQueryResponse } from '../generated-definitions/XRayMatchMatchmakingQueryResponse.js'
import { XRayMatchMatchmakingTicketQueryResponse } from '../generated-definitions/XRayMatchMatchmakingTicketQueryResponse.js'
import { XRayMatchPoolPodTickMatchResponse } from '../generated-definitions/XRayMatchPoolPodTickMatchResponse.js'
import { XRayMatchPoolPodTickQueryResponse } from '../generated-definitions/XRayMatchPoolPodTickQueryResponse.js'
import { XRayMatchPoolPodTickTicketResponse } from '../generated-definitions/XRayMatchPoolPodTickTicketResponse.js'
import { XRayMatchPoolQueryResponse } from '../generated-definitions/XRayMatchPoolQueryResponse.js'
import { XRayMatchTicketHistoryQueryResponse } from '../generated-definitions/XRayMatchTicketHistoryQueryResponse.js'
import { XRayMatchesQueryResponse } from '../generated-definitions/XRayMatchesQueryResponse.js'
import { XRayTicketObservabilityRequest } from '../generated-definitions/XRayTicketObservabilityRequest.js'
import { XRayTicketObservabilityResponse } from '../generated-definitions/XRayTicketObservabilityResponse.js'
import { XRayTicketQueryResponse } from '../generated-definitions/XRayTicketQueryResponse.js'
import { XRayTotalActiveSessionQueryResponse } from '../generated-definitions/XRayTotalActiveSessionQueryResponse.js'
import { XRayTotalPlayerPersessionAvgQueryResponse } from '../generated-definitions/XRayTotalPlayerPersessionAvgQueryResponse.js'
import { XRayAdmin$ } from './endpoints/XRayAdmin$.js'

export function XRayAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Create ticket observability request Request body details (all attributes are optional): Timestamp : timestamp when calling this endpoint Action : support one of the following value: 1. &#34;matchFound&#34; 2. &#34;matchNotFound&#34; 3. &#34;flexed&#34; PartyID : ticket Party ID MatchID : match ID will be filled only when match found Namespace : ticket current namespace GameMode : ticket current matchpool ActiveAllianceRule : current active alliance ruleset ActiveMatchingRule : current active matching ruleset Function : name of the function that called the endpoint Iteration : total iteration before match found TimeToMatchSec : time to match (in seconds) will be filled only when match found UnmatchReason : reason when unable to find match RemainingTickets : remaining ticket when unable to find match RemainingPlayersPerTicket : remaining players when unable to find match UnbackfillReason : reason when unable to backfill IsBackfillMatch : flag to distinguish between new match and backfill match IsRuleSetFlexed : flag if ruleset is getting flexed TickID : tick id for the matchmaking tick SessionTickID : session tick id for differentiate session when doing matches
   */
  async function createXrayTicket(data: XRayTicketObservabilityRequest): Promise<XRayTicketObservabilityResponse> {
    const $ = new XRayAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createXrayTicket(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query xray timeline by ticketID
   */
  async function getXrayTicket_ByTicketId(
    ticketId: string,
    queryParams: { endDate: string | null; startDate: string | null; limit?: number; offset?: number }
  ): Promise<XRayTicketQueryResponse> {
    const $ = new XRayAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getXrayTicket_ByTicketId(ticketId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query total match.
   */
  async function getXrayMetricsTotalMatch(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string | null
  }): Promise<XRayMatchMatchmakingQueryResponse> {
    const $ = new XRayAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getXrayMetricsTotalMatch(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query total success and failed claim DS.
   */
  async function getXrayMetricsAcquiringDs(queryParams: {
    endDate: string | null
    startDate: string | null
  }): Promise<XRayAcquiringDsQueryResponse> {
    const $ = new XRayAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getXrayMetricsAcquiringDs(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query xray match pool.
   */
  async function getXrayMatchPool_ByPoolName(
    poolName: string,
    queryParams: { endDate: string | null; startDate: string | null }
  ): Promise<XRayMatchPoolQueryResponse> {
    const $ = new XRayAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getXrayMatchPool_ByPoolName(poolName, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query xray timeline by userID or ticketID
   */
  async function getTicketsXray_ByUserId(
    userId: string,
    queryParams: { endDate: string | null; startDate: string | null; limit?: number; offset?: number }
  ): Promise<XRayTicketQueryResponse> {
    const $ = new XRayAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getTicketsXray_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query xray timeline by matchID.
   */
  async function getTicketsXray_ByMatchId(matchId: string): Promise<XRayMatchesQueryResponse> {
    const $ = new XRayAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getTicketsXray_ByMatchId(matchId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query total ticket match.
   */
  async function getXrayMetricsTotalTicketMatch(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string | null
  }): Promise<XRayMatchMatchmakingTicketQueryResponse> {
    const $ = new XRayAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getXrayMetricsTotalTicketMatch(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query xray match histories.
   */
  async function getHistoriesXray_ByMatchId(
    matchId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<XRayMatchHistorQueryResponse> {
    const $ = new XRayAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getHistoriesXray_ByMatchId(matchId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query total active session.
   */
  async function getXrayMetricsTotalActiveSession(queryParams: {
    endDate: string | null
    startDate: string | null
    region?: string | null
  }): Promise<XRayTotalActiveSessionQueryResponse> {
    const $ = new XRayAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getXrayMetricsTotalActiveSession(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query total ticket created.
   */
  async function getXrayMetricsTotalTicketCreated(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string | null
  }): Promise<XRayCreatedMatchmakingTicketQueryResponse> {
    const $ = new XRayAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getXrayMetricsTotalTicketCreated(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query total ticket expired.
   */
  async function getXrayMetricsTotalTicketExpired(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string | null
  }): Promise<XRayExpiredMatchmakingTicketQueryResponse> {
    const $ = new XRayAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getXrayMetricsTotalTicketExpired(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query total ticket canceled.
   */
  async function getXrayMetricsTotalTicketCanceled(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string | null
  }): Promise<XRayCanceledMatchmakingTicketQueryResponse> {
    const $ = new XRayAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getXrayMetricsTotalTicketCanceled(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query match length duration avg. time in seconds
   */
  async function getXrayMetricsMatchLengthDurationAvg(queryParams: {
    endDate: string | null
    startDate: string | null
  }): Promise<XRayMatchLengthDurationQueryResponse> {
    const $ = new XRayAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getXrayMetricsMatchLengthDurationAvg(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query match length duration p99. time in seconds
   */
  async function getXrayMetricsMatchLengthDurationP99(queryParams: {
    endDate: string | null
    startDate: string | null
  }): Promise<XRayMatchLengthDurationQueryResponse> {
    const $ = new XRayAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getXrayMetricsMatchLengthDurationP99(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query xray match ticket histories.
   */
  async function getTicketHistoriesXray_ByMatchId(matchId: string): Promise<XRayMatchTicketHistoryQueryResponse> {
    const $ = new XRayAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getTicketHistoriesXray_ByMatchId(matchId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query acquiring ds wait time average. time in seconds
   */
  async function getXrayMetricsAcquiringDsWaitTimeAvg(queryParams: {
    endDate: string | null
    startDate: string | null
  }): Promise<XRayAcquiringDsWaitTimeQueryResponse> {
    const $ = new XRayAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getXrayMetricsAcquiringDsWaitTimeAvg(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query total player persession average.
   */
  async function getXrayMetricsTotalPlayerPersessionAvg(queryParams: {
    endDate: string | null
    startDate: string | null
  }): Promise<XRayTotalPlayerPersessionAvgQueryResponse> {
    const $ = new XRayAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getXrayMetricsTotalPlayerPersessionAvg(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query xray match pool ticks.
   */
  async function getTicksXray_ByPoolName_ByPodName(
    poolName: string,
    podName: string,
    queryParams: { endDate: string | null; startDate: string | null; all?: boolean | null; limit?: number; offset?: number }
  ): Promise<XRayMatchPoolPodTickQueryResponse> {
    const $ = new XRayAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getTicksXray_ByPoolName_ByPodName(poolName, podName, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query xray match pool tick matches by tick id.
   */
  async function getMatchesXray_ByPoolName_ByPodName_ByTickId(
    poolName: string,
    podName: string,
    tickId: string
  ): Promise<XRayMatchPoolPodTickMatchResponse> {
    const $ = new XRayAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getMatchesXray_ByPoolName_ByPodName_ByTickId(poolName, podName, tickId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query xray match pool tick tickets detail by tick id.
   */
  async function getTicketsXray_ByPoolName_ByPodName_ByTickId(
    poolName: string,
    podName: string,
    tickId: string
  ): Promise<XRayMatchPoolPodTickTicketResponse> {
    const $ = new XRayAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getTicketsXray_ByPoolName_ByPodName_ByTickId(poolName, podName, tickId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createXrayTicket,
    getXrayTicket_ByTicketId,
    getXrayMetricsTotalMatch,
    getXrayMetricsAcquiringDs,
    getXrayMatchPool_ByPoolName,
    getTicketsXray_ByUserId,
    getTicketsXray_ByMatchId,
    getXrayMetricsTotalTicketMatch,
    getHistoriesXray_ByMatchId,
    getXrayMetricsTotalActiveSession,
    getXrayMetricsTotalTicketCreated,
    getXrayMetricsTotalTicketExpired,
    getXrayMetricsTotalTicketCanceled,
    getXrayMetricsMatchLengthDurationAvg,
    getXrayMetricsMatchLengthDurationP99,
    getTicketHistoriesXray_ByMatchId,
    getXrayMetricsAcquiringDsWaitTimeAvg,
    getXrayMetricsTotalPlayerPersessionAvg,
    getTicksXray_ByPoolName_ByPodName,
    getMatchesXray_ByPoolName_ByPodName_ByTickId,
    getTicketsXray_ByPoolName_ByPodName_ByTickId
  }
}
