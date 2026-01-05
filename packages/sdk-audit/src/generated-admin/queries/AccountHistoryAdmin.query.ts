/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { AccountHistoryAdminApi } from '../AccountHistoryAdminApi.js'

import { PaginatedAccountHistoryResponse } from '../../generated-definitions/PaginatedAccountHistoryResponse.js'

export enum Key_AccountHistoryAdmin {
  UsersMeAccountHistories = 'Audit.AccountHistoryAdmin.UsersMeAccountHistories',
  AccountHistory_ByUserId = 'Audit.AccountHistoryAdmin.AccountHistory_ByUserId',
  AccountHistories_ByUserId = 'Audit.AccountHistoryAdmin.AccountHistories_ByUserId'
}

/**
 * This API is used to query admin own account histories. ------- Supported **property**: - display_name - unique_display_name - username - country - date_of_birth - email - password
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AccountHistoryAdmin.UsersMeAccountHistories, input]
 * }
 * ```
 */
export const useAccountHistoryAdminApi_GetUsersMeAccountHistories = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: { endDate?: number; limit?: number; offset?: number; property?: string | null; startDate?: number }
  },
  options?: Omit<UseQueryOptions<PaginatedAccountHistoryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedAccountHistoryResponse>) => void
): UseQueryResult<PaginatedAccountHistoryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAccountHistoryAdminApi_GetUsersMeAccountHistories>[1]) => async () => {
    const response = await AccountHistoryAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getUsersMeAccountHistories(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedAccountHistoryResponse, AxiosError<ApiError>>({
    queryKey: [Key_AccountHistoryAdmin.UsersMeAccountHistories, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to delete user account histories. For example: for GDPR account deletion
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AccountHistoryAdmin.AccountHistory_ByUserId, input]
 * }
 * ```
 */
export const useAccountHistoryAdminApi_DeleteAccountHistory_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await AccountHistoryAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteAccountHistory_ByUserId(input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AccountHistoryAdmin.AccountHistory_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to query user account histories. **Note**: the namespace should be the publisher namespace and the user id should be publisher user id ------- - Supported **propertyType**: - profile: this is the default value - properties of **profile**: - display_name - unique_display_name - username - country - date_of_birth - email - password - mfa - properties of **mfa**: - mfa_authenticator - mfa_email - mfa_backup_code - all
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AccountHistoryAdmin.AccountHistories_ByUserId, input]
 * }
 * ```
 */
export const useAccountHistoryAdminApi_GetAccountHistories_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: {
      endDate?: number
      limit?: number
      offset?: number
      order?: string | null
      property?: string | null
      propertyType?: string | null
      startDate?: number
    }
  },
  options?: Omit<UseQueryOptions<PaginatedAccountHistoryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedAccountHistoryResponse>) => void
): UseQueryResult<PaginatedAccountHistoryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAccountHistoryAdminApi_GetAccountHistories_ByUserId>[1]) => async () => {
    const response = await AccountHistoryAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getAccountHistories_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedAccountHistoryResponse, AxiosError<ApiError>>({
    queryKey: [Key_AccountHistoryAdmin.AccountHistories_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
