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
import { ActiveCustomGameResponse } from '../generated-definitions/ActiveCustomGameResponse.js'
import { ActiveMatchmakingGameResponse } from '../generated-definitions/ActiveMatchmakingGameResponse.js'
import { AdminSessionResponse } from '../generated-definitions/AdminSessionResponse.js'
import { CountActiveSessionResponse } from '../generated-definitions/CountActiveSessionResponse.js'
import { GetSessionHistoryDetailedResponseItemArray } from '../generated-definitions/GetSessionHistoryDetailedResponseItemArray.js'
import { GetSessionHistorySearchResponseV2 } from '../generated-definitions/GetSessionHistorySearchResponseV2.js'
import { SessionQueryResponse } from '../generated-definitions/SessionQueryResponse.js'
import { SessionAdmin$ } from './endpoints/SessionAdmin$.js'

export function SessionAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Query to available game session
   */
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
  }): Promise<SessionQueryResponse> {
    const $ = new SessionAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getGamesession(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Admin delete the session by session ID
   */
  async function deleteGamesession_BySessionId(sessionID: string): Promise<AdminSessionResponse> {
    const $ = new SessionAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteGamesession_BySessionId(sessionID)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get the session by session ID for admin user
   */
  async function getGamesession_BySessionId(sessionID: string): Promise<AdminSessionResponse> {
    const $ = new SessionAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getGamesession_BySessionId(sessionID)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Search sessions. Optimize the query by differentiating query with filter namespace only and filter with namespace &amp; other filter (partyID, userID, matchID). Query with filter namespace only will not group whole session data while query with filter namespace &amp; other filter will include session data.
   */
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
  }): Promise<GetSessionHistorySearchResponseV2> {
    const $ = new SessionAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getSessionsHistorySearch(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get all active session
   */
  async function getGamesessionActiveCount(queryParams?: { session_type?: string | null }): Promise<CountActiveSessionResponse> {
    const $ = new SessionAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getGamesessionActiveCount(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get all active session for custom game, this return only dedicated session type
   */
  async function getGamesessionActiveCustomGame(queryParams?: {
    limit?: number
    offset?: number
    server_region?: string | null
    session_id?: string | null
  }): Promise<ActiveCustomGameResponse> {
    const $ = new SessionAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getGamesessionActiveCustomGame(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get all active session for matchmaking game, this return only dedicated session type
   */
  async function getGamesessionActiveMatchmakingGame(queryParams?: {
    limit?: number
    match_id?: string | null
    offset?: number
    server_region?: string | null
    session_id?: string | null
  }): Promise<ActiveMatchmakingGameResponse> {
    const $ = new SessionAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getGamesessionActiveMatchmakingGame(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get session history detailed. if party_id value empty/null, field will not show in response body.
   */
  async function getHistoryDetailed_ByMatchId(matchID: string): Promise<GetSessionHistoryDetailedResponseItemArray> {
    const $ = new SessionAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getHistoryDetailed_ByMatchId(matchID)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getGamesession,
    deleteGamesession_BySessionId,
    getGamesession_BySessionId,
    getSessionsHistorySearch,
    getGamesessionActiveCount,
    getGamesessionActiveCustomGame,
    getGamesessionActiveMatchmakingGame,
    getHistoryDetailed_ByMatchId
  }
}
