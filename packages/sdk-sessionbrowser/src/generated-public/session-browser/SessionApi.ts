/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { AddPlayerRequest } from './definitions/AddPlayerRequest'
import { AddPlayerResponse } from './definitions/AddPlayerResponse'
import { CreateSessionRequest } from './definitions/CreateSessionRequest'
import { JoinGameSessionRequest } from './definitions/JoinGameSessionRequest'
import { RecentPlayerQueryResponse } from './definitions/RecentPlayerQueryResponse'
import { Session$ } from './endpoints/Session$'
import { SessionByUserIDsResponse } from './definitions/SessionByUserIDsResponse'
import { SessionQueryResponse } from './definitions/SessionQueryResponse'
import { SessionResponse } from './definitions/SessionResponse'
import { UpdateSessionRequest } from './definitions/UpdateSessionRequest'
import { UpdateSettingsRequest } from './definitions/UpdateSettingsRequest'

export function SessionApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:SESSION [READ] Required scope: social Query available game session
   */
  async function getGamesession(queryParams: {
    session_type: string | null
    user_id?: string | null
    game_mode?: string | null
    game_version?: string | null
    joinable?: string | null
    match_id?: string | null
    match_exist?: string | null
    server_status?: string | null
    offset?: string | null
    limit?: string | null
  }): Promise<SessionQueryResponse> {
    const $ = new Session$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getGamesession(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:SESSION [CREATE] Required scope: social This end point intended to be called directly by P2P game client host or by DSMC
   */
  async function createGamesession(data: CreateSessionRequest): Promise<SessionResponse> {
    const $ = new Session$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createGamesession(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:SESSION [READ] Required scope: social Query game sessions by comma separated user ids
   */
  async function getGamesessionBulk(queryParams: { user_ids: string | null }): Promise<SessionByUserIDsResponse> {
    const $ = new Session$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getGamesessionBulk(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:RECENTPLAYER [READ] Required scope: social Query recent player by user ID
   */
  async function getRecentplayer_ByUserId(userID: string): Promise<RecentPlayerQueryResponse> {
    const $ = new Session$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRecentplayer_ByUserId(userID)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:SESSION [READ] Required scope: social Get the session by session ID
   */
  async function getGamesession_BySessionId(sessionID: string): Promise<SessionResponse> {
    const $ = new Session$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getGamesession_BySessionId(sessionID)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:SESSION [UPDATE] Required scope: social Update game session, used to update the current player
   */
  async function updateGamesession_BySessionId(sessionID: string, data: UpdateSessionRequest): Promise<SessionResponse> {
    const $ = new Session$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateGamesession_BySessionId(sessionID, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:SESSION [DELETE] Required scope: social Delete the session (p2p) by session ID
   */
  async function deleteGamesession_BySessionId(sessionID: string): Promise<SessionResponse> {
    const $ = new Session$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteGamesession_BySessionId(sessionID)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:SESSION [READ] Required scope: social Join the specified session by session ID. Possible the game required a password to join
   */
  async function createJoin_BySessionId(sessionID: string, data: JoinGameSessionRequest): Promise<SessionResponse> {
    const $ = new Session$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createJoin_BySessionId(sessionID, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:SESSION [UPDATE] Required scope: social Add player to game session
   */
  async function createPlayer_BySessionId(sessionID: string, data: AddPlayerRequest): Promise<AddPlayerResponse> {
    const $ = new Session$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createPlayer_BySessionId(sessionID, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:SESSION [DELETE] Required scope: social Only use for local DS entry, will error when calling non local DS entry
   */
  async function deleteLocald_BySessionId(sessionID: string): Promise<SessionResponse> {
    const $ = new Session$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteLocald_BySessionId(sessionID)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:SESSION [UPDATE] Required scope: social Update game session, used to update OtherSettings
   */
  async function updateSetting_BySessionId(sessionID: string, data: UpdateSettingsRequest): Promise<SessionResponse> {
    const $ = new Session$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateSetting_BySessionId(sessionID, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: NAMESPACE:{namespace}:SESSIONBROWSER:SESSION [UPDATE] Required scope: social Remove player from game session
   */
  async function deletePlayer_BySessionId_ByUserId(sessionID: string, userID: string): Promise<AddPlayerResponse> {
    const $ = new Session$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deletePlayer_BySessionId_ByUserId(sessionID, userID)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getGamesession,
    createGamesession,
    getGamesessionBulk,
    getRecentplayer_ByUserId,
    getGamesession_BySessionId,
    updateGamesession_BySessionId,
    deleteGamesession_BySessionId,
    createJoin_BySessionId,
    createPlayer_BySessionId,
    deleteLocald_BySessionId,
    updateSetting_BySessionId,
    deletePlayer_BySessionId_ByUserId
  }
}
