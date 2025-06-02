/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { BulkUnlockAchievementRequest } from '../../generated-definitions/BulkUnlockAchievementRequest.js'
import { BulkUnlockAchievementResponseArray } from '../../generated-definitions/BulkUnlockAchievementResponseArray.js'
import { PaginatedUserAchievementResponse } from '../../generated-definitions/PaginatedUserAchievementResponse.js'

export class UserAchievementsAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt; &lt;p&gt;Note:&lt;/p&gt; &lt;p&gt; User Achievement status value mean: &lt;code&gt;status = 1 (in progress)&lt;/code&gt; and &lt;code&gt;status = 2 (unlocked)&lt;/code&gt;&lt;/p&gt; &lt;p&gt; &lt;code&gt;achievedAt&lt;/code&gt; value will return default value: &lt;code&gt;0001-01-01T00:00:00Z&lt;/code&gt; for user achievement that locked or in progress&lt;/p&gt;
   */
  getAchievements_ByUserId(
    userId: string,
    queryParams?: {
      limit?: number
      offset?: number
      preferUnlocked?: boolean | null
      sortBy?: 'achievedAt' | 'achievedAt:asc' | 'achievedAt:desc' | 'createdAt' | 'createdAt:asc' | 'createdAt:desc'
      tags?: string[]
    }
  ): Promise<Response<PaginatedUserAchievementResponse>> {
    const params = { limit: 10, preferUnlocked: true, ...queryParams } as AxiosRequestConfig
    const url = '/achievement/v1/admin/namespaces/{namespace}/users/{userId}/achievements'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedUserAchievementResponse,
      'PaginatedUserAchievementResponse'
    )
  }
  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
   */
  updateAchievementBulkUnlock_ByUserId(
    userId: string,
    data: BulkUnlockAchievementRequest
  ): Promise<Response<BulkUnlockAchievementResponseArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/achievement/v1/admin/namespaces/{namespace}/users/{userId}/achievements/bulkUnlock'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkUnlockAchievementResponseArray,
      'BulkUnlockAchievementResponseArray'
    )
  }
  /**
   * &lt;p&gt;[TEST FACILITY ONLY]&lt;/p&gt; &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [DELETE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt; &lt;/p&gt;
   */
  deleteReset_ByUserId_ByAchievementCode(userId: string, achievementCode: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/achievement/v1/admin/namespaces/{namespace}/users/{userId}/achievements/{achievementCode}/reset'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{achievementCode}', achievementCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
   */
  updateUnlock_ByUserId_ByAchievementCode(userId: string, achievementCode: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/achievement/v1/admin/namespaces/{namespace}/users/{userId}/achievements/{achievementCode}/unlock'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{achievementCode}', achievementCode)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
