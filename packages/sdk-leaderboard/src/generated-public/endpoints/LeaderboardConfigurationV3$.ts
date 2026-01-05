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
import { GetAllLeaderboardConfigsPublicRespV3 } from '../../generated-definitions/GetAllLeaderboardConfigsPublicRespV3.js'
import { GetLeaderboardConfigPublicRespV3 } from '../../generated-definitions/GetLeaderboardConfigPublicRespV3.js'

export class LeaderboardConfigurationV3$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * &lt;p&gt;This endpoint return all leaderboard configurations&lt;/p&gt;
   */
  getLeaderboards_v3(queryParams?: {
    isDeleted?: boolean | null
    limit?: number
    offset?: number
  }): Promise<Response<GetAllLeaderboardConfigsPublicRespV3>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/leaderboard/v3/public/namespaces/{namespace}/leaderboards'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetAllLeaderboardConfigsPublicRespV3,
      'GetAllLeaderboardConfigsPublicRespV3'
    )
  }
  /**
   * &lt;p&gt;This endpoint returns a leaderboard configuration&lt;/p&gt;
   */
  getLeaderboard_ByLeaderboardCode_v3(leaderboardCode: string): Promise<Response<GetLeaderboardConfigPublicRespV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/leaderboard/v3/public/namespaces/{namespace}/leaderboards/{leaderboardCode}'
      .replace('{namespace}', this.namespace)
      .replace('{leaderboardCode}', leaderboardCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetLeaderboardConfigPublicRespV3,
      'GetLeaderboardConfigPublicRespV3'
    )
  }
}
