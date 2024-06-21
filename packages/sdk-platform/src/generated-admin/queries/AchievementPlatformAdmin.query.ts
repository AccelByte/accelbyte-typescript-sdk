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
import { AchievementPlatformAdminApi } from '../AchievementPlatformAdminApi.js'

import { SteamAchievementUpdateRequest } from '../../generated-definitions/SteamAchievementUpdateRequest.js'
import { XblAchievementUpdateRequest } from '../../generated-definitions/XblAchievementUpdateRequest.js'
import { XblUserAchievements } from '../../generated-definitions/XblUserAchievements.js'

export enum Key_AchievementPlatformAdmin {
  AchievementXbl_ByUserId = 'AchievementPlatformAdmin.AchievementXbl_ByUserId',
  AchievementSteam_ByUserId = 'AchievementPlatformAdmin.AchievementSteam_ByUserId'
}

export const useAdmAchievementXbl_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams: { xboxUserId: string | null } },
  options?: Omit<UseQueryOptions<XblUserAchievements, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: XblUserAchievements) => void
): UseQueryResult<XblUserAchievements, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAchievementXbl_ByUserId>[1]) => async () => {
    const data = await AchievementPlatformAdminApi(sdk, { namespace: input.namespace }).getAchievementXbl_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<XblUserAchievements, AxiosError<ApiError>>({
    queryKey: [Key_AchievementPlatformAdmin.AchievementXbl_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateAchievementXbl_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: XblAchievementUpdateRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: XblAchievementUpdateRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: XblAchievementUpdateRequest }) => {
    const data = await AchievementPlatformAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateAchievementXbl_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AchievementPlatformAdmin.AchievementXbl_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateAchievementSteam_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: SteamAchievementUpdateRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: SteamAchievementUpdateRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: SteamAchievementUpdateRequest }) => {
    const data = await AchievementPlatformAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateAchievementSteam_ByUserId(input.userId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AchievementPlatformAdmin.AchievementSteam_ByUserId],
    mutationFn,
    ...options
  })
}
