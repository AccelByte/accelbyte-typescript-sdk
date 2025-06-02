/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { FriendshipConnectionResponse } from '../../generated-definitions/FriendshipConnectionResponse.js'
import { GetFriendsResponse } from '../../generated-definitions/GetFriendsResponse.js'
import { LoadIncomingFriendsWithTimeResponse } from '../../generated-definitions/LoadIncomingFriendsWithTimeResponse.js'
import { LoadOutgoingFriendsWithTimeResponse } from '../../generated-definitions/LoadOutgoingFriendsWithTimeResponse.js'

export class FriendsAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get list of friends in a namespace.
   */
  getFriendUser_ByUserId(
    userId: string,
    queryParams?: { friendId?: string | null; friendIds?: string[]; limit?: number; offset?: number }
  ): Promise<Response<GetFriendsResponse>> {
    const params = { limit: 25, ...queryParams } as AxiosRequestConfig
    const url = '/lobby/v1/admin/friend/namespaces/{namespace}/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GetFriendsResponse, 'GetFriendsResponse')
  }
  /**
   * Get list of incoming friend requests.
   */
  getIncomingFriend_ByUserId(
    userId: string,
    queryParams?: { friendId?: string | null; limit?: number; offset?: number }
  ): Promise<Response<LoadIncomingFriendsWithTimeResponse>> {
    const params = { limit: 25, ...queryParams } as AxiosRequestConfig
    const url = '/lobby/v1/admin/friend/namespaces/{namespace}/users/{userId}/incoming'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      LoadIncomingFriendsWithTimeResponse,
      'LoadIncomingFriendsWithTimeResponse'
    )
  }
  /**
   * Get list of outgoing friend requests in a namespace.
   */
  getOutgoingFriend_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<Response<LoadOutgoingFriendsWithTimeResponse>> {
    const params = { limit: 25, ...queryParams } as AxiosRequestConfig
    const url = '/lobby/v1/admin/friend/namespaces/{namespace}/users/{userId}/outgoing'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      LoadOutgoingFriendsWithTimeResponse,
      'LoadOutgoingFriendsWithTimeResponse'
    )
  }
  /**
   * Load list friends and friends of friends in a namespace. Response subjectId will be different with requested userId if the user is not directly friend
   */
  getOfFriends_ByUserId(
    userId: string,
    queryParams?: { friendId?: string | null; limit?: number; nopaging?: boolean | null; offset?: number }
  ): Promise<Response<FriendshipConnectionResponse>> {
    const params = { limit: 25, ...queryParams } as AxiosRequestConfig
    const url = '/lobby/v1/admin/friend/namespaces/{namespace}/users/{userId}/of-friends'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      FriendshipConnectionResponse,
      'FriendshipConnectionResponse'
    )
  }
}
