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
import { SsoApi } from '../SsoApi.js'

export enum Key_Sso {
  Sso_ByPlatformId_v3 = 'Iam.Sso.Sso_ByPlatformId_v3',
  Logout_ByPlatformId_v3 = 'Iam.Sso.Logout_ByPlatformId_v3'
}

export const useSsoApi_GetSso_ByPlatformId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { platformId: string; queryParams?: { payload?: string | null } },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSsoApi_GetSso_ByPlatformId_v3>[1]) => async () => {
    const response = await SsoApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getSso_ByPlatformId_v3(
      input.platformId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_Sso.Sso_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Logout user&#39;s session on platform that logged in using SSO. Supported platforms: - discourse
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Sso.Logout_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useSsoApi_CreateLogout_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { platformId: string }) => {
    const response = await SsoApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createLogout_ByPlatformId_v3(
      input.platformId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Sso.Logout_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}
