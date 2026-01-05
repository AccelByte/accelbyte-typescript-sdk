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
import { RecentPlayerAdminApi } from '../RecentPlayerAdminApi.js'

import { RecentPlayerQueryResponse } from '../../generated-definitions/RecentPlayerQueryResponse.js'

export enum Key_RecentPlayerAdmin {
  RecentPlayer = 'Session.RecentPlayerAdmin.RecentPlayer',
  RecentTeamPlayer = 'Session.RecentPlayerAdmin.RecentTeamPlayer'
}

/**
 * Query recent player with given user id. If user id parameter is empty: 1. Using User Token : It will get the user id from the token 2. Using client token : it will throw an error Please ensure environment variable &#34;RECENT_PLAYER_ENABLED&#34; is set to &#34;TRUE&#34; to use this feature.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RecentPlayerAdmin.RecentPlayer, input]
 * }
 * ```
 */
export const useRecentPlayerAdminApi_GetRecentPlayer = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; userId?: string | null } },
  options?: Omit<UseQueryOptions<RecentPlayerQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RecentPlayerQueryResponse>) => void
): UseQueryResult<RecentPlayerQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRecentPlayerAdminApi_GetRecentPlayer>[1]) => async () => {
    const response = await RecentPlayerAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRecentPlayer(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RecentPlayerQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_RecentPlayerAdmin.RecentPlayer, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query recent player who were on the same team with given user id. If user id parameter is empty: 1. Using User Token : It will get the user id from the token 2. Using client token : it will throw an error Please ensure environment variable &#34;RECENT_TEAM_PLAYER_ENABLED&#34; is set to &#34;TRUE&#34; to use this feature.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RecentPlayerAdmin.RecentTeamPlayer, input]
 * }
 * ```
 */
export const useRecentPlayerAdminApi_GetRecentTeamPlayer = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; userId?: string | null } },
  options?: Omit<UseQueryOptions<RecentPlayerQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RecentPlayerQueryResponse>) => void
): UseQueryResult<RecentPlayerQueryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRecentPlayerAdminApi_GetRecentTeamPlayer>[1]) => async () => {
    const response = await RecentPlayerAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRecentTeamPlayer(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RecentPlayerQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_RecentPlayerAdmin.RecentTeamPlayer, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
