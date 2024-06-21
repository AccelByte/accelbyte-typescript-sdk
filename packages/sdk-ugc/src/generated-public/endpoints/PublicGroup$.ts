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
import { CreateGroupRequest } from '../../generated-definitions/CreateGroupRequest.js'
import { CreateGroupResponse } from '../../generated-definitions/CreateGroupResponse.js'
import { PaginatedContentDownloadResponse } from '../../generated-definitions/PaginatedContentDownloadResponse.js'
import { PaginatedContentDownloadResponseV2 } from '../../generated-definitions/PaginatedContentDownloadResponseV2.js'
import { PaginatedGroupResponse } from '../../generated-definitions/PaginatedGroupResponse.js'

export class PublicGroup$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * Get user groups paginated
   */
  getGroups_ByUserId(userId: string, queryParams?: { limit?: number; offset?: number }): Promise<IResponse<PaginatedGroupResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/groups'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedGroupResponse,
      'PaginatedGroupResponse'
    )
  }

  /**
   * Create group
   */
  createGroup_ByUserId(userId: string, data: CreateGroupRequest): Promise<IResponse<CreateGroupResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/groups'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CreateGroupResponse, 'CreateGroupResponse')
  }

  /**
   * Delete user group by group ID
   */
  deleteGroup_ByUserId_ByGroupId(userId: string, groupId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/groups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get user groups by group ID
   */
  getGroup_ByUserId_ByGroupId(userId: string, groupId: string): Promise<IResponse<CreateGroupResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/groups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CreateGroupResponse, 'CreateGroupResponse')
  }

  /**
   * Replace group name and contents with new ones
   */
  updateGroup_ByUserId_ByGroupId(userId: string, groupId: string, data: CreateGroupRequest): Promise<IResponse<CreateGroupResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/groups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CreateGroupResponse, 'CreateGroupResponse')
  }

  /**
   * Get content that belong to a group
   */
  getContents_ByUserId_ByGroupId(
    userId: string,
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponse<PaginatedContentDownloadResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/contents'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedContentDownloadResponse,
      'PaginatedContentDownloadResponse'
    )
  }

  /**
   * Get content belong to a group
   */
  getContents_ByUserId_ByGroupId_ByNS(
    userId: string,
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponse<PaginatedContentDownloadResponseV2>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/contents'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedContentDownloadResponseV2,
      'PaginatedContentDownloadResponseV2'
    )
  }
}
