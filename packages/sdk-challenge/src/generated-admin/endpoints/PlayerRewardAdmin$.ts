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
import { ClaimUserRewardsReq } from '../../generated-definitions/ClaimUserRewardsReq.js'
import { ClaimUsersRewardsRequest } from '../../generated-definitions/ClaimUsersRewardsRequest.js'
import { ClaimUsersRewardsResponseArray } from '../../generated-definitions/ClaimUsersRewardsResponseArray.js'
import { ListUserRewardsResponse } from '../../generated-definitions/ListUserRewardsResponse.js'
import { UserRewardArray } from '../../generated-definitions/UserRewardArray.js'

export class PlayerRewardAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:REWARD [UPDATE]&lt;/li&gt;&lt;/ul&gt;
   */
  createUserRewardClaim(data: ClaimUsersRewardsRequest[]): Promise<IResponse<ClaimUsersRewardsResponseArray>> {
    const params = {} as SDKRequestConfig
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
  ): Promise<IResponse<ListUserRewardsResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
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
  createRewardClaim_ByUserId(userId: string, data: ClaimUserRewardsReq): Promise<IResponse<UserRewardArray>> {
    const params = {} as SDKRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/users/{userId}/rewards/claim'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserRewardArray, 'UserRewardArray')
  }
}
