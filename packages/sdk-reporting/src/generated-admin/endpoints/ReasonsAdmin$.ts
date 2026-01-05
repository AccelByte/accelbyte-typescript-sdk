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
import { z } from 'zod'
import { AdminAllReasonsResponse } from '../../generated-definitions/AdminAllReasonsResponse.js'
import { AdminReasonListResponse } from '../../generated-definitions/AdminReasonListResponse.js'
import { AdminReasonResponse } from '../../generated-definitions/AdminReasonResponse.js'
import { CreateReasonGroupRequest } from '../../generated-definitions/CreateReasonGroupRequest.js'
import { CreateReasonRequest } from '../../generated-definitions/CreateReasonRequest.js'
import { ReasonGroupListResponse } from '../../generated-definitions/ReasonGroupListResponse.js'
import { ReasonGroupResponse } from '../../generated-definitions/ReasonGroupResponse.js'
import { UnusedReasonListResponse } from '../../generated-definitions/UnusedReasonListResponse.js'
import { UpdateReasonGroupRequest } from '../../generated-definitions/UpdateReasonGroupRequest.js'

export class ReasonsAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This endpoint get reasons with pagination
   */
  getReasons(queryParams?: {
    group?: string | null
    limit?: number
    offset?: number
    title?: string | null
  }): Promise<Response<AdminReasonListResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasons'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AdminReasonListResponse,
      'AdminReasonListResponse'
    )
  }
  /**
   * This endpoint create a reason for a namespace.
   */
  createReason(data: CreateReasonRequest): Promise<Response<AdminReasonResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasons'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AdminReasonResponse, 'AdminReasonResponse')
  }
  /**
   * This endpoint get all reasons without pagination.
   */
  getReasonsAll(): Promise<Response<AdminAllReasonsResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasons/all'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AdminAllReasonsResponse,
      'AdminAllReasonsResponse'
    )
  }
  /**
   * Return list of reason groups ID and title under given namespace. To fetch the reasons inside a group, use get reason group endpoint.
   */
  getReasonGroups(queryParams?: { limit?: number; offset?: number }): Promise<Response<ReasonGroupListResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasonGroups'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ReasonGroupListResponse,
      'ReasonGroupListResponse'
    )
  }
  /**
   * Create a reason group for easier query. You can query reasons by specifying the group title in the list reasons query. Reason group title is case insensitive, meaning you can&#39;t have **reason** if you already create a reason titled **Reason**
   */
  createReasonGroup(data: CreateReasonGroupRequest): Promise<Response<ReasonGroupResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasonGroups'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ReasonGroupResponse, 'ReasonGroupResponse')
  }
  /**
   * This endpoint get reasons not used by moderation rules.
   */
  getReasonsUnused(queryParams: {
    category: string | null
    extensionCategory?: string | null
  }): Promise<Response<UnusedReasonListResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasons/unused'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UnusedReasonListResponse,
      'UnusedReasonListResponse'
    )
  }
  /**
   * This endpoint delete a reason for a namespace with ID.
   */
  deleteReason_ByReasonId(reasonId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasons/{reasonId}'
      .replace('{namespace}', this.namespace)
      .replace('{reasonId}', reasonId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint get a single reason.
   */
  getReason_ByReasonId(reasonId: string): Promise<Response<AdminReasonResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasons/{reasonId}'
      .replace('{namespace}', this.namespace)
      .replace('{reasonId}', reasonId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AdminReasonResponse, 'AdminReasonResponse')
  }
  /**
   * This endpoint update a reason for a namespace with ID.
   */
  patchReason_ByReasonId(reasonId: string, data: CreateReasonRequest): Promise<Response<AdminReasonResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasons/{reasonId}'
      .replace('{namespace}', this.namespace)
      .replace('{reasonId}', reasonId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AdminReasonResponse, 'AdminReasonResponse')
  }
  /**
   * This endpoint delete a reason group for a namespace with ID.
   */
  deleteReasonGroup_ByGroupId(groupId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasonGroups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  getReasonGroup_ByGroupId(groupId: string): Promise<Response<ReasonGroupResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasonGroups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ReasonGroupResponse, 'ReasonGroupResponse')
  }
  /**
   * Reason group title is case insensitive, meaning you can&#39;t have **reason** if you already create a reason titled **Reason** If no reasonIds passed when updating, the current reasons under the reason group will be kept (reasons will not be removed from the group).
   */
  patchReasonGroup_ByGroupId(groupId: string, data: UpdateReasonGroupRequest): Promise<Response<ReasonGroupResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasonGroups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ReasonGroupResponse, 'ReasonGroupResponse')
  }
}
