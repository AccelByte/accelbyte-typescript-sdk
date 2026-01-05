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
import { GetHiddenUserResponse } from '../../generated-definitions/GetHiddenUserResponse.js'
import { GetUserVisibilityResponse } from '../../generated-definitions/GetUserVisibilityResponse.js'
import { SetUserVisibilityRequest } from '../../generated-definitions/SetUserVisibilityRequest.js'

export class UserVisibilityV3Admin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * User with false visibility status will have &lt;b&gt;hidden&lt;/b&gt; attribute set to true on it&#39;s leaderboard entry
   */
  updateVisibility_ByUserId_v3(userId: string, data: SetUserVisibilityRequest): Promise<Response<GetUserVisibilityResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/leaderboard/v3/admin/namespaces/{namespace}/users/{userId}/visibility'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetUserVisibilityResponse,
      'GetUserVisibilityResponse'
    )
  }
  /**
   * Return hidden users on a leaderboard
   */
  getUsersHidden_ByLeaderboardCode_v3(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<Response<GetHiddenUserResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/hidden'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GetHiddenUserResponse, 'GetHiddenUserResponse')
  }
  /**
   * User with false visibility status will have &lt;b&gt;hidden&lt;/b&gt; attribute set to true on it&#39;s leaderboard entry
   */
  getVisibility_ByLeaderboardCode_ByUserId_v3(leaderboardCode: string, userId: string): Promise<Response<GetUserVisibilityResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}/visibility'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetUserVisibilityResponse,
      'GetUserVisibilityResponse'
    )
  }
  /**
   * User with false visibility status will have &lt;b&gt;hidden&lt;/b&gt; attribute set to true on it&#39;s leaderboard entry
   */
  updateVisibility_ByLeaderboardCode_ByUserId_v3(
    leaderboardCode: string,
    userId: string,
    data: SetUserVisibilityRequest
  ): Promise<Response<GetUserVisibilityResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/leaderboard/v3/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/users/{userId}/visibility'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetUserVisibilityResponse,
      'GetUserVisibilityResponse'
    )
  }
}
