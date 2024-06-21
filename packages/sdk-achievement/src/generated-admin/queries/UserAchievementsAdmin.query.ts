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
import { UserAchievementsAdminApi } from '../UserAchievementsAdminApi.js'

import { PaginatedUserAchievementResponse } from '../../generated-definitions/PaginatedUserAchievementResponse.js'

export enum Key_UserAchievementsAdmin {
  Achievements_ByUserId = 'UserAchievementsAdmin.Achievements_ByUserId',
  Reset_ByUserId_ByAchievementCode = 'UserAchievementsAdmin.Reset_ByUserId_ByAchievementCode',
  Unlock_ByUserId_ByAchievementCode = 'UserAchievementsAdmin.Unlock_ByUserId_ByAchievementCode'
}

export const useAdmAchievements_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    userId: string
    queryParams?: { limit?: number; offset?: number; preferUnlocked?: boolean | null; sortBy?: string | null; tags?: string[] }
  },
  options?: Omit<UseQueryOptions<PaginatedUserAchievementResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedUserAchievementResponse) => void
): UseQueryResult<PaginatedUserAchievementResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAchievements_ByUserId>[1]) => async () => {
    const data = await UserAchievementsAdminApi(sdk, { namespace: input.namespace }).getAchievements_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedUserAchievementResponse, AxiosError<ApiError>>({
    queryKey: [Key_UserAchievementsAdmin.Achievements_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteReset_ByUserId_ByAchievementCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; achievementCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; achievementCode: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; achievementCode: string }) => {
    const data = await UserAchievementsAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteReset_ByUserId_ByAchievementCode(input.userId, input.achievementCode)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserAchievementsAdmin.Reset_ByUserId_ByAchievementCode],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateUnlock_ByUserId_ByAchievementCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; achievementCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; achievementCode: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; achievementCode: string }) => {
    const data = await UserAchievementsAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateUnlock_ByUserId_ByAchievementCode(input.userId, input.achievementCode)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserAchievementsAdmin.Unlock_ByUserId_ByAchievementCode],
    mutationFn,
    ...options
  })
}
