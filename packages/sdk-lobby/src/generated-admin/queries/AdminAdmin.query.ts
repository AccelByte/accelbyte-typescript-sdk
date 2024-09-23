/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
import { AdminAdminApi } from '../AdminAdminApi.js'

import { GlobalConfiguration } from '../../generated-definitions/GlobalConfiguration.js'
import { PutGlobalConfigurationRequest } from '../../generated-definitions/PutGlobalConfigurationRequest.js'

export enum Key_AdminAdmin {
  GlobalConfiguration = 'Lobby.AdminAdmin.GlobalConfiguration',
  GlobalConfigurations = 'Lobby.AdminAdmin.GlobalConfigurations'
}

/**
 * Delete of global configuration data.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AdminAdmin.GlobalConfiguration, input]
 * }
 * ```
 */
export const useAdminAdminApi_DeleteGlobalConfigurationMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await AdminAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteGlobalConfiguration()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AdminAdmin.GlobalConfiguration],
    mutationFn,
    ...options
  })
}

/**
 * Get dsmc global configuration.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AdminAdmin.GlobalConfigurations, input]
 * }
 * ```
 */
export const useAdminAdminApi_GetGlobalConfigurations = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<GlobalConfiguration, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GlobalConfiguration>) => void
): UseQueryResult<GlobalConfiguration, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAdminAdminApi_GetGlobalConfigurations>[1]) => async () => {
    const response = await AdminAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getGlobalConfigurations()
    callback && callback(response)
    return response.data
  }

  return useQuery<GlobalConfiguration, AxiosError<ApiError>>({
    queryKey: [Key_AdminAdmin.GlobalConfigurations, input],
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
 *    queryKey: [Key_AdminAdmin.GlobalConfiguration, input]
 * }
 * ```
 */
export const useAdminAdminApi_UpdateGlobalConfigurationMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<GlobalConfiguration, AxiosError<ApiError>, SdkSetConfigParam & { data: PutGlobalConfigurationRequest }>,
    'mutationKey'
  >,
  callback?: (data: GlobalConfiguration) => void
): UseMutationResult<GlobalConfiguration, AxiosError<ApiError>, SdkSetConfigParam & { data: PutGlobalConfigurationRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PutGlobalConfigurationRequest }) => {
    const response = await AdminAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateGlobalConfiguration(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AdminAdmin.GlobalConfiguration],
    mutationFn,
    ...options
  })
}
