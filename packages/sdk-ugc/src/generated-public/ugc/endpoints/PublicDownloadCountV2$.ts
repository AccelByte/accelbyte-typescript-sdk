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
import { AddDownloadCountResponse } from '../definitions/AddDownloadCountResponse.js'
import { PaginatedContentDownloaderResponse } from '../definitions/PaginatedContentDownloaderResponse.js'

export class PublicDownloadCountV2$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This endpoint will only display the list of users who performed add download count from v2 endpoint.
   */
  getDownloader_ByContentId(
    contentId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; userId?: string | null }
  ): Promise<IResponseWithSync<PaginatedContentDownloaderResponse>> {
    const params = { limit: 20, sortBy: 'createdTime:desc', ...queryParams } as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/contents/{contentId}/downloader'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PaginatedContentDownloaderResponse, 'PaginatedContentDownloaderResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Requires valid user token
   */
  createDownloadcount_ByContentId(contentId: string): Promise<IResponse<AddDownloadCountResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/contents/{contentId}/downloadcount'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, AddDownloadCountResponse, 'AddDownloadCountResponse')
  }
}
