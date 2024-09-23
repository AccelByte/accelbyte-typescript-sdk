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
import { PlatformAccountClosureAdminApi } from '../PlatformAccountClosureAdminApi.js'

import { PlatformAccountClosureHistoryInfoArray } from '../../generated-definitions/PlatformAccountClosureHistoryInfoArray.js'

export enum Key_PlatformAccountClosureAdmin {
  PlatformClosureHistory_ByUserId = 'Platform.PlatformAccountClosureAdmin.PlatformClosureHistory_ByUserId'
}

/**
 * Get user platform account closure history.&lt;br&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlatformAccountClosureAdmin.PlatformClosureHistory_ByUserId, input]
 * }
 * ```
 */
export const usePlatformAccountClosureAdminApi_GetPlatformClosureHistory_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<PlatformAccountClosureHistoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PlatformAccountClosureHistoryInfoArray>) => void
): UseQueryResult<PlatformAccountClosureHistoryInfoArray, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePlatformAccountClosureAdminApi_GetPlatformClosureHistory_ByUserId>[1]) => async () => {
      const response = await PlatformAccountClosureAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getPlatformClosureHistory_ByUserId(input.userId)
      callback && callback(response)
      return response.data
    }

  return useQuery<PlatformAccountClosureHistoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_PlatformAccountClosureAdmin.PlatformClosureHistory_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
