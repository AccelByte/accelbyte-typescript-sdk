/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { GetMemberRequestsListResponseV1 } from '../definitions/GetMemberRequestsListResponseV1'

export class MemberRequest$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * <p>Required valid user authentication </p> <p>This endpoint is used to Get My Join Request To The Groups</p> <p>Get My Join Request To The Groups for the user calling this endpoint. It will check any join request group for this user</p> <p>Action Code: 73502</p>
   */
  getUsersMeJoinRequest(queryParams?: { limit?: number; offset?: number }): Promise<IResponseWithSync<GetMemberRequestsListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/users/me/join/request'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetMemberRequestsListResponseV1, 'GetMemberRequestsListResponseV1')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>Required valid user authentication </p> <p>This endpoint is used to Get Group Invitation Request List</p> <p>Get Group Invitation Request List for the user calling this endpoint. It will check any group invitation for this user</p> <p>Action Code: 73502</p>
   */
  getUsersMeInviteRequest(queryParams?: { limit?: number; offset?: number }): Promise<IResponseWithSync<GetMemberRequestsListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/users/me/invite/request'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetMemberRequestsListResponseV1, 'GetMemberRequestsListResponseV1')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:JOIN [READ]"</p> <p>This endpoint is used to Get Group Join Request List</p> <p>Get Group Join Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint</p> <p>Action Code: 73501</p>
   */
  getJoinRequest_ByGroupId(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<GetMemberRequestsListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}/join/request'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetMemberRequestsListResponseV1, 'GetMemberRequestsListResponseV1')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:JOIN [READ]"</p> <p>This endpoint is used to Get Group Join Request List</p> <p>Get Group Join Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint</p> <p>Action Code: 73501</p>
   */
  getJoinRequest_ByGroupId_ByNS(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<GetMemberRequestsListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}/join/request'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetMemberRequestsListResponseV1, 'GetMemberRequestsListResponseV1')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:JOIN [READ]"</p> <p>This endpoint is used to Get Group Invite Request List</p> <p>Get Group Invite Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint</p> <p>Action Code: 73501</p>
   */
  getInviteRequest_ByGroupId(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<GetMemberRequestsListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}/invite/request'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetMemberRequestsListResponseV1, 'GetMemberRequestsListResponseV1')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
