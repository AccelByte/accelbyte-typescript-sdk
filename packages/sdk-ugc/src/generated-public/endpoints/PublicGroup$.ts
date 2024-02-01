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
import { CreateGroupRequest } from '../../generated-definitions/CreateGroupRequest.js'
import { CreateGroupResponse } from '../../generated-definitions/CreateGroupResponse.js'
import { PaginatedContentDownloadResponse } from '../../generated-definitions/PaginatedContentDownloadResponse.js'
import { PaginatedContentDownloadResponseV2 } from '../../generated-definitions/PaginatedContentDownloadResponseV2.js'
import { PaginatedGroupResponse } from '../../generated-definitions/PaginatedGroupResponse.js'

export class PublicGroup$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENTGROUP [READ]&lt;/b&gt;.
   */
  getGroups_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<PaginatedGroupResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/groups'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, PaginatedGroupResponse, 'PaginatedGroupResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission NAMESPACE:{namespace}:USER:{userId}:CONTENTGROUP [CREATE]
   */
  createGroup_ByUserId(userId: string, data: CreateGroupRequest): Promise<IResponse<CreateGroupResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/groups'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateGroupResponse, 'CreateGroupResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission NAMESPACE:{namespace}:USER:{userId}:CONTENTGROUP [DELETE]
   */
  deleteGroup_ByUserId_ByGroupId(userId: string, groupId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/groups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENTGROUP [READ]&lt;/b&gt;.
   */
  getGroup_ByUserId_ByGroupId(userId: string, groupId: string): Promise<IResponseWithSync<CreateGroupResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/groups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, CreateGroupResponse, 'CreateGroupResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission NAMESPACE:{namespace}:USER:{userId}:CONTENTGROUP [UPDATE] replace group name and contents with new ones
   */
  updateGroup_ByUserId_ByGroupId(userId: string, groupId: string, data: CreateGroupRequest): Promise<IResponse<CreateGroupResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/groups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateGroupResponse, 'CreateGroupResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;.
   */
  getContents_ByUserId_ByGroupId(
    userId: string,
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<PaginatedContentDownloadResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/contents'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, PaginatedContentDownloadResponse, 'PaginatedContentDownloadResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;.
   */
  getContents_ByUserId_ByGroupId_ByNS(
    userId: string,
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<PaginatedContentDownloadResponseV2>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/contents'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, PaginatedContentDownloadResponseV2, 'PaginatedContentDownloadResponseV2')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
