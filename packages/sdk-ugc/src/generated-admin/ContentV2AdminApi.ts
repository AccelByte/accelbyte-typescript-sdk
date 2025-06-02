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
import { AdminContentRequestV2 } from '../generated-definitions/AdminContentRequestV2.js'
import { AdminGetContentBulkRequest } from '../generated-definitions/AdminGetContentBulkRequest.js'
import { AdminUpdateContentRequestV2 } from '../generated-definitions/AdminUpdateContentRequestV2.js'
import { ContentDownloadResponse } from '../generated-definitions/ContentDownloadResponse.js'
import { ContentDownloadResponseV2 } from '../generated-definitions/ContentDownloadResponseV2.js'
import { ContentDownloadResponseV2Array } from '../generated-definitions/ContentDownloadResponseV2Array.js'
import { CopyContentRequest } from '../generated-definitions/CopyContentRequest.js'
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
import { ContentV2Admin$ } from './endpoints/ContentV2Admin$.js'

export function ContentV2AdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getContents_v2(queryParams?: {
    isOfficial?: boolean | null
    limit?: number
    name?: string | null
    offset?: number
    sortBy?: string | null
    subType?: string | null
    tags?: string[]
    type?: string | null
  }): Promise<AxiosResponse<PaginatedContentDownloadResponseV2>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContents_v2(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function fetchContentBulk_v2(data: AdminGetContentBulkRequest): Promise<AxiosResponse<ContentDownloadResponseV2Array>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchContentBulk_v2(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getContent_ByContentId_v2(contentId: string): Promise<AxiosResponse<ContentDownloadResponseV2>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContent_ByContentId_v2(contentId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getContents_ByUserId_v2(
    userId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null }
  ): Promise<AxiosResponse<PaginatedContentDownloadResponseV2>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContents_ByUserId_v2(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function fetchContentSharecodeBulk_v2(
    data: GetContentBulkByShareCodesRequest
  ): Promise<AxiosResponse<ContentDownloadResponseV2Array>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchContentSharecodeBulk_v2(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getContents_ByChannelId_v2(
    channelId: string,
    queryParams?: { limit?: number; name?: string | null; offset?: number; sortBy?: string | null }
  ): Promise<AxiosResponse<PaginatedContentDownloadResponseV2>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContents_ByChannelId_v2(channelId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createContent_ByChannelId_v2(
    channelId: string,
    data: AdminContentRequestV2
  ): Promise<AxiosResponse<CreateContentResponseV2>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createContent_ByChannelId_v2(channelId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getVersions_ByContentId_v2(contentId: string): Promise<AxiosResponse<ListContentVersionsResponse>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getVersions_ByContentId_v2(contentId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getContentSharecode_ByShareCode_v2(shareCode: string): Promise<AxiosResponse<ContentDownloadResponseV2>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContentSharecode_ByShareCode_v2(shareCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createScreenshot_ByContentId_v2(
    contentId: string,
    data: CreateScreenshotRequest
  ): Promise<AxiosResponse<CreateScreenshotResponse>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createScreenshot_ByContentId_v2(contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateScreenshot_ByContentId_v2(
    contentId: string,
    data: UpdateScreenshotRequest
  ): Promise<AxiosResponse<UpdateScreenshotResponse>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateScreenshot_ByContentId_v2(contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateHide_ByUserId_ByContentId_v2(
    userId: string,
    contentId: string,
    data: HideContentRequest
  ): Promise<AxiosResponse<CreateContentResponseV2>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateHide_ByUserId_ByContentId_v2(userId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteContent_ByChannelId_ByContentId_v2(channelId: string, contentId: string): Promise<AxiosResponse<unknown>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteContent_ByChannelId_ByContentId_v2(channelId, contentId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchContent_ByChannelId_ByContentId_v2(
    channelId: string,
    contentId: string,
    data: AdminUpdateContentRequestV2
  ): Promise<AxiosResponse<UpdateContentResponseV2>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchContent_ByChannelId_ByContentId_v2(channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRollback_ByContentId_ByVersionId_v2(
    contentId: string,
    versionId: string
  ): Promise<AxiosResponse<ContentDownloadResponse>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRollback_ByContentId_ByVersionId_v2(contentId, versionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createCopy_ByChannelId_ByContentId_v2(
    channelId: string,
    contentId: string,
    data: CopyContentRequest
  ): Promise<AxiosResponse<ContentDownloadResponseV2>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createCopy_ByChannelId_ByContentId_v2(channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteScreenshot_ByContentId_ByScreenshotId_v2(contentId: string, screenshotId: string): Promise<AxiosResponse<unknown>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteScreenshot_ByContentId_ByScreenshotId_v2(contentId, screenshotId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchUploadUrl_ByChannelId_ByContentId_v2(
    channelId: string,
    contentId: string,
    data: GenerateContentUploadUrlRequest
  ): Promise<AxiosResponse<GenerateContentUploadUrlResponse>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchUploadUrl_ByChannelId_ByContentId_v2(channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchFileLocation_ByChannelId_ByContentId_v2(
    channelId: string,
    contentId: string,
    data: UpdateFileLocationRequest
  ): Promise<AxiosResponse<UpdateContentResponseV2>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchFileLocation_ByChannelId_ByContentId_v2(channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteContent_ByUserId_ByChannelId_ByContentId_v2(
    userId: string,
    channelId: string,
    contentId: string
  ): Promise<AxiosResponse<unknown>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteContent_ByUserId_ByChannelId_ByContentId_v2(userId, channelId, contentId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchContent_ByUserId_ByChannelId_ByContentId_v2(
    userId: string,
    channelId: string,
    contentId: string,
    data: AdminUpdateContentRequestV2
  ): Promise<AxiosResponse<UpdateContentResponseV2>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchContent_ByUserId_ByChannelId_ByContentId_v2(userId, channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchUploadUrl_ByUserId_ByChannelId_ByContentId_v2(
    userId: string,
    channelId: string,
    contentId: string,
    data: GenerateContentUploadUrlRequest
  ): Promise<AxiosResponse<GenerateContentUploadUrlResponse>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchUploadUrl_ByUserId_ByChannelId_ByContentId_v2(userId, channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteContentSharecode_ByUserId_ByChannelId_ByShareCode_v2(
    userId: string,
    channelId: string,
    shareCode: string
  ): Promise<AxiosResponse<unknown>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteContentSharecode_ByUserId_ByChannelId_ByShareCode_v2(userId, channelId, shareCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchFileLocation_ByUserId_ByChannelId_ByContentId_v2(
    userId: string,
    channelId: string,
    contentId: string,
    data: UpdateFileLocationRequest
  ): Promise<AxiosResponse<UpdateContentResponseV2>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchFileLocation_ByUserId_ByChannelId_ByContentId_v2(userId, channelId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode_v2(
    userId: string,
    channelId: string,
    shareCode: string,
    data: AdminUpdateContentRequestV2
  ): Promise<AxiosResponse<CreateContentResponseV2>> {
    const $ = new ContentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode_v2(userId, channelId, shareCode, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses ( ) for priority. e.g: *tags=red* *tags=red&amp;animal* *tags=red|animal* *tags=red&amp;animal|wild* *tags=red&amp;(animal|wild)* The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore _ and dash - Allowed character for operator: &amp; | ( ) **Please note that value of tags query param should be URL encoded**
     */
    getContents_v2,
    /**
     * Maximum contentId per request 100
     */
    fetchContentBulk_v2,
    /**
     * Get content by content ID
     */
    getContent_ByContentId_v2,
    /**
     * Get user cotent
     */
    getContents_ByUserId_v2,
    /**
     * Maximum sharecodes per request 100
     */
    fetchContentSharecodeBulk_v2,
    /**
     * List content specific to a channel
     */
    getContents_ByChannelId_v2,
    /**
     * Create official content
     */
    createContent_ByChannelId_v2,
    /**
     * Content&#39;s payload versions created when UGC is created or updated with &lt;code&gt;updateContentFile&lt;/code&gt; set to true. Only list up to 10 latest versions.
     */
    getVersions_ByContentId_v2,
    /**
     * Get content by share code
     */
    getContentSharecode_ByShareCode_v2,
    /**
     * This endpoint used to request upload URL from content&#39;s screenshot. If *contentType* is not specified, it will use *fileExtension* value. Supported file extensions: pjp, jpg, jpeg, jfif, bmp, png. Maximum description length: 1024
     */
    createScreenshot_ByContentId_v2,
    /**
     * Maximum description length: 1024
     */
    updateScreenshot_ByContentId_v2,
    /**
     * Hide/Unhide user&#39;s generated contents
     */
    updateHide_ByUserId_ByContentId_v2,
    /**
     * Delete existing official content
     */
    deleteContent_ByChannelId_ByContentId_v2,
    /**
     * Update existing official content
     */
    patchContent_ByChannelId_ByContentId_v2,
    /**
     * Rollback content&#39;s payload to specified version
     */
    updateRollback_ByContentId_ByVersionId_v2,
    /**
     * Copy existing content from source channel to target channel.
     */
    createCopy_ByChannelId_ByContentId_v2,
    /**
     * Delete screenshot from a content
     */
    deleteScreenshot_ByContentId_ByScreenshotId_v2,
    /**
     * Generate official content upload URL
     */
    patchUploadUrl_ByChannelId_ByContentId_v2,
    /**
     * This endpoint should be used after calling generate official content upload url endpoint to commit the changes
     */
    patchFileLocation_ByChannelId_ByContentId_v2,
    /**
     * Delete user content by content ID
     */
    deleteContent_ByUserId_ByChannelId_ByContentId_v2,
    /**
     * Update existing user content
     */
    patchContent_ByUserId_ByChannelId_ByContentId_v2,
    /**
     * generate user content upload URL
     */
    patchUploadUrl_ByUserId_ByChannelId_ByContentId_v2,
    /**
     * Delete content by share code
     */
    deleteContentSharecode_ByUserId_ByChannelId_ByShareCode_v2,
    /**
     * This endpoint should be used after calling generate user content upload url endpoint to commit the changes
     */
    patchFileLocation_ByUserId_ByChannelId_ByContentId_v2,
    /**
     * *shareCode* format should follows: &#34;Max length: 7 &#34;Available characters: abcdefhkpqrstuxyz
     */
    updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode_v2
  }
}
