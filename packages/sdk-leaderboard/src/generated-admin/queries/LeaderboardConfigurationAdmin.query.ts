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
import { LeaderboardConfigurationAdminApi } from '../LeaderboardConfigurationAdminApi.js'

import { DeleteBulkLeaderboardsReq } from '../../generated-definitions/DeleteBulkLeaderboardsReq.js'
import { DeleteBulkLeaderboardsResp } from '../../generated-definitions/DeleteBulkLeaderboardsResp.js'
import { GetAllLeaderboardConfigsResp } from '../../generated-definitions/GetAllLeaderboardConfigsResp.js'
import { GetLeaderboardConfigResp } from '../../generated-definitions/GetLeaderboardConfigResp.js'
import { LeaderboardConfigReq } from '../../generated-definitions/LeaderboardConfigReq.js'
import { UpdateLeaderboardConfigReq } from '../../generated-definitions/UpdateLeaderboardConfigReq.js'

export enum Key_LeaderboardConfigurationAdmin {
  Leaderboards = 'LeaderboardConfigurationAdmin.Leaderboards',
  Leaderboard = 'LeaderboardConfigurationAdmin.Leaderboard',
  LeaderboardDelete = 'LeaderboardConfigurationAdmin.LeaderboardDelete',
  Leaderboard_ByLeaderboardCode = 'LeaderboardConfigurationAdmin.Leaderboard_ByLeaderboardCode',
  Hard_ByLeaderboardCode = 'LeaderboardConfigurationAdmin.Hard_ByLeaderboardCode'
}

export const useAdmLeaderboards = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { isArchived?: boolean | null; isDeleted?: boolean | null; limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetAllLeaderboardConfigsResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetAllLeaderboardConfigsResp) => void
): UseQueryResult<GetAllLeaderboardConfigsResp, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmLeaderboards>[1]) => async () => {
    const data = await LeaderboardConfigurationAdminApi(sdk, { namespace: input.namespace }).getLeaderboards(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<GetAllLeaderboardConfigsResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardConfigurationAdmin.Leaderboards, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateLeaderboardMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<LeaderboardConfigReq, AxiosError<ApiError>, ApiArgs & { data: LeaderboardConfigReq }>, 'mutationKey'>,
  callback?: (data: LeaderboardConfigReq) => void
): UseMutationResult<LeaderboardConfigReq, AxiosError<ApiError>, ApiArgs & { data: LeaderboardConfigReq }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: LeaderboardConfigReq }) => {
    const data = await LeaderboardConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).createLeaderboard(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationAdmin.Leaderboard],
    mutationFn,
    ...options
  })
}

export const useAdmCreateLeaderboardDeleteMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<DeleteBulkLeaderboardsResp, AxiosError<ApiError>, ApiArgs & { data: DeleteBulkLeaderboardsReq }>,
    'mutationKey'
  >,
  callback?: (data: DeleteBulkLeaderboardsResp) => void
): UseMutationResult<DeleteBulkLeaderboardsResp, AxiosError<ApiError>, ApiArgs & { data: DeleteBulkLeaderboardsReq }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: DeleteBulkLeaderboardsReq }) => {
    const data = await LeaderboardConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).createLeaderboardDelete(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationAdmin.LeaderboardDelete],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteLeaderboard_ByLeaderboardCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { leaderboardCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { leaderboardCode: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { leaderboardCode: string }) => {
    const data = await LeaderboardConfigurationAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteLeaderboard_ByLeaderboardCode(input.leaderboardCode)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationAdmin.Leaderboard_ByLeaderboardCode],
    mutationFn,
    ...options
  })
}

export const useAdmLeaderboard_ByLeaderboardCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { leaderboardCode: string },
  options?: Omit<UseQueryOptions<GetLeaderboardConfigResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetLeaderboardConfigResp) => void
): UseQueryResult<GetLeaderboardConfigResp, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmLeaderboard_ByLeaderboardCode>[1]) => async () => {
    const data = await LeaderboardConfigurationAdminApi(sdk, { namespace: input.namespace }).getLeaderboard_ByLeaderboardCode(
      input.leaderboardCode
    )
    callback && callback(data)
    return data
  }

  return useQuery<GetLeaderboardConfigResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardConfigurationAdmin.Leaderboard_ByLeaderboardCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateLeaderboard_ByLeaderboardCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      GetLeaderboardConfigResp,
      AxiosError<ApiError>,
      ApiArgs & { leaderboardCode: string; data: UpdateLeaderboardConfigReq }
    >,
    'mutationKey'
  >,
  callback?: (data: GetLeaderboardConfigResp) => void
): UseMutationResult<
  GetLeaderboardConfigResp,
  AxiosError<ApiError>,
  ApiArgs & { leaderboardCode: string; data: UpdateLeaderboardConfigReq }
> => {
  //
  const mutationFn = async (input: ApiArgs & { leaderboardCode: string; data: UpdateLeaderboardConfigReq }) => {
    const data = await LeaderboardConfigurationAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateLeaderboard_ByLeaderboardCode(input.leaderboardCode, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationAdmin.Leaderboard_ByLeaderboardCode],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteHard_ByLeaderboardCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { leaderboardCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { leaderboardCode: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { leaderboardCode: string }) => {
    const data = await LeaderboardConfigurationAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteHard_ByLeaderboardCode(input.leaderboardCode)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationAdmin.Hard_ByLeaderboardCode],
    mutationFn,
    ...options
  })
}
