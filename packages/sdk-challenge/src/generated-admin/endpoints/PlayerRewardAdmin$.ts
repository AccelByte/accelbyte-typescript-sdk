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
import { ClaimUserRewardsByGoalCodeRequest } from '../../generated-definitions/ClaimUserRewardsByGoalCodeRequest.js'
import { ClaimUserRewardsReq } from '../../generated-definitions/ClaimUserRewardsReq.js'
import { ClaimUsersRewardsRequest } from '../../generated-definitions/ClaimUsersRewardsRequest.js'
import { ClaimUsersRewardsResponseArray } from '../../generated-definitions/ClaimUsersRewardsResponseArray.js'
import { ListUserRewardsResponse } from '../../generated-definitions/ListUserRewardsResponse.js'
import { UserRewardArray } from '../../generated-definitions/UserRewardArray.js'

export class PlayerRewardAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:REWARD [UPDATE]&lt;/li&gt;&lt;/ul&gt;
   */
  createUserRewardClaim(data: ClaimUsersRewardsRequest[]): Promise<Response<ClaimUsersRewardsResponseArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/users/rewards/claim'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ClaimUsersRewardsResponseArray,
      'ClaimUsersRewardsResponseArray'
    )
  }
  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:REWARD [READ]&lt;/li&gt;&lt;/ul&gt;
   */
  getRewards_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; status?: 'CLAIMED' | 'UNCLAIMED' }
  ): Promise<Response<ListUserRewardsResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/users/{userId}/rewards'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListUserRewardsResponse,
      'ListUserRewardsResponse'
    )
  }
  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:REWARD [UPDATE]&lt;/li&gt;&lt;/ul&gt;
   */
  createRewardClaim_ByUserId(userId: string, data: ClaimUserRewardsReq): Promise<Response<UserRewardArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/users/{userId}/rewards/claim'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserRewardArray, 'UserRewardArray')
  }
  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:REWARD [UPDATE]&lt;/li&gt;&lt;/ul&gt;
   */
  createRewardClaim_ByUserId_ByChallengeCode(
    userId: string,
    challengeCode: string,
    data: ClaimUserRewardsByGoalCodeRequest
  ): Promise<Response<UserRewardArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/users/{userId}/challenges/{challengeCode}/rewards/claim'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{challengeCode}', challengeCode)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserRewardArray, 'UserRewardArray')
  }
}
