/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { AdminContentRequestV2 } from '../../generated-definitions/AdminContentRequestV2.js'
import { AdminGetContentBulkRequest } from '../../generated-definitions/AdminGetContentBulkRequest.js'
import { AdminUpdateContentRequestV2 } from '../../generated-definitions/AdminUpdateContentRequestV2.js'
import { ContentDownloadResponse } from '../../generated-definitions/ContentDownloadResponse.js'
import { ContentDownloadResponseV2 } from '../../generated-definitions/ContentDownloadResponseV2.js'
import { ContentDownloadResponseV2Array } from '../../generated-definitions/ContentDownloadResponseV2Array.js'
import { CopyContentRequest } from '../../generated-definitions/CopyContentRequest.js'
import { CreateContentResponseV2 } from '../../generated-definitions/CreateContentResponseV2.js'
import { CreateScreenshotRequest } from '../../generated-definitions/CreateScreenshotRequest.js'
import { CreateScreenshotResponse } from '../../generated-definitions/CreateScreenshotResponse.js'
import { GenerateContentUploadUrlRequest } from '../../generated-definitions/GenerateContentUploadUrlRequest.js'
import { GenerateContentUploadUrlResponse } from '../../generated-definitions/GenerateContentUploadUrlResponse.js'
import { GetContentBulkByShareCodesRequest } from '../../generated-definitions/GetContentBulkByShareCodesRequest.js'
import { HideContentRequest } from '../../generated-definitions/HideContentRequest.js'
import { ListContentVersionsResponse } from '../../generated-definitions/ListContentVersionsResponse.js'
import { PaginatedContentDownloadResponseV2 } from '../../generated-definitions/PaginatedContentDownloadResponseV2.js'
import { UpdateContentResponseV2 } from '../../generated-definitions/UpdateContentResponseV2.js'
import { UpdateFileLocationRequest } from '../../generated-definitions/UpdateFileLocationRequest.js'
import { UpdateScreenshotRequest } from '../../generated-definitions/UpdateScreenshotRequest.js'
import { UpdateScreenshotResponse } from '../../generated-definitions/UpdateScreenshotResponse.js'

