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
import { ActiveCustomGameResponse } from '../generated-definitions/ActiveCustomGameResponse.js'
import { ActiveMatchmakingGameResponse } from '../generated-definitions/ActiveMatchmakingGameResponse.js'
import { AdminSessionResponse } from '../generated-definitions/AdminSessionResponse.js'
import { CountActiveSessionResponse } from '../generated-definitions/CountActiveSessionResponse.js'
import { GetSessionHistoryDetailedResponseItemArray } from '../generated-definitions/GetSessionHistoryDetailedResponseItemArray.js'
import { GetSessionHistorySearchResponseV2 } from '../generated-definitions/GetSessionHistorySearchResponseV2.js'
import { SessionQueryResponse } from '../generated-definitions/SessionQueryResponse.js'
import { SessionAdmin$ } from './endpoints/SessionAdmin$.js'

export function SessionAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getGamesession(queryParams: {
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
  }): Promise<AxiosResponse<SessionQueryResponse>> {
    const $ = new SessionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGamesession(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteGamesession_BySessionId(sessionID: string): Promise<AxiosResponse<AdminSessionResponse>> {
    const $ = new SessionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteGamesession_BySessionId(sessionID)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getGamesession_BySessionId(sessionID: string): Promise<AxiosResponse<AdminSessionResponse>> {
    const $ = new SessionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGamesession_BySessionId(sessionID)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSessionsHistorySearch(queryParams: {
    limit: number
    offset: number
    channel?: string | null
    deleted?: boolean | null
    matchID?: string | null
    partyID?: string | null
    sessionType?: string | null
    status?: string | null
    userID?: string | null
  }): Promise<AxiosResponse<GetSessionHistorySearchResponseV2>> {
    const $ = new SessionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSessionsHistorySearch(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getGamesessionActiveCount(queryParams?: {
    session_type?: string | null
  }): Promise<AxiosResponse<CountActiveSessionResponse>> {
    const $ = new SessionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGamesessionActiveCount(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getGamesessionActiveCustomGame(queryParams?: {
    limit?: number
    offset?: number
    server_region?: string | null
    session_id?: string | null
  }): Promise<AxiosResponse<ActiveCustomGameResponse>> {
    const $ = new SessionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGamesessionActiveCustomGame(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getGamesessionActiveMatchmakingGame(queryParams?: {
    limit?: number
    match_id?: string | null
    offset?: number
    server_region?: string | null
    session_id?: string | null
  }): Promise<AxiosResponse<ActiveMatchmakingGameResponse>> {
    const $ = new SessionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGamesessionActiveMatchmakingGame(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getHistoryDetailed_ByMatchId(matchID: string): Promise<AxiosResponse<GetSessionHistoryDetailedResponseItemArray>> {
    const $ = new SessionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getHistoryDetailed_ByMatchId(matchID)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Query to available game session
     */
    getGamesession,
    /**
     * Admin delete the session by session ID
     */
    deleteGamesession_BySessionId,
    /**
     * Get the session by session ID for admin user
     */
    getGamesession_BySessionId,
    /**
     * Search sessions. Optimize the query by differentiating query with filter namespace only and filter with namespace &amp; other filter (partyID, userID, matchID). Query with filter namespace only will not group whole session data while query with filter namespace &amp; other filter will include session data.
     */
    getSessionsHistorySearch,
    /**
     * Get all active session
     */
    getGamesessionActiveCount,
    /**
     * Get all active session for custom game, this return only dedicated session type
     */
    getGamesessionActiveCustomGame,
    /**
     * Get all active session for matchmaking game, this return only dedicated session type
     */
    getGamesessionActiveMatchmakingGame,
    /**
     * Get session history detailed. if party_id value empty/null, field will not show in response body.
     */
    getHistoryDetailed_ByMatchId
  }
}
