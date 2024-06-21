/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiError } from '@accelbyte/sdk'
import { AxiosError } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { LeaderboardDataV3AdminApi } from '../LeaderboardDataV3AdminApi.js'

import { GetLeaderboardRankingResp } from '../../generated-definitions/GetLeaderboardRankingResp.js'
import { UserRankingResponseV3 } from '../../generated-definitions/UserRankingResponseV3.js'

export enum Key_LeaderboardDataV3Admin {
  User_ByUserId = 'LeaderboardDataV3Admin.User_ByUserId',
  Reset_ByLeaderboardCode = 'LeaderboardDataV3Admin.Reset_ByLeaderboardCode',
  Alltime_ByLeaderboardCode = 'LeaderboardDataV3Admin.Alltime_ByLeaderboardCode',
  User_ByLeaderboardCode_ByUserId = 'LeaderboardDataV3Admin.User_ByLeaderboardCode_ByUserId',
  Cycle_ByLeaderboardCode_ByCycleId = 'LeaderboardDataV3Admin.Cycle_ByLeaderboardCode_ByCycleId'
}

export const useAdmDeleteUser_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; queryParams: { leaderboardCode: string[] } }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; queryParams: { leaderboardCode: string[] } }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; queryParams: { leaderboardCode: string[] } }) => {
    const data = await LeaderboardDataV3AdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteUser_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardDataV3Admin.User_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteReset_ByLeaderboardCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { leaderboardCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { leaderboardCode: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { leaderboardCode: string }) => {
    const data = await LeaderboardDataV3AdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteReset_ByLeaderboardCode(
      input.leaderboardCode
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardDataV3Admin.Reset_ByLeaderboardCode],
    mutationFn,
    ...options
  })
}

export const useAdmAlltime_ByLeaderboardCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { leaderboardCode: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetLeaderboardRankingResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetLeaderboardRankingResp) => void
): UseQueryResult<GetLeaderboardRankingResp, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAlltime_ByLeaderboardCode>[1]) => async () => {
    const data = await LeaderboardDataV3AdminApi(sdk, { namespace: input.namespace }).getAlltime_ByLeaderboardCode(
      input.leaderboardCode,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataV3Admin.Alltime_ByLeaderboardCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteUser_ByLeaderboardCode_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { leaderboardCode: string; userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { leaderboardCode: string; userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { leaderboardCode: string; userId: string }) => {
    const data = await LeaderboardDataV3AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteUser_ByLeaderboardCode_ByUserId(input.leaderboardCode, input.userId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardDataV3Admin.User_ByLeaderboardCode_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmUser_ByLeaderboardCode_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { leaderboardCode: string; userId: string },
  options?: Omit<UseQueryOptions<UserRankingResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: UserRankingResponseV3) => void
): UseQueryResult<UserRankingResponseV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmUser_ByLeaderboardCode_ByUserId>[1]) => async () => {
    const data = await LeaderboardDataV3AdminApi(sdk, { namespace: input.namespace }).getUser_ByLeaderboardCode_ByUserId(
      input.leaderboardCode,
      input.userId
    )
    callback && callback(data)
    return data
  }

  return useQuery<UserRankingResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataV3Admin.User_ByLeaderboardCode_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCycle_ByLeaderboardCode_ByCycleId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { leaderboardCode: string; cycleId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetLeaderboardRankingResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetLeaderboardRankingResp) => void
): UseQueryResult<GetLeaderboardRankingResp, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCycle_ByLeaderboardCode_ByCycleId>[1]) => async () => {
    const data = await LeaderboardDataV3AdminApi(sdk, { namespace: input.namespace }).getCycle_ByLeaderboardCode_ByCycleId(
      input.leaderboardCode,
      input.cycleId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataV3Admin.Cycle_ByLeaderboardCode_ByCycleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
