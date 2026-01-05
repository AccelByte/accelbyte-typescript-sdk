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
import { StatCycleConfigurationApi } from '../StatCycleConfigurationApi.js'

import { BulkStatCycleRequest } from '../../generated-definitions/BulkStatCycleRequest.js'
import { BulkStatCycleResult } from '../../generated-definitions/BulkStatCycleResult.js'
import { StatCycleInfo } from '../../generated-definitions/StatCycleInfo.js'
import { StatCyclePagingSlicedResult } from '../../generated-definitions/StatCyclePagingSlicedResult.js'

export enum Key_StatCycleConfiguration {
  StatCycles = 'Social.StatCycleConfiguration.StatCycles',
  StatCycleBulk = 'Social.StatCycleConfiguration.StatCycleBulk',
  StatCycle_ByCycleId = 'Social.StatCycleConfiguration.StatCycle_ByCycleId'
}

/**
 * List stat cycles by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycles&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StatCycleConfiguration.StatCycles, input]
 * }
 * ```
 */
export const useStatCycleConfigurationApi_GetStatCycles = (
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
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useStatCycleConfigurationApi_GetStatCycles>[1]) => async () => {
    const response = await StatCycleConfigurationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getStatCycles(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<StatCyclePagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_StatCycleConfiguration.StatCycles, input],
    queryFn: queryFn(sdk, input),
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
 *    queryKey: [Key_StatCycleConfiguration.StatCycleBulk, input]
 * }
 * ```
 */
export const useStatCycleConfigurationApi_CreateStatCycleBulkMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BulkStatCycleResult, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkStatCycleRequest }>,
    'mutationKey'
  >,
  callback?: (data: BulkStatCycleResult) => void
): UseMutationResult<BulkStatCycleResult, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkStatCycleRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkStatCycleRequest }) => {
    const response = await StatCycleConfigurationApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createStatCycleBulk(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StatCycleConfiguration.StatCycleBulk],
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
 *    queryKey: [Key_StatCycleConfiguration.StatCycle_ByCycleId, input]
 * }
 * ```
 */
export const useStatCycleConfigurationApi_GetStatCycle_ByCycleId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { cycleId: string },
  options?: Omit<UseQueryOptions<StatCycleInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<StatCycleInfo>) => void
): UseQueryResult<StatCycleInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useStatCycleConfigurationApi_GetStatCycle_ByCycleId>[1]) => async () => {
    const response = await StatCycleConfigurationApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getStatCycle_ByCycleId(input.cycleId)
    callback && callback(response)
    return response.data
  }

  return useQuery<StatCycleInfo, AxiosError<ApiError>>({
    queryKey: [Key_StatCycleConfiguration.StatCycle_ByCycleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
