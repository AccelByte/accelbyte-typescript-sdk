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
import { AmsInfoAdminApi } from '../AmsInfoAdminApi.js'

import { AmsRegionsResponse } from '../../generated-definitions/AmsRegionsResponse.js'
import { InstanceTypesResponse } from '../../generated-definitions/InstanceTypesResponse.js'

export enum Key_AmsInfoAdmin {
  Regions = 'Ams.AmsInfoAdmin.Regions',
  SupportedInstances = 'Ams.AmsInfoAdmin.SupportedInstances'
}

/**
 * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AmsInfoAdmin.Regions, input]
 * }
 * ```
 */
export const useAmsInfoAdminApi_GetRegions = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<AmsRegionsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AmsRegionsResponse>) => void
): UseQueryResult<AmsRegionsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAmsInfoAdminApi_GetRegions>[1]) => async () => {
    const response = await AmsInfoAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRegions()
    callback && callback(response)
    return response.data
  }

  return useQuery<AmsRegionsResponse, AxiosError<ApiError>>({
    queryKey: [Key_AmsInfoAdmin.Regions, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AmsInfoAdmin.SupportedInstances, input]
 * }
 * ```
 */
export const useAmsInfoAdminApi_GetSupportedInstances = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<InstanceTypesResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<InstanceTypesResponse>) => void
): UseQueryResult<InstanceTypesResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAmsInfoAdminApi_GetSupportedInstances>[1]) => async () => {
    const response = await AmsInfoAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getSupportedInstances()
    callback && callback(response)
    return response.data
  }

  return useQuery<InstanceTypesResponse, AxiosError<ApiError>>({
    queryKey: [Key_AmsInfoAdmin.SupportedInstances, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
