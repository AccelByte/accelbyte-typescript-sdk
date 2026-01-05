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
import { LeaderboardDataApi } from '../LeaderboardDataApi.js'

import { ArchiveLeaderboardSignedUrlResponseArray } from '../../generated-definitions/ArchiveLeaderboardSignedUrlResponseArray.js'
import { GetLeaderboardRankingResp } from '../../generated-definitions/GetLeaderboardRankingResp.js'
import { GetPublicLeaderboardRankingResponse } from '../../generated-definitions/GetPublicLeaderboardRankingResponse.js'
import { UserRankingResponse } from '../../generated-definitions/UserRankingResponse.js'

export enum Key_LeaderboardData {
  Week_ByLeaderboardCode = 'Leaderboard.LeaderboardData.Week_ByLeaderboardCode',
  Month_ByLeaderboardCode = 'Leaderboard.LeaderboardData.Month_ByLeaderboardCode',
  Today_ByLeaderboardCode = 'Leaderboard.LeaderboardData.Today_ByLeaderboardCode',
  Season_ByLeaderboardCode = 'Leaderboard.LeaderboardData.Season_ByLeaderboardCode',
  Alltime_ByLeaderboardCode = 'Leaderboard.LeaderboardData.Alltime_ByLeaderboardCode',
  Alltime_ByLeaderboardCode_v2 = 'Leaderboard.LeaderboardData.Alltime_ByLeaderboardCode_v2',
  Archived_ByLeaderboardCode = 'Leaderboard.LeaderboardData.Archived_ByLeaderboardCode',
  User_ByLeaderboardCode_ByUserId = 'Leaderboard.LeaderboardData.User_ByLeaderboardCode_ByUserId'
}

/**
 * &lt;p&gt;Get rankings in current week leaderboard.&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardData.Week_ByLeaderboardCode, input]
 * }
 * ```
 */
export const useLeaderboardDataApi_GetWeek_ByLeaderboardCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { leaderboardCode: string; queryParams?: { limit?: number; offset?: number; previousVersion?: number } },
  options?: Omit<UseQueryOptions<GetLeaderboardRankingResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetLeaderboardRankingResp>) => void
): UseQueryResult<GetLeaderboardRankingResp, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useLeaderboardDataApi_GetWeek_ByLeaderboardCode>[1]) => async () => {
    const response = await LeaderboardDataApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getWeek_ByLeaderboardCode(input.leaderboardCode, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardData.Week_ByLeaderboardCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;p&gt;Get rankings in current month leaderboard.&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardData.Month_ByLeaderboardCode, input]
 * }
 * ```
 */
export const useLeaderboardDataApi_GetMonth_ByLeaderboardCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { leaderboardCode: string; queryParams?: { limit?: number; offset?: number; previousVersion?: number } },
  options?: Omit<UseQueryOptions<GetLeaderboardRankingResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetLeaderboardRankingResp>) => void
): UseQueryResult<GetLeaderboardRankingResp, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useLeaderboardDataApi_GetMonth_ByLeaderboardCode>[1]) => async () => {
    const response = await LeaderboardDataApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getMonth_ByLeaderboardCode(input.leaderboardCode, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardData.Month_ByLeaderboardCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;p&gt;Get rankings in today leaderboard.&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardData.Today_ByLeaderboardCode, input]
 * }
 * ```
 */
export const useLeaderboardDataApi_GetToday_ByLeaderboardCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { leaderboardCode: string; queryParams?: { limit?: number; offset?: number; previousVersion?: number } },
  options?: Omit<UseQueryOptions<GetLeaderboardRankingResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetLeaderboardRankingResp>) => void
): UseQueryResult<GetLeaderboardRankingResp, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useLeaderboardDataApi_GetToday_ByLeaderboardCode>[1]) => async () => {
    const response = await LeaderboardDataApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getToday_ByLeaderboardCode(input.leaderboardCode, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardData.Today_ByLeaderboardCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;p&gt;Get rankings in current season leaderboard.&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardData.Season_ByLeaderboardCode, input]
 * }
 * ```
 */
export const useLeaderboardDataApi_GetSeason_ByLeaderboardCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { leaderboardCode: string; queryParams?: { limit?: number; offset?: number; previousVersion?: number } },
  options?: Omit<UseQueryOptions<GetLeaderboardRankingResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetLeaderboardRankingResp>) => void
): UseQueryResult<GetLeaderboardRankingResp, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useLeaderboardDataApi_GetSeason_ByLeaderboardCode>[1]) => async () => {
    const response = await LeaderboardDataApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getSeason_ByLeaderboardCode(input.leaderboardCode, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardData.Season_ByLeaderboardCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get rankings in an all time leaderboard.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardData.Alltime_ByLeaderboardCode, input]
 * }
 * ```
 */
