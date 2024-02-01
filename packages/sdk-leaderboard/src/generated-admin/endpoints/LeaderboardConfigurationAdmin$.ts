/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { DeleteBulkLeaderboardsReq } from '../../generated-definitions/DeleteBulkLeaderboardsReq.js'
import { DeleteBulkLeaderboardsResp } from '../../generated-definitions/DeleteBulkLeaderboardsResp.js'
import { GetAllLeaderboardConfigsResp } from '../../generated-definitions/GetAllLeaderboardConfigsResp.js'
import { GetLeaderboardConfigResp } from '../../generated-definitions/GetLeaderboardConfigResp.js'
import { LeaderboardConfigReq } from '../../generated-definitions/LeaderboardConfigReq.js'
import { UpdateLeaderboardConfigReq } from '../../generated-definitions/UpdateLeaderboardConfigReq.js'

export class LeaderboardConfigurationAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [READ]&#39;&lt;/p&gt; &lt;p&gt;This endpoint return all leaderboard configurations&lt;/p&gt;
   */
  getLeaderboards(queryParams?: {
    isArchived?: boolean | null
    isDeleted?: boolean | null
    limit?: number
    offset?: number
  }): Promise<IResponseWithSync<GetAllLeaderboardConfigsResp>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/admin/namespaces/{namespace}/leaderboards'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetAllLeaderboardConfigsResp, 'GetAllLeaderboardConfigsResp')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [CREATE]&#39;&lt;/p&gt; &lt;p&gt;&lt;b&gt;Fields :&lt;/b&gt;&lt;/p&gt; &lt;ul&gt;&lt;li&gt;LeaderboardConfig code must be lowercase and maximum length is 48 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;Maximum length for leaderboard name is 128 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;Start time must be follow RFC3339 standard. e.g. 2020-10-02T15:00:00.05Z&lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;Season period must be greater than 31 days.&lt;/li&gt; &lt;li&gt;If seasonPeriod is filled, the LeaderboardConfig would have seasonal leaderboard.&lt;/li&gt; &lt;li&gt;Reset Date must be a number 1 - 31. Default is &#39;1&#39;.&lt;/li&gt; &lt;li&gt;Reset Day must be a number 0 - 6. 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday (day of week). Default is &#39;0&#39;.&lt;/li&gt; &lt;li&gt;Reset time must be &lt;b&gt;hours:minutes&lt;/b&gt; in 24 hours format e.g. 01:30, 10:30, 15:30, 23:15.Default is &#39;00:00&#39;.&lt;/li&gt; &lt;li&gt;Stat Code is related with statistic code in statistic service. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;/ul&gt;
   */
  createLeaderboard(data: LeaderboardConfigReq): Promise<IResponse<LeaderboardConfigReq>> {
    const params = {} as SDKRequestConfig
    const url = '/leaderboard/v1/admin/namespaces/{namespace}/leaderboards'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, LeaderboardConfigReq, 'LeaderboardConfigReq')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [DELETE]&#39;&lt;/p&gt; &lt;p&gt;This endpoint delete multiple leaderboards configuration in one request&lt;/p&gt;
   */
  createLeaderboardDelete(data: DeleteBulkLeaderboardsReq): Promise<IResponse<DeleteBulkLeaderboardsResp>> {
    const params = {} as SDKRequestConfig
    const url = '/leaderboard/v1/admin/namespaces/{namespace}/leaderboards/delete'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, DeleteBulkLeaderboardsResp, 'DeleteBulkLeaderboardsResp')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [DELETE]&#39;&lt;/p&gt; &lt;p&gt;This endpoint delete a leaderboard configuration&lt;/p&gt;
   */
  deleteLeaderboard_ByLeaderboardCode(leaderboardCode: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [READ]&#39;&lt;/p&gt; &lt;p&gt;This endpoint returns a leaderboard configuration&lt;/p&gt;
   */
  getLeaderboard_ByLeaderboardCode(leaderboardCode: string): Promise<IResponseWithSync<GetLeaderboardConfigResp>> {
    const params = {} as SDKRequestConfig
    const url = '/leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetLeaderboardConfigResp, 'GetLeaderboardConfigResp')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [UPDATE]&#39;&lt;/p&gt; &lt;p&gt;&lt;b&gt;Fields :&lt;/b&gt;&lt;/p&gt; &lt;ul&gt; &lt;li&gt;Maximum length for leaderboard name is 128 characters.&lt;/li&gt; &lt;li&gt;Start time must be follow RFC3339 standard. e.g. 2020-10-02T15:00:00.05Z&lt;/li&gt; &lt;li&gt;Season period must be greater than 31 days.&lt;/li&gt; &lt;li&gt;If seasonPeriod is filled, the LeaderboardConfig would have seasonal leaderboard.&lt;/li&gt; &lt;li&gt;Reset Date must be a number 1 - 31. Default is &#39;1&#39;.&lt;/li&gt; &lt;li&gt;Reset Day must be a number 0 - 6. 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday (day of week). Default is &#39;0&#39;.&lt;/li&gt; &lt;li&gt;Reset time must be &lt;b&gt;hours:minutes&lt;/b&gt; in 24 hours format e.g. 01:30, 10:30, 15:30, 23:15.&lt;/li&gt; &lt;/ul&gt;
   */
  updateLeaderboard_ByLeaderboardCode(
    leaderboardCode: string,
    data: UpdateLeaderboardConfigReq
  ): Promise<IResponse<GetLeaderboardConfigResp>> {
    const params = {} as SDKRequestConfig
    const url = '/leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GetLeaderboardConfigResp, 'GetLeaderboardConfigResp')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;p&gt;&lt;b&gt;[Test Facility Only]&lt;/b&gt;&lt;/p&gt; &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [DELETE]&#39;&lt;/p&gt; &lt;p&gt;This endpoint will delete leaderboard configuration and its data&lt;/p&gt; &lt;p&gt;Note: this endpoint only works on development environment, you might want to use &lt;b&gt;archive endpoint&lt;/b&gt; instead hard delete.&lt;/p&gt;
   */
  deleteHard_ByLeaderboardCode(leaderboardCode: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/leaderboard/v1/admin/namespaces/{namespace}/leaderboards/{leaderboardCode}/hard'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
