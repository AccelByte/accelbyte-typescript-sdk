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
import { ConfigApi } from '../ConfigApi.js'

import { NamespaceConfig } from '../../generated-definitions/NamespaceConfig.js'
import { NamespaceConfigList } from '../../generated-definitions/NamespaceConfigList.js'
import { PatchNamespaceConfigRequest } from '../../generated-definitions/PatchNamespaceConfigRequest.js'

export enum Key_Config {
  Config = 'Matchmaking.Config.Config',
  Config_ByNamespace = 'Matchmaking.Config.Config_ByNamespace'
}

/**
 * Get matchmaking config of all namespaces. Will only return namespace configs than have been updated.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Config.Config, input]
 * }
 * ```
 */
export const useConfigApi_GetConfig = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<NamespaceConfigList, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<NamespaceConfigList>) => void
): UseQueryResult<NamespaceConfigList, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigApi_GetConfig>[1]) => async () => {
    const response = await ConfigApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfig()
    callback && callback(response)
    return response.data
  }

  return useQuery<NamespaceConfigList, AxiosError<ApiError>>({
    queryKey: [Key_Config.Config, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get matchmaking config of a namespaces.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Config.Config_ByNamespace, input]
 * }
 * ```
 */
export const useConfigApi_GetConfig_ByNamespace = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<NamespaceConfig, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<NamespaceConfig>) => void
): UseQueryResult<NamespaceConfig, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigApi_GetConfig_ByNamespace>[1]) => async () => {
    const response = await ConfigApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfig_ByNamespace()
    callback && callback(response)
    return response.data
  }

  return useQuery<NamespaceConfig, AxiosError<ApiError>>({
    queryKey: [Key_Config.Config_ByNamespace, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Patch update matchmaking config of a namespaces. Partially update matchmaking config, will only update value that defined on the request.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Config.Config_ByNamespace, input]
 * }
 * ```
 */
export const useConfigApi_PatchConfig_ByNamespaceMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<NamespaceConfig, AxiosError<ApiError>, SdkSetConfigParam & { data: PatchNamespaceConfigRequest }>,
    'mutationKey'
  >,
  callback?: (data: NamespaceConfig) => void
): UseMutationResult<NamespaceConfig, AxiosError<ApiError>, SdkSetConfigParam & { data: PatchNamespaceConfigRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PatchNamespaceConfigRequest }) => {
    const response = await ConfigApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchConfig_ByNamespace(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Config.Config_ByNamespace],
    mutationFn,
    ...options
  })
}
