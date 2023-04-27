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
import { GetAllLeaderboardConfigsPublicRespV3 } from '../definitions/GetAllLeaderboardConfigsPublicRespV3.js'
import { GetLeaderboardConfigPublicRespV3 } from '../definitions/GetLeaderboardConfigPublicRespV3.js'

export class LeaderboardConfigurationV3$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * <p>This endpoint return all leaderboard configurations</p>
   */
  getLeaderboards(queryParams?: {
    limit?: number
    offset?: number
    isDeleted?: boolean | null
  }): Promise<IResponseWithSync<GetAllLeaderboardConfigsPublicRespV3>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v3/public/namespaces/{namespace}/leaderboards'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => resultPromise, GetAllLeaderboardConfigsPublicRespV3, 'GetAllLeaderboardConfigsPublicRespV3')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>This endpoint returns a leaderboard configuration</p>
   */
  getLeaderboard_ByLeaderboardCode(leaderboardCode: string): Promise<IResponseWithSync<GetLeaderboardConfigPublicRespV3>> {
    const params = {} as SDKRequestConfig
    const url = '/leaderboard/v3/public/namespaces/{namespace}/leaderboards/{leaderboardCode}'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetLeaderboardConfigPublicRespV3, 'GetLeaderboardConfigPublicRespV3')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
