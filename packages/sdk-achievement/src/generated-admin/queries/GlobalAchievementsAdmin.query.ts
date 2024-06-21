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
import { GlobalAchievementsAdminApi } from '../GlobalAchievementsAdminApi.js'

import { PaginatedContributorResponse } from '../../generated-definitions/PaginatedContributorResponse.js'
import { PaginatedGlobalAchievementResponse } from '../../generated-definitions/PaginatedGlobalAchievementResponse.js'
import { PaginatedUserContributionResponse } from '../../generated-definitions/PaginatedUserContributionResponse.js'

export enum Key_GlobalAchievementsAdmin {
  GlobalAchievements = 'GlobalAchievementsAdmin.GlobalAchievements',
  GlobalAchievements_ByUserId = 'GlobalAchievementsAdmin.GlobalAchievements_ByUserId',
  ResetGlobal_ByAchievementCode = 'GlobalAchievementsAdmin.ResetGlobal_ByAchievementCode',
  ContributorsGlobal_ByAchievementCode = 'GlobalAchievementsAdmin.ContributorsGlobal_ByAchievementCode'
}

export const useAdmGlobalAchievements = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: {
      achievementCodes?: string | null
      limit?: number
      offset?: number
      sortBy?: string | null
      status?: string | null
      tags?: string[]
    }
  },
  options?: Omit<UseQueryOptions<PaginatedGlobalAchievementResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedGlobalAchievementResponse) => void
): UseQueryResult<PaginatedGlobalAchievementResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmGlobalAchievements>[1]) => async () => {
    const data = await GlobalAchievementsAdminApi(sdk, { namespace: input.namespace }).getGlobalAchievements(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedGlobalAchievementResponse, AxiosError<ApiError>>({
    queryKey: [Key_GlobalAchievementsAdmin.GlobalAchievements, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmGlobalAchievements_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    userId: string
    queryParams?: { achievementCodes?: string | null; limit?: number; offset?: number; sortBy?: string | null; tags?: string[] }
  },
  options?: Omit<UseQueryOptions<PaginatedUserContributionResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedUserContributionResponse) => void
): UseQueryResult<PaginatedUserContributionResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmGlobalAchievements_ByUserId>[1]) => async () => {
    const data = await GlobalAchievementsAdminApi(sdk, { namespace: input.namespace }).getGlobalAchievements_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedUserContributionResponse, AxiosError<ApiError>>({
    queryKey: [Key_GlobalAchievementsAdmin.GlobalAchievements_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteResetGlobal_ByAchievementCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { achievementCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { achievementCode: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { achievementCode: string }) => {
    const data = await GlobalAchievementsAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteResetGlobal_ByAchievementCode(input.achievementCode)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_GlobalAchievementsAdmin.ResetGlobal_ByAchievementCode],
    mutationFn,
    ...options
  })
}

export const useAdmContributorsGlobal_ByAchievementCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { achievementCode: string; queryParams?: { limit?: number; offset?: number; sortBy?: string | null } },
  options?: Omit<UseQueryOptions<PaginatedContributorResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedContributorResponse) => void
): UseQueryResult<PaginatedContributorResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmContributorsGlobal_ByAchievementCode>[1]) => async () => {
    const data = await GlobalAchievementsAdminApi(sdk, { namespace: input.namespace }).getContributorsGlobal_ByAchievementCode(
      input.achievementCode,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedContributorResponse, AxiosError<ApiError>>({
    queryKey: [Key_GlobalAchievementsAdmin.ContributorsGlobal_ByAchievementCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
