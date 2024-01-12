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
import { GetFriendsResponse } from '../../generated-definitions/GetFriendsResponse.js'
import { LoadIncomingFriendsWithTimeResponse } from '../../generated-definitions/LoadIncomingFriendsWithTimeResponse.js'
import { LoadOutgoingFriendsWithTimeResponse } from '../../generated-definitions/LoadOutgoingFriendsWithTimeResponse.js'

export class FriendsAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Get list of friends in a namespace.
   */
  getFriendUser_ByUserId(
    userId: string,
    queryParams?: { friendId?: string | null; limit?: number; offset?: number }
  ): Promise<IResponseWithSync<GetFriendsResponse>> {
    const params = { limit: 25, ...queryParams } as SDKRequestConfig
    const url = '/lobby/v1/admin/friend/namespaces/{namespace}/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetFriendsResponse, 'GetFriendsResponse')

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

    const res = () => Validate.responseType(() => resultPromise, LoadIncomingFriendsWithTimeResponse, 'LoadIncomingFriendsWithTimeResponse')

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

    const res = () => Validate.responseType(() => resultPromise, LoadOutgoingFriendsWithTimeResponse, 'LoadOutgoingFriendsWithTimeResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
