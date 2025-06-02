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
import { PlayerRewardAdminApi } from '../PlayerRewardAdminApi.js'

import { ClaimUserRewardsByGoalCodeRequest } from '../../generated-definitions/ClaimUserRewardsByGoalCodeRequest.js'
import { ClaimUserRewardsReq } from '../../generated-definitions/ClaimUserRewardsReq.js'
import { ClaimUsersRewardsRequest } from '../../generated-definitions/ClaimUsersRewardsRequest.js'
import { ClaimUsersRewardsResponseArray } from '../../generated-definitions/ClaimUsersRewardsResponseArray.js'
import { ListUserRewardsResponse } from '../../generated-definitions/ListUserRewardsResponse.js'
import { UserRewardArray } from '../../generated-definitions/UserRewardArray.js'

export enum Key_PlayerRewardAdmin {
  UserRewardClaim = 'Challenge.PlayerRewardAdmin.UserRewardClaim',
  Rewards_ByUserId = 'Challenge.PlayerRewardAdmin.Rewards_ByUserId',
  RewardClaim_ByUserId = 'Challenge.PlayerRewardAdmin.RewardClaim_ByUserId',
  RewardClaim_ByUserId_ByChallengeCode = 'Challenge.PlayerRewardAdmin.RewardClaim_ByUserId_ByChallengeCode'
}

/**
 * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:REWARD [UPDATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerRewardAdmin.UserRewardClaim, input]
 * }
 * ```
 */
export const usePlayerRewardAdminApi_UpdateUserRewardClaimMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ClaimUsersRewardsResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { data: ClaimUsersRewardsRequest[] }>,
    'mutationKey'
  >,
  callback?: (data: ClaimUsersRewardsResponseArray) => void
): UseMutationResult<ClaimUsersRewardsResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { data: ClaimUsersRewardsRequest[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ClaimUsersRewardsRequest[] }) => {
    const response = await PlayerRewardAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateUserRewardClaim(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlayerRewardAdmin.UserRewardClaim],
    mutationFn,
    ...options
  })
}

/**
 * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:REWARD [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerRewardAdmin.Rewards_ByUserId, input]
 * }
 * ```
 */
export const usePlayerRewardAdminApi_GetRewards_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: {
      challengeCode?: string | null
      goalProgressionId?: string | null
      limit?: number
      offset?: number
      sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
      status?: 'CLAIMED' | 'UNCLAIMED'
    }
  },
  options?: Omit<UseQueryOptions<ListUserRewardsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListUserRewardsResponse>) => void
): UseQueryResult<ListUserRewardsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayerRewardAdminApi_GetRewards_ByUserId>[1]) => async () => {
    const response = await PlayerRewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRewards_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListUserRewardsResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerRewardAdmin.Rewards_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:REWARD [UPDATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerRewardAdmin.RewardClaim_ByUserId, input]
 * }
 * ```
 */
export const usePlayerRewardAdminApi_UpdateRewardClaim_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserRewardArray, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: ClaimUserRewardsReq }>,
    'mutationKey'
  >,
  callback?: (data: UserRewardArray) => void
): UseMutationResult<UserRewardArray, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: ClaimUserRewardsReq }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: ClaimUserRewardsReq }) => {
    const response = await PlayerRewardAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRewardClaim_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlayerRewardAdmin.RewardClaim_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:REWARD [UPDATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerRewardAdmin.RewardClaim_ByUserId_ByChallengeCode, input]
 * }
 * ```
 */
export const usePlayerRewardAdminApi_UpdateRewardClaim_ByUserId_ByChallengeCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UserRewardArray,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; challengeCode: string; data: ClaimUserRewardsByGoalCodeRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: UserRewardArray) => void
): UseMutationResult<
  UserRewardArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; challengeCode: string; data: ClaimUserRewardsByGoalCodeRequest }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; challengeCode: string; data: ClaimUserRewardsByGoalCodeRequest }
  ) => {
    const response = await PlayerRewardAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRewardClaim_ByUserId_ByChallengeCode(input.userId, input.challengeCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlayerRewardAdmin.RewardClaim_ByUserId_ByChallengeCode],
    mutationFn,
    ...options
  })
}
