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
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { LeaderboardDataV3Api } from '../LeaderboardDataV3Api.js'

import { BulkUserIDsRequest } from '../../generated-definitions/BulkUserIDsRequest.js'
import { BulkUserRankingResponseV3 } from '../../generated-definitions/BulkUserRankingResponseV3.js'
import { GetLeaderboardRankingResp } from '../../generated-definitions/GetLeaderboardRankingResp.js'
import { UserRankingResponseV3 } from '../../generated-definitions/UserRankingResponseV3.js'

export enum Key_LeaderboardDataV3 {
  Alltime_ByLeaderboardCode_v3 = 'Leaderboard.LeaderboardDataV3.Alltime_ByLeaderboardCode_v3',
  UserBulk_ByLeaderboardCode_v3 = 'Leaderboard.LeaderboardDataV3.UserBulk_ByLeaderboardCode_v3',
  User_ByLeaderboardCode_ByUserId_v3 = 'Leaderboard.LeaderboardDataV3.User_ByLeaderboardCode_ByUserId_v3',
  Cycle_ByLeaderboardCode_ByCycleId_v3 = 'Leaderboard.LeaderboardDataV3.Cycle_ByLeaderboardCode_ByCycleId_v3'
}

/**
 * &lt;p&gt;Get rankings in an all time leaderboard.&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardDataV3.Alltime_ByLeaderboardCode_v3, input]
 * }
 * ```
 */
export const useLeaderboardDataV3Api_GetAlltime_ByLeaderboardCode_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { leaderboardCode: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetLeaderboardRankingResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetLeaderboardRankingResp>) => void
): UseQueryResult<GetLeaderboardRankingResp, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useLeaderboardDataV3Api_GetAlltime_ByLeaderboardCode_v3>[1]) => async () => {
    const response = await LeaderboardDataV3Api(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getAlltime_ByLeaderboardCode_v3(input.leaderboardCode, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataV3.Alltime_ByLeaderboardCode_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;p&gt;Bulk get users ranking in leaderboard, max allowed 20 userIDs at a time.&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardDataV3.UserBulk_ByLeaderboardCode_v3, input]
 * }
 * ```
 */
export const useLeaderboardDataV3Api_CreateUserBulk_ByLeaderboardCodeMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      BulkUserRankingResponseV3,
      AxiosError<ApiError>,
      SdkSetConfigParam & { leaderboardCode: string; data: BulkUserIDsRequest; queryParams?: { previousVersion?: number } }
    >,
    'mutationKey'
  >,
  callback?: (data: BulkUserRankingResponseV3) => void
): UseMutationResult<
  BulkUserRankingResponseV3,
  AxiosError<ApiError>,
  SdkSetConfigParam & { leaderboardCode: string; data: BulkUserIDsRequest; queryParams?: { previousVersion?: number } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { leaderboardCode: string; data: BulkUserIDsRequest; queryParams?: { previousVersion?: number } }
  ) => {
    const response = await LeaderboardDataV3Api(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createUserBulk_ByLeaderboardCode_v3(input.leaderboardCode, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardDataV3.UserBulk_ByLeaderboardCode_v3],
    mutationFn,
    ...options
  })
}

/**
 * &lt;p&gt;Get user ranking in leaderboard&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardDataV3.User_ByLeaderboardCode_ByUserId_v3, input]
 * }
 * ```
 */
export const useLeaderboardDataV3Api_GetUser_ByLeaderboardCode_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { leaderboardCode: string; userId: string; queryParams?: { previousVersion?: number } },
  options?: Omit<UseQueryOptions<UserRankingResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserRankingResponseV3>) => void
): UseQueryResult<UserRankingResponseV3, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useLeaderboardDataV3Api_GetUser_ByLeaderboardCode_ByUserId_v3>[1]) => async () => {
      const response = await LeaderboardDataV3Api(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getUser_ByLeaderboardCode_ByUserId_v3(input.leaderboardCode, input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<UserRankingResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataV3.User_ByLeaderboardCode_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;p&gt;Get rankings in cycle leaderboard.&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardDataV3.Cycle_ByLeaderboardCode_ByCycleId_v3, input]
 * }
 * ```
 */
export const useLeaderboardDataV3Api_GetCycle_ByLeaderboardCode_ByCycleId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    leaderboardCode: string
    cycleId: string
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  },
  options?: Omit<UseQueryOptions<GetLeaderboardRankingResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetLeaderboardRankingResp>) => void
): UseQueryResult<GetLeaderboardRankingResp, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useLeaderboardDataV3Api_GetCycle_ByLeaderboardCode_ByCycleId_v3>[1]) => async () => {
      const response = await LeaderboardDataV3Api(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getCycle_ByLeaderboardCode_ByCycleId_v3(input.leaderboardCode, input.cycleId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataV3.Cycle_ByLeaderboardCode_ByCycleId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
