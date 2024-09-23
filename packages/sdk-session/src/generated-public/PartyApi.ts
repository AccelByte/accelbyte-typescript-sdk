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
import { CreatePartyRequest } from '../generated-definitions/CreatePartyRequest.js'
import { JoinByCodeRequest } from '../generated-definitions/JoinByCodeRequest.js'
import { KickResponse } from '../generated-definitions/KickResponse.js'
import { PartyQueryResponse } from '../generated-definitions/PartyQueryResponse.js'
import { PartySessionResponse } from '../generated-definitions/PartySessionResponse.js'
import { PromoteLeaderRequest } from '../generated-definitions/PromoteLeaderRequest.js'
import { SessionInviteRequest } from '../generated-definitions/SessionInviteRequest.js'
import { SessionInviteResponse } from '../generated-definitions/SessionInviteResponse.js'
import { UpdatePartyRequest } from '../generated-definitions/UpdatePartyRequest.js'
import { Party$ } from './endpoints/Party$.js'

export function PartyApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function createParty(data: CreatePartyRequest): Promise<AxiosResponse<PartySessionResponse>> {
    const $ = new Party$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createParty(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersMeParties(queryParams?: {
    order?: string | null
    orderBy?: string | null
    status?: string | null
  }): Promise<AxiosResponse<PartyQueryResponse>> {
    const $ = new Party$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeParties(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getParty_ByPartyId(partyId: string): Promise<AxiosResponse<PartySessionResponse>> {
    const $ = new Party$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getParty_ByPartyId(partyId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchParty_ByPartyId(partyId: string, data: UpdatePartyRequest): Promise<AxiosResponse<PartySessionResponse>> {
    const $ = new Party$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchParty_ByPartyId(partyId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateParty_ByPartyId(partyId: string, data: UpdatePartyRequest): Promise<AxiosResponse<PartySessionResponse>> {
    const $ = new Party$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateParty_ByPartyId(partyId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteCode_ByPartyId(partyId: string): Promise<AxiosResponse<unknown>> {
    const $ = new Party$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteCode_ByPartyId(partyId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateCode_ByPartyId(partyId: string): Promise<AxiosResponse<PartySessionResponse>> {
    const $ = new Party$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCode_ByPartyId(partyId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createInvite_ByPartyId(partyId: string, data: SessionInviteRequest): Promise<AxiosResponse<SessionInviteResponse>> {
    const $ = new Party$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createInvite_ByPartyId(partyId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateLeader_ByPartyId(partyId: string, data: PromoteLeaderRequest): Promise<AxiosResponse<PartySessionResponse>> {
    const $ = new Party$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateLeader_ByPartyId(partyId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createPartyUserMeJoinCode(data: JoinByCodeRequest): Promise<AxiosResponse<PartySessionResponse>> {
    const $ = new Party$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPartyUserMeJoinCode(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserMeJoin_ByPartyId(partyId: string): Promise<AxiosResponse<PartySessionResponse>> {
    const $ = new Party$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeJoin_ByPartyId(partyId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteUserMeLeave_ByPartyId(partyId: string): Promise<AxiosResponse<unknown>> {
    const $ = new Party$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteUserMeLeave_ByPartyId(partyId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteUserMeReject_ByPartyId(partyId: string): Promise<AxiosResponse<unknown>> {
    const $ = new Party$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteUserMeReject_ByPartyId(partyId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteKick_ByPartyId_ByUserId(partyId: string, userId: string): Promise<AxiosResponse<KickResponse>> {
    const $ = new Party$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteKick_ByPartyId_ByUserId(partyId, userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteCancel_ByPartyId_ByUserId(partyId: string, userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new Party$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteCancel_ByPartyId_ByUserId(partyId, userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * A join code will be autogenerated if the party is joinable. A user can be in 1 party at a time, therefore the requester will be removed from their previous party (if any) and automatically added/joined into this newly created party as a leader. Session configuration name is optional. Default configuration name if empty: { &#34;name&#34;: &#34;default&#34;, &#34;type&#34;: &#34;NONE&#34;, &#34;joinability&#34;: &#34;OPEN&#34;, &#34;minPlayers&#34;: 1, &#34;maxPlayers&#34;: 8, &#34;inviteTimeout&#34;: 60, &#34;inactiveTimeout&#34;: 60, &#34;textChat&#34;: false } When session configuration &#34;name&#34; is provided, we will refer to the template if these fields are empty: - textChat - minPlayers - maxPlayers - inviteTimeout - inactiveTimeout - type - joinability - configurationName - attributes Supported platforms: 1. STEAM 2. PSN 3. XBOX Reserved attributes key: 1. preference: used to store preference of the leader and it is non-replaceable to keep the initial behavior of the session regardless the leader changes. 2. NATIVESESSIONTITLE: used for session sync, to define name of session displayed on PlayStation system UI. Session has 2 fields for user status: &#34;status&#34; and &#34;statusV2&#34;. The &#34;status&#34; is there for backward-compatibility, therefore we encourage to just rely on &#34;statusV2&#34; for the more updated statuses. User statuses: 1. INVITED: by default, to join a session (except session with OPEN joinability or if session configuration has &#34;autoJoin&#34; sets to True) a user will receive an invite. The invitee will have the chance to respond within &#34;inviteTimeout&#34; which you can configure through session configuration. 2. TIMEOUT: when a user is invited to a session, they will receive an invite. Unless &#34;disableResendInvite&#34; sets to True in the session configuration, the user will also receive invite reminder every 30s until they respond to the invite. 3. REJECTED: when a user rejects an invite. To rejoin an INVITE_ONLY session, they will need to be re-invited and accept the invite. 4. JOINED: there are few ways of a user to join a session, by invite, direct join (depends on session joinability) or join by code. upon invite, once a user accepts an invite, their status will be changed to JOINED. 5. LEFT: user can leave a session. in case of party, a user can only be in 1 party at a time. therefore when they decide to create or join another party, they will be automatically removed from their initial party and their status will be changed to LEFT. 6. KICKED: only party leader can kick a member. 7. DISCONNECTED: if user still have reserved seat in the session and they disconnect lobby websocket, their status in the session will be changed to DISCONNECTED and field &#34;members.previousStatus&#34; of that user will contains the initial status before they disconnect lobby websocket. the user will be given chance to reconnect within &#34;inactiveTimeout&#34; which you can configure through session configuration. 8. CONNECTED: when a user reconnect their lobby websocket, their status will change from DISCONNECTED to CONNECTED, only if they previously JOINED session. if they were on INVITED state before the disconnect happened, the user&#39;s status will return back to INVITED after they reconnect. 9. DROPPED: when &#34;inactiveTimeout&#34; is due and user never re-establish their websocket connection, we will drop them from the session. 10. TERMINATED: only applies to game session. If a game session (match) is ended, DS will end/delete the session and we will mark all remaining users&#39; status to be TERMINATED. 11. CANCELLED: when a session joinability changes to CLOSED, any remaining invites will be canceled. User is considered as active if they&#39;re present in the session, which their status either CONNECTED or JOINED. User has a reserved seat in the session if their status either INVITED, JOINED, CONNECTED, DISCONNECTED. When user&#39;s&#39; status change to other than these mentioned statuses, we will release the seat for other players to occupy. Managing the relation between session and lobby websocket connection: - Session relies on lobby to consider player&#39;s connection health to our backend. therefore a disruption to lobby websocket will be reflected in the user&#39;s status in all of their session(s). - If user still have a reserved seat in the session and they disconnect lobby websocket, their status in session(s) will be changed to DISCONNECTED and field &#34;members.previousStatus&#34; of that user will contains the initial status before they disconnect lobby websocket. This &#34;members.previousStatus&#34; used to track user&#39;s previous status before they disconnect websocket, since we still reserve a seat for them, therefore this field will be empty again after they websocket. - If the disconnected user is the leader of the session they&#39;re disconnected from, we will wait until &#34;leaderElectionGracePeriod&#34; is due, to promote the next oldest member as the new leader of the session. You can configure &#34;leaderElectionGracePeriod&#34; through session configuration. - The user will be given chance to reconnect within &#34;inactiveTimeout&#34; which you can configure through session configuration. If until &#34;inactiveTimeout&#34; is due and the user doesn&#39;t reconnect their websocket, they will be removed from session and their status will change to DROPPED. If the dropped user was the leader of the session, we will promote the next oldest member as leader. - By default, we will update user&#39;s status to what it was before disconnect, when the user reconnects lobby websocket, unless &#34;manualRejoin&#34; sets to True in the session configuration. When &#34;manualRejoin&#34; is enabled, after lobby websocket reconnect, the game client will need to manually invoke join session again to rejoin the session. - If the user was on INVITED state before the disconnect happened, the user&#39;s status will return back to INVITED after they reconnect.
     */
    createParty,
    /**
     * Query user&#39;s parties. By default, API will return a list of user&#39;s active parties.
     */
    getUsersMeParties,
    /**
     * Get party details.
     */
    getParty_ByPartyId,
    /**
     * Update specified fields from party data. Note: Join type can only be updated by the party&#39;s leader. Reserved attributes key: 1. preference: used to store preference of the leader and it is non-replaceable to keep the initial behavior of the session regardless the leader changes. 2. NATIVESESSIONTITLE: used for session sync, to define name of session displayed on PlayStation system UI.
     */
    patchParty_ByPartyId,
    /**
     * Updates party blob, this endpoint will override stored party data. Join type can only be updated by the party&#39;s leader. To update only specified fields, please use following endpoint: method : PATCH API : /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId} Reserved attributes key: 1. preference: used to store preference of the leader and it is non-replaceable to keep the initial behavior of the session regardless the leader changes. 2. NATIVESESSIONTITLE: used for session sync, to define name of session displayed on PlayStation system UI.
     */
    updateParty_ByPartyId,
    /**
     * Revoke code of the party. Only leader can revoke a code.
     */
    deleteCode_ByPartyId,
    /**
     * Generate a new code for the party. Only leader can generate a code.
     */
    updateCode_ByPartyId,
    /**
     * Invite a user to a party. platformID represents the native platform of the invitee. API will return the corresponding native platform&#39;s userID. supported platforms: - STEAM - XBOX - PSN
     */
    createInvite_ByPartyId,
    /**
     * Promotes a party member to be a party leader. Only leader can promote a new leader.
     */
    updateLeader_ByPartyId,
    /**
     * Join a party by code. The user can join a party as long as the code is valid
     */
    createPartyUserMeJoinCode,
    /**
     * Join a party. The user can either join a party they have been invited to, or any party with an &#34;open&#34; joinable setting.
     */
    createUserMeJoin_ByPartyId,
    /**
     * Leave a party
     */
    deleteUserMeLeave_ByPartyId,
    /**
     * Reject a party invitation.
     */
    deleteUserMeReject_ByPartyId,
    /**
     * Kick a player from a party. Requires invoker to be the party leader.
     */
    deleteKick_ByPartyId_ByUserId,
    /**
     * Cancel a party invitation.
     */
    deleteCancel_ByPartyId_ByUserId
  }
}
