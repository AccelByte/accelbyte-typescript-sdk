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
import { PaginatedContentDownloadResponse } from '../../generated-definitions/PaginatedContentDownloadResponse.js'
import { PaginatedCreatorOverviewResponse } from '../../generated-definitions/PaginatedCreatorOverviewResponse.js'
import { UserFollowRequest } from '../../generated-definitions/UserFollowRequest.js'
import { UserFollowResponse } from '../../generated-definitions/UserFollowResponse.js'

export class PublicFollow$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * Requires valid user token
   */
  getUsersFollowed(queryParams?: { limit?: number; offset?: number }): Promise<IResponse<PaginatedCreatorOverviewResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/followed'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PaginatedCreatorOverviewResponse, 'PaginatedCreatorOverviewResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Requires valid user token
   */
  getContentsFollowed(queryParams?: { limit?: number; offset?: number }): Promise<IResponse<PaginatedContentDownloadResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/contents/followed'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PaginatedContentDownloadResponse, 'PaginatedContentDownloadResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Requires valid user token
   */
  updateFollow_ByUserId(userId: string, data: UserFollowRequest): Promise<IResponse<UserFollowResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/follow'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UserFollowResponse, 'UserFollowResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  getFollowers_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponse<PaginatedCreatorOverviewResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/followers'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PaginatedCreatorOverviewResponse, 'PaginatedCreatorOverviewResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  getFollowing_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponse<PaginatedCreatorOverviewResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}/following'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PaginatedCreatorOverviewResponse, 'PaginatedCreatorOverviewResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