export class ContentV2Admin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses ( ) for priority. e.g: *tags=red* *tags=red&amp;animal* *tags=red|animal* *tags=red&amp;animal|wild* *tags=red&amp;(animal|wild)* The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore _ and dash - Allowed character for operator: &amp; | ( ) **Please note that value of tags query param should be URL encoded**
   */
  getContents_v2(queryParams?: {
    isOfficial?: boolean | null
    limit?: number
    name?: string | null
    offset?: number
    sortBy?: string | null
    subType?: string | null
    tags?: string[]
    type?: string | null
  }): Promise<Response<PaginatedContentDownloadResponseV2>> {
    const params = { limit: 20, sortBy: 'createdTime:desc', ...queryParams } as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/contents'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedContentDownloadResponseV2,
      'PaginatedContentDownloadResponseV2'
    )
  }
  /**
   * Maximum contentId per request 100
   */
  fetchContentBulk_v2(data: AdminGetContentBulkRequest): Promise<Response<ContentDownloadResponseV2Array>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/contents/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ContentDownloadResponseV2Array,
      'ContentDownloadResponseV2Array'
    )
  }
  /**
   * Get content by content ID
   */
  getContent_ByContentId_v2(contentId: string): Promise<Response<ContentDownloadResponseV2>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ContentDownloadResponseV2,
      'ContentDownloadResponseV2'
    )
  }
  /**
   * Get user cotent
   */
  getContents_ByUserId_v2(
    userId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null }
  ): Promise<Response<PaginatedContentDownloadResponseV2>> {
    const params = { limit: 20, sortBy: 'createdTime:desc', ...queryParams } as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/users/{userId}/contents'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedContentDownloadResponseV2,
      'PaginatedContentDownloadResponseV2'
    )
  }
  /**
   * Maximum sharecodes per request 100
   */
  fetchContentSharecodeBulk_v2(data: GetContentBulkByShareCodesRequest): Promise<Response<ContentDownloadResponseV2Array>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/contents/sharecodes/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ContentDownloadResponseV2Array,
      'ContentDownloadResponseV2Array'
    )
  }
  /**
   * List content specific to a channel
   */
  getContents_ByChannelId_v2(
    channelId: string,
    queryParams?: { limit?: number; name?: string | null; offset?: number; sortBy?: string | null }
  ): Promise<Response<PaginatedContentDownloadResponseV2>> {
    const params = { limit: 20, sortBy: 'createdTime:desc', ...queryParams } as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/channels/{channelId}/contents'
      .replace('{namespace}', this.namespace)
      .replace('{channelId}', channelId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedContentDownloadResponseV2,
      'PaginatedContentDownloadResponseV2'
    )
  }
  /**
   * Create official content
   */
  createContent_ByChannelId_v2(channelId: string, data: AdminContentRequestV2): Promise<Response<CreateContentResponseV2>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/channels/{channelId}/contents'
      .replace('{namespace}', this.namespace)
      .replace('{channelId}', channelId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      CreateContentResponseV2,
      'CreateContentResponseV2'
    )
  }
  /**
   * Content&#39;s payload versions created when UGC is created or updated with &lt;code&gt;updateContentFile&lt;/code&gt; set to true. Only list up to 10 latest versions.
   */
  getVersions_ByContentId_v2(contentId: string): Promise<Response<ListContentVersionsResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/contents/{contentId}/versions'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListContentVersionsResponse,
      'ListContentVersionsResponse'
    )
  }
  /**
   * Get content by share code
   */
  getContentSharecode_ByShareCode_v2(shareCode: string): Promise<Response<ContentDownloadResponseV2>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/contents/sharecodes/{shareCode}'
      .replace('{namespace}', this.namespace)
      .replace('{shareCode}', shareCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ContentDownloadResponseV2,
      'ContentDownloadResponseV2'
    )
  }
  /**
   * This endpoint used to request upload URL from content&#39;s screenshot. If *contentType* is not specified, it will use *fileExtension* value. Supported file extensions: pjp, jpg, jpeg, jfif, bmp, png. Maximum description length: 1024
   */
  createScreenshot_ByContentId_v2(contentId: string, data: CreateScreenshotRequest): Promise<Response<CreateScreenshotResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/contents/{contentId}/screenshots'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      CreateScreenshotResponse,
      'CreateScreenshotResponse'
    )
  }
  /**
   * Maximum description length: 1024
   */
  updateScreenshot_ByContentId_v2(contentId: string, data: UpdateScreenshotRequest): Promise<Response<UpdateScreenshotResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/contents/{contentId}/screenshots'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UpdateScreenshotResponse,
      'UpdateScreenshotResponse'
    )
  }
  /**
   * Hide/Unhide user&#39;s generated contents
   */
  updateHide_ByUserId_ByContentId_v2(
    userId: string,
    contentId: string,
    data: HideContentRequest
  ): Promise<Response<CreateContentResponseV2>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/users/{userId}/contents/{contentId}/hide'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      CreateContentResponseV2,
      'CreateContentResponseV2'
    )
  }
  /**
   * Delete existing official content
   */
  deleteContent_ByChannelId_ByContentId_v2(channelId: string, contentId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/channels/{channelId}/contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Update existing official content
   */
  patchContent_ByChannelId_ByContentId_v2(
    channelId: string,
    contentId: string,
    data: AdminUpdateContentRequestV2
  ): Promise<Response<UpdateContentResponseV2>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/channels/{channelId}/contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UpdateContentResponseV2,
      'UpdateContentResponseV2'
    )
  }
  /**
   * Rollback content&#39;s payload to specified version
   */
  updateRollback_ByContentId_ByVersionId_v2(contentId: string, versionId: string): Promise<Response<ContentDownloadResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/contents/{contentId}/rollback/{versionId}'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
      .replace('{versionId}', versionId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ContentDownloadResponse,
      'ContentDownloadResponse'
    )
  }
  /**
   * Copy existing content from source channel to target channel.
   */
  createCopy_ByChannelId_ByContentId_v2(
    channelId: string,
    contentId: string,
    data: CopyContentRequest
  ): Promise<Response<ContentDownloadResponseV2>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/channels/{channelId}/contents/{contentId}/copy'
      .replace('{namespace}', this.namespace)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ContentDownloadResponseV2,
      'ContentDownloadResponseV2'
    )
  }
  /**
   * Delete screenshot from a content
   */
  deleteScreenshot_ByContentId_ByScreenshotId_v2(contentId: string, screenshotId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/contents/{contentId}/screenshots/{screenshotId}'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
      .replace('{screenshotId}', screenshotId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Generate official content upload URL
   */
  patchUploadUrl_ByChannelId_ByContentId_v2(
    channelId: string,
    contentId: string,
    data: GenerateContentUploadUrlRequest
  ): Promise<Response<GenerateContentUploadUrlResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/channels/{channelId}/contents/{contentId}/uploadUrl'
      .replace('{namespace}', this.namespace)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GenerateContentUploadUrlResponse,
      'GenerateContentUploadUrlResponse'
    )
  }
  /**
   * This endpoint should be used after calling generate official content upload url endpoint to commit the changes
   */
  patchFileLocation_ByChannelId_ByContentId_v2(
    channelId: string,
    contentId: string,
    data: UpdateFileLocationRequest
  ): Promise<Response<UpdateContentResponseV2>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/channels/{channelId}/contents/{contentId}/fileLocation'
      .replace('{namespace}', this.namespace)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UpdateContentResponseV2,
      'UpdateContentResponseV2'
    )
  }
  /**
   * Delete user content by content ID
   */
  deleteContent_ByUserId_ByChannelId_ByContentId_v2(userId: string, channelId: string, contentId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Update existing user content
   */
  patchContent_ByUserId_ByChannelId_ByContentId_v2(
    userId: string,
    channelId: string,
    contentId: string,
    data: AdminUpdateContentRequestV2
  ): Promise<Response<UpdateContentResponseV2>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UpdateContentResponseV2,
      'UpdateContentResponseV2'
    )
  }
  /**
   * generate user content upload URL
   */
  patchUploadUrl_ByUserId_ByChannelId_ByContentId_v2(
    userId: string,
    channelId: string,
    contentId: string,
    data: GenerateContentUploadUrlRequest
  ): Promise<Response<GenerateContentUploadUrlResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}/uploadUrl'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GenerateContentUploadUrlResponse,
      'GenerateContentUploadUrlResponse'
    )
  }
  /**
   * Delete content by share code
   */
  deleteContentSharecode_ByUserId_ByChannelId_ByShareCode_v2(
    userId: string,
    channelId: string,
    shareCode: string
  ): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/sharecodes/{shareCode}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{shareCode}', shareCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint should be used after calling generate user content upload url endpoint to commit the changes
   */
  patchFileLocation_ByUserId_ByChannelId_ByContentId_v2(
    userId: string,
    channelId: string,
    contentId: string,
    data: UpdateFileLocationRequest
  ): Promise<Response<UpdateContentResponseV2>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}/fileLocation'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UpdateContentResponseV2,
      'UpdateContentResponseV2'
    )
  }
  /**
   * *shareCode* format should follows: &#34;Max length: 7 &#34;Available characters: abcdefhkpqrstuxyz
   */
  updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode_v2(
    userId: string,
    channelId: string,
    shareCode: string,
    data: AdminUpdateContentRequestV2
  ): Promise<Response<CreateContentResponseV2>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/s3/sharecodes/{shareCode}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{shareCode}', shareCode)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      CreateContentResponseV2,
      'CreateContentResponseV2'
    )
  }
}
