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
import { GlobalAchievementsApi } from '../GlobalAchievementsApi.js'

import { PaginatedContributorResponse } from '../../generated-definitions/PaginatedContributorResponse.js'
import { PaginatedGlobalAchievementResponse } from '../../generated-definitions/PaginatedGlobalAchievementResponse.js'
import { PaginatedUserContributionResponse } from '../../generated-definitions/PaginatedUserContributionResponse.js'

export enum Key_GlobalAchievements {
  GlobalAchievements = 'Achievement.GlobalAchievements.GlobalAchievements',
  GlobalAchievements_ByUserId = 'Achievement.GlobalAchievements.GlobalAchievements_ByUserId',
  ContributorsGlobal_ByAchievementCode = 'Achievement.GlobalAchievements.ContributorsGlobal_ByAchievementCode',
  ClaimGlobal_ByUserId_ByAchievementCode = 'Achievement.GlobalAchievements.ClaimGlobal_ByUserId_ByAchievementCode'
}

/**
 * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt; &lt;p&gt;Note:&lt;/p&gt; &lt;p&gt; Global achievement status value mean: &lt;code&gt;status = 1 (in progress)&lt;/code&gt; and &lt;code&gt;status = 2 (unlocked)&lt;/code&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GlobalAchievements.GlobalAchievements, input]
 * }
 * ```
 */
export const useGlobalAchievementsApi_GetGlobalAchievements = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      achievementCodes?: string | null
      limit?: number
      offset?: number
      sortBy?: 'achievedAt' | 'achievedAt:asc' | 'achievedAt:desc' | 'createdAt' | 'createdAt:asc' | 'createdAt:desc'
      status?: string | null
      tags?: string[]
    }
  },
  options?: Omit<UseQueryOptions<PaginatedGlobalAchievementResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedGlobalAchievementResponse>) => void
): UseQueryResult<PaginatedGlobalAchievementResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGlobalAchievementsApi_GetGlobalAchievements>[1]) => async () => {
    const response = await GlobalAchievementsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getGlobalAchievements(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedGlobalAchievementResponse, AxiosError<ApiError>>({
    queryKey: [Key_GlobalAchievements.GlobalAchievements, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GlobalAchievements.GlobalAchievements_ByUserId, input]
 * }
 * ```
 */
export const useGlobalAchievementsApi_GetGlobalAchievements_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: {
      achievementCodes?: string | null
      limit?: number
      offset?: number
      sortBy?: 'contributedValue' | 'contributedValue:asc' | 'contributedValue:desc'
      tags?: string[]
    }
  },
  options?: Omit<UseQueryOptions<PaginatedUserContributionResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedUserContributionResponse>) => void
): UseQueryResult<PaginatedUserContributionResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGlobalAchievementsApi_GetGlobalAchievements_ByUserId>[1]) => async () => {
    const response = await GlobalAchievementsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getGlobalAchievements_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedUserContributionResponse, AxiosError<ApiError>>({
    queryKey: [Key_GlobalAchievements.GlobalAchievements_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GlobalAchievements.ContributorsGlobal_ByAchievementCode, input]
 * }
 * ```
 */
export const useGlobalAchievementsApi_GetContributorsGlobal_ByAchievementCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    achievementCode: string
    queryParams?: { limit?: number; offset?: number; sortBy?: 'contributedValue' | 'contributedValue:asc' | 'contributedValue:desc' }
  },
  options?: Omit<UseQueryOptions<PaginatedContributorResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedContributorResponse>) => void
): UseQueryResult<PaginatedContributorResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useGlobalAchievementsApi_GetContributorsGlobal_ByAchievementCode>[1]) => async () => {
      const response = await GlobalAchievementsApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getContributorsGlobal_ByAchievementCode(input.achievementCode, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<PaginatedContributorResponse, AxiosError<ApiError>>({
    queryKey: [Key_GlobalAchievements.ContributorsGlobal_ByAchievementCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt; &lt;p&gt;Note:&lt;/p&gt; &lt;p&gt; Global achievement should be unlocked to claim the reward. Only contributor of global achievement are eligible for rewards
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GlobalAchievements.ClaimGlobal_ByUserId_ByAchievementCode, input]
 * }
 * ```
 */
export const useGlobalAchievementsApi_UpdateClaimGlobal_ByUserId_ByAchievementCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; achievementCode: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; achievementCode: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; achievementCode: string }) => {
    const response = await GlobalAchievementsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateClaimGlobal_ByUserId_ByAchievementCode(input.userId, input.achievementCode)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GlobalAchievements.ClaimGlobal_ByUserId_ByAchievementCode],
    mutationFn,
    ...options
  })
}
