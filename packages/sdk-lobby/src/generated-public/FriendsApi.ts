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
import { BulkFriendsRequest } from '../generated-definitions/BulkFriendsRequest.js'
import { BulkFriendsResponse } from '../generated-definitions/BulkFriendsResponse.js'
import { GetUserFriendsResponseArray } from '../generated-definitions/GetUserFriendsResponseArray.js'
import { GetUserIncomingFriendsResponseArray } from '../generated-definitions/GetUserIncomingFriendsResponseArray.js'
import { GetUserOutgoingFriendsResponseArray } from '../generated-definitions/GetUserOutgoingFriendsResponseArray.js'
import { ListBulkUserPlatformsResponse } from '../generated-definitions/ListBulkUserPlatformsResponse.js'
import { LoadIncomingFriendsWithTimeResponseArray } from '../generated-definitions/LoadIncomingFriendsWithTimeResponseArray.js'
import { LoadOutgoingFriendsWithTimeResponseArray } from '../generated-definitions/LoadOutgoingFriendsWithTimeResponseArray.js'
import { NativeFriendRequest } from '../generated-definitions/NativeFriendRequest.js'
import { NativeFriendSyncResponseArray } from '../generated-definitions/NativeFriendSyncResponseArray.js'
import { UserAcceptFriendRequest } from '../generated-definitions/UserAcceptFriendRequest.js'
import { UserCancelFriendRequest } from '../generated-definitions/UserCancelFriendRequest.js'
import { UserGetFriendshipStatusResponse } from '../generated-definitions/UserGetFriendshipStatusResponse.js'
import { UserRejectFriendRequest } from '../generated-definitions/UserRejectFriendRequest.js'
import { UserRequestFriendRequest } from '../generated-definitions/UserRequestFriendRequest.js'
import { UserUnfriendRequest } from '../generated-definitions/UserUnfriendRequest.js'
import { Friends$ } from './endpoints/Friends$.js'

export function FriendsApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getFriendsMe(queryParams?: { limit?: number; offset?: number }): Promise<AxiosResponse<GetUserFriendsResponseArray>> {
    const $ = new Friends$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFriendsMe(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchFriendSyncMe(data: NativeFriendRequest[]): Promise<AxiosResponse<NativeFriendSyncResponseArray>> {
    const $ = new Friends$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchFriendSyncMe(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createFriendMeRequest(data: UserRequestFriendRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Friends$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFriendMeRequest(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getFriendsMeIncoming(queryParams?: {
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<GetUserIncomingFriendsResponseArray>> {
    const $ = new Friends$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFriendsMeIncoming(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getFriendsMeOutgoing(queryParams?: {
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<GetUserOutgoingFriendsResponseArray>> {
    const $ = new Friends$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFriendsMeOutgoing(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createFriendMeUnfriend(data: UserUnfriendRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Friends$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFriendMeUnfriend(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getFriendsMePlatforms(queryParams?: {
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<ListBulkUserPlatformsResponse>> {
    const $ = new Friends$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFriendsMePlatforms(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getFriendsMeIncomingTime(queryParams?: {
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<LoadIncomingFriendsWithTimeResponseArray>> {
    const $ = new Friends$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFriendsMeIncomingTime(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getFriendsMeOutgoingTime(queryParams?: {
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<LoadOutgoingFriendsWithTimeResponseArray>> {
    const $ = new Friends$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFriendsMeOutgoingTime(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createFriendMeRequestAccept(data: UserAcceptFriendRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Friends$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFriendMeRequestAccept(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createFriendMeRequestCancel(data: UserCancelFriendRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Friends$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFriendMeRequestCancel(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createFriendMeRequestReject(data: UserRejectFriendRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Friends$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFriendMeRequestReject(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getFriendMeStatu_ByFriendId(friendId: string): Promise<AxiosResponse<UserGetFriendshipStatusResponse>> {
    const $ = new Friends$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFriendMeStatu_ByFriendId(friendId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createAddBulkFriend_ByUserId(userId: string, data: BulkFriendsRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Friends$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createAddBulkFriend_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createDeleteBulkFriend_ByUserId(userId: string, data: BulkFriendsRequest): Promise<AxiosResponse<BulkFriendsResponse>> {
    const $ = new Friends$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createDeleteBulkFriend_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get list of friends in a namespace.
     */
    getFriendsMe,
    /**
     * Sync friends using server to server call to native first party server. Supported platforms: steam: The platform_token’s value is the binary ticket returned by Steam. If this ticket was generated by Steam GetAuthTicketForWebApi with version &gt;= 1.57, then platform token should use this style: {identity}:{ticket} the {identity} was the parameter to call GetAuthTicketForWebApi when the ticket was created. Note: Do not contain : in this {identity} ps4: The platform_token’s value is the authorization code returned by Sony OAuth. ps5: The platform_token’s value is the authorization code returned by Sony OAuth. pspc: The platform_token’s value is the authorization code returned by Sony OAuth.
     */
    patchFriendSyncMe,
    /**
     * Client should provide either friendID or friendPublicID. If both are provided, friendID will be chosen to be used. This endpoint will only send a pending invite that can be either rejected/accepted
     */
    createFriendMeRequest,
    /**
     * Get list of incoming friends in a namespace.
     */
    getFriendsMeIncoming,
    /**
     * Get list of outgoing friends in a namespace.
     */
    getFriendsMeOutgoing,
    /**
     * User unfriend a friend.
     */
    createFriendMeUnfriend,
    /**
     * Get list of friends with platform data in a namespace.
     */
    getFriendsMePlatforms,
    /**
     * Get list of incoming friends with requested time info in a namespace.
     */
    getFriendsMeIncomingTime,
    /**
     * Get list of outgoing friends with requested time info in a namespace.
     */
    getFriendsMeOutgoingTime,
    /**
     * User accept friend.
     */
    createFriendMeRequestAccept,
    /**
     * User cancel a friend request.
     */
    createFriendMeRequestCancel,
    /**
     * User reject a friend request.
     */
    createFriendMeRequestReject,
    /**
     * User get friendship status. Code: 0 - Message: &#34;not friend&#34; Code: 1 - Message: &#34;outgoing&#34; Code: 2 - Message: &#34;incoming&#34; Code: 3 - Message: &#34;friend&#34;
     */
    getFriendMeStatu_ByFriendId,
    /**
     * Friends request in a namespace.
     */
    createAddBulkFriend_ByUserId,
    /**
     * Friends request in a namespace.
     */
    createDeleteBulkFriend_ByUserId
  }
}
