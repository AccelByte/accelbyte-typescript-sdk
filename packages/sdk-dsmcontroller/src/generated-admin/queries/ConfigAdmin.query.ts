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
import { ConfigAdminApi } from '../ConfigAdminApi.js'

import { CreateDsmConfigRequest } from '../../generated-definitions/CreateDsmConfigRequest.js'
import { CreatePortRequest } from '../../generated-definitions/CreatePortRequest.js'
import { DsmConfigRecord } from '../../generated-definitions/DsmConfigRecord.js'
import { ImportResponse } from '../../generated-definitions/ImportResponse.js'
import { ListConfigResponse } from '../../generated-definitions/ListConfigResponse.js'
import { UpdateDsmConfigRequest } from '../../generated-definitions/UpdateDsmConfigRequest.js'
import { UpdatePortRequest } from '../../generated-definitions/UpdatePortRequest.js'

export enum Key_ConfigAdmin {
  Configs = 'ConfigAdmin.Configs',
  Config = 'ConfigAdmin.Config',
  Configs_ByNS = 'ConfigAdmin.Configs_ByNS',
  Config_ByNS = 'ConfigAdmin.Config_ByNS',
  ConfigCache = 'ConfigAdmin.ConfigCache',
  ConfigsExport = 'ConfigAdmin.ConfigsExport',
  ConfigImport = 'ConfigAdmin.ConfigImport',
  ConfigPort_ByName = 'ConfigAdmin.ConfigPort_ByName'
}

export const useAdmConfigs = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<ListConfigResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListConfigResponse) => void
): UseQueryResult<ListConfigResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfigs>[1]) => async () => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace }).getConfigs()
    callback && callback(data)
    return data
  }

  return useQuery<ListConfigResponse, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.Configs, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteConfigMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteConfig()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.Config],
    mutationFn,
    ...options
  })
}

export const useAdmConfigs_ByNS = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<DsmConfigRecord, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: DsmConfigRecord) => void
): UseQueryResult<DsmConfigRecord, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfigs_ByNS>[1]) => async () => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace }).getConfigs_ByNS()
    callback && callback(data)
    return data
  }

  return useQuery<DsmConfigRecord, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.Configs_ByNS, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchConfigMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<DsmConfigRecord, AxiosError<ApiError>, ApiArgs & { data: UpdateDsmConfigRequest }>, 'mutationKey'>,
  callback?: (data: DsmConfigRecord) => void
): UseMutationResult<DsmConfigRecord, AxiosError<ApiError>, ApiArgs & { data: UpdateDsmConfigRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: UpdateDsmConfigRequest }) => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchConfig(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.Config],
    mutationFn,
    ...options
  })
}

export const useAdmCreateConfig_ByNSMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<DsmConfigRecord, AxiosError<ApiError>, ApiArgs & { data: CreateDsmConfigRequest }>, 'mutationKey'>,
  callback?: (data: DsmConfigRecord) => void
): UseMutationResult<DsmConfigRecord, AxiosError<ApiError>, ApiArgs & { data: CreateDsmConfigRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CreateDsmConfigRequest }) => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).createConfig_ByNS(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.Config_ByNS],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteConfigCacheMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteConfigCache()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.ConfigCache],
    mutationFn,
    ...options
  })
}

export const useAdmConfigsExport = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfigsExport>[1]) => async () => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace }).getConfigsExport()
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.ConfigsExport, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateConfigImportMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<ImportResponse, AxiosError<ApiError>, ApiArgs & { data: { file?: File } }>, 'mutationKey'>,
  callback?: (data: ImportResponse) => void
): UseMutationResult<ImportResponse, AxiosError<ApiError>, ApiArgs & { data: { file?: File } }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: { file?: File } }) => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).createConfigImport(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.ConfigImport],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteConfigPort_ByNameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<DsmConfigRecord, AxiosError<ApiError>, ApiArgs & { name: string }>, 'mutationKey'>,
  callback?: (data: DsmConfigRecord) => void
): UseMutationResult<DsmConfigRecord, AxiosError<ApiError>, ApiArgs & { name: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { name: string }) => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteConfigPort_ByName(input.name)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.ConfigPort_ByName],
    mutationFn,
    ...options
  })
}

export const useAdmPatchConfigPort_ByNameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<DsmConfigRecord, AxiosError<ApiError>, ApiArgs & { name: string; data: UpdatePortRequest }>,
    'mutationKey'
  >,
  callback?: (data: DsmConfigRecord) => void
): UseMutationResult<DsmConfigRecord, AxiosError<ApiError>, ApiArgs & { name: string; data: UpdatePortRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { name: string; data: UpdatePortRequest }) => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchConfigPort_ByName(
      input.name,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.ConfigPort_ByName],
    mutationFn,
    ...options
  })
}

export const useAdmCreateConfigPort_ByNameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<DsmConfigRecord, AxiosError<ApiError>, ApiArgs & { name: string; data: CreatePortRequest }>,
    'mutationKey'
  >,
  callback?: (data: DsmConfigRecord) => void
): UseMutationResult<DsmConfigRecord, AxiosError<ApiError>, ApiArgs & { name: string; data: CreatePortRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { name: string; data: CreatePortRequest }) => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).createConfigPort_ByName(
      input.name,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.ConfigPort_ByName],
    mutationFn,
    ...options
  })
}
