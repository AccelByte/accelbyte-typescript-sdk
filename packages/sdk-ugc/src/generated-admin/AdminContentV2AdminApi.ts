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
import { AdminContentRequestV2 } from '../generated-definitions/AdminContentRequestV2.js'
import { AdminContentV2Admin$ } from './endpoints/AdminContentV2Admin$.js'
import { AdminGetContentBulkRequest } from '../generated-definitions/AdminGetContentBulkRequest.js'
import { AdminUpdateContentRequestV2 } from '../generated-definitions/AdminUpdateContentRequestV2.js'
import { ContentDownloadResponse } from '../generated-definitions/ContentDownloadResponse.js'
import { ContentDownloadResponseV2 } from '../generated-definitions/ContentDownloadResponseV2.js'
import { ContentDownloadResponseV2Array } from '../generated-definitions/ContentDownloadResponseV2Array.js'
import { CreateContentResponseV2 } from '../generated-definitions/CreateContentResponseV2.js'
import { CreateScreenshotRequest } from '../generated-definitions/CreateScreenshotRequest.js'
import { CreateScreenshotResponse } from '../generated-definitions/CreateScreenshotResponse.js'
import { GenerateContentUploadUrlRequest } from '../generated-definitions/GenerateContentUploadUrlRequest.js'
import { GenerateContentUploadUrlResponse } from '../generated-definitions/GenerateContentUploadUrlResponse.js'
import { GetContentBulkByShareCodesRequest } from '../generated-definitions/GetContentBulkByShareCodesRequest.js'
import { HideContentRequest } from '../generated-definitions/HideContentRequest.js'
import { ListContentVersionsResponse } from '../generated-definitions/ListContentVersionsResponse.js'
import { PaginatedContentDownloadResponseV2 } from '../generated-definitions/PaginatedContentDownloadResponseV2.js'
import { UpdateContentResponseV2 } from '../generated-definitions/UpdateContentResponseV2.js'
import { UpdateFileLocationRequest } from '../generated-definitions/UpdateFileLocationRequest.js'
import { UpdateScreenshotRequest } from '../generated-definitions/UpdateScreenshotRequest.js'
import { UpdateScreenshotResponse } from '../generated-definitions/UpdateScreenshotResponse.js'

