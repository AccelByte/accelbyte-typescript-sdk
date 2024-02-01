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
import { AdminAllReasonsResponse } from '../../generated-definitions/AdminAllReasonsResponse.js'
import { AdminReasonListResponse } from '../../generated-definitions/AdminReasonListResponse.js'
import { AdminReasonResponse } from '../../generated-definitions/AdminReasonResponse.js'
import { CreateReasonGroupRequest } from '../../generated-definitions/CreateReasonGroupRequest.js'
import { CreateReasonRequest } from '../../generated-definitions/CreateReasonRequest.js'
import { ReasonGroupListResponse } from '../../generated-definitions/ReasonGroupListResponse.js'
import { ReasonGroupResponse } from '../../generated-definitions/ReasonGroupResponse.js'
import { UnusedReasonListResponse } from '../../generated-definitions/UnusedReasonListResponse.js'
import { UpdateReasonGroupRequest } from '../../generated-definitions/UpdateReasonGroupRequest.js'

export class AdminReasonsAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * This endpoint get reasons with pagination
   */
  getReasons(queryParams?: {
    group?: string | null
    limit?: number
    offset?: number
    title?: string | null
  }): Promise<IResponseWithSync<AdminReasonListResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasons'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, AdminReasonListResponse, 'AdminReasonListResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This endpoint create a reason for a namespace.
   */
  createReason(data: CreateReasonRequest): Promise<IResponse<AdminReasonResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasons'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, AdminReasonResponse, 'AdminReasonResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint get all reasons without pagination.
   */
  getReasonsAll(): Promise<IResponseWithSync<AdminAllReasonsResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasons/all'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, AdminAllReasonsResponse, 'AdminAllReasonsResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Return list of reason groups ID and title under given namespace. To fetch the reasons inside a group, use get reason group endpoint.
   */
  getReasonGroups(queryParams?: { limit?: number; offset?: number }): Promise<IResponseWithSync<ReasonGroupListResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasonGroups'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ReasonGroupListResponse, 'ReasonGroupListResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Create a reason group for easier query. You can query reasons by specifying the group title in the list reasons query. Reason group title is case insensitive, meaning you can&#39;t have **reason** if you already create a reason titled **Reason**
   */
  createReasonGroup(data: CreateReasonGroupRequest): Promise<IResponse<ReasonGroupResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasonGroups'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ReasonGroupResponse, 'ReasonGroupResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint get reasons not used by moderation rules.
   */
  getReasonsUnused(queryParams: {
    category: string | null
    extensionCategory?: string | null
  }): Promise<IResponseWithSync<UnusedReasonListResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasons/unused'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, UnusedReasonListResponse, 'UnusedReasonListResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This endpoint delete a reason for a namespace with ID.
   */
  deleteReason_ByReasonId(reasonId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasons/{reasonId}'
      .replace('{namespace}', this.namespace)
      .replace('{reasonId}', reasonId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint get a single reason.
   */
  getReason_ByReasonId(reasonId: string): Promise<IResponseWithSync<AdminReasonResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasons/{reasonId}'
      .replace('{namespace}', this.namespace)
      .replace('{reasonId}', reasonId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, AdminReasonResponse, 'AdminReasonResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This endpoint update a reason for a namespace with ID.
   */
  patchReason_ByReasonId(reasonId: string, data: CreateReasonRequest): Promise<IResponse<AdminReasonResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasons/{reasonId}'
      .replace('{namespace}', this.namespace)
      .replace('{reasonId}', reasonId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, AdminReasonResponse, 'AdminReasonResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoint delete a reason group for a namespace with ID.
   */
  deleteReasonGroup_ByGroupId(groupId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasonGroups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  getReasonGroup_ByGroupId(groupId: string): Promise<IResponseWithSync<ReasonGroupResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasonGroups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ReasonGroupResponse, 'ReasonGroupResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Reason group title is case insensitive, meaning you can&#39;t have **reason** if you already create a reason titled **Reason** If no reasonIds passed when updating, the current reasons under the reason group will be kept (reasons will not be removed from the group).
   */
  patchReasonGroup_ByGroupId(groupId: string, data: UpdateReasonGroupRequest): Promise<IResponse<ReasonGroupResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/reasonGroups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ReasonGroupResponse, 'ReasonGroupResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
