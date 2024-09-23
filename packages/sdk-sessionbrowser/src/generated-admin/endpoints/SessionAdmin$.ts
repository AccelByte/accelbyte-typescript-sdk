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
import { ActiveCustomGameResponse } from '../../generated-definitions/ActiveCustomGameResponse.js'
import { ActiveMatchmakingGameResponse } from '../../generated-definitions/ActiveMatchmakingGameResponse.js'
import { AdminSessionResponse } from '../../generated-definitions/AdminSessionResponse.js'
import { CountActiveSessionResponse } from '../../generated-definitions/CountActiveSessionResponse.js'
import { GetSessionHistoryDetailedResponseItemArray } from '../../generated-definitions/GetSessionHistoryDetailedResponseItemArray.js'
import { GetSessionHistorySearchResponseV2 } from '../../generated-definitions/GetSessionHistorySearchResponseV2.js'
import { SessionQueryResponse } from '../../generated-definitions/SessionQueryResponse.js'

export class SessionAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Query to available game session
   */
  getGamesession(queryParams: {
    session_type: string | null
    game_mode?: string | null
    game_version?: string | null
    joinable?: string | null
    limit?: number
    match_exist?: string | null
    match_id?: string | null
    offset?: number
    server_status?: string | null
    user_id?: string | null
  }): Promise<Response<SessionQueryResponse>> {
    const params = { limit: 25, ...queryParams } as AxiosRequestConfig
    const url = '/sessionbrowser/admin/namespaces/{namespace}/gamesession'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, SessionQueryResponse, 'SessionQueryResponse')
  }
  /**
   * Admin delete the session by session ID
   */
  deleteGamesession_BySessionId(sessionID: string): Promise<Response<AdminSessionResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionbrowser/admin/namespaces/{namespace}/gamesession/{sessionID}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AdminSessionResponse, 'AdminSessionResponse')
  }
  /**
   * Get the session by session ID for admin user
   */
  getGamesession_BySessionId(sessionID: string): Promise<Response<AdminSessionResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionbrowser/admin/namespaces/{namespace}/gamesession/{sessionID}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AdminSessionResponse, 'AdminSessionResponse')
  }
  /**
   * Search sessions. Optimize the query by differentiating query with filter namespace only and filter with namespace &amp; other filter (partyID, userID, matchID). Query with filter namespace only will not group whole session data while query with filter namespace &amp; other filter will include session data.
   */
  getSessionsHistorySearch(queryParams: {
    limit: number
    offset: number
    channel?: string | null
    deleted?: boolean | null
    matchID?: string | null
    partyID?: string | null
    sessionType?: string | null
    status?: string | null
    userID?: string | null
  }): Promise<Response<GetSessionHistorySearchResponseV2>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/sessionbrowser/admin/namespaces/{namespace}/sessions/history/search'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetSessionHistorySearchResponseV2,
      'GetSessionHistorySearchResponseV2'
    )
  }
  /**
   * Get all active session
   */
  getGamesessionActiveCount(queryParams?: { session_type?: string | null }): Promise<Response<CountActiveSessionResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/sessionbrowser/admin/namespaces/{namespace}/gamesession/active/count'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      CountActiveSessionResponse,
      'CountActiveSessionResponse'
    )
  }
  /**
   * Get all active session for custom game, this return only dedicated session type
   */
  getGamesessionActiveCustomGame(queryParams?: {
    limit?: number
    offset?: number
    server_region?: string | null
    session_id?: string | null
  }): Promise<Response<ActiveCustomGameResponse>> {
    const params = { limit: 25, ...queryParams } as AxiosRequestConfig
    const url = '/sessionbrowser/admin/namespaces/{namespace}/gamesession/active/custom-game'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ActiveCustomGameResponse,
      'ActiveCustomGameResponse'
    )
  }
  /**
   * Get all active session for matchmaking game, this return only dedicated session type
   */
  getGamesessionActiveMatchmakingGame(queryParams?: {
    limit?: number
    match_id?: string | null
    offset?: number
    server_region?: string | null
    session_id?: string | null
  }): Promise<Response<ActiveMatchmakingGameResponse>> {
    const params = { limit: 25, ...queryParams } as AxiosRequestConfig
    const url = '/sessionbrowser/admin/namespaces/{namespace}/gamesession/active/matchmaking-game'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ActiveMatchmakingGameResponse,
      'ActiveMatchmakingGameResponse'
    )
  }
  /**
   * Get session history detailed. if party_id value empty/null, field will not show in response body.
   */
  getHistoryDetailed_ByMatchId(matchID: string): Promise<Response<GetSessionHistoryDetailedResponseItemArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionbrowser/admin/namespaces/{namespace}/sessions/{matchID}/history/detailed'
      .replace('{namespace}', this.namespace)
      .replace('{matchID}', matchID)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetSessionHistoryDetailedResponseItemArray,
      'GetSessionHistoryDetailedResponseItemArray'
    )
  }
}
