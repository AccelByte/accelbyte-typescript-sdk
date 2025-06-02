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
import { LeaderboardConfigurationV3Api } from '../LeaderboardConfigurationV3Api.js'

import { GetAllLeaderboardConfigsPublicRespV3 } from '../../generated-definitions/GetAllLeaderboardConfigsPublicRespV3.js'
import { GetLeaderboardConfigPublicRespV3 } from '../../generated-definitions/GetLeaderboardConfigPublicRespV3.js'

export enum Key_LeaderboardConfigurationV3 {
  Leaderboards_v3 = 'Leaderboard.LeaderboardConfigurationV3.Leaderboards_v3',
  Leaderboard_ByLeaderboardCode_v3 = 'Leaderboard.LeaderboardConfigurationV3.Leaderboard_ByLeaderboardCode_v3'
}

/**
 * &lt;p&gt;This endpoint return all leaderboard configurations&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardConfigurationV3.Leaderboards_v3, input]
 * }
 * ```
 */
export const useLeaderboardConfigurationV3Api_GetLeaderboards_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { isDeleted?: boolean | null; limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetAllLeaderboardConfigsPublicRespV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetAllLeaderboardConfigsPublicRespV3>) => void
): UseQueryResult<GetAllLeaderboardConfigsPublicRespV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useLeaderboardConfigurationV3Api_GetLeaderboards_v3>[1]) => async () => {
    const response = await LeaderboardConfigurationV3Api(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getLeaderboards_v3(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetAllLeaderboardConfigsPublicRespV3, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardConfigurationV3.Leaderboards_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;p&gt;This endpoint returns a leaderboard configuration&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardConfigurationV3.Leaderboard_ByLeaderboardCode_v3, input]
 * }
 * ```
 */
export const useLeaderboardConfigurationV3Api_GetLeaderboard_ByLeaderboardCode_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { leaderboardCode: string },
  options?: Omit<UseQueryOptions<GetLeaderboardConfigPublicRespV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetLeaderboardConfigPublicRespV3>) => void
): UseQueryResult<GetLeaderboardConfigPublicRespV3, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useLeaderboardConfigurationV3Api_GetLeaderboard_ByLeaderboardCode_v3>[1]) => async () => {
      const response = await LeaderboardConfigurationV3Api(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getLeaderboard_ByLeaderboardCode_v3(input.leaderboardCode)
      callback && callback(response)
      return response.data
    }

  return useQuery<GetLeaderboardConfigPublicRespV3, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardConfigurationV3.Leaderboard_ByLeaderboardCode_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
