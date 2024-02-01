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
import { GetGroupMemberListResponseV1 } from '../../generated-definitions/GetGroupMemberListResponseV1.js'
import { GetUserGroupInformationResponseV1 } from '../../generated-definitions/GetUserGroupInformationResponseV1.js'

export class GroupMemberAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to get user joined group information.&lt;/p&gt; &lt;p&gt;Get user group joined information. If user does not belong to any group, it will return warning to give information about it&lt;/p&gt; &lt;p&gt;Group Member Status:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;JOINED: status of user already joined to a group&lt;/li&gt; &lt;/ul&gt;
   */
  getGroups_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<GetGroupMemberListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v2/admin/namespaces/{namespace}/users/{userId}/groups'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetGroupMemberListResponseV1, 'GetGroupMemberListResponseV1')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Required permission ADMIN:NAMESPACE:{namespace}:GROUP:MEMBER [READ] &lt;/p&gt; &lt;p&gt;This endpoint is used to get list of group members.&lt;/p&gt; &lt;p&gt;Action Code: 73410&lt;/p&gt;
   */
  getMembers_ByGroupId(
    groupId: string,
    queryParams?: { limit?: number; offset?: number; order?: string | null }
  ): Promise<IResponseWithSync<GetGroupMemberListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/groups/{groupId}/members'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetGroupMemberListResponseV1, 'GetGroupMemberListResponseV1')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Required Permission: &#34;ADMIN:NAMESPACE:{namespace}:GROUP:MEMBER [READ]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to get user group status information.&lt;/p&gt;
   */
  getStatus_ByUserId_ByGroupId(userId: string, groupId: string): Promise<IResponseWithSync<GetUserGroupInformationResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/admin/namespaces/{namespace}/users/{userId}/groups/{groupId}/status'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetUserGroupInformationResponseV1, 'GetUserGroupInformationResponseV1')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
