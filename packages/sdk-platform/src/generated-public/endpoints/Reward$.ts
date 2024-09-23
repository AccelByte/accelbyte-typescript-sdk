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
import { RewardInfo } from '../../generated-definitions/RewardInfo.js'
import { RewardPagingSlicedResult } from '../../generated-definitions/RewardPagingSlicedResult.js'

export class Reward$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to get reward by reward code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: reward instance&lt;/li&gt;&lt;/ul&gt;
   */
  getRewardsByCode(queryParams: { rewardCode: string | null }): Promise<Response<RewardInfo>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/rewards/byCode'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RewardInfo, 'RewardInfo')
  }
  /**
   * This API is used to get reward by reward Id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: reward instance&lt;/li&gt;&lt;/ul&gt;
   */
  getReward_ByRewardId(rewardId: string): Promise<Response<RewardInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/rewards/{rewardId}'
      .replace('{namespace}', this.namespace)
      .replace('{rewardId}', rewardId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RewardInfo, 'RewardInfo')
  }
  /**
   * This API is used to query rewards by criteria.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of rewards&lt;/li&gt;&lt;/ul&gt;
   */
  getRewardsByCriteria(queryParams?: {
    eventTopic?: string | null
    limit?: number
    offset?: number
    sortBy?: string[]
  }): Promise<Response<RewardPagingSlicedResult>> {
    const params = { limit: 20, sortBy: ['namespace:asc', 'rewardCode:asc'], ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/rewards/byCriteria'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RewardPagingSlicedResult,
      'RewardPagingSlicedResult'
    )
  }
}
