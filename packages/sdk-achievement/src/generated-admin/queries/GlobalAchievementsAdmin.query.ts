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
import { GlobalAchievementsAdminApi } from '../GlobalAchievementsAdminApi.js'

import { PaginatedContributorResponse } from '../../generated-definitions/PaginatedContributorResponse.js'
import { PaginatedGlobalAchievementResponse } from '../../generated-definitions/PaginatedGlobalAchievementResponse.js'
import { PaginatedUserContributionResponse } from '../../generated-definitions/PaginatedUserContributionResponse.js'

export enum Key_GlobalAchievementsAdmin {
  GlobalAchievements = 'Achievement.GlobalAchievementsAdmin.GlobalAchievements',
  GlobalAchievements_ByUserId = 'Achievement.GlobalAchievementsAdmin.GlobalAchievements_ByUserId',
  ResetGlobal_ByAchievementCode = 'Achievement.GlobalAchievementsAdmin.ResetGlobal_ByAchievementCode',
  ContributorsGlobal_ByAchievementCode = 'Achievement.GlobalAchievementsAdmin.ContributorsGlobal_ByAchievementCode'
}

/**
 * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt; &lt;p&gt;Note:&lt;/p&gt; &lt;p&gt; Global achievement status value mean: &lt;code&gt;status = 1 (in progress)&lt;/code&gt; and &lt;code&gt;status = 2 (unlocked)&lt;/code&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GlobalAchievementsAdmin.GlobalAchievements, input]
 * }
 * ```
 */
export const useGlobalAchievementsAdminApi_GetGlobalAchievements = (
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
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGlobalAchievementsAdminApi_GetGlobalAchievements>[1]) => async () => {
    const response = await GlobalAchievementsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getGlobalAchievements(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedGlobalAchievementResponse, AxiosError<ApiError>>({
    queryKey: [Key_GlobalAchievementsAdmin.GlobalAchievements, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GlobalAchievementsAdmin.GlobalAchievements_ByUserId, input]
 * }
 * ```
 */
export const useGlobalAchievementsAdminApi_GetGlobalAchievements_ByUserId = (
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
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useGlobalAchievementsAdminApi_GetGlobalAchievements_ByUserId>[1]) => async () => {
      const response = await GlobalAchievementsAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getGlobalAchievements_ByUserId(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<PaginatedUserContributionResponse, AxiosError<ApiError>>({
    queryKey: [Key_GlobalAchievementsAdmin.GlobalAchievements_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;p&gt;[TEST FACILITY ONLY]&lt;/p&gt; &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [DELETE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt; &lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GlobalAchievementsAdmin.ResetGlobal_ByAchievementCode, input]
 * }
 * ```
 */
export const useGlobalAchievementsAdminApi_DeleteResetGlobal_ByAchievementCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { achievementCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { achievementCode: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { achievementCode: string }) => {
    const response = await GlobalAchievementsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteResetGlobal_ByAchievementCode(input.achievementCode)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GlobalAchievementsAdmin.ResetGlobal_ByAchievementCode],
    mutationFn,
    ...options
  })
}

/**
 * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GlobalAchievementsAdmin.ContributorsGlobal_ByAchievementCode, input]
 * }
 * ```
 */
export const useGlobalAchievementsAdminApi_GetContributorsGlobal_ByAchievementCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    achievementCode: string
    queryParams?: { limit?: number; offset?: number; sortBy?: 'contributedValue' | 'contributedValue:asc' | 'contributedValue:desc' }
  },
  options?: Omit<UseQueryOptions<PaginatedContributorResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedContributorResponse>) => void
): UseQueryResult<PaginatedContributorResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useGlobalAchievementsAdminApi_GetContributorsGlobal_ByAchievementCode>[1]) => async () => {
      const response = await GlobalAchievementsAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getContributorsGlobal_ByAchievementCode(input.achievementCode, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<PaginatedContributorResponse, AxiosError<ApiError>>({
    queryKey: [Key_GlobalAchievementsAdmin.ContributorsGlobal_ByAchievementCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
