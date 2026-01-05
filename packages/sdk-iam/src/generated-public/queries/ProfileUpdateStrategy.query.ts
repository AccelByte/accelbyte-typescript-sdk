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
import { ProfileUpdateStrategyApi } from '../ProfileUpdateStrategyApi.js'

import { GetProfileUpdateStrategyConfigResponse } from '../../generated-definitions/GetProfileUpdateStrategyConfigResponse.js'

export enum Key_ProfileUpdateStrategy {
  ProfileUpdateStrategies_v3 = 'Iam.ProfileUpdateStrategy.ProfileUpdateStrategies_v3'
}

/**
 * This API is for public user to get profile update strategy by namespace and field. Note: If the config is not found, this API will return a config with unlimited.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ProfileUpdateStrategy.ProfileUpdateStrategies_v3, input]
 * }
 * ```
 */
export const useProfileUpdateStrategyApi_GetProfileUpdateStrategies_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { field?: 'country' | 'display_name' | 'dob' | 'username' } },
  options?: Omit<UseQueryOptions<GetProfileUpdateStrategyConfigResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetProfileUpdateStrategyConfigResponse>) => void
): UseQueryResult<GetProfileUpdateStrategyConfigResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useProfileUpdateStrategyApi_GetProfileUpdateStrategies_v3>[1]) => async () => {
      const response = await ProfileUpdateStrategyApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getProfileUpdateStrategies_v3(input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<GetProfileUpdateStrategyConfigResponse, AxiosError<ApiError>>({
    queryKey: [Key_ProfileUpdateStrategy.ProfileUpdateStrategies_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
