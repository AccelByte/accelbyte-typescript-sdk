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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { PublicApi } from '../PublicApi.js'

import { DefaultProvider } from '../../generated-definitions/DefaultProvider.js'

export enum Key_Public {
  Providers = 'Dsmcontroller.Public.Providers',
  ProviderDefault = 'Dsmcontroller.Public.ProviderDefault',
  ProviderRegion_ByRegion = 'Dsmcontroller.Public.ProviderRegion_ByRegion'
}

/**
 * This endpoints returns list of supported providers. Armada is the default provider.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Public.Providers, input]
 * }
 * ```
 */
export const usePublicApi_GetProviders = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicApi_GetProviders>[1]) => async () => {
    const response = await PublicApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getProviders()
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_Public.Providers, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoints returns the default provider.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Public.ProviderDefault, input]
 * }
 * ```
 */
export const usePublicApi_GetProviderDefault = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<DefaultProvider, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DefaultProvider>) => void
): UseQueryResult<DefaultProvider, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicApi_GetProviderDefault>[1]) => async () => {
    const response = await PublicApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getProviderDefault()
    callback && callback(response)
    return response.data
  }

  return useQuery<DefaultProvider, AxiosError<ApiError>>({
    queryKey: [Key_Public.ProviderDefault, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint returns the providers by region.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Public.ProviderRegion_ByRegion, input]
 * }
 * ```
 */
export const usePublicApi_GetProviderRegion_ByRegion = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { region: string },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicApi_GetProviderRegion_ByRegion>[1]) => async () => {
    const response = await PublicApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getProviderRegion_ByRegion(
      input.region
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_Public.ProviderRegion_ByRegion, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
