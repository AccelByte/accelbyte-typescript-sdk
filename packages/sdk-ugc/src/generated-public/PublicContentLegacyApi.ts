/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ContentDownloadResponse } from '../generated-definitions/ContentDownloadResponse.js'
import { ContentDownloadResponseArray } from '../generated-definitions/ContentDownloadResponseArray.js'
import { CreateContentRequest } from '../generated-definitions/CreateContentRequest.js'
import { CreateContentResponse } from '../generated-definitions/CreateContentResponse.js'
import { CreateScreenshotRequest } from '../generated-definitions/CreateScreenshotRequest.js'
import { CreateScreenshotResponse } from '../generated-definitions/CreateScreenshotResponse.js'
import { GetContentBulkByShareCodesRequest } from '../generated-definitions/GetContentBulkByShareCodesRequest.js'
import { GetContentPreviewResponse } from '../generated-definitions/GetContentPreviewResponse.js'
import { PaginatedContentDownloadResponse } from '../generated-definitions/PaginatedContentDownloadResponse.js'
import { PublicCreateContentRequestS3 } from '../generated-definitions/PublicCreateContentRequestS3.js'
import { PublicGetContentBulkRequest } from '../generated-definitions/PublicGetContentBulkRequest.js'
import { UpdateContentRequest } from '../generated-definitions/UpdateContentRequest.js'
import { UpdateContentShareCodeRequest } from '../generated-definitions/UpdateContentShareCodeRequest.js'
import { UpdateScreenshotRequest } from '../generated-definitions/UpdateScreenshotRequest.js'
import { UpdateScreenshotResponse } from '../generated-definitions/UpdateScreenshotResponse.js'
import { PublicContentLegacy$ } from './endpoints/PublicContentLegacy$.js'

