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
import { PaginatedListStagingContentResponse } from '../../generated-definitions/PaginatedListStagingContentResponse.js'
import { StagingContentResponse } from '../../generated-definitions/StagingContentResponse.js'
import { UpdateStagingContentRequest } from '../../generated-definitions/UpdateStagingContentRequest.js'

export class PublicStagingContent$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;.
   */
  getStagingContents_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; status?: string | null }
  ): Promise<IResponseWithSync<PaginatedListStagingContentResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/staging-contents'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, PaginatedListStagingContentResponse, 'PaginatedListStagingContentResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
   */
  deleteStagingContent_ByUserId_ByContentId(userId: string, contentId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/staging-contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;.
   */
  getStagingContent_ByUserId_ByContentId(userId: string, contentId: string): Promise<IResponseWithSync<StagingContentResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/staging-contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, StagingContentResponse, 'StagingContentResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.
   */
  updateStagingContent_ByUserId_ByContentId(
    userId: string,
    contentId: string,
    data: UpdateStagingContentRequest
  ): Promise<IResponse<StagingContentResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/staging-contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, StagingContentResponse, 'StagingContentResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
