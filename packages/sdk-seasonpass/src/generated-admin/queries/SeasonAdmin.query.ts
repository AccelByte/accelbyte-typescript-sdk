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
  Seasons = 'Seasonpass.SeasonAdmin.Seasons',
  Season = 'Seasonpass.SeasonAdmin.Season',
  SeasonsCurrent = 'Seasonpass.SeasonAdmin.SeasonsCurrent',
  Season_BySeasonId = 'Seasonpass.SeasonAdmin.Season_BySeasonId',
  Seasons_ByUserId = 'Seasonpass.SeasonAdmin.Seasons_ByUserId',
  Full_BySeasonId = 'Seasonpass.SeasonAdmin.Full_BySeasonId',
  Clone_BySeasonId = 'Seasonpass.SeasonAdmin.Clone_BySeasonId',
  Retire_BySeasonId = 'Seasonpass.SeasonAdmin.Retire_BySeasonId',
  Publish_BySeasonId = 'Seasonpass.SeasonAdmin.Publish_BySeasonId',
  Unpublish_BySeasonId = 'Seasonpass.SeasonAdmin.Unpublish_BySeasonId',
  SeasonsExpHistory_ByUserId = 'Seasonpass.SeasonAdmin.SeasonsExpHistory_ByUserId',
  SeasonCurrentReset_ByUserId = 'Seasonpass.SeasonAdmin.SeasonCurrentReset_ByUserId',
  SeasonCurrentUserBulkProgression = 'Seasonpass.SeasonAdmin.SeasonCurrentUserBulkProgression',
  Data_ByUserId_BySeasonId = 'Seasonpass.SeasonAdmin.Data_ByUserId_BySeasonId',
  SeasonsExpHistoryTags_ByUserId = 'Seasonpass.SeasonAdmin.SeasonsExpHistoryTags_ByUserId',
  SeasonsCurrentProgression_ByUserId = 'Seasonpass.SeasonAdmin.SeasonsCurrentProgression_ByUserId',
  SeasonCurrentPurchasable_ByUserId = 'Seasonpass.SeasonAdmin.SeasonCurrentPurchasable_ByUserId',
  SeasonsCurrentPassesOwnershipAny_ByUserId = 'Seasonpass.SeasonAdmin.SeasonsCurrentPassesOwnershipAny_ByUserId'
}

/**
 * This API is used to query seasons, seasons only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of season basic info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SeasonAdmin.Seasons, input]
 * }
 * ```
 */
export const useSeasonAdminApi_GetSeasons = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number; status?: string[] } },
  options?: Omit<UseQueryOptions<ListSeasonInfoPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListSeasonInfoPagingSlicedResult>) => void
): UseQueryResult<ListSeasonInfoPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSeasonAdminApi_GetSeasons>[1]) => async () => {
    const response = await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getSeasons(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListSeasonInfoPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.Seasons, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to create a season, season only allowed in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created season&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SeasonAdmin.Season, input]
 * }
 * ```
 */
export const useSeasonAdminApi_CreateSeasonMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<SeasonInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: SeasonCreate }>, 'mutationKey'>,
  callback?: (data: SeasonInfo) => void
): UseMutationResult<SeasonInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: SeasonCreate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: SeasonCreate }) => {
    const response = await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createSeason(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SeasonAdmin.Season],
    mutationFn,
    ...options
  })
}

/**
 * [SERVICE COMMUNICATION ONLY]This API is used to get current published season summary which includes previous published season summary if exists, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: season summary data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SeasonAdmin.SeasonsCurrent, input]
 * }
 * ```
 */
export const useSeasonAdminApi_GetSeasonsCurrent = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<SeasonSummary, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<SeasonSummary>) => void
): UseQueryResult<SeasonSummary, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSeasonAdminApi_GetSeasonsCurrent>[1]) => async () => {
    const response = await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getSeasonsCurrent()
    callback && callback(response)
    return response.data
  }

  return useQuery<SeasonSummary, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.SeasonsCurrent, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to delete a season permanently, only draft season can be deleted. &lt;p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SeasonAdmin.Season_BySeasonId, input]
 * }
 * ```
 */
export const useSeasonAdminApi_DeleteSeason_BySeasonIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { seasonId: string }) => {
    const response = await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteSeason_BySeasonId(
      input.seasonId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SeasonAdmin.Season_BySeasonId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to get a season, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: season data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SeasonAdmin.Season_BySeasonId, input]
 * }
 * ```
 */
