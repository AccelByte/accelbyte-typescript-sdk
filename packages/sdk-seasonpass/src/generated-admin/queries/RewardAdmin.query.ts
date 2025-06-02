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
import { RewardAdminApi } from '../RewardAdminApi.js'

import { RewardCreate } from '../../generated-definitions/RewardCreate.js'
import { RewardInfo } from '../../generated-definitions/RewardInfo.js'
import { RewardInfoArray } from '../../generated-definitions/RewardInfoArray.js'
import { RewardUpdate } from '../../generated-definitions/RewardUpdate.js'

export enum Key_RewardAdmin {
  Rewards_BySeasonId = 'Seasonpass.RewardAdmin.Rewards_BySeasonId',
  Reward_BySeasonId = 'Seasonpass.RewardAdmin.Reward_BySeasonId',
  Reward_BySeasonId_ByCode = 'Seasonpass.RewardAdmin.Reward_BySeasonId_ByCode'
}

/**
 * This API is used to query rewards for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of rewards&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RewardAdmin.Rewards_BySeasonId, input]
 * }
 * ```
 */
export const useRewardAdminApi_GetRewards_BySeasonId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { seasonId: string; queryParams?: { q?: string | null } },
  options?: Omit<UseQueryOptions<RewardInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RewardInfoArray>) => void
): UseQueryResult<RewardInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRewardAdminApi_GetRewards_BySeasonId>[1]) => async () => {
    const response = await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRewards_BySeasonId(
      input.seasonId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RewardInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_RewardAdmin.Rewards_BySeasonId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to create a reward for a draft season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created reward&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RewardAdmin.Reward_BySeasonId, input]
 * }
 * ```
 */
export const useRewardAdminApi_CreateReward_BySeasonIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<RewardInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; data: RewardCreate }>,
    'mutationKey'
  >,
  callback?: (data: RewardInfo) => void
): UseMutationResult<RewardInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; data: RewardCreate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { seasonId: string; data: RewardCreate }) => {
    const response = await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createReward_BySeasonId(
      input.seasonId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RewardAdmin.Reward_BySeasonId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to delete a reward permanently, only draft season reward can be deleted. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RewardAdmin.Reward_BySeasonId_ByCode, input]
 * }
 * ```
 */
export const useRewardAdminApi_DeleteReward_BySeasonId_ByCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; code: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; code: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { seasonId: string; code: string }) => {
    const response = await RewardAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteReward_BySeasonId_ByCode(input.seasonId, input.code)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RewardAdmin.Reward_BySeasonId_ByCode],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to get a reward for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: reward data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RewardAdmin.Reward_BySeasonId_ByCode, input]
 * }
 * ```
 */
export const useRewardAdminApi_GetReward_BySeasonId_ByCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { seasonId: string; code: string },
  options?: Omit<UseQueryOptions<RewardInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RewardInfo>) => void
): UseQueryResult<RewardInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRewardAdminApi_GetReward_BySeasonId_ByCode>[1]) => async () => {
    const response = await RewardAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getReward_BySeasonId_ByCode(input.seasonId, input.code)
    callback && callback(response)
    return response.data
  }

  return useQuery<RewardInfo, AxiosError<ApiError>>({
    queryKey: [Key_RewardAdmin.Reward_BySeasonId_ByCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to update a reward. Only draft season reward can be updated.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated reward&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RewardAdmin.Reward_BySeasonId_ByCode, input]
 * }
 * ```
 */
export const useRewardAdminApi_PatchReward_BySeasonId_ByCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<RewardInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; code: string; data: RewardUpdate }>,
    'mutationKey'
  >,
  callback?: (data: RewardInfo) => void
): UseMutationResult<RewardInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId: string; code: string; data: RewardUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { seasonId: string; code: string; data: RewardUpdate }) => {
    const response = await RewardAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchReward_BySeasonId_ByCode(input.seasonId, input.code, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RewardAdmin.Reward_BySeasonId_ByCode],
    mutationFn,
    ...options
  })
}
