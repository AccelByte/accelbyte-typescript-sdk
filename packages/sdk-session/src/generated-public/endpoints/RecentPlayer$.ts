/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { RecentPlayerQueryResponse } from '../../generated-definitions/RecentPlayerQueryResponse.js'

export class RecentPlayer$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Query user&#39;s recent player. Please ensure environment variable &#34;RECENT_PLAYER_ENABLED&#34; is set to &#34;TRUE&#34; to use this feature.
   */
  getRecentPlayer(queryParams?: { limit?: number }): Promise<IResponseWithSync<RecentPlayerQueryResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/recent-player'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, RecentPlayerQueryResponse, 'RecentPlayerQueryResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Query user&#39;s recent player who were on the same team. Please ensure environment variable &#34;RECENT_TEAM_PLAYER_ENABLED&#34; is set to &#34;TRUE&#34; to use this feature.
   */
  getRecentTeamPlayer(queryParams?: { limit?: number }): Promise<IResponseWithSync<RecentPlayerQueryResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/recent-team-player'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, RecentPlayerQueryResponse, 'RecentPlayerQueryResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
