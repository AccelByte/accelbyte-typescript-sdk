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
import { ContentDownloadResponseV2 } from './definitions/ContentDownloadResponseV2'
import { ContentDownloadResponseV2Array } from './definitions/ContentDownloadResponseV2Array'
import { ContentRequestV2 } from './definitions/ContentRequestV2'
import { CreateContentResponseV2 } from './definitions/CreateContentResponseV2'
import { CreateScreenshotRequest } from './definitions/CreateScreenshotRequest'
import { CreateScreenshotResponse } from './definitions/CreateScreenshotResponse'
import { GenerateContentUploadUrlRequest } from './definitions/GenerateContentUploadUrlRequest'
import { GenerateContentUploadUrlResponse } from './definitions/GenerateContentUploadUrlResponse'
import { PaginatedContentDownloadResponseV2 } from './definitions/PaginatedContentDownloadResponseV2'
import { PublicContentV2$ } from './endpoints/PublicContentV2$'
import { PublicGetContentBulkRequest } from './definitions/PublicGetContentBulkRequest'
import { UpdateContentRequestV2 } from './definitions/UpdateContentRequestV2'
import { UpdateScreenshotRequest } from './definitions/UpdateScreenshotRequest'
import { UpdateScreenshotResponse } from './definitions/UpdateScreenshotResponse'

export function PublicContentV2Api(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   *  For advance tag filtering supports & as AND operator and | as OR operator and parentheses () for priority. e.g: <code>tags=red</code> <code>tags=red&animal</code> <code>tags=red|animal</code> <code>tags=red&animal|wild</code> <code>tags=red&(animal|wild)</code> The precedence of logical operator is AND > OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore <code>_</code> and dash <code>-</code> Allowed character for operator: <code>&</code> <code>|</code> <code>(</code> <code>)</code> <b>Please note that value of tags query param should be URL encoded</b>
   */
  async function getContents(queryParams?: {
    name?: string | null
    type?: string | null
    subType?: string | null
    tags?: string[]
    limit?: number
    offset?: number
    sortBy?: string | null
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
   * Public user can access without token or if token specified, required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]</b>.
   */
  async function getContents_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<PaginatedContentDownloadResponseV2> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getContents_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  async function getContents_ByChannelId(
    channelId: string,
    queryParams?: { limit?: number; offset?: number }
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
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]</b>.
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
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]</b>. Maximum description length: 1024.
   */
  async function updateScreenshot_ByUserId_ByContentId(
    contentId: string,
    userId: string,
    data: UpdateScreenshotRequest
  ): Promise<UpdateScreenshotResponse> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateScreenshot_ByUserId_ByContentId(contentId, userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [CREATE]</b>. All request body are required except for contentType field. contentType values is used to enforce the Content-Type header needed by the client to upload the content using the presigned URL. If not specified, it will use fileExtension value. Supported file extensions: pjp, jpg, jpeg, jfif, bmp, png. Maximum description length: 1024.
   */
  async function createScreenshot_ByUserId_ByContentId(
    contentId: string,
    userId: string,
    data: CreateScreenshotRequest
  ): Promise<CreateScreenshotResponse> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createScreenshot_ByUserId_ByContentId(contentId, userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]</b>.
   */
  async function deleteContent_ByUserId_ByChannelId_ByContentId(userId: string, channelId: string, contentId: string): Promise<unknown> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteContent_ByUserId_ByChannelId_ByContentId(userId, channelId, contentId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]</b>.
   */
  async function patchContent_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string,
    data: UpdateContentRequestV2
  ): Promise<ContentDownloadResponseV2> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchContent_ByUserId_ByChannelId_ByContentId(userId, channelId, contentId, data)
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
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteScreenshot_ByUserId_ByContentId_ByScreenshotId(contentId, screenshotId, userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [UPDATE]</b>.
   */
  async function patchUploadUrl_ByUserId_ByChannelId_ByContentId(
    channelId: string,
    contentId: string,
    userId: string,
    data: GenerateContentUploadUrlRequest
  ): Promise<GenerateContentUploadUrlResponse> {
    const $ = new PublicContentV2$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchUploadUrl_ByUserId_ByChannelId_ByContentId(channelId, contentId, userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getContents,
    createContentBulk,
    getContent_ByContentId,
    getContents_ByUserId,
    getContents_ByChannelId,
    getContentSharecode_ByShareCode,
    createContent_ByUserId_ByChannelId,
    updateScreenshot_ByUserId_ByContentId,
    createScreenshot_ByUserId_ByContentId,
    deleteContent_ByUserId_ByChannelId_ByContentId,
    patchContent_ByUserId_ByChannelId_ByContentId,
    deleteScreenshot_ByUserId_ByContentId_ByScreenshotId,
    patchUploadUrl_ByUserId_ByChannelId_ByContentId
  }
}
