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
import { GameSessionDetail } from '../generated-definitions/GameSessionDetail.js'
import { GameSessionDetailQueryResponse } from '../generated-definitions/GameSessionDetailQueryResponse.js'
import { MatchmakingDetail } from '../generated-definitions/MatchmakingDetail.js'
import { MatchmakingDetailQueryResponse } from '../generated-definitions/MatchmakingDetailQueryResponse.js'
import { PartyDetail } from '../generated-definitions/PartyDetail.js'
import { PartyDetailQueryResponse } from '../generated-definitions/PartyDetailQueryResponse.js'
import { TicketDetailQueryResponse } from '../generated-definitions/TicketDetailQueryResponse.js'
import { TicketObservabilityDetail } from '../generated-definitions/TicketObservabilityDetail.js'
import { GameSessionDetailAdmin$ } from './endpoints/GameSessionDetailAdmin$.js'

export function GameSessionDetailAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Get all parties.
   */
  async function getParties(queryParams?: {
    limit?: number
    offset?: number
    order?: string | null
    orderBy?: string | null
    partyID?: string | null
    userID?: string | null
  }): Promise<PartyDetailQueryResponse> {
    const $ = new GameSessionDetailAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getParties(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get all matchmaking ticket.
   */
  async function getTickets(queryParams?: {
    endDate?: string | null
    gameMode?: string | null
    limit?: number
    offset?: number
    order?: string | null
    partyID?: string | null
    region?: string | null
    startDate?: string | null
    userIDs?: string | null
  }): Promise<TicketDetailQueryResponse> {
    const $ = new GameSessionDetailAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getTickets(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get all matchmaking.
   */
  async function getMatchmaking(queryParams?: {
    gameSessionID?: string | null
    limit?: number
    offset?: number
    order?: string | null
    orderBy?: string | null
    ticketID?: string | null
    userID?: string | null
  }): Promise<MatchmakingDetailQueryResponse> {
    const $ = new GameSessionDetailAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getMatchmaking(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get all game sessions.
   */
  async function getGamesessions(queryParams?: {
    endDate?: string | null
    gameSessionID?: string | null
    limit?: number
    offset?: number
    order?: string | null
    orderBy?: string | null
    startDate?: string | null
    userID?: string | null
  }): Promise<GameSessionDetailQueryResponse> {
    const $ = new GameSessionDetailAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getGamesessions(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get detail matchmaking ticket history by ticket ID.
   */
  async function getTicket_ByTicketId(ticketId: string): Promise<TicketObservabilityDetail> {
    const $ = new GameSessionDetailAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getTicket_ByTicketId(ticketId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get party detail.
   */
  async function getParty_BySessionId(sessionId: string): Promise<PartyDetail> {
    const $ = new GameSessionDetailAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getParty_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get game session detail.
   */
  async function getGamesession_BySessionId(sessionId: string): Promise<GameSessionDetail> {
    const $ = new GameSessionDetailAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getGamesession_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get detail matchmaking history by ticket ID.
   */
  async function getMatchmakingTicket_ByTicketId(ticketId: string): Promise<MatchmakingDetail> {
    const $ = new GameSessionDetailAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getMatchmakingTicket_ByTicketId(ticketId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get detail matchmaking history by session ID.
   */
  async function getMatchmakingSession_BySessionId(sessionId: string): Promise<MatchmakingDetail> {
    const $ = new GameSessionDetailAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getMatchmakingSession_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getParties,
    getTickets,
    getMatchmaking,
    getGamesessions,
    getTicket_ByTicketId,
    getParty_BySessionId,
    getGamesession_BySessionId,
    getMatchmakingTicket_ByTicketId,
    getMatchmakingSession_BySessionId
  }
}
