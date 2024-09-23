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

import { PaginatedGetConfigsResponse } from '../../generated-definitions/PaginatedGetConfigsResponse.js'
import { UpdateConfigRequest } from '../../generated-definitions/UpdateConfigRequest.js'

export enum Key_ConfigAdmin {
  Configs_v2 = 'Ugc.ConfigAdmin.Configs_v2',
  Config_ByKey_v2 = 'Ugc.ConfigAdmin.Config_ByKey_v2'
}

/**
 * Get config paginated
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.Configs_v2, input]
 * }
 * ```
 */
export const useConfigAdminApi_GetConfigs_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedGetConfigsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedGetConfigsResponse>) => void
): UseQueryResult<PaginatedGetConfigsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigAdminApi_GetConfigs_v2>[1]) => async () => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfigs_v2(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedGetConfigsResponse, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.Configs_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint will create a new config if the *key* doesn&#39;t exist. Allowed key value: - *contentReview*: *enabled*,*disabled*
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.Config_ByKey_v2, input]
 * }
 * ```
 */
export const useConfigAdminApi_PatchConfig_ByKeyMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string; data: UpdateConfigRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string; data: UpdateConfigRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { key: string; data: UpdateConfigRequest }) => {
    const response = await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchConfig_ByKey_v2(
      input.key,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigAdmin.Config_ByKey_v2],
    mutationFn,
    ...options
  })
}
