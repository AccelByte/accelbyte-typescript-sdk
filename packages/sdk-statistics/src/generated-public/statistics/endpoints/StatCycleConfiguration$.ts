/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { BulkStatCycleRequest } from '../definitions/BulkStatCycleRequest.js'
import { BulkStatCycleResult } from '../definitions/BulkStatCycleResult.js'
import { StatCycleInfo } from '../definitions/StatCycleInfo.js'
import { StatCyclePagingSlicedResult } from '../definitions/StatCyclePagingSlicedResult.js'

export class StatCycleConfiguration$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * List stat cycles by pagination.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:STAT", action=2 (READ)</li><li><i>Returns</i>: stat cycles</li></ul>
   */
  getStatCycles(queryParams?: {
    name?: string | null
    cycleType?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'ANNUALLY' | 'SEASONAL'
    status?: 'INIT' | 'ACTIVE' | 'STOPPED'
    offset?: number
    limit?: number
    sortBy?: string | null
  }): Promise<IResponseWithSync<StatCyclePagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/statCycles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, StatCyclePagingSlicedResult, 'StatCyclePagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Bulk get stat cycle.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:STAT", action=2 (READ)</li><li><i>Returns</i>: list of stat cycles</li></ul>
   */
  createStatCycleBulk(data: BulkStatCycleRequest): Promise<IResponse<BulkStatCycleResult>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/statCycles/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, BulkStatCycleResult, 'BulkStatCycleResult')
  }

  /**
   * Get stat cycle.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:STAT", action=2 (READ)</li><li><i>Returns</i>: stat cycle info</ul>
   */
  getStatCycle_ByCycleId(cycleId: string): Promise<IResponseWithSync<StatCycleInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/statCycles/{cycleId}'
      .replace('{namespace}', this.namespace)
      .replace('{cycleId}', cycleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, StatCycleInfo, 'StatCycleInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
