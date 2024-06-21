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

import { ConfigList } from '../../generated-definitions/ConfigList.js'
import { ConfigReq } from '../../generated-definitions/ConfigReq.js'
import { Configuration } from '../../generated-definitions/Configuration.js'
import { ImportConfigResponse } from '../../generated-definitions/ImportConfigResponse.js'

export enum Key_ConfigAdmin {
  Config = 'ConfigAdmin.Config',
  ConfigLog = 'ConfigAdmin.ConfigLog',
  Config_ByNamespace = 'ConfigAdmin.Config_ByNamespace',
  ConfigExport = 'ConfigAdmin.ConfigExport',
  ConfigImport = 'ConfigAdmin.ConfigImport'
}

export const useAdmConfig = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<ConfigList, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ConfigList) => void
): UseQueryResult<ConfigList, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfig>[1]) => async () => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace }).getConfig()
    callback && callback(data)
    return data
  }

  return useQuery<ConfigList, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.Config, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmConfigLog = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<Configuration, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: Configuration) => void
): UseQueryResult<Configuration, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfigLog>[1]) => async () => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace }).getConfigLog()
    callback && callback(data)
    return data
  }

  return useQuery<Configuration, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.ConfigLog, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchConfigLogMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<Configuration, AxiosError<ApiError>, ApiArgs & { data: Configuration }>, 'mutationKey'>,
  callback?: (data: Configuration) => void
): UseMutationResult<Configuration, AxiosError<ApiError>, ApiArgs & { data: Configuration }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: Configuration }) => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchConfigLog(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.ConfigLog],
    mutationFn,
    ...options
  })
}

export const useAdmConfig_ByNamespace = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<ConfigReq, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ConfigReq) => void
): UseQueryResult<ConfigReq, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfig_ByNamespace>[1]) => async () => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace }).getConfig_ByNamespace()
    callback && callback(data)
    return data
  }

  return useQuery<ConfigReq, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.Config_ByNamespace, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateConfig_ByNamespaceMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<ConfigReq, AxiosError<ApiError>, ApiArgs & { data: ConfigReq }>, 'mutationKey'>,
  callback?: (data: ConfigReq) => void
): UseMutationResult<ConfigReq, AxiosError<ApiError>, ApiArgs & { data: ConfigReq }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ConfigReq }) => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateConfig_ByNamespace(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.Config_ByNamespace],
    mutationFn,
    ...options
  })
}

export const useAdmConfigExport = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfigExport>[1]) => async () => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace }).getConfigExport()
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.ConfigExport, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateConfigImportMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<ImportConfigResponse, AxiosError<ApiError>, ApiArgs & { data: { file?: File } }>, 'mutationKey'>,
  callback?: (data: ImportConfigResponse) => void
): UseMutationResult<ImportConfigResponse, AxiosError<ApiError>, ApiArgs & { data: { file?: File } }> => {
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
