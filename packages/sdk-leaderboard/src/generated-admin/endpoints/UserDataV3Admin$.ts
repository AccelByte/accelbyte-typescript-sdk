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
import { GetAllUserLeaderboardsRespV3 } from '../../generated-definitions/GetAllUserLeaderboardsRespV3.js'

export class UserDataV3Admin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * &lt;p&gt;Get user leaderboard rankings&lt;/p&gt;
   */
  getLeaderboards_ByUserId_v3(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<Response<GetAllUserLeaderboardsRespV3>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/leaderboard/v3/admin/namespaces/{namespace}/users/{userId}/leaderboards'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetAllUserLeaderboardsRespV3,
      'GetAllUserLeaderboardsRespV3'
    )
  }
}
