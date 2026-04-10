/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import type { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import type { UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import type { AxiosError, AxiosResponse } from 'axios'
import { CountryApi } from '../CountryApi.js'

import { CountryResponseArray } from '../../generated-definitions/CountryResponseArray.js'

export const Key_Country = {
  Countries_v3: 'Iam.Country.Countries_v3'
} as const

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
    callback?.(response)
    return response.data
  }

  return useQuery<CountryResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Country.Countries_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
