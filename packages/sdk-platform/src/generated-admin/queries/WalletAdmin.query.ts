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
import { WalletAdminApi } from '../WalletAdminApi.js'

import { BulkCreditRequest } from '../../generated-definitions/BulkCreditRequest.js'
import { BulkCreditResult } from '../../generated-definitions/BulkCreditResult.js'
import { BulkDebitRequest } from '../../generated-definitions/BulkDebitRequest.js'
import { BulkDebitResult } from '../../generated-definitions/BulkDebitResult.js'
import { CreditRequest } from '../../generated-definitions/CreditRequest.js'
import { CurrencyWalletArray } from '../../generated-definitions/CurrencyWalletArray.js'
import { DebitByCurrencyCodeRequest } from '../../generated-definitions/DebitByCurrencyCodeRequest.js'
import { DebitByWalletPlatformRequest } from '../../generated-definitions/DebitByWalletPlatformRequest.js'
import { PaymentRequest } from '../../generated-definitions/PaymentRequest.js'
import { PlatformWallet } from '../../generated-definitions/PlatformWallet.js'
import { PlatformWalletConfigInfo } from '../../generated-definitions/PlatformWalletConfigInfo.js'
import { PlatformWalletConfigUpdate } from '../../generated-definitions/PlatformWalletConfigUpdate.js'
import { WalletInfo } from '../../generated-definitions/WalletInfo.js'
import { WalletTransactionPagingSlicedResult } from '../../generated-definitions/WalletTransactionPagingSlicedResult.js'

export enum Key_WalletAdmin {
  WalletDebit = 'WalletAdmin.WalletDebit',
  WalletCredit = 'WalletAdmin.WalletCredit',
  WalletConfig_ByPlatform = 'WalletAdmin.WalletConfig_ByPlatform',
  WalletConfigReset_ByPlatform = 'WalletAdmin.WalletConfigReset_ByPlatform',
  WalletsCurrenciesSummary_ByUserId = 'WalletAdmin.WalletsCurrenciesSummary_ByUserId',
  Credit_ByUserId_ByCurrencyCode = 'WalletAdmin.Credit_ByUserId_ByCurrencyCode',
  Payment_ByUserId_ByCurrencyCode = 'WalletAdmin.Payment_ByUserId_ByCurrencyCode',
  BalanceCheck_ByUserId_ByCurrencyCode = 'WalletAdmin.BalanceCheck_ByUserId_ByCurrencyCode',
  DebitWallet_ByUserId_ByCurrencyCode = 'WalletAdmin.DebitWallet_ByUserId_ByCurrencyCode',
  DebitByWalletPlatform_ByUserId_ByCurrencyCode = 'WalletAdmin.DebitByWalletPlatform_ByUserId_ByCurrencyCode',
  TransactionsWallets_ByUserId_ByCurrencyCode = 'WalletAdmin.TransactionsWallets_ByUserId_ByCurrencyCode'
}

export const useAdmCreateWalletDebitMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<BulkDebitResult, AxiosError<ApiError>, ApiArgs & { data: BulkDebitRequest[] }>, 'mutationKey'>,
  callback?: (data: BulkDebitResult) => void
): UseMutationResult<BulkDebitResult, AxiosError<ApiError>, ApiArgs & { data: BulkDebitRequest[] }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: BulkDebitRequest[] }) => {
    const data = await WalletAdminApi(sdk, { namespace: input.namespace, config: input.config }).createWalletDebit(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_WalletAdmin.WalletDebit],
    mutationFn,
    ...options
  })
}

export const useAdmCreateWalletCreditMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<BulkCreditResult, AxiosError<ApiError>, ApiArgs & { data: BulkCreditRequest[] }>, 'mutationKey'>,
  callback?: (data: BulkCreditResult) => void
): UseMutationResult<BulkCreditResult, AxiosError<ApiError>, ApiArgs & { data: BulkCreditRequest[] }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: BulkCreditRequest[] }) => {
    const data = await WalletAdminApi(sdk, { namespace: input.namespace, config: input.config }).createWalletCredit(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_WalletAdmin.WalletCredit],
    mutationFn,
    ...options
  })
}

export const useAdmWalletConfig_ByPlatform = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { platform: string },
  options?: Omit<UseQueryOptions<PlatformWalletConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PlatformWalletConfigInfo) => void
): UseQueryResult<PlatformWalletConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmWalletConfig_ByPlatform>[1]) => async () => {
    const data = await WalletAdminApi(sdk, { namespace: input.namespace }).getWalletConfig_ByPlatform(input.platform)
    callback && callback(data)
    return data
  }

  return useQuery<PlatformWalletConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_WalletAdmin.WalletConfig_ByPlatform, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateWalletConfig_ByPlatformMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<PlatformWalletConfigInfo, AxiosError<ApiError>, ApiArgs & { platform: string; data: PlatformWalletConfigUpdate }>,
    'mutationKey'
  >,
  callback?: (data: PlatformWalletConfigInfo) => void
): UseMutationResult<PlatformWalletConfigInfo, AxiosError<ApiError>, ApiArgs & { platform: string; data: PlatformWalletConfigUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { platform: string; data: PlatformWalletConfigUpdate }) => {
    const data = await WalletAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateWalletConfig_ByPlatform(
      input.platform,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_WalletAdmin.WalletConfig_ByPlatform],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateWalletConfigReset_ByPlatformMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<PlatformWalletConfigInfo, AxiosError<ApiError>, ApiArgs & { platform: string }>, 'mutationKey'>,
  callback?: (data: PlatformWalletConfigInfo) => void
): UseMutationResult<PlatformWalletConfigInfo, AxiosError<ApiError>, ApiArgs & { platform: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { platform: string }) => {
    const data = await WalletAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateWalletConfigReset_ByPlatform(
      input.platform
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_WalletAdmin.WalletConfigReset_ByPlatform],
    mutationFn,
    ...options
  })
}

