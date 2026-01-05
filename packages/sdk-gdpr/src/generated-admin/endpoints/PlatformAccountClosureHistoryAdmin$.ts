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
import { UserPlatformAccountClosureHistoriesResponse } from '../../generated-definitions/UserPlatformAccountClosureHistoriesResponse.js'

export class PlatformAccountClosureHistoryAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get user&#39;s platform account closure histories. Scope: account ------ Supported platforms: - psn - steamnetwork - xbox
   */
  getUsersPlatformsClosureHistories(queryParams?: {
    limit?: number
    offset?: number
    platform?: string | null
    userId?: string | null
  }): Promise<Response<UserPlatformAccountClosureHistoriesResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/users/platforms/closure/histories'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserPlatformAccountClosureHistoriesResponse,
      'UserPlatformAccountClosureHistoriesResponse'
    )
  }
}
