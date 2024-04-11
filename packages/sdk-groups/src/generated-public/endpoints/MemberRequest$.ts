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
import { GetMemberRequestsListResponseV1 } from '../../generated-definitions/GetMemberRequestsListResponseV1.js'

export class MemberRequest$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * Required valid user authentication This endpoint is used to Get My Join Request To The Groups Get My Join Request To The Groups for the user calling this endpoint. It will check any join request group for this user Action Code: 73502
   */
  getUsersMeJoinRequest(queryParams?: { limit?: number; offset?: number }): Promise<IResponse<GetMemberRequestsListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/users/me/join/request'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GetMemberRequestsListResponseV1, 'GetMemberRequestsListResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required valid user authentication This endpoint is used to Get Group Invitation Request List Get Group Invitation Request List for the user calling this endpoint. It will check any group invitation for this user Action Code: 73502
   */
  getUsersMeInviteRequest(queryParams?: { limit?: number; offset?: number }): Promise<IResponse<GetMemberRequestsListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/users/me/invite/request'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GetMemberRequestsListResponseV1, 'GetMemberRequestsListResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [READ]&#34; This endpoint is used to Get Group Join Request List Get Group Join Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint Action Code: 73501
   */
  getJoinRequest_ByGroupId(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponse<GetMemberRequestsListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}/join/request'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GetMemberRequestsListResponseV1, 'GetMemberRequestsListResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [READ]&#34; This endpoint is used to Get Group Join Request List Get Group Join Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint Action Code: 73501
   */
  getJoinRequest_ByGroupId_ByNS(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponse<GetMemberRequestsListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}/join/request'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GetMemberRequestsListResponseV1, 'GetMemberRequestsListResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [READ]&#34; This endpoint is used to Get Group Invite Request List Get Group Invite Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint Action Code: 73501
   */
  getInviteRequest_ByGroupId(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponse<GetMemberRequestsListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}/invite/request'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GetMemberRequestsListResponseV1, 'GetMemberRequestsListResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
