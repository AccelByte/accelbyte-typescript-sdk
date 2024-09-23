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
import { PlatformAccountClosureHistoryInfoArray } from '../../generated-definitions/PlatformAccountClosureHistoryInfoArray.js'

export class PlatformAccountClosureAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get user platform account closure history.&lt;br&gt;
   */
  getPlatformClosureHistory_ByUserId(userId: string): Promise<Response<PlatformAccountClosureHistoryInfoArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/platform/closure/history'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PlatformAccountClosureHistoryInfoArray,
      'PlatformAccountClosureHistoryInfoArray'
    )
  }
}
