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

export function FriendsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Get list of friends in a namespace.
   */
  async function getFriendsMe(queryParams?: { limit?: number; offset?: number }): Promise<GetUserFriendsResponseArray> {
    const $ = new Friends$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getFriendsMe(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sync friends using server to server call to native first party server. Supported platforms: steam: The platform_token’s value is the binary ticket returned by Steam. If this ticket was generated by Steam GetAuthTicketForWebApi with version &gt;= 1.57, then platform token should use this style: {identity}:{ticket} the {identity} was the parameter to call GetAuthTicketForWebApi when the ticket was created. Note: Do not contain : in this {identity} ps4: The platform_token’s value is the authorization code returned by Sony OAuth. ps5: The platform_token’s value is the authorization code returned by Sony OAuth. pspc: The platform_token’s value is the authorization code returned by Sony OAuth.
   */
  async function patchFriendSyncMe(data: NativeFriendRequest[]): Promise<NativeFriendSyncResponseArray> {
    const $ = new Friends$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchFriendSyncMe(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Client should provide either friendID or friendPublicID. If both are provided, friendID will be chosen to be used. This endpoint will only send a pending invite that can be either rejected/accepted
   */
  async function createFriendMeRequest(data: UserRequestFriendRequest): Promise<unknown> {
    const $ = new Friends$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createFriendMeRequest(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get list of incoming friends in a namespace.
   */
  async function getFriendsMeIncoming(queryParams?: { limit?: number; offset?: number }): Promise<GetUserIncomingFriendsResponseArray> {
    const $ = new Friends$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getFriendsMeIncoming(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get list of outgoing friends in a namespace.
   */
  async function getFriendsMeOutgoing(queryParams?: { limit?: number; offset?: number }): Promise<GetUserOutgoingFriendsResponseArray> {
    const $ = new Friends$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getFriendsMeOutgoing(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * User unfriend a friend.
   */
  async function createFriendMeUnfriend(data: UserUnfriendRequest): Promise<unknown> {
    const $ = new Friends$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createFriendMeUnfriend(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get list of friends with platform data in a namespace.
   */
  async function getFriendsMePlatforms(queryParams?: { limit?: number; offset?: number }): Promise<ListBulkUserPlatformsResponse> {
    const $ = new Friends$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getFriendsMePlatforms(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get list of incoming friends with requested time info in a namespace.
   */
  async function getFriendsMeIncomingTime(queryParams?: {
    limit?: number
    offset?: number
  }): Promise<LoadIncomingFriendsWithTimeResponseArray> {
    const $ = new Friends$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getFriendsMeIncomingTime(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get list of outgoing friends with requested time info in a namespace.
   */
  async function getFriendsMeOutgoingTime(queryParams?: {
    limit?: number
    offset?: number
  }): Promise<LoadOutgoingFriendsWithTimeResponseArray> {
    const $ = new Friends$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getFriendsMeOutgoingTime(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * User accept friend.
   */
  async function createFriendMeRequestAccept(data: UserAcceptFriendRequest): Promise<unknown> {
    const $ = new Friends$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createFriendMeRequestAccept(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * User cancel a friend request.
   */
  async function createFriendMeRequestCancel(data: UserCancelFriendRequest): Promise<unknown> {
    const $ = new Friends$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createFriendMeRequestCancel(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * User reject a friend request.
   */
  async function createFriendMeRequestReject(data: UserRejectFriendRequest): Promise<unknown> {
    const $ = new Friends$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createFriendMeRequestReject(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * User get friendship status. Code: 0 - Message: &#34;not friend&#34; Code: 1 - Message: &#34;outgoing&#34; Code: 2 - Message: &#34;incoming&#34; Code: 3 - Message: &#34;friend&#34;
   */
  async function getFriendMeStatu_ByFriendId(friendId: string): Promise<UserGetFriendshipStatusResponse> {
    const $ = new Friends$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getFriendMeStatu_ByFriendId(friendId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Friends request in a namespace.
   */
  async function createAddBulkFriend_ByUserId(userId: string, data: BulkFriendsRequest): Promise<unknown> {
    const $ = new Friends$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createAddBulkFriend_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Friends request in a namespace.
   */
  async function createDeleteBulkFriend_ByUserId(userId: string, data: BulkFriendsRequest): Promise<BulkFriendsResponse> {
    const $ = new Friends$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createDeleteBulkFriend_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getFriendsMe,
    patchFriendSyncMe,
    createFriendMeRequest,
    getFriendsMeIncoming,
    getFriendsMeOutgoing,
    createFriendMeUnfriend,
    getFriendsMePlatforms,
    getFriendsMeIncomingTime,
    getFriendsMeOutgoingTime,
    createFriendMeRequestAccept,
    createFriendMeRequestCancel,
    createFriendMeRequestReject,
    getFriendMeStatu_ByFriendId,
    createAddBulkFriend_ByUserId,
    createDeleteBulkFriend_ByUserId
  }
}
