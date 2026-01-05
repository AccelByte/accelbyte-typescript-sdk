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
import { UserDataV3AdminApi } from '../UserDataV3AdminApi.js'

import { GetAllUserLeaderboardsRespV3 } from '../../generated-definitions/GetAllUserLeaderboardsRespV3.js'

export enum Key_UserDataV3Admin {
  Leaderboards_ByUserId_v3 = 'Leaderboard.UserDataV3Admin.Leaderboards_ByUserId_v3'
}

/**
 * &lt;p&gt;Get user leaderboard rankings&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserDataV3Admin.Leaderboards_ByUserId_v3, input]
 * }
 * ```
 */
export const useUserDataV3AdminApi_GetLeaderboards_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { limit?: number; offset?: number; previousVersion?: number } },
  options?: Omit<UseQueryOptions<GetAllUserLeaderboardsRespV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetAllUserLeaderboardsRespV3>) => void
): UseQueryResult<GetAllUserLeaderboardsRespV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUserDataV3AdminApi_GetLeaderboards_ByUserId_v3>[1]) => async () => {
    const response = await UserDataV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getLeaderboards_ByUserId_v3(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetAllUserLeaderboardsRespV3, AxiosError<ApiError>>({
    queryKey: [Key_UserDataV3Admin.Leaderboards_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
