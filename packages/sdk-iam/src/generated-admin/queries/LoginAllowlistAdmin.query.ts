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
import { LoginAllowlistAdminApi } from '../LoginAllowlistAdminApi.js'

import { LoginAllowlistRequest } from '../../generated-definitions/LoginAllowlistRequest.js'
import { LoginAllowlistResponse } from '../../generated-definitions/LoginAllowlistResponse.js'

export enum Key_LoginAllowlistAdmin {
  LoginAllowlist_v3 = 'Iam.LoginAllowlistAdmin.LoginAllowlist_v3'
}

/**
 * This endpoint return login allowlist configuration from specific namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LoginAllowlistAdmin.LoginAllowlist_v3, input]
 * }
 * ```
 */
export const useLoginAllowlistAdminApi_GetLoginAllowlist_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<LoginAllowlistResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<LoginAllowlistResponse>) => void
): UseQueryResult<LoginAllowlistResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useLoginAllowlistAdminApi_GetLoginAllowlist_v3>[1]) => async () => {
    const response = await LoginAllowlistAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getLoginAllowlist_v3()
    callback && callback(response)
    return response.data
  }

  return useQuery<LoginAllowlistResponse, AxiosError<ApiError>>({
    queryKey: [Key_LoginAllowlistAdmin.LoginAllowlist_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint update login allowlist configuration from specific game namespace. roleIds: are list of role that allowed to login Note: only accept game namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LoginAllowlistAdmin.LoginAllowlist_v3, input]
 * }
 * ```
 */
export const useLoginAllowlistAdminApi_UpdateLoginAllowlistMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<LoginAllowlistResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: LoginAllowlistRequest }>,
    'mutationKey'
  >,
  callback?: (data: LoginAllowlistResponse) => void
): UseMutationResult<LoginAllowlistResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: LoginAllowlistRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: LoginAllowlistRequest }) => {
    const response = await LoginAllowlistAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateLoginAllowlist_v3(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LoginAllowlistAdmin.LoginAllowlist_v3],
    mutationFn,
    ...options
  })
}
