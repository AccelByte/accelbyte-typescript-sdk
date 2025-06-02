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
import { UserInfoAdminApi } from '../UserInfoAdminApi.js'

import { RetrieveUserInfoCacheStatusResponseArray } from '../../generated-definitions/RetrieveUserInfoCacheStatusResponseArray.js'

export enum Key_UserInfoAdmin {
  UserInfo = 'Legal.UserInfoAdmin.UserInfo'
}

/**
 * @deprecated
 * Invalidate user info cache in agreement service.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserInfoAdmin.UserInfo, input]
 * }
 * ```
 */
export const useUserInfoAdminApi_DeleteUserInfoMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { queryParams?: { namespace?: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { queryParams?: { namespace?: string | null } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { queryParams?: { namespace?: string | null } }) => {
    const response = await UserInfoAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteUserInfo(
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserInfoAdmin.UserInfo],
    mutationFn,
    ...options
  })
}

/**
 * Get user info cache last updated time per namespace.&lt;br&gt;The query parameter namespaces can be a list of namespace separated by comma.&lt;br&gt;If query parameter namespaces is empty, user info cache status for all available namespaces will be returned.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserInfoAdmin.UserInfo, input]
 * }
 * ```
 */
export const useUserInfoAdminApi_GetUserInfo = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { namespaces?: string | null } },
  options?: Omit<UseQueryOptions<RetrieveUserInfoCacheStatusResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrieveUserInfoCacheStatusResponseArray>) => void
): UseQueryResult<RetrieveUserInfoCacheStatusResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUserInfoAdminApi_GetUserInfo>[1]) => async () => {
    const response = await UserInfoAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUserInfo(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RetrieveUserInfoCacheStatusResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_UserInfoAdmin.UserInfo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * Sync user info cache in agreement service with iam service.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserInfoAdmin.UserInfo, input]
 * }
 * ```
 */
export const useUserInfoAdminApi_UpdateUserInfoMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { queryParams: { namespace: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { queryParams: { namespace: string | null } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { queryParams: { namespace: string | null } }) => {
    const response = await UserInfoAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateUserInfo(
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserInfoAdmin.UserInfo],
    mutationFn,
    ...options
  })
}
