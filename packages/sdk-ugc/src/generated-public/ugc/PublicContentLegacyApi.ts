/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { ContentDownloadResponse } from './definitions/ContentDownloadResponse'
import { ContentDownloadResponseArray } from './definitions/ContentDownloadResponseArray'
import { CreateContentResponse } from './definitions/CreateContentResponse'
import { CreateScreenshotRequest } from './definitions/CreateScreenshotRequest'
import { CreateScreenshotResponse } from './definitions/CreateScreenshotResponse'
import { GetContentPreviewResponse } from './definitions/GetContentPreviewResponse'
import { PaginatedContentDownloadResponse } from './definitions/PaginatedContentDownloadResponse'
import { PublicContentLegacy$ } from './endpoints/PublicContentLegacy$'
import { PublicCreateContentRequestS3 } from './definitions/PublicCreateContentRequestS3'
import { PublicGetContentBulkRequest } from './definitions/PublicGetContentBulkRequest'
import { UpdateContentRequest } from './definitions/UpdateContentRequest'
import { UpdateScreenshotRequest } from './definitions/UpdateScreenshotRequest'
import { UpdateScreenshotResponse } from './definitions/UpdateScreenshotResponse'

export function PublicContentLegacyApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Public user can access without token or if token specified, requires valid user token. For advance tag filtering supports & as AND operator and | as OR operator and parentheses () for priority. e.g: <code>tags=red</code> <code>tags=red&animal</code> <code>tags=red|animal</code> <code>tags=red&animal|wild</code> <code>tags=red&(animal|wild)</code> The precedence of logical operator is AND > OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore <code>_</code> and dash <code>-</code> Allowed character for operator: <code>&</code> <code>|</code> <code>(</code> <code>)</code> <b>Please note that value of tags query param should be URL encoded</b>
   */
  async function getContents(queryParams?: {
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
  }): Promise<PaginatedContentDownloadResponse> {
    const $ = new PublicContentLegacy$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getContents(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Maximum requested Ids: 100. Public user can access without token or if token specified, requires valid user token
   */
  async function createContentBulk(data: PublicGetContentBulkRequest): Promise<ContentDownloadResponseArray> {
    const $ = new PublicContentLegacy$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createContentBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  async function getContent_ByContentId(contentId: string): Promise<ContentDownloadResponse> {
    const $ = new PublicContentLegacy$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getContent_ByContentId(contentId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public user can access without token or if token specified, required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]</b>.
   */
  async function getContents_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<PaginatedContentDownloadResponse> {
    const $ = new PublicContentLegacy$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getContents_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Requires valid user token</p><p><b>NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content</b></p>
   */
  async function getPreview_ByContentId(contentId: string): Promise<GetContentPreviewResponse> {
    const $ = new PublicContentLegacy$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPreview_ByContentId(contentId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Requires valid user token. For advance tag filtering supports & as AND operator and | as OR operator and parentheses () for priority. e.g: <code>tags=red</code> <code>tags=red&animal</code> <code>tags=red|animal</code> <code>tags=red&animal|wild</code> <code>tags=red&(animal|wild)</code> The precedence of logical operator is AND > OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore <code>_</code> and dash <code>-</code> Allowed character for operator: <code>&</code> <code>|</code> <code>(</code> <code>)</code> <b>Please note that value of tags query param should be URL encoded</b>
   */
  async function getContents_ByChannelId(
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
  ): Promise<PaginatedContentDownloadResponse> {
    const $ = new PublicContentLegacy$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getContents_ByChannelId(channelId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  async function getContentSharecode_ByShareCode(shareCode: string): Promise<ContentDownloadResponse> {
    const $ = new PublicContentLegacy$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getContentSharecode_ByShareCode(shareCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]</b>.\n All request body are required except payload, preview, tags, contentType and customAttributes. contentType values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use fileExtension value. <br><p><b>NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content</b></p>
   */
  async function createContentS3_ByUserId_ByChannelId(
    userId: string,
    channelId: string,
    data: PublicCreateContentRequestS3
  ): Promise<CreateContentResponse> {
    const $ = new PublicContentLegacy$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createContentS3_ByUserId_ByChannelId(userId, channelId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]</b>.\n Maximum description length: 1024.
   */
  async function updateScreenshot_ByUserId_ByContentId(
    contentId: string,
    userId: string,
    data: UpdateScreenshotRequest
  ): Promise<UpdateScreenshotResponse> {
    const $ = new PublicContentLegacy$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateScreenshot_ByUserId_ByContentId(contentId, userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]</b>.\n All request body are required except for contentType field. contentType values is used to enforce the Content-Type header needed by the client to upload the content using the presigned URL. If not specified, it will use fileExtension value. Supported file extensions: pjp, jpg, jpeg, jfif, bmp, png. \n Maximum description length: 1024.
   */
  async function createScreenshot_ByUserId_ByContentId(
    contentId: string,
    userId: string,
    data: CreateScreenshotRequest
  ): Promise<CreateScreenshotResponse> {
    const $ = new PublicContentLegacy$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createScreenshot_ByUserId_ByContentId(contentId, userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]</b>.
   */
  async function deleteContent_ByUserId_ByChannelId_ByContentId(userId: string, channelId: string, contentId: string): Promise<unknown> {
    const $ = new PublicContentLegacy$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteContent_ByUserId_ByChannelId_ByContentId(userId, channelId, contentId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]</b>. All request body are required except payload, preview, tags, contentType, updateContentFile and customAttributes. contentType values is used to enforce the Content-Type header needed by the client to upload the content using the S3 presigned URL. If not specified, it will use fileExtension value. To update content's file, set <code>updateContentFile</code> to <code>true</code> and upload the file using URL in <code>payloadURL.url</code> in response body. <br><p><b>NOTE: Preview is Legacy Code, please use Screenshot for better solution to display preview of a content</b></p>
   */
  async function updateContentS3_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string,
    data: UpdateContentRequest
  ): Promise<CreateContentResponse> {
    const $ = new PublicContentLegacy$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateContentS3_ByUserId_ByChannelId_ByContentId(userId, channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]</b>.
   */
  async function deleteScreenshot_ByUserId_ByContentId_ByScreenshotId(
    contentId: string,
    screenshotId: string,
    userId: string
  ): Promise<unknown> {
    const $ = new PublicContentLegacy$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteScreenshot_ByUserId_ByContentId_ByScreenshotId(contentId, screenshotId, userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getContents,
    createContentBulk,
    getContent_ByContentId,
    getContents_ByUserId,
    getPreview_ByContentId,
    getContents_ByChannelId,
    getContentSharecode_ByShareCode,
    createContentS3_ByUserId_ByChannelId,
    updateScreenshot_ByUserId_ByContentId,
    createScreenshot_ByUserId_ByContentId,
    deleteContent_ByUserId_ByChannelId_ByContentId,
    updateContentS3_ByUserId_ByChannelId_ByContentId,
    deleteScreenshot_ByUserId_ByContentId_ByScreenshotId
  }
}
