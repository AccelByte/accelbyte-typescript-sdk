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
import { CountryApi } from '../CountryApi.js'

import { CountryResponseArray } from '../../generated-definitions/CountryResponseArray.js'

export enum Key_Country {
  Countries_v3 = 'Iam.Country.Countries_v3'
}

/**
 * Public get country list, will filter out countries in black list
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Country.Countries_v3, input]
 * }
 * ```
 */
export const useCountryApi_GetCountries_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<CountryResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CountryResponseArray>) => void
): UseQueryResult<CountryResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useCountryApi_GetCountries_v3>[1]) => async () => {
    const response = await CountryApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getCountries_v3()
    callback && callback(response)
    return response.data
  }

  return useQuery<CountryResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Country.Countries_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
