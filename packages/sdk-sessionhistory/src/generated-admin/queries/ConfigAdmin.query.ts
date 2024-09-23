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
import { ConfigAdminApi } from '../ConfigAdminApi.js'

import { Configuration } from '../../generated-definitions/Configuration.js'

export enum Key_ConfigAdmin {
  ConfigLog = 'Sessionhistory.ConfigAdmin.ConfigLog'
}

/**
 * Get Log Configuration.&lt;br&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.ConfigLog, input]
 * }
 * ```
 */
export const useConfigAdminApi_GetConfigLog = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<Configuration, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<Configuration>) => void
): UseQueryResult<Configuration, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigAdminApi_GetConfigLog>[1]) => async () => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfigLog()
    callback && callback(response)
    return response.data
  }

  return useQuery<Configuration, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.ConfigLog, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update Log Configuration.&lt;br&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.ConfigLog, input]
 * }
 * ```
 */
export const useConfigAdminApi_PatchConfigLogMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<Configuration, AxiosError<ApiError>, SdkSetConfigParam & { data: Configuration }>, 'mutationKey'>,
  callback?: (data: Configuration) => void
): UseMutationResult<Configuration, AxiosError<ApiError>, SdkSetConfigParam & { data: Configuration }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: Configuration }) => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchConfigLog(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.ConfigLog],
    mutationFn,
    ...options
  })
}
