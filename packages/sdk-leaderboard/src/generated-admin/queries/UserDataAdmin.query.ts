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
import { UserDataAdminApi } from '../UserDataAdminApi.js'

import { GetAllUserLeaderboardsResp } from '../../generated-definitions/GetAllUserLeaderboardsResp.js'

export enum Key_UserDataAdmin {
  Leaderboards_ByUserId = 'Leaderboard.UserDataAdmin.Leaderboards_ByUserId'
}

/**
 * &lt;p&gt;Get user leaderboard rankings&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserDataAdmin.Leaderboards_ByUserId, input]
 * }
 * ```
 */
export const useUserDataAdminApi_GetLeaderboards_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { limit?: number; offset?: number; previousVersion?: number } },
  options?: Omit<UseQueryOptions<GetAllUserLeaderboardsResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetAllUserLeaderboardsResp>) => void
): UseQueryResult<GetAllUserLeaderboardsResp, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUserDataAdminApi_GetLeaderboards_ByUserId>[1]) => async () => {
    const response = await UserDataAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getLeaderboards_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetAllUserLeaderboardsResp, AxiosError<ApiError>>({
    queryKey: [Key_UserDataAdmin.Leaderboards_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
