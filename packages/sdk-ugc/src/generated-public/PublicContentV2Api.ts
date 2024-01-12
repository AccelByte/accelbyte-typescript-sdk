/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { ContentDownloadResponseV2 } from '../generated-definitions/ContentDownloadResponseV2.js'
import { ContentDownloadResponseV2Array } from '../generated-definitions/ContentDownloadResponseV2Array.js'
import { ContentRequestV2 } from '../generated-definitions/ContentRequestV2.js'
import { CreateContentResponseV2 } from '../generated-definitions/CreateContentResponseV2.js'
import { CreateScreenshotRequest } from '../generated-definitions/CreateScreenshotRequest.js'
import { CreateScreenshotResponse } from '../generated-definitions/CreateScreenshotResponse.js'
import { GenerateContentUploadUrlRequest } from '../generated-definitions/GenerateContentUploadUrlRequest.js'
import { GenerateContentUploadUrlResponse } from '../generated-definitions/GenerateContentUploadUrlResponse.js'
import { GetContentBulkByShareCodesRequest } from '../generated-definitions/GetContentBulkByShareCodesRequest.js'
import { PaginatedContentDownloadResponseV2 } from '../generated-definitions/PaginatedContentDownloadResponseV2.js'
import { PublicContentV2$ } from './endpoints/PublicContentV2$.js'
import { PublicGetContentBulkRequest } from '../generated-definitions/PublicGetContentBulkRequest.js'
import { UpdateContentRequestV2 } from '../generated-definitions/UpdateContentRequestV2.js'
import { UpdateContentResponseV2 } from '../generated-definitions/UpdateContentResponseV2.js'
import { UpdateContentShareCodeRequest } from '../generated-definitions/UpdateContentShareCodeRequest.js'
import { UpdateFileLocationRequest } from '../generated-definitions/UpdateFileLocationRequest.js'
import { UpdateScreenshotRequest } from '../generated-definitions/UpdateScreenshotRequest.js'
import { UpdateScreenshotResponse } from '../generated-definitions/UpdateScreenshotResponse.js'

