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
import { StatConfigurationAdminApi } from '../StatConfigurationAdminApi.js'

import { StatCreate } from '../../generated-definitions/StatCreate.js'
import { StatImportInfo } from '../../generated-definitions/StatImportInfo.js'
import { StatInfo } from '../../generated-definitions/StatInfo.js'
import { StatPagingSlicedResult } from '../../generated-definitions/StatPagingSlicedResult.js'
import { StatUpdate } from '../../generated-definitions/StatUpdate.js'

export enum Key_StatConfigurationAdmin {
  Stats = 'StatConfigurationAdmin.Stats',
  Stat = 'StatConfigurationAdmin.Stat',
  StatsExport = 'StatConfigurationAdmin.StatsExport',
  StatImport = 'StatConfigurationAdmin.StatImport',
  StatsSearch = 'StatConfigurationAdmin.StatsSearch',
  Stat_ByStatCode = 'StatConfigurationAdmin.Stat_ByStatCode',
  Tied_ByStatCode = 'StatConfigurationAdmin.Tied_ByStatCode'
}

export const useAdmStats = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: { cycleIds?: string | null; isGlobal?: boolean | null; isPublic?: boolean | null; limit?: number; offset?: number }
  },
  options?: Omit<UseQueryOptions<StatPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: StatPagingSlicedResult) => void
): UseQueryResult<StatPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStats>[1]) => async () => {
    const data = await StatConfigurationAdminApi(sdk, { namespace: input.namespace }).getStats(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<StatPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_StatConfigurationAdmin.Stats, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateStatMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<StatInfo, AxiosError<ApiError>, ApiArgs & { data: StatCreate }>, 'mutationKey'>,
  callback?: (data: StatInfo) => void
): UseMutationResult<StatInfo, AxiosError<ApiError>, ApiArgs & { data: StatCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: StatCreate }) => {
    const data = await StatConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).createStat(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_StatConfigurationAdmin.Stat],
    mutationFn,
    ...options
  })
}

export const useAdmStatsExport = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStatsExport>[1]) => async () => {
    const data = await StatConfigurationAdminApi(sdk, { namespace: input.namespace }).getStatsExport()
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_StatConfigurationAdmin.StatsExport, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateStatImportMutation = (
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
    const data = await StatConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).createStatImport(
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_StatConfigurationAdmin.StatImport],
    mutationFn,
    ...options
  })
}

export const useAdmStatsSearch = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams: { keyword: string | null; isGlobal?: boolean | null; isPublic?: boolean | null; limit?: number; offset?: number }
  },
  options?: Omit<UseQueryOptions<StatPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: StatPagingSlicedResult) => void
): UseQueryResult<StatPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStatsSearch>[1]) => async () => {
    const data = await StatConfigurationAdminApi(sdk, { namespace: input.namespace }).getStatsSearch(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<StatPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_StatConfigurationAdmin.StatsSearch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteStat_ByStatCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { statCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { statCode: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { statCode: string }) => {
    const data = await StatConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteStat_ByStatCode(
      input.statCode
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_StatConfigurationAdmin.Stat_ByStatCode],
    mutationFn,
    ...options
  })
}

export const useAdmStat_ByStatCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { statCode: string },
  options?: Omit<UseQueryOptions<StatInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: StatInfo) => void
): UseQueryResult<StatInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStat_ByStatCode>[1]) => async () => {
    const data = await StatConfigurationAdminApi(sdk, { namespace: input.namespace }).getStat_ByStatCode(input.statCode)
    callback && callback(data)
    return data
  }

  return useQuery<StatInfo, AxiosError<ApiError>>({
    queryKey: [Key_StatConfigurationAdmin.Stat_ByStatCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchStat_ByStatCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<StatInfo, AxiosError<ApiError>, ApiArgs & { statCode: string; data: StatUpdate }>, 'mutationKey'>,
  callback?: (data: StatInfo) => void
): UseMutationResult<StatInfo, AxiosError<ApiError>, ApiArgs & { statCode: string; data: StatUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { statCode: string; data: StatUpdate }) => {
    const data = await StatConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchStat_ByStatCode(
      input.statCode,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_StatConfigurationAdmin.Stat_ByStatCode],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteTied_ByStatCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { statCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { statCode: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { statCode: string }) => {
    const data = await StatConfigurationAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteTied_ByStatCode(
      input.statCode
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_StatConfigurationAdmin.Tied_ByStatCode],
    mutationFn,
    ...options
  })
}
