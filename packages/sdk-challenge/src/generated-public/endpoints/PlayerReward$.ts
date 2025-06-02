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
import { ClaimUserRewardsByGoalCodeRequest } from '../../generated-definitions/ClaimUserRewardsByGoalCodeRequest.js'
import { ClaimUserRewardsReq } from '../../generated-definitions/ClaimUserRewardsReq.js'
import { ListUserRewardsResponse } from '../../generated-definitions/ListUserRewardsResponse.js'
import { UserRewardArray } from '../../generated-definitions/UserRewardArray.js'

export class PlayerReward$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * - Required permission: NAMESPACE:{namespace}:CHALLENGE:REWARD [READ]
   */
  getUsersMeRewards(queryParams?: {
    challengeCode?: string | null
    goalProgressionId?: string | null
    limit?: number
    offset?: number
    sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
    status?: 'CLAIMED' | 'UNCLAIMED'
  }): Promise<Response<ListUserRewardsResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/challenge/v1/public/namespaces/{namespace}/users/me/rewards'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListUserRewardsResponse,
      'ListUserRewardsResponse'
    )
  }
  /**
   * - Required permission: NAMESPACE:{namespace}:CHALLENGE:REWARD [UPDATE]
   */
  updateUserMeRewardClaim(data: ClaimUserRewardsReq): Promise<Response<UserRewardArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/challenge/v1/public/namespaces/{namespace}/users/me/rewards/claim'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserRewardArray, 'UserRewardArray')
  }
  /**
   * - Required permission: NAMESPACE:{namespace}:CHALLENGE:REWARD [UPDATE]
   */
  updateRewardClaimMeUser_ByChallengeCode(
    challengeCode: string,
    data: ClaimUserRewardsByGoalCodeRequest
  ): Promise<Response<UserRewardArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/challenge/v1/public/namespaces/{namespace}/users/me/challenges/{challengeCode}/rewards/claim'
      .replace('{namespace}', this.namespace)
      .replace('{challengeCode}', challengeCode)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserRewardArray, 'UserRewardArray')
  }
}
