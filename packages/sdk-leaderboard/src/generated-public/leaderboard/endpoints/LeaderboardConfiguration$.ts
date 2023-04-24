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
import { GetAllLeaderboardConfigsPublicResp } from '../definitions/GetAllLeaderboardConfigsPublicResp'
import { LeaderboardConfigReq } from '../definitions/LeaderboardConfigReq'

export class LeaderboardConfiguration$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * <p>This endpoint return all leaderboard configurations</p>
   */
  getLeaderboards(queryParams?: {
    limit?: number
    offset?: number
    isDeleted?: boolean | null
    isArchived?: boolean | null
  }): Promise<IResponseWithSync<GetAllLeaderboardConfigsPublicResp>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/public/namespaces/{namespace}/leaderboards'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetAllLeaderboardConfigsPublicResp, 'GetAllLeaderboardConfigsPublicResp')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Public endpoint to create a new leaderboard. <p>Required permission 'NAMESPACE:{namespace}:LEADERBOARD [CREATE]'</p> <p><b>Fields :</b></p> <ul><li>LeaderboardConfig code must be lowercase and maximum length is 48 characters. <b>(required)</b>.</li> <li>Maximum length for leaderboard name is 128 characters. <b>(required)</b>.</li> <li>Start time must be follow RFC3339 standard. e.g. 2020-10-02T15:00:00.05Z<b>(required)</b>.</li> <li>Season period must be greater than 31 days.</li> <li>If seasonPeriod is filled, the LeaderboardConfig would have seasonal leaderboard.</li> <li>Reset Date must be a number 1 - 31. Default is '1'.</li> <li>Reset Day must be a number 0 - 6. 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday (day of week). Default is '0'.</li> <li>Reset time must be <b>hours:minutes</b> in 24 hours format e.g. 01:30, 10:30, 15:30, 23:15.Default is '00:00'.</li> <li>Stat Code is related with statistic code in statistic service. <b>(required)</b>.</li> </ul>
   */
  createLeaderboard(data: LeaderboardConfigReq): Promise<IResponse<LeaderboardConfigReq>> {
    const params = {} as SDKRequestConfig
    const url = '/leaderboard/v1/public/namespaces/{namespace}/leaderboards'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, LeaderboardConfigReq, 'LeaderboardConfigReq')
  }

  /**
   * This endpoint return all leaderboard configurations
   */
  getLeaderboards_ByNS(queryParams?: { limit?: number; offset?: number }): Promise<IResponseWithSync<GetAllLeaderboardConfigsPublicResp>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v2/public/namespaces/{namespace}/leaderboards'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetAllLeaderboardConfigsPublicResp, 'GetAllLeaderboardConfigsPublicResp')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
