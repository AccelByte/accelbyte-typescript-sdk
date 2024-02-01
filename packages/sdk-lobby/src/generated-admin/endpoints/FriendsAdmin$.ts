/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { FriendshipConnectionResponse } from '../../generated-definitions/FriendshipConnectionResponse.js'
import { GetFriendsResponse } from '../../generated-definitions/GetFriendsResponse.js'
import { LoadIncomingFriendsWithTimeResponse } from '../../generated-definitions/LoadIncomingFriendsWithTimeResponse.js'
import { LoadOutgoingFriendsWithTimeResponse } from '../../generated-definitions/LoadOutgoingFriendsWithTimeResponse.js'

export class FriendsAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Get list of friends in a namespace.
   */
  getFriendUser_ByUserId(
    userId: string,
    queryParams?: { friendId?: string | null; friendIds?: string[]; limit?: number; offset?: number }
  ): Promise<IResponseWithSync<GetFriendsResponse>> {
    const params = { limit: 25, ...queryParams } as SDKRequestConfig
    const url = '/lobby/v1/admin/friend/namespaces/{namespace}/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetFriendsResponse, 'GetFriendsResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get list of incoming friend requests.
   */
  getIncomingFriend_ByUserId(
    userId: string,
    queryParams?: { friendId?: string | null; limit?: number; offset?: number }
  ): Promise<IResponseWithSync<LoadIncomingFriendsWithTimeResponse>> {
    const params = { limit: 25, ...queryParams } as SDKRequestConfig
    const url = '/lobby/v1/admin/friend/namespaces/{namespace}/users/{userId}/incoming'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, LoadIncomingFriendsWithTimeResponse, 'LoadIncomingFriendsWithTimeResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get list of outgoing friend requests in a namespace.
   */
  getOutgoingFriend_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<LoadOutgoingFriendsWithTimeResponse>> {
    const params = { limit: 25, ...queryParams } as SDKRequestConfig
    const url = '/lobby/v1/admin/friend/namespaces/{namespace}/users/{userId}/outgoing'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, LoadOutgoingFriendsWithTimeResponse, 'LoadOutgoingFriendsWithTimeResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Load list friends and friends of friends in a namespace. Response subjectId will be different with requested userId if the user is not directly friend
   */
  getOfFriends_ByUserId(
    userId: string,
    queryParams?: { friendId?: string | null; limit?: number; nopaging?: boolean | null; offset?: number }
  ): Promise<IResponseWithSync<FriendshipConnectionResponse>> {
    const params = { limit: 25, ...queryParams } as SDKRequestConfig
    const url = '/lobby/v1/admin/friend/namespaces/{namespace}/users/{userId}/of-friends'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, FriendshipConnectionResponse, 'FriendshipConnectionResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
