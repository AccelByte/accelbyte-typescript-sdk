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
import { z } from 'zod'
import { PaginatedUserAchievementResponse } from '../definitions/PaginatedUserAchievementResponse.js'

export class UserAchievements$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * <p>Required permission <code>NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [READ]</code> and scope <code>social</code></p> <p>Note:</p> <p> User Achievement status value mean: <code>status = 1 (in progress)</code> and <code>status = 2 (unlocked)</code></p> <p> <code>achievedAt</code> value will return default value: <code>0001-01-01T00:00:00Z</code> for user achievement that locked or in progress</p>
   */
  getAchievements_ByUserId(
    userId: string,
    queryParams?: { tags?: string[]; limit?: number; offset?: number; preferUnlocked?: boolean | null; sortBy?: string | null }
  ): Promise<IResponseWithSync<PaginatedUserAchievementResponse>> {
    const params = { limit: 10, ...queryParams } as SDKRequestConfig
    const url = '/achievement/v1/public/namespaces/{namespace}/users/{userId}/achievements'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PaginatedUserAchievementResponse, 'PaginatedUserAchievementResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>Required permission <code>NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [UPDATE]</code> and scope <code>social</code></p>
   */
  updateUnlock_ByUserId_ByAchievementCode(userId: string, achievementCode: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/achievement/v1/public/namespaces/{namespace}/users/{userId}/achievements/{achievementCode}/unlock'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{achievementCode}', achievementCode)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
