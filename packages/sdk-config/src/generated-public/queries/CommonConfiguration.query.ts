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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { CommonConfigurationApi } from '../CommonConfigurationApi.js'

import { ConfigInfo } from '../../generated-definitions/ConfigInfo.js'
import { ConfigInfoArray } from '../../generated-definitions/ConfigInfoArray.js'

export enum Key_CommonConfiguration {
  Configs = 'Config.CommonConfiguration.Configs',
  Config_ByConfigKey = 'Config.CommonConfiguration.Config_ByConfigKey'
}

/**
 * Get all public configs in the namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CommonConfiguration.Configs, input]
 * }
 * ```
 */
export const useCommonConfigurationApi_GetConfigs = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ConfigInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ConfigInfoArray>) => void
): UseQueryResult<ConfigInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useCommonConfigurationApi_GetConfigs>[1]) => async () => {
    const response = await CommonConfigurationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfigs()
    callback && callback(response)
    return response.data
  }

  return useQuery<ConfigInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_CommonConfiguration.Configs, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get public config by namespace and key
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CommonConfiguration.Config_ByConfigKey, input]
 * }
 * ```
 */
export const useCommonConfigurationApi_GetConfig_ByConfigKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { configKey: string },
  options?: Omit<UseQueryOptions<ConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ConfigInfo>) => void
): UseQueryResult<ConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useCommonConfigurationApi_GetConfig_ByConfigKey>[1]) => async () => {
    const response = await CommonConfigurationApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getConfig_ByConfigKey(input.configKey)
    callback && callback(response)
    return response.data
  }

  return useQuery<ConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_CommonConfiguration.Config_ByConfigKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
