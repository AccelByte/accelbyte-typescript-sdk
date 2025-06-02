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
import { ApproveStagingContentRequest } from '../../generated-definitions/ApproveStagingContentRequest.js'
import { PaginatedListStagingContentResponse } from '../../generated-definitions/PaginatedListStagingContentResponse.js'
import { StagingContentResponse } from '../../generated-definitions/StagingContentResponse.js'

export class StagingContentAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * List content that need admin&#39;s approval
   */
  getStagingContents_v2(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: string | null
    status?: string | null
  }): Promise<Response<PaginatedListStagingContentResponse>> {
    const params = { sortBy: 'createdTimed:desc', ...queryParams } as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/staging-contents'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedListStagingContentResponse,
      'PaginatedListStagingContentResponse'
    )
  }
  /**
   * Get staging content by ID
   */
  getStagingContent_ByContentId_v2(contentId: string): Promise<Response<StagingContentResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/staging-contents/{contentId}'
      .replace('{namespace}', this.namespace)
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
   * List user content&#39;s that need admin approval
   */
  getStagingContents_ByUserId_v2(
    userId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; status?: string | null }
  ): Promise<Response<PaginatedListStagingContentResponse>> {
    const params = { sortBy: 'createdTimed:desc', ...queryParams } as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/users/{userId}/staging-contents'
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
   * Approved content will shown to public player. Rejected content stays in staging area and couldn&#39;t be seen by other player
   */
  createApprove_ByContentId_v2(contentId: string, data: ApproveStagingContentRequest): Promise<Response<StagingContentResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/staging-contents/{contentId}/approve'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      StagingContentResponse,
      'StagingContentResponse'
    )
  }
}
