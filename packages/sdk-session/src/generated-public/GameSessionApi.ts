/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { AppendTeamGameSessionRequest } from '../generated-definitions/AppendTeamGameSessionRequest.js'
import { CreateGameSessionRequest } from '../generated-definitions/CreateGameSessionRequest.js'
import { GameSession$ } from './endpoints/GameSession$.js'
import { GameSessionQueryResponse } from '../generated-definitions/GameSessionQueryResponse.js'
import { GameSessionResponse } from '../generated-definitions/GameSessionResponse.js'
import { JoinByCodeRequest } from '../generated-definitions/JoinByCodeRequest.js'
import { PromoteLeaderRequest } from '../generated-definitions/PromoteLeaderRequest.js'
import { ServerSecret } from '../generated-definitions/ServerSecret.js'
import { SessionInviteRequest } from '../generated-definitions/SessionInviteRequest.js'
import { UpdateGameSessionBackfillRequest } from '../generated-definitions/UpdateGameSessionBackfillRequest.js'
import { UpdateGameSessionRequest } from '../generated-definitions/UpdateGameSessionRequest.js'

export function GameSessionApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Create a game session. Session configuration name is mandatory, this API will refer following values from the session template if they&#39;re not provided in the request: - type - joinability - autoJoin. If enabled (set to true), players provided in the request will automatically joined the initial game session creation. Game session will not send any invite and players dont need to act upon it. - minPlayers - maxPlayers - inviteTimeout - inactiveTimeout - dsSource - tieTeamsSessionLifetime When the tieTeamsSessionLifetime is true, the lifetime of any partyId inside teams attribute will be tied to the game session. Only applies when the teams partyId is a game session. When the session type is a DS, a DS creation request will be sent if number of active players reaches session&#39;s minPlayers. Active user is a user who present within the session, has status CONNECTED/JOINED. Session service has several DSInformation status to track DS request to DSMC: - NEED_TO_REQUEST: number of active players hasn&#39;t reached session&#39;s minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to create the DS. By default, DS requests are sent to DSMC, but if dsSource is set to &#34;AMS&#34;: - A DS will be requested from AMS instead of DSMC. - The server will be chosen based on a set of claim keys, in order of preference, to match with fleets. - The claim key list is built build from the preferredClaimKeys, fallbackClaimKeys, and clientVersion as follows: [preferredClaimKeys.., clientVersion, fallbackClaimKeys...]
   */
  async function createGamesession(data: CreateGameSessionRequest): Promise<GameSessionResponse> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createGamesession(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query game sessions. By default, API will return a list of available game sessions (joinability: open). Session service has several DSInformation status to track DS request to DSMC: - NEED_TO_REQUEST: number of active players hasn&#39;t reached session&#39;s minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to create the DS. query parameter \&#34;availability\&#34; to filter sessions&#39; availability: all: return all sessions regardless it&#39;s full full: only return active sessions default behavior (unset or else): return only available sessions (not full)
   */
  async function createGamesession_ByNS(): Promise<GameSessionQueryResponse> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createGamesession_ByNS()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query user&#39;s game sessions. By default, API will return a list of user&#39;s active game sessions (INVITED,JOINED,CONNECTED). Session service has several DSInformation status to track DS request to DSMC: - NEED_TO_REQUEST: number of active players hasn&#39;t reached session&#39;s minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to create the DS.
   */
  async function getUsersMeGamesessions(queryParams?: {
    order?: string | null
    orderBy?: string | null
    status?: string | null
  }): Promise<GameSessionQueryResponse> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeGamesessions(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Join a session by code. The user can join a session as long as the code is valid
   */
  async function createGamesessionJoinCode(data: JoinByCodeRequest): Promise<GameSessionResponse> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createGamesessionJoinCode(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete a game session.
   */
  async function deleteGamesession_BySessionId(sessionId: string): Promise<unknown> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteGamesession_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get game session detail. Session will only be accessible from active players in the session, and client with the permission, except the joinability is set to OPEN. Session service has several DSInformation status to track DS request to DSMC: - NEED_TO_REQUEST: number of active players hasn&#39;t reached session&#39;s minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to create the DS.
   */
  async function getGamesession_BySessionId(sessionId: string): Promise<GameSessionResponse> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getGamesession_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update specified fields from game session data.
   */
  async function patchGamesession_BySessionId(sessionId: string, data: UpdateGameSessionRequest): Promise<GameSessionResponse> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchGamesession_BySessionId(sessionId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Updates a game session, this endpoint will override stored gamesession data. To update only specified fields, please use following endpoint: method : PATCH API : /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId} To update DS attributes (clientVersion, deployment, requestedRegions) it will only be applied only as long as no DS has been requested, otherwise ignored.
   */
  async function updateGamesession_BySessionId(sessionId: string, data: UpdateGameSessionRequest): Promise<GameSessionResponse> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateGamesession_BySessionId(sessionId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Revoke code of the game session. Only leader can revoke a code.
   */
  async function deleteCode_BySessionId(sessionId: string): Promise<unknown> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteCode_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Generate a new code for the game session. Only leader can generate a code.
   */
  async function createCode_BySessionId(sessionId: string): Promise<GameSessionResponse> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createCode_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Join a game session.
   */
  async function createJoin_BySessionId(sessionId: string): Promise<GameSessionResponse> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createJoin_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Leave a game session.
   */
  async function deleteLeave_BySessionId(sessionId: string): Promise<unknown> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteLeave_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Append new member or team to session
   */
  async function createTeam_BySessionId(sessionId: string, data: AppendTeamGameSessionRequest): Promise<GameSessionResponse> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createTeam_BySessionId(sessionId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get game session detail by podname. Session service has several DSInformation status to track DS request to DSMC: - NEED_TO_REQUEST: number of active players hasn&#39;t reached session&#39;s minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to create the DS.
   */
  async function getGamesessionServer_ByPodName(podName: string): Promise<GameSessionResponse> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getGamesessionServer_ByPodName(podName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Invite a user to a game session. platformID represents the native platform of the invitee. API will return the corresponding native platform&#39;s userID. supported platforms: - STEAM - XBOX - PSN
   */
  async function createInvite_BySessionId(sessionId: string, data: SessionInviteRequest): Promise<unknown> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createInvite_BySessionId(sessionId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Promote game session member to become the new game session leader. This API requires the NAMESPACE:{namespace}:SESSION:GAME [UPDATE] permission. This API can be operated by: - User (game session member) who is the current leader of the game session - Game Client - Dedicated Server (DS) This API will promote game session leader candidate with the following criteria: - Leader candidate is a member of the game session - Leader candidate has a &#34;CONNECTED&#34; or &#34;JOINED&#34; status - If the leader candidate is the current leader, then no promotion process is carried out
   */
  async function createLeader_BySessionId(sessionId: string, data: PromoteLeaderRequest): Promise<GameSessionResponse> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createLeader_BySessionId(sessionId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Reject a game session invitation.
   */
  async function deleteReject_BySessionId(sessionId: string): Promise<unknown> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteReject_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Used by game Client to Get Secret constraints - EnableSecret = true - Type = &#34;DS&#34; - secret value will only be produced if enableSecret is true and type is DS if enableSecret = false - empty secret will be returned as 200 OK Expected caller of this API - Game Client to get server secret In the Response you will get following: - 200 OK { &#34;secret&#34;: &lt;string&gt; } If there is error: - 400 Invalid path parameters - 401 unauthorized - 404 StatusNotFound - 500 Internal server error
   */
  async function getSecret_BySessionId(sessionId: string): Promise<ServerSecret> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getSecret_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update game session backfill ticket id. Will override game session backfill ticket based on given request parameter
   */
  async function updateBackfill_BySessionId(sessionId: string, data: UpdateGameSessionBackfillRequest): Promise<GameSessionResponse> {
    const $ = new GameSession$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateBackfill_BySessionId(sessionId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createGamesession,
    createGamesession_ByNS,
    getUsersMeGamesessions,
    createGamesessionJoinCode,
    deleteGamesession_BySessionId,
    getGamesession_BySessionId,
    patchGamesession_BySessionId,
    updateGamesession_BySessionId,
    deleteCode_BySessionId,
    createCode_BySessionId,
    createJoin_BySessionId,
    deleteLeave_BySessionId,
    createTeam_BySessionId,
    getGamesessionServer_ByPodName,
    createInvite_BySessionId,
    createLeader_BySessionId,
    deleteReject_BySessionId,
    getSecret_BySessionId,
    updateBackfill_BySessionId
  }
}
