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
import { SeasonAdminApi } from '../SeasonAdminApi.js'

import { BulkUserProgressionRequest } from '../../generated-definitions/BulkUserProgressionRequest.js'
import { ClaimableUserSeasonInfo } from '../../generated-definitions/ClaimableUserSeasonInfo.js'
import { ExpGrantHistoryPagingSlicedResult } from '../../generated-definitions/ExpGrantHistoryPagingSlicedResult.js'
import { FullSeasonInfo } from '../../generated-definitions/FullSeasonInfo.js'
import { ListSeasonInfoPagingSlicedResult } from '../../generated-definitions/ListSeasonInfoPagingSlicedResult.js'
import { ListUserSeasonInfoPagingSlicedResult } from '../../generated-definitions/ListUserSeasonInfoPagingSlicedResult.js'
import { Ownership } from '../../generated-definitions/Ownership.js'
import { ReasonTagsResult } from '../../generated-definitions/ReasonTagsResult.js'
import { SeasonCloneRequest } from '../../generated-definitions/SeasonCloneRequest.js'
import { SeasonCreate } from '../../generated-definitions/SeasonCreate.js'
import { SeasonInfo } from '../../generated-definitions/SeasonInfo.js'
import { SeasonSummary } from '../../generated-definitions/SeasonSummary.js'
import { SeasonUpdate } from '../../generated-definitions/SeasonUpdate.js'
import { UserPurchasable } from '../../generated-definitions/UserPurchasable.js'
import { UserSeasonSummary } from '../../generated-definitions/UserSeasonSummary.js'
import { UserSeasonSummaryArray } from '../../generated-definitions/UserSeasonSummaryArray.js'

export enum Key_SeasonAdmin {
  Seasons = 'SeasonAdmin.Seasons',
  Season = 'SeasonAdmin.Season',
  SeasonsCurrent = 'SeasonAdmin.SeasonsCurrent',
  Season_BySeasonId = 'SeasonAdmin.Season_BySeasonId',
  Seasons_ByUserId = 'SeasonAdmin.Seasons_ByUserId',
  Full_BySeasonId = 'SeasonAdmin.Full_BySeasonId',
  Clone_BySeasonId = 'SeasonAdmin.Clone_BySeasonId',
  Retire_BySeasonId = 'SeasonAdmin.Retire_BySeasonId',
  Publish_BySeasonId = 'SeasonAdmin.Publish_BySeasonId',
  Unpublish_BySeasonId = 'SeasonAdmin.Unpublish_BySeasonId',
  SeasonsExpHistory_ByUserId = 'SeasonAdmin.SeasonsExpHistory_ByUserId',
  SeasonCurrentReset_ByUserId = 'SeasonAdmin.SeasonCurrentReset_ByUserId',
  SeasonCurrentUserBulkProgression = 'SeasonAdmin.SeasonCurrentUserBulkProgression',
  Data_ByUserId_BySeasonId = 'SeasonAdmin.Data_ByUserId_BySeasonId',
  SeasonsExpHistoryTags_ByUserId = 'SeasonAdmin.SeasonsExpHistoryTags_ByUserId',
  SeasonsCurrentProgression_ByUserId = 'SeasonAdmin.SeasonsCurrentProgression_ByUserId',
  SeasonCurrentPurchasable_ByUserId = 'SeasonAdmin.SeasonCurrentPurchasable_ByUserId',
  SeasonsCurrentPassesOwnershipAny_ByUserId = 'SeasonAdmin.SeasonsCurrentPassesOwnershipAny_ByUserId'
}

export const useAdmSeasons = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number; status?: string[] } },
  options?: Omit<UseQueryOptions<ListSeasonInfoPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListSeasonInfoPagingSlicedResult) => void
): UseQueryResult<ListSeasonInfoPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSeasons>[1]) => async () => {
    const data = await SeasonAdminApi(sdk, { namespace: input.namespace }).getSeasons(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ListSeasonInfoPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.Seasons, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateSeasonMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<SeasonInfo, AxiosError<ApiError>, ApiArgs & { data: SeasonCreate }>, 'mutationKey'>,
  callback?: (data: SeasonInfo) => void
): UseMutationResult<SeasonInfo, AxiosError<ApiError>, ApiArgs & { data: SeasonCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: SeasonCreate }) => {
    const data = await SeasonAdminApi(sdk, { namespace: input.namespace, config: input.config }).createSeason(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SeasonAdmin.Season],
    mutationFn,
    ...options
  })
}

