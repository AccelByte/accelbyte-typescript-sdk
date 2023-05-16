/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { AddPlayerRequest } from '../definitions/AddPlayerRequest.js'
import { AddPlayerResponse } from '../definitions/AddPlayerResponse.js'
import { CreateSessionRequest } from '../definitions/CreateSessionRequest.js'
import { JoinGameSessionRequest } from '../definitions/JoinGameSessionRequest.js'
import { RecentPlayerQueryResponse } from '../definitions/RecentPlayerQueryResponse.js'
import { SessionByUserIDsResponse } from '../definitions/SessionByUserIDsResponse.js'
import { SessionQueryResponse } from '../definitions/SessionQueryResponse.js'
import { SessionResponse } from '../definitions/SessionResponse.js'
import { UpdateSessionRequest } from '../definitions/UpdateSessionRequest.js'
import { UpdateSettingsRequest } from '../definitions/UpdateSettingsRequest.js'

export class Session$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:SESSION [READ] Required scope: social Query available game session
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
  }): Promise<IResponseWithSync<SessionQueryResponse>> {
    const params = { limit: 25, ...queryParams } as SDKRequestConfig
    const url = '/sessionbrowser/namespaces/{namespace}/gamesession'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, SessionQueryResponse, 'SessionQueryResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:SESSION [CREATE] Required scope: social This end point intended to be called directly by P2P game client host or by DSMC
   */
  createGamesession(data: CreateSessionRequest): Promise<IResponse<SessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/sessionbrowser/namespaces/{namespace}/gamesession'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, SessionResponse, 'SessionResponse')
  }

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:SESSION [READ] Required scope: social Query game sessions by comma separated user ids
   */
  getGamesessionBulk(queryParams: { user_ids: string | null }): Promise<IResponseWithSync<SessionByUserIDsResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/sessionbrowser/namespaces/{namespace}/gamesession/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, SessionByUserIDsResponse, 'SessionByUserIDsResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:RECENTPLAYER [READ] Required scope: social Query recent player by user ID
   */
  getRecentplayer_ByUserId(userID: string): Promise<IResponseWithSync<RecentPlayerQueryResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/sessionbrowser/namespaces/{namespace}/recentplayer/{userID}'
      .replace('{namespace}', this.namespace)
      .replace('{userID}', userID)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RecentPlayerQueryResponse, 'RecentPlayerQueryResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:SESSION [DELETE] Required scope: social Delete the session (p2p) by session ID
   */
  deleteGamesession_BySessionId(sessionID: string): Promise<IResponse<SessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/sessionbrowser/namespaces/{namespace}/gamesession/{sessionID}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, SessionResponse, 'SessionResponse')
  }

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:SESSION [READ] Required scope: social Get the session by session ID
   */
  getGamesession_BySessionId(sessionID: string): Promise<IResponseWithSync<SessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/sessionbrowser/namespaces/{namespace}/gamesession/{sessionID}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, SessionResponse, 'SessionResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:SESSION [UPDATE] Required scope: social Update game session, used to update the current player
   */
  updateGamesession_BySessionId(sessionID: string, data: UpdateSessionRequest): Promise<IResponse<SessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/sessionbrowser/namespaces/{namespace}/gamesession/{sessionID}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, SessionResponse, 'SessionResponse')
  }

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:SESSION [READ] Required scope: social Join the specified session by session ID. Possible the game required a password to join
   */
  createJoin_BySessionId(sessionID: string, data: JoinGameSessionRequest): Promise<IResponse<SessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/sessionbrowser/namespaces/{namespace}/gamesession/{sessionID}/join'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, SessionResponse, 'SessionResponse')
  }

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:SESSION [UPDATE] Required scope: social Add player to game session
   */
  createPlayer_BySessionId(sessionID: string, data: AddPlayerRequest): Promise<IResponse<AddPlayerResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/sessionbrowser/namespaces/{namespace}/gamesession/{sessionID}/player'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, AddPlayerResponse, 'AddPlayerResponse')
  }

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:SESSION [DELETE] Required scope: social Only use for local DS entry, will error when calling non local DS entry
   */
  deleteLocald_BySessionId(sessionID: string): Promise<IResponse<SessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/sessionbrowser/namespaces/{namespace}/gamesession/{sessionID}/localds'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, SessionResponse, 'SessionResponse')
  }

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:SESSION [UPDATE] Required scope: social Update game session, used to update OtherSettings
   */
  updateSetting_BySessionId(sessionID: string, data: UpdateSettingsRequest): Promise<IResponse<SessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/sessionbrowser/namespaces/{namespace}/gamesession/{sessionID}/settings'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, SessionResponse, 'SessionResponse')
  }

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:SESSION [UPDATE] Required scope: social Remove player from game session
   */
  deletePlayer_BySessionId_ByUserId(sessionID: string, userID: string): Promise<IResponse<AddPlayerResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/sessionbrowser/namespaces/{namespace}/gamesession/{sessionID}/player/{userID}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
      .replace('{userID}', userID)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, AddPlayerResponse, 'AddPlayerResponse')
  }
}
