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
import { AchievementsAdminApi } from '../AchievementsAdminApi.js'

import { AchievementOrderUpdateRequest } from '../../generated-definitions/AchievementOrderUpdateRequest.js'
import { AchievementRequest } from '../../generated-definitions/AchievementRequest.js'
import { AchievementResponse } from '../../generated-definitions/AchievementResponse.js'
import { AchievementUpdateRequest } from '../../generated-definitions/AchievementUpdateRequest.js'
import { ImportConfigResponse } from '../../generated-definitions/ImportConfigResponse.js'
import { PaginatedAchievementResponse } from '../../generated-definitions/PaginatedAchievementResponse.js'

export enum Key_AchievementsAdmin {
  Achievements = 'AchievementsAdmin.Achievements',
  Achievement = 'AchievementsAdmin.Achievement',
  AchievementsExport = 'AchievementsAdmin.AchievementsExport',
  AchievementImport = 'AchievementsAdmin.AchievementImport',
  Achievement_ByAchievementCode = 'AchievementsAdmin.Achievement_ByAchievementCode'
}

export const useAdmAchievements = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: {
      global?: boolean | null
      limit?: number
      offset?: number
      sortBy?:
        | 'listOrder'
        | 'listOrder:asc'
        | 'listOrder:desc'
        | 'createdAt'
        | 'createdAt:asc'
        | 'createdAt:desc'
        | 'updatedAt'
        | 'updatedAt:asc'
        | 'updatedAt:desc'
      tags?: string[]
    }
  },
  options?: Omit<UseQueryOptions<PaginatedAchievementResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedAchievementResponse) => void
): UseQueryResult<PaginatedAchievementResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAchievements>[1]) => async () => {
    const data = await AchievementsAdminApi(sdk, { namespace: input.namespace }).getAchievements(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedAchievementResponse, AxiosError<ApiError>>({
    queryKey: [Key_AchievementsAdmin.Achievements, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateAchievementMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<AchievementResponse, AxiosError<ApiError>, ApiArgs & { data: AchievementRequest }>, 'mutationKey'>,
  callback?: (data: AchievementResponse) => void
): UseMutationResult<AchievementResponse, AxiosError<ApiError>, ApiArgs & { data: AchievementRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: AchievementRequest }) => {
    const data = await AchievementsAdminApi(sdk, { namespace: input.namespace, config: input.config }).createAchievement(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AchievementsAdmin.Achievement],
    mutationFn,
    ...options
  })
}

export const useAdmAchievementsExport = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { tags?: string[] } },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAchievementsExport>[1]) => async () => {
    const data = await AchievementsAdminApi(sdk, { namespace: input.namespace }).getAchievementsExport(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_AchievementsAdmin.AchievementsExport, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateAchievementImportMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ImportConfigResponse, AxiosError<ApiError>, ApiArgs & { data: { file?: File; strategy?: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: ImportConfigResponse) => void
): UseMutationResult<ImportConfigResponse, AxiosError<ApiError>, ApiArgs & { data: { file?: File; strategy?: string | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: { file?: File; strategy?: string | null } }) => {
    const data = await AchievementsAdminApi(sdk, { namespace: input.namespace, config: input.config }).createAchievementImport(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AchievementsAdmin.AchievementImport],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteAchievement_ByAchievementCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { achievementCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { achievementCode: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { achievementCode: string }) => {
    const data = await AchievementsAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteAchievement_ByAchievementCode(
      input.achievementCode
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AchievementsAdmin.Achievement_ByAchievementCode],
    mutationFn,
    ...options
  })
}

export const useAdmAchievement_ByAchievementCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { achievementCode: string },
  options?: Omit<UseQueryOptions<AchievementResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AchievementResponse) => void
): UseQueryResult<AchievementResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAchievement_ByAchievementCode>[1]) => async () => {
    const data = await AchievementsAdminApi(sdk, { namespace: input.namespace }).getAchievement_ByAchievementCode(input.achievementCode)
    callback && callback(data)
    return data
  }

  return useQuery<AchievementResponse, AxiosError<ApiError>>({
    queryKey: [Key_AchievementsAdmin.Achievement_ByAchievementCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchAchievement_ByAchievementCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { achievementCode: string; data: AchievementOrderUpdateRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { achievementCode: string; data: AchievementOrderUpdateRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { achievementCode: string; data: AchievementOrderUpdateRequest }) => {
    const data = await AchievementsAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchAchievement_ByAchievementCode(
      input.achievementCode,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AchievementsAdmin.Achievement_ByAchievementCode],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateAchievement_ByAchievementCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<AchievementResponse, AxiosError<ApiError>, ApiArgs & { achievementCode: string; data: AchievementUpdateRequest }>,
    'mutationKey'
  >,
  callback?: (data: AchievementResponse) => void
): UseMutationResult<AchievementResponse, AxiosError<ApiError>, ApiArgs & { achievementCode: string; data: AchievementUpdateRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { achievementCode: string; data: AchievementUpdateRequest }) => {
    const data = await AchievementsAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateAchievement_ByAchievementCode(
      input.achievementCode,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AchievementsAdmin.Achievement_ByAchievementCode],
    mutationFn,
    ...options
  })
}
