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
import { AssignRoleToMemberRequestV1 } from '../definitions/AssignRoleToMemberRequestV1.js'
import { GetMemberRolesListResponseV1 } from '../definitions/GetMemberRolesListResponseV1.js'
import { GetUserGroupInformationResponseV1 } from '../definitions/GetUserGroupInformationResponseV1.js'
import { RemoveRoleFromMemberRequestV1 } from '../definitions/RemoveRoleFromMemberRequestV1.js'

export class GroupRoles$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * &lt;p&gt;Required Member Role Permission: &#34;GROUP:ROLE [READ]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to get list of member roles&lt;/p&gt; &lt;p&gt;Action Code: 73201&lt;/p&gt;
   */
  getRoles(queryParams?: { limit?: number; offset?: number }): Promise<IResponseWithSync<GetMemberRolesListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/roles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetMemberRolesListResponseV1, 'GetMemberRolesListResponseV1')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;This endpoint is used to get list of member roles&lt;/p&gt; &lt;p&gt;Action Code: 73201&lt;/p&gt;
   */
  getRoles_ByNS(queryParams?: { limit?: number; offset?: number }): Promise<IResponseWithSync<GetMemberRolesListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/roles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetMemberRolesListResponseV1, 'GetMemberRolesListResponseV1')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required Member Role Permission: &#34;GROUP:ROLE [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to remove role from group member&lt;/p&gt; &lt;p&gt;Action Code: 73204&lt;/p&gt;
   */
  deleteMember_ByMemberRoleId(memberRoleId: string, data: RemoveRoleFromMemberRequestV1): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/roles/{memberRoleId}/members'
      .replace('{namespace}', this.namespace)
      .replace('{memberRoleId}', memberRoleId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required Member Role Permission: &#34;GROUP:ROLE [UPDATE]&lt;/p&gt; &lt;p&gt;This endpoint is used to assign role to group member&lt;/p&gt; &lt;p&gt;Action Code: 73204&lt;/p&gt;
   */
  createMember_ByMemberRoleId(
    memberRoleId: string,
    data: AssignRoleToMemberRequestV1
  ): Promise<IResponse<GetUserGroupInformationResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/roles/{memberRoleId}/members'
      .replace('{namespace}', this.namespace)
      .replace('{memberRoleId}', memberRoleId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, GetUserGroupInformationResponseV1, 'GetUserGroupInformationResponseV1')
  }

  /**
   * Required Member Role Permission: &#34;GROUP:ROLE [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to remove role from group member&lt;/p&gt; &lt;p&gt;Action Code: 73204&lt;/p&gt;
   */
  deleteMember_ByMemberRoleId_ByGroupId(
    memberRoleId: string,
    groupId: string,
    data: RemoveRoleFromMemberRequestV1
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/roles/{memberRoleId}/groups/{groupId}/members'
      .replace('{namespace}', this.namespace)
      .replace('{memberRoleId}', memberRoleId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required Member Role Permission: &#34;GROUP:ROLE [UPDATE]&lt;/p&gt; &lt;p&gt;This endpoint is used to assign role to group member&lt;/p&gt; &lt;p&gt;Action Code: 73204&lt;/p&gt;
   */
  createMember_ByMemberRoleId_ByGroupId(
    memberRoleId: string,
    groupId: string,
    data: AssignRoleToMemberRequestV1
  ): Promise<IResponse<GetUserGroupInformationResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/roles/{memberRoleId}/groups/{groupId}/members'
      .replace('{namespace}', this.namespace)
      .replace('{memberRoleId}', memberRoleId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, GetUserGroupInformationResponseV1, 'GetUserGroupInformationResponseV1')
  }
}
