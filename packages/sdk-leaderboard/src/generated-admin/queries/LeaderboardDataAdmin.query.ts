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
import { LeaderboardDataAdminApi } from '../LeaderboardDataAdminApi.js'

import { ArchiveLeaderboardReq } from '../../generated-definitions/ArchiveLeaderboardReq.js'
import { ArchiveLeaderboardSignedUrlResponseArray } from '../../generated-definitions/ArchiveLeaderboardSignedUrlResponseArray.js'
import { GetLeaderboardRankingResp } from '../../generated-definitions/GetLeaderboardRankingResp.js'
import { UpdateUserPointAdminV1Request } from '../../generated-definitions/UpdateUserPointAdminV1Request.js'
import { UpdateUserPointAdminV1Response } from '../../generated-definitions/UpdateUserPointAdminV1Response.js'
import { UserRankingResponse } from '../../generated-definitions/UserRankingResponse.js'

export enum Key_LeaderboardDataAdmin {
  User_ByUserId = 'LeaderboardDataAdmin.User_ByUserId',
  LeaderboardsArchived = 'LeaderboardDataAdmin.LeaderboardsArchived',
  LeaderboardArchived = 'LeaderboardDataAdmin.LeaderboardArchived',
  Week_ByLeaderboardCode = 'LeaderboardDataAdmin.Week_ByLeaderboardCode',
  Month_ByLeaderboardCode = 'LeaderboardDataAdmin.Month_ByLeaderboardCode',
  Reset_ByLeaderboardCode = 'LeaderboardDataAdmin.Reset_ByLeaderboardCode',
  Today_ByLeaderboardCode = 'LeaderboardDataAdmin.Today_ByLeaderboardCode',
  Season_ByLeaderboardCode = 'LeaderboardDataAdmin.Season_ByLeaderboardCode',
  Alltime_ByLeaderboardCode = 'LeaderboardDataAdmin.Alltime_ByLeaderboardCode',
  User_ByLeaderboardCode_ByUserId = 'LeaderboardDataAdmin.User_ByLeaderboardCode_ByUserId'
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
    const data = await LeaderboardDataAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteUser_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardDataAdmin.User_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmLeaderboardsArchived = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { leaderboardCodes: string | null; slug?: string | null } },
  options?: Omit<UseQueryOptions<ArchiveLeaderboardSignedUrlResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ArchiveLeaderboardSignedUrlResponseArray) => void
): UseQueryResult<ArchiveLeaderboardSignedUrlResponseArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmLeaderboardsArchived>[1]) => async () => {
    const data = await LeaderboardDataAdminApi(sdk, { namespace: input.namespace }).getLeaderboardsArchived(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ArchiveLeaderboardSignedUrlResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataAdmin.LeaderboardsArchived, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateLeaderboardArchivedMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: ArchiveLeaderboardReq }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: ArchiveLeaderboardReq }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ArchiveLeaderboardReq }) => {
    const data = await LeaderboardDataAdminApi(sdk, { namespace: input.namespace, config: input.config }).createLeaderboardArchived(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardDataAdmin.LeaderboardArchived],
    mutationFn,
    ...options
  })
}

export const useAdmWeek_ByLeaderboardCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { leaderboardCode: string; queryParams?: { limit?: number; offset?: number; previousVersion?: number } },
  options?: Omit<UseQueryOptions<GetLeaderboardRankingResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetLeaderboardRankingResp) => void
): UseQueryResult<GetLeaderboardRankingResp, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmWeek_ByLeaderboardCode>[1]) => async () => {
    const data = await LeaderboardDataAdminApi(sdk, { namespace: input.namespace }).getWeek_ByLeaderboardCode(
      input.leaderboardCode,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataAdmin.Week_ByLeaderboardCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmMonth_ByLeaderboardCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { leaderboardCode: string; queryParams?: { limit?: number; offset?: number; previousVersion?: number } },
  options?: Omit<UseQueryOptions<GetLeaderboardRankingResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetLeaderboardRankingResp) => void
): UseQueryResult<GetLeaderboardRankingResp, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmMonth_ByLeaderboardCode>[1]) => async () => {
    const data = await LeaderboardDataAdminApi(sdk, { namespace: input.namespace }).getMonth_ByLeaderboardCode(
      input.leaderboardCode,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataAdmin.Month_ByLeaderboardCode, input],
    queryFn: queryFn(sdk, input),
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
    const data = await LeaderboardDataAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteReset_ByLeaderboardCode(
      input.leaderboardCode
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardDataAdmin.Reset_ByLeaderboardCode],
    mutationFn,
    ...options
  })
}