export const useSeasonAdminApi_GetSeason_BySeasonId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { seasonId: string },
  options?: Omit<UseQueryOptions<SeasonInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<SeasonInfo>) => void
): UseQueryResult<SeasonInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSeasonAdminApi_GetSeason_BySeasonId>[1]) => async () => {
    const response = await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getSeason_BySeasonId(
      input.seasonId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<SeasonInfo, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.Season_BySeasonId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to update a season. Only draft season can be updated.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated season&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SeasonAdmin.Season_BySeasonId, input]
 * }
 * ```
 */
export const useSeasonAdminApi_PatchSeason_BySeasonIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<SeasonInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; data: SeasonUpdate }>,
    'mutationKey'
  >,
  callback?: (data: SeasonInfo) => void
): UseMutationResult<SeasonInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; data: SeasonUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { seasonId: string; data: SeasonUpdate }) => {
    const response = await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchSeason_BySeasonId(
      input.seasonId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SeasonAdmin.Season_BySeasonId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to get user participated season data, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user participated season data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SeasonAdmin.Seasons_ByUserId, input]
 * }
 * ```
 */
export const useSeasonAdminApi_GetSeasons_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<ListUserSeasonInfoPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListUserSeasonInfoPagingSlicedResult>) => void
): UseQueryResult<ListUserSeasonInfoPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSeasonAdminApi_GetSeasons_ByUserId>[1]) => async () => {
    const response = await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getSeasons_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListUserSeasonInfoPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.Seasons_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get a season full content, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: season data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SeasonAdmin.Full_BySeasonId, input]
 * }
 * ```
 */
export const useSeasonAdminApi_GetFull_BySeasonId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { seasonId: string },
  options?: Omit<UseQueryOptions<FullSeasonInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<FullSeasonInfo>) => void
): UseQueryResult<FullSeasonInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSeasonAdminApi_GetFull_BySeasonId>[1]) => async () => {
    const response = await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getFull_BySeasonId(
      input.seasonId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<FullSeasonInfo, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.Full_BySeasonId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to clone a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: cloned season info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SeasonAdmin.Clone_BySeasonId, input]
 * }
 * ```
 */
export const useSeasonAdminApi_CreateClone_BySeasonIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<SeasonInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; data: SeasonCloneRequest }>,
    'mutationKey'
  >,
  callback?: (data: SeasonInfo) => void
): UseMutationResult<SeasonInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; data: SeasonCloneRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { seasonId: string; data: SeasonCloneRequest }) => {
    const response = await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createClone_BySeasonId(
      input.seasonId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SeasonAdmin.Clone_BySeasonId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to retire a published season, if the season has not ended it will report error except with force.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: season info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SeasonAdmin.Retire_BySeasonId, input]
 * }
 * ```
 */
export const useSeasonAdminApi_UpdateRetire_BySeasonIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      SeasonInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { seasonId: string; queryParams?: { force?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: SeasonInfo) => void
): UseMutationResult<
  SeasonInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { seasonId: string; queryParams?: { force?: boolean | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { seasonId: string; queryParams?: { force?: boolean | null } }) => {
    const response = await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateRetire_BySeasonId(
      input.seasonId,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SeasonAdmin.Retire_BySeasonId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to publish a draft season, only one published season allowed at same time in a namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: published season&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SeasonAdmin.Publish_BySeasonId, input]
 * }
 * ```
 */
export const useSeasonAdminApi_UpdatePublish_BySeasonIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<SeasonInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string }>, 'mutationKey'>,
  callback?: (data: SeasonInfo) => void
): UseMutationResult<SeasonInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { seasonId: string }) => {
    const response = await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updatePublish_BySeasonId(
      input.seasonId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SeasonAdmin.Publish_BySeasonId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to unpublish a published season, if the season already started it will report error except with force.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: season info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SeasonAdmin.Unpublish_BySeasonId, input]
 * }
 * ```
 */
export const useSeasonAdminApi_UpdateUnpublish_BySeasonIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      SeasonInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { seasonId: string; queryParams?: { force?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: SeasonInfo) => void
): UseMutationResult<
  SeasonInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { seasonId: string; queryParams?: { force?: boolean | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { seasonId: string; queryParams?: { force?: boolean | null } }) => {
    const response = await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateUnpublish_BySeasonId(
      input.seasonId,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SeasonAdmin.Unpublish_BySeasonId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to get user exp acquisition history, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;default will query from current active season&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated grant history&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SeasonAdmin.SeasonsExpHistory_ByUserId, input]
 * }
 * ```
 */
