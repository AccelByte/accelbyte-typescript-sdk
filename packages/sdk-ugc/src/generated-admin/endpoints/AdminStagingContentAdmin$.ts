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
import { ApproveStagingContentRequest } from '../../generated-definitions/ApproveStagingContentRequest.js'
import { PaginatedListStagingContentResponse } from '../../generated-definitions/PaginatedListStagingContentResponse.js'
import { StagingContentResponse } from '../../generated-definitions/StagingContentResponse.js'

export class AdminStagingContentAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;.
   */
  getStagingContents(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: string | null
    status?: string | null
  }): Promise<IResponseWithSync<PaginatedListStagingContentResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/staging-contents'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PaginatedListStagingContentResponse, 'PaginatedListStagingContentResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;.
   */
  getStagingContent_ByContentId(contentId: string): Promise<IResponseWithSync<StagingContentResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/staging-contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, StagingContentResponse, 'StagingContentResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;.
   */
  getStagingContents_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; status?: string | null }
  ): Promise<IResponseWithSync<PaginatedListStagingContentResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/users/{userId}/staging-contents'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PaginatedListStagingContentResponse, 'PaginatedListStagingContentResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:CONTENT:APPROVAL [CREATE]&lt;/b&gt;.
   */
  createApprove_ByContentId(contentId: string, data: ApproveStagingContentRequest): Promise<IResponse<StagingContentResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/staging-contents/{contentId}/approve'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, StagingContentResponse, 'StagingContentResponse')
  }
}
