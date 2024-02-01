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
import { ClaimableRewards } from '../../generated-definitions/ClaimableRewards.js'
import { UserRewardClaim } from '../../generated-definitions/UserRewardClaim.js'

export class Reward$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * This API is used to claim reward, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
   */
  createSeasonCurrentReward_ByUserId(userId: string, data: UserRewardClaim): Promise<IResponse<ClaimableRewards>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/public/namespaces/{namespace}/users/{userId}/seasons/current/rewards'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ClaimableRewards, 'ClaimableRewards')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to bulk claim all remained rewards, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:SEASONPASS&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
   */
  createSeasonCurrentRewardBulk_ByUserId(userId: string): Promise<IResponse<ClaimableRewards>> {
    const params = {} as SDKRequestConfig
    const url = '/seasonpass/public/namespaces/{namespace}/users/{userId}/seasons/current/rewards/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ClaimableRewards, 'ClaimableRewards')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
