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
import { AdminGetContentBulkRequest } from '../generated-definitions/AdminGetContentBulkRequest.js'
import { AdminUpdateContentRequest } from '../generated-definitions/AdminUpdateContentRequest.js'
import { ContentDownloadResponse } from '../generated-definitions/ContentDownloadResponse.js'
import { ContentDownloadResponseArray } from '../generated-definitions/ContentDownloadResponseArray.js'
import { CreateContentRequest } from '../generated-definitions/CreateContentRequest.js'
import { CreateContentRequestS3 } from '../generated-definitions/CreateContentRequestS3.js'
import { CreateContentResponse } from '../generated-definitions/CreateContentResponse.js'
import { CreateScreenshotRequest } from '../generated-definitions/CreateScreenshotRequest.js'
import { CreateScreenshotResponse } from '../generated-definitions/CreateScreenshotResponse.js'
import { GetContentBulkByShareCodesRequest } from '../generated-definitions/GetContentBulkByShareCodesRequest.js'
import { GetContentPreviewResponse } from '../generated-definitions/GetContentPreviewResponse.js'
import { HideContentRequest } from '../generated-definitions/HideContentRequest.js'
import { ListContentVersionsResponse } from '../generated-definitions/ListContentVersionsResponse.js'
import { PaginatedContentDownloadResponse } from '../generated-definitions/PaginatedContentDownloadResponse.js'
import { UpdateScreenshotRequest } from '../generated-definitions/UpdateScreenshotRequest.js'
import { UpdateScreenshotResponse } from '../generated-definitions/UpdateScreenshotResponse.js'
import { ContentAdmin$ } from './endpoints/ContentAdmin$.js'

