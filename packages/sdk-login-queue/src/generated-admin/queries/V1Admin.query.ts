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
import { V1AdminApi } from '../V1AdminApi.js'

import { ConfigurationRequest } from '../../generated-definitions/ConfigurationRequest.js'
import { ConfigurationResponse } from '../../generated-definitions/ConfigurationResponse.js'
import { QueueStatusResponse } from '../../generated-definitions/QueueStatusResponse.js'

export enum Key_V1Admin {
  Config = 'Login-queue.V1Admin.Config',
  Status = 'Login-queue.V1Admin.Status'
}

/**
 * This API is used to get log queue configuration of a namespace. Calling this endpoint with namespace which has not set up configuration will return a valid configuration with default value
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_V1Admin.Config, input]
 * }
 * ```
 */
export const useV1AdminApi_GetConfig = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ConfigurationResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ConfigurationResponse>) => void
): UseQueryResult<ConfigurationResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useV1AdminApi_GetConfig>[1]) => async () => {
    const response = await V1AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfig()
    callback && callback(response)
    return response.data
  }

  return useQuery<ConfigurationResponse, AxiosError<ApiError>>({
    queryKey: [Key_V1Admin.Config, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to set/update log queue configuration of a namespace. This endpoint has upsert behavior. Calling the endpoint to a namespace with no configuration will make the service to create a new configuration. When creating new configuration, empty field will have default value: * enabled = false * maxConcurrency = 1000000 * maxLoginRate = 500 * safetyMarginPercentage = 5 * minActivationPeriodInSecond = 600 * playerReconnectGracePeriodInSecond = 300 * queueReconnectGracePeriodInSecond = 60 * playerPollingTimeInSecond = 20 Calling this endpoint with namespace that has configuration will replace the old configuration. Input validation: * maxConcurrency must be &gt; 0 and &lt;= 10000000 (0 &lt; x &lt;= 10000000) * maxLoginRate must be &gt; 0 and &lt;= 100000 (0 &lt; x &lt;= 100000) * minActivationPeriodInSecond, playerReconnectGracePeriodInSecond, playerPollingTimeInSecond and queueReconnectGracePeriodInSecond must be &gt; 0 and &lt;= 21600 (0 &lt; x &lt;= 21600) * playerPollingTimeInSecond must be smaller than queueReconnectGracePeriodInSecond * safetyMarginPercentage must be &gt;= 0 and &lt; 100 (0 &lt;= x &lt; 100)
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_V1Admin.Config, input]
 * }
 * ```
 */
export const useV1AdminApi_UpdateConfigMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ConfigurationResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ConfigurationRequest }>,
    'mutationKey'
  >,
  callback?: (data: ConfigurationResponse) => void
): UseMutationResult<ConfigurationResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ConfigurationRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ConfigurationRequest }) => {
    const response = await V1AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateConfig(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_V1Admin.Config],
    mutationFn,
    ...options
  })
}

/**
 * Get login queue status
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_V1Admin.Status, input]
 * }
 * ```
 */
export const useV1AdminApi_GetStatus = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<QueueStatusResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<QueueStatusResponse>) => void
): UseQueryResult<QueueStatusResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useV1AdminApi_GetStatus>[1]) => async () => {
    const response = await V1AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getStatus()
    callback && callback(response)
    return response.data
  }

  return useQuery<QueueStatusResponse, AxiosError<ApiError>>({
    queryKey: [Key_V1Admin.Status, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
