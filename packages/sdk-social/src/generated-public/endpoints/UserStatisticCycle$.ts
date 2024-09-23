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
import { UserStatCycleItemPagingSlicedResult } from '../../generated-definitions/UserStatCycleItemPagingSlicedResult.js'

export class UserStatisticCycle$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * List user&#39;s statCycleItems by statCycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycle items&lt;/li&gt;&lt;/ul&gt;
   */
  getStatCycleitemsMeUsers_ByCycleId(
    cycleId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; statCodes?: string[] }
  ): Promise<Response<UserStatCycleItemPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/me/statCycles/{cycleId}/statCycleitems'
      .replace('{namespace}', this.namespace)
      .replace('{cycleId}', cycleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserStatCycleItemPagingSlicedResult,
      'UserStatCycleItemPagingSlicedResult'
    )
  }
  /**
   * List user&#39;s statCycleItems by statCycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycle items&lt;/li&gt;&lt;/ul&gt;
   */
  getStatCycleitems_ByUserId_ByCycleId(
    userId: string,
    cycleId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; statCodes?: string | null }
  ): Promise<Response<UserStatCycleItemPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/users/{userId}/statCycles/{cycleId}/statCycleitems'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{cycleId}', cycleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserStatCycleItemPagingSlicedResult,
      'UserStatCycleItemPagingSlicedResult'
    )
  }
}
