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
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { StatConfigurationAdminApi } from '../StatConfigurationAdminApi.js'

import { StatCreate } from '../../generated-definitions/StatCreate.js'
import { StatImportInfo } from '../../generated-definitions/StatImportInfo.js'
import { StatInfo } from '../../generated-definitions/StatInfo.js'
import { StatPagingSlicedResult } from '../../generated-definitions/StatPagingSlicedResult.js'
import { StatUpdate } from '../../generated-definitions/StatUpdate.js'

export enum Key_StatConfigurationAdmin {
  Stats = 'Social.StatConfigurationAdmin.Stats',
  Stat = 'Social.StatConfigurationAdmin.Stat',
  StatsExport = 'Social.StatConfigurationAdmin.StatsExport',
  StatImport = 'Social.StatConfigurationAdmin.StatImport',
  StatsSearch = 'Social.StatConfigurationAdmin.StatsSearch',
  Stat_ByStatCode = 'Social.StatConfigurationAdmin.Stat_ByStatCode',
  Tied_ByStatCode = 'Social.StatConfigurationAdmin.Tied_ByStatCode'
}

/**
 * List stats by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stats&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StatConfigurationAdmin.Stats, input]
 * }
 * ```
 */
export const useStatConfigurationAdminApi_GetStats = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: { cycleIds?: string | null; isGlobal?: boolean | null; isPublic?: boolean | null; limit?: number; offset?: number }
  },
  options?: Omit<UseQueryOptions<StatPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<StatPagingSlicedResult>) => void
): UseQueryResult<StatPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useStatConfigurationAdminApi_GetStats>[1]) => async () => {
    const response = await StatConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getStats(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<StatPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_StatConfigurationAdmin.Stats, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create stat.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created stat template&lt;/li&gt;&lt;li&gt;default minimum value is 0&lt;/li&gt;&lt;li&gt;default maximum value is 1.7976931348623157e+308&lt;/li&gt;&lt;li&gt;Field globalAggregationMethod will be ignored when setAsGlobal field is false&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StatConfigurationAdmin.Stat, input]
 * }
 * ```
 */
export const useStatConfigurationAdminApi_CreateStatMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<StatInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: StatCreate }>, 'mutationKey'>,
  callback?: (data: StatInfo) => void
): UseMutationResult<StatInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: StatCreate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: StatCreate }) => {
    const response = await StatConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createStat(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StatConfigurationAdmin.Stat],
    mutationFn,
    ...options
  })
}

/**
 * Export all stat configurations for a given namespace into file At current, only JSON file is supported.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StatConfigurationAdmin.StatsExport, input]
 * }
 * ```
 */
export const useStatConfigurationAdminApi_GetStatsExport = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useStatConfigurationAdminApi_GetStatsExport>[1]) => async () => {
    const response = await StatConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getStatsExport()
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_StatConfigurationAdmin.StatsExport, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Import stat configurations for a given namespace from file. At current, only JSON file is supported.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StatConfigurationAdmin.StatImport, input]
 * }
 * ```
 */
export const useStatConfigurationAdminApi_CreateStatImportMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      StatImportInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: { file?: File }; queryParams?: { replaceExisting?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: StatImportInfo) => void
): UseMutationResult<
  StatImportInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: { file?: File }; queryParams?: { replaceExisting?: boolean | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { file?: File }; queryParams?: { replaceExisting?: boolean | null } }) => {
    const response = await StatConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createStatImport(input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StatConfigurationAdmin.StatImport],
    mutationFn,
    ...options
  })
}

/**
 * Query stats by keyword.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;i&gt;: stats&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StatConfigurationAdmin.StatsSearch, input]
 * }
 * ```
 */
export const useStatConfigurationAdminApi_GetStatsSearch = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: { keyword: string | null; isGlobal?: boolean | null; isPublic?: boolean | null; limit?: number; offset?: number }
  },
  options?: Omit<UseQueryOptions<StatPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<StatPagingSlicedResult>) => void
): UseQueryResult<StatPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useStatConfigurationAdminApi_GetStatsSearch>[1]) => async () => {
    const response = await StatConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getStatsSearch(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<StatPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_StatConfigurationAdmin.StatsSearch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Deletes stat template.&lt;br&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StatConfigurationAdmin.Stat_ByStatCode, input]
 * }
 * ```
 */
export const useStatConfigurationAdminApi_DeleteStat_ByStatCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { statCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { statCode: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { statCode: string }) => {
    const response = await StatConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteStat_ByStatCode(input.statCode)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StatConfigurationAdmin.Stat_ByStatCode],
    mutationFn,
    ...options
  })
}

/**
 * Get stat by statCode.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat info&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StatConfigurationAdmin.Stat_ByStatCode, input]
 * }
 * ```
 */
export const useStatConfigurationAdminApi_GetStat_ByStatCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { statCode: string },
  options?: Omit<UseQueryOptions<StatInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<StatInfo>) => void
): UseQueryResult<StatInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useStatConfigurationAdminApi_GetStat_ByStatCode>[1]) => async () => {
    const response = await StatConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getStat_ByStatCode(input.statCode)
    callback && callback(response)
    return response.data
  }

  return useQuery<StatInfo, AxiosError<ApiError>>({
    queryKey: [Key_StatConfigurationAdmin.Stat_ByStatCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update stat.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated stat&lt;/li&gt;&lt;li&gt;&lt;i&gt;Field globalAggregationMethod will be ignored when the stat is not set as global&lt;/li&gt;&lt;li&gt;&lt;i&gt;Field globalAggregationMethod is not updatable when the stat status is TIED&lt;/li&gt;&lt;li&gt;&lt;i&gt;Field visibility is not updatable when the stat status is TIED&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StatConfigurationAdmin.Stat_ByStatCode, input]
 * }
 * ```
 */
export const useStatConfigurationAdminApi_PatchStat_ByStatCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<StatInfo, AxiosError<ApiError>, SdkSetConfigParam & { statCode: string; data: StatUpdate }>,
    'mutationKey'
  >,
  callback?: (data: StatInfo) => void
): UseMutationResult<StatInfo, AxiosError<ApiError>, SdkSetConfigParam & { statCode: string; data: StatUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { statCode: string; data: StatUpdate }) => {
    const response = await StatConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchStat_ByStatCode(input.statCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StatConfigurationAdmin.Stat_ByStatCode],
    mutationFn,
    ...options
  })
}

/**
 * Deletes stat template.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StatConfigurationAdmin.Tied_ByStatCode, input]
 * }
 * ```
 */
export const useStatConfigurationAdminApi_DeleteTied_ByStatCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { statCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { statCode: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { statCode: string }) => {
    const response = await StatConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteTied_ByStatCode(input.statCode)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StatConfigurationAdmin.Tied_ByStatCode],
    mutationFn,
    ...options
  })
}
