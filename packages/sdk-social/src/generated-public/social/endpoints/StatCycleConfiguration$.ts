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
   * List stat cycles by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:STAT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycles&lt;/li&gt;&lt;/ul&gt;
   */
  getStatCycles(queryParams?: {
    cycleType?: 'ANNUALLY' | 'DAILY' | 'MONTHLY' | 'SEASONAL' | 'WEEKLY'
    limit?: number
    name?: string | null
    offset?: number
    sortBy?: string | null
    status?: 'ACTIVE' | 'INIT' | 'STOPPED'
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
   * Bulk get stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:STAT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of stat cycles&lt;/li&gt;&lt;/ul&gt;
   */
  createStatCycleBulk(data: BulkStatCycleRequest): Promise<IResponse<BulkStatCycleResult>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/statCycles/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, BulkStatCycleResult, 'BulkStatCycleResult')
  }

  /**
   * Get stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:STAT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycle info&lt;/ul&gt;
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
