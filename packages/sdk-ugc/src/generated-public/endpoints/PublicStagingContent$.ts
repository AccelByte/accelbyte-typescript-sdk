/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { PaginatedListStagingContentResponse } from '../../generated-definitions/PaginatedListStagingContentResponse.js'
import { StagingContentResponse } from '../../generated-definitions/StagingContentResponse.js'
import { UpdateStagingContentRequest } from '../../generated-definitions/UpdateStagingContentRequest.js'

export class PublicStagingContent$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * List user staging contents
   */
  getStagingContents_ByUserId_v2(
    userId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; status?: string | null }
  ): Promise<Response<PaginatedListStagingContentResponse>> {
    const params = { sortBy: 'createdTimed:desc', ...queryParams } as AxiosRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/staging-contents'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedListStagingContentResponse,
      'PaginatedListStagingContentResponse'
    )
  }
  /**
   * Delete user staging content by ID
   */
  deleteStagingContent_ByUserId_ByContentId_v2(userId: string, contentId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/staging-contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get user staging content by ID
   */
  getStagingContent_ByUserId_ByContentId_v2(userId: string, contentId: string): Promise<Response<StagingContentResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/staging-contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      StagingContentResponse,
      'StagingContentResponse'
    )
  }
  /**
   * Update staging content
   */
  updateStagingContent_ByUserId_ByContentId_v2(
    userId: string,
    contentId: string,
    data: UpdateStagingContentRequest
  ): Promise<Response<StagingContentResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/users/{userId}/staging-contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      StagingContentResponse,
      'StagingContentResponse'
    )
  }
}
