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
import { CommonConfigurationAdminApi } from '../CommonConfigurationAdminApi.js'

import { ConfigInfo } from '../../generated-definitions/ConfigInfo.js'
import { ConfigsWithPagination } from '../../generated-definitions/ConfigsWithPagination.js'
import { CreateConfig } from '../../generated-definitions/CreateConfig.js'
import { UpdateConfig } from '../../generated-definitions/UpdateConfig.js'

export enum Key_CommonConfigurationAdmin {
  Configs = 'Config.CommonConfigurationAdmin.Configs',
  Config = 'Config.CommonConfigurationAdmin.Config',
  Config_ByConfigKey = 'Config.CommonConfigurationAdmin.Config_ByConfigKey',
  PublisherConfig_ByConfigKey = 'Config.CommonConfigurationAdmin.PublisherConfig_ByConfigKey'
}

/**
 * Get all configs in the namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CommonConfigurationAdmin.Configs, input]
 * }
 * ```
 */
export const useCommonConfigurationAdminApi_GetConfigs = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: string | null; offset?: string | null } },
  options?: Omit<UseQueryOptions<ConfigsWithPagination, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ConfigsWithPagination>) => void
): UseQueryResult<ConfigsWithPagination, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useCommonConfigurationAdminApi_GetConfigs>[1]) => async () => {
    const response = await CommonConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfigs(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ConfigsWithPagination, AxiosError<ApiError>>({
    queryKey: [Key_CommonConfigurationAdmin.Configs, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create a config in the namespace with the given key
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CommonConfigurationAdmin.Config, input]
 * }
 * ```
 */
export const useCommonConfigurationAdminApi_CreateConfigMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<ConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateConfig }>, 'mutationKey'>,
  callback?: (data: ConfigInfo) => void
): UseMutationResult<ConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateConfig }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateConfig }) => {
    const response = await CommonConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createConfig(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_CommonConfigurationAdmin.Config],
    mutationFn,
    ...options
  })
}

/**
 * Get a config by namespace and key
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CommonConfigurationAdmin.Config_ByConfigKey, input]
 * }
 * ```
 */
export const useCommonConfigurationAdminApi_GetConfig_ByConfigKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { configKey: string },
  options?: Omit<UseQueryOptions<ConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ConfigInfo>) => void
): UseQueryResult<ConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useCommonConfigurationAdminApi_GetConfig_ByConfigKey>[1]) => async () => {
    const response = await CommonConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getConfig_ByConfigKey(input.configKey)
    callback && callback(response)
    return response.data
  }

  return useQuery<ConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_CommonConfigurationAdmin.Config_ByConfigKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Delete a config by namespace and key.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CommonConfigurationAdmin.Config_ByConfigKey, input]
 * }
 * ```
 */
export const useCommonConfigurationAdminApi_DeleteConfig_ByConfigKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { configKey: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { configKey: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { configKey: string }) => {
    const response = await CommonConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteConfig_ByConfigKey(input.configKey)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_CommonConfigurationAdmin.Config_ByConfigKey],
    mutationFn,
    ...options
  })
}

/**
 * Update a config by namespace and key
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CommonConfigurationAdmin.Config_ByConfigKey, input]
 * }
 * ```
 */
export const useCommonConfigurationAdminApi_PatchConfig_ByConfigKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { configKey: string; data: UpdateConfig }>,
    'mutationKey'
  >,
  callback?: (data: ConfigInfo) => void
): UseMutationResult<ConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { configKey: string; data: UpdateConfig }> => {
  const mutationFn = async (input: SdkSetConfigParam & { configKey: string; data: UpdateConfig }) => {
    const response = await CommonConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchConfig_ByConfigKey(input.configKey, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_CommonConfigurationAdmin.Config_ByConfigKey],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * It will return a publisher namespace config of the given namespace and key.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CommonConfigurationAdmin.PublisherConfig_ByConfigKey, input]
 * }
 * ```
 */
export const useCommonConfigurationAdminApi_GetPublisherConfig_ByConfigKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { configKey: string },
  options?: Omit<UseQueryOptions<ConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ConfigInfo>) => void
): UseQueryResult<ConfigInfo, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useCommonConfigurationAdminApi_GetPublisherConfig_ByConfigKey>[1]) => async () => {
      const response = await CommonConfigurationAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getPublisherConfig_ByConfigKey(input.configKey)
      callback && callback(response)
      return response.data
    }

  return useQuery<ConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_CommonConfigurationAdmin.PublisherConfig_ByConfigKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
