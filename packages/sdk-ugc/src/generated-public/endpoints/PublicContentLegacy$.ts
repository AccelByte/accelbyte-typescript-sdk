/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { ContentDownloadResponse } from '../../generated-definitions/ContentDownloadResponse.js'
import { ContentDownloadResponseArray } from '../../generated-definitions/ContentDownloadResponseArray.js'
import { CreateContentRequest } from '../../generated-definitions/CreateContentRequest.js'
import { CreateContentResponse } from '../../generated-definitions/CreateContentResponse.js'
import { CreateScreenshotRequest } from '../../generated-definitions/CreateScreenshotRequest.js'
import { CreateScreenshotResponse } from '../../generated-definitions/CreateScreenshotResponse.js'
import { GetContentBulkByShareCodesRequest } from '../../generated-definitions/GetContentBulkByShareCodesRequest.js'
import { GetContentPreviewResponse } from '../../generated-definitions/GetContentPreviewResponse.js'
import { PaginatedContentDownloadResponse } from '../../generated-definitions/PaginatedContentDownloadResponse.js'
import { PublicCreateContentRequestS3 } from '../../generated-definitions/PublicCreateContentRequestS3.js'
import { PublicGetContentBulkRequest } from '../../generated-definitions/PublicGetContentBulkRequest.js'
import { UpdateContentRequest } from '../../generated-definitions/UpdateContentRequest.js'
import { UpdateContentShareCodeRequest } from '../../generated-definitions/UpdateContentShareCodeRequest.js'
import { UpdateScreenshotRequest } from '../../generated-definitions/UpdateScreenshotRequest.js'
import { UpdateScreenshotResponse } from '../../generated-definitions/UpdateScreenshotResponse.js'

