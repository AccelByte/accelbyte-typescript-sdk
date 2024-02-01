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
import { GetAllUserLeaderboardsRespV3 } from '../../generated-definitions/GetAllUserLeaderboardsRespV3.js'

export class UserDataV3Admin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD [READ]&#39;&lt;/p&gt; &lt;p&gt;Get user leaderboard rankings&lt;/p&gt;
   */
  getLeaderboards_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<GetAllUserLeaderboardsRespV3>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v3/admin/namespaces/{namespace}/users/{userId}/leaderboards'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetAllUserLeaderboardsRespV3, 'GetAllUserLeaderboardsRespV3')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