export const useAdmSeasonsCurrent = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<SeasonSummary, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: SeasonSummary) => void
): UseQueryResult<SeasonSummary, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSeasonsCurrent>[1]) => async () => {
    const data = await SeasonAdminApi(sdk, { namespace: input.namespace }).getSeasonsCurrent()
    callback && callback(data)
    return data
  }

  return useQuery<SeasonSummary, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.SeasonsCurrent, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteSeason_BySeasonIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { seasonId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { seasonId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { seasonId: string }) => {
    const data = await SeasonAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteSeason_BySeasonId(input.seasonId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SeasonAdmin.Season_BySeasonId],
    mutationFn,
    ...options
  })
}

export const useAdmSeason_BySeasonId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { seasonId: string },
  options?: Omit<UseQueryOptions<SeasonInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: SeasonInfo) => void
): UseQueryResult<SeasonInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSeason_BySeasonId>[1]) => async () => {
    const data = await SeasonAdminApi(sdk, { namespace: input.namespace }).getSeason_BySeasonId(input.seasonId)
    callback && callback(data)
    return data
  }

  return useQuery<SeasonInfo, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.Season_BySeasonId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchSeason_BySeasonIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<SeasonInfo, AxiosError<ApiError>, ApiArgs & { seasonId: string; data: SeasonUpdate }>, 'mutationKey'>,
  callback?: (data: SeasonInfo) => void
): UseMutationResult<SeasonInfo, AxiosError<ApiError>, ApiArgs & { seasonId: string; data: SeasonUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { seasonId: string; data: SeasonUpdate }) => {
    const data = await SeasonAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchSeason_BySeasonId(
      input.seasonId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SeasonAdmin.Season_BySeasonId],
    mutationFn,
    ...options
  })
}

export const useAdmSeasons_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<ListUserSeasonInfoPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListUserSeasonInfoPagingSlicedResult) => void
): UseQueryResult<ListUserSeasonInfoPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSeasons_ByUserId>[1]) => async () => {
    const data = await SeasonAdminApi(sdk, { namespace: input.namespace }).getSeasons_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ListUserSeasonInfoPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.Seasons_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmFull_BySeasonId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { seasonId: string },
  options?: Omit<UseQueryOptions<FullSeasonInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: FullSeasonInfo) => void
): UseQueryResult<FullSeasonInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmFull_BySeasonId>[1]) => async () => {
    const data = await SeasonAdminApi(sdk, { namespace: input.namespace }).getFull_BySeasonId(input.seasonId)
    callback && callback(data)
    return data
  }

  return useQuery<FullSeasonInfo, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.Full_BySeasonId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateClone_BySeasonIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<SeasonInfo, AxiosError<ApiError>, ApiArgs & { seasonId: string; data: SeasonCloneRequest }>,
    'mutationKey'
  >,
  callback?: (data: SeasonInfo) => void
): UseMutationResult<SeasonInfo, AxiosError<ApiError>, ApiArgs & { seasonId: string; data: SeasonCloneRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { seasonId: string; data: SeasonCloneRequest }) => {
    const data = await SeasonAdminApi(sdk, { namespace: input.namespace, config: input.config }).createClone_BySeasonId(
      input.seasonId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SeasonAdmin.Clone_BySeasonId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateRetire_BySeasonIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<SeasonInfo, AxiosError<ApiError>, ApiArgs & { seasonId: string; queryParams?: { force?: boolean | null } }>,
    'mutationKey'
  >,
  callback?: (data: SeasonInfo) => void
): UseMutationResult<SeasonInfo, AxiosError<ApiError>, ApiArgs & { seasonId: string; queryParams?: { force?: boolean | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { seasonId: string; queryParams?: { force?: boolean | null } }) => {
    const data = await SeasonAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateRetire_BySeasonId(
      input.seasonId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SeasonAdmin.Retire_BySeasonId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdatePublish_BySeasonIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<SeasonInfo, AxiosError<ApiError>, ApiArgs & { seasonId: string }>, 'mutationKey'>,
  callback?: (data: SeasonInfo) => void
): UseMutationResult<SeasonInfo, AxiosError<ApiError>, ApiArgs & { seasonId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { seasonId: string }) => {
    const data = await SeasonAdminApi(sdk, { namespace: input.namespace, config: input.config }).updatePublish_BySeasonId(input.seasonId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SeasonAdmin.Publish_BySeasonId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateUnpublish_BySeasonIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<SeasonInfo, AxiosError<ApiError>, ApiArgs & { seasonId: string; queryParams?: { force?: boolean | null } }>,
    'mutationKey'
  >,
  callback?: (data: SeasonInfo) => void
): UseMutationResult<SeasonInfo, AxiosError<ApiError>, ApiArgs & { seasonId: string; queryParams?: { force?: boolean | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { seasonId: string; queryParams?: { force?: boolean | null } }) => {
    const data = await SeasonAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateUnpublish_BySeasonId(
      input.seasonId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SeasonAdmin.Unpublish_BySeasonId],
    mutationFn,
    ...options
  })
}

export const useAdmSeasonsExpHistory_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    userId: string
    queryParams?: {
      from?: string | null
      limit?: number
      offset?: number
      seasonId?: string | null
      source?: 'PAID_FOR' | 'SWEAT'
      tags?: string[]
      to?: string | null
    }
  },
  options?: Omit<UseQueryOptions<ExpGrantHistoryPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ExpGrantHistoryPagingSlicedResult) => void
): UseQueryResult<ExpGrantHistoryPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSeasonsExpHistory_ByUserId>[1]) => async () => {
    const data = await SeasonAdminApi(sdk, { namespace: input.namespace }).getSeasonsExpHistory_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ExpGrantHistoryPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.SeasonsExpHistory_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteSeasonCurrentReset_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string }) => {
    const data = await SeasonAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteSeasonCurrentReset_ByUserId(
      input.userId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SeasonAdmin.SeasonCurrentReset_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateSeasonCurrentUserBulkProgressionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UserSeasonSummaryArray, AxiosError<ApiError>, ApiArgs & { data: BulkUserProgressionRequest }>,
    'mutationKey'
  >,
  callback?: (data: UserSeasonSummaryArray) => void
): UseMutationResult<UserSeasonSummaryArray, AxiosError<ApiError>, ApiArgs & { data: BulkUserProgressionRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: BulkUserProgressionRequest }) => {
    const data = await SeasonAdminApi(sdk, { namespace: input.namespace, config: input.config }).createSeasonCurrentUserBulkProgression(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SeasonAdmin.SeasonCurrentUserBulkProgression],
    mutationFn,
    ...options
  })
}

