/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { GetGroupMemberListResponseV1 } from '../../generated-definitions/GetGroupMemberListResponseV1.js'
import { GetUserGroupInformationResponseV1 } from '../../generated-definitions/GetUserGroupInformationResponseV1.js'

export class GroupMemberAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Required valid user authentication This endpoint is used to get user joined group information. Get user group joined information. If user does not belong to any group, it will return warning to give information about it Group Member Status: * JOINED: status of user already joined to a group
   */
  getGroups_ByUserId_v2(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<Response<GetGroupMemberListResponseV1>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/group/v2/admin/namespaces/{namespace}/users/{userId}/groups'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetGroupMemberListResponseV1,
      'GetGroupMemberListResponseV1'
    )
  }
  /**
   * This endpoint is used to get list of group members. Action Code: 73410
   */
  getMembers_ByGroupId(
    groupId: string,
    queryParams?: { limit?: number; offset?: number; order?: string | null }
  ): Promise<Response<GetGroupMemberListResponseV1>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/groups/{groupId}/members'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetGroupMemberListResponseV1,
      'GetGroupMemberListResponseV1'
    )
  }
  /**
   * This endpoint is used to get user group status information.
   */
  getStatus_ByUserId_ByGroupId_v2(userId: string, groupId: string): Promise<Response<GetUserGroupInformationResponseV1>> {
    const params = {} as AxiosRequestConfig
    const url = '/group/v2/admin/namespaces/{namespace}/users/{userId}/groups/{groupId}/status'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetUserGroupInformationResponseV1,
      'GetUserGroupInformationResponseV1'
    )
  }
}
