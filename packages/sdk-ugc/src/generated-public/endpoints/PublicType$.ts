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
import { PaginatedGetTypeResponse } from '../../generated-definitions/PaginatedGetTypeResponse.js'

export class PublicType$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get available types paginated
   */
  getTypes(queryParams?: { limit?: number; offset?: number }): Promise<Response<PaginatedGetTypeResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/types'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedGetTypeResponse,
      'PaginatedGetTypeResponse'
    )
  }
}
