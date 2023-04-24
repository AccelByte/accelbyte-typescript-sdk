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
import { z } from 'zod'
import { CreatePartyRequest } from '../definitions/CreatePartyRequest'
import { JoinByCodeRequest } from '../definitions/JoinByCodeRequest'
import { KickResponse } from '../definitions/KickResponse'
import { PartySessionResponse } from '../definitions/PartySessionResponse'
import { PartySessionResponseArray } from '../definitions/PartySessionResponseArray'
import { PromoteLeaderRequest } from '../definitions/PromoteLeaderRequest'
import { SessionInviteRequest } from '../definitions/SessionInviteRequest'
import { UpdatePartyRequest } from '../definitions/UpdatePartyRequest'

export class Party$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * A join code will be autogenerated if the party is joinable. Creator will be removed from previous party (if any) and automatically join into the created party as a leader. Party members will be sent invitation to join the party. Session configuration name is optional. Default configuration name if empty: { "name": "default", "type": "NONE", "joinability": "OPEN", "minPlayers": 1, "maxPlayers": 8, "inviteTimeout": 60, "inactiveTimeout": 60, "textChat": false } Supported platforms: 1. STEAM Attribute key "preference" is used to store preference of the leader and it is non-replaceable to keep the initial behavior of the session regardless the leader changes.
   */
  createParty(data: CreatePartyRequest): Promise<IResponse<PartySessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/party'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, PartySessionResponse, 'PartySessionResponse')
  }

  /**
   * Query user's parties. By default, API will return a list of user's active parties.
   */
  getUsersMeParties(queryParams?: {
    status?: string | null
    orderBy?: string | null
    order?: string | null
  }): Promise<IResponseWithSync<PartySessionResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/users/me/parties'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PartySessionResponseArray, 'PartySessionResponseArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get party details.
   */
  getParty_ByPartyId(partyId: string): Promise<IResponseWithSync<PartySessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/parties/{partyId}'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PartySessionResponse, 'PartySessionResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Updates party blob, this endpoint will override stored party data. Join type can only be updated by the party's leader. To update only specified fields, please use following endpoint: method : PATCH API : /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId} Attribute key "preference" is used to store preference of the leader and it is non-replaceable to keep the initial behavior of the session regardless the leader changes.
   */
  updateParty_ByPartyId(partyId: string, data: UpdatePartyRequest): Promise<IResponse<PartySessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/parties/{partyId}'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, PartySessionResponse, 'PartySessionResponse')
  }

  /**
   * Update specified fields from party data. Note: Join type can only be updated by the party's leader. Attribute key "preference" is used to store preference of the leader and it is non-replaceable to keep the initial behavior of the session regardless the leader changes.
   */
  patchParty_ByPartyId(partyId: string, data: UpdatePartyRequest): Promise<IResponse<PartySessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/parties/{partyId}'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, PartySessionResponse, 'PartySessionResponse')
  }

  /**
   * Generate a new code for the party. Only leader can generate a code.
   */
  createCode_ByPartyId(partyId: string): Promise<IResponse<PartySessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/parties/{partyId}/code'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, PartySessionResponse, 'PartySessionResponse')
  }

  /**
   * Revoke code of the party. Only leader can revoke a code.
   */
  deleteCode_ByPartyId(partyId: string): Promise<IResponse<PartySessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/parties/{partyId}/code'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, PartySessionResponse, 'PartySessionResponse')
  }

  /**
   * Invite a user to a party. platformID represents the native platform of the invitee. API will return the corresponding native platform's userID. supported platforms: - STEAM - XBOX - PSN
   */
  createInvite_ByPartyId(partyId: string, data: SessionInviteRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/parties/{partyId}/invite'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Promotes a party member to be a party leader. Only leader can promote a new leader.
   */
  createLeader_ByPartyId(partyId: string, data: PromoteLeaderRequest): Promise<IResponse<PartySessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/parties/{partyId}/leader'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, PartySessionResponse, 'PartySessionResponse')
  }

  /**
   * Join a party by code. The user can join a party as long as the code is valid
   */
  createPartyUserMeJoinCode(data: JoinByCodeRequest): Promise<IResponse<PartySessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/parties/users/me/join/code'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, PartySessionResponse, 'PartySessionResponse')
  }

  /**
   * Join a party. The user can either join a party they have been invited to, or any party with an "open" joinable setting.
   */
  createUserMeJoin_ByPartyId(partyId: string): Promise<IResponse<PartySessionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/parties/{partyId}/users/me/join'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, PartySessionResponse, 'PartySessionResponse')
  }

  /**
   * Leave a party
   */
  deleteUserMeLeave_ByPartyId(partyId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/parties/{partyId}/users/me/leave'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Reject a party invitation.
   */
  deleteUserMeReject_ByPartyId(partyId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/parties/{partyId}/users/me/reject'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Kick a player from a party. Requires invoker to be the party leader.
   */
  deleteKick_ByPartyId_ByUserId(partyId: string, userId: string): Promise<IResponse<KickResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/parties/{partyId}/users/{userId}/kick'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, KickResponse, 'KickResponse')
  }
}
