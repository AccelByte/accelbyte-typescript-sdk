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

import { ConfigCreate } from '../../generated-definitions/ConfigCreate.js'
import { ConfigInfo } from '../../generated-definitions/ConfigInfo.js'
import { ConfigUpdate } from '../../generated-definitions/ConfigUpdate.js'

export enum Key_ConfigAdmin {
  Config = 'ConfigAdmin.Config',
  Config_ByConfigKey = 'ConfigAdmin.Config_ByConfigKey',
  PublisherConfig_ByConfigKey = 'ConfigAdmin.PublisherConfig_ByConfigKey'
}

export const useAdmCreateConfigMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<ConfigInfo, AxiosError<ApiError>, ApiArgs & { data: ConfigCreate }>, 'mutationKey'>,
  callback?: (data: ConfigInfo) => void
): UseMutationResult<ConfigInfo, AxiosError<ApiError>, ApiArgs & { data: ConfigCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ConfigCreate }) => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).createConfig(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.Config],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteConfig_ByConfigKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { configKey: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { configKey: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { configKey: string }) => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteConfig_ByConfigKey(input.configKey)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.Config_ByConfigKey],
    mutationFn,
    ...options
  })
}

export const useAdmConfig_ByConfigKey = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { configKey: string },
  options?: Omit<UseQueryOptions<ConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ConfigInfo) => void
): UseQueryResult<ConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfig_ByConfigKey>[1]) => async () => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace }).getConfig_ByConfigKey(input.configKey)
    callback && callback(data)
    return data
  }

  return useQuery<ConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.Config_ByConfigKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchConfig_ByConfigKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<ConfigInfo, AxiosError<ApiError>, ApiArgs & { configKey: string; data: ConfigUpdate }>, 'mutationKey'>,
  callback?: (data: ConfigInfo) => void
): UseMutationResult<ConfigInfo, AxiosError<ApiError>, ApiArgs & { configKey: string; data: ConfigUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { configKey: string; data: ConfigUpdate }) => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchConfig_ByConfigKey(
      input.configKey,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.Config_ByConfigKey],
    mutationFn,
    ...options
  })
}

export const useAdmPublisherConfig_ByConfigKey = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { configKey: string },
  options?: Omit<UseQueryOptions<ConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ConfigInfo) => void
): UseQueryResult<ConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPublisherConfig_ByConfigKey>[1]) => async () => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace }).getPublisherConfig_ByConfigKey(input.configKey)
    callback && callback(data)
    return data
  }

  return useQuery<ConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.PublisherConfig_ByConfigKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
