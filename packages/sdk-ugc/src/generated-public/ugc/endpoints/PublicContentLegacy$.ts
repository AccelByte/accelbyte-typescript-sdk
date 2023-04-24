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
import { ContentDownloadResponse } from '../definitions/ContentDownloadResponse'
import { ContentDownloadResponseArray } from '../definitions/ContentDownloadResponseArray'
import { CreateContentResponse } from '../definitions/CreateContentResponse'
import { CreateScreenshotRequest } from '../definitions/CreateScreenshotRequest'
import { CreateScreenshotResponse } from '../definitions/CreateScreenshotResponse'
import { GetContentPreviewResponse } from '../definitions/GetContentPreviewResponse'
import { PaginatedContentDownloadResponse } from '../definitions/PaginatedContentDownloadResponse'
import { PublicCreateContentRequestS3 } from '../definitions/PublicCreateContentRequestS3'
import { PublicGetContentBulkRequest } from '../definitions/PublicGetContentBulkRequest'
import { UpdateContentRequest } from '../definitions/UpdateContentRequest'
import { UpdateScreenshotRequest } from '../definitions/UpdateScreenshotRequest'
import { UpdateScreenshotResponse } from '../definitions/UpdateScreenshotResponse'

export class PublicContentLegacy$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Public user can access without token or if token specified, requires valid user token. For advance tag filtering supports & as AND operator and | as OR operator and parentheses () for priority. e.g: <code>tags=red</code> <code>tags=red&animal</code> <code>tags=red|animal</code> <code>tags=red&animal|wild</code> <code>tags=red&(animal|wild)</code> The precedence of logical operator is AND > OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore <code>_</code> and dash <code>-</code> Allowed character for operator: <code>&</code> <code>|</code> <code>(</code> <code>)</code> <b>Please note that value of tags query param should be URL encoded</b>
   */
  getContents(queryParams?: {
    sortby?: string | null
    orderby?: string | null
    name?: string | null
    creator?: string | null
    type?: string | null
    subtype?: string | null
    tags?: string[]
    isofficial?: string | null
    limit?: number
    offset?: number
    userId?: string | null
  }): Promise<IResponseWithSync<PaginatedContentDownloadResponse>> {
    const params = { limit: 1000, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/contents'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PaginatedContentDownloadResponse, 'PaginatedContentDownloadResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Maximum requested Ids: 100. Public user can access without token or if token specified, requires valid user token
   */
  createContentBulk(data: PublicGetContentBulkRequest): Promise<IResponse<ContentDownloadResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/contents/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, ContentDownloadResponseArray, 'ContentDownloadResponseArray')
  }

  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  getContent_ByContentId(contentId: string): Promise<IResponseWithSync<ContentDownloadResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ContentDownloadResponse, 'ContentDownloadResponse')

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
  ): Promise<IResponseWithSync<PaginatedContentDownloadResponse>> {
    const params = { limit: 1000, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/contents'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PaginatedContentDownloadResponse, 'PaginatedContentDownloadResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>Requires valid user token</p><p><b>NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content</b></p>
   */
  getPreview_ByContentId(contentId: string): Promise<IResponseWithSync<GetContentPreviewResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/contents/{contentId}/preview'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetContentPreviewResponse, 'GetContentPreviewResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Requires valid user token. For advance tag filtering supports & as AND operator and | as OR operator and parentheses () for priority. e.g: <code>tags=red</code> <code>tags=red&animal</code> <code>tags=red|animal</code> <code>tags=red&animal|wild</code> <code>tags=red&(animal|wild)</code> The precedence of logical operator is AND > OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore <code>_</code> and dash <code>-</code> Allowed character for operator: <code>&</code> <code>|</code> <code>(</code> <code>)</code> <b>Please note that value of tags query param should be URL encoded</b>
   */
  getContents_ByChannelId(
    channelId: string,
    queryParams?: {
      sortby?: string | null
      orderby?: string | null
      name?: string | null
      creator?: string | null
      type?: string | null
      subtype?: string | null
      tags?: string[]
      isofficial?: string | null
      limit?: number
      offset?: number
      userId?: string | null
    }
  ): Promise<IResponseWithSync<PaginatedContentDownloadResponse>> {
    const params = { limit: 1000, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/channels/{channelId}/contents'
      .replace('{namespace}', this.namespace)
      .replace('{channelId}', channelId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PaginatedContentDownloadResponse, 'PaginatedContentDownloadResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  getContentSharecode_ByShareCode(shareCode: string): Promise<IResponseWithSync<ContentDownloadResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/contents/sharecodes/{shareCode}'
      .replace('{namespace}', this.namespace)
      .replace('{shareCode}', shareCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ContentDownloadResponse, 'ContentDownloadResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]</b>.\n All request body are required except payload, preview, tags, contentType and customAttributes. contentType values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use fileExtension value. <br><p><b>NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content</b></p>
   */
  createContentS3_ByUserId_ByChannelId(
    userId: string,
    channelId: string,
    data: PublicCreateContentRequestS3
  ): Promise<IResponse<CreateContentResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/s3'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, CreateContentResponse, 'CreateContentResponse')
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]</b>.\n Maximum description length: 1024.
   */
  updateScreenshot_ByUserId_ByContentId(
    contentId: string,
    userId: string,
    data: UpdateScreenshotRequest
  ): Promise<IResponse<UpdateScreenshotResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, UpdateScreenshotResponse, 'UpdateScreenshotResponse')
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]</b>.\n All request body are required except for contentType field. contentType values is used to enforce the Content-Type header needed by the client to upload the content using the presigned URL. If not specified, it will use fileExtension value. Supported file extensions: pjp, jpg, jpeg, jfif, bmp, png. \n Maximum description length: 1024.
   */
  createScreenshot_ByUserId_ByContentId(
    contentId: string,
    userId: string,
    data: CreateScreenshotRequest
  ): Promise<IResponse<CreateScreenshotResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots'
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
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]</b>. All request body are required except payload, preview, tags, contentType, updateContentFile and customAttributes. contentType values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use fileExtension value. To update content's file, set <code>updateContentFile</code> to <code>true</code> and upload the file using URL in <code>payloadURL.url</code> in response body. <br><p><b>NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content</b></p>
   */
  updateContentS3_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string,
    data: UpdateContentRequest
  ): Promise<IResponse<CreateContentResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/s3/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, CreateContentResponse, 'CreateContentResponse')
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
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots/{screenshotId}'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
      .replace('{screenshotId}', screenshotId)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
