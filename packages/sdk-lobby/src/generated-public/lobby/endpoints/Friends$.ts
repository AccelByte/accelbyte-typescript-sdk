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
import { BulkAddFriendsRequest } from '../definitions/BulkAddFriendsRequest'
import { GetUserFriendsResponseArray } from '../definitions/GetUserFriendsResponseArray'
import { GetUserIncomingFriendsResponseArray } from '../definitions/GetUserIncomingFriendsResponseArray'
import { GetUserOutgoingFriendsResponseArray } from '../definitions/GetUserOutgoingFriendsResponseArray'
import { LoadIncomingFriendsWithTimeResponseArray } from '../definitions/LoadIncomingFriendsWithTimeResponseArray'
import { LoadOutgoingFriendsWithTimeResponseArray } from '../definitions/LoadOutgoingFriendsWithTimeResponseArray'
import { UserAcceptFriendRequest } from '../definitions/UserAcceptFriendRequest'
import { UserCancelFriendRequest } from '../definitions/UserCancelFriendRequest'
import { UserGetFriendshipStatusResponse } from '../definitions/UserGetFriendshipStatusResponse'
import { UserRejectFriendRequest } from '../definitions/UserRejectFriendRequest'
import { UserRequestFriendRequest } from '../definitions/UserRequestFriendRequest'
import { UserUnfriendRequest } from '../definitions/UserUnfriendRequest'

export class Friends$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  getFriendsMe(queryParams?: { limit?: string | null; offset?: string | null }): Promise<IResponseWithSync<GetUserFriendsResponseArray>> {
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

  getFriendsMeIncoming(): Promise<IResponseWithSync<GetUserIncomingFriendsResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/me/incoming'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetUserIncomingFriendsResponseArray, 'GetUserIncomingFriendsResponseArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  getFriendsMeOutgoing(): Promise<IResponseWithSync<GetUserOutgoingFriendsResponseArray>> {
    const params = {} as SDKRequestConfig
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

  getFriendsMeIncomingTime(): Promise<IResponseWithSync<LoadIncomingFriendsWithTimeResponseArray>> {
    const params = {} as SDKRequestConfig
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

  getFriendsMeOutgoingTime(): Promise<IResponseWithSync<LoadOutgoingFriendsWithTimeResponseArray>> {
    const params = {} as SDKRequestConfig
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
   * Required permission : <code>NAMESPACE:{namespace}:USER:{userId}:FRIENDS [CREATE]</code> with scope <code>social</code> <br>friends request in a namespace.
   */
  createAddBulkFriend_ByUserId(userId: string, data: BulkAddFriendsRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/friends/namespaces/{namespace}/users/{userId}/add/bulk'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
