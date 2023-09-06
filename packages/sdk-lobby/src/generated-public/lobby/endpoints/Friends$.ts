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
import { BulkFriendsRequest } from '../definitions/BulkFriendsRequest.js'
import { BulkFriendsResponse } from '../definitions/BulkFriendsResponse.js'
import { GetUserFriendsResponseArray } from '../definitions/GetUserFriendsResponseArray.js'
import { GetUserIncomingFriendsResponseArray } from '../definitions/GetUserIncomingFriendsResponseArray.js'
import { GetUserOutgoingFriendsResponseArray } from '../definitions/GetUserOutgoingFriendsResponseArray.js'
import { ListBulkUserPlatformsResponse } from '../definitions/ListBulkUserPlatformsResponse.js'
import { LoadIncomingFriendsWithTimeResponseArray } from '../definitions/LoadIncomingFriendsWithTimeResponseArray.js'
import { LoadOutgoingFriendsWithTimeResponseArray } from '../definitions/LoadOutgoingFriendsWithTimeResponseArray.js'
import { UserAcceptFriendRequest } from '../definitions/UserAcceptFriendRequest.js'
import { UserCancelFriendRequest } from '../definitions/UserCancelFriendRequest.js'
import { UserGetFriendshipStatusResponse } from '../definitions/UserGetFriendshipStatusResponse.js'
import { UserRejectFriendRequest } from '../definitions/UserRejectFriendRequest.js'
import { UserRequestFriendRequest } from '../definitions/UserRequestFriendRequest.js'
import { UserUnfriendRequest } from '../definitions/UserUnfriendRequest.js'

export class Friends$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  getFriendsMe(queryParams?: { limit?: number; offset?: number }): Promise<IResponseWithSync<GetUserFriendsResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetUserFriendsResponseArray, 'GetUserFriendsResponseArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Client should provide either friendID or friendPublicID. If both are provided, friendID will be chosen to be used.
   */
  createFriendMeRequest(data: UserRequestFriendRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me/request'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  getFriendsMeIncoming(queryParams?: { limit?: number; offset?: number }): Promise<IResponseWithSync<GetUserIncomingFriendsResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me/incoming'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetUserIncomingFriendsResponseArray, 'GetUserIncomingFriendsResponseArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  getFriendsMeOutgoing(queryParams?: { limit?: number; offset?: number }): Promise<IResponseWithSync<GetUserOutgoingFriendsResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me/outgoing'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetUserOutgoingFriendsResponseArray, 'GetUserOutgoingFriendsResponseArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  createFriendMeUnfriend(data: UserUnfriendRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me/unfriend'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  getFriendsMePlatforms(queryParams?: { limit?: number; offset?: number }): Promise<IResponseWithSync<ListBulkUserPlatformsResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me/platforms'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ListBulkUserPlatformsResponse, 'ListBulkUserPlatformsResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  getFriendsMeIncomingTime(queryParams?: {
    limit?: number
    offset?: number
  }): Promise<IResponseWithSync<LoadIncomingFriendsWithTimeResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me/incoming-time'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => resultPromise, LoadIncomingFriendsWithTimeResponseArray, 'LoadIncomingFriendsWithTimeResponseArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  getFriendsMeOutgoingTime(queryParams?: {
    limit?: number
    offset?: number
  }): Promise<IResponseWithSync<LoadOutgoingFriendsWithTimeResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me/outgoing-time'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => resultPromise, LoadOutgoingFriendsWithTimeResponseArray, 'LoadOutgoingFriendsWithTimeResponseArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  createFriendMeRequestAccept(data: UserAcceptFriendRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me/request/accept'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  createFriendMeRequestCancel(data: UserCancelFriendRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me/request/cancel'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  createFriendMeRequestReject(data: UserRejectFriendRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me/request/reject'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  getFriendMeStatu_ByFriendId(friendId: string): Promise<IResponseWithSync<UserGetFriendshipStatusResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me/status/{friendId}'
      .replace('{namespace}', this.namespace)
      .replace('{friendId}', friendId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserGetFriendshipStatusResponse, 'UserGetFriendshipStatusResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:FRIENDS [CREATE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;friends request in a namespace.
   */
  createAddBulkFriend_ByUserId(userId: string, data: BulkFriendsRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/users/{userId}/add/bulk'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:FRIENDS [DELETE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;friends request in a namespace.
   */
  createDeleteBulkFriend_ByUserId(userId: string, data: BulkFriendsRequest): Promise<IResponse<BulkFriendsResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/users/{userId}/delete/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, BulkFriendsResponse, 'BulkFriendsResponse')
  }
}
