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
import { NativeSessionPagingResponse } from '../../generated-definitions/NativeSessionPagingResponse.js'

export class NativeSessionAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * List of native sessions.
   */
  getNativeSessions(queryParams?: {
    limit?: number
    offset?: number
    order?: string | null
  }): Promise<Response<NativeSessionPagingResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/native-sessions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      NativeSessionPagingResponse,
      'NativeSessionPagingResponse'
    )
  }
}
