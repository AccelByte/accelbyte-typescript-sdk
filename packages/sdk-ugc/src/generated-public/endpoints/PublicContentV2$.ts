/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { ContentDownloadResponseV2 } from '../../generated-definitions/ContentDownloadResponseV2.js'
import { ContentDownloadResponseV2Array } from '../../generated-definitions/ContentDownloadResponseV2Array.js'
import { ContentRequestV2 } from '../../generated-definitions/ContentRequestV2.js'
import { CreateContentResponseV2 } from '../../generated-definitions/CreateContentResponseV2.js'
import { CreateScreenshotRequest } from '../../generated-definitions/CreateScreenshotRequest.js'
import { CreateScreenshotResponse } from '../../generated-definitions/CreateScreenshotResponse.js'
import { GenerateContentUploadUrlRequest } from '../../generated-definitions/GenerateContentUploadUrlRequest.js'
import { GenerateContentUploadUrlResponse } from '../../generated-definitions/GenerateContentUploadUrlResponse.js'
import { GetContentBulkByShareCodesRequest } from '../../generated-definitions/GetContentBulkByShareCodesRequest.js'
import { PaginatedContentDownloadResponseV2 } from '../../generated-definitions/PaginatedContentDownloadResponseV2.js'
import { PublicGetContentBulkRequest } from '../../generated-definitions/PublicGetContentBulkRequest.js'
import { UpdateContentRequestV2 } from '../../generated-definitions/UpdateContentRequestV2.js'
import { UpdateContentResponseV2 } from '../../generated-definitions/UpdateContentResponseV2.js'
import { UpdateContentShareCodeRequest } from '../../generated-definitions/UpdateContentShareCodeRequest.js'
import { UpdateFileLocationRequest } from '../../generated-definitions/UpdateFileLocationRequest.js'
import { UpdateScreenshotRequest } from '../../generated-definitions/UpdateScreenshotRequest.js'
import { UpdateScreenshotResponse } from '../../generated-definitions/UpdateScreenshotResponse.js'

export class PublicContentV2$ {
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
    const url = '/ugc/v2/public/namespaces/{namespace}/contents'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedContentDownloadResponseV2,
      'PaginatedContentDownloadResponseV2'
    )
  }
  /**
   * Maximum requested Ids: 100. Public user can access without token or if token specified, requires valid user token
   */
  createContentBulk_v2(data: PublicGetContentBulkRequest): Promise<Response<ContentDownloadResponseV2Array>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/contents/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ContentDownloadResponseV2Array,
      'ContentDownloadResponseV2Array'
    )
  }
  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  getContent_ByContentId_v2(contentId: string): Promise<Response<ContentDownloadResponseV2>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/contents/{contentId}'
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
   * Public user can access without token or if token specified, required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;.
   */
  getContents_ByUserId_v2(
    userId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null }
  ): Promise<Response<PaginatedContentDownloadResponseV2>> {
    const params = { limit: 20, sortBy: 'createdTime:desc', ...queryParams } as AxiosRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/contents'
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
   * Require valid user token. Maximum sharecodes per request 100
   */
  createContentSharecodeBulk_v2(data: GetContentBulkByShareCodesRequest): Promise<Response<ContentDownloadResponseV2Array>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/contents/sharecodes/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ContentDownloadResponseV2Array,
      'ContentDownloadResponseV2Array'
    )
  }
  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  getContents_ByChannelId_v2(
    channelId: string,
    queryParams?: { limit?: number; name?: string | null; offset?: number; sortBy?: string | null }
  ): Promise<Response<PaginatedContentDownloadResponseV2>> {
    const params = { limit: 20, sortBy: 'createdTime:desc', ...queryParams } as AxiosRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/channels/{channelId}/contents'
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
   * Public user can access without token or if token specified, requires valid user token
   */
  getContentSharecode_ByShareCode_v2(shareCode: string): Promise<Response<ContentDownloadResponseV2>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/contents/sharecodes/{shareCode}'
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
   * Create a new content
   */
  createContent_ByUserId_ByChannelId_v2(
    userId: string,
    channelId: string,
    data: ContentRequestV2
  ): Promise<Response<CreateContentResponseV2>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
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
   * This endpoint used to request upload URL from content&#39;s screenshot. If *contentType* is not specified, it will use *fileExtension* value. Supported file extensions: pjp, jpg, jpeg, jfif, bmp, png. Maximum description length: 1024
   */
  createScreenshot_ByUserId_ByContentId_v2(
    userId: string,
    contentId: string,
    data: CreateScreenshotRequest
  ): Promise<Response<CreateScreenshotResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
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
  updateScreenshot_ByUserId_ByContentId_v2(
    userId: string,
    contentId: string,
    data: UpdateScreenshotRequest
  ): Promise<Response<UpdateScreenshotResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
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
   * Delete existing content
   */
  deleteContent_ByUserId_ByChannelId_ByContentId_v2(userId: string, channelId: string, contentId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Update existing content
   */
  patchContent_ByUserId_ByChannelId_ByContentId_v2(
    userId: string,
    channelId: string,
    contentId: string,
    data: UpdateContentRequestV2
  ): Promise<Response<UpdateContentResponseV2>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}'
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
   * Delete screenshot from a content
   */
  deleteScreenshot_ByUserId_ByContentId_ByScreenshotId_v2(
    userId: string,
    contentId: string,
    screenshotId: string
  ): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/contents/{contentId}/screenshots/{screenshotId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{contentId}', contentId)
      .replace('{screenshotId}', screenshotId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint is used to modify the shareCode of a content. However, this operation is restricted by default and requires the above permission to be granted to the User role.&lt;br&gt; &lt;code&gt;shareCode&lt;/code&gt; format should follows: Max length: 7 Available characters: abcdefhkpqrstuxyz
   */
  patchSharecode_ByUserId_ByChannelId_ByContentId_v2(
    userId: string,
    channelId: string,
    contentId: string,
    data: UpdateContentShareCodeRequest
  ): Promise<Response<CreateContentResponseV2>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}/sharecode'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      CreateContentResponseV2,
      'CreateContentResponseV2'
    )
  }
  /**
   * Generate content upload URL
   */
  patchUploadUrl_ByUserId_ByChannelId_ByContentId_v2(
    userId: string,
    channelId: string,
    contentId: string,
    data: GenerateContentUploadUrlRequest
  ): Promise<Response<GenerateContentUploadUrlResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}/uploadUrl'
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
   * Delete existing content by share code
   */
  deleteContentSharecode_ByUserId_ByChannelId_ByShareCode_v2(
    userId: string,
    channelId: string,
    shareCode: string
  ): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/sharecodes/{shareCode}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{channelId}', channelId)
      .replace('{shareCode}', shareCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint should be used after calling generate upload url endpoint to commit the changes
   */
  patchFileLocation_ByUserId_ByChannelId_ByContentId_v2(
    userId: string,
    channelId: string,
    contentId: string,
    data: UpdateFileLocationRequest
  ): Promise<Response<UpdateContentResponseV2>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/{contentId}/fileLocation'
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
   * Update content by share code
   */
  updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode_v2(
    userId: string,
    channelId: string,
    shareCode: string,
    data: UpdateContentRequestV2
  ): Promise<Response<CreateContentResponseV2>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/channels/{channelId}/contents/s3/sharecodes/{shareCode}'
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
