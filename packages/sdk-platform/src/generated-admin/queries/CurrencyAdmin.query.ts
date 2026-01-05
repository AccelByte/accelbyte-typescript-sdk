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
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { CurrencyAdminApi } from '../CurrencyAdminApi.js'

import { CurrencyConfig } from '../../generated-definitions/CurrencyConfig.js'
import { CurrencyCreate } from '../../generated-definitions/CurrencyCreate.js'
import { CurrencyInfo } from '../../generated-definitions/CurrencyInfo.js'
import { CurrencyInfoArray } from '../../generated-definitions/CurrencyInfoArray.js'
import { CurrencySummary } from '../../generated-definitions/CurrencySummary.js'
import { CurrencyUpdate } from '../../generated-definitions/CurrencyUpdate.js'

export enum Key_CurrencyAdmin {
  Currencies = 'Platform.CurrencyAdmin.Currencies',
  Currency = 'Platform.CurrencyAdmin.Currency',
  Currency_ByCurrencyCode = 'Platform.CurrencyAdmin.Currency_ByCurrencyCode',
  Config_ByCurrencyCode = 'Platform.CurrencyAdmin.Config_ByCurrencyCode',
  Summary_ByCurrencyCode = 'Platform.CurrencyAdmin.Summary_ByCurrencyCode'
}

/**
 * List currencies of a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Currency List&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CurrencyAdmin.Currencies, input]
 * }
 * ```
 */
export const useCurrencyAdminApi_GetCurrencies = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { currencyType?: 'REAL' | 'VIRTUAL' } },
  options?: Omit<UseQueryOptions<CurrencyInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CurrencyInfoArray>) => void
): UseQueryResult<CurrencyInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useCurrencyAdminApi_GetCurrencies>[1]) => async () => {
    const response = await CurrencyAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getCurrencies(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<CurrencyInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_CurrencyAdmin.Currencies, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create a currency.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created currency&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CurrencyAdmin.Currency, input]
 * }
 * ```
 */
export const useCurrencyAdminApi_CreateCurrencyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<CurrencyInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: CurrencyCreate }>, 'mutationKey'>,
  callback?: (data: CurrencyInfo) => void
): UseMutationResult<CurrencyInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: CurrencyCreate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CurrencyCreate }) => {
    const response = await CurrencyAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createCurrency(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_CurrencyAdmin.Currency],
    mutationFn,
    ...options
  })
}

/**
 * Delete a currency by currency code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CurrencyAdmin.Currency_ByCurrencyCode, input]
 * }
 * ```
 */
export const useCurrencyAdminApi_DeleteCurrency_ByCurrencyCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<CurrencyInfo, AxiosError<ApiError>, SdkSetConfigParam & { currencyCode: string }>, 'mutationKey'>,
  callback?: (data: CurrencyInfo) => void
): UseMutationResult<CurrencyInfo, AxiosError<ApiError>, SdkSetConfigParam & { currencyCode: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { currencyCode: string }) => {
    const response = await CurrencyAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteCurrency_ByCurrencyCode(input.currencyCode)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_CurrencyAdmin.Currency_ByCurrencyCode],
    mutationFn,
    ...options
  })
}

/**
 * Update a currency by currency code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated currency&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CurrencyAdmin.Currency_ByCurrencyCode, input]
 * }
 * ```
 */
export const useCurrencyAdminApi_UpdateCurrency_ByCurrencyCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<CurrencyInfo, AxiosError<ApiError>, SdkSetConfigParam & { currencyCode: string; data: CurrencyUpdate }>,
    'mutationKey'
  >,
  callback?: (data: CurrencyInfo) => void
): UseMutationResult<CurrencyInfo, AxiosError<ApiError>, SdkSetConfigParam & { currencyCode: string; data: CurrencyUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { currencyCode: string; data: CurrencyUpdate }) => {
    const response = await CurrencyAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateCurrency_ByCurrencyCode(input.currencyCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_CurrencyAdmin.Currency_ByCurrencyCode],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Get currency config by code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: simplified Currency&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CurrencyAdmin.Config_ByCurrencyCode, input]
 * }
 * ```
 */
export const useCurrencyAdminApi_GetConfig_ByCurrencyCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { currencyCode: string },
  options?: Omit<UseQueryOptions<CurrencyConfig, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CurrencyConfig>) => void
): UseQueryResult<CurrencyConfig, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useCurrencyAdminApi_GetConfig_ByCurrencyCode>[1]) => async () => {
    const response = await CurrencyAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getConfig_ByCurrencyCode(
      input.currencyCode
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<CurrencyConfig, AxiosError<ApiError>>({
    queryKey: [Key_CurrencyAdmin.Config_ByCurrencyCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get currency summary by code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: simplified Currency&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CurrencyAdmin.Summary_ByCurrencyCode, input]
 * }
 * ```
 */
export const useCurrencyAdminApi_GetSummary_ByCurrencyCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { currencyCode: string },
  options?: Omit<UseQueryOptions<CurrencySummary, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CurrencySummary>) => void
): UseQueryResult<CurrencySummary, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useCurrencyAdminApi_GetSummary_ByCurrencyCode>[1]) => async () => {
    const response = await CurrencyAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getSummary_ByCurrencyCode(input.currencyCode)
    callback && callback(response)
    return response.data
  }

  return useQuery<CurrencySummary, AxiosError<ApiError>>({
    queryKey: [Key_CurrencyAdmin.Summary_ByCurrencyCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
