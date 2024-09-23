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
import { ThirdPartyAdminApi } from '../ThirdPartyAdminApi.js'

import { CreateConfigRequest } from '../../generated-definitions/CreateConfigRequest.js'
import { CreateConfigResponse } from '../../generated-definitions/CreateConfigResponse.js'
import { GetConfigResponse } from '../../generated-definitions/GetConfigResponse.js'
import { UpdateConfigRequest } from '../../generated-definitions/UpdateConfigRequest.js'
import { UpdateConfigResponse } from '../../generated-definitions/UpdateConfigResponse.js'

export enum Key_ThirdPartyAdmin {
  ThirdpartyConfigSteam = 'Lobby.ThirdPartyAdmin.ThirdpartyConfigSteam'
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:THIRDPARTY:CONFIG [DELETE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;delete third party config in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ThirdPartyAdmin.ThirdpartyConfigSteam, input]
 * }
 * ```
 */
export const useThirdPartyAdminApi_DeleteThirdpartyConfigSteamMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await ThirdPartyAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteThirdpartyConfigSteam()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ThirdPartyAdmin.ThirdpartyConfigSteam],
    mutationFn,
    ...options
  })
}

/**
 * Get third party config for specified namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ThirdPartyAdmin.ThirdpartyConfigSteam, input]
 * }
 * ```
 */
export const useThirdPartyAdminApi_GetThirdpartyConfigSteam = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<GetConfigResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetConfigResponse>) => void
): UseQueryResult<GetConfigResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useThirdPartyAdminApi_GetThirdpartyConfigSteam>[1]) => async () => {
    const response = await ThirdPartyAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getThirdpartyConfigSteam()
    callback && callback(response)
    return response.data
  }

  return useQuery<GetConfigResponse, AxiosError<ApiError>>({
    queryKey: [Key_ThirdPartyAdmin.ThirdpartyConfigSteam, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create third party config in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ThirdPartyAdmin.ThirdpartyConfigSteam, input]
 * }
 * ```
 */
export const useThirdPartyAdminApi_CreateThirdpartyConfigSteamMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<CreateConfigResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateConfigRequest }>,
    'mutationKey'
  >,
  callback?: (data: CreateConfigResponse) => void
): UseMutationResult<CreateConfigResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateConfigRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateConfigRequest }) => {
    const response = await ThirdPartyAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createThirdpartyConfigSteam(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ThirdPartyAdmin.ThirdpartyConfigSteam],
    mutationFn,
    ...options
  })
}

/**
 * Update third party config in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ThirdPartyAdmin.ThirdpartyConfigSteam, input]
 * }
 * ```
 */
export const useThirdPartyAdminApi_UpdateThirdpartyConfigSteamMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UpdateConfigResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UpdateConfigRequest }>,
    'mutationKey'
  >,
  callback?: (data: UpdateConfigResponse) => void
): UseMutationResult<UpdateConfigResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UpdateConfigRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UpdateConfigRequest }) => {
    const response = await ThirdPartyAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateThirdpartyConfigSteam(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ThirdPartyAdmin.ThirdpartyConfigSteam],
    mutationFn,
    ...options
  })
}
