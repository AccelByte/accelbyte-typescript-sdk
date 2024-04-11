/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { ApproveStagingContentRequest } from '../../generated-definitions/ApproveStagingContentRequest.js'
import { PaginatedListStagingContentResponse } from '../../generated-definitions/PaginatedListStagingContentResponse.js'
import { StagingContentResponse } from '../../generated-definitions/StagingContentResponse.js'

export class AdminStagingContentAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * List content that need admin&#39;s approval
   */
  getStagingContents(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: string | null
    status?: string | null
  }): Promise<IResponse<PaginatedListStagingContentResponse>> {
    const params = { sortBy: 'createdTimed:desc', ...queryParams } as SDKRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/staging-contents'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      PaginatedListStagingContentResponse,
      'PaginatedListStagingContentResponse'
    )
  }

  /**
   * Get staging content by ID
   */
  getStagingContent_ByContentId(contentId: string): Promise<IResponse<StagingContentResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/staging-contents/{contentId}'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, StagingContentResponse, 'StagingContentResponse')
  }

  /**
   * List user content&#39;s that need admin approval
   */
  getStagingContents_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; status?: string | null }
  ): Promise<IResponse<PaginatedListStagingContentResponse>> {
    const params = { sortBy: 'createdTimed:desc', ...queryParams } as SDKRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/users/{userId}/staging-contents'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      PaginatedListStagingContentResponse,
      'PaginatedListStagingContentResponse'
    )
  }

  /**
   * Approved content will shown to public player. Rejected content stays in staging area and couldn&#39;t be seen by other player
   */
  createApprove_ByContentId(contentId: string, data: ApproveStagingContentRequest): Promise<IResponse<StagingContentResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v2/admin/namespaces/{namespace}/staging-contents/{contentId}/approve'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, StagingContentResponse, 'StagingContentResponse')
  }
}
