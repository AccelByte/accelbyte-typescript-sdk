/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { GetMemberRequestsListResponseV1 } from '../../generated-definitions/GetMemberRequestsListResponseV1.js'

export class MemberRequest$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Required valid user authentication This endpoint is used to Get My Join Request To The Groups Get My Join Request To The Groups for the user calling this endpoint. It will check any join request group for this user Action Code: 73502
   */
  getUsersMeJoinRequest_v2(queryParams?: { limit?: number; offset?: number }): Promise<Response<GetMemberRequestsListResponseV1>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/users/me/join/request'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetMemberRequestsListResponseV1,
      'GetMemberRequestsListResponseV1'
    )
  }
  /**
   * Required valid user authentication This endpoint is used to Get Group Invitation Request List Get Group Invitation Request List for the user calling this endpoint. It will check any group invitation for this user Action Code: 73502
   */
  getUsersMeInviteRequest(queryParams?: { limit?: number; offset?: number }): Promise<Response<GetMemberRequestsListResponseV1>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/users/me/invite/request'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetMemberRequestsListResponseV1,
      'GetMemberRequestsListResponseV1'
    )
  }
  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [READ]&#34; This endpoint is used to Get Group Join Request List Get Group Join Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint Action Code: 73501
   */
  getJoinRequest_ByGroupId(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<Response<GetMemberRequestsListResponseV1>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}/join/request'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetMemberRequestsListResponseV1,
      'GetMemberRequestsListResponseV1'
    )
  }
  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [READ]&#34; This endpoint is used to Get Group Join Request List Get Group Join Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint Action Code: 73501
   */
  getJoinRequest_ByGroupId_v2(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<Response<GetMemberRequestsListResponseV1>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}/join/request'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetMemberRequestsListResponseV1,
      'GetMemberRequestsListResponseV1'
    )
  }
  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [READ]&#34; This endpoint is used to Get Group Invite Request List Get Group Invite Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint Action Code: 73501
   */
  getInviteRequest_ByGroupId_v2(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<Response<GetMemberRequestsListResponseV1>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}/invite/request'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetMemberRequestsListResponseV1,
      'GetMemberRequestsListResponseV1'
    )
  }
}
