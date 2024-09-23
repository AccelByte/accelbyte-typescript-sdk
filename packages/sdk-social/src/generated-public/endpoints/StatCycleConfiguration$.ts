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
import { BulkStatCycleRequest } from '../../generated-definitions/BulkStatCycleRequest.js'
import { BulkStatCycleResult } from '../../generated-definitions/BulkStatCycleResult.js'
import { StatCycleInfo } from '../../generated-definitions/StatCycleInfo.js'
import { StatCyclePagingSlicedResult } from '../../generated-definitions/StatCyclePagingSlicedResult.js'

export class StatCycleConfiguration$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * List stat cycles by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycles&lt;/li&gt;&lt;/ul&gt;
   */
  getStatCycles(queryParams?: {
    cycleType?: 'ANNUALLY' | 'DAILY' | 'MONTHLY' | 'SEASONAL' | 'WEEKLY'
    limit?: number
    name?: string | null
    offset?: number
    sortBy?: string | null
    status?: 'ACTIVE' | 'INIT' | 'STOPPED'
  }): Promise<Response<StatCyclePagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/statCycles'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      StatCyclePagingSlicedResult,
      'StatCyclePagingSlicedResult'
    )
  }
  /**
   * Bulk get stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of stat cycles&lt;/li&gt;&lt;/ul&gt;
   */
  createStatCycleBulk(data: BulkStatCycleRequest): Promise<Response<BulkStatCycleResult>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/statCycles/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BulkStatCycleResult, 'BulkStatCycleResult')
  }
  /**
   * Get stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycle info&lt;/ul&gt;
   */
  getStatCycle_ByCycleId(cycleId: string): Promise<Response<StatCycleInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/statCycles/{cycleId}'
      .replace('{namespace}', this.namespace)
      .replace('{cycleId}', cycleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, StatCycleInfo, 'StatCycleInfo')
  }
}
