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
import { PublicAchievementResponse } from '../definitions/PublicAchievementResponse'
import { PublicAchievementsResponse } from '../definitions/PublicAchievementsResponse'

export class Achievements$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * <p>Required permission <code>NAMESPACE:{namespace}:ACHIEVEMENT [READ]</code> and scope <code>social</code></p>
   */
  getAchievements(queryParams: {
    tags?: string[]
    sortBy?: string | null
    language: string | null
    limit?: number
    offset?: number
    global?: boolean | null
  }): Promise<IResponseWithSync<PublicAchievementsResponse>> {
    const params = { sortBy: 'listOrder:asc', limit: 10, ...queryParams } as SDKRequestConfig
    const url = '/achievement/v1/public/namespaces/{namespace}/achievements'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PublicAchievementsResponse, 'PublicAchievementsResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>Required permission <code>NAMESPACE:{namespace}:ACHIEVEMENT [READ]</code> and scope <code>social</code></p>
   */
  getAchievement_ByAchievementCode(
    achievementCode: string,
    queryParams: { language: string | null }
  ): Promise<IResponseWithSync<PublicAchievementResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/achievement/v1/public/namespaces/{namespace}/achievements/{achievementCode}'
      .replace('{namespace}', this.namespace)
      .replace('{achievementCode}', achievementCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PublicAchievementResponse, 'PublicAchievementResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
