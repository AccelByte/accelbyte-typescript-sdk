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
import { PaginatedContributorResponse } from '../definitions/PaginatedContributorResponse'
import { PaginatedGlobalAchievementResponse } from '../definitions/PaginatedGlobalAchievementResponse'
import { PaginatedUserContributionResponse } from '../definitions/PaginatedUserContributionResponse'

export class GlobalAchievements$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * <p>Required permission <code>NAMESPACE:{namespace}:ACHIEVEMENT [READ]</code> and scope <code>social</code></p> <p>Note:</p> <p> Global achievement status value mean: <code>status = 1 (in progress)</code> and <code>status = 2 (unlocked)</code></p>
   */
  getGlobalAchievements(queryParams?: {
    status?: string | null
    achievementCodes?: string | null
    tags?: string[]
    limit?: number
    offset?: number
    sortBy?: string | null
  }): Promise<IResponseWithSync<PaginatedGlobalAchievementResponse>> {
    const params = { limit: 10, ...queryParams } as SDKRequestConfig
    const url = '/achievement/v1/public/namespaces/{namespace}/global/achievements'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PaginatedGlobalAchievementResponse, 'PaginatedGlobalAchievementResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>Required permission <code>NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [READ]</code> and scope <code>social</code></p>
   */
  getGlobalAchievements_ByUserId(
    userId: string,
    queryParams?: { achievementCodes?: string | null; limit?: number; offset?: number; sortBy?: string | null; tags?: string[] }
  ): Promise<IResponseWithSync<PaginatedUserContributionResponse>> {
    const params = { limit: 10, sortBy: 'contributedValue:desc', ...queryParams } as SDKRequestConfig
    const url = '/achievement/v1/public/namespaces/{namespace}/users/{userId}/global/achievements'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PaginatedUserContributionResponse, 'PaginatedUserContributionResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>Required permission <code>NAMESPACE:{namespace}:ACHIEVEMENT [READ]</code> and scope <code>social</code></p>
   */
  getContributorsGlobal_ByAchievementCode(
    achievementCode: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null }
  ): Promise<IResponseWithSync<PaginatedContributorResponse>> {
    const params = { limit: 10, sortBy: 'contributedValue:desc', ...queryParams } as SDKRequestConfig
    const url = '/achievement/v1/public/namespaces/{namespace}/global/achievements/{achievementCode}/contributors'
      .replace('{namespace}', this.namespace)
      .replace('{achievementCode}', achievementCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PaginatedContributorResponse, 'PaginatedContributorResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>Required permission <code>NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [READ]</code> and scope <code>social</code></p> <p>Note:</p> <p> Global achievement should be unlocked to claim the reward. Only contributor of global achievement are eligible for rewards
   */
  createClaimGlobal_ByUserId_ByAchievementCode(achievementCode: string, userId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/achievement/v1/public/namespaces/{namespace}/users/{userId}/global/achievements/{achievementCode}/claim'
      .replace('{namespace}', this.namespace)
      .replace('{achievementCode}', achievementCode)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