export class PublicContentLegacy$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * Public user can access without token or if token specified, requires valid user token. For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses () for priority. e.g: &lt;code&gt;tags=red&lt;/code&gt; &lt;code&gt;tags=red&amp;animal&lt;/code&gt; &lt;code&gt;tags=red|animal&lt;/code&gt; &lt;code&gt;tags=red&amp;animal|wild&lt;/code&gt; &lt;code&gt;tags=red&amp;(animal|wild)&lt;/code&gt; The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore &lt;code&gt;_&lt;/code&gt; and dash &lt;code&gt;-&lt;/code&gt; Allowed character for operator: &lt;code&gt;&amp;&lt;/code&gt; &lt;code&gt;|&lt;/code&gt; &lt;code&gt;(&lt;/code&gt; &lt;code&gt;)&lt;/code&gt; &lt;b&gt;Please note that value of tags query param should be URL encoded&lt;/b&gt;
   */
  getContents(queryParams?: {
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
  }): Promise<IResponse<PaginatedContentDownloadResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/contents'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      PaginatedContentDownloadResponse,
      'PaginatedContentDownloadResponse'
    )
  }

  /**
   * Maximum requested Ids: 100. Public user can access without token or if token specified, requires valid user token
   */
  createContentBulk(data: PublicGetContentBulkRequest): Promise<IResponse<ContentDownloadResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/contents/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      ContentDownloadResponseArray,
      'ContentDownloadResponseArray'
    )
  }

  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  getContent_ByContentId(contentId: string): Promise<IResponse<ContentDownloadResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, ContentDownloadResponse, 'ContentDownloadResponse')
  }

  /**
   * Public user can access without token or if token specified, required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;.
   */
  getContents_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponse<PaginatedContentDownloadResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/contents'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      PaginatedContentDownloadResponse,
      'PaginatedContentDownloadResponse'
    )
  }

  /**
   * Require valid user token. Maximum sharecodes per request 100
   */
  createContentSharecodeBulk(data: GetContentBulkByShareCodesRequest): Promise<IResponse<ContentDownloadResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/contents/sharecodes/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      ContentDownloadResponseArray,
      'ContentDownloadResponseArray'
    )
  }

  /**
   * &lt;p&gt;Requires valid user token&lt;/p&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
   */
  getPreview_ByContentId(contentId: string): Promise<IResponse<GetContentPreviewResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/contents/{contentId}/preview'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, GetContentPreviewResponse, 'GetContentPreviewResponse')
  }

  /**
   * Requires valid user token. For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses () for priority. e.g: &lt;code&gt;tags=red&lt;/code&gt; &lt;code&gt;tags=red&amp;animal&lt;/code&gt; &lt;code&gt;tags=red|animal&lt;/code&gt; &lt;code&gt;tags=red&amp;animal|wild&lt;/code&gt; &lt;code&gt;tags=red&amp;(animal|wild)&lt;/code&gt; The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore &lt;code&gt;_&lt;/code&gt; and dash &lt;code&gt;-&lt;/code&gt; Allowed character for operator: &lt;code&gt;&amp;&lt;/code&gt; &lt;code&gt;|&lt;/code&gt; &lt;code&gt;(&lt;/code&gt; &lt;code&gt;)&lt;/code&gt; &lt;b&gt;Please note that value of tags query param should be URL encoded&lt;/b&gt;
   */
  getContents_ByChannelId(
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
  ): Promise<IResponse<PaginatedContentDownloadResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/channels/{channelId}/contents'
      .replace('{namespace}', this.namespace)
      .replace('{channelId}', channelId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      PaginatedContentDownloadResponse,
      'PaginatedContentDownloadResponse'
    )
  }

  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  getContentSharecode_ByShareCode(shareCode: string): Promise<IResponse<ContentDownloadResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/contents/sharecodes/{shareCode}'
      .replace('{namespace}', this.namespace)
      .replace('{shareCode}', shareCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, ContentDownloadResponse, 'ContentDownloadResponse')
  }

  /**
   * @deprecated
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]&lt;/b&gt;.\n All request body are required except preview, tags and customAttributes.
   */
  createContent_ByUserId_ByChannelId_DEPRECATED(
    userId: string,
    channelId: string,
    data: CreateContentRequest
  ): Promise<IResponse<CreateContentResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, CreateContentResponse, 'CreateContentResponse')
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]&lt;/b&gt;.\n All request body are required except payload, preview, tags, contentType and customAttributes. contentType values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use fileExtension value. &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
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

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, CreateContentResponse, 'CreateContentResponse')
  }

  /**
   * All request body are required except for *contentType* field. *contentType* values is used to enforce the *Content-Type* header needed by the client to upload the content using the presigned URL. If not specified, it will use *fileExtension* value. Supported file extensions: *pjp*, *jpg*, *jpeg*, *jfif*, *bmp*, *png*. Maximum description length: 1024
   */
  createScreenshot_ByUserId_ByContentId(
    userId: string,
    contentId: string,
    data: CreateScreenshotRequest
  ): Promise<IResponse<CreateScreenshotResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, CreateScreenshotResponse, 'CreateScreenshotResponse')
  }

  /**
   * Maximum description length: 1024
   */
  updateScreenshot_ByUserId_ByContentId(
    userId: string,
    contentId: string,
    data: UpdateScreenshotRequest
  ): Promise<IResponse<UpdateScreenshotResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, UpdateScreenshotResponse, 'UpdateScreenshotResponse')
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
   */
  deleteContent_ByUserId_ByChannelId_ByContentId(userId: string, channelId: string, contentId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * @deprecated
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.\n All request body are required except preview, tags and customAttributes.
   */
  updateContent_ByUserId_ByChannelId_ByContentId_DEPRECATED(
    userId: string,
    channelId: string,
    contentId: string,
    data: CreateContentRequest
  ): Promise<IResponse<CreateContentResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, CreateContentResponse, 'CreateContentResponse')
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;. All request body are required except payload, preview, tags, contentType, updateContentFile and customAttributes. contentType values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use fileExtension value. To update content&#39;s file, set &lt;code&gt;updateContentFile&lt;/code&gt; to &lt;code&gt;true&lt;/code&gt; and upload the file using URL in &lt;code&gt;payloadURL.url&lt;/code&gt; in response body. &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
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

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, CreateContentResponse, 'CreateContentResponse')
  }

  /**
   * Delete existing screenshot from a content
   */
  deleteScreenshot_ByUserId_ByContentId_ByScreenshotId(
    userId: string,
    contentId: string,
    screenshotId: string
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots/{screenshotId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{contentId}', contentId)
      .replace('{screenshotId}', screenshotId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT:SHARECODE [UPDATE]&lt;/b&gt;.&lt;br&gt; This endpoint is used to modify the shareCode of a content. However, this operation is restricted by default and requires the above permission to be granted to the User role.&lt;br&gt; &lt;code&gt;shareCode&lt;/code&gt; format should follows: Max length: 7 Available characters: abcdefhkpqrstuxyz
   */
  patchSharecode_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string,
    data: UpdateContentShareCodeRequest
  ): Promise<IResponse<CreateContentResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}/sharecode'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, CreateContentResponse, 'CreateContentResponse')
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
   */
  deleteContentSharecode_ByUserId_ByChannelId_ByShareCode(
    userId: string,
    channelId: string,
    shareCode: string
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/sharecodes/{shareCode}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{shareCode}', shareCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;. All request body are required except &lt;code&gt;payload&lt;/code&gt;, &lt;code&gt;preview&lt;/code&gt;, &lt;code&gt;tags&lt;/code&gt;,&lt;code&gt;contentType&lt;/code&gt;, &lt;code&gt;updateContentFile&lt;/code&gt;, &lt;code&gt;customAttributes&lt;/code&gt; and &lt;code&gt;shareCode&lt;/code&gt;. &lt;code&gt;contentType&lt;/code&gt; values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use &lt;code&gt;fileExtension&lt;/code&gt; value. To update content file, set &lt;code&gt;updateContentFile&lt;/code&gt; to &lt;code&gt;true&lt;/code&gt; and upload the file using URL in &lt;code&gt;payloadURL.url&lt;/code&gt; in response body. &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
   */
  updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode(
    userId: string,
    channelId: string,
    shareCode: string,
    data: UpdateContentRequest
  ): Promise<IResponse<CreateContentResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/s3/sharecodes/{shareCode}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{shareCode}', shareCode)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, CreateContentResponse, 'CreateContentResponse')
  }
}
