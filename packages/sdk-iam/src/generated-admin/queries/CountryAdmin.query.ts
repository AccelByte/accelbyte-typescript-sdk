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
import { CountryAdminApi } from '../CountryAdminApi.js'

import { CountryBlacklistRequest } from '../../generated-definitions/CountryBlacklistRequest.js'
import { CountryBlacklistResponse } from '../../generated-definitions/CountryBlacklistResponse.js'
import { CountryResponseArray } from '../../generated-definitions/CountryResponseArray.js'

export enum Key_CountryAdmin {
  Countries_v3 = 'Iam.CountryAdmin.Countries_v3',
  CountriesBlacklist_v3 = 'Iam.CountryAdmin.CountriesBlacklist_v3',
  CountryBlacklist_v3 = 'Iam.CountryAdmin.CountryBlacklist_v3'
}

/**
 * Admin get country list
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CountryAdmin.Countries_v3, input]
 * }
 * ```
 */
export const useCountryAdminApi_GetCountries_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { filterBlacklist?: boolean | null } },
  options?: Omit<UseQueryOptions<CountryResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CountryResponseArray>) => void
): UseQueryResult<CountryResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useCountryAdminApi_GetCountries_v3>[1]) => async () => {
    const response = await CountryAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getCountries_v3(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<CountryResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_CountryAdmin.Countries_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Admin get country blacklist
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CountryAdmin.CountriesBlacklist_v3, input]
 * }
 * ```
 */
export const useCountryAdminApi_GetCountriesBlacklist_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<CountryBlacklistResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CountryBlacklistResponse>) => void
): UseQueryResult<CountryBlacklistResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useCountryAdminApi_GetCountriesBlacklist_v3>[1]) => async () => {
    const response = await CountryAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getCountriesBlacklist_v3()
    callback && callback(response)
    return response.data
  }

  return useQuery<CountryBlacklistResponse, AxiosError<ApiError>>({
    queryKey: [Key_CountryAdmin.CountriesBlacklist_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Admin update country blacklist
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CountryAdmin.CountryBlacklist_v3, input]
 * }
 * ```
 */
export const useCountryAdminApi_UpdateCountryBlacklistMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CountryBlacklistRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CountryBlacklistRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CountryBlacklistRequest }) => {
    const response = await CountryAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateCountryBlacklist_v3(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_CountryAdmin.CountryBlacklist_v3],
    mutationFn,
    ...options
  })
}
