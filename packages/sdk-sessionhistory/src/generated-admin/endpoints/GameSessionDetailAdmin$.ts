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
import { GameSessionDetail } from '../../generated-definitions/GameSessionDetail.js'
import { GameSessionDetailQueryResponse } from '../../generated-definitions/GameSessionDetailQueryResponse.js'
import { MatchmakingDetail } from '../../generated-definitions/MatchmakingDetail.js'
import { MatchmakingDetailQueryResponse } from '../../generated-definitions/MatchmakingDetailQueryResponse.js'
import { PartyDetail } from '../../generated-definitions/PartyDetail.js'
import { PartyDetailQueryResponse } from '../../generated-definitions/PartyDetailQueryResponse.js'
import { TicketDetailQueryResponse } from '../../generated-definitions/TicketDetailQueryResponse.js'
import { TicketObservabilityDetail } from '../../generated-definitions/TicketObservabilityDetail.js'

export class GameSessionDetailAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get all parties.
   */
  getParties(queryParams?: {
    limit?: number
    offset?: number
    order?: string | null
    orderBy?: string | null
    partyID?: string | null
    userID?: string | null
  }): Promise<Response<PartyDetailQueryResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/sessionhistory/v1/admin/namespaces/{namespace}/parties'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PartyDetailQueryResponse,
      'PartyDetailQueryResponse'
    )
  }
  /**
   * Get all matchmaking ticket.
   */
  getTickets(queryParams?: {
    endDate?: string | null
    gameMode?: string | null
    limit?: number
    offset?: number
    order?: string | null
    partyID?: string | null
    region?: string | null
    startDate?: string | null
    userIDs?: string | null
  }): Promise<Response<TicketDetailQueryResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/sessionhistory/v1/admin/namespaces/{namespace}/tickets'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      TicketDetailQueryResponse,
      'TicketDetailQueryResponse'
    )
  }
  /**
   * Get all matchmaking.
   */
  getMatchmaking(queryParams?: {
    gameSessionID?: string | null
    limit?: number
    offset?: number
    order?: string | null
    orderBy?: string | null
    ticketID?: string | null
    userID?: string | null
  }): Promise<Response<MatchmakingDetailQueryResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/sessionhistory/v1/admin/namespaces/{namespace}/matchmaking'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      MatchmakingDetailQueryResponse,
      'MatchmakingDetailQueryResponse'
    )
  }
  /**
   * Get all game sessions.
   */
  getGamesessions(queryParams?: {
    endDate?: string | null
    gameSessionID?: string | null
    limit?: number
    offset?: number
    order?: string | null
    orderBy?: string | null
    startDate?: string | null
    userID?: string | null
  }): Promise<Response<GameSessionDetailQueryResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/sessionhistory/v1/admin/namespaces/{namespace}/gamesessions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GameSessionDetailQueryResponse,
      'GameSessionDetailQueryResponse'
    )
  }
  /**
   * Get detail matchmaking ticket history by ticket ID.
   */
  getTicket_ByTicketId(ticketId: string): Promise<Response<TicketObservabilityDetail>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionhistory/v1/admin/namespaces/{namespace}/tickets/{ticketId}'
      .replace('{namespace}', this.namespace)
      .replace('{ticketId}', ticketId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      TicketObservabilityDetail,
      'TicketObservabilityDetail'
    )
  }
  /**
   * Get party detail.
   */
  getParty_BySessionId(sessionId: string): Promise<Response<PartyDetail>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionhistory/v1/admin/namespaces/{namespace}/parties/{sessionId}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionId}', sessionId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PartyDetail, 'PartyDetail')
  }
  /**
   * Get game session detail.
   */
  getGamesession_BySessionId(sessionId: string): Promise<Response<GameSessionDetail>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionhistory/v1/admin/namespaces/{namespace}/gamesessions/{sessionId}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionId}', sessionId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GameSessionDetail, 'GameSessionDetail')
  }
  /**
   * Get detail matchmaking history by ticket ID.
   */
  getMatchmakingTicket_ByTicketId(ticketId: string): Promise<Response<MatchmakingDetail>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionhistory/v1/admin/namespaces/{namespace}/matchmaking/ticket/{ticketId}'
      .replace('{namespace}', this.namespace)
      .replace('{ticketId}', ticketId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MatchmakingDetail, 'MatchmakingDetail')
  }
  /**
   * Get detail matchmaking history by session ID.
   */
  getMatchmakingSession_BySessionId(sessionId: string): Promise<Response<MatchmakingDetail>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionhistory/v1/admin/namespaces/{namespace}/matchmaking/session/{sessionId}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionId}', sessionId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MatchmakingDetail, 'MatchmakingDetail')
  }
}
