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
import { PaginatedGetTypeResponse } from '../../generated-definitions/PaginatedGetTypeResponse.js'

export class PublicType$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * Get available types paginated
   */
  getTypes(queryParams?: { limit?: number; offset?: number }): Promise<IResponse<PaginatedGetTypeResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
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
