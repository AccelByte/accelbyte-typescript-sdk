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
import { z } from 'zod'
import { ContentDownloadResponseV2 } from '../definitions/ContentDownloadResponseV2'
import { ContentDownloadResponseV2Array } from '../definitions/ContentDownloadResponseV2Array'
import { ContentRequestV2 } from '../definitions/ContentRequestV2'
import { CreateContentResponseV2 } from '../definitions/CreateContentResponseV2'
import { CreateScreenshotRequest } from '../definitions/CreateScreenshotRequest'
import { CreateScreenshotResponse } from '../definitions/CreateScreenshotResponse'
import { GenerateContentUploadUrlRequest } from '../definitions/GenerateContentUploadUrlRequest'
import { GenerateContentUploadUrlResponse } from '../definitions/GenerateContentUploadUrlResponse'
import { PaginatedContentDownloadResponseV2 } from '../definitions/PaginatedContentDownloadResponseV2'
import { PublicGetContentBulkRequest } from '../definitions/PublicGetContentBulkRequest'
import { UpdateContentRequestV2 } from '../definitions/UpdateContentRequestV2'
import { UpdateScreenshotRequest } from '../definitions/UpdateScreenshotRequest'
import { UpdateScreenshotResponse } from '../definitions/UpdateScreenshotResponse'

export class PublicContentV2$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   *  For advance tag filtering supports & as AND operator and | as OR operator and parentheses () for priority. e.g: <code>tags=red</code> <code>tags=red&animal</code> <code>tags=red|animal</code> <code>tags=red&animal|wild</code> <code>tags=red&(animal|wild)</code> The precedence of logical operator is AND > OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore <code>_</code> and dash <code>-</code> Allowed character for operator: <code>&</code> <code>|</code> <code>(</code> <code>)</code> <b>Please note that value of tags query param should be URL encoded</b>
   */
  getContents(queryParams?: {
    name?: string | null
    type?: string | null
    subType?: string | null
    tags?: string[]
    limit?: number
    offset?: number
    sortBy?: string | null
  }): Promise<IResponseWithSync<PaginatedContentDownloadResponseV2>> {
    const params = { limit: 1000, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/contents'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PaginatedContentDownloadResponseV2, 'PaginatedContentDownloadResponseV2')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Maximum requested Ids: 100. Public user can access without token or if token specified, requires valid user token
   */
  createContentBulk(data: PublicGetContentBulkRequest): Promise<IResponse<ContentDownloadResponseV2Array>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/contents/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, ContentDownloadResponseV2Array, 'ContentDownloadResponseV2Array')
  }

  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  getContent_ByContentId(contentId: string): Promise<IResponseWithSync<ContentDownloadResponseV2>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ContentDownloadResponseV2, 'ContentDownloadResponseV2')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Public user can access without token or if token specified, required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]</b>.
   */
  getContents_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<PaginatedContentDownloadResponseV2>> {
    const params = { limit: 1000, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/contents'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PaginatedContentDownloadResponseV2, 'PaginatedContentDownloadResponseV2')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  getContents_ByChannelId(
    channelId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<PaginatedContentDownloadResponseV2>> {
    const params = { limit: 1000, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/channels/{channelId}/contents'
      .replace('{namespace}', this.namespace)
      .replace('{channelId}', channelId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PaginatedContentDownloadResponseV2, 'PaginatedContentDownloadResponseV2')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  getContentSharecode_ByShareCode(shareCode: string): Promise<IResponseWithSync<ContentDownloadResponseV2>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/contents/sharecodes/{shareCode}'
      .replace('{namespace}', this.namespace)
      .replace('{shareCode}', shareCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ContentDownloadResponseV2, 'ContentDownloadResponseV2')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]</b>.
   */
  createContent_ByUserId_ByChannelId(
    userId: string,
    channelId: string,
    data: ContentRequestV2
  ): Promise<IResponse<CreateContentResponseV2>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, CreateContentResponseV2, 'CreateContentResponseV2')
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]</b>. Maximum description length: 1024.
   */
  updateScreenshot_ByUserId_ByContentId(
    contentId: string,
    userId: string,
    data: UpdateScreenshotRequest
  ): Promise<IResponse<UpdateScreenshotResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, UpdateScreenshotResponse, 'UpdateScreenshotResponse')
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]</b>. All request body are required except for contentType field. contentType values is used to enforce the Content-Type header needed by the client to upload the content using the presigned URL. If not specified, it will use fileExtension value. Supported file extensions: pjp, jpg, jpeg, jfif, bmp, png. Maximum description length: 1024.
   */
  createScreenshot_ByUserId_ByContentId(
    contentId: string,
    userId: string,
    data: CreateScreenshotRequest
  ): Promise<IResponse<CreateScreenshotResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, CreateScreenshotResponse, 'CreateScreenshotResponse')
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]</b>.
   */
  deleteContent_ByUserId_ByChannelId_ByContentId(userId: string, channelId: string, contentId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]</b>.
   */
  patchContent_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string,
    data: UpdateContentRequestV2
  ): Promise<IResponse<ContentDownloadResponseV2>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, ContentDownloadResponseV2, 'ContentDownloadResponseV2')
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]</b>.
   */
  deleteScreenshot_ByUserId_ByContentId_ByScreenshotId(
    contentId: string,
    screenshotId: string,
    userId: string
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots/{screenshotId}'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
      .replace('{screenshotId}', screenshotId)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]</b>.
   */
  patchUploadUrl_ByUserId_ByChannelId_ByContentId(
    channelId: string,
    contentId: string,
    userId: string,
    data: GenerateContentUploadUrlRequest
  ): Promise<IResponse<GenerateContentUploadUrlResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}/uploadUrl'
      .replace('{namespace}', this.namespace)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, GenerateContentUploadUrlResponse, 'GenerateContentUploadUrlResponse')
  }
}