export function ContentAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getContents(queryParams?: { limit?: number; offset?: number }): Promise<AxiosResponse<PaginatedContentDownloadResponse>> {
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContents(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function fetchContentBulk(data: AdminGetContentBulkRequest): Promise<AxiosResponse<ContentDownloadResponseArray>> {
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchContentBulk(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getContentsSearch(queryParams?: {
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
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContentsSearch(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getContent_ByContentId(contentId: string): Promise<AxiosResponse<ContentDownloadResponse>> {
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContent_ByContentId(contentId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getContents_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<PaginatedContentDownloadResponse>> {
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContents_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function fetchContentSharecodeBulk(data: GetContentBulkByShareCodesRequest): Promise<AxiosResponse<ContentDownloadResponseArray>> {
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchContentSharecodeBulk(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPreview_ByContentId(contentId: string): Promise<AxiosResponse<GetContentPreviewResponse>> {
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPreview_ByContentId(contentId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createContent_ByChannelId(channelId: string, data: CreateContentRequest): Promise<AxiosResponse<CreateContentResponse>> {
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createContent_ByChannelId(channelId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getVersions_ByContentId(contentId: string): Promise<AxiosResponse<ListContentVersionsResponse>> {
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getVersions_ByContentId(contentId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getContentSharecode_ByShareCode(shareCode: string): Promise<AxiosResponse<ContentDownloadResponse>> {
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContentSharecode_ByShareCode(shareCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createContentS3_ByChannelId(
    channelId: string,
    data: CreateContentRequestS3
  ): Promise<AxiosResponse<CreateContentResponse>> {
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createContentS3_ByChannelId(channelId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createScreenshot_ByContentId(
    contentId: string,
    data: CreateScreenshotRequest
  ): Promise<AxiosResponse<CreateScreenshotResponse>> {
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createScreenshot_ByContentId(contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateScreenshot_ByContentId(
    contentId: string,
    data: UpdateScreenshotRequest
  ): Promise<AxiosResponse<UpdateScreenshotResponse>> {
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateScreenshot_ByContentId(contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getContentsSearch_ByChannelId(
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
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContentsSearch_ByChannelId(channelId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateHide_ByUserId_ByContentId(
    userId: string,
    contentId: string,
    data: HideContentRequest
  ): Promise<AxiosResponse<CreateContentResponse>> {
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateHide_ByUserId_ByContentId(userId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteContent_ByChannelId_ByContentId(channelId: string, contentId: string): Promise<AxiosResponse<unknown>> {
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteContent_ByChannelId_ByContentId(channelId, contentId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateContent_ByChannelId_ByContentId(
    channelId: string,
    contentId: string,
    data: CreateContentRequest
  ): Promise<AxiosResponse<CreateContentResponse>> {
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateContent_ByChannelId_ByContentId(channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRollback_ByContentId_ByVersionId(
    contentId: string,
    versionId: string
  ): Promise<AxiosResponse<ContentDownloadResponse>> {
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRollback_ByContentId_ByVersionId(contentId, versionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateContentS3_ByChannelId_ByContentId(
    channelId: string,
    contentId: string,
    data: AdminUpdateContentRequest
  ): Promise<AxiosResponse<CreateContentResponse>> {
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateContentS3_ByChannelId_ByContentId(channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteScreenshot_ByContentId_ByScreenshotId(contentId: string, screenshotId: string): Promise<AxiosResponse<unknown>> {
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteScreenshot_ByContentId_ByScreenshotId(contentId, screenshotId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteContent_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string
  ): Promise<AxiosResponse<unknown>> {
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
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
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateContent_ByUserId_ByChannelId_ByContentId(userId, channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateContentS3_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string,
    data: AdminUpdateContentRequest
  ): Promise<AxiosResponse<CreateContentResponse>> {
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateContentS3_ByUserId_ByChannelId_ByContentId(userId, channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteContentSharecode_ByUserId_ByChannelId_ByShareCode(
    userId: string,
    channelId: string,
    shareCode: string
  ): Promise<AxiosResponse<unknown>> {
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteContentSharecode_ByUserId_ByChannelId_ByShareCode(userId, channelId, shareCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode(
    userId: string,
    channelId: string,
    shareCode: string,
    data: AdminUpdateContentRequest
  ): Promise<AxiosResponse<CreateContentResponse>> {
    const $ = new ContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode(userId, channelId, shareCode, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;.
     */
    getContents,
    /**
     * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt;. Maximum contentId per request 100
     */
    fetchContentBulk,
    /**
     * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt; For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses () for priority. e.g: &lt;code&gt;tags=red&lt;/code&gt; &lt;code&gt;tags=red&amp;animal&lt;/code&gt; &lt;code&gt;tags=red|animal&lt;/code&gt; &lt;code&gt;tags=red&amp;animal|wild&lt;/code&gt; &lt;code&gt;tags=red&amp;(animal|wild)&lt;/code&gt; The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore &lt;code&gt;_&lt;/code&gt; and dash &lt;code&gt;-&lt;/code&gt; Allowed character for operator: &lt;code&gt;&amp;&lt;/code&gt; &lt;code&gt;|&lt;/code&gt; &lt;code&gt;(&lt;/code&gt; &lt;code&gt;)&lt;/code&gt; &lt;b&gt;Please note that value of tags query param should be URL encoded&lt;/b&gt;
     */
    getContentsSearch,
    /**
     * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt;.
     */
    getContent_ByContentId,
    /**
     * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;.
     */
    getContents_ByUserId,
    /**
     * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt;. Maximum sharecodes per request 100
     */
    fetchContentSharecodeBulk,
    /**
     * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
     */
    getPreview_ByContentId,
    /**
     * @deprecated
     * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]&lt;/b&gt;.\n All request body are required except preview, tags and customAttributes.
     */
    createContent_ByChannelId,
    /**
     * Required permission: &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt; Content&#39;s payload versions created when UGC is created or updated with &lt;code&gt;updateContentFile&lt;/code&gt; set to true. Only list up to 10 latest versions.
     */
    getVersions_ByContentId,
    /**
     * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt;.
     */
    getContentSharecode_ByShareCode,
    /**
     * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]&lt;/b&gt;. All request body are required except &lt;code&gt;preview&lt;/code&gt;, &lt;code&gt;tags&lt;/code&gt;, &lt;code&gt;contentType&lt;/code&gt;, &lt;code&gt;customAttributes&lt;/code&gt; and &lt;code&gt;shareCode&lt;/code&gt;. &lt;code&gt;contentType&lt;/code&gt; values is used to enforce the Content-Type header needed by the client when uploading the content using the S3 presigned URL. If not specified, it will use fileExtension value. &lt;code&gt;shareCode&lt;/code&gt; format should follows: Length: 7 Available characters: abcdefhkpqrstuxyz &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
     */
    createContentS3_ByChannelId,
    /**
     * All request body are required except for *contentType* field. *contentType* values is used to enforce the *Content-Type* header needed by the client to upload the content using the presigned URL. If not specified, it will use *fileExtension* value. Supported file extensions: *pjp*, *jpg*, *jpeg*, *jfif*, *bmp*, *png*. Maximum description length: 1024
     */
    createScreenshot_ByContentId,
    /**
     * Maximum description length: 1024
     */
    updateScreenshot_ByContentId,
    /**
     * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt; For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses () for priority. e.g: &lt;code&gt;tags=red&lt;/code&gt; &lt;code&gt;tags=red&amp;animal&lt;/code&gt; &lt;code&gt;tags=red|animal&lt;/code&gt; &lt;code&gt;tags=red&amp;animal|wild&lt;/code&gt; &lt;code&gt;tags=red&amp;(animal|wild)&lt;/code&gt; The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore &lt;code&gt;_&lt;/code&gt; and dash &lt;code&gt;-&lt;/code&gt; Allowed character for operator: &lt;code&gt;&amp;&lt;/code&gt; &lt;code&gt;|&lt;/code&gt; &lt;code&gt;(&lt;/code&gt; &lt;code&gt;)&lt;/code&gt; &lt;b&gt;Please note that value of tags query param should be URL encoded&lt;/b&gt;
     */
    getContentsSearch_ByChannelId,
    /**
     * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.
     */
    updateHide_ByUserId_ByContentId,
    /**
     * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
     */
    deleteContent_ByChannelId_ByContentId,
    /**
     * @deprecated
     * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.\n All request body are required except preview, tags and customAttributes.
     */
    updateContent_ByChannelId_ByContentId,
    /**
     * Required permission: &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt; Rollback content&#39;s payload to specified version.
     */
    updateRollback_ByContentId_ByVersionId,
    /**
     * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;. All request body are required except &lt;code&gt;payload&lt;/code&gt;, &lt;code&gt;preview&lt;/code&gt;, &lt;code&gt;tags&lt;/code&gt;,&lt;code&gt;contentType&lt;/code&gt;, &lt;code&gt;updateContentFile&lt;/code&gt;, &lt;code&gt;customAttributes&lt;/code&gt; and &lt;code&gt;shareCode&lt;/code&gt;. &lt;code&gt;contentType&lt;/code&gt; values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use &lt;code&gt;fileExtension&lt;/code&gt; value. To update content file, set &lt;code&gt;updateContentFile&lt;/code&gt; to &lt;code&gt;true&lt;/code&gt; and upload the file using URL in &lt;code&gt;payloadURL.url&lt;/code&gt; in response body. &lt;code&gt;shareCode&lt;/code&gt; format should follows: Max length: 7 Available characters: abcdefhkpqrstuxyz &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
     */
    updateContentS3_ByChannelId_ByContentId,
    /**
     * Delete existing screenshot from a content
     */
    deleteScreenshot_ByContentId_ByScreenshotId,
    /**
     * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
     */
    deleteContent_ByUserId_ByChannelId_ByContentId,
    /**
     * @deprecated
     * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.\n All request body are required except preview, tags and customAttributes.
     */
    updateContent_ByUserId_ByChannelId_ByContentId,
    /**
     * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;. All request body are required except &lt;code&gt;payload&lt;/code&gt;, &lt;code&gt;preview&lt;/code&gt;, &lt;code&gt;tags&lt;/code&gt;,&lt;code&gt;contentType&lt;/code&gt;, &lt;code&gt;updateContentFile&lt;/code&gt;, &lt;code&gt;customAttributes&lt;/code&gt; and &lt;code&gt;shareCode&lt;/code&gt;. &lt;code&gt;contentType&lt;/code&gt; values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use &lt;code&gt;fileExtension&lt;/code&gt; value. To update content file, set &lt;code&gt;updateContentFile&lt;/code&gt; to &lt;code&gt;true&lt;/code&gt; and upload the file using URL in &lt;code&gt;payloadURL.url&lt;/code&gt; in response body. &lt;code&gt;shareCode&lt;/code&gt; format should follows: Max length: 7 Available characters: abcdefhkpqrstuxyz &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
     */
    updateContentS3_ByUserId_ByChannelId_ByContentId,
    /**
     * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
     */
    deleteContentSharecode_ByUserId_ByChannelId_ByShareCode,
    /**
     * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;. All request body are required except &lt;code&gt;payload&lt;/code&gt;, &lt;code&gt;preview&lt;/code&gt;, &lt;code&gt;tags&lt;/code&gt;,&lt;code&gt;contentType&lt;/code&gt;, &lt;code&gt;updateContentFile&lt;/code&gt;, &lt;code&gt;customAttributes&lt;/code&gt; and &lt;code&gt;shareCode&lt;/code&gt;. &lt;code&gt;contentType&lt;/code&gt; values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use &lt;code&gt;fileExtension&lt;/code&gt; value. To update content file, set &lt;code&gt;updateContentFile&lt;/code&gt; to &lt;code&gt;true&lt;/code&gt; and upload the file using URL in &lt;code&gt;payloadURL.url&lt;/code&gt; in response body. &lt;code&gt;shareCode&lt;/code&gt; format should follows: Max length: 7 Available characters: abcdefhkpqrstuxyz &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
     */
    updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode
  }
}
