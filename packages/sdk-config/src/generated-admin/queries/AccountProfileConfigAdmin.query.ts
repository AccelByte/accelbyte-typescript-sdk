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
import { AccountProfileConfigAdminApi } from '../AccountProfileConfigAdminApi.js'

import { ConfigInfo } from '../../generated-definitions/ConfigInfo.js'
import { CreateConfig } from '../../generated-definitions/CreateConfig.js'
import { UpdateConfig } from '../../generated-definitions/UpdateConfig.js'

export enum Key_AccountProfileConfigAdmin {
  ConfigAccount = 'Config.AccountProfileConfigAdmin.ConfigAccount',
  ConfigAccount_ByConfigKey = 'Config.AccountProfileConfigAdmin.ConfigAccount_ByConfigKey'
}

/**
 * Created account profile related config values. **Supported Config Key:** * uniqueDisplayNameEnabled * usernameDisabled * displayNameSyncMode * avatarSyncMode
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AccountProfileConfigAdmin.ConfigAccount, input]
 * }
 * ```
 */
export const useAccountProfileConfigAdminApi_CreateConfigAccountMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<ConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateConfig }>, 'mutationKey'>,
  callback?: (data: ConfigInfo) => void
): UseMutationResult<ConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateConfig }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateConfig }) => {
    const response = await AccountProfileConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createConfigAccount(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AccountProfileConfigAdmin.ConfigAccount],
    mutationFn,
    ...options
  })
}

/**
 * Get account profile related config values. **Supported Config Key:** * uniqueDisplayNameEnabled * usernameDisabled * displayNameSyncMode * avatarSyncMode
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AccountProfileConfigAdmin.ConfigAccount_ByConfigKey, input]
 * }
 * ```
 */
export const useAccountProfileConfigAdminApi_GetConfigAccount_ByConfigKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { configKey: string },
  options?: Omit<UseQueryOptions<ConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ConfigInfo>) => void
): UseQueryResult<ConfigInfo, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useAccountProfileConfigAdminApi_GetConfigAccount_ByConfigKey>[1]) => async () => {
      const response = await AccountProfileConfigAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getConfigAccount_ByConfigKey(input.configKey)
      callback && callback(response)
      return response.data
    }

  return useQuery<ConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_AccountProfileConfigAdmin.ConfigAccount_ByConfigKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update account profile related config values. **Supported Config Key:** * uniqueDisplayNameEnabled * usernameDisabled * displayNameSyncMode * avatarSyncMode
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AccountProfileConfigAdmin.ConfigAccount_ByConfigKey, input]
 * }
 * ```
 */
export const useAccountProfileConfigAdminApi_UpdateConfigAccount_ByConfigKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { configKey: string; data: UpdateConfig }>,
    'mutationKey'
  >,
  callback?: (data: ConfigInfo) => void
): UseMutationResult<ConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { configKey: string; data: UpdateConfig }> => {
  const mutationFn = async (input: SdkSetConfigParam & { configKey: string; data: UpdateConfig }) => {
    const response = await AccountProfileConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateConfigAccount_ByConfigKey(input.configKey, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AccountProfileConfigAdmin.ConfigAccount_ByConfigKey],
    mutationFn,
    ...options
  })
}
