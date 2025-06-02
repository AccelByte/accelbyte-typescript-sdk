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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { EnvironmentVariablesApi } from '../EnvironmentVariablesApi.js'

import { ListEnvironmentVariablesResponse } from '../../generated-definitions/ListEnvironmentVariablesResponse.js'

export enum Key_EnvironmentVariables {
  EnvironmentVariables = 'Matchmaking.EnvironmentVariables.EnvironmentVariables'
}

/**
 * List environment variables.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EnvironmentVariables.EnvironmentVariables, input]
 * }
 * ```
 */
export const useEnvironmentVariablesApi_GetEnvironmentVariables = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ListEnvironmentVariablesResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListEnvironmentVariablesResponse>) => void
): UseQueryResult<ListEnvironmentVariablesResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEnvironmentVariablesApi_GetEnvironmentVariables>[1]) => async () => {
    const response = await EnvironmentVariablesApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getEnvironmentVariables()
    callback && callback(response)
    return response.data
  }

  return useQuery<ListEnvironmentVariablesResponse, AxiosError<ApiError>>({
    queryKey: [Key_EnvironmentVariables.EnvironmentVariables, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
