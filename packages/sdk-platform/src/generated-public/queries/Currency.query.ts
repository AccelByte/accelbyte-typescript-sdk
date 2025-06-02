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
import { CurrencyApi } from '../CurrencyApi.js'

import { CurrencyInfoArray } from '../../generated-definitions/CurrencyInfoArray.js'

export enum Key_Currency {
  Currencies = 'Platform.Currency.Currencies'
}

/**
 * List currencies of a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Currency List&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Currency.Currencies, input]
 * }
 * ```
 */
export const useCurrencyApi_GetCurrencies = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { currencyType?: 'REAL' | 'VIRTUAL' } },
  options?: Omit<UseQueryOptions<CurrencyInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CurrencyInfoArray>) => void
): UseQueryResult<CurrencyInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useCurrencyApi_GetCurrencies>[1]) => async () => {
    const response = await CurrencyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getCurrencies(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<CurrencyInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_Currency.Currencies, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