export const useAdmToday_ByLeaderboardCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { leaderboardCode: string; queryParams?: { limit?: number; offset?: number; previousVersion?: number } },
  options?: Omit<UseQueryOptions<GetLeaderboardRankingResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetLeaderboardRankingResp) => void
): UseQueryResult<GetLeaderboardRankingResp, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmToday_ByLeaderboardCode>[1]) => async () => {
    const data = await LeaderboardDataAdminApi(sdk, { namespace: input.namespace }).getToday_ByLeaderboardCode(
      input.leaderboardCode,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataAdmin.Today_ByLeaderboardCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmSeason_ByLeaderboardCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { leaderboardCode: string; queryParams?: { limit?: number; offset?: number; previousVersion?: number } },
  options?: Omit<UseQueryOptions<GetLeaderboardRankingResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetLeaderboardRankingResp) => void
): UseQueryResult<GetLeaderboardRankingResp, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSeason_ByLeaderboardCode>[1]) => async () => {
    const data = await LeaderboardDataAdminApi(sdk, { namespace: input.namespace }).getSeason_ByLeaderboardCode(
      input.leaderboardCode,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataAdmin.Season_ByLeaderboardCode, input],
    queryFn: queryFn(sdk, input),
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
    const data = await LeaderboardDataAdminApi(sdk, { namespace: input.namespace }).getAlltime_ByLeaderboardCode(
      input.leaderboardCode,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataAdmin.Alltime_ByLeaderboardCode, input],
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
    const data = await LeaderboardDataAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteUser_ByLeaderboardCode_ByUserId(input.leaderboardCode, input.userId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardDataAdmin.User_ByLeaderboardCode_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmUser_ByLeaderboardCode_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { leaderboardCode: string; userId: string; queryParams?: { previousVersion?: number } },
  options?: Omit<UseQueryOptions<UserRankingResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: UserRankingResponse) => void
): UseQueryResult<UserRankingResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmUser_ByLeaderboardCode_ByUserId>[1]) => async () => {
    const data = await LeaderboardDataAdminApi(sdk, { namespace: input.namespace }).getUser_ByLeaderboardCode_ByUserId(
      input.leaderboardCode,
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<UserRankingResponse, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataAdmin.User_ByLeaderboardCode_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateUser_ByLeaderboardCode_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateUserPointAdminV1Response,
      AxiosError<ApiError>,
      ApiArgs & { leaderboardCode: string; userId: string; data: UpdateUserPointAdminV1Request }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateUserPointAdminV1Response) => void
): UseMutationResult<
  UpdateUserPointAdminV1Response,
  AxiosError<ApiError>,
  ApiArgs & { leaderboardCode: string; userId: string; data: UpdateUserPointAdminV1Request }
> => {
  //
  const mutationFn = async (input: ApiArgs & { leaderboardCode: string; userId: string; data: UpdateUserPointAdminV1Request }) => {
    const data = await LeaderboardDataAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateUser_ByLeaderboardCode_ByUserId(input.leaderboardCode, input.userId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardDataAdmin.User_ByLeaderboardCode_ByUserId],
    mutationFn,
    ...options
  })
}
