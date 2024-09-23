/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { PublicAchievementResponse } from '../../generated-definitions/PublicAchievementResponse.js'
import { PublicAchievementsResponse } from '../../generated-definitions/PublicAchievementsResponse.js'

export class Achievements$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
   */
  getAchievements(queryParams: {
    language: string | null
    global?: boolean | null
    limit?: number
    offset?: number
    sortBy?:
      | 'listOrder'
      | 'listOrder:asc'
      | 'listOrder:desc'
      | 'createdAt'
      | 'createdAt:asc'
      | 'createdAt:desc'
      | 'updatedAt'
      | 'updatedAt:asc'
      | 'updatedAt:desc'
    tags?: string[]
  }): Promise<Response<PublicAchievementsResponse>> {
    const params = { limit: 10, sortBy: 'listOrder:asc', ...queryParams } as AxiosRequestConfig
    const url = '/achievement/v1/public/namespaces/{namespace}/achievements'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PublicAchievementsResponse,
      'PublicAchievementsResponse'
    )
  }
  /**
   * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
   */
  getAchievement_ByAchievementCode(
    achievementCode: string,
    queryParams: { language: string | null }
  ): Promise<Response<PublicAchievementResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/achievement/v1/public/namespaces/{namespace}/achievements/{achievementCode}'
      .replace('{namespace}', this.namespace)
      .replace('{achievementCode}', achievementCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PublicAchievementResponse,
      'PublicAchievementResponse'
    )
  }
}
