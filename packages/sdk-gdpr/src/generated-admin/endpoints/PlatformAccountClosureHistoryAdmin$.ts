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
import { UserPlatformAccountClosureHistoriesResponse } from '../../generated-definitions/UserPlatformAccountClosureHistoriesResponse.js'

export class PlatformAccountClosureHistoryAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * Get user&#39;s platform account closure histories. ------ Supported platforms: * psn Scope: account
   */
  getUsersPlatformsClosureHistories(queryParams?: {
    limit?: number
    offset?: number
    platform?: string | null
    userId?: string | null
  }): Promise<IResponse<UserPlatformAccountClosureHistoriesResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/users/platforms/closure/histories'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      UserPlatformAccountClosureHistoriesResponse,
      'UserPlatformAccountClosureHistoriesResponse'
    )
  }
}
