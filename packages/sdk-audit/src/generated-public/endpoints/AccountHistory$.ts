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
import { PaginatedAccountHistoryResponse } from '../../generated-definitions/PaginatedAccountHistoryResponse.js'

export class AccountHistory$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to query user account histories. ------- Supported **property**: - display_name - unique_display_name - username - country - date_of_birth - email - password
   */
  getUsersMeAccountHistories(queryParams?: {
    endDate?: number
    limit?: number
    offset?: number
    property?: string | null
    startDate?: number
  }): Promise<Response<PaginatedAccountHistoryResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/audit/v1/public/users/me/account/histories'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedAccountHistoryResponse,
      'PaginatedAccountHistoryResponse'
    )
  }
}
