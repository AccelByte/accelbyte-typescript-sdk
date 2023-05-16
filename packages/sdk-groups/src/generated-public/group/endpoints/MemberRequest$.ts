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
import { GetMemberRequestsListResponseV1 } from '../definitions/GetMemberRequestsListResponseV1.js'

export class MemberRequest$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to Get My Join Request To The Groups&lt;/p&gt; &lt;p&gt;Get My Join Request To The Groups for the user calling this endpoint. It will check any join request group for this user&lt;/p&gt; &lt;p&gt;Action Code: 73502&lt;/p&gt;
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
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to Get Group Invitation Request List&lt;/p&gt; &lt;p&gt;Get Group Invitation Request List for the user calling this endpoint. It will check any group invitation for this user&lt;/p&gt; &lt;p&gt;Action Code: 73502&lt;/p&gt;
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
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP:JOIN [READ]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to Get Group Join Request List&lt;/p&gt; &lt;p&gt;Get Group Join Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint&lt;/p&gt; &lt;p&gt;Action Code: 73501&lt;/p&gt;
   */
  getJoinRequest_ByGroupId(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<GetMemberRequestsListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}/join/request'
      .replace('{groupId}', groupId)
      .replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetMemberRequestsListResponseV1, 'GetMemberRequestsListResponseV1')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP:JOIN [READ]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to Get Group Join Request List&lt;/p&gt; &lt;p&gt;Get Group Join Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint&lt;/p&gt; &lt;p&gt;Action Code: 73501&lt;/p&gt;
   */
  getJoinRequest_ByGroupId_ByNS(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<GetMemberRequestsListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}/join/request'
      .replace('{groupId}', groupId)
      .replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetMemberRequestsListResponseV1, 'GetMemberRequestsListResponseV1')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP:JOIN [READ]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to Get Group Invite Request List&lt;/p&gt; &lt;p&gt;Get Group Invite Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint&lt;/p&gt; &lt;p&gt;Action Code: 73501&lt;/p&gt;
   */
  getInviteRequest_ByGroupId(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<GetMemberRequestsListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}/invite/request'
      .replace('{groupId}', groupId)
      .replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetMemberRequestsListResponseV1, 'GetMemberRequestsListResponseV1')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
