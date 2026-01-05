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
import { StatCycleConfigurationAdminApi } from '../StatCycleConfigurationAdminApi.js'

import { BulkCycleStatsAdd } from '../../generated-definitions/BulkCycleStatsAdd.js'
import { BulkStatCycleOperationResultArray } from '../../generated-definitions/BulkStatCycleOperationResultArray.js'
import { BulkStatCycleRequest } from '../../generated-definitions/BulkStatCycleRequest.js'
import { BulkStatCycleResult } from '../../generated-definitions/BulkStatCycleResult.js'
import { StatCycleCreate } from '../../generated-definitions/StatCycleCreate.js'
import { StatCycleInfo } from '../../generated-definitions/StatCycleInfo.js'
import { StatCyclePagingSlicedResult } from '../../generated-definitions/StatCyclePagingSlicedResult.js'
import { StatCycleUpdate } from '../../generated-definitions/StatCycleUpdate.js'
import { StatImportInfo } from '../../generated-definitions/StatImportInfo.js'

export enum Key_StatCycleConfigurationAdmin {
  StatCycles = 'Social.StatCycleConfigurationAdmin.StatCycles',
  StatCycle = 'Social.StatCycleConfigurationAdmin.StatCycle',
  StatCycleBulk = 'Social.StatCycleConfigurationAdmin.StatCycleBulk',
  StatCyclesExport = 'Social.StatCycleConfigurationAdmin.StatCyclesExport',
  StatCycleImport = 'Social.StatCycleConfigurationAdmin.StatCycleImport',
  StatCycle_ByCycleId = 'Social.StatCycleConfigurationAdmin.StatCycle_ByCycleId',
  Stop_ByCycleId = 'Social.StatCycleConfigurationAdmin.Stop_ByCycleId',
  StatAddBulk_ByCycleId = 'Social.StatCycleConfigurationAdmin.StatAddBulk_ByCycleId'
}

/**
 * List stat cycles by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycles&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StatCycleConfigurationAdmin.StatCycles, input]
 * }
 * ```
 */
export const useStatCycleConfigurationAdminApi_GetStatCycles = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      cycleType?: 'ANNUALLY' | 'DAILY' | 'MONTHLY' | 'SEASONAL' | 'WEEKLY'
      limit?: number
      name?: string | null
      offset?: number
      sortBy?: string | null
      status?: 'ACTIVE' | 'INIT' | 'STOPPED'
    }
  },
  options?: Omit<UseQueryOptions<StatCyclePagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<StatCyclePagingSlicedResult>) => void
): UseQueryResult<StatCyclePagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useStatCycleConfigurationAdminApi_GetStatCycles>[1]) => async () => {
    const response = await StatCycleConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getStatCycles(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<StatCyclePagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_StatCycleConfigurationAdmin.StatCycles, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create stat cycle.&lt;br&gt;Fields:&lt;ul&gt;&lt;li&gt;id: Cycle id, consist of alphanumeric characters with a maximum of 32 characters. if not provided will be generated. &lt;b&gt;(optional)&lt;/b&gt;.&lt;/li&gt;&lt;li&gt;name: Cycle name, maximum length is 128 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt;&lt;li&gt;resetTime: Reset time must follow &lt;b&gt;hours:minutes&lt;/b&gt; in 24 hours format e.g. 01:30, 23:15. &lt;b&gt;(required)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;resetDay: Reset Day follows the ISO-8601 standard, from 1 (Monday) to 7 (Sunday). Required when cycleType is WEEKLY.&lt;/li&gt;&lt;li&gt;resetDate: Reset Date must be a number 1 - 31. Required when cycleType is MONTHLY or ANNUALLY.&lt;/li&gt;&lt;li&gt;resetMonth: Reset Month must be a number 1 - 12. Required when cycleType is ANNUALLY.&lt;/li&gt;&lt;li&gt;seasonPeriod: Season period must be a number greater than or equal to 1 (days). Required when cycleType is SEASONAL.&lt;/li&gt;&lt;li&gt;start: Start time must follow RFC3339 standard. e.g. 2023-02-24T05:10:24.865Z. &lt;b&gt;(required)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;end: End time must follow RFC3339 standard. e.g. 2023-02-24T05:10:24.865Z.&lt;/li&gt;&lt;/ul&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created stat cycle&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StatCycleConfigurationAdmin.StatCycle, input]
 * }
 * ```
 */
export const useStatCycleConfigurationAdminApi_CreateStatCycleMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<StatCycleInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: StatCycleCreate }>, 'mutationKey'>,
  callback?: (data: StatCycleInfo) => void
): UseMutationResult<StatCycleInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: StatCycleCreate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: StatCycleCreate }) => {
    const response = await StatCycleConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createStatCycle(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StatCycleConfigurationAdmin.StatCycle],
    mutationFn,
    ...options
  })
}

/**
 * Bulk get stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of stat cycles&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StatCycleConfigurationAdmin.StatCycleBulk, input]
 * }
 * ```
 */
