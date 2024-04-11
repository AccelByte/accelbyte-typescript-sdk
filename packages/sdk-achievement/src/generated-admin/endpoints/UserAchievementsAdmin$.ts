/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { PaginatedUserAchievementResponse } from '../../generated-definitions/PaginatedUserAchievementResponse.js'

export class UserAchievementsAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt; &lt;p&gt;Note:&lt;/p&gt; &lt;p&gt; User Achievement status value mean: &lt;code&gt;status = 1 (in progress)&lt;/code&gt; and &lt;code&gt;status = 2 (unlocked)&lt;/code&gt;&lt;/p&gt; &lt;p&gt; &lt;code&gt;achievedAt&lt;/code&gt; value will return default value: &lt;code&gt;0001-01-01T00:00:00Z&lt;/code&gt; for user achievement that locked or in progress&lt;/p&gt;
   */
  getAchievements_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; preferUnlocked?: boolean | null; sortBy?: string | null; tags?: string[] }
  ): Promise<IResponse<PaginatedUserAchievementResponse>> {
    const params = { limit: 10, preferUnlocked: true, ...queryParams } as SDKRequestConfig
    const url = '/achievement/v1/admin/namespaces/{namespace}/users/{userId}/achievements'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PaginatedUserAchievementResponse, 'PaginatedUserAchievementResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;p&gt;[TEST FACILITY ONLY]&lt;/p&gt; &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [DELETE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt; &lt;/p&gt;
   */
  deleteReset_ByUserId_ByAchievementCode(userId: string, achievementCode: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/achievement/v1/admin/namespaces/{namespace}/users/{userId}/achievements/{achievementCode}/reset'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{achievementCode}', achievementCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
   */
  updateUnlock_ByUserId_ByAchievementCode(userId: string, achievementCode: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/achievement/v1/admin/namespaces/{namespace}/users/{userId}/achievements/{achievementCode}/unlock'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{achievementCode}', achievementCode)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