export const useAdmData_ByUserId_BySeasonId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; seasonId: string },
  options?: Omit<UseQueryOptions<ClaimableUserSeasonInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ClaimableUserSeasonInfo) => void
): UseQueryResult<ClaimableUserSeasonInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmData_ByUserId_BySeasonId>[1]) => async () => {
    const data = await SeasonAdminApi(sdk, { namespace: input.namespace }).getData_ByUserId_BySeasonId(input.userId, input.seasonId)
    callback && callback(data)
    return data
  }

  return useQuery<ClaimableUserSeasonInfo, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.Data_ByUserId_BySeasonId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmSeasonsExpHistoryTags_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { seasonId?: string | null } },
  options?: Omit<UseQueryOptions<ReasonTagsResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ReasonTagsResult) => void
): UseQueryResult<ReasonTagsResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSeasonsExpHistoryTags_ByUserId>[1]) => async () => {
    const data = await SeasonAdminApi(sdk, { namespace: input.namespace }).getSeasonsExpHistoryTags_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<ReasonTagsResult, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.SeasonsExpHistoryTags_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmSeasonsCurrentProgression_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string },
  options?: Omit<UseQueryOptions<UserSeasonSummary, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: UserSeasonSummary) => void
): UseQueryResult<UserSeasonSummary, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSeasonsCurrentProgression_ByUserId>[1]) => async () => {
    const data = await SeasonAdminApi(sdk, { namespace: input.namespace }).getSeasonsCurrentProgression_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useQuery<UserSeasonSummary, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.SeasonsCurrentProgression_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateSeasonCurrentPurchasable_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: UserPurchasable }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: UserPurchasable }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: UserPurchasable }) => {
    const data = await SeasonAdminApi(sdk, { namespace: input.namespace, config: input.config }).createSeasonCurrentPurchasable_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SeasonAdmin.SeasonCurrentPurchasable_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmSeasonsCurrentPassesOwnershipAny_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { passCodes?: string[] } },
  options?: Omit<UseQueryOptions<Ownership, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: Ownership) => void
): UseQueryResult<Ownership, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSeasonsCurrentPassesOwnershipAny_ByUserId>[1]) => async () => {
    const data = await SeasonAdminApi(sdk, { namespace: input.namespace }).getSeasonsCurrentPassesOwnershipAny_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<Ownership, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.SeasonsCurrentPassesOwnershipAny_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
