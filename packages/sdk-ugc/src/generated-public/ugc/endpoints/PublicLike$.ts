/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { ContentLikeRequest } from '../definitions/ContentLikeRequest.js'
import { ContentLikeResponse } from '../definitions/ContentLikeResponse.js'
import { PaginatedContentDownloadResponse } from '../definitions/PaginatedContentDownloadResponse.js'

export class PublicLike$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Requires valid user token. For advance tag filtering supports & as AND operator and | as OR operator and parentheses () for priority. e.g: <code>tags=red</code> <code>tags=red&animal</code> <code>tags=red|animal</code> <code>tags=red&animal|wild</code> <code>tags=red&(animal|wild)</code> The precedence of logical operator is AND > OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore <code>_</code> and dash <code>-</code> Allowed character for operator: <code>&</code> <code>|</code> <code>(</code> <code>)</code> <b>Please note that value of tags query param should be URL encoded</b>
   */
  getContentsLiked(queryParams?: {
    tags?: string[]
    name?: string | null
    type?: string | null
    subtype?: string | null
    isofficial?: boolean | null
    limit?: number
    offset?: number
    sortby?: string | null
    orderby?: string | null
  }): Promise<IResponseWithSync<PaginatedContentDownloadResponse>> {
    const params = { limit: 1000, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/contents/liked'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PaginatedContentDownloadResponse, 'PaginatedContentDownloadResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Requires valid user token
   */
  updateLike_ByContentId(contentId: string, data: ContentLikeRequest): Promise<IResponse<ContentLikeResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/contents/{contentId}/like'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, ContentLikeResponse, 'ContentLikeResponse')
  }
}
