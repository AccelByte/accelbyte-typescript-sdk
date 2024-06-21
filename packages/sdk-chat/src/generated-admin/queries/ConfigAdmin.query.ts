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

import { ConfigExportArray } from '../../generated-definitions/ConfigExportArray.js'
import { ConfigList } from '../../generated-definitions/ConfigList.js'
import { ConfigResponse } from '../../generated-definitions/ConfigResponse.js'
import { ImportConfigResponse } from '../../generated-definitions/ImportConfigResponse.js'

export enum Key_ConfigAdmin {
  Config = 'ConfigAdmin.Config',
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

export const useAdmConfig_ByNamespace = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<ConfigResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ConfigResponse) => void
): UseQueryResult<ConfigResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfig_ByNamespace>[1]) => async () => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace }).getConfig_ByNamespace()
    callback && callback(data)
    return data
  }

  return useQuery<ConfigResponse, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.Config_ByNamespace, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateConfig_ByNamespaceMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<ConfigResponse, AxiosError<ApiError>, ApiArgs & { data: ConfigResponse }>, 'mutationKey'>,
  callback?: (data: ConfigResponse) => void
): UseMutationResult<ConfigResponse, AxiosError<ApiError>, ApiArgs & { data: ConfigResponse }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ConfigResponse }) => {
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
  options?: Omit<UseQueryOptions<ConfigExportArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ConfigExportArray) => void
): UseQueryResult<ConfigExportArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfigExport>[1]) => async () => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace }).getConfigExport()
    callback && callback(data)
    return data
  }

  return useQuery<ConfigExportArray, AxiosError<ApiError>>({
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
