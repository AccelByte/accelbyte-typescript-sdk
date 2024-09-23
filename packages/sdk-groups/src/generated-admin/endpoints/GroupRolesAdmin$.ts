/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { CreateMemberRoleRequestV1 } from '../../generated-definitions/CreateMemberRoleRequestV1.js'
import { GetMemberRolesListResponseV1 } from '../../generated-definitions/GetMemberRolesListResponseV1.js'
import { MemberRoleResponseV1 } from '../../generated-definitions/MemberRoleResponseV1.js'
import { UpdateMemberRolePermissionsRequestV1 } from '../../generated-definitions/UpdateMemberRolePermissionsRequestV1.js'
import { UpdateMemberRoleRequestV1 } from '../../generated-definitions/UpdateMemberRoleRequestV1.js'

export class GroupRolesAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This endpoint is used to get list of member roles Action Code: 73201
   */
  getRoles(queryParams?: { limit?: number; offset?: number }): Promise<Response<GetMemberRolesListResponseV1>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/roles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetMemberRolesListResponseV1,
      'GetMemberRolesListResponseV1'
    )
  }
  /**
   * This endpoint is used to create new member role Action Code: 73202 memberRolePermissions example value : &#34;action&#34;: 1 &#34;resourceName&#34;: &#34;GROUP:ROLE&#34; The changes will give user with that role have a permission to create a role for new group member
   */
  createRole(data: CreateMemberRoleRequestV1): Promise<Response<MemberRoleResponseV1>> {
    const params = {} as AxiosRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/roles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MemberRoleResponseV1, 'MemberRoleResponseV1')
  }
  /**
   * This endpoint is used to delete member role. Any member role can&#39;t be deleted if the specific role is applied to the configuration (admin and member role) Action Code: 73207
   */
  deleteRole_ByMemberRoleId(memberRoleId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/roles/{memberRoleId}'
      .replace('{namespace}', this.namespace)
      .replace('{memberRoleId}', memberRoleId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint is used to get member role based on the role ID Action Code: 73203
   */
  getRole_ByMemberRoleId(memberRoleId: string): Promise<Response<MemberRoleResponseV1>> {
    const params = {} as AxiosRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/roles/{memberRoleId}'
      .replace('{namespace}', this.namespace)
      .replace('{memberRoleId}', memberRoleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MemberRoleResponseV1, 'MemberRoleResponseV1')
  }
  /**
   * This endpoint is used to update member role Action Code: 73204
   */
  patchRole_ByMemberRoleId(memberRoleId: string, data: UpdateMemberRoleRequestV1): Promise<Response<MemberRoleResponseV1>> {
    const params = {} as AxiosRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/roles/{memberRoleId}'
      .replace('{namespace}', this.namespace)
      .replace('{memberRoleId}', memberRoleId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MemberRoleResponseV1, 'MemberRoleResponseV1')
  }
  /**
   * This endpoint is used to update member role permission. It will replace the existing permission based on the request from this endpoint Action Code: 73205 memberRolePermissions example value : &#34;action&#34;: 2 &#34;resourceName&#34;: &#34;GROUP:ROLE&#34; The changes will update user role to be able to read a role of other member
   */
  updatePermission_ByMemberRoleId(
    memberRoleId: string,
    data: UpdateMemberRolePermissionsRequestV1
  ): Promise<Response<MemberRoleResponseV1>> {
    const params = {} as AxiosRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/roles/{memberRoleId}/permissions'
      .replace('{namespace}', this.namespace)
      .replace('{memberRoleId}', memberRoleId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MemberRoleResponseV1, 'MemberRoleResponseV1')
  }
}
