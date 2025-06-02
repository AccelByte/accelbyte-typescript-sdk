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
import { PaginatedContributorResponse } from '../../generated-definitions/PaginatedContributorResponse.js'
import { PaginatedGlobalAchievementResponse } from '../../generated-definitions/PaginatedGlobalAchievementResponse.js'
import { PaginatedUserContributionResponse } from '../../generated-definitions/PaginatedUserContributionResponse.js'

export class GlobalAchievementsAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt; &lt;p&gt;Note:&lt;/p&gt; &lt;p&gt; Global achievement status value mean: &lt;code&gt;status = 1 (in progress)&lt;/code&gt; and &lt;code&gt;status = 2 (unlocked)&lt;/code&gt;&lt;/p&gt;
   */
  getGlobalAchievements(queryParams?: {
    achievementCodes?: string | null
    limit?: number
    offset?: number
    sortBy?: 'achievedAt' | 'achievedAt:asc' | 'achievedAt:desc' | 'createdAt' | 'createdAt:asc' | 'createdAt:desc'
    status?: string | null
    tags?: string[]
  }): Promise<Response<PaginatedGlobalAchievementResponse>> {
    const params = { limit: 10, ...queryParams } as AxiosRequestConfig
    const url = '/achievement/v1/admin/namespaces/{namespace}/global/achievements'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedGlobalAchievementResponse,
      'PaginatedGlobalAchievementResponse'
    )
  }
  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
   */
  getGlobalAchievements_ByUserId(
    userId: string,
    queryParams?: {
      achievementCodes?: string | null
      limit?: number
      offset?: number
      sortBy?: 'contributedValue' | 'contributedValue:asc' | 'contributedValue:desc'
      tags?: string[]
    }
  ): Promise<Response<PaginatedUserContributionResponse>> {
    const params = { limit: 10, sortBy: 'contributedValue:desc', ...queryParams } as AxiosRequestConfig
    const url = '/achievement/v1/admin/namespaces/{namespace}/users/{userId}/global/achievements'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedUserContributionResponse,
      'PaginatedUserContributionResponse'
    )
  }
  /**
   * &lt;p&gt;[TEST FACILITY ONLY]&lt;/p&gt; &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [DELETE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt; &lt;/p&gt;
   */
  deleteResetGlobal_ByAchievementCode(achievementCode: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/achievement/v1/admin/namespaces/{namespace}/global/achievements/{achievementCode}/reset'
      .replace('{namespace}', this.namespace)
      .replace('{achievementCode}', achievementCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
   */
  getContributorsGlobal_ByAchievementCode(
    achievementCode: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: 'contributedValue' | 'contributedValue:asc' | 'contributedValue:desc' }
  ): Promise<Response<PaginatedContributorResponse>> {
    const params = { limit: 10, sortBy: 'contributedValue:desc', ...queryParams } as AxiosRequestConfig
    const url = '/achievement/v1/admin/namespaces/{namespace}/global/achievements/{achievementCode}/contributors'
      .replace('{namespace}', this.namespace)
      .replace('{achievementCode}', achievementCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedContributorResponse,
      'PaginatedContributorResponse'
    )
  }
}
