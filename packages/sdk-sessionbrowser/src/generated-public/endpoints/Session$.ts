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
import { AddPlayerRequest } from '../../generated-definitions/AddPlayerRequest.js'
import { AddPlayerResponse } from '../../generated-definitions/AddPlayerResponse.js'
import { CreateSessionRequest } from '../../generated-definitions/CreateSessionRequest.js'
import { JoinGameSessionRequest } from '../../generated-definitions/JoinGameSessionRequest.js'
import { RecentPlayerQueryResponse } from '../../generated-definitions/RecentPlayerQueryResponse.js'
import { SessionByUserIDsResponse } from '../../generated-definitions/SessionByUserIDsResponse.js'
import { SessionQueryResponse } from '../../generated-definitions/SessionQueryResponse.js'
import { SessionResponse } from '../../generated-definitions/SessionResponse.js'
import { UpdateSessionRequest } from '../../generated-definitions/UpdateSessionRequest.js'
import { UpdateSettingsRequest } from '../../generated-definitions/UpdateSettingsRequest.js'

export class Session$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Query available game session
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
    const url = '/sessionbrowser/namespaces/{namespace}/gamesession'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, SessionQueryResponse, 'SessionQueryResponse')
  }
  /**
   * This end point intended to be called directly by P2P game client host or by DSMC
   */
  createGamesession(data: CreateSessionRequest): Promise<Response<SessionResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionbrowser/namespaces/{namespace}/gamesession'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, SessionResponse, 'SessionResponse')
  }
  /**
   * Query game sessions by comma separated user ids
   */
  getGamesessionBulk(queryParams: { user_ids: string | null }): Promise<Response<SessionByUserIDsResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/sessionbrowser/namespaces/{namespace}/gamesession/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      SessionByUserIDsResponse,
      'SessionByUserIDsResponse'
    )
  }
  /**
   * Query recent player by user ID
   */
  getRecentplayer_ByUserId(userID: string): Promise<Response<RecentPlayerQueryResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionbrowser/namespaces/{namespace}/recentplayer/{userID}'
      .replace('{namespace}', this.namespace)
      .replace('{userID}', userID)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RecentPlayerQueryResponse,
      'RecentPlayerQueryResponse'
    )
  }
  /**
   * Delete the session (p2p) by session ID
   */
  deleteGamesession_BySessionId(sessionID: string): Promise<Response<SessionResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionbrowser/namespaces/{namespace}/gamesession/{sessionID}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, SessionResponse, 'SessionResponse')
  }
  /**
   * Get the session by session ID
   */
  getGamesession_BySessionId(sessionID: string): Promise<Response<SessionResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionbrowser/namespaces/{namespace}/gamesession/{sessionID}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, SessionResponse, 'SessionResponse')
  }
  /**
   * Update game session, used to update the current player
   */
  updateGamesession_BySessionId(sessionID: string, data: UpdateSessionRequest): Promise<Response<SessionResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionbrowser/namespaces/{namespace}/gamesession/{sessionID}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, SessionResponse, 'SessionResponse')
  }
  /**
   * Join the specified session by session ID. Possible the game required a password to join
   */
  fetchJoin_BySessionId(sessionID: string, data: JoinGameSessionRequest): Promise<Response<SessionResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionbrowser/namespaces/{namespace}/gamesession/{sessionID}/join'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, SessionResponse, 'SessionResponse')
  }
  /**
   * Add player to game session
   */
  updatePlayer_BySessionId(sessionID: string, data: AddPlayerRequest): Promise<Response<AddPlayerResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionbrowser/namespaces/{namespace}/gamesession/{sessionID}/player'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AddPlayerResponse, 'AddPlayerResponse')
  }
  /**
   * Only use for local DS entry, will error when calling non local DS entry
   */
  deleteLocald_BySessionId(sessionID: string): Promise<Response<SessionResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionbrowser/namespaces/{namespace}/gamesession/{sessionID}/localds'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, SessionResponse, 'SessionResponse')
  }
  /**
   * Update game session, used to update OtherSettings
   */
  updateSetting_BySessionId(sessionID: string, data: UpdateSettingsRequest): Promise<Response<SessionResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionbrowser/namespaces/{namespace}/gamesession/{sessionID}/settings'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, SessionResponse, 'SessionResponse')
  }
  /**
   * Remove player from game session
   */
  deletePlayer_BySessionId_ByUserId(sessionID: string, userID: string): Promise<Response<AddPlayerResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/sessionbrowser/namespaces/{namespace}/gamesession/{sessionID}/player/{userID}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
      .replace('{userID}', userID)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AddPlayerResponse, 'AddPlayerResponse')
  }
}
