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
import { GetGroupListRequestV2 } from '../../generated-definitions/GetGroupListRequestV2.js'
import { GetGroupsListResponseV1 } from '../../generated-definitions/GetGroupsListResponseV1.js'
import { GetGroupsResponseV1 } from '../../generated-definitions/GetGroupsResponseV1.js'
import { GroupResponseV1 } from '../../generated-definitions/GroupResponseV1.js'

export class GroupAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * Get list of groups. This endpoint will show any types of group Action Code: 73301
   */
  getGroups(queryParams?: {
    configurationCode?: string | null
    groupName?: string | null
    groupRegion?: string | null
    limit?: number
    offset?: number
  }): Promise<IResponse<GetGroupsListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/groups'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GetGroupsListResponseV1, 'GetGroupsListResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required valid user authentication Get list of groups by group Ids. Action Code: 73303
   */
  createGroupBulk(data: GetGroupListRequestV2): Promise<IResponse<GetGroupsResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/admin/namespaces/{namespace}/groups/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GetGroupsResponseV1, 'GetGroupsResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Delete existing group. It will check whether the groupID is exist before doing the process to delete the group. Action Code: 73302
   */
  deleteGroup_ByGroupId(groupId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/groups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get single group information. This endpoint will show the group information by the groupId Action Code: 73306
   */
  getGroup_ByGroupId(groupId: string): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/admin/namespaces/{namespace}/groups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
