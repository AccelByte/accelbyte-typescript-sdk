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
import { GameSessionDetail } from '../generated-definitions/GameSessionDetail.js'
import { GameSessionDetailQueryResponse } from '../generated-definitions/GameSessionDetailQueryResponse.js'
import { MatchmakingDetail } from '../generated-definitions/MatchmakingDetail.js'
import { MatchmakingDetailQueryResponse } from '../generated-definitions/MatchmakingDetailQueryResponse.js'
import { PartyDetail } from '../generated-definitions/PartyDetail.js'
import { PartyDetailQueryResponse } from '../generated-definitions/PartyDetailQueryResponse.js'
import { TicketDetailQueryResponse } from '../generated-definitions/TicketDetailQueryResponse.js'
import { TicketObservabilityDetail } from '../generated-definitions/TicketObservabilityDetail.js'
import { GameSessionDetailAdmin$ } from './endpoints/GameSessionDetailAdmin$.js'

export function GameSessionDetailAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getParties(queryParams?: {
    limit?: number
    offset?: number
    order?: string | null
    orderBy?: string | null
    partyID?: string | null
    userID?: string | null
  }): Promise<AxiosResponse<PartyDetailQueryResponse>> {
    const $ = new GameSessionDetailAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getParties(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

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
  }): Promise<AxiosResponse<TicketDetailQueryResponse>> {
    const $ = new GameSessionDetailAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTickets(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getMatchmaking(queryParams?: {
    gameSessionID?: string | null
    limit?: number
    offset?: number
    order?: string | null
    orderBy?: string | null
    ticketID?: string | null
    userID?: string | null
  }): Promise<AxiosResponse<MatchmakingDetailQueryResponse>> {
    const $ = new GameSessionDetailAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMatchmaking(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getGamesessions(queryParams?: {
    endDate?: string | null
    gameSessionID?: string | null
    limit?: number
    offset?: number
    order?: string | null
    orderBy?: string | null
    startDate?: string | null
    userID?: string | null
  }): Promise<AxiosResponse<GameSessionDetailQueryResponse>> {
    const $ = new GameSessionDetailAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGamesessions(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getTicket_ByTicketId(ticketId: string): Promise<AxiosResponse<TicketObservabilityDetail>> {
    const $ = new GameSessionDetailAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTicket_ByTicketId(ticketId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getParty_BySessionId(sessionId: string): Promise<AxiosResponse<PartyDetail>> {
    const $ = new GameSessionDetailAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getParty_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getGamesession_BySessionId(sessionId: string): Promise<AxiosResponse<GameSessionDetail>> {
    const $ = new GameSessionDetailAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGamesession_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getMatchmakingTicket_ByTicketId(ticketId: string): Promise<AxiosResponse<MatchmakingDetail>> {
    const $ = new GameSessionDetailAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMatchmakingTicket_ByTicketId(ticketId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getMatchmakingSession_BySessionId(sessionId: string): Promise<AxiosResponse<MatchmakingDetail>> {
    const $ = new GameSessionDetailAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMatchmakingSession_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get all parties.
     */
    getParties,
    /**
     * Get all matchmaking ticket.
     */
    getTickets,
    /**
     * Get all matchmaking.
     */
    getMatchmaking,
    /**
     * Get all game sessions.
     */
    getGamesessions,
    /**
     * Get detail matchmaking ticket history by ticket ID.
     */
    getTicket_ByTicketId,
    /**
     * Get party detail.
     */
    getParty_BySessionId,
    /**
     * Get game session detail.
     */
    getGamesession_BySessionId,
    /**
     * Get detail matchmaking history by ticket ID.
     */
    getMatchmakingTicket_ByTicketId,
    /**
     * Get detail matchmaking history by session ID.
     */
    getMatchmakingSession_BySessionId
  }
}
