/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { CreateMemberRoleRequestV1 } from '../../generated-definitions/CreateMemberRoleRequestV1.js'
import { GetMemberRolesListResponseV1 } from '../../generated-definitions/GetMemberRolesListResponseV1.js'
import { MemberRoleResponseV1 } from '../../generated-definitions/MemberRoleResponseV1.js'
import { UpdateMemberRolePermissionsRequestV1 } from '../../generated-definitions/UpdateMemberRolePermissionsRequestV1.js'
import { UpdateMemberRoleRequestV1 } from '../../generated-definitions/UpdateMemberRoleRequestV1.js'

export class GroupRolesAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * &lt;p&gt;Required permission ADMIN:NAMESPACE:{namespace}:GROUP:ROLE [READ]&lt;/p&gt; &lt;p&gt;This endpoint is used to get list of member roles&lt;/p&gt; &lt;p&gt;Action Code: 73201&lt;/p&gt;
   */
  getRoles(queryParams?: { limit?: number; offset?: number }): Promise<IResponseWithSync<GetMemberRolesListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/roles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetMemberRolesListResponseV1, 'GetMemberRolesListResponseV1')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Required permission ADMIN:NAMESPACE:{namespace}:GROUP:ROLE [CREATE]&lt;/p&gt; &lt;p&gt;This endpoint is used to create new member role&lt;/p&gt; &lt;p&gt;Action Code: 73202&lt;/p&gt; &lt;br&gt; &lt;p&gt;memberRolePermissions example value :&lt;/p&gt; &lt;p&gt;&#34;action&#34;: 1&lt;/p&gt; &lt;p&gt;&#34;resourceName&#34;: &#34;GROUP:ROLE&#34;&lt;/p&gt; &lt;p&gt;The changes will give user with that role have a permission to create a role for new group member&lt;p/&gt;
   */
  createRole(data: CreateMemberRoleRequestV1): Promise<IResponse<MemberRoleResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/roles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, MemberRoleResponseV1, 'MemberRoleResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;p&gt;Required permission ADMIN:NAMESPACE:{namespace}:GROUP:ROLE [DELETE]&lt;/p&gt; &lt;p&gt;This endpoint is used to delete member role. Any member role can&#39;t be deleted if the specific role is applied to the configuration (admin and member role)&lt;/p&gt; &lt;p&gt;Action Code: 73207&lt;/p&gt;
   */
  deleteRole_ByMemberRoleId(memberRoleId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/roles/{memberRoleId}'
      .replace('{namespace}', this.namespace)
      .replace('{memberRoleId}', memberRoleId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;p&gt;Required permission ADMIN:NAMESPACE:{namespace}:GROUP:ROLE [READ]&lt;/p&gt; &lt;p&gt;This endpoint is used to get member role based on the role ID&lt;/p&gt; &lt;p&gt;Action Code: 73203&lt;/p&gt;
   */
  getRole_ByMemberRoleId(memberRoleId: string): Promise<IResponseWithSync<MemberRoleResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/roles/{memberRoleId}'
      .replace('{namespace}', this.namespace)
      .replace('{memberRoleId}', memberRoleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, MemberRoleResponseV1, 'MemberRoleResponseV1')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Required permission ADMIN:NAMESPACE:{namespace}:GROUP:ROLE [UPDATE]&lt;/p&gt; &lt;p&gt;This endpoint is used to update member role&lt;/p&gt; &lt;p&gt;Action Code: 73204&lt;/p&gt;
   */
  patchRole_ByMemberRoleId(memberRoleId: string, data: UpdateMemberRoleRequestV1): Promise<IResponse<MemberRoleResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/roles/{memberRoleId}'
      .replace('{namespace}', this.namespace)
      .replace('{memberRoleId}', memberRoleId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, MemberRoleResponseV1, 'MemberRoleResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;p&gt;Required permission ADMIN:NAMESPACE:{namespace}:GROUP:ROLE [UPDATE]&lt;/p&gt; &lt;p&gt;This endpoint is used to update member role permission. It will replace the existing permission based on the request from this endpoint&lt;/p&gt; &lt;p&gt;Action Code: 73205&lt;/p&gt; &lt;br&gt; &lt;p&gt;memberRolePermissions example value :&lt;/p&gt; &lt;p&gt;&#34;action&#34;: 2&lt;/p&gt; &lt;p&gt;&#34;resourceName&#34;: &#34;GROUP:ROLE&#34;&lt;/p&gt; &lt;p&gt;The changes will update user role to be able to read a role of other member &lt;p/&gt;
   */
  updatePermission_ByMemberRoleId(
    memberRoleId: string,
    data: UpdateMemberRolePermissionsRequestV1
  ): Promise<IResponse<MemberRoleResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/roles/{memberRoleId}/permissions'
      .replace('{namespace}', this.namespace)
      .replace('{memberRoleId}', memberRoleId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, MemberRoleResponseV1, 'MemberRoleResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
