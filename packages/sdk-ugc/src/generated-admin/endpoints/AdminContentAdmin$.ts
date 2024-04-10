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
import { AdminGetContentBulkRequest } from '../../generated-definitions/AdminGetContentBulkRequest.js'
import { AdminUpdateContentRequest } from '../../generated-definitions/AdminUpdateContentRequest.js'
import { ContentDownloadResponse } from '../../generated-definitions/ContentDownloadResponse.js'
import { ContentDownloadResponseArray } from '../../generated-definitions/ContentDownloadResponseArray.js'
import { CreateContentRequest } from '../../generated-definitions/CreateContentRequest.js'
import { CreateContentRequestS3 } from '../../generated-definitions/CreateContentRequestS3.js'
import { CreateContentResponse } from '../../generated-definitions/CreateContentResponse.js'
import { CreateScreenshotRequest } from '../../generated-definitions/CreateScreenshotRequest.js'
import { CreateScreenshotResponse } from '../../generated-definitions/CreateScreenshotResponse.js'
import { GetContentBulkByShareCodesRequest } from '../../generated-definitions/GetContentBulkByShareCodesRequest.js'
import { GetContentPreviewResponse } from '../../generated-definitions/GetContentPreviewResponse.js'
import { HideContentRequest } from '../../generated-definitions/HideContentRequest.js'
import { ListContentVersionsResponse } from '../../generated-definitions/ListContentVersionsResponse.js'
import { PaginatedContentDownloadResponse } from '../../generated-definitions/PaginatedContentDownloadResponse.js'
import { UpdateScreenshotRequest } from '../../generated-definitions/UpdateScreenshotRequest.js'
import { UpdateScreenshotResponse } from '../../generated-definitions/UpdateScreenshotResponse.js'

