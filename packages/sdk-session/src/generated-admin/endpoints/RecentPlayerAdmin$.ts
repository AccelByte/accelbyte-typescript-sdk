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

export class RecentPlayerAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Query recent player with given user id. If user id parameter is empty: 1. Using User Token : It will get the user id from the token 2. Using client token : it will throw an error Please ensure environment variable &#34;RECENT_PLAYER_ENABLED&#34; is set to &#34;TRUE&#34; to use this feature.
   */
  getRecentPlayer(queryParams?: { limit?: number; userId?: string | null }): Promise<Response<RecentPlayerQueryResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/recent-player'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RecentPlayerQueryResponse,
      'RecentPlayerQueryResponse'
    )
  }
  /**
   * Query recent player who were on the same team with given user id. If user id parameter is empty: 1. Using User Token : It will get the user id from the token 2. Using client token : it will throw an error Please ensure environment variable &#34;RECENT_TEAM_PLAYER_ENABLED&#34; is set to &#34;TRUE&#34; to use this feature.
   */
  getRecentTeamPlayer(queryParams?: { limit?: number; userId?: string | null }): Promise<Response<RecentPlayerQueryResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/recent-team-player'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RecentPlayerQueryResponse,
      'RecentPlayerQueryResponse'
    )
  }
}