export function PublicContentV2Api(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   *  For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses () for priority. e.g: &lt;code&gt;tags=red&lt;/code&gt; &lt;code&gt;tags=red&amp;animal&lt;/code&gt; &lt;code&gt;tags=red|animal&lt;/code&gt; &lt;code&gt;tags=red&amp;animal|wild&lt;/code&gt; &lt;code&gt;tags=red&amp;(animal|wild)&lt;/code&gt; The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore &lt;code&gt;_&lt;/code&gt; and dash &lt;code&gt;-&lt;/code&gt; Allowed character for operator: &lt;code&gt;&amp;&lt;/code&gt; &lt;code&gt;|&lt;/code&gt; &lt;code&gt;(&lt;/code&gt; &lt;code&gt;)&lt;/code&gt; &lt;b&gt;Please note that value of tags query param should be URL encoded&lt;/b&gt;
   */
  async function getContents(queryParams?: {
    isOfficial?: boolean | null
    limit?: number
    name?: string | null
    offset?: number
    sortBy?: string | null
    subType?: string | null
    tags?: string[]
    type?: string | null
  }): Promise<PaginatedContentDownloadResponseV2> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getContents(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Maximum requested Ids: 100. Public user can access without token or if token specified, requires valid user token
   */
  async function createContentBulk(data: PublicGetContentBulkRequest): Promise<ContentDownloadResponseV2Array> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createContentBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  async function getContent_ByContentId(contentId: string): Promise<ContentDownloadResponseV2> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getContent_ByContentId(contentId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public user can access without token or if token specified, required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;.
   */
  async function getContents_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null }
  ): Promise<PaginatedContentDownloadResponseV2> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getContents_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Require valid user token. Maximum sharecodes per request 100
   */
  async function createContentSharecodeBulk(data: GetContentBulkByShareCodesRequest): Promise<ContentDownloadResponseV2Array> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createContentSharecodeBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  async function getContents_ByChannelId(
    channelId: string,
    queryParams?: { limit?: number; name?: string | null; offset?: number; sortBy?: string | null }
  ): Promise<PaginatedContentDownloadResponseV2> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getContents_ByChannelId(channelId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  async function getContentSharecode_ByShareCode(shareCode: string): Promise<ContentDownloadResponseV2> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getContentSharecode_ByShareCode(shareCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]&lt;/b&gt;.
   */
  async function createContent_ByUserId_ByChannelId(
    userId: string,
    channelId: string,
    data: ContentRequestV2
  ): Promise<CreateContentResponseV2> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createContent_ByUserId_ByChannelId(userId, channelId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]&lt;/b&gt;. All request body are required except for contentType field. contentType values is used to enforce the Content-Type header needed by the client to upload the content using the presigned URL. If not specified, it will use fileExtension value. Supported file extensions: pjp, jpg, jpeg, jfif, bmp, png. Maximum description length: 1024.
   */
  async function createScreenshot_ByUserId_ByContentId(
    userId: string,
    contentId: string,
    data: CreateScreenshotRequest
  ): Promise<CreateScreenshotResponse> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createScreenshot_ByUserId_ByContentId(userId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;. Maximum description length: 1024.
   */
  async function updateScreenshot_ByUserId_ByContentId(
    userId: string,
    contentId: string,
    data: UpdateScreenshotRequest
  ): Promise<UpdateScreenshotResponse> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateScreenshot_ByUserId_ByContentId(userId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
   */
  async function deleteContent_ByUserId_ByChannelId_ByContentId(userId: string, channelId: string, contentId: string): Promise<unknown> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteContent_ByUserId_ByChannelId_ByContentId(userId, channelId, contentId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.
   */
  async function patchContent_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string,
    data: UpdateContentRequestV2
  ): Promise<UpdateContentResponseV2> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchContent_ByUserId_ByChannelId_ByContentId(userId, channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
   */
  async function deleteScreenshot_ByUserId_ByContentId_ByScreenshotId(
    userId: string,
    contentId: string,
    screenshotId: string
  ): Promise<unknown> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteScreenshot_ByUserId_ByContentId_ByScreenshotId(userId, contentId, screenshotId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT:SHARECODE [UPDATE]&lt;/b&gt;.&lt;br&gt; This endpoint is used to modify the shareCode of a content. However, this operation is restricted by default and requires the above permission to be granted to the User role.&lt;br&gt; &lt;code&gt;shareCode&lt;/code&gt; format should follows: Max length: 7 Available characters: abcdefhkpqrstuxyz
   */
  async function patchSharecode_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string,
    data: UpdateContentShareCodeRequest
  ): Promise<CreateContentResponseV2> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchSharecode_ByUserId_ByChannelId_ByContentId(userId, channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.
   */
  async function patchUploadUrl_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string,
    data: GenerateContentUploadUrlRequest
  ): Promise<GenerateContentUploadUrlResponse> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchUploadUrl_ByUserId_ByChannelId_ByContentId(userId, channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
   */
  async function deleteContentSharecode_ByUserId_ByChannelId_ByShareCode(
    userId: string,
    channelId: string,
    shareCode: string
  ): Promise<unknown> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteContentSharecode_ByUserId_ByChannelId_ByShareCode(userId, channelId, shareCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint should be used after calling generate upload url endpoint to commit the changes. Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.
   */
  async function patchFileLocation_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string,
    data: UpdateFileLocationRequest
  ): Promise<UpdateContentResponseV2> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchFileLocation_ByUserId_ByChannelId_ByContentId(userId, channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]&lt;/b&gt;.
   */
  async function updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode(
    userId: string,
    channelId: string,
    shareCode: string,
    data: UpdateContentRequestV2
  ): Promise<CreateContentResponseV2> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode(userId, channelId, shareCode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getContents,
    createContentBulk,
    getContent_ByContentId,
    getContents_ByUserId,
    createContentSharecodeBulk,
    getContents_ByChannelId,
    getContentSharecode_ByShareCode,
    createContent_ByUserId_ByChannelId,
    createScreenshot_ByUserId_ByContentId,
    updateScreenshot_ByUserId_ByContentId,
    deleteContent_ByUserId_ByChannelId_ByContentId,
    patchContent_ByUserId_ByChannelId_ByContentId,
    deleteScreenshot_ByUserId_ByContentId_ByScreenshotId,
    patchSharecode_ByUserId_ByChannelId_ByContentId,
    patchUploadUrl_ByUserId_ByChannelId_ByContentId,
    deleteContentSharecode_ByUserId_ByChannelId_ByShareCode,
    patchFileLocation_ByUserId_ByChannelId_ByContentId,
    updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode
  }
}
