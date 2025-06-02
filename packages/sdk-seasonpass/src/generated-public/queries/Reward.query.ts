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
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { RewardApi } from '../RewardApi.js'

import { ClaimableRewards } from '../../generated-definitions/ClaimableRewards.js'
import { UserRewardClaim } from '../../generated-definitions/UserRewardClaim.js'

export enum Key_Reward {
  SeasonCurrentReward_ByUserId = 'Seasonpass.Reward.SeasonCurrentReward_ByUserId',
  SeasonCurrentRewardBulk_ByUserId = 'Seasonpass.Reward.SeasonCurrentRewardBulk_ByUserId'
}

/**
 * This API is used to claim reward, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Reward.SeasonCurrentReward_ByUserId, input]
 * }
 * ```
 */
export const useRewardApi_CreateSeasonCurrentReward_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ClaimableRewards, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserRewardClaim }>,
    'mutationKey'
  >,
  callback?: (data: ClaimableRewards) => void
): UseMutationResult<ClaimableRewards, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: UserRewardClaim }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: UserRewardClaim }) => {
    const response = await RewardApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createSeasonCurrentReward_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Reward.SeasonCurrentReward_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to bulk claim all remained rewards, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Reward.SeasonCurrentRewardBulk_ByUserId, input]
 * }
 * ```
 */
export const useRewardApi_CreateSeasonCurrentRewardBulk_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<ClaimableRewards, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }>, 'mutationKey'>,
  callback?: (data: ClaimableRewards) => void
): UseMutationResult<ClaimableRewards, AxiosError<ApiError>, SdkSetConfigParam & { userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string }) => {
    const response = await RewardApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createSeasonCurrentRewardBulk_ByUserId(input.userId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Reward.SeasonCurrentRewardBulk_ByUserId],
    mutationFn,
    ...options
  })
}
