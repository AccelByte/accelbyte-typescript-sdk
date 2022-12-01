/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { CodeGenUtil } from '@accelbyte/sdk/utils/CodeGenUtil'
import { SdkCache } from '@accelbyte/sdk/utils/SdkCache'
import { IResponseWithSync, Validate } from '@accelbyte/sdk/utils/Validate'
import { AxiosInstance } from 'axios'
/* eslint-disable camelcase */
import { RewardInfo } from './definitions/RewardInfo'
import { RewardPagingSlicedResult } from './definitions/RewardPagingSlicedResult'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class Reward$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This API is used to get reward by reward code.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:REWARD", action=2 (READ)</li><li><i>Returns</i>: reward instance</li></ul>
   */
  fetchRewardsByCode<T = RewardInfo>(queryParams?: { rewardCode: string | null }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/rewards/byCode'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RewardInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * This API is used to get reward by reward Id.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:REWARD", action=2 (READ)</li><li><i>Returns</i>: reward instance</li></ul>
   */
  fetchRewardsByRewardid<T = RewardInfo>(rewardId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/rewards/{rewardId}'
      .replace('{namespace}', this.namespace)
      .replace('{rewardId}', rewardId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RewardInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * This API is used to query rewards by criteria.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:REWARD", action=2 (READ)</li><li><i>Returns</i>: the list of rewards</li></ul>
   */
  fetchRewardsByCriteria<T = RewardPagingSlicedResult>(queryParams?: {
    eventTopic?: string | null
    offset?: number
    limit?: number
    sortBy?: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { limit: 20, sortBy: 'namespace:asc,rewardCode:asc', ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/rewards/byCriteria'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RewardPagingSlicedResult)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }
}
