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
import { UserStatCycleItemPagingSlicedResult } from '../definitions/UserStatCycleItemPagingSlicedResult.js'

export class UserStatisticCycle$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * List user's statCycleItems by statCycle.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:STATITEM", action=2 (READ)</li><li><i>Returns</i>: stat cycle items</li></ul>
   */
  getStatCycleitemsMeUsers_ByCycleId(
    cycleId: string,
    queryParams?: { statCodes?: string | null; offset?: number; limit?: number; sortBy?: string | null }
  ): Promise<IResponseWithSync<UserStatCycleItemPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/me/statCycles/{cycleId}/statCycleitems'
      .replace('{namespace}', this.namespace)
      .replace('{cycleId}', cycleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserStatCycleItemPagingSlicedResult, 'UserStatCycleItemPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * List user's statCycleItems by statCycle.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:STATITEM", action=2 (READ)</li><li><i>Returns</i>: stat cycle items</li></ul>
   */
  getStatCycleitems_ByUserId_ByCycleId(
    userId: string,
    cycleId: string,
    queryParams?: { statCodes?: string | null; offset?: number; limit?: number; sortBy?: string | null }
  ): Promise<IResponseWithSync<UserStatCycleItemPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/statCycles/{cycleId}/statCycleitems'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{cycleId}', cycleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserStatCycleItemPagingSlicedResult, 'UserStatCycleItemPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
