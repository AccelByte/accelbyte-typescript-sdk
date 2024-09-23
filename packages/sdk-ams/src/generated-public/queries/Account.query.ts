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
import { AccountApi } from '../AccountApi.js'

import { AccountResponse } from '../../generated-definitions/AccountResponse.js'

export enum Key_Account {
  Account = 'Ams.Account.Account'
}

/**
 * Required Permission: NAMESPACE:{namespace}:AMS:ACCOUNT [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Account.Account, input]
 * }
 * ```
 */
export const useAccountApi_GetAccount = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<AccountResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AccountResponse>) => void
): UseQueryResult<AccountResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAccountApi_GetAccount>[1]) => async () => {
    const response = await AccountApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getAccount()
    callback && callback(response)
    return response.data
  }

  return useQuery<AccountResponse, AxiosError<ApiError>>({
    queryKey: [Key_Account.Account, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
