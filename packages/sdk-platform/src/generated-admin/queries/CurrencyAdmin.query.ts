/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiError } from '@accelbyte/sdk'
import { AxiosError } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { CurrencyAdminApi } from '../CurrencyAdminApi.js'

import { CurrencyConfig } from '../../generated-definitions/CurrencyConfig.js'
import { CurrencyCreate } from '../../generated-definitions/CurrencyCreate.js'
import { CurrencyInfo } from '../../generated-definitions/CurrencyInfo.js'
import { CurrencyInfoArray } from '../../generated-definitions/CurrencyInfoArray.js'
import { CurrencySummary } from '../../generated-definitions/CurrencySummary.js'
import { CurrencyUpdate } from '../../generated-definitions/CurrencyUpdate.js'

export enum Key_CurrencyAdmin {
  Currencies = 'CurrencyAdmin.Currencies',
  Currency = 'CurrencyAdmin.Currency',
  Currency_ByCurrencyCode = 'CurrencyAdmin.Currency_ByCurrencyCode',
  Config_ByCurrencyCode = 'CurrencyAdmin.Config_ByCurrencyCode',
  Summary_ByCurrencyCode = 'CurrencyAdmin.Summary_ByCurrencyCode'
}

export const useAdmCurrencies = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { currencyType?: 'REAL' | 'VIRTUAL' } },
  options?: Omit<UseQueryOptions<CurrencyInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CurrencyInfoArray) => void
): UseQueryResult<CurrencyInfoArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCurrencies>[1]) => async () => {
    const data = await CurrencyAdminApi(sdk, { namespace: input.namespace }).getCurrencies(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<CurrencyInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_CurrencyAdmin.Currencies, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateCurrencyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<CurrencyInfo, AxiosError<ApiError>, ApiArgs & { data: CurrencyCreate }>, 'mutationKey'>,
  callback?: (data: CurrencyInfo) => void
): UseMutationResult<CurrencyInfo, AxiosError<ApiError>, ApiArgs & { data: CurrencyCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CurrencyCreate }) => {
    const data = await CurrencyAdminApi(sdk, { namespace: input.namespace, config: input.config }).createCurrency(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CurrencyAdmin.Currency],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteCurrency_ByCurrencyCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<CurrencyInfo, AxiosError<ApiError>, ApiArgs & { currencyCode: string }>, 'mutationKey'>,
  callback?: (data: CurrencyInfo) => void
): UseMutationResult<CurrencyInfo, AxiosError<ApiError>, ApiArgs & { currencyCode: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { currencyCode: string }) => {
    const data = await CurrencyAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteCurrency_ByCurrencyCode(
      input.currencyCode
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CurrencyAdmin.Currency_ByCurrencyCode],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateCurrency_ByCurrencyCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<CurrencyInfo, AxiosError<ApiError>, ApiArgs & { currencyCode: string; data: CurrencyUpdate }>,
    'mutationKey'
  >,
  callback?: (data: CurrencyInfo) => void
): UseMutationResult<CurrencyInfo, AxiosError<ApiError>, ApiArgs & { currencyCode: string; data: CurrencyUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { currencyCode: string; data: CurrencyUpdate }) => {
    const data = await CurrencyAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateCurrency_ByCurrencyCode(
      input.currencyCode,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CurrencyAdmin.Currency_ByCurrencyCode],
    mutationFn,
    ...options
  })
}

export const useAdmConfig_ByCurrencyCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { currencyCode: string },
  options?: Omit<UseQueryOptions<CurrencyConfig, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CurrencyConfig) => void
): UseQueryResult<CurrencyConfig, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfig_ByCurrencyCode>[1]) => async () => {
    const data = await CurrencyAdminApi(sdk, { namespace: input.namespace }).getConfig_ByCurrencyCode(input.currencyCode)
    callback && callback(data)
    return data
  }

  return useQuery<CurrencyConfig, AxiosError<ApiError>>({
    queryKey: [Key_CurrencyAdmin.Config_ByCurrencyCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmSummary_ByCurrencyCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { currencyCode: string },
  options?: Omit<UseQueryOptions<CurrencySummary, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CurrencySummary) => void
): UseQueryResult<CurrencySummary, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSummary_ByCurrencyCode>[1]) => async () => {
    const data = await CurrencyAdminApi(sdk, { namespace: input.namespace }).getSummary_ByCurrencyCode(input.currencyCode)
    callback && callback(data)
    return data
  }

  return useQuery<CurrencySummary, AxiosError<ApiError>>({
    queryKey: [Key_CurrencyAdmin.Summary_ByCurrencyCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
