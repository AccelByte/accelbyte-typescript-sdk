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
import { LeaderboardConfigurationApi } from '../LeaderboardConfigurationApi.js'

import { GetAllLeaderboardConfigsPublicResp } from '../../generated-definitions/GetAllLeaderboardConfigsPublicResp.js'
import { LeaderboardConfigReq } from '../../generated-definitions/LeaderboardConfigReq.js'

export enum Key_LeaderboardConfiguration {
  Leaderboards = 'Leaderboard.LeaderboardConfiguration.Leaderboards',
  Leaderboard = 'Leaderboard.LeaderboardConfiguration.Leaderboard',
  Leaderboards_v2 = 'Leaderboard.LeaderboardConfiguration.Leaderboards_v2'
}

/**
 * &lt;p&gt;This endpoint return all leaderboard configurations&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardConfiguration.Leaderboards, input]
 * }
 * ```
 */
export const useLeaderboardConfigurationApi_GetLeaderboards = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { isArchived?: boolean | null; isDeleted?: boolean | null; limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetAllLeaderboardConfigsPublicResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetAllLeaderboardConfigsPublicResp>) => void
): UseQueryResult<GetAllLeaderboardConfigsPublicResp, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useLeaderboardConfigurationApi_GetLeaderboards>[1]) => async () => {
    const response = await LeaderboardConfigurationApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getLeaderboards(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetAllLeaderboardConfigsPublicResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardConfiguration.Leaderboards, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Public endpoint to create a new leaderboard. &lt;p&gt;&lt;b&gt;Fields :&lt;/b&gt;&lt;/p&gt; &lt;ul&gt;&lt;li&gt;LeaderboardConfig code must be lowercase and maximum length is 48 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;Maximum length for leaderboard name is 128 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;Start time must be follow RFC3339 standard. e.g. 2020-10-02T15:00:00.05Z&lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;Season period must be greater than 31 days.&lt;/li&gt; &lt;li&gt;If seasonPeriod is filled, the LeaderboardConfig would have seasonal leaderboard.&lt;/li&gt; &lt;li&gt;Reset Date must be a number 1 - 31. Default is &#39;1&#39;.&lt;/li&gt; &lt;li&gt;Reset Day must be a number 0 - 6. 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday (day of week). Default is &#39;0&#39;.&lt;/li&gt; &lt;li&gt;Reset time must be &lt;b&gt;hours:minutes&lt;/b&gt; in 24 hours format e.g. 01:30, 10:30, 15:30, 23:15.Default is &#39;00:00&#39;.&lt;/li&gt; &lt;li&gt;Stat Code is related with statistic code in statistic service. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardConfiguration.Leaderboard, input]
 * }
 * ```
 */
export const useLeaderboardConfigurationApi_CreateLeaderboardMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<LeaderboardConfigReq, AxiosError<ApiError>, SdkSetConfigParam & { data: LeaderboardConfigReq }>,
    'mutationKey'
  >,
  callback?: (data: LeaderboardConfigReq) => void
): UseMutationResult<LeaderboardConfigReq, AxiosError<ApiError>, SdkSetConfigParam & { data: LeaderboardConfigReq }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: LeaderboardConfigReq }) => {
    const response = await LeaderboardConfigurationApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createLeaderboard(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardConfiguration.Leaderboard],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint return all leaderboard configurations
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardConfiguration.Leaderboards_v2, input]
 * }
 * ```
 */
export const useLeaderboardConfigurationApi_GetLeaderboards_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetAllLeaderboardConfigsPublicResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetAllLeaderboardConfigsPublicResp>) => void
): UseQueryResult<GetAllLeaderboardConfigsPublicResp, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useLeaderboardConfigurationApi_GetLeaderboards_v2>[1]) => async () => {
    const response = await LeaderboardConfigurationApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getLeaderboards_v2(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetAllLeaderboardConfigsPublicResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardConfiguration.Leaderboards_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
