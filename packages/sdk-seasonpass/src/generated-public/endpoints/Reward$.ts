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
import { ClaimableRewards } from '../../generated-definitions/ClaimableRewards.js'
import { UserRewardClaim } from '../../generated-definitions/UserRewardClaim.js'

export class Reward$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to claim reward, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
   */
  createSeasonCurrentReward_ByUserId(userId: string, data: UserRewardClaim): Promise<Response<ClaimableRewards>> {
    const params = {} as AxiosRequestConfig
    const url = '/seasonpass/public/namespaces/{namespace}/users/{userId}/seasons/current/rewards'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ClaimableRewards, 'ClaimableRewards')
  }
  /**
   * This API is used to bulk claim all remained rewards, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
   */
  createSeasonCurrentRewardBulk_ByUserId(userId: string): Promise<Response<ClaimableRewards>> {
    const params = {} as AxiosRequestConfig
    const url = '/seasonpass/public/namespaces/{namespace}/users/{userId}/seasons/current/rewards/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ClaimableRewards, 'ClaimableRewards')
  }
}
