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
import { PluginConfigAdminApi } from '../PluginConfigAdminApi.js'

import { PluginRequest } from '../../generated-definitions/PluginRequest.js'
import { PluginResponse } from '../../generated-definitions/PluginResponse.js'

export enum Key_PluginConfigAdmin {
  Plugin = 'Cloudsave.PluginConfigAdmin.Plugin',
  Plugins = 'Cloudsave.PluginConfigAdmin.Plugins'
}

/**
 * ## Description This endpoints will delete grpc plugins configuration
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PluginConfigAdmin.Plugin, input]
 * }
 * ```
 */
export const usePluginConfigAdminApi_DeletePluginMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await PluginConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deletePlugin()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PluginConfigAdmin.Plugin],
    mutationFn,
    ...options
  })
}

/**
 * ## Description This endpoints will get grpc plugins configuration
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PluginConfigAdmin.Plugins, input]
 * }
 * ```
 */
export const usePluginConfigAdminApi_GetPlugins = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<PluginResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PluginResponse>) => void
): UseQueryResult<PluginResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePluginConfigAdminApi_GetPlugins>[1]) => async () => {
    const response = await PluginConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPlugins()
    callback && callback(response)
    return response.data
  }

  return useQuery<PluginResponse, AxiosError<ApiError>>({
    queryKey: [Key_PluginConfigAdmin.Plugins, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * ## Description This endpoints will update grpc plugins configuration
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PluginConfigAdmin.Plugin, input]
 * }
 * ```
 */
export const usePluginConfigAdminApi_PatchPluginMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<PluginResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: PluginRequest }>, 'mutationKey'>,
  callback?: (data: PluginResponse) => void
): UseMutationResult<PluginResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: PluginRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PluginRequest }) => {
    const response = await PluginConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchPlugin(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PluginConfigAdmin.Plugin],
    mutationFn,
    ...options
  })
}

/**
 * ## Description This endpoints will create new grpc plugins configuration per namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PluginConfigAdmin.Plugin, input]
 * }
 * ```
 */
export const usePluginConfigAdminApi_CreatePluginMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<PluginResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: PluginRequest }>, 'mutationKey'>,
  callback?: (data: PluginResponse) => void
): UseMutationResult<PluginResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: PluginRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PluginRequest }) => {
    const response = await PluginConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createPlugin(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PluginConfigAdmin.Plugin],
    mutationFn,
    ...options
  })
}