export function AdminContentV2AdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses ( ) for priority. e.g: *tags=red* *tags=red&amp;animal* *tags=red|animal* *tags=red&amp;animal|wild* *tags=red&amp;(animal|wild)* The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore _ and dash - Allowed character for operator: &amp; | ( ) **Please note that value of tags query param should be URL encoded**
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
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getContents(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Maximum contentId per request 100
   */
  async function createContentBulk(data: AdminGetContentBulkRequest): Promise<ContentDownloadResponseV2Array> {
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createContentBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get content by content ID
   */
  async function getContent_ByContentId(contentId: string): Promise<ContentDownloadResponseV2> {
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getContent_ByContentId(contentId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user cotent
   */
  async function getContents_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null }
  ): Promise<PaginatedContentDownloadResponseV2> {
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getContents_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Maximum sharecodes per request 100
   */
  async function createContentSharecodeBulk(data: GetContentBulkByShareCodesRequest): Promise<ContentDownloadResponseV2Array> {
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createContentSharecodeBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * List content specific to a channel
   */
  async function getContents_ByChannelId(
    channelId: string,
    queryParams?: { limit?: number; name?: string | null; offset?: number; sortBy?: string | null }
  ): Promise<PaginatedContentDownloadResponseV2> {
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getContents_ByChannelId(channelId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create official content
   */
  async function createContent_ByChannelId(channelId: string, data: AdminContentRequestV2): Promise<CreateContentResponseV2> {
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createContent_ByChannelId(channelId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Content&#39;s payload versions created when UGC is created or updated with &lt;code&gt;updateContentFile&lt;/code&gt; set to true. Only list up to 10 latest versions.
   */
  async function getVersions_ByContentId(contentId: string): Promise<ListContentVersionsResponse> {
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getVersions_ByContentId(contentId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get content by share code
   */
  async function getContentSharecode_ByShareCode(shareCode: string): Promise<ContentDownloadResponseV2> {
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getContentSharecode_ByShareCode(shareCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint used to request upload URL from content&#39;s screenshot. If *contentType* is not specified, it will use *fileExtension* value. Supported file extensions: pjp, jpg, jpeg, jfif, bmp, png. Maximum description length: 1024
   */
  async function createScreenshot_ByContentId(contentId: string, data: CreateScreenshotRequest): Promise<CreateScreenshotResponse> {
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createScreenshot_ByContentId(contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Maximum description length: 1024
   */
  async function updateScreenshot_ByContentId(contentId: string, data: UpdateScreenshotRequest): Promise<UpdateScreenshotResponse> {
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateScreenshot_ByContentId(contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Hide/Unhide user&#39;s generated contents
   */
  async function updateHide_ByUserId_ByContentId(
    userId: string,
    contentId: string,
    data: HideContentRequest
  ): Promise<CreateContentResponseV2> {
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateHide_ByUserId_ByContentId(userId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete existing official content
   */
  async function deleteContent_ByChannelId_ByContentId(channelId: string, contentId: string): Promise<unknown> {
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteContent_ByChannelId_ByContentId(channelId, contentId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update existing official content
   */
  async function patchContent_ByChannelId_ByContentId(
    channelId: string,
    contentId: string,
    data: AdminUpdateContentRequestV2
  ): Promise<UpdateContentResponseV2> {
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.patchContent_ByChannelId_ByContentId(channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Rollback content&#39;s payload to specified version
   */
  async function updateRollback_ByContentId_ByVersionId(contentId: string, versionId: string): Promise<ContentDownloadResponse> {
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateRollback_ByContentId_ByVersionId(contentId, versionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete screenshot from a content
   */
  async function deleteScreenshot_ByContentId_ByScreenshotId(contentId: string, screenshotId: string): Promise<unknown> {
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteScreenshot_ByContentId_ByScreenshotId(contentId, screenshotId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Generate official content upload URL
   */
  async function patchUploadUrl_ByChannelId_ByContentId(
    channelId: string,
    contentId: string,
    data: GenerateContentUploadUrlRequest
  ): Promise<GenerateContentUploadUrlResponse> {
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.patchUploadUrl_ByChannelId_ByContentId(channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint should be used after calling generate official content upload url endpoint to commit the changes
   */
  async function patchFileLocation_ByChannelId_ByContentId(
    channelId: string,
    contentId: string,
    data: UpdateFileLocationRequest
  ): Promise<UpdateContentResponseV2> {
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.patchFileLocation_ByChannelId_ByContentId(channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete user content by content ID
   */
  async function deleteContent_ByUserId_ByChannelId_ByContentId(userId: string, channelId: string, contentId: string): Promise<unknown> {
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteContent_ByUserId_ByChannelId_ByContentId(userId, channelId, contentId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update existing user content
   */
  async function patchContent_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string,
    data: AdminUpdateContentRequestV2
  ): Promise<UpdateContentResponseV2> {
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.patchContent_ByUserId_ByChannelId_ByContentId(userId, channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * generate user content upload URL
   */
  async function patchUploadUrl_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string,
    data: GenerateContentUploadUrlRequest
  ): Promise<GenerateContentUploadUrlResponse> {
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.patchUploadUrl_ByUserId_ByChannelId_ByContentId(userId, channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete content by share code
   */
  async function deleteContentSharecode_ByUserId_ByChannelId_ByShareCode(
    userId: string,
    channelId: string,
    shareCode: string
  ): Promise<unknown> {
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteContentSharecode_ByUserId_ByChannelId_ByShareCode(userId, channelId, shareCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint should be used after calling generate user content upload url endpoint to commit the changes
   */
  async function patchFileLocation_ByUserId_ByChannelId_ByContentId(
    userId: string,
    channelId: string,
    contentId: string,
    data: UpdateFileLocationRequest
  ): Promise<UpdateContentResponseV2> {
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.patchFileLocation_ByUserId_ByChannelId_ByContentId(userId, channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * *shareCode* format should follows: &#34;Max length: 7 &#34;Available characters: abcdefhkpqrstuxyz
   */
  async function updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode(
    userId: string,
    channelId: string,
    shareCode: string,
    data: AdminUpdateContentRequestV2
  ): Promise<CreateContentResponseV2> {
    const $ = new AdminContentV2Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
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
    createContent_ByChannelId,
    getVersions_ByContentId,
    getContentSharecode_ByShareCode,
    createScreenshot_ByContentId,
    updateScreenshot_ByContentId,
    updateHide_ByUserId_ByContentId,
    deleteContent_ByChannelId_ByContentId,
    patchContent_ByChannelId_ByContentId,
    updateRollback_ByContentId_ByVersionId,
    deleteScreenshot_ByContentId_ByScreenshotId,
    patchUploadUrl_ByChannelId_ByContentId,
    patchFileLocation_ByChannelId_ByContentId,
    deleteContent_ByUserId_ByChannelId_ByContentId,
    patchContent_ByUserId_ByChannelId_ByContentId,
    patchUploadUrl_ByUserId_ByChannelId_ByContentId,
    deleteContentSharecode_ByUserId_ByChannelId_ByShareCode,
    patchFileLocation_ByUserId_ByChannelId_ByContentId,
    updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode
  }
}
