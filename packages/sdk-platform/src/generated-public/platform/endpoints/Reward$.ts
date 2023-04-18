/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { RewardInfo } from '../definitions/RewardInfo'
import { RewardPagingSlicedResult } from '../definitions/RewardPagingSlicedResult'

export class Reward$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This API is used to get reward by reward code.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:REWARD", action=2 (READ)</li><li><i>Returns</i>: reward instance</li></ul>
   */
  getRewardsByCode(queryParams: { rewardCode: string | null }): Promise<IResponseWithSync<RewardInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/rewards/byCode'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RewardInfo, 'RewardInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get reward by reward Id.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:REWARD", action=2 (READ)</li><li><i>Returns</i>: reward instance</li></ul>
   */
  getReward_ByRewardId(rewardId: string): Promise<IResponseWithSync<RewardInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/rewards/{rewardId}'
      .replace('{namespace}', this.namespace)
      .replace('{rewardId}', rewardId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RewardInfo, 'RewardInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to query rewards by criteria.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:REWARD", action=2 (READ)</li><li><i>Returns</i>: the list of rewards</li></ul>
   */
  getRewardsByCriteria(queryParams?: {
    eventTopic?: string | null
    offset?: number
    limit?: number
    sortBy?: string | null
  }): Promise<IResponseWithSync<RewardPagingSlicedResult>> {
    const params = { limit: 20, sortBy: 'namespace:asc,rewardCode:asc', ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/rewards/byCriteria'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RewardPagingSlicedResult, 'RewardPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
