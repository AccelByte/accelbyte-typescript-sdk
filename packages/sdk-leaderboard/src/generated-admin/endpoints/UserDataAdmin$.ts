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
import { GetAllUserLeaderboardsResp } from '../../generated-definitions/GetAllUserLeaderboardsResp.js'

export class UserDataAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * &lt;p&gt;Get user leaderboard rankings&lt;/p&gt;
   */
  getLeaderboards_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<IResponse<GetAllUserLeaderboardsResp>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/leaderboard/v1/admin/namespaces/{namespace}/users/{userId}/leaderboards'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetAllUserLeaderboardsResp,
      'GetAllUserLeaderboardsResp'
    )
  }
}
