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
import { RewardAdminApi } from '../RewardAdminApi.js'

import { RewardCreate } from '../../generated-definitions/RewardCreate.js'
import { RewardInfo } from '../../generated-definitions/RewardInfo.js'
import { RewardInfoArray } from '../../generated-definitions/RewardInfoArray.js'
import { RewardUpdate } from '../../generated-definitions/RewardUpdate.js'

export enum Key_RewardAdmin {
  Rewards_BySeasonId = 'RewardAdmin.Rewards_BySeasonId',
  Reward_BySeasonId = 'RewardAdmin.Reward_BySeasonId',
  Reward_BySeasonId_ByCode = 'RewardAdmin.Reward_BySeasonId_ByCode'
}

export const useAdmRewards_BySeasonId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { seasonId: string; queryParams?: { q?: string | null } },
  options?: Omit<UseQueryOptions<RewardInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RewardInfoArray) => void
): UseQueryResult<RewardInfoArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRewards_BySeasonId>[1]) => async () => {
    const data = await RewardAdminApi(sdk, { namespace: input.namespace }).getRewards_BySeasonId(input.seasonId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<RewardInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_RewardAdmin.Rewards_BySeasonId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateReward_BySeasonIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<RewardInfo, AxiosError<ApiError>, ApiArgs & { seasonId: string; data: RewardCreate }>, 'mutationKey'>,
  callback?: (data: RewardInfo) => void
): UseMutationResult<RewardInfo, AxiosError<ApiError>, ApiArgs & { seasonId: string; data: RewardCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { seasonId: string; data: RewardCreate }) => {
    const data = await RewardAdminApi(sdk, { namespace: input.namespace, config: input.config }).createReward_BySeasonId(
      input.seasonId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RewardAdmin.Reward_BySeasonId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteReward_BySeasonId_ByCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { seasonId: string; code: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { seasonId: string; code: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { seasonId: string; code: string }) => {
    const data = await RewardAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteReward_BySeasonId_ByCode(
      input.seasonId,
      input.code
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RewardAdmin.Reward_BySeasonId_ByCode],
    mutationFn,
    ...options
  })
}

export const useAdmReward_BySeasonId_ByCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { seasonId: string; code: string },
  options?: Omit<UseQueryOptions<RewardInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RewardInfo) => void
): UseQueryResult<RewardInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmReward_BySeasonId_ByCode>[1]) => async () => {
    const data = await RewardAdminApi(sdk, { namespace: input.namespace }).getReward_BySeasonId_ByCode(input.seasonId, input.code)
    callback && callback(data)
    return data
  }

  return useQuery<RewardInfo, AxiosError<ApiError>>({
    queryKey: [Key_RewardAdmin.Reward_BySeasonId_ByCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchReward_BySeasonId_ByCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<RewardInfo, AxiosError<ApiError>, ApiArgs & { seasonId: string; code: string; data: RewardUpdate }>,
    'mutationKey'
  >,
  callback?: (data: RewardInfo) => void
): UseMutationResult<RewardInfo, AxiosError<ApiError>, ApiArgs & { seasonId: string; code: string; data: RewardUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { seasonId: string; code: string; data: RewardUpdate }) => {
    const data = await RewardAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchReward_BySeasonId_ByCode(
      input.seasonId,
      input.code,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RewardAdmin.Reward_BySeasonId_ByCode],
    mutationFn,
    ...options
  })
}
