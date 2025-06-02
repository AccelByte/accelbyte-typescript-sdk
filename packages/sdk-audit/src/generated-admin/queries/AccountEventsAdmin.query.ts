/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { AccountEventsAdminApi } from '../AccountEventsAdminApi.js'

import { CategoryResponse } from '../../generated-definitions/CategoryResponse.js'
import { PaginatedAccountEventResponse } from '../../generated-definitions/PaginatedAccountEventResponse.js'

export enum Key_AccountEventsAdmin {
  EventsCritical_ByUserId = 'Audit.AccountEventsAdmin.EventsCritical_ByUserId',
  EventsCriticalCategories_ByUserId = 'Audit.AccountEventsAdmin.EventsCriticalCategories_ByUserId'
}

/**
 * This API is used to query user account critical events. **Note**: - If the namespace is publisher namespace, the result will contain events from all namespaces - If the namespace is game namespace: - The result will contain the events from current game namespace - If the current admin has permission in publisher namespace, then the result will also contain events from publisher namespace ------- Critical events include: - Personal data request &amp; account deletion in GDPR - Suspicious login - 2FA activation/deactivation
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AccountEventsAdmin.EventsCritical_ByUserId, input]
 * }
 * ```
 */
export const useAccountEventsAdminApi_GetEventsCritical_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
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
  },
  options?: Omit<UseQueryOptions<PaginatedAccountEventResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedAccountEventResponse>) => void
): UseQueryResult<PaginatedAccountEventResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAccountEventsAdminApi_GetEventsCritical_ByUserId>[1]) => async () => {
    const response = await AccountEventsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getEventsCritical_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedAccountEventResponse, AxiosError<ApiError>>({
    queryKey: [Key_AccountEventsAdmin.EventsCritical_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to query user account critical event categories of the target user. **Note**: - If the namespace is publisher namespace, the result will contain categories from all namespaces - If the namespace is game namespace: - The result will contain the categories from current game namespace - If the current admin has permission in publisher namespace, then the result will also contain categories from publisher namespace ------- Critical events include: - Personal data request &amp; account deletion in GDPR - Suspicious login - 2FA activation/deactivation
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AccountEventsAdmin.EventsCriticalCategories_ByUserId, input]
 * }
 * ```
 */
export const useAccountEventsAdminApi_GetEventsCriticalCategories_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { endDate?: number; startDate?: number } },
  options?: Omit<UseQueryOptions<CategoryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CategoryResponse>) => void
): UseQueryResult<CategoryResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useAccountEventsAdminApi_GetEventsCriticalCategories_ByUserId>[1]) => async () => {
      const response = await AccountEventsAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getEventsCriticalCategories_ByUserId(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<CategoryResponse, AxiosError<ApiError>>({
    queryKey: [Key_AccountEventsAdmin.EventsCriticalCategories_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
