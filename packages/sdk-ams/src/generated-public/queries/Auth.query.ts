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
import { AuthApi } from '../AuthApi.js'

export enum Key_Auth {
  Auth = 'Ams.Auth.Auth'
}

/**
 * Check if fleet commander is authorized to talk to AMS with this IAM
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Auth.Auth, input]
 * }
 * ```
 */
export const useAuthApi_GetAuth = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAuthApi_GetAuth>[1]) => async () => {
    const response = await AuthApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getAuth()
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_Auth.Auth, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
