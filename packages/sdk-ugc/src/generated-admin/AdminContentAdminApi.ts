/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
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
import { AdminContentAdmin$ } from './endpoints/AdminContentAdmin$.js'

export function AdminContentAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;.
   */
  async function getContents(queryParams?: { limit?: number; offset?: number }): Promise<PaginatedContentDownloadResponse> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getContents(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt;. Maximum contentId per request 100
   */
  async function createContentBulk(data: AdminGetContentBulkRequest): Promise<ContentDownloadResponseArray> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createContentBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt; For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses () for priority. e.g: &lt;code&gt;tags=red&lt;/code&gt; &lt;code&gt;tags=red&amp;animal&lt;/code&gt; &lt;code&gt;tags=red|animal&lt;/code&gt; &lt;code&gt;tags=red&amp;animal|wild&lt;/code&gt; &lt;code&gt;tags=red&amp;(animal|wild)&lt;/code&gt; The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore &lt;code&gt;_&lt;/code&gt; and dash &lt;code&gt;-&lt;/code&gt; Allowed character for operator: &lt;code&gt;&amp;&lt;/code&gt; &lt;code&gt;|&lt;/code&gt; &lt;code&gt;(&lt;/code&gt; &lt;code&gt;)&lt;/code&gt; &lt;b&gt;Please note that value of tags query param should be URL encoded&lt;/b&gt;
   */
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
  }): Promise<PaginatedContentDownloadResponse> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getContentsSearch(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt;.
   */
  async function getContent_ByContentId(contentId: string): Promise<ContentDownloadResponse> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getContent_ByContentId(contentId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;.
   */
  async function getContents_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<PaginatedContentDownloadResponse> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getContents_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt;. Maximum sharecodes per request 100
   */
  async function createContentSharecodeBulk(data: GetContentBulkByShareCodesRequest): Promise<ContentDownloadResponseArray> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createContentSharecodeBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
   */
  async function getPreview_ByContentId(contentId: string): Promise<GetContentPreviewResponse> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getPreview_ByContentId(contentId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]&lt;/b&gt;.\n All request body are required except preview, tags and customAttributes.
   */
  async function createContent_ByChannelId_DEPRECATED(channelId: string, data: CreateContentRequest): Promise<CreateContentResponse> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createContent_ByChannelId_DEPRECATED(channelId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt; Content&#39;s payload versions created when UGC is created or updated with &lt;code&gt;updateContentFile&lt;/code&gt; set to true. Only list up to 10 latest versions.
   */
  async function getVersions_ByContentId(contentId: string): Promise<ListContentVersionsResponse> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getVersions_ByContentId(contentId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt;.
   */
  async function getContentSharecode_ByShareCode(shareCode: string): Promise<ContentDownloadResponse> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getContentSharecode_ByShareCode(shareCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]&lt;/b&gt;. All request body are required except &lt;code&gt;preview&lt;/code&gt;, &lt;code&gt;tags&lt;/code&gt;, &lt;code&gt;contentType&lt;/code&gt;, &lt;code&gt;customAttributes&lt;/code&gt; and &lt;code&gt;shareCode&lt;/code&gt;. &lt;code&gt;contentType&lt;/code&gt; values is used to enforce the Content-Type header needed by the client when uploading the content using the S3 presigned URL. If not specified, it will use fileExtension value. &lt;code&gt;shareCode&lt;/code&gt; format should follows: Length: 7 Available characters: abcdefhkpqrstuxyz &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
   */
  async function createContentS3_ByChannelId(channelId: string, data: CreateContentRequestS3): Promise<CreateContentResponse> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createContentS3_ByChannelId(channelId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * All request body are required except for *contentType* field. *contentType* values is used to enforce the *Content-Type* header needed by the client to upload the content using the presigned URL. If not specified, it will use *fileExtension* value. Supported file extensions: *pjp*, *jpg*, *jpeg*, *jfif*, *bmp*, *png*. Maximum description length: 1024
   */
  async function createScreenshot_ByContentId(contentId: string, data: CreateScreenshotRequest): Promise<CreateScreenshotResponse> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createScreenshot_ByContentId(contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Maximum description length: 1024
   */
  async function updateScreenshot_ByContentId(contentId: string, data: UpdateScreenshotRequest): Promise<UpdateScreenshotResponse> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateScreenshot_ByContentId(contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CONTENT [READ]&lt;/b&gt; For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses () for priority. e.g: &lt;code&gt;tags=red&lt;/code&gt; &lt;code&gt;tags=red&amp;animal&lt;/code&gt; &lt;code&gt;tags=red|animal&lt;/code&gt; &lt;code&gt;tags=red&amp;animal|wild&lt;/code&gt; &lt;code&gt;tags=red&amp;(animal|wild)&lt;/code&gt; The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore &lt;code&gt;_&lt;/code&gt; and dash &lt;code&gt;-&lt;/code&gt; Allowed character for operator: &lt;code&gt;&amp;&lt;/code&gt; &lt;code&gt;|&lt;/code&gt; &lt;code&gt;(&lt;/code&gt; &lt;code&gt;)&lt;/code&gt; &lt;b&gt;Please note that value of tags query param should be URL encoded&lt;/b&gt;
   */
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
  ): Promise<PaginatedContentDownloadResponse> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getContentsSearch_ByChannelId(channelId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.
   */
  async function updateHide_ByUserId_ByContentId(
    userId: string,
    contentId: string,
    data: HideContentRequest
  ): Promise<CreateContentResponse> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateHide_ByUserId_ByContentId(userId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
   */
  async function deleteContent_ByChannelId_ByContentId(channelId: string, contentId: string): Promise<unknown> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteContent_ByChannelId_ByContentId(channelId, contentId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.\n All request body are required except preview, tags and customAttributes.
   */
  async function updateContent_ByChannelId_ByContentId_DEPRECATED(
    channelId: string,
    contentId: string,
    data: CreateContentRequest
  ): Promise<CreateContentResponse> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateContent_ByChannelId_ByContentId_DEPRECATED(channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt; Rollback content&#39;s payload to specified version.
   */
  async function updateRollback_ByContentId_ByVersionId(contentId: string, versionId: string): Promise<ContentDownloadResponse> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateRollback_ByContentId_ByVersionId(contentId, versionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;. All request body are required except &lt;code&gt;payload&lt;/code&gt;, &lt;code&gt;preview&lt;/code&gt;, &lt;code&gt;tags&lt;/code&gt;,&lt;code&gt;contentType&lt;/code&gt;, &lt;code&gt;updateContentFile&lt;/code&gt;, &lt;code&gt;customAttributes&lt;/code&gt; and &lt;code&gt;shareCode&lt;/code&gt;. &lt;code&gt;contentType&lt;/code&gt; values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use &lt;code&gt;fileExtension&lt;/code&gt; value. To update content file, set &lt;code&gt;updateContentFile&lt;/code&gt; to &lt;code&gt;true&lt;/code&gt; and upload the file using URL in &lt;code&gt;payloadURL.url&lt;/code&gt; in response body. &lt;code&gt;shareCode&lt;/code&gt; format should follows: Max length: 7 Available characters: abcdefhkpqrstuxyz &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
   */
  async function updateContentS3_ByChannelId_ByContentId(
    channelId: string,
    contentId: string,
    data: AdminUpdateContentRequest
  ): Promise<CreateContentResponse> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateContentS3_ByChannelId_ByContentId(channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete existing screenshot from a content
   */
  async function deleteScreenshot_ByContentId_ByScreenshotId(contentId: string, screenshotId: string): Promise<unknown> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteScreenshot_ByContentId_ByScreenshotId(contentId, screenshotId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
   */
  async function deleteContent_ByUserId_ByChannelId_ByContentId(userId: string, channelId: string, contentId: string): Promise<unknown> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteContent_ByUserId_ByChannelId_ByContentId(userId, channelId, contentId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.\n All request body are required except preview, tags and customAttributes.
   */
  async function updateContent_ByUserId_ByChannelId_ByContentId_DEPRECATED(
    userId: string,
    channelId: string,
    contentId: string,
    data: CreateContentRequest
  ): Promise<CreateContentResponse> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateContent_ByUserId_ByChannelId_ByContentId_DEPRECATED(userId, channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;. All request body are required except &lt;code&gt;payload&lt;/code&gt;, &lt;code&gt;preview&lt;/code&gt;, &lt;code&gt;tags&lt;/code&gt;,&lt;code&gt;contentType&lt;/code&gt;, &lt;code&gt;updateContentFile&lt;/code&gt;, &lt;code&gt;customAttributes&lt;/code&gt; and &lt;code&gt;shareCode&lt;/code&gt;. &lt;code&gt;contentType&lt;/code&gt; values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use &lt;code&gt;fileExtension&lt;/code&gt; value. To update content file, set &lt;code&gt;updateContentFile&lt;/code&gt; to &lt;code&gt;true&lt;/code&gt; and upload the file using URL in &lt;code&gt;payloadURL.url&lt;/code&gt; in response body. &lt;code&gt;shareCode&lt;/code&gt; format should follows: Max length: 7 Available characters: abcdefhkpqrstuxyz &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
   */
  async function updateContentS3_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string,
    data: AdminUpdateContentRequest
  ): Promise<CreateContentResponse> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateContentS3_ByUserId_ByChannelId_ByContentId(userId, channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
   */
  async function deleteContentSharecode_ByUserId_ByChannelId_ByShareCode(
    userId: string,
    channelId: string,
    shareCode: string
  ): Promise<unknown> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteContentSharecode_ByUserId_ByChannelId_ByShareCode(userId, channelId, shareCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;. All request body are required except &lt;code&gt;payload&lt;/code&gt;, &lt;code&gt;preview&lt;/code&gt;, &lt;code&gt;tags&lt;/code&gt;,&lt;code&gt;contentType&lt;/code&gt;, &lt;code&gt;updateContentFile&lt;/code&gt;, &lt;code&gt;customAttributes&lt;/code&gt; and &lt;code&gt;shareCode&lt;/code&gt;. &lt;code&gt;contentType&lt;/code&gt; values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use &lt;code&gt;fileExtension&lt;/code&gt; value. To update content file, set &lt;code&gt;updateContentFile&lt;/code&gt; to &lt;code&gt;true&lt;/code&gt; and upload the file using URL in &lt;code&gt;payloadURL.url&lt;/code&gt; in response body. &lt;code&gt;shareCode&lt;/code&gt; format should follows: Max length: 7 Available characters: abcdefhkpqrstuxyz &lt;br&gt;&lt;p&gt;&lt;b&gt;NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content&lt;/b&gt;&lt;/p&gt;
   */
  async function updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode(
    userId: string,
    channelId: string,
    shareCode: string,
    data: AdminUpdateContentRequest
  ): Promise<CreateContentResponse> {
    const $ = new AdminContentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode(userId, channelId, shareCode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getContents,
    createContentBulk,
    getContentsSearch,
    getContent_ByContentId,
    getContents_ByUserId,
    createContentSharecodeBulk,
    getPreview_ByContentId,
    createContent_ByChannelId_DEPRECATED,
    getVersions_ByContentId,
    getContentSharecode_ByShareCode,
    createContentS3_ByChannelId,
    createScreenshot_ByContentId,
    updateScreenshot_ByContentId,
    getContentsSearch_ByChannelId,
    updateHide_ByUserId_ByContentId,
    deleteContent_ByChannelId_ByContentId,
    updateContent_ByChannelId_ByContentId_DEPRECATED,
    updateRollback_ByContentId_ByVersionId,
    updateContentS3_ByChannelId_ByContentId,
    deleteScreenshot_ByContentId_ByScreenshotId,
    deleteContent_ByUserId_ByChannelId_ByContentId,
    updateContent_ByUserId_ByChannelId_ByContentId_DEPRECATED,
    updateContentS3_ByUserId_ByChannelId_ByContentId,
    deleteContentSharecode_ByUserId_ByChannelId_ByShareCode,
    updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode
  }
}
