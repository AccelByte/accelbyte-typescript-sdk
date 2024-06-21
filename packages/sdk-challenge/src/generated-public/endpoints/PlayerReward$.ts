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
import { ListUserRewardsResponse } from '../../generated-definitions/ListUserRewardsResponse.js'
import { UserRewardArray } from '../../generated-definitions/UserRewardArray.js'

export class PlayerReward$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE:REWARD [READ]&lt;/li&gt;&lt;/ul&gt;
   */
  getUsersMeRewards(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: string | null
    status?: 'CLAIMED' | 'UNCLAIMED'
  }): Promise<IResponse<ListUserRewardsResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
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
   * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE:REWARD [UPDATE]&lt;/li&gt;&lt;/ul&gt;
   */
  createUserMeRewardClaim(data: ClaimUserRewardsReq): Promise<IResponse<UserRewardArray>> {
    const params = {} as SDKRequestConfig
    const url = '/challenge/v1/public/namespaces/{namespace}/users/me/rewards/claim'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserRewardArray, 'UserRewardArray')
  }
}
