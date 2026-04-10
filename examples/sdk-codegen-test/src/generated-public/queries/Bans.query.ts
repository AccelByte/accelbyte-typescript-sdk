/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import type { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import type { UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import type { AxiosError, AxiosResponse } from 'axios'
import { BansApi } from '../BansApi.js'

import { BanReasons } from '../../generated-definitions/BanReasons.js'
import { Bans } from '../../generated-definitions/Bans.js'

export const Key_Bans = {
  Bans: 'Iam.Bans.Bans',
  BansReasons: 'Iam.Bans.BansReasons'
} as const

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/bans [GET]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Bans.Bans, input]
 * }
 * ```
 */
export const useBansApi_GetBans = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<Bans, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<Bans>) => void
): UseQueryResult<Bans, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useBansApi_GetBans>[1]) => async () => {
    const response = await BansApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getBans()
    callback?.(response)
    return response.data
  }

  return useQuery<Bans, AxiosError<ApiError>>({
    queryKey: [Key_Bans.Bans, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/bans/reasons [GET]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Bans.BansReasons, input]
 * }
 * ```
 */
export const useBansApi_GetBansReasons = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<BanReasons, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BanReasons>) => void
): UseQueryResult<BanReasons, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useBansApi_GetBansReasons>[1]) => async () => {
    const response = await BansApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getBansReasons()
    callback?.(response)
    return response.data
  }

  return useQuery<BanReasons, AxiosError<ApiError>>({
    queryKey: [Key_Bans.BansReasons, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