export const useStatCycleConfigurationAdminApi_CreateStatCycleBulkMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BulkStatCycleResult, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkStatCycleRequest }>,
    'mutationKey'
  >,
  callback?: (data: BulkStatCycleResult) => void
): UseMutationResult<BulkStatCycleResult, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkStatCycleRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkStatCycleRequest }) => {
    const response = await StatCycleConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createStatCycleBulk(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StatCycleConfigurationAdmin.StatCycleBulk],
    mutationFn,
    ...options
  })
}

/**
 * Export all stat cycle configurations for a given namespace into file At current, only JSON file is supported.&lt;p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StatCycleConfigurationAdmin.StatCyclesExport, input]
 * }
 * ```
 */
export const useStatCycleConfigurationAdminApi_GetStatCyclesExport = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useStatCycleConfigurationAdminApi_GetStatCyclesExport>[1]) => async () => {
    const response = await StatCycleConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getStatCyclesExport()
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_StatCycleConfigurationAdmin.StatCyclesExport, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Import stat cycle configurations for a given namespace from file. At current, only JSON file is supported.&lt;p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StatCycleConfigurationAdmin.StatCycleImport, input]
 * }
 * ```
 */
export const useStatCycleConfigurationAdminApi_CreateStatCycleImportMutation = (
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
    const response = await StatCycleConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createStatCycleImport(input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StatCycleConfigurationAdmin.StatCycleImport],
    mutationFn,
    ...options
  })
}

/**
 * Deletes stat cycle.&lt;br&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StatCycleConfigurationAdmin.StatCycle_ByCycleId, input]
 * }
 * ```
 */
export const useStatCycleConfigurationAdminApi_DeleteStatCycle_ByCycleIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { cycleId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { cycleId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { cycleId: string }) => {
    const response = await StatCycleConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteStatCycle_ByCycleId(input.cycleId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StatCycleConfigurationAdmin.StatCycle_ByCycleId],
    mutationFn,
    ...options
  })
}

/**
 * Get stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycle info&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StatCycleConfigurationAdmin.StatCycle_ByCycleId, input]
 * }
 * ```
 */
export const useStatCycleConfigurationAdminApi_GetStatCycle_ByCycleId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { cycleId: string },
  options?: Omit<UseQueryOptions<StatCycleInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<StatCycleInfo>) => void
): UseQueryResult<StatCycleInfo, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useStatCycleConfigurationAdminApi_GetStatCycle_ByCycleId>[1]) => async () => {
      const response = await StatCycleConfigurationAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getStatCycle_ByCycleId(input.cycleId)
      callback && callback(response)
      return response.data
    }

  return useQuery<StatCycleInfo, AxiosError<ApiError>>({
    queryKey: [Key_StatCycleConfigurationAdmin.StatCycle_ByCycleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated stat cycle&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StatCycleConfigurationAdmin.StatCycle_ByCycleId, input]
 * }
 * ```
 */
export const useStatCycleConfigurationAdminApi_UpdateStatCycle_ByCycleIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<StatCycleInfo, AxiosError<ApiError>, SdkSetConfigParam & { cycleId: string; data: StatCycleUpdate }>,
    'mutationKey'
  >,
  callback?: (data: StatCycleInfo) => void
): UseMutationResult<StatCycleInfo, AxiosError<ApiError>, SdkSetConfigParam & { cycleId: string; data: StatCycleUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { cycleId: string; data: StatCycleUpdate }) => {
    const response = await StatCycleConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStatCycle_ByCycleId(input.cycleId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StatCycleConfigurationAdmin.StatCycle_ByCycleId],
    mutationFn,
    ...options
  })
}

/**
 * Stop stat cycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated stat cycle&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StatCycleConfigurationAdmin.Stop_ByCycleId, input]
 * }
 * ```
 */
export const useStatCycleConfigurationAdminApi_UpdateStop_ByCycleIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<StatCycleInfo, AxiosError<ApiError>, SdkSetConfigParam & { cycleId: string }>, 'mutationKey'>,
  callback?: (data: StatCycleInfo) => void
): UseMutationResult<StatCycleInfo, AxiosError<ApiError>, SdkSetConfigParam & { cycleId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { cycleId: string }) => {
    const response = await StatCycleConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStop_ByCycleId(input.cycleId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StatCycleConfigurationAdmin.Stop_ByCycleId],
    mutationFn,
    ...options
  })
}

/**
 * Bulk add stat cycle to stats.&lt;br&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StatCycleConfigurationAdmin.StatAddBulk_ByCycleId, input]
 * }
 * ```
 */
export const useStatCycleConfigurationAdminApi_CreateStatAddBulk_ByCycleIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      BulkStatCycleOperationResultArray,
      AxiosError<ApiError>,
      SdkSetConfigParam & { cycleId: string; data: BulkCycleStatsAdd }
    >,
    'mutationKey'
  >,
  callback?: (data: BulkStatCycleOperationResultArray) => void
): UseMutationResult<
  BulkStatCycleOperationResultArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { cycleId: string; data: BulkCycleStatsAdd }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { cycleId: string; data: BulkCycleStatsAdd }) => {
    const response = await StatCycleConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createStatAddBulk_ByCycleId(input.cycleId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StatCycleConfigurationAdmin.StatAddBulk_ByCycleId],
    mutationFn,
    ...options
  })
}
