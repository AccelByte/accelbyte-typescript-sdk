/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { RecentPlayerQueryResponse } from '../../generated-definitions/RecentPlayerQueryResponse.js'

export class RecentPlayer$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Query user&#39;s recent player. Please ensure environment variable &#34;RECENT_PLAYER_ENABLED&#34; is set to &#34;TRUE&#34; to use this feature.
   */
  getRecentPlayer(queryParams?: { limit?: number }): Promise<Response<RecentPlayerQueryResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/recent-player'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RecentPlayerQueryResponse,
      'RecentPlayerQueryResponse'
    )
  }
  /**
   * Query user&#39;s recent player who were on the same team. Please ensure environment variable &#34;RECENT_TEAM_PLAYER_ENABLED&#34; is set to &#34;TRUE&#34; to use this feature.
   */
  getRecentTeamPlayer(queryParams?: { limit?: number }): Promise<Response<RecentPlayerQueryResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/session/v1/public/namespaces/{namespace}/recent-team-player'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RecentPlayerQueryResponse,
      'RecentPlayerQueryResponse'
    )
  }
}