export const useAdmWalletsCurrenciesSummary_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string },
  options?: Omit<UseQueryOptions<CurrencyWalletArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CurrencyWalletArray) => void
): UseQueryResult<CurrencyWalletArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmWalletsCurrenciesSummary_ByUserId>[1]) => async () => {
    const data = await WalletAdminApi(sdk, { namespace: input.namespace }).getWalletsCurrenciesSummary_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useQuery<CurrencyWalletArray, AxiosError<ApiError>>({
    queryKey: [Key_WalletAdmin.WalletsCurrenciesSummary_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateCredit_ByUserId_ByCurrencyCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<WalletInfo, AxiosError<ApiError>, ApiArgs & { userId: string; currencyCode: string; data: CreditRequest }>,
    'mutationKey'
  >,
  callback?: (data: WalletInfo) => void
): UseMutationResult<WalletInfo, AxiosError<ApiError>, ApiArgs & { userId: string; currencyCode: string; data: CreditRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; currencyCode: string; data: CreditRequest }) => {
    const data = await WalletAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateCredit_ByUserId_ByCurrencyCode(
      input.userId,
      input.currencyCode,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_WalletAdmin.Credit_ByUserId_ByCurrencyCode],
    mutationFn,
    ...options
  })
}

export const useAdmUpdatePayment_ByUserId_ByCurrencyCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<PlatformWallet, AxiosError<ApiError>, ApiArgs & { userId: string; currencyCode: string; data: PaymentRequest }>,
    'mutationKey'
  >,
  callback?: (data: PlatformWallet) => void
): UseMutationResult<PlatformWallet, AxiosError<ApiError>, ApiArgs & { userId: string; currencyCode: string; data: PaymentRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; currencyCode: string; data: PaymentRequest }) => {
    const data = await WalletAdminApi(sdk, { namespace: input.namespace, config: input.config }).updatePayment_ByUserId_ByCurrencyCode(
      input.userId,
      input.currencyCode,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_WalletAdmin.Payment_ByUserId_ByCurrencyCode],
    mutationFn,
    ...options
  })
}

export const useAdmCreateBalanceCheck_ByUserId_ByCurrencyCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; currencyCode: string; data: DebitByWalletPlatformRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; currencyCode: string; data: DebitByWalletPlatformRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; currencyCode: string; data: DebitByWalletPlatformRequest }) => {
    const data = await WalletAdminApi(sdk, { namespace: input.namespace, config: input.config }).createBalanceCheck_ByUserId_ByCurrencyCode(
      input.userId,
      input.currencyCode,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_WalletAdmin.BalanceCheck_ByUserId_ByCurrencyCode],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateDebitWallet_ByUserId_ByCurrencyCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      WalletInfo,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; currencyCode: string; data: DebitByCurrencyCodeRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: WalletInfo) => void
): UseMutationResult<
  WalletInfo,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; currencyCode: string; data: DebitByCurrencyCodeRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; currencyCode: string; data: DebitByCurrencyCodeRequest }) => {
    const data = await WalletAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateDebitWallet_ByUserId_ByCurrencyCode(
      input.userId,
      input.currencyCode,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_WalletAdmin.DebitWallet_ByUserId_ByCurrencyCode],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateDebitByWalletPlatform_ByUserId_ByCurrencyCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      PlatformWallet,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; currencyCode: string; data: DebitByWalletPlatformRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: PlatformWallet) => void
): UseMutationResult<
  PlatformWallet,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; currencyCode: string; data: DebitByWalletPlatformRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; currencyCode: string; data: DebitByWalletPlatformRequest }) => {
    const data = await WalletAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateDebitByWalletPlatform_ByUserId_ByCurrencyCode(input.userId, input.currencyCode, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_WalletAdmin.DebitByWalletPlatform_ByUserId_ByCurrencyCode],
    mutationFn,
    ...options
  })
}

export const useAdmTransactionsWallets_ByUserId_ByCurrencyCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; currencyCode: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<WalletTransactionPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: WalletTransactionPagingSlicedResult) => void
): UseQueryResult<WalletTransactionPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmTransactionsWallets_ByUserId_ByCurrencyCode>[1]) => async () => {
    const data = await WalletAdminApi(sdk, { namespace: input.namespace }).getTransactionsWallets_ByUserId_ByCurrencyCode(
      input.userId,
      input.currencyCode,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<WalletTransactionPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_WalletAdmin.TransactionsWallets_ByUserId_ByCurrencyCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
