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
import { CategoryResponse } from '../../generated-definitions/CategoryResponse.js'
import { PaginatedAccountEventResponse } from '../../generated-definitions/PaginatedAccountEventResponse.js'

export class AccountEventsAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to query user account critical events. **Note**: - If the namespace is publisher namespace, the result will contain events from all namespaces - If the namespace is game namespace: - The result will contain the events from current game namespace - If the current admin has permission in publisher namespace, then the result will also contain events from publisher namespace ------- Critical events include: - Personal data request &amp; account deletion in GDPR - Suspicious login - 2FA activation/deactivation
   */
  getEventsCritical_ByUserId(
    userId: string,
    queryParams?: {
      action?: string | null
      category?: string | null
      endDate?: number
      limit?: number
      offset?: number
      order?: string | null
      property?: string | null
      startDate?: number
    }
  ): Promise<Response<PaginatedAccountEventResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/audit/v1/admin/namespace/{namespace}/users/{userId}/events/critical'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedAccountEventResponse,
      'PaginatedAccountEventResponse'
    )
  }
  /**
   * This API is used to query user account critical event categories of the target user. **Note**: - If the namespace is publisher namespace, the result will contain categories from all namespaces - If the namespace is game namespace: - The result will contain the categories from current game namespace - If the current admin has permission in publisher namespace, then the result will also contain categories from publisher namespace ------- Critical events include: - Personal data request &amp; account deletion in GDPR - Suspicious login - 2FA activation/deactivation
   */
  getEventsCriticalCategories_ByUserId(
    userId: string,
    queryParams?: { endDate?: number; startDate?: number }
  ): Promise<Response<CategoryResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/audit/v1/admin/namespace/{namespace}/users/{userId}/events/critical/categories'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CategoryResponse, 'CategoryResponse')
  }
}
