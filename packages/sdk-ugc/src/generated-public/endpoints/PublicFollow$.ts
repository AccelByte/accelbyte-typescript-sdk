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
import { PaginatedContentDownloadResponse } from '../../generated-definitions/PaginatedContentDownloadResponse.js'
import { PaginatedCreatorOverviewResponse } from '../../generated-definitions/PaginatedCreatorOverviewResponse.js'
import { UserFollowRequest } from '../../generated-definitions/UserFollowRequest.js'
import { UserFollowResponse } from '../../generated-definitions/UserFollowResponse.js'

export class PublicFollow$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Requires valid user token
   */
  getUsersFollowed(queryParams?: { limit?: number; offset?: number }): Promise<Response<PaginatedCreatorOverviewResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/followed'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedCreatorOverviewResponse,
      'PaginatedCreatorOverviewResponse'
    )
  }
  /**
   * Requires valid user token
   */
  getContentsFollowed(queryParams?: { limit?: number; offset?: number }): Promise<Response<PaginatedContentDownloadResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/contents/followed'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedContentDownloadResponse,
      'PaginatedContentDownloadResponse'
    )
  }
  /**
   * Requires valid user token
   */
  updateFollow_ByUserId(userId: string, data: UserFollowRequest): Promise<Response<UserFollowResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/follow'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserFollowResponse, 'UserFollowResponse')
  }

  getFollowers_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<Response<PaginatedCreatorOverviewResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/followers'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedCreatorOverviewResponse,
      'PaginatedCreatorOverviewResponse'
    )
  }

  getFollowing_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<Response<PaginatedCreatorOverviewResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/following'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedCreatorOverviewResponse,
      'PaginatedCreatorOverviewResponse'
    )
  }
}
