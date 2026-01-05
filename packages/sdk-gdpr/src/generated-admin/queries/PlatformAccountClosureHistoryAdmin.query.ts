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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { PlatformAccountClosureHistoryAdminApi } from '../PlatformAccountClosureHistoryAdminApi.js'

import { UserPlatformAccountClosureHistoriesResponse } from '../../generated-definitions/UserPlatformAccountClosureHistoriesResponse.js'

export enum Key_PlatformAccountClosureHistoryAdmin {
  UsersPlatformsClosureHistories = 'Gdpr.PlatformAccountClosureHistoryAdmin.UsersPlatformsClosureHistories'
}

/**
 * Get user&#39;s platform account closure histories. Scope: account ------ Supported platforms: - psn - steamnetwork - xbox
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlatformAccountClosureHistoryAdmin.UsersPlatformsClosureHistories, input]
 * }
 * ```
 */
export const usePlatformAccountClosureHistoryAdminApi_GetUsersPlatformsClosureHistories = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number; platform?: string | null; userId?: string | null } },
  options?: Omit<UseQueryOptions<UserPlatformAccountClosureHistoriesResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserPlatformAccountClosureHistoriesResponse>) => void
): UseQueryResult<UserPlatformAccountClosureHistoriesResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePlatformAccountClosureHistoryAdminApi_GetUsersPlatformsClosureHistories>[1]) =>
    async () => {
      const response = await PlatformAccountClosureHistoryAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getUsersPlatformsClosureHistories(input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<UserPlatformAccountClosureHistoriesResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlatformAccountClosureHistoryAdmin.UsersPlatformsClosureHistories, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
