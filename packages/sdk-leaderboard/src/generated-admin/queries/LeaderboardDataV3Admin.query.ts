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
import { LeaderboardDataV3AdminApi } from '../LeaderboardDataV3AdminApi.js'

import { GetLeaderboardRankingResp } from '../../generated-definitions/GetLeaderboardRankingResp.js'
import { UserRankingResponseV3 } from '../../generated-definitions/UserRankingResponseV3.js'

export enum Key_LeaderboardDataV3Admin {
  User_ByUserId_v3 = 'Leaderboard.LeaderboardDataV3Admin.User_ByUserId_v3',
  Reset_ByLeaderboardCode_v3 = 'Leaderboard.LeaderboardDataV3Admin.Reset_ByLeaderboardCode_v3',
  Alltime_ByLeaderboardCode_v3 = 'Leaderboard.LeaderboardDataV3Admin.Alltime_ByLeaderboardCode_v3',
  User_ByLeaderboardCode_ByUserId_v3 = 'Leaderboard.LeaderboardDataV3Admin.User_ByLeaderboardCode_ByUserId_v3',
  Cycle_ByLeaderboardCode_ByCycleId_v3 = 'Leaderboard.LeaderboardDataV3Admin.Cycle_ByLeaderboardCode_ByCycleId_v3',
  Reset_ByLeaderboardCode_ByCycleId_v3 = 'Leaderboard.LeaderboardDataV3Admin.Reset_ByLeaderboardCode_ByCycleId_v3',
  User_ByLeaderboardCode_ByCycleId_ByUserId_v3 = 'Leaderboard.LeaderboardDataV3Admin.User_ByLeaderboardCode_ByCycleId_ByUserId_v3'
}

/**
 * Delete user ranking across leaderboard Remove entry with provided userId from leaderboard.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardDataV3Admin.User_ByUserId_v3, input]
 * }
 * ```
 */
export const useLeaderboardDataV3AdminApi_DeleteUser_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; queryParams: { leaderboardCode: string[] } }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; queryParams: { leaderboardCode: string[] } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; queryParams: { leaderboardCode: string[] } }) => {
    const response = await LeaderboardDataV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteUser_ByUserId_v3(input.userId, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardDataV3Admin.User_ByUserId_v3],
    mutationFn,
    ...options
  })
}

/**
 * &lt;p&gt;This endpoint will delete user ranking by leaderboard code&lt;/p&gt; &lt;p&gt;&lt;b&gt;Warning&lt;/b&gt;: This will permanently delete your data. Make sure to back up anything important before continuing.&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardDataV3Admin.Reset_ByLeaderboardCode_v3, input]
 * }
 * ```
 */
export const useLeaderboardDataV3AdminApi_DeleteReset_ByLeaderboardCodeMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode: string }) => {
    const response = await LeaderboardDataV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteReset_ByLeaderboardCode_v3(input.leaderboardCode)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardDataV3Admin.Reset_ByLeaderboardCode_v3],
    mutationFn,
    ...options
  })
}

/**
 * &lt;p&gt;Get rankings in an all time leaderboard.&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardDataV3Admin.Alltime_ByLeaderboardCode_v3, input]
 * }
 * ```
 */
export const useLeaderboardDataV3AdminApi_GetAlltime_ByLeaderboardCode_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { leaderboardCode: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetLeaderboardRankingResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetLeaderboardRankingResp>) => void
): UseQueryResult<GetLeaderboardRankingResp, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useLeaderboardDataV3AdminApi_GetAlltime_ByLeaderboardCode_v3>[1]) => async () => {
      const response = await LeaderboardDataV3AdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getAlltime_ByLeaderboardCode_v3(input.leaderboardCode, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataV3Admin.Alltime_ByLeaderboardCode_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Delete user ranking Remove entry with provided userId from leaderboard. If leaderboard with given leaderboard code not found, it will return http status not found (404). If the leaderboard is found and no entry found in it, it will still return success (204)
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardDataV3Admin.User_ByLeaderboardCode_ByUserId_v3, input]
 * }
 * ```
 */
export const useLeaderboardDataV3AdminApi_DeleteUser_ByLeaderboardCode_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode: string; userId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode: string; userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode: string; userId: string }) => {
    const response = await LeaderboardDataV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteUser_ByLeaderboardCode_ByUserId_v3(input.leaderboardCode, input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardDataV3Admin.User_ByLeaderboardCode_ByUserId_v3],
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
 *    queryKey: [Key_LeaderboardDataV3Admin.User_ByLeaderboardCode_ByUserId_v3, input]
 * }
 * ```
 */
