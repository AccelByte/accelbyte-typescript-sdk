/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { AchievementsApi } from '../AchievementsApi.js'

import { PublicAchievementResponse } from '../../generated-definitions/PublicAchievementResponse.js'
import { PublicAchievementsResponse } from '../../generated-definitions/PublicAchievementsResponse.js'

export enum Key_Achievements {
  Achievements = 'Achievement.Achievements.Achievements',
  Achievement_ByAchievementCode = 'Achievement.Achievements.Achievement_ByAchievementCode'
}

/**
 * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Achievements.Achievements, input]
 * }
 * ```
 */
export const useAchievementsApi_GetAchievements = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: {
      language: string | null
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
  options?: Omit<UseQueryOptions<PublicAchievementsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PublicAchievementsResponse>) => void
): UseQueryResult<PublicAchievementsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAchievementsApi_GetAchievements>[1]) => async () => {
    const response = await AchievementsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getAchievements(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PublicAchievementsResponse, AxiosError<ApiError>>({
    queryKey: [Key_Achievements.Achievements, input],
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
 *    queryKey: [Key_Achievements.Achievement_ByAchievementCode, input]
 * }
 * ```
 */
export const useAchievementsApi_GetAchievement_ByAchievementCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { achievementCode: string; queryParams: { language: string | null } },
  options?: Omit<UseQueryOptions<PublicAchievementResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PublicAchievementResponse>) => void
): UseQueryResult<PublicAchievementResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAchievementsApi_GetAchievement_ByAchievementCode>[1]) => async () => {
    const response = await AchievementsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getAchievement_ByAchievementCode(input.achievementCode, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<PublicAchievementResponse, AxiosError<ApiError>>({
    queryKey: [Key_Achievements.Achievement_ByAchievementCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