export const useLeaderboardDataApi_GetAlltime_ByLeaderboardCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { leaderboardCode: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetLeaderboardRankingResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetLeaderboardRankingResp>) => void
): UseQueryResult<GetLeaderboardRankingResp, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useLeaderboardDataApi_GetAlltime_ByLeaderboardCode>[1]) => async () => {
    const response = await LeaderboardDataApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getAlltime_ByLeaderboardCode(input.leaderboardCode, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardData.Alltime_ByLeaderboardCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get rankings in an all time leaderboard.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardData.Alltime_ByLeaderboardCode_v2, input]
 * }
 * ```
 */
export const useLeaderboardDataApi_GetAlltime_ByLeaderboardCode_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { leaderboardCode: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetPublicLeaderboardRankingResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetPublicLeaderboardRankingResponse>) => void
): UseQueryResult<GetPublicLeaderboardRankingResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useLeaderboardDataApi_GetAlltime_ByLeaderboardCode_v2>[1]) => async () => {
    const response = await LeaderboardDataApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getAlltime_ByLeaderboardCode_v2(input.leaderboardCode, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetPublicLeaderboardRankingResponse, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardData.Alltime_ByLeaderboardCode_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get signed url in an all time leaderboard that archived. NOTE: This will be a bulk endpoint to get sign url
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardData.Archived_ByLeaderboardCode, input]
 * }
 * ```
 */
export const useLeaderboardDataApi_GetArchived_ByLeaderboardCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { leaderboardCode: string; queryParams: { leaderboardCodes: string | null; slug?: string | null } },
  options?: Omit<UseQueryOptions<ArchiveLeaderboardSignedUrlResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ArchiveLeaderboardSignedUrlResponseArray>) => void
): UseQueryResult<ArchiveLeaderboardSignedUrlResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useLeaderboardDataApi_GetArchived_ByLeaderboardCode>[1]) => async () => {
    const response = await LeaderboardDataApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getArchived_ByLeaderboardCode(input.leaderboardCode, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ArchiveLeaderboardSignedUrlResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardData.Archived_ByLeaderboardCode, input],
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
 *    queryKey: [Key_LeaderboardData.User_ByLeaderboardCode_ByUserId, input]
 * }
 * ```
 */
export const useLeaderboardDataApi_DeleteUser_ByLeaderboardCode_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode: string; userId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode: string; userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode: string; userId: string }) => {
    const response = await LeaderboardDataApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteUser_ByLeaderboardCode_ByUserId(input.leaderboardCode, input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardData.User_ByLeaderboardCode_ByUserId],
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
 *    queryKey: [Key_LeaderboardData.User_ByLeaderboardCode_ByUserId, input]
 * }
 * ```
 */
export const useLeaderboardDataApi_GetUser_ByLeaderboardCode_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { leaderboardCode: string; userId: string; queryParams?: { previousVersion?: number } },
  options?: Omit<UseQueryOptions<UserRankingResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserRankingResponse>) => void
): UseQueryResult<UserRankingResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useLeaderboardDataApi_GetUser_ByLeaderboardCode_ByUserId>[1]) => async () => {
      const response = await LeaderboardDataApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getUser_ByLeaderboardCode_ByUserId(input.leaderboardCode, input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<UserRankingResponse, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardData.User_ByLeaderboardCode_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
