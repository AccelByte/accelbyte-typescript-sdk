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
  StatCycles = 'StatCycleConfigurationAdmin.StatCycles',
  StatCycle = 'StatCycleConfigurationAdmin.StatCycle',
  StatCycleBulk = 'StatCycleConfigurationAdmin.StatCycleBulk',
  StatCyclesExport = 'StatCycleConfigurationAdmin.StatCyclesExport',
  StatCycleImport = 'StatCycleConfigurationAdmin.StatCycleImport',
  StatCycle_ByCycleId = 'StatCycleConfigurationAdmin.StatCycle_ByCycleId',
  Stop_ByCycleId = 'StatCycleConfigurationAdmin.Stop_ByCycleId',
  StatAddBulk_ByCycleId = 'StatCycleConfigurationAdmin.StatAddBulk_ByCycleId'
}

export const useAdmStatCycles = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
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
  callback?: (data: StatCyclePagingSlicedResult) => void
): UseQueryResult<StatCyclePagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStatCycles>[1]) => async () => {
    const data = await StatCycleConfigurationAdminApi(sdk, { namespace: input.namespace }).getStatCycles(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<StatCyclePagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_StatCycleConfigurationAdmin.StatCycles, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateStatCycleMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<StatCycleInfo, AxiosError<ApiError>, ApiArgs & { data: StatCycleCreate }>, 'mutationKey'>,
  callback?: (data: StatCycleInfo) => void
): UseMutationResult<StatCycleInfo, AxiosError<ApiError>, ApiArgs & { data: StatCycleCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: StatCycleCreate }) => {
    const data = await StatCycleConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).createStatCycle(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_StatCycleConfigurationAdmin.StatCycle],
    mutationFn,
    ...options
  })
}

export const useAdmCreateStatCycleBulkMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<BulkStatCycleResult, AxiosError<ApiError>, ApiArgs & { data: BulkStatCycleRequest }>, 'mutationKey'>,
  callback?: (data: BulkStatCycleResult) => void
): UseMutationResult<BulkStatCycleResult, AxiosError<ApiError>, ApiArgs & { data: BulkStatCycleRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: BulkStatCycleRequest }) => {
    const data = await StatCycleConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).createStatCycleBulk(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_StatCycleConfigurationAdmin.StatCycleBulk],
    mutationFn,
    ...options
  })
}

export const useAdmStatCyclesExport = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStatCyclesExport>[1]) => async () => {
    const data = await StatCycleConfigurationAdminApi(sdk, { namespace: input.namespace }).getStatCyclesExport()
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_StatCycleConfigurationAdmin.StatCyclesExport, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateStatCycleImportMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      StatImportInfo,
      AxiosError<ApiError>,
      ApiArgs & { data: { file?: File }; queryParams?: { replaceExisting?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: StatImportInfo) => void
): UseMutationResult<
  StatImportInfo,
  AxiosError<ApiError>,
  ApiArgs & { data: { file?: File }; queryParams?: { replaceExisting?: boolean | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { data: { file?: File }; queryParams?: { replaceExisting?: boolean | null } }) => {
    const data = await StatCycleConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).createStatCycleImport(
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_StatCycleConfigurationAdmin.StatCycleImport],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteStatCycle_ByCycleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { cycleId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { cycleId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { cycleId: string }) => {
    const data = await StatCycleConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteStatCycle_ByCycleId(
      input.cycleId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_StatCycleConfigurationAdmin.StatCycle_ByCycleId],
    mutationFn,
    ...options
  })
}

export const useAdmStatCycle_ByCycleId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { cycleId: string },
  options?: Omit<UseQueryOptions<StatCycleInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: StatCycleInfo) => void
): UseQueryResult<StatCycleInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStatCycle_ByCycleId>[1]) => async () => {
    const data = await StatCycleConfigurationAdminApi(sdk, { namespace: input.namespace }).getStatCycle_ByCycleId(input.cycleId)
    callback && callback(data)
    return data
  }

  return useQuery<StatCycleInfo, AxiosError<ApiError>>({
    queryKey: [Key_StatCycleConfigurationAdmin.StatCycle_ByCycleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateStatCycle_ByCycleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<StatCycleInfo, AxiosError<ApiError>, ApiArgs & { cycleId: string; data: StatCycleUpdate }>,
    'mutationKey'
  >,
  callback?: (data: StatCycleInfo) => void
): UseMutationResult<StatCycleInfo, AxiosError<ApiError>, ApiArgs & { cycleId: string; data: StatCycleUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { cycleId: string; data: StatCycleUpdate }) => {
    const data = await StatCycleConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateStatCycle_ByCycleId(
      input.cycleId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_StatCycleConfigurationAdmin.StatCycle_ByCycleId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateStop_ByCycleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<StatCycleInfo, AxiosError<ApiError>, ApiArgs & { cycleId: string }>, 'mutationKey'>,
  callback?: (data: StatCycleInfo) => void
): UseMutationResult<StatCycleInfo, AxiosError<ApiError>, ApiArgs & { cycleId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { cycleId: string }) => {
    const data = await StatCycleConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateStop_ByCycleId(
      input.cycleId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_StatCycleConfigurationAdmin.Stop_ByCycleId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateStatAddBulk_ByCycleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BulkStatCycleOperationResultArray, AxiosError<ApiError>, ApiArgs & { cycleId: string; data: BulkCycleStatsAdd }>,
    'mutationKey'
  >,
  callback?: (data: BulkStatCycleOperationResultArray) => void
): UseMutationResult<BulkStatCycleOperationResultArray, AxiosError<ApiError>, ApiArgs & { cycleId: string; data: BulkCycleStatsAdd }> => {
  //
  const mutationFn = async (input: ApiArgs & { cycleId: string; data: BulkCycleStatsAdd }) => {
    const data = await StatCycleConfigurationAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createStatAddBulk_ByCycleId(input.cycleId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_StatCycleConfigurationAdmin.StatAddBulk_ByCycleId],
    mutationFn,
    ...options
  })
}
