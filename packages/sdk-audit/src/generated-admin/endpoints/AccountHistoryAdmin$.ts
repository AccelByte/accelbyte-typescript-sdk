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
import { z } from 'zod'
import { PaginatedAccountHistoryResponse } from '../../generated-definitions/PaginatedAccountHistoryResponse.js'

export class AccountHistoryAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to query admin own account histories. ------- Supported **property**: - display_name - unique_display_name - username - country - date_of_birth - email - password
   */
  getUsersMeAccountHistories(queryParams?: {
    endDate?: number
    limit?: number
    offset?: number
    property?: string | null
    startDate?: number
  }): Promise<Response<PaginatedAccountHistoryResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/audit/v1/admin/users/me/account/histories'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedAccountHistoryResponse,
      'PaginatedAccountHistoryResponse'
    )
  }
  /**
   * This API is used to delete user account histories. For example: for GDPR account deletion
   */
  deleteAccountHistory_ByUserId(userId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/audit/v1/admin/namespace/{namespace}/users/{userId}/account/histories'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This API is used to query user account histories. **Note**: the namespace should be the publisher namespace and the user id should be publisher user id ------- - Supported **propertyType**: - profile: this is the default value - properties of **profile**: - display_name - unique_display_name - username - country - date_of_birth - email - password - mfa - properties of **mfa**: - mfa_authenticator - mfa_email - mfa_backup_code - all
   */
  getAccountHistories_ByUserId(
    userId: string,
    queryParams?: {
      endDate?: number
      limit?: number
      offset?: number
      order?: string | null
      property?: string | null
      propertyType?: string | null
      startDate?: number
    }
  ): Promise<Response<PaginatedAccountHistoryResponse>> {
    const params = { limit: 20, order: '1', ...queryParams } as AxiosRequestConfig
    const url = '/audit/v1/admin/namespace/{namespace}/users/{userId}/account/histories'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedAccountHistoryResponse,
      'PaginatedAccountHistoryResponse'
    )
  }
}
