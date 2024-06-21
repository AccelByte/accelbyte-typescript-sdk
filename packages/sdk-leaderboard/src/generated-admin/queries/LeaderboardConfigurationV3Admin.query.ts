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
import { LeaderboardConfigurationV3AdminApi } from '../LeaderboardConfigurationV3AdminApi.js'

import { DeleteBulkLeaderboardsReq } from '../../generated-definitions/DeleteBulkLeaderboardsReq.js'
import { DeleteBulkLeaderboardsResp } from '../../generated-definitions/DeleteBulkLeaderboardsResp.js'
import { GetAllLeaderboardConfigsRespV3 } from '../../generated-definitions/GetAllLeaderboardConfigsRespV3.js'
import { GetLeaderboardConfigRespV3 } from '../../generated-definitions/GetLeaderboardConfigRespV3.js'
import { LeaderboardConfigReqV3 } from '../../generated-definitions/LeaderboardConfigReqV3.js'
import { UpdateLeaderboardConfigReqV3 } from '../../generated-definitions/UpdateLeaderboardConfigReqV3.js'

export enum Key_LeaderboardConfigurationV3Admin {
  Leaderboards = 'LeaderboardConfigurationV3Admin.Leaderboards',
  Leaderboard = 'LeaderboardConfigurationV3Admin.Leaderboard',
  LeaderboardDelete = 'LeaderboardConfigurationV3Admin.LeaderboardDelete',
  Leaderboard_ByLeaderboardCode = 'LeaderboardConfigurationV3Admin.Leaderboard_ByLeaderboardCode',
  Hard_ByLeaderboardCode = 'LeaderboardConfigurationV3Admin.Hard_ByLeaderboardCode'
}

export const useAdmLeaderboards = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { isDeleted?: boolean | null; limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetAllLeaderboardConfigsRespV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetAllLeaderboardConfigsRespV3) => void
): UseQueryResult<GetAllLeaderboardConfigsRespV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmLeaderboards>[1]) => async () => {
    const data = await LeaderboardConfigurationV3AdminApi(sdk, { namespace: input.namespace }).getLeaderboards(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<GetAllLeaderboardConfigsRespV3, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardConfigurationV3Admin.Leaderboards, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateLeaderboardMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<GetLeaderboardConfigRespV3, AxiosError<ApiError>, ApiArgs & { data: LeaderboardConfigReqV3 }>,
    'mutationKey'
  >,
  callback?: (data: GetLeaderboardConfigRespV3) => void
): UseMutationResult<GetLeaderboardConfigRespV3, AxiosError<ApiError>, ApiArgs & { data: LeaderboardConfigReqV3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: LeaderboardConfigReqV3 }) => {
    const data = await LeaderboardConfigurationV3AdminApi(sdk, { namespace: input.namespace, config: input.config }).createLeaderboard(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationV3Admin.Leaderboard],
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
    const data = await LeaderboardConfigurationV3AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createLeaderboardDelete(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationV3Admin.LeaderboardDelete],
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
    const data = await LeaderboardConfigurationV3AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteLeaderboard_ByLeaderboardCode(input.leaderboardCode)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationV3Admin.Leaderboard_ByLeaderboardCode],
    mutationFn,
    ...options
  })
}

export const useAdmLeaderboard_ByLeaderboardCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { leaderboardCode: string },
  options?: Omit<UseQueryOptions<GetLeaderboardConfigRespV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetLeaderboardConfigRespV3) => void
): UseQueryResult<GetLeaderboardConfigRespV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmLeaderboard_ByLeaderboardCode>[1]) => async () => {
    const data = await LeaderboardConfigurationV3AdminApi(sdk, { namespace: input.namespace }).getLeaderboard_ByLeaderboardCode(
      input.leaderboardCode
    )
    callback && callback(data)
    return data
  }

  return useQuery<GetLeaderboardConfigRespV3, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardConfigurationV3Admin.Leaderboard_ByLeaderboardCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateLeaderboard_ByLeaderboardCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      GetLeaderboardConfigRespV3,
      AxiosError<ApiError>,
      ApiArgs & { leaderboardCode: string; data: UpdateLeaderboardConfigReqV3 }
    >,
    'mutationKey'
  >,
  callback?: (data: GetLeaderboardConfigRespV3) => void
): UseMutationResult<
  GetLeaderboardConfigRespV3,
  AxiosError<ApiError>,
  ApiArgs & { leaderboardCode: string; data: UpdateLeaderboardConfigReqV3 }
> => {
  //
  const mutationFn = async (input: ApiArgs & { leaderboardCode: string; data: UpdateLeaderboardConfigReqV3 }) => {
    const data = await LeaderboardConfigurationV3AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateLeaderboard_ByLeaderboardCode(input.leaderboardCode, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationV3Admin.Leaderboard_ByLeaderboardCode],
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
    const data = await LeaderboardConfigurationV3AdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteHard_ByLeaderboardCode(input.leaderboardCode)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationV3Admin.Hard_ByLeaderboardCode],
    mutationFn,
    ...options
  })
}
