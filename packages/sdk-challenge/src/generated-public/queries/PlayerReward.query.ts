/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
import { PlayerRewardApi } from '../PlayerRewardApi.js'

import { ClaimUserRewardsByGoalCodeRequest } from '../../generated-definitions/ClaimUserRewardsByGoalCodeRequest.js'
import { ClaimUserRewardsReq } from '../../generated-definitions/ClaimUserRewardsReq.js'
import { ListUserRewardsResponse } from '../../generated-definitions/ListUserRewardsResponse.js'
import { UserRewardArray } from '../../generated-definitions/UserRewardArray.js'

export enum Key_PlayerReward {
  UsersMeRewards = 'Challenge.PlayerReward.UsersMeRewards',
  UserMeRewardClaim = 'Challenge.PlayerReward.UserMeRewardClaim',
  RewardClaimMeUser_ByChallengeCode = 'Challenge.PlayerReward.RewardClaimMeUser_ByChallengeCode'
}

/**
 * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE:REWARD [READ]&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerReward.UsersMeRewards, input]
 * }
 * ```
 */
export const usePlayerRewardApi_GetUsersMeRewards = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; status?: 'CLAIMED' | 'UNCLAIMED' }
  },
  options?: Omit<UseQueryOptions<ListUserRewardsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListUserRewardsResponse>) => void
): UseQueryResult<ListUserRewardsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayerRewardApi_GetUsersMeRewards>[1]) => async () => {
    const response = await PlayerRewardApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersMeRewards(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListUserRewardsResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerReward.UsersMeRewards, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE:REWARD [UPDATE]&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerReward.UserMeRewardClaim, input]
 * }
 * ```
 */
export const usePlayerRewardApi_CreateUserMeRewardClaimMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserRewardArray, AxiosError<ApiError>, SdkSetConfigParam & { data: ClaimUserRewardsReq }>,
    'mutationKey'
  >,
  callback?: (data: UserRewardArray) => void
): UseMutationResult<UserRewardArray, AxiosError<ApiError>, SdkSetConfigParam & { data: ClaimUserRewardsReq }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ClaimUserRewardsReq }) => {
    const response = await PlayerRewardApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createUserMeRewardClaim(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlayerReward.UserMeRewardClaim],
    mutationFn,
    ...options
  })
}

/**
 * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE:REWARD [UPDATE]&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerReward.RewardClaimMeUser_ByChallengeCode, input]
 * }
 * ```
 */
export const usePlayerRewardApi_CreateRewardClaimMeUser_ByChallengeCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UserRewardArray,
      AxiosError<ApiError>,
      SdkSetConfigParam & { challengeCode: string; data: ClaimUserRewardsByGoalCodeRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: UserRewardArray) => void
): UseMutationResult<
  UserRewardArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { challengeCode: string; data: ClaimUserRewardsByGoalCodeRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { challengeCode: string; data: ClaimUserRewardsByGoalCodeRequest }) => {
    const response = await PlayerRewardApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createRewardClaimMeUser_ByChallengeCode(input.challengeCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlayerReward.RewardClaimMeUser_ByChallengeCode],
    mutationFn,
    ...options
  })
}
