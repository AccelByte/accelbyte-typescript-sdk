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
import { ContentLikeRequest } from '../../generated-definitions/ContentLikeRequest.js'
import { ContentLikeResponse } from '../../generated-definitions/ContentLikeResponse.js'
import { PaginatedContentLikersResponse } from '../../generated-definitions/PaginatedContentLikersResponse.js'

export class PublicLikeV2$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This endpoint will only display the list of users who performed like from v2 endpoint.
   */
  getLike_ByContentId_v2(
    contentId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null }
  ): Promise<Response<PaginatedContentLikersResponse>> {
    const params = { limit: 20, sortBy: 'createdTime:desc', ...queryParams } as AxiosRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/contents/{contentId}/like'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedContentLikersResponse,
      'PaginatedContentLikersResponse'
    )
  }
  /**
   * This endpoint will update like/unlike state from a content
   */
  updateLike_ByContentId_v2(contentId: string, data: ContentLikeRequest): Promise<Response<ContentLikeResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v2/public/namespaces/{namespace}/contents/{contentId}/like'
      .replace('{namespace}', this.namespace)
      .replace('{contentId}', contentId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ContentLikeResponse, 'ContentLikeResponse')
  }
}
