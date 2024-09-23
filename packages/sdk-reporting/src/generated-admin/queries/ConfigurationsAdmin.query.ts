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
import { ConfigurationsAdminApi } from '../ConfigurationsAdminApi.js'

import { ConfigResponse } from '../../generated-definitions/ConfigResponse.js'
import { ReportingLimit } from '../../generated-definitions/ReportingLimit.js'

export enum Key_ConfigurationsAdmin {
  Configurations = 'Reporting.ConfigurationsAdmin.Configurations',
  Configuration = 'Reporting.ConfigurationsAdmin.Configuration'
}

/**
 * TimeInterval is in nanoseconds. When there&#39;s no configuration set, the response is the default value (configurable through envar).
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationsAdmin.Configurations, input]
 * }
 * ```
 */
export const useConfigurationsAdminApi_GetConfigurations = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { category?: 'all' | 'extension' } },
  options?: Omit<UseQueryOptions<ConfigResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ConfigResponse>) => void
): UseQueryResult<ConfigResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigurationsAdminApi_GetConfigurations>[1]) => async () => {
    const response = await ConfigurationsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfigurations(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ConfigResponse, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationsAdmin.Configurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * The behaviour of this endpoint is upsert based on the namespace. So, you can use this for both creating &amp; updating the configuration. TimeInterval is in nanoseconds.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationsAdmin.Configuration, input]
 * }
 * ```
 */
export const useConfigurationsAdminApi_CreateConfigurationMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<ConfigResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ReportingLimit }>, 'mutationKey'>,
  callback?: (data: ConfigResponse) => void
): UseMutationResult<ConfigResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ReportingLimit }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ReportingLimit }) => {
    const response = await ConfigurationsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createConfiguration(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationsAdmin.Configuration],
    mutationFn,
    ...options
  })
}