export const useSeasonAdminApi_GetSeasonsExpHistory_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
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
  callback?: (data: AxiosResponse<ExpGrantHistoryPagingSlicedResult>) => void
): UseQueryResult<ExpGrantHistoryPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSeasonAdminApi_GetSeasonsExpHistory_ByUserId>[1]) => async () => {
    const response = await SeasonAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getSeasonsExpHistory_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ExpGrantHistoryPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.SeasonsExpHistory_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt;This API is used to reset user data in current season, it will not revoke the rewarded entitlements.&lt;p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SeasonAdmin.SeasonCurrentReset_ByUserId, input]
 * }
 * ```
 */
export const useSeasonAdminApi_DeleteSeasonCurrentReset_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await SeasonAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteSeasonCurrentReset_ByUserId(input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SeasonAdmin.SeasonCurrentReset_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to bulk get user current season progression, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season progression&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SeasonAdmin.SeasonCurrentUserBulkProgression, input]
 * }
 * ```
 */
export const useSeasonAdminApi_CreateSeasonCurrentUserBulkProgressionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserSeasonSummaryArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserProgressionRequest }>,
    'mutationKey'
  >,
  callback?: (data: UserSeasonSummaryArray) => void
): UseMutationResult<UserSeasonSummaryArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserProgressionRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkUserProgressionRequest }) => {
    const response = await SeasonAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createSeasonCurrentUserBulkProgression(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SeasonAdmin.SeasonCurrentUserBulkProgression],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to get user season data, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SeasonAdmin.Data_ByUserId_BySeasonId, input]
 * }
 * ```
 */
export const useSeasonAdminApi_GetData_ByUserId_BySeasonId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; seasonId: string },
  options?: Omit<UseQueryOptions<ClaimableUserSeasonInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ClaimableUserSeasonInfo>) => void
): UseQueryResult<ClaimableUserSeasonInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSeasonAdminApi_GetData_ByUserId_BySeasonId>[1]) => async () => {
    const response = await SeasonAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getData_ByUserId_BySeasonId(input.userId, input.seasonId)
    callback && callback(response)
    return response.data
  }

  return useQuery<ClaimableUserSeasonInfo, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.Data_ByUserId_BySeasonId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get user exp acquisition history&#39;s tag list.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;default will query from current active season&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: exp grant history tags list&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SeasonAdmin.SeasonsExpHistoryTags_ByUserId, input]
 * }
 * ```
 */
export const useSeasonAdminApi_GetSeasonsExpHistoryTags_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { seasonId?: string | null } },
  options?: Omit<UseQueryOptions<ReasonTagsResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ReasonTagsResult>) => void
): UseQueryResult<ReasonTagsResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSeasonAdminApi_GetSeasonsExpHistoryTags_ByUserId>[1]) => async () => {
    const response = await SeasonAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getSeasonsExpHistoryTags_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ReasonTagsResult, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.SeasonsExpHistoryTags_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get current user season progression, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season progression&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SeasonAdmin.SeasonsCurrentProgression_ByUserId, input]
 * }
 * ```
 */
export const useSeasonAdminApi_GetSeasonsCurrentProgression_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<UserSeasonSummary, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserSeasonSummary>) => void
): UseQueryResult<UserSeasonSummary, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSeasonAdminApi_GetSeasonsCurrentProgression_ByUserId>[1]) => async () => {
    const response = await SeasonAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getSeasonsCurrentProgression_ByUserId(input.userId)
    callback && callback(response)
    return response.data
  }

  return useQuery<UserSeasonSummary, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.SeasonsCurrentProgression_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to check pass or tier purchasable, season only located in non-publisher namespace.&lt;p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SeasonAdmin.SeasonCurrentPurchasable_ByUserId, input]
 * }
 * ```
 */
export const useSeasonAdminApi_CreateSeasonCurrentPurchasable_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserPurchasable }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserPurchasable }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UserPurchasable }) => {
    const response = await SeasonAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createSeasonCurrentPurchasable_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_SeasonAdmin.SeasonCurrentPurchasable_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * [SERVICE COMMUNICATION ONLY]This API is used to get ownership for any pass codes, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: ownership&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SeasonAdmin.SeasonsCurrentPassesOwnershipAny_ByUserId, input]
 * }
 * ```
 */
export const useSeasonAdminApi_GetSeasonsCurrentPassesOwnershipAny_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { passCodes?: string[] } },
  options?: Omit<UseQueryOptions<Ownership, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<Ownership>) => void
): UseQueryResult<Ownership, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useSeasonAdminApi_GetSeasonsCurrentPassesOwnershipAny_ByUserId>[1]) => async () => {
      const response = await SeasonAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getSeasonsCurrentPassesOwnershipAny_ByUserId(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<Ownership, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.SeasonsCurrentPassesOwnershipAny_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