export const useLeaderboardDataV3AdminApi_GetUser_ByLeaderboardCode_ByUserId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { leaderboardCode: string; userId: string; queryParams?: { previousVersion?: number } },
  options?: Omit<UseQueryOptions<UserRankingResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserRankingResponseV3>) => void
): UseQueryResult<UserRankingResponseV3, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useLeaderboardDataV3AdminApi_GetUser_ByLeaderboardCode_ByUserId_v3>[1]) => async () => {
      const response = await LeaderboardDataV3AdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getUser_ByLeaderboardCode_ByUserId_v3(input.leaderboardCode, input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<UserRankingResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataV3Admin.User_ByLeaderboardCode_ByUserId_v3, input],
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
 *    queryKey: [Key_LeaderboardDataV3Admin.Cycle_ByLeaderboardCode_ByCycleId_v3, input]
 * }
 * ```
 */
export const useLeaderboardDataV3AdminApi_GetCycle_ByLeaderboardCode_ByCycleId_v3 = (
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
    (sdk: AccelByteSDK, input: Parameters<typeof useLeaderboardDataV3AdminApi_GetCycle_ByLeaderboardCode_ByCycleId_v3>[1]) => async () => {
      const response = await LeaderboardDataV3AdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getCycle_ByLeaderboardCode_ByCycleId_v3(input.leaderboardCode, input.cycleId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataV3Admin.Cycle_ByLeaderboardCode_ByCycleId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;p&gt;This endpoint will delete user ranking by cycleId&lt;/p&gt; &lt;p&gt;&lt;b&gt;Warning&lt;/b&gt;: This will permanently delete your data. Make sure to back up anything important before continuing.&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardDataV3Admin.Reset_ByLeaderboardCode_ByCycleId_v3, input]
 * }
 * ```
 */
export const useLeaderboardDataV3AdminApi_DeleteReset_ByLeaderboardCode_ByCycleIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode: string; cycleId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode: string; cycleId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode: string; cycleId: string }) => {
    const response = await LeaderboardDataV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteReset_ByLeaderboardCode_ByCycleId_v3(input.leaderboardCode, input.cycleId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardDataV3Admin.Reset_ByLeaderboardCode_ByCycleId_v3],
    mutationFn,
    ...options
  })
}

/**
 * Delete user ranking by cycle id Remove entry with provided cycleId and userId from leaderboard. If leaderboard with given leaderboard code not found, it will return http status not found (404). If the leaderboard is found and no entry found in it, it will still return success (204)
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardDataV3Admin.User_ByLeaderboardCode_ByCycleId_ByUserId_v3, input]
 * }
 * ```
 */
export const useLeaderboardDataV3AdminApi_DeleteUser_ByLeaderboardCode_ByCycleId_ByUserIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode: string; cycleId: string; userId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode: string; cycleId: string; userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode: string; cycleId: string; userId: string }) => {
    const response = await LeaderboardDataV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteUser_ByLeaderboardCode_ByCycleId_ByUserId_v3(input.leaderboardCode, input.cycleId, input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardDataV3Admin.User_ByLeaderboardCode_ByCycleId_ByUserId_v3],
    mutationFn,
    ...options
  })
}
