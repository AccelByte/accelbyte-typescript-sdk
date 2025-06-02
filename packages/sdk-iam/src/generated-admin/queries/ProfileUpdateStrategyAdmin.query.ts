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
import { ProfileUpdateStrategyAdminApi } from '../ProfileUpdateStrategyAdminApi.js'

import { GetProfileUpdateStrategyConfigResponse } from '../../generated-definitions/GetProfileUpdateStrategyConfigResponse.js'
import { SimpleProfileUpdateStrategyConfigs } from '../../generated-definitions/SimpleProfileUpdateStrategyConfigs.js'
import { UpdateProfileUpdateStrategyConfigRequest } from '../../generated-definitions/UpdateProfileUpdateStrategyConfigRequest.js'

export enum Key_ProfileUpdateStrategyAdmin {
  ProfileUpdateStrategies_v3 = 'Iam.ProfileUpdateStrategyAdmin.ProfileUpdateStrategies_v3',
  ProfileUpdateStrategy_v3 = 'Iam.ProfileUpdateStrategyAdmin.ProfileUpdateStrategy_v3'
}

/**
 * This API is for admin to get profile update strategy by namespace and field. Note: If the config is not found, this API will return a config with unlimited.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ProfileUpdateStrategyAdmin.ProfileUpdateStrategies_v3, input]
 * }
 * ```
 */
export const useProfileUpdateStrategyAdminApi_GetProfileUpdateStrategies_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { field?: 'country' | 'display_name' | 'dob' | 'username' } },
  options?: Omit<UseQueryOptions<GetProfileUpdateStrategyConfigResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetProfileUpdateStrategyConfigResponse>) => void
): UseQueryResult<GetProfileUpdateStrategyConfigResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useProfileUpdateStrategyAdminApi_GetProfileUpdateStrategies_v3>[1]) => async () => {
      const response = await ProfileUpdateStrategyAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getProfileUpdateStrategies_v3(input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<GetProfileUpdateStrategyConfigResponse, AxiosError<ApiError>>({
    queryKey: [Key_ProfileUpdateStrategyAdmin.ProfileUpdateStrategies_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API includes upsert behavior. Note: 1. field &#39;config&#39;&#39; in request body will only work when type is limited
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ProfileUpdateStrategyAdmin.ProfileUpdateStrategy_v3, input]
 * }
 * ```
 */
export const useProfileUpdateStrategyAdminApi_UpdateProfileUpdateStrategyMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      SimpleProfileUpdateStrategyConfigs,
      AxiosError<ApiError>,
      SdkSetConfigParam & {
        data: UpdateProfileUpdateStrategyConfigRequest
        queryParams: { field: 'country' | 'display_name' | 'dob' | 'username' }
      }
    >,
    'mutationKey'
  >,
  callback?: (data: SimpleProfileUpdateStrategyConfigs) => void
): UseMutationResult<
  SimpleProfileUpdateStrategyConfigs,
  AxiosError<ApiError>,
  SdkSetConfigParam & {
    data: UpdateProfileUpdateStrategyConfigRequest
    queryParams: { field: 'country' | 'display_name' | 'dob' | 'username' }
  }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & {
      data: UpdateProfileUpdateStrategyConfigRequest
      queryParams: { field: 'country' | 'display_name' | 'dob' | 'username' }
    }
  ) => {
    const response = await ProfileUpdateStrategyAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateProfileUpdateStrategy_v3(input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ProfileUpdateStrategyAdmin.ProfileUpdateStrategy_v3],
    mutationFn,
    ...options
  })
}
