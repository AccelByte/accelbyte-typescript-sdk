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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { EnvironmentVariableAdminApi } from '../EnvironmentVariableAdminApi.js'

import { EnvironmentVariableListResponse } from '../../generated-definitions/EnvironmentVariableListResponse.js'

export enum Key_EnvironmentVariableAdmin {
  EnvironmentVariables = 'Session.EnvironmentVariableAdmin.EnvironmentVariables'
}

/**
 * List of environment variables.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EnvironmentVariableAdmin.EnvironmentVariables, input]
 * }
 * ```
 */
export const useEnvironmentVariableAdminApi_GetEnvironmentVariables = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<EnvironmentVariableListResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<EnvironmentVariableListResponse>) => void
): UseQueryResult<EnvironmentVariableListResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEnvironmentVariableAdminApi_GetEnvironmentVariables>[1]) => async () => {
    const response = await EnvironmentVariableAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getEnvironmentVariables()
    callback && callback(response)
    return response.data
  }

  return useQuery<EnvironmentVariableListResponse, AxiosError<ApiError>>({
    queryKey: [Key_EnvironmentVariableAdmin.EnvironmentVariables, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
