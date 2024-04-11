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
import { FriendsAdmin$ } from './endpoints/FriendsAdmin$.js'
import { FriendshipConnectionResponse } from '../generated-definitions/FriendshipConnectionResponse.js'
import { GetFriendsResponse } from '../generated-definitions/GetFriendsResponse.js'
import { LoadIncomingFriendsWithTimeResponse } from '../generated-definitions/LoadIncomingFriendsWithTimeResponse.js'
import { LoadOutgoingFriendsWithTimeResponse } from '../generated-definitions/LoadOutgoingFriendsWithTimeResponse.js'

export function FriendsAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Get list of friends in a namespace.
   */
  async function getFriendUser_ByUserId(
    userId: string,
    queryParams?: { friendId?: string | null; friendIds?: string[]; limit?: number; offset?: number }
  ): Promise<GetFriendsResponse> {
    const $ = new FriendsAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getFriendUser_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get list of incoming friend requests.
   */
  async function getIncomingFriend_ByUserId(
    userId: string,
    queryParams?: { friendId?: string | null; limit?: number; offset?: number }
  ): Promise<LoadIncomingFriendsWithTimeResponse> {
    const $ = new FriendsAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getIncomingFriend_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get list of outgoing friend requests in a namespace.
   */
  async function getOutgoingFriend_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<LoadOutgoingFriendsWithTimeResponse> {
    const $ = new FriendsAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getOutgoingFriend_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Load list friends and friends of friends in a namespace. Response subjectId will be different with requested userId if the user is not directly friend
   */
  async function getOfFriends_ByUserId(
    userId: string,
    queryParams?: { friendId?: string | null; limit?: number; nopaging?: boolean | null; offset?: number }
  ): Promise<FriendshipConnectionResponse> {
    const $ = new FriendsAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getOfFriends_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getFriendUser_ByUserId,
    getIncomingFriend_ByUserId,
    getOutgoingFriend_ByUserId,
    getOfFriends_ByUserId
  }
}
