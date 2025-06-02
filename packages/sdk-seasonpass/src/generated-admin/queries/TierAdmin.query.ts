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
import { TierAdminApi } from '../TierAdminApi.js'

import { Tier } from '../../generated-definitions/Tier.js'
import { TierArray } from '../../generated-definitions/TierArray.js'
import { TierCreate } from '../../generated-definitions/TierCreate.js'
import { TierInput } from '../../generated-definitions/TierInput.js'
import { TierPagingSlicedResult } from '../../generated-definitions/TierPagingSlicedResult.js'
import { TierReorder } from '../../generated-definitions/TierReorder.js'
import { UserExpGrant } from '../../generated-definitions/UserExpGrant.js'
import { UserSeasonSummary } from '../../generated-definitions/UserSeasonSummary.js'
import { UserTierGrant } from '../../generated-definitions/UserTierGrant.js'

export enum Key_TierAdmin {
  Tiers_BySeasonId = 'Seasonpass.TierAdmin.Tiers_BySeasonId',
  Tier_BySeasonId = 'Seasonpass.TierAdmin.Tier_BySeasonId',
  Tier_BySeasonId_ById = 'Seasonpass.TierAdmin.Tier_BySeasonId_ById',
  SeasonCurrentExp_ByUserId = 'Seasonpass.TierAdmin.SeasonCurrentExp_ByUserId',
  SeasonCurrentTier_ByUserId = 'Seasonpass.TierAdmin.SeasonCurrentTier_ByUserId',
  Reorder_BySeasonId_ById = 'Seasonpass.TierAdmin.Reorder_BySeasonId_ById'
}

/**
 * This API is used to query paginated tiers for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of passes&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TierAdmin.Tiers_BySeasonId, input]
 * }
 * ```
 */
export const useTierAdminApi_GetTiers_BySeasonId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { seasonId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<TierPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TierPagingSlicedResult>) => void
): UseQueryResult<TierPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTierAdminApi_GetTiers_BySeasonId>[1]) => async () => {
    const response = await TierAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTiers_BySeasonId(
      input.seasonId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<TierPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_TierAdmin.Tiers_BySeasonId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to create tier for a draft season, can create multiple tiers at same time.&lt;p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TierAdmin.Tier_BySeasonId, input]
 * }
 * ```
 */
export const useTierAdminApi_CreateTier_BySeasonIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<TierArray, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; data: TierCreate }>,
    'mutationKey'
  >,
  callback?: (data: TierArray) => void
): UseMutationResult<TierArray, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; data: TierCreate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { seasonId: string; data: TierCreate }) => {
    const response = await TierAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createTier_BySeasonId(
      input.seasonId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TierAdmin.Tier_BySeasonId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to delete a tier permanently, only draft season pass can be deleted. &lt;p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TierAdmin.Tier_BySeasonId_ById, input]
 * }
 * ```
 */
export const useTierAdminApi_DeleteTier_BySeasonId_ByIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; id: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; id: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { seasonId: string; id: string }) => {
    const response = await TierAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteTier_BySeasonId_ById(
      input.seasonId,
      input.id
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TierAdmin.Tier_BySeasonId_ById],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to update a tier. Only draft season pass can be updated.&lt;p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TierAdmin.Tier_BySeasonId_ById, input]
 * }
 * ```
 */
export const useTierAdminApi_UpdateTier_BySeasonId_ByIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<Tier, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; id: string; data: TierInput }>,
    'mutationKey'
  >,
  callback?: (data: Tier) => void
): UseMutationResult<Tier, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; id: string; data: TierInput }> => {
  const mutationFn = async (input: SdkSetConfigParam & { seasonId: string; id: string; data: TierInput }) => {
    const response = await TierAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateTier_BySeasonId_ById(
      input.seasonId,
      input.id,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TierAdmin.Tier_BySeasonId_ById],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to grant exp to user, it will auto enroll if there&#39;s no user season but active published season exist, season only located in non-publisher namespace, otherwise ignore.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TierAdmin.SeasonCurrentExp_ByUserId, input]
 * }
 * ```
 */
export const useTierAdminApi_CreateSeasonCurrentExp_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserSeasonSummary, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserExpGrant }>,
    'mutationKey'
  >,
  callback?: (data: UserSeasonSummary) => void
): UseMutationResult<UserSeasonSummary, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserExpGrant }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UserExpGrant }) => {
    const response = await TierAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createSeasonCurrentExp_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TierAdmin.SeasonCurrentExp_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to grant tier to user, it will auto enroll if there&#39;s no user season but active published season exist, season only located in non-publisher namespace, otherwise ignore.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TierAdmin.SeasonCurrentTier_ByUserId, input]
 * }
 * ```
 */
export const useTierAdminApi_CreateSeasonCurrentTier_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserSeasonSummary, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserTierGrant }>,
    'mutationKey'
  >,
  callback?: (data: UserSeasonSummary) => void
): UseMutationResult<UserSeasonSummary, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserTierGrant }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UserTierGrant }) => {
    const response = await TierAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createSeasonCurrentTier_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TierAdmin.SeasonCurrentTier_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to reorder a tier. Only draft season pass can be updated.&lt;p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TierAdmin.Reorder_BySeasonId_ById, input]
 * }
 * ```
 */
export const useTierAdminApi_UpdateReorder_BySeasonId_ByIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<Tier, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; id: string; data: TierReorder }>,
    'mutationKey'
  >,
  callback?: (data: Tier) => void
): UseMutationResult<Tier, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; id: string; data: TierReorder }> => {
  const mutationFn = async (input: SdkSetConfigParam & { seasonId: string; id: string; data: TierReorder }) => {
    const response = await TierAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateReorder_BySeasonId_ById(input.seasonId, input.id, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TierAdmin.Reorder_BySeasonId_ById],
    mutationFn,
    ...options
  })
}
