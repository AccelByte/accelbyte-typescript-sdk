/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { ActiveCustomGameResponse } from '../../generated-definitions/ActiveCustomGameResponse.js'
import { ActiveMatchmakingGameResponse } from '../../generated-definitions/ActiveMatchmakingGameResponse.js'
import { AdminSessionResponse } from '../../generated-definitions/AdminSessionResponse.js'
import { CountActiveSessionResponse } from '../../generated-definitions/CountActiveSessionResponse.js'
import { GetSessionHistoryDetailedResponseItemArray } from '../../generated-definitions/GetSessionHistoryDetailedResponseItemArray.js'
import { GetSessionHistorySearchResponseV2 } from '../../generated-definitions/GetSessionHistorySearchResponseV2.js'
import { SessionQueryResponse } from '../../generated-definitions/SessionQueryResponse.js'

export class SessionAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

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
  }): Promise<IResponseWithSync<SessionQueryResponse>> {
    const params = { limit: 25, ...queryParams } as SDKRequestConfig
    const url = '/sessionbrowser/admin/namespaces/{namespace}/gamesession'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, SessionQueryResponse, 'SessionQueryResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Admin delete the session by session ID
   */
  deleteGamesession_BySessionId(sessionID: string): Promise<IResponse<AdminSessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/sessionbrowser/admin/namespaces/{namespace}/gamesession/{sessionID}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, AdminSessionResponse, 'AdminSessionResponse')
  }

  /**
   * Get the session by session ID for admin user
   */
  getGamesession_BySessionId(sessionID: string): Promise<IResponseWithSync<AdminSessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/sessionbrowser/admin/namespaces/{namespace}/gamesession/{sessionID}'
      .replace('{namespace}', this.namespace)
      .replace('{sessionID}', sessionID)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, AdminSessionResponse, 'AdminSessionResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
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
  }): Promise<IResponseWithSync<GetSessionHistorySearchResponseV2>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/sessionbrowser/admin/namespaces/{namespace}/sessions/history/search'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetSessionHistorySearchResponseV2, 'GetSessionHistorySearchResponseV2')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get all active session
   */
  getGamesessionActiveCount(queryParams?: { session_type?: string | null }): Promise<IResponseWithSync<CountActiveSessionResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/sessionbrowser/admin/namespaces/{namespace}/gamesession/active/count'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, CountActiveSessionResponse, 'CountActiveSessionResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get all active session for custom game, this return only dedicated session type
   */
  getGamesessionActiveCustomGame(queryParams?: {
    limit?: number
    offset?: number
    server_region?: string | null
    session_id?: string | null
  }): Promise<IResponseWithSync<ActiveCustomGameResponse>> {
    const params = { limit: 25, ...queryParams } as SDKRequestConfig
    const url = '/sessionbrowser/admin/namespaces/{namespace}/gamesession/active/custom-game'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ActiveCustomGameResponse, 'ActiveCustomGameResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
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
  }): Promise<IResponseWithSync<ActiveMatchmakingGameResponse>> {
    const params = { limit: 25, ...queryParams } as SDKRequestConfig
    const url = '/sessionbrowser/admin/namespaces/{namespace}/gamesession/active/matchmaking-game'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ActiveMatchmakingGameResponse, 'ActiveMatchmakingGameResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get session history detailed. if party_id value empty/null, field will not show in response body.
   */
  getHistoryDetailed_ByMatchId(matchID: string): Promise<IResponseWithSync<GetSessionHistoryDetailedResponseItemArray>> {
    const params = {} as SDKRequestConfig
    const url = '/sessionbrowser/admin/namespaces/{namespace}/sessions/{matchID}/history/detailed'
      .replace('{namespace}', this.namespace)
      .replace('{matchID}', matchID)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => resultPromise, GetSessionHistoryDetailedResponseItemArray, 'GetSessionHistoryDetailedResponseItemArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
