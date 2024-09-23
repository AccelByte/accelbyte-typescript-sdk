/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
import { AccountHistoryApi } from '../AccountHistoryApi.js'

import { PaginatedAccountHistoryResponse } from '../../generated-definitions/PaginatedAccountHistoryResponse.js'

export enum Key_AccountHistory {
  UsersMeAccountHistories = 'Audit.AccountHistory.UsersMeAccountHistories'
}

/**
 * This API is used to query user account histories. ------- Supported **property**: - display_name - unique_display_name - username - country - date_of_birth - email - password
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AccountHistory.UsersMeAccountHistories, input]
 * }
 * ```
 */
export const useAccountHistoryApi_GetUsersMeAccountHistories = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: { endDate?: number; limit?: number; offset?: number; property?: string | null; startDate?: number }
  },
  options?: Omit<UseQueryOptions<PaginatedAccountHistoryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedAccountHistoryResponse>) => void
): UseQueryResult<PaginatedAccountHistoryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAccountHistoryApi_GetUsersMeAccountHistories>[1]) => async () => {
    const response = await AccountHistoryApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getUsersMeAccountHistories(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedAccountHistoryResponse, AxiosError<ApiError>>({
    queryKey: [Key_AccountHistory.UsersMeAccountHistories, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
