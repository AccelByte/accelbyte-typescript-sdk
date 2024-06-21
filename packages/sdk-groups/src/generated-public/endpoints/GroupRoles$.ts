/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { AssignRoleToMemberRequestV1 } from '../../generated-definitions/AssignRoleToMemberRequestV1.js'
import { GetMemberRolesListResponseV1 } from '../../generated-definitions/GetMemberRolesListResponseV1.js'
import { GetUserGroupInformationResponseV1 } from '../../generated-definitions/GetUserGroupInformationResponseV1.js'
import { RemoveRoleFromMemberRequestV1 } from '../../generated-definitions/RemoveRoleFromMemberRequestV1.js'

export class GroupRoles$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * Required Member Role Permission: &#34;GROUP:ROLE \[READ\]&#34; This endpoint is used to get list of member roles Action Code: 73201
   */
  getRoles(queryParams?: { limit?: number; offset?: number }): Promise<IResponse<GetMemberRolesListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/roles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetMemberRolesListResponseV1,
      'GetMemberRolesListResponseV1'
    )
  }

  /**
   * This endpoint is used to get list of member roles Action Code: 73201
   */
  getRoles_ByNS(queryParams?: { limit?: number; offset?: number }): Promise<IResponse<GetMemberRolesListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/roles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetMemberRolesListResponseV1,
      'GetMemberRolesListResponseV1'
    )
  }

  /**
   * Required Member Role Permission: &#34;GROUP:ROLE [UPDATE]&#34; This endpoint is used to remove role from group member Action Code: 73204
   */
  deleteMember_ByMemberRoleId(memberRoleId: string, data: RemoveRoleFromMemberRequestV1): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/roles/{memberRoleId}/members'
      .replace('{namespace}', this.namespace)
      .replace('{memberRoleId}', memberRoleId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required Member Role Permission: &#34;GROUP:ROLE [UPDATE] This endpoint is used to assign role to group member Action Code: 73204
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

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetUserGroupInformationResponseV1,
      'GetUserGroupInformationResponseV1'
    )
  }

  /**
   * Required Member Role Permission: &#34;GROUP:ROLE \[UPDATE\]&#34; This endpoint is used to remove role from group member Action Code: 73204
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

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required Member Role Permission: &#34;GROUP:ROLE [UPDATE] This endpoint is used to assign role to group member Action Code: 73204
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

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetUserGroupInformationResponseV1,
      'GetUserGroupInformationResponseV1'
    )
  }
}
