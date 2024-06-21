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

import { ConditionMatchResult } from '../../generated-definitions/ConditionMatchResult.js'
import { DeleteRewardConditionRequest } from '../../generated-definitions/DeleteRewardConditionRequest.js'
import { EventPayload } from '../../generated-definitions/EventPayload.js'
import { RewardCreate } from '../../generated-definitions/RewardCreate.js'
import { RewardInfo } from '../../generated-definitions/RewardInfo.js'
import { RewardPagingSlicedResult } from '../../generated-definitions/RewardPagingSlicedResult.js'
import { RewardUpdate } from '../../generated-definitions/RewardUpdate.js'

export enum Key_RewardAdmin {
  Reward = 'RewardAdmin.Reward',
  RewardsExport = 'RewardAdmin.RewardsExport',
  RewardImport = 'RewardAdmin.RewardImport',
  Reward_ByRewardId = 'RewardAdmin.Reward_ByRewardId',
  RewardsByCriteria = 'RewardAdmin.RewardsByCriteria',
  Match_ByRewardId = 'RewardAdmin.Match_ByRewardId',
  Record_ByRewardId = 'RewardAdmin.Record_ByRewardId'
}

export const useAdmCreateRewardMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<RewardInfo, AxiosError<ApiError>, ApiArgs & { data: RewardCreate }>, 'mutationKey'>,
  callback?: (data: RewardInfo) => void
): UseMutationResult<RewardInfo, AxiosError<ApiError>, ApiArgs & { data: RewardCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: RewardCreate }) => {
    const data = await RewardAdminApi(sdk, { namespace: input.namespace, config: input.config }).createReward(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RewardAdmin.Reward],
    mutationFn,
    ...options
  })
}

export const useAdmRewardsExport = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRewardsExport>[1]) => async () => {
    const data = await RewardAdminApi(sdk, { namespace: input.namespace }).getRewardsExport()
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_RewardAdmin.RewardsExport, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateRewardImportMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      ApiArgs & { data: { file?: File }; queryParams: { replaceExisting: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  ApiArgs & { data: { file?: File }; queryParams: { replaceExisting: boolean | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { data: { file?: File }; queryParams: { replaceExisting: boolean | null } }) => {
    const data = await RewardAdminApi(sdk, { namespace: input.namespace, config: input.config }).createRewardImport(
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RewardAdmin.RewardImport],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteReward_ByRewardIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<RewardInfo, AxiosError<ApiError>, ApiArgs & { rewardId: string }>, 'mutationKey'>,
  callback?: (data: RewardInfo) => void
): UseMutationResult<RewardInfo, AxiosError<ApiError>, ApiArgs & { rewardId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { rewardId: string }) => {
    const data = await RewardAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteReward_ByRewardId(input.rewardId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RewardAdmin.Reward_ByRewardId],
    mutationFn,
    ...options
  })
}

export const useAdmReward_ByRewardId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { rewardId: string },
  options?: Omit<UseQueryOptions<RewardInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RewardInfo) => void
): UseQueryResult<RewardInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmReward_ByRewardId>[1]) => async () => {
    const data = await RewardAdminApi(sdk, { namespace: input.namespace }).getReward_ByRewardId(input.rewardId)
    callback && callback(data)
    return data
  }

  return useQuery<RewardInfo, AxiosError<ApiError>>({
    queryKey: [Key_RewardAdmin.Reward_ByRewardId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateReward_ByRewardIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<RewardInfo, AxiosError<ApiError>, ApiArgs & { rewardId: string; data: RewardUpdate }>, 'mutationKey'>,
  callback?: (data: RewardInfo) => void
): UseMutationResult<RewardInfo, AxiosError<ApiError>, ApiArgs & { rewardId: string; data: RewardUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { rewardId: string; data: RewardUpdate }) => {
    const data = await RewardAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateReward_ByRewardId(
      input.rewardId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RewardAdmin.Reward_ByRewardId],
    mutationFn,
    ...options
  })
}

export const useAdmRewardsByCriteria = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { eventTopic?: string | null; limit?: number; offset?: number; sortBy?: string[] } },
  options?: Omit<UseQueryOptions<RewardPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RewardPagingSlicedResult) => void
): UseQueryResult<RewardPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRewardsByCriteria>[1]) => async () => {
    const data = await RewardAdminApi(sdk, { namespace: input.namespace }).getRewardsByCriteria(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<RewardPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_RewardAdmin.RewardsByCriteria, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateMatch_ByRewardIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ConditionMatchResult, AxiosError<ApiError>, ApiArgs & { rewardId: string; data: EventPayload }>,
    'mutationKey'
  >,
  callback?: (data: ConditionMatchResult) => void
): UseMutationResult<ConditionMatchResult, AxiosError<ApiError>, ApiArgs & { rewardId: string; data: EventPayload }> => {
  //
  const mutationFn = async (input: ApiArgs & { rewardId: string; data: EventPayload }) => {
    const data = await RewardAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateMatch_ByRewardId(
      input.rewardId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RewardAdmin.Match_ByRewardId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteRecord_ByRewardIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { rewardId: string; data: DeleteRewardConditionRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { rewardId: string; data: DeleteRewardConditionRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { rewardId: string; data: DeleteRewardConditionRequest }) => {
    const data = await RewardAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteRecord_ByRewardId(
      input.rewardId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RewardAdmin.Record_ByRewardId],
    mutationFn,
    ...options
  })
}
