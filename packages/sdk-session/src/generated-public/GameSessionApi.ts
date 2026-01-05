/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { AppendTeamGameSessionRequest } from '../generated-definitions/AppendTeamGameSessionRequest.js'
import { CreateGameSessionRequest } from '../generated-definitions/CreateGameSessionRequest.js'
import { GameSessionQueryResponse } from '../generated-definitions/GameSessionQueryResponse.js'
import { GameSessionResponse } from '../generated-definitions/GameSessionResponse.js'
import { JoinByCodeRequest } from '../generated-definitions/JoinByCodeRequest.js'
import { PromoteLeaderRequest } from '../generated-definitions/PromoteLeaderRequest.js'
import { ServerSecret } from '../generated-definitions/ServerSecret.js'
import { SessionInviteRequest } from '../generated-definitions/SessionInviteRequest.js'
import { UpdateGameSessionBackfillRequest } from '../generated-definitions/UpdateGameSessionBackfillRequest.js'
import { UpdateGameSessionRequest } from '../generated-definitions/UpdateGameSessionRequest.js'
import { GameSession$ } from './endpoints/GameSession$.js'

export function GameSessionApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function createGamesession(
    data: CreateGameSessionRequest,
    queryParams?: { resolveMaxActiveSession?: boolean | null }
  ): Promise<AxiosResponse<GameSessionResponse>> {
    const $ = new GameSession$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createGamesession(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createGamesession_ByNS(): Promise<AxiosResponse<GameSessionQueryResponse>> {
    const $ = new GameSession$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createGamesession_ByNS()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersMeGamesessions(queryParams?: {
    order?: string | null
    orderBy?: string | null
    status?: string | null
  }): Promise<AxiosResponse<GameSessionQueryResponse>> {
    const $ = new GameSession$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeGamesessions(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createGamesessionJoinCode(data: JoinByCodeRequest): Promise<AxiosResponse<GameSessionResponse>> {
    const $ = new GameSession$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createGamesessionJoinCode(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteGamesession_BySessionId(sessionId: string): Promise<AxiosResponse<unknown>> {
    const $ = new GameSession$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteGamesession_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getGamesession_BySessionId(sessionId: string): Promise<AxiosResponse<GameSessionResponse>> {
    const $ = new GameSession$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGamesession_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchGamesession_BySessionId(
    sessionId: string,
    data: UpdateGameSessionRequest
  ): Promise<AxiosResponse<GameSessionResponse>> {
    const $ = new GameSession$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchGamesession_BySessionId(sessionId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateGamesession_BySessionId(
    sessionId: string,
    data: UpdateGameSessionRequest
  ): Promise<AxiosResponse<GameSessionResponse>> {
    const $ = new GameSession$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateGamesession_BySessionId(sessionId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteCode_BySessionId(sessionId: string): Promise<AxiosResponse<unknown>> {
    const $ = new GameSession$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteCode_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateCode_BySessionId(sessionId: string): Promise<AxiosResponse<GameSessionResponse>> {
    const $ = new GameSession$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCode_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createJoin_BySessionId(sessionId: string): Promise<AxiosResponse<GameSessionResponse>> {
    const $ = new GameSession$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createJoin_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteLeave_BySessionId(sessionId: string): Promise<AxiosResponse<unknown>> {
    const $ = new GameSession$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteLeave_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateTeam_BySessionId(
    sessionId: string,
    data: AppendTeamGameSessionRequest
  ): Promise<AxiosResponse<GameSessionResponse>> {
    const $ = new GameSession$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateTeam_BySessionId(sessionId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getGamesessionServer_ByPodName(podName: string): Promise<AxiosResponse<GameSessionResponse>> {
    const $ = new GameSession$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGamesessionServer_ByPodName(podName)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createInvite_BySessionId(sessionId: string, data: SessionInviteRequest): Promise<AxiosResponse<unknown>> {
    const $ = new GameSession$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createInvite_BySessionId(sessionId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateLeader_BySessionId(sessionId: string, data: PromoteLeaderRequest): Promise<AxiosResponse<GameSessionResponse>> {
    const $ = new GameSession$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateLeader_BySessionId(sessionId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteReject_BySessionId(sessionId: string): Promise<AxiosResponse<unknown>> {
    const $ = new GameSession$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteReject_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSecret_BySessionId(sessionId: string): Promise<AxiosResponse<ServerSecret>> {
    const $ = new GameSession$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSecret_BySessionId(sessionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateBackfill_BySessionId(
    sessionId: string,
    data: UpdateGameSessionBackfillRequest
  ): Promise<AxiosResponse<GameSessionResponse>> {
    const $ = new GameSession$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateBackfill_BySessionId(sessionId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteCancel_BySessionId_ByUserId(sessionId: string, userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new GameSession$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteCancel_BySessionId_ByUserId(sessionId, userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteKick_BySessionId_ByMemberId(sessionId: string, memberId: string): Promise<AxiosResponse<unknown>> {
    const $ = new GameSession$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteKick_BySessionId_ByMemberId(sessionId, memberId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Create a game session. Session configuration &#34;name&#34; is mandatory, this API will refer following values from the session template if they&#39;re not provided in the request: - type - joinability - autoJoin. If enabled (set to true), players provided in the request will automatically joined the initial game session creation. Game session will not send any invite and players dont need to act upon it. - minPlayers - maxPlayers - inviteTimeout - inactiveTimeout - attributes - dsSource - tieTeamsSessionLifetime - matchPool - clientVersion - deployment - serverName - textChat - autoJoin - requestedRegions - preferredClaimKeys - fallbackClaimKeys - customURLGRPC When the tieTeamsSessionLifetime is true, the lifetime of any partyId inside teams attribute will be tied to the game session. Only applies when the teams partyId is a game session. Session has 2 fields for user status: &#34;status&#34; and &#34;statusV2&#34;. The &#34;status&#34; is there for backward-compatibility, therefore we encourage to just rely on &#34;statusV2&#34; for the more updated statuses. User statuses: 1. INVITED: by default, to join a session (except session with OPEN joinability or if session configuration has &#34;autoJoin&#34; sets to True) a user will receive an invite. The invitee will have the chance to respond within &#34;inviteTimeout&#34; which you can configure through session configuration. 2. TIMEOUT: when a user is invited to a session, they will receive an invite. Unless &#34;disableResendInvite&#34; sets to True in the session configuration, the user will also receive invite reminder every 30s until they respond to the invite. 3. REJECTED: when a user rejects an invite. To rejoin an INVITE_ONLY session, they will need to be re-invited and accept the invite. 4. JOINED: there are few ways of a user to join a session, by invite, direct join (depends on session joinability) or join by code. upon invite, once a user accepts an invite, their status will be changed to JOINED. 5. LEFT: user can leave a session. in case of party, a user can only be in 1 party at a time. therefore when they decide to create or join another party, they will be automatically removed from their initial party and their status will be changed to LEFT. 6. KICKED: only party leader can kick a member. 7. DISCONNECTED: if user still have reserved seat in the session and they disconnect lobby websocket, their status in the session will be changed to DISCONNECTED and field &#34;members.previousStatus&#34; of that user will contains the initial status before they disconnect lobby websocket. the user will be given chance to reconnect within &#34;inactiveTimeout&#34; which you can configure through session configuration. 8. CONNECTED: when a user reconnect their lobby websocket, their status will change from DISCONNECTED to CONNECTED, only if they previously JOINED session. if they were on INVITED state before the disconnect happened, the user&#39;s status will return back to INVITED after they reconnect. 9. DROPPED: when &#34;inactiveTimeout&#34; is due and user never re-establish their websocket connection, we will drop them from the session. 10. TERMINATED: only applies to game session. If a game session (match) is ended, DS will end/delete the session and we will mark all remaining users&#39; status to be TERMINATED. 11. CANCELLED: when a session joinability changes to CLOSED, any remaining invites will be canceled. User is considered as active if they&#39;re present in the session, which their status either CONNECTED or JOINED. User has a reserved seat in the session if their status either INVITED, JOINED, CONNECTED, DISCONNECTED. When user&#39;s&#39; status change to other than these mentioned statuses, we will release the seat for other players to occupy. Managing the relation between session and lobby websocket connection: - Session relies on lobby to consider player&#39;s connection health to our backend. therefore a disruption to lobby websocket will be reflected in the user&#39;s status in all of their session(s). - If user still have a reserved seat in the session and they disconnect lobby websocket, their status in session(s) will be changed to DISCONNECTED and field &#34;members.previousStatus&#34; of that user will contains the initial status before they disconnect lobby websocket. This &#34;members.previousStatus&#34; used to track user&#39;s previous status before they disconnect websocket, since we still reserve a seat for them, therefore this field will be empty again after they websocket. - If the disconnected user is the leader of the session they&#39;re disconnected from, we will wait until &#34;leaderElectionGracePeriod&#34; is due, to promote the next oldest member as the new leader of the session. You can configure &#34;leaderElectionGracePeriod&#34; through session configuration. - The user will be given chance to reconnect within &#34;inactiveTimeout&#34; which you can configure through session configuration. If until &#34;inactiveTimeout&#34; is due and the user doesn&#39;t reconnect their websocket, they will be removed from session and their status will change to DROPPED. If the dropped user was the leader of the session, we will promote the next oldest member as leader. - By default, we will update user&#39;s status to what it was before disconnect, when the user reconnects lobby websocket, unless &#34;manualRejoin&#34; sets to True in the session configuration. When &#34;manualRejoin&#34; is enabled, after lobby websocket reconnect, the game client will need to manually invoke join session again to rejoin the session. - If the user was on INVITED state before the disconnect happened, the user&#39;s status will return back to INVITED after they reconnect. When the session type is a DS, a DS creation request will be sent if number of active players reaches session&#39;s minPlayers. Session service has several DSInformation status to track DS request to DS providers: - NEED_TO_REQUEST: number of active players hasn&#39;t reached session&#39;s minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - PREPARING: DS needs to call manual set ready for the game session - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to spin up a DS for session. - DS_ERROR: DS provider fails to spin up the DS or the DS itself becomes unreachable - DS_CANCELLED: when DSMC is preparing the DS, DSMC will give a temporary DS. In this phase, if you delete the game session, the DS request will be canceled. - ENDED: when a game session (match) has finished and DS has done its job, it will terminate itself. - UNKNOWN: if any unknown DS status is detected. DSInformation has 2 fields for DS status: &#34;status&#34; and &#34;statusV2&#34;. The &#34;status&#34; is there for backward-compatibility, therefore we encourage to just rely on &#34;statusV2&#34; for the more updated statuses. DS Source can be DSMC, AMS or custom. In DSMC, a DS request will be put in queue if they dont have available buffers, and DSMC will let the service knows when they finished spinning it up. While AMS doesn&#39;t have a concept of queue. Therefore some &#34;DSInformation.statusV2&#34; only applicable for DSMC. By default, DS requests are sent to DSMC, but if dsSource is set to &#34;AMS&#34;: - A DS will be requested from AMS instead of DSMC. - The server will be chosen based on a set of claim keys, in order of preference, to match with fleets. - The claim key list is built build from the preferredClaimKeys, fallbackClaimKeys, and clientVersion as follows: [preferredClaimKeys.., clientVersion, fallbackClaimKeys...] - ttlHours is how long the session will active, only non persistent can use this, max value is 168 hours for session override can follow guideline in here https://docs.accelbyte.io/gaming-services/services/extend/override-ags-feature/getting-started-with-session-customization-server-dsm/
     */
    createGamesession,
    /**
     * Query game sessions. By default, API will return a list of available game sessions (joinability: open). Session service has several DSInformation status to track DS request to DS providers: - NEED_TO_REQUEST: number of active players hasn&#39;t reached session&#39;s minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - PREPARING: DS needs to call manual set ready for the game session - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to spin up a DS for session. - DS_ERROR: DS provider fails to spin up the DS or the DS itself becomes unreachable - DS_CANCELLED: when DSMC is preparing the DS, DSMC will give a temporary DS. In this phase, if you delete the game session, the DS request will be canceled. - ENDED: when a game session (match) has finished and DS has done its job, it will terminate itself. - UNKNOWN: if any unknown DS status is detected. DSInformation has 2 fields for DS status: &#34;status&#34; and &#34;statusV2&#34;. The &#34;status&#34; is there for backward-compatibility, therefore we encourage to just rely on &#34;statusV2&#34; for the more updated statuses. DS Source can be DSMC, AMS or custom. In DSMC, a DS request will be put in queue if they dont have available buffers, and DSMC will let the service knows when they finished spinning it up. While AMS doesn&#39;t have a concept of queue. Therefore some &#34;DSInformation.statusV2&#34; only applicable for DSMC. query parameter \&#34;availability\&#34; to filter sessions&#39; availability: all: return all sessions regardless it&#39;s full full: only return active sessions default behavior (unset or else): return only available sessions (not full)
     */
    createGamesession_ByNS,
    /**
     * Query user&#39;s game sessions. By default, API will return a list of user&#39;s active game sessions (INVITED,JOINED,CONNECTED). Session service has several DSInformation status to track DS request to DS providers: - NEED_TO_REQUEST: number of active players hasn&#39;t reached session&#39;s minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - PREPARING: DS needs to call manual set ready for the game session - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to spin up a DS for session. - DS_ERROR: DS provider fails to spin up the DS or the DS itself becomes unreachable - DS_CANCELLED: when DSMC is preparing the DS, DSMC will give a temporary DS. In this phase, if you delete the game session, the DS request will be canceled. - ENDED: when a game session (match) has finished and DS has done its job, it will terminate itself. - UNKNOWN: if any unknown DS status is detected. DSInformation has 2 fields for DS status: &#34;status&#34; and &#34;statusV2&#34;. The &#34;status&#34; is there for backward-compatibility, therefore we encourage to just rely on &#34;statusV2&#34; for the more updated statuses. DS Source can be DSMC, AMS or custom. In DSMC, a DS request will be put in queue if they dont have available buffers, and DSMC will let the service knows when they finished spinning it up. While AMS doesn&#39;t have a concept of queue. Therefore some &#34;DSInformation.statusV2&#34; only applicable for DSMC.
     */
    getUsersMeGamesessions,
    /**
     * Join a session by code. The user can join a session as long as the code is valid
     */
    createGamesessionJoinCode,
    /**
     * Delete a game session.
     */
    deleteGamesession_BySessionId,
    /**
     * Get game session detail. Session will only be accessible from active players in the session, and client with the permission, except the joinability is set to OPEN. Session service has several DSInformation status to track DS request to DS providers: - NEED_TO_REQUEST: number of active players hasn&#39;t reached session&#39;s minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - PREPARING: DS needs to call manual set ready for the game session - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to spin up a DS for session. - DS_ERROR: DS provider fails to spin up the DS or the DS itself becomes unreachable - DS_CANCELLED: when DSMC is preparing the DS, DSMC will give a temporary DS. In this phase, if you delete the game session, the DS request will be canceled. - ENDED: when a game session (match) has finished and DS has done its job, it will terminate itself. - UNKNOWN: if any unknown DS status is detected. DSInformation has 2 fields for DS status: &#34;status&#34; and &#34;statusV2&#34;. The &#34;status&#34; is there for backward-compatibility, therefore we encourage to just rely on &#34;statusV2&#34; for the more updated statuses. DS Source can be DSMC, AMS or custom. In DSMC, a DS request will be put in queue if they dont have available buffers, and DSMC will let the service knows when they finished spinning it up. While AMS doesn&#39;t have a concept of queue. Therefore some &#34;DSInformation.statusV2&#34; only applicable for DSMC.
     */
    getGamesession_BySessionId,
    /**
     * Update specified fields from game session data.
     */
    patchGamesession_BySessionId,
    /**
     * Updates a game session, this endpoint will override stored gamesession data. To update only specified fields, please use following endpoint: method : PATCH API : /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId} - ttlHours is how long the session will active, only non persistent can use this, max value is 168 hours To update DS attributes (clientVersion, deployment, requestedRegions) it will only be applied only as long as no DS has been requested, otherwise ignored.
     */
    updateGamesession_BySessionId,
    /**
     * Revoke code of the game session. Only leader can revoke a code.
     */
    deleteCode_BySessionId,
    /**
     * Generate a new code for the game session. Only leader can generate a code.
     */
    updateCode_BySessionId,
    /**
     * Join a game session.
     */
    createJoin_BySessionId,
    /**
     * Leave a game session.
     */
    deleteLeave_BySessionId,
    /**
     * @deprecated
     * Append new member or team to session. Please use patchUpdateGameSession instead
     */
    updateTeam_BySessionId,
    /**
     * Get game session detail by podname. Session service has several DSInformation status to track DS request to DS providers: - NEED_TO_REQUEST: number of active players hasn&#39;t reached session&#39;s minPlayers therefore DS has not yet requested. - REQUESTED: DS is being requested to DSMC. - PREPARING: DS needs to call manual set ready for the game session - AVAILABLE: DS is ready to use. The DSMC status for this DS is either READY/BUSY. - FAILED_TO_REQUEST: DSMC fails to spin up a DS for session. - DS_ERROR: DS provider fails to spin up the DS or the DS itself becomes unreachable - DS_CANCELLED: when DSMC is preparing the DS, DSMC will give a temporary DS. In this phase, if you delete the game session, the DS request will be canceled. - ENDED: when a game session (match) has finished and DS has done its job, it will terminate itself. - UNKNOWN: if any unknown DS status is detected. DSInformation has 2 fields for DS status: &#34;status&#34; and &#34;statusV2&#34;. The &#34;status&#34; is there for backward-compatibility, therefore we encourage to just rely on &#34;statusV2&#34; for the more updated statuses. DS Source can be DSMC, AMS or custom. In DSMC, a DS request will be put in queue if they dont have available buffers, and DSMC will let the service knows when they finished spinning it up. While AMS doesn&#39;t have a concept of queue. Therefore some &#34;DSInformation.statusV2&#34; only applicable for DSMC.
     */
    getGamesessionServer_ByPodName,
    /**
     * Invite a user to a game session. platformID represents the native platform of the invitee. API will return the corresponding native platform&#39;s userID. supported platforms: - STEAM - XBOX - PSN Metadata is optional parameter which will be sent over via invitation notification and is not permanently stored in the game session storage.
     */
    createInvite_BySessionId,
    /**
     * Promote game session member to become the new game session leader. This API requires the NAMESPACE:{namespace}:SESSION:GAME [UPDATE] permission. This API can be operated by: - User (game session member) who is the current leader of the game session - Game Client - Dedicated Server (DS) This API will promote game session leader candidate with the following criteria: - Leader candidate is a member of the game session - Leader candidate has a &#34;CONNECTED&#34; or &#34;JOINED&#34; status - If the leader candidate is the current leader, then no promotion process is carried out
     */
    updateLeader_BySessionId,
    /**
     * Reject a game session invitation.
     */
    deleteReject_BySessionId,
    /**
     *  Used by game Client to Get Secret constraints - EnableSecret = true - Type = &#34;DS&#34; - secret value will only be produced if enableSecret is true and type is DS if enableSecret = false - empty secret will be returned as 200 OK Expected caller of this API - Game Client to get server secret In the Response you will get following: - 200 OK { &#34;secret&#34;: &lt;string&gt; } If there is error: - 400 Invalid path parameters - 401 unauthorized - 404 StatusNotFound - 500 Internal server error
     */
    getSecret_BySessionId,
    /**
     * Update game session backfill ticket id. Will override game session backfill ticket based on given request parameter
     */
    updateBackfill_BySessionId,
    /**
     * cancel a game session invitation.
     */
    deleteCancel_BySessionId_ByUserId,
    /**
     * Kick member from a game session, only leader can kick member.
     */
    deleteKick_BySessionId_ByMemberId
  }
}
