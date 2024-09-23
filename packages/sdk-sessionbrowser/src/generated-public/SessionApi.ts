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
import { AddPlayerRequest } from '../generated-definitions/AddPlayerRequest.js'
import { AddPlayerResponse } from '../generated-definitions/AddPlayerResponse.js'
import { CreateSessionRequest } from '../generated-definitions/CreateSessionRequest.js'
import { JoinGameSessionRequest } from '../generated-definitions/JoinGameSessionRequest.js'
import { RecentPlayerQueryResponse } from '../generated-definitions/RecentPlayerQueryResponse.js'
import { SessionByUserIDsResponse } from '../generated-definitions/SessionByUserIDsResponse.js'
import { SessionQueryResponse } from '../generated-definitions/SessionQueryResponse.js'
import { SessionResponse } from '../generated-definitions/SessionResponse.js'
import { UpdateSessionRequest } from '../generated-definitions/UpdateSessionRequest.js'
import { UpdateSettingsRequest } from '../generated-definitions/UpdateSettingsRequest.js'
import { Session$ } from './endpoints/Session$.js'

export function SessionApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGamesession(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createGamesession(data: CreateSessionRequest): Promise<AxiosResponse<SessionResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createGamesession(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getGamesessionBulk(queryParams: { user_ids: string | null }): Promise<AxiosResponse<SessionByUserIDsResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGamesessionBulk(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRecentplayer_ByUserId(userID: string): Promise<AxiosResponse<RecentPlayerQueryResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRecentplayer_ByUserId(userID)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteGamesession_BySessionId(sessionID: string): Promise<AxiosResponse<SessionResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteGamesession_BySessionId(sessionID)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getGamesession_BySessionId(sessionID: string): Promise<AxiosResponse<SessionResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGamesession_BySessionId(sessionID)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateGamesession_BySessionId(sessionID: string, data: UpdateSessionRequest): Promise<AxiosResponse<SessionResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateGamesession_BySessionId(sessionID, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function fetchJoin_BySessionId(sessionID: string, data: JoinGameSessionRequest): Promise<AxiosResponse<SessionResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchJoin_BySessionId(sessionID, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePlayer_BySessionId(sessionID: string, data: AddPlayerRequest): Promise<AxiosResponse<AddPlayerResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePlayer_BySessionId(sessionID, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteLocald_BySessionId(sessionID: string): Promise<AxiosResponse<SessionResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteLocald_BySessionId(sessionID)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateSetting_BySessionId(sessionID: string, data: UpdateSettingsRequest): Promise<AxiosResponse<SessionResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateSetting_BySessionId(sessionID, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deletePlayer_BySessionId_ByUserId(sessionID: string, userID: string): Promise<AxiosResponse<AddPlayerResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePlayer_BySessionId_ByUserId(sessionID, userID)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Query available game session
     */
    getGamesession,
    /**
     * This end point intended to be called directly by P2P game client host or by DSMC
     */
    createGamesession,
    /**
     * Query game sessions by comma separated user ids
     */
    getGamesessionBulk,
    /**
     * Query recent player by user ID
     */
    getRecentplayer_ByUserId,
    /**
     * Delete the session (p2p) by session ID
     */
    deleteGamesession_BySessionId,
    /**
     * Get the session by session ID
     */
    getGamesession_BySessionId,
    /**
     * Update game session, used to update the current player
     */
    updateGamesession_BySessionId,
    /**
     * Join the specified session by session ID. Possible the game required a password to join
     */
    fetchJoin_BySessionId,
    /**
     * Add player to game session
     */
    updatePlayer_BySessionId,
    /**
     * Only use for local DS entry, will error when calling non local DS entry
     */
    deleteLocald_BySessionId,
    /**
     * Update game session, used to update OtherSettings
     */
    updateSetting_BySessionId,
    /**
     * Remove player from game session
     */
    deletePlayer_BySessionId_ByUserId
  }
}
