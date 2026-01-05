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
import { GlobalConfigurationAdminApi } from '../GlobalConfigurationAdminApi.js'

import { GlobalConfigurationResponse } from '../../generated-definitions/GlobalConfigurationResponse.js'
import { PutGlobalConfigurationRequest } from '../../generated-definitions/PutGlobalConfigurationRequest.js'

export enum Key_GlobalConfigurationAdmin {
  GlobalConfiguration = 'Session.GlobalConfigurationAdmin.GlobalConfiguration',
  GlobalConfigurations = 'Session.GlobalConfigurationAdmin.GlobalConfigurations'
}

/**
 * Delete of global configuration data.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GlobalConfigurationAdmin.GlobalConfiguration, input]
 * }
 * ```
 */
export const useGlobalConfigurationAdminApi_DeleteGlobalConfigurationMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await GlobalConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteGlobalConfiguration()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GlobalConfigurationAdmin.GlobalConfiguration],
    mutationFn,
    ...options
  })
}

/**
 * Record of global configuration data.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GlobalConfigurationAdmin.GlobalConfigurations, input]
 * }
 * ```
 */
export const useGlobalConfigurationAdminApi_GetGlobalConfigurations = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<GlobalConfigurationResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GlobalConfigurationResponse>) => void
): UseQueryResult<GlobalConfigurationResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGlobalConfigurationAdminApi_GetGlobalConfigurations>[1]) => async () => {
    const response = await GlobalConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getGlobalConfigurations()
    callback && callback(response)
    return response.data
  }

  return useQuery<GlobalConfigurationResponse, AxiosError<ApiError>>({
    queryKey: [Key_GlobalConfigurationAdmin.GlobalConfigurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Upsert global configuration data.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GlobalConfigurationAdmin.GlobalConfiguration, input]
 * }
 * ```
 */
export const useGlobalConfigurationAdminApi_UpdateGlobalConfigurationMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<GlobalConfigurationResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: PutGlobalConfigurationRequest }>,
    'mutationKey'
  >,
  callback?: (data: GlobalConfigurationResponse) => void
): UseMutationResult<GlobalConfigurationResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: PutGlobalConfigurationRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PutGlobalConfigurationRequest }) => {
    const response = await GlobalConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateGlobalConfiguration(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GlobalConfigurationAdmin.GlobalConfiguration],
    mutationFn,
    ...options
  })
}
