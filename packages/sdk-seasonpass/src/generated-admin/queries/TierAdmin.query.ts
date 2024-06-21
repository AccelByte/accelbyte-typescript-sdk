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
  Tiers_BySeasonId = 'TierAdmin.Tiers_BySeasonId',
  Tier_BySeasonId = 'TierAdmin.Tier_BySeasonId',
  Tier_BySeasonId_ById = 'TierAdmin.Tier_BySeasonId_ById',
  SeasonCurrentExp_ByUserId = 'TierAdmin.SeasonCurrentExp_ByUserId',
  SeasonCurrentTier_ByUserId = 'TierAdmin.SeasonCurrentTier_ByUserId',
  Reorder_BySeasonId_ById = 'TierAdmin.Reorder_BySeasonId_ById'
}

export const useAdmTiers_BySeasonId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { seasonId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<TierPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: TierPagingSlicedResult) => void
): UseQueryResult<TierPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmTiers_BySeasonId>[1]) => async () => {
    const data = await TierAdminApi(sdk, { namespace: input.namespace }).getTiers_BySeasonId(input.seasonId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<TierPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_TierAdmin.Tiers_BySeasonId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateTier_BySeasonIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<TierArray, AxiosError<ApiError>, ApiArgs & { seasonId: string; data: TierCreate }>, 'mutationKey'>,
  callback?: (data: TierArray) => void
): UseMutationResult<TierArray, AxiosError<ApiError>, ApiArgs & { seasonId: string; data: TierCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { seasonId: string; data: TierCreate }) => {
    const data = await TierAdminApi(sdk, { namespace: input.namespace, config: input.config }).createTier_BySeasonId(
      input.seasonId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TierAdmin.Tier_BySeasonId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteTier_BySeasonId_ByIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { seasonId: string; id: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { seasonId: string; id: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { seasonId: string; id: string }) => {
    const data = await TierAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteTier_BySeasonId_ById(
      input.seasonId,
      input.id
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TierAdmin.Tier_BySeasonId_ById],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateTier_BySeasonId_ByIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<Tier, AxiosError<ApiError>, ApiArgs & { seasonId: string; id: string; data: TierInput }>,
    'mutationKey'
  >,
  callback?: (data: Tier) => void
): UseMutationResult<Tier, AxiosError<ApiError>, ApiArgs & { seasonId: string; id: string; data: TierInput }> => {
  //
  const mutationFn = async (input: ApiArgs & { seasonId: string; id: string; data: TierInput }) => {
    const data = await TierAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateTier_BySeasonId_ById(
      input.seasonId,
      input.id,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TierAdmin.Tier_BySeasonId_ById],
    mutationFn,
    ...options
  })
}

export const useAdmCreateSeasonCurrentExp_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UserSeasonSummary, AxiosError<ApiError>, ApiArgs & { userId: string; data: UserExpGrant }>,
    'mutationKey'
  >,
  callback?: (data: UserSeasonSummary) => void
): UseMutationResult<UserSeasonSummary, AxiosError<ApiError>, ApiArgs & { userId: string; data: UserExpGrant }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: UserExpGrant }) => {
    const data = await TierAdminApi(sdk, { namespace: input.namespace, config: input.config }).createSeasonCurrentExp_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TierAdmin.SeasonCurrentExp_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateSeasonCurrentTier_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UserSeasonSummary, AxiosError<ApiError>, ApiArgs & { userId: string; data: UserTierGrant }>,
    'mutationKey'
  >,
  callback?: (data: UserSeasonSummary) => void
): UseMutationResult<UserSeasonSummary, AxiosError<ApiError>, ApiArgs & { userId: string; data: UserTierGrant }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: UserTierGrant }) => {
    const data = await TierAdminApi(sdk, { namespace: input.namespace, config: input.config }).createSeasonCurrentTier_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TierAdmin.SeasonCurrentTier_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateReorder_BySeasonId_ByIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<Tier, AxiosError<ApiError>, ApiArgs & { seasonId: string; id: string; data: TierReorder }>,
    'mutationKey'
  >,
  callback?: (data: Tier) => void
): UseMutationResult<Tier, AxiosError<ApiError>, ApiArgs & { seasonId: string; id: string; data: TierReorder }> => {
  //
  const mutationFn = async (input: ApiArgs & { seasonId: string; id: string; data: TierReorder }) => {
    const data = await TierAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateReorder_BySeasonId_ById(
      input.seasonId,
      input.id,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TierAdmin.Reorder_BySeasonId_ById],
    mutationFn,
    ...options
  })
}