export function PublicContentLegacyApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getContents(queryParams?: {
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
  }): Promise<AxiosResponse<PaginatedContentDownloadResponse>> {
    const $ = new PublicContentLegacy$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContents(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createContentBulk(data: PublicGetContentBulkRequest): Promise<AxiosResponse<ContentDownloadResponseArray>> {
    const $ = new PublicContentLegacy$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createContentBulk(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getContent_ByContentId(contentId: string): Promise<AxiosResponse<ContentDownloadResponse>> {
    const $ = new PublicContentLegacy$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContent_ByContentId(contentId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getContents_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<PaginatedContentDownloadResponse>> {
    const $ = new PublicContentLegacy$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContents_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createContentSharecodeBulk(data: GetContentBulkByShareCodesRequest): Promise<AxiosResponse<ContentDownloadResponseArray>> {
    const $ = new PublicContentLegacy$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createContentSharecodeBulk(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPreview_ByContentId(contentId: string): Promise<AxiosResponse<GetContentPreviewResponse>> {
    const $ = new PublicContentLegacy$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPreview_ByContentId(contentId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getContents_ByChannelId(
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
  ): Promise<AxiosResponse<PaginatedContentDownloadResponse>> {
    const $ = new PublicContentLegacy$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContents_ByChannelId(channelId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getContentSharecode_ByShareCode(shareCode: string): Promise<AxiosResponse<ContentDownloadResponse>> {
    const $ = new PublicContentLegacy$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContentSharecode_ByShareCode(shareCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createContent_ByUserId_ByChannelId(
    userId: string,
    channelId: string,
    data: CreateContentRequest
  ): Promise<AxiosResponse<CreateContentResponse>> {
    const $ = new PublicContentLegacy$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createContent_ByUserId_ByChannelId(userId, channelId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createContentS3_ByUserId_ByChannelId(
    userId: string,
    channelId: string,
    data: PublicCreateContentRequestS3
  ): Promise<AxiosResponse<CreateContentResponse>> {
    const $ = new PublicContentLegacy$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createContentS3_ByUserId_ByChannelId(userId, channelId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createScreenshot_ByUserId_ByContentId(
    userId: string,
    contentId: string,
    data: CreateScreenshotRequest
  ): Promise<AxiosResponse<CreateScreenshotResponse>> {
    const $ = new PublicContentLegacy$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createScreenshot_ByUserId_ByContentId(userId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateScreenshot_ByUserId_ByContentId(
    userId: string,
    contentId: string,
    data: UpdateScreenshotRequest
  ): Promise<AxiosResponse<UpdateScreenshotResponse>> {
    const $ = new PublicContentLegacy$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateScreenshot_ByUserId_ByContentId(userId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteContent_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string
  ): Promise<AxiosResponse<unknown>> {
    const $ = new PublicContentLegacy$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteContent_ByUserId_ByChannelId_ByContentId(userId, channelId, contentId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateContent_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string,
    data: CreateContentRequest
  ): Promise<AxiosResponse<CreateContentResponse>> {
    const $ = new PublicContentLegacy$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateContent_ByUserId_ByChannelId_ByContentId(userId, channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateContentS3_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string,
    data: UpdateContentRequest
  ): Promise<AxiosResponse<CreateContentResponse>> {
    const $ = new PublicContentLegacy$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateContentS3_ByUserId_ByChannelId_ByContentId(userId, channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteScreenshot_ByUserId_ByContentId_ByScreenshotId(
    userId: string,
    contentId: string,
    screenshotId: string
  ): Promise<AxiosResponse<unknown>> {
    const $ = new PublicContentLegacy$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteScreenshot_ByUserId_ByContentId_ByScreenshotId(userId, contentId, screenshotId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchSharecode_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string,
    data: UpdateContentShareCodeRequest
  ): Promise<AxiosResponse<CreateContentResponse>> {
    const $ = new PublicContentLegacy$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchSharecode_ByUserId_ByChannelId_ByContentId(userId, channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteContentSharecode_ByUserId_ByChannelId_ByShareCode(
    userId: string,
    channelId: string,
    shareCode: string
  ): Promise<AxiosResponse<unknown>> {
    const $ = new PublicContentLegacy$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteContentSharecode_ByUserId_ByChannelId_ByShareCode(userId, channelId, shareCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode(
    userId: string,
    channelId: string,
    shareCode: string,
    data: UpdateContentRequest
  ): Promise<AxiosResponse<CreateContentResponse>> {
    const $ = new PublicContentLegacy$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode(userId, channelId, shareCode, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Public user can access without token or if token specified, requires valid user token. For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses () for priority. e.g: &lt;code&gt;tags=red&lt;/code&gt; &lt;code&gt;tags=red&amp;animal&lt;/code&gt; &lt;code&gt;tags=red|animal&lt;/code&gt; &lt;code&gt;tags=red&amp;animal|wild&lt;/code&gt; &lt;code&gt;tags=red&amp;(animal|wild)&lt;/code&gt; The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore &lt;code&gt;_&lt;/code&gt; and dash &lt;code&gt;-&lt;/code&gt; Allowed character for operator: &lt;code&gt;&amp;&lt;/code&gt; &lt;code&gt;|&lt;/code&gt; &lt;code&gt;(&lt;/code&gt; &lt;code&gt;)&lt;/code&gt; &lt;b&gt;Please note that value of tags query param should be URL encoded&lt;/b&gt;
     */
    getContents,
    /**
     * Maximum requested Ids: 100. Public user can access without token or if token specified, requires valid user token
     */
    createContentBulk,
    /**
     * Public user can access without token or if token specified, requires valid user token
     */
    getContent_ByContentId,
    /**
     * Public user can access without token or if token specified, required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;.
     */
    getContents_ByUserId,
    /**
     * Require valid user token. Maximum sharecodes per request 100
     */
    createContentSharecodeBulk,
    /**
     * &lt;p&gt;Requires valid user token&lt;/p&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
     */
    getPreview_ByContentId,
    /**
     * Requires valid user token. For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses () for priority. e.g: &lt;code&gt;tags=red&lt;/code&gt; &lt;code&gt;tags=red&amp;animal&lt;/code&gt; &lt;code&gt;tags=red|animal&lt;/code&gt; &lt;code&gt;tags=red&amp;animal|wild&lt;/code&gt; &lt;code&gt;tags=red&amp;(animal|wild)&lt;/code&gt; The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore &lt;code&gt;_&lt;/code&gt; and dash &lt;code&gt;-&lt;/code&gt; Allowed character for operator: &lt;code&gt;&amp;&lt;/code&gt; &lt;code&gt;|&lt;/code&gt; &lt;code&gt;(&lt;/code&gt; &lt;code&gt;)&lt;/code&gt; &lt;b&gt;Please note that value of tags query param should be URL encoded&lt;/b&gt;
     */
    getContents_ByChannelId,
    /**
     * Public user can access without token or if token specified, requires valid user token
     */
    getContentSharecode_ByShareCode,
    /**
     * @deprecated
     * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]&lt;/b&gt;.\n All request body are required except preview, tags and customAttributes.
     */
    createContent_ByUserId_ByChannelId,
    /**
     * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]&lt;/b&gt;.\n All request body are required except payload, preview, tags, contentType and customAttributes. contentType values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use fileExtension value. &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
     */
    createContentS3_ByUserId_ByChannelId,
    /**
     * All request body are required except for *contentType* field. *contentType* values is used to enforce the *Content-Type* header needed by the client to upload the content using the presigned URL. If not specified, it will use *fileExtension* value. Supported file extensions: *pjp*, *jpg*, *jpeg*, *jfif*, *bmp*, *png*. Maximum description length: 1024
     */
    createScreenshot_ByUserId_ByContentId,
    /**
     * Maximum description length: 1024
     */
    updateScreenshot_ByUserId_ByContentId,
    /**
     * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
     */
    deleteContent_ByUserId_ByChannelId_ByContentId,
    /**
     * @deprecated
     * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.\n All request body are required except preview, tags and customAttributes.
     */
    updateContent_ByUserId_ByChannelId_ByContentId,
    /**
     * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;. All request body are required except payload, preview, tags, contentType, updateContentFile and customAttributes. contentType values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use fileExtension value. To update content&#39;s file, set &lt;code&gt;updateContentFile&lt;/code&gt; to &lt;code&gt;true&lt;/code&gt; and upload the file using URL in &lt;code&gt;payloadURL.url&lt;/code&gt; in response body. &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
     */
    updateContentS3_ByUserId_ByChannelId_ByContentId,
    /**
     * Delete existing screenshot from a content
     */
    deleteScreenshot_ByUserId_ByContentId_ByScreenshotId,
    /**
     * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT:SHARECODE [UPDATE]&lt;/b&gt;.&lt;br&gt; This endpoint is used to modify the shareCode of a content. However, this operation is restricted by default and requires the above permission to be granted to the User role.&lt;br&gt; &lt;code&gt;shareCode&lt;/code&gt; format should follows: Max length: 7 Available characters: abcdefhkpqrstuxyz
     */
    patchSharecode_ByUserId_ByChannelId_ByContentId,
    /**
     * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
     */
    deleteContentSharecode_ByUserId_ByChannelId_ByShareCode,
    /**
     * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;. All request body are required except &lt;code&gt;payload&lt;/code&gt;, &lt;code&gt;preview&lt;/code&gt;, &lt;code&gt;tags&lt;/code&gt;,&lt;code&gt;contentType&lt;/code&gt;, &lt;code&gt;updateContentFile&lt;/code&gt;, &lt;code&gt;customAttributes&lt;/code&gt; and &lt;code&gt;shareCode&lt;/code&gt;. &lt;code&gt;contentType&lt;/code&gt; values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use &lt;code&gt;fileExtension&lt;/code&gt; value. To update content file, set &lt;code&gt;updateContentFile&lt;/code&gt; to &lt;code&gt;true&lt;/code&gt; and upload the file using URL in &lt;code&gt;payloadURL.url&lt;/code&gt; in response body. &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
     */
    updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode
  }
}