export class AdminContentAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;.
   */
  getContents(queryParams?: { limit?: number; offset?: number }): Promise<IResponseWithSync<PaginatedContentDownloadResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/contents'.replace('{namespace}', this.namespace)
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
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt;. Maximum contentId per request 100
   */
  createContentBulk(data: AdminGetContentBulkRequest): Promise<IResponse<ContentDownloadResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/contents/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ContentDownloadResponseArray, 'ContentDownloadResponseArray')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt; For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses () for priority. e.g: &lt;code&gt;tags=red&lt;/code&gt; &lt;code&gt;tags=red&amp;animal&lt;/code&gt; &lt;code&gt;tags=red|animal&lt;/code&gt; &lt;code&gt;tags=red&amp;animal|wild&lt;/code&gt; &lt;code&gt;tags=red&amp;(animal|wild)&lt;/code&gt; The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore &lt;code&gt;_&lt;/code&gt; and dash &lt;code&gt;-&lt;/code&gt; Allowed character for operator: &lt;code&gt;&amp;&lt;/code&gt; &lt;code&gt;|&lt;/code&gt; &lt;code&gt;(&lt;/code&gt; &lt;code&gt;)&lt;/code&gt; &lt;b&gt;Please note that value of tags query param should be URL encoded&lt;/b&gt;
   */
  getContentsSearch(queryParams?: {
    creator?: string | null
    ishidden?: string | null
    isofficial?: string | null
    limit?: number
    name?: string | null
    offset?: number
    orderby?: string | null
    sortby?: string | null
    subtype?: string | null
    tags?: string[]
    type?: string | null
    userId?: string | null
  }): Promise<IResponseWithSync<PaginatedContentDownloadResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/contents/search'.replace('{namespace}', this.namespace)
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
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt;.
   */
  getContent_ByContentId(contentId: string): Promise<IResponseWithSync<ContentDownloadResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ContentDownloadResponse, 'ContentDownloadResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;.
   */
  getContents_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<PaginatedContentDownloadResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/users/{userId}/contents'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
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
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt;. Maximum sharecodes per request 100
   */
  createContentSharecodeBulk(data: GetContentBulkByShareCodesRequest): Promise<IResponse<ContentDownloadResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/contents/sharecodes/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ContentDownloadResponseArray, 'ContentDownloadResponseArray')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
   */
  getPreview_ByContentId(contentId: string): Promise<IResponseWithSync<GetContentPreviewResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/contents/{contentId}/preview'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetContentPreviewResponse, 'GetContentPreviewResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * @deprecated
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]&lt;/b&gt;.\n All request body are required except preview, tags and customAttributes.
   */
  createContent_ByChannelId(channelId: string, data: CreateContentRequest): Promise<IResponse<CreateContentResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/channels/{channelId}/contents'
      .replace('{namespace}', this.namespace)
      .replace('{channelId}', channelId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateContentResponse, 'CreateContentResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission: &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt; Content&#39;s payload versions created when UGC is created or updated with &lt;code&gt;updateContentFile&lt;/code&gt; set to true. Only list up to 10 latest versions.
   */
  getVersions_ByContentId(contentId: string): Promise<IResponseWithSync<ListContentVersionsResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/contents/{contentId}/versions'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ListContentVersionsResponse, 'ListContentVersionsResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt;.
   */
  getContentSharecode_ByShareCode(shareCode: string): Promise<IResponseWithSync<ContentDownloadResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/contents/sharecodes/{shareCode}'
      .replace('{namespace}', this.namespace)
      .replace('{shareCode}', shareCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ContentDownloadResponse, 'ContentDownloadResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]&lt;/b&gt;. All request body are required except &lt;code&gt;preview&lt;/code&gt;, &lt;code&gt;tags&lt;/code&gt;, &lt;code&gt;contentType&lt;/code&gt;, &lt;code&gt;customAttributes&lt;/code&gt; and &lt;code&gt;shareCode&lt;/code&gt;. &lt;code&gt;contentType&lt;/code&gt; values is used to enforce the Content-Type header needed by the client when uploading the content using the S3 presigned URL. If not specified, it will use fileExtension value. &lt;code&gt;shareCode&lt;/code&gt; format should follows: Length: 7 Available characters: abcdefhkpqrstuxyz &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
   */
  createContentS3_ByChannelId(channelId: string, data: CreateContentRequestS3): Promise<IResponse<CreateContentResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/channels/{channelId}/contents/s3'
      .replace('{namespace}', this.namespace)
      .replace('{channelId}', channelId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateContentResponse, 'CreateContentResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * All request body are required except for *contentType* field. *contentType* values is used to enforce the *Content-Type* header needed by the client to upload the content using the presigned URL. If not specified, it will use *fileExtension* value. Supported file extensions: *pjp*, *jpg*, *jpeg*, *jfif*, *bmp*, *png*. Maximum description length: 1024
   */
  createScreenshot_ByContentId(contentId: string, data: CreateScreenshotRequest): Promise<IResponse<CreateScreenshotResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/contents/{contentId}/screenshots'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateScreenshotResponse, 'CreateScreenshotResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Maximum description length: 1024
   */
  updateScreenshot_ByContentId(contentId: string, data: UpdateScreenshotRequest): Promise<IResponse<UpdateScreenshotResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/contents/{contentId}/screenshots'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UpdateScreenshotResponse, 'UpdateScreenshotResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt; For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses () for priority. e.g: &lt;code&gt;tags=red&lt;/code&gt; &lt;code&gt;tags=red&amp;animal&lt;/code&gt; &lt;code&gt;tags=red|animal&lt;/code&gt; &lt;code&gt;tags=red&amp;animal|wild&lt;/code&gt; &lt;code&gt;tags=red&amp;(animal|wild)&lt;/code&gt; The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore &lt;code&gt;_&lt;/code&gt; and dash &lt;code&gt;-&lt;/code&gt; Allowed character for operator: &lt;code&gt;&amp;&lt;/code&gt; &lt;code&gt;|&lt;/code&gt; &lt;code&gt;(&lt;/code&gt; &lt;code&gt;)&lt;/code&gt; &lt;b&gt;Please note that value of tags query param should be URL encoded&lt;/b&gt;
   */
  getContentsSearch_ByChannelId(
    channelId: string,
    queryParams?: {
      creator?: string | null
      ishidden?: string | null
      isofficial?: string | null
      limit?: number
      name?: string | null
      offset?: number
      orderby?: string | null
      sortby?: string | null
      subtype?: string | null
      tags?: string[]
      type?: string | null
      userId?: string | null
    }
  ): Promise<IResponseWithSync<PaginatedContentDownloadResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/channels/{channelId}/contents/search'
      .replace('{namespace}', this.namespace)
      .replace('{channelId}', channelId)
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
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.
   */
  updateHide_ByUserId_ByContentId(userId: string, contentId: string, data: HideContentRequest): Promise<IResponse<CreateContentResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/users/{userId}/contents/{contentId}/hide'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateContentResponse, 'CreateContentResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
   */
  deleteContent_ByChannelId_ByContentId(channelId: string, contentId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/channels/{channelId}/contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.\n All request body are required except preview, tags and customAttributes.
   */
  updateContent_ByChannelId_ByContentId(
    channelId: string,
    contentId: string,
    data: CreateContentRequest
  ): Promise<IResponse<CreateContentResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/channels/{channelId}/contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateContentResponse, 'CreateContentResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission: &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt; Rollback content&#39;s payload to specified version.
   */
  updateRollback_ByContentId_ByVersionId(contentId: string, versionId: string): Promise<IResponse<ContentDownloadResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/contents/{contentId}/rollback/{versionId}'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
      .replace('{versionId}', versionId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ContentDownloadResponse, 'ContentDownloadResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;. All request body are required except &lt;code&gt;payload&lt;/code&gt;, &lt;code&gt;preview&lt;/code&gt;, &lt;code&gt;tags&lt;/code&gt;,&lt;code&gt;contentType&lt;/code&gt;, &lt;code&gt;updateContentFile&lt;/code&gt;, &lt;code&gt;customAttributes&lt;/code&gt; and &lt;code&gt;shareCode&lt;/code&gt;. &lt;code&gt;contentType&lt;/code&gt; values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use &lt;code&gt;fileExtension&lt;/code&gt; value. To update content file, set &lt;code&gt;updateContentFile&lt;/code&gt; to &lt;code&gt;true&lt;/code&gt; and upload the file using URL in &lt;code&gt;payloadURL.url&lt;/code&gt; in response body. &lt;code&gt;shareCode&lt;/code&gt; format should follows: Max length: 7 Available characters: abcdefhkpqrstuxyz &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
   */
  updateContentS3_ByChannelId_ByContentId(
    channelId: string,
    contentId: string,
    data: AdminUpdateContentRequest
  ): Promise<IResponse<CreateContentResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/channels/{channelId}/contents/s3/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateContentResponse, 'CreateContentResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Delete existing screenshot from a content
   */
  deleteScreenshot_ByContentId_ByScreenshotId(contentId: string, screenshotId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/contents/{contentId}/screenshots/{screenshotId}'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
      .replace('{screenshotId}', screenshotId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
   */
  deleteContent_ByUserId_ByChannelId_ByContentId(userId: string, channelId: string, contentId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.\n All request body are required except preview, tags and customAttributes.
   */
  updateContent_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string,
    data: CreateContentRequest
  ): Promise<IResponse<CreateContentResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateContentResponse, 'CreateContentResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;. All request body are required except &lt;code&gt;payload&lt;/code&gt;, &lt;code&gt;preview&lt;/code&gt;, &lt;code&gt;tags&lt;/code&gt;,&lt;code&gt;contentType&lt;/code&gt;, &lt;code&gt;updateContentFile&lt;/code&gt;, &lt;code&gt;customAttributes&lt;/code&gt; and &lt;code&gt;shareCode&lt;/code&gt;. &lt;code&gt;contentType&lt;/code&gt; values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use &lt;code&gt;fileExtension&lt;/code&gt; value. To update content file, set &lt;code&gt;updateContentFile&lt;/code&gt; to &lt;code&gt;true&lt;/code&gt; and upload the file using URL in &lt;code&gt;payloadURL.url&lt;/code&gt; in response body. &lt;code&gt;shareCode&lt;/code&gt; format should follows: Max length: 7 Available characters: abcdefhkpqrstuxyz &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
   */
  updateContentS3_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string,
    data: AdminUpdateContentRequest
  ): Promise<IResponse<CreateContentResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/s3/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateContentResponse, 'CreateContentResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
   */
  deleteContentSharecode_ByUserId_ByChannelId_ByShareCode(
    userId: string,
    channelId: string,
    shareCode: string
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/sharecodes/{shareCode}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{shareCode}', shareCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;. All request body are required except &lt;code&gt;payload&lt;/code&gt;, &lt;code&gt;preview&lt;/code&gt;, &lt;code&gt;tags&lt;/code&gt;,&lt;code&gt;contentType&lt;/code&gt;, &lt;code&gt;updateContentFile&lt;/code&gt;, &lt;code&gt;customAttributes&lt;/code&gt; and &lt;code&gt;shareCode&lt;/code&gt;. &lt;code&gt;contentType&lt;/code&gt; values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use &lt;code&gt;fileExtension&lt;/code&gt; value. To update content file, set &lt;code&gt;updateContentFile&lt;/code&gt; to &lt;code&gt;true&lt;/code&gt; and upload the file using URL in &lt;code&gt;payloadURL.url&lt;/code&gt; in response body. &lt;code&gt;shareCode&lt;/code&gt; format should follows: Max length: 7 Available characters: abcdefhkpqrstuxyz &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
   */
  updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode(
    userId: string,
    channelId: string,
    shareCode: string,
    data: AdminUpdateContentRequest
  ): Promise<IResponse<CreateContentResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/s3/sharecodes/{shareCode}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{shareCode}', shareCode)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateContentResponse, 'CreateContentResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
