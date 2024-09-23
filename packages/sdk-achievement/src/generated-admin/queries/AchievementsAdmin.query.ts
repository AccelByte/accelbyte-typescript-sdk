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
import { AchievementsAdminApi } from '../AchievementsAdminApi.js'

import { AchievementOrderUpdateRequest } from '../../generated-definitions/AchievementOrderUpdateRequest.js'
import { AchievementRequest } from '../../generated-definitions/AchievementRequest.js'
import { AchievementResponse } from '../../generated-definitions/AchievementResponse.js'
import { AchievementUpdateRequest } from '../../generated-definitions/AchievementUpdateRequest.js'
import { ImportConfigResponse } from '../../generated-definitions/ImportConfigResponse.js'
import { PaginatedAchievementResponse } from '../../generated-definitions/PaginatedAchievementResponse.js'

export enum Key_AchievementsAdmin {
  Achievements = 'Achievement.AchievementsAdmin.Achievements',
  Achievement = 'Achievement.AchievementsAdmin.Achievement',
  AchievementsExport = 'Achievement.AchievementsAdmin.AchievementsExport',
  AchievementImport = 'Achievement.AchievementsAdmin.AchievementImport',
  Achievement_ByAchievementCode = 'Achievement.AchievementsAdmin.Achievement_ByAchievementCode'
}

/**
 * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AchievementsAdmin.Achievements, input]
 * }
 * ```
 */
export const useAchievementsAdminApi_GetAchievements = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
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
  callback?: (data: AxiosResponse<PaginatedAchievementResponse>) => void
): UseQueryResult<PaginatedAchievementResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAchievementsAdminApi_GetAchievements>[1]) => async () => {
    const response = await AchievementsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getAchievements(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedAchievementResponse, AxiosError<ApiError>>({
    queryKey: [Key_AchievementsAdmin.Achievements, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [CREATE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt; Other detail info: - achievementCode: Human readable unique code to indentify the achievement. Must be lowercase and maximum length is 32 - incremental: If the achievement is not incremental, it does not need to store a goal value of a stat to be unlocked. If the achievement is incremental, it needs to set statCode and goalValue - statCode: Selected statistic code, from the published statistic code event.Human readable unique code to indentify the achievement. Must be lowercase and maximum length is 32 - goalValue: Statistics value required to unlock the achievement. - defaultLanguage: localozation for achievement name and achievement description. Allowed format : en, en-US - slug: specify the image they want to use, it can be file image name or something to define the achievement icon.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AchievementsAdmin.Achievement, input]
 * }
 * ```
 */
export const useAchievementsAdminApi_CreateAchievementMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<AchievementResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: AchievementRequest }>,
    'mutationKey'
  >,
  callback?: (data: AchievementResponse) => void
): UseMutationResult<AchievementResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: AchievementRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: AchievementRequest }) => {
    const response = await AchievementsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createAchievement(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AchievementsAdmin.Achievement],
    mutationFn,
    ...options
  })
}

/**
 * &lt;p&gt; Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt;&lt;/p&gt;&lt;p&gt;Required Scope: &lt;code&gt;social&lt;/code&gt;&lt;p&gt;Successful response header will contain: &lt;code&gt;content-disposition: attachment; filename=achievement_&lt;namespace&gt;_config.json&lt;/code&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AchievementsAdmin.AchievementsExport, input]
 * }
 * ```
 */
export const useAchievementsAdminApi_GetAchievementsExport = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { tags?: string[] } },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAchievementsAdminApi_GetAchievementsExport>[1]) => async () => {
    const response = await AchievementsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getAchievementsExport(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_AchievementsAdmin.AchievementsExport, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 *  Required permission ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [UPDATE] Required Scope: social Import achievement configuration from file. It will merge with existing achievement. Available import strategy: - leaveOut: if achievement with same key exist, the existing will be used and imported one will be ignored (default) - replace: if achievement with same key exist, the imported achievement will be used and existing one will be removed
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AchievementsAdmin.AchievementImport, input]
 * }
 * ```
 */
export const useAchievementsAdminApi_UpdateAchievementImportMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ImportConfigResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: { file?: File; strategy?: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: ImportConfigResponse) => void
): UseMutationResult<
  ImportConfigResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: { file?: File; strategy?: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { file?: File; strategy?: string | null } }) => {
    const response = await AchievementsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateAchievementImport(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AchievementsAdmin.AchievementImport],
    mutationFn,
    ...options
  })
}

/**
 * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [DELETE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AchievementsAdmin.Achievement_ByAchievementCode, input]
 * }
 * ```
 */
export const useAchievementsAdminApi_DeleteAchievement_ByAchievementCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { achievementCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { achievementCode: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { achievementCode: string }) => {
    const response = await AchievementsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteAchievement_ByAchievementCode(input.achievementCode)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AchievementsAdmin.Achievement_ByAchievementCode],
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
 *    queryKey: [Key_AchievementsAdmin.Achievement_ByAchievementCode, input]
 * }
 * ```
 */
export const useAchievementsAdminApi_GetAchievement_ByAchievementCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { achievementCode: string },
  options?: Omit<UseQueryOptions<AchievementResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AchievementResponse>) => void
): UseQueryResult<AchievementResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useAchievementsAdminApi_GetAchievement_ByAchievementCode>[1]) => async () => {
      const response = await AchievementsAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getAchievement_ByAchievementCode(input.achievementCode)
      callback && callback(response)
      return response.data
    }

  return useQuery<AchievementResponse, AxiosError<ApiError>>({
    queryKey: [Key_AchievementsAdmin.Achievement_ByAchievementCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AchievementsAdmin.Achievement_ByAchievementCode, input]
 * }
 * ```
 */
export const useAchievementsAdminApi_PatchAchievement_ByAchievementCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { achievementCode: string; data: AchievementOrderUpdateRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { achievementCode: string; data: AchievementOrderUpdateRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { achievementCode: string; data: AchievementOrderUpdateRequest }) => {
    const response = await AchievementsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchAchievement_ByAchievementCode(input.achievementCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AchievementsAdmin.Achievement_ByAchievementCode],
    mutationFn,
    ...options
  })
}

/**
 * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AchievementsAdmin.Achievement_ByAchievementCode, input]
 * }
 * ```
 */
export const useAchievementsAdminApi_UpdateAchievement_ByAchievementCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      AchievementResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { achievementCode: string; data: AchievementUpdateRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: AchievementResponse) => void
): UseMutationResult<
  AchievementResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { achievementCode: string; data: AchievementUpdateRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { achievementCode: string; data: AchievementUpdateRequest }) => {
    const response = await AchievementsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateAchievement_ByAchievementCode(input.achievementCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AchievementsAdmin.Achievement_ByAchievementCode],
    mutationFn,
    ...options
  })
}
