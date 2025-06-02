/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { ConfigAdminApi } from '../ConfigAdminApi.js'

import { ConfigCreate } from '../../generated-definitions/ConfigCreate.js'
import { ConfigInfo } from '../../generated-definitions/ConfigInfo.js'
import { ConfigUpdate } from '../../generated-definitions/ConfigUpdate.js'

export enum Key_ConfigAdmin {
  Config = 'Basic.ConfigAdmin.Config',
  Config_ByConfigKey = 'Basic.ConfigAdmin.Config_ByConfigKey',
  PublisherConfig_ByConfigKey = 'Basic.ConfigAdmin.PublisherConfig_ByConfigKey'
}

/**
 * Create a config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.Config, input]
 * }
 * ```
 */
export const useConfigAdminApi_CreateConfigMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<ConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: ConfigCreate }>, 'mutationKey'>,
  callback?: (data: ConfigInfo) => void
): UseMutationResult<ConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: ConfigCreate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ConfigCreate }) => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createConfig(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.Config],
    mutationFn,
    ...options
  })
}

/**
 * Delete a config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.Config_ByConfigKey, input]
 * }
 * ```
 */
export const useConfigAdminApi_DeleteConfig_ByConfigKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { configKey: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { configKey: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { configKey: string }) => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteConfig_ByConfigKey(
      input.configKey
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.Config_ByConfigKey],
    mutationFn,
    ...options
  })
}

/**
 * Get a config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.Config_ByConfigKey, input]
 * }
 * ```
 */
export const useConfigAdminApi_GetConfig_ByConfigKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { configKey: string },
  options?: Omit<UseQueryOptions<ConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ConfigInfo>) => void
): UseQueryResult<ConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigAdminApi_GetConfig_ByConfigKey>[1]) => async () => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfig_ByConfigKey(
      input.configKey
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.Config_ByConfigKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update a config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.Config_ByConfigKey, input]
 * }
 * ```
 */
export const useConfigAdminApi_PatchConfig_ByConfigKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { configKey: string; data: ConfigUpdate }>,
    'mutationKey'
  >,
  callback?: (data: ConfigInfo) => void
): UseMutationResult<ConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { configKey: string; data: ConfigUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { configKey: string; data: ConfigUpdate }) => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchConfig_ByConfigKey(
      input.configKey,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.Config_ByConfigKey],
    mutationFn,
    ...options
  })
}

/**
 * Get a publisher config.&lt;br&gt;It will return a publisher namespace config of the given namespace and key.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.PublisherConfig_ByConfigKey, input]
 * }
 * ```
 */
export const useConfigAdminApi_GetPublisherConfig_ByConfigKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { configKey: string },
  options?: Omit<UseQueryOptions<ConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ConfigInfo>) => void
): UseQueryResult<ConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigAdminApi_GetPublisherConfig_ByConfigKey>[1]) => async () => {
    const response = await ConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getPublisherConfig_ByConfigKey(input.configKey)
    callback && callback(response)
    return response.data
  }

  return useQuery<ConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.PublisherConfig_ByConfigKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
