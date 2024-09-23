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
import { WalletApi } from '../WalletApi.js'

import { PlatformWallet } from '../../generated-definitions/PlatformWallet.js'
import { WalletTransactionPagingSlicedResult } from '../../generated-definitions/WalletTransactionPagingSlicedResult.js'

export enum Key_Wallet {
  UserMeWallet_ByCurrencyCode = 'Platform.Wallet.UserMeWallet_ByCurrencyCode',
  Wallet_ByUserId_ByCurrencyCode = 'Platform.Wallet.Wallet_ByUserId_ByCurrencyCode',
  Transactions_ByUserId_ByCurrencyCode = 'Platform.Wallet.Transactions_ByUserId_ByCurrencyCode'
}

/**
 * get my wallet by currency code and namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet info&lt;/li&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt; &lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to get &lt;b&gt;publisher user wallet&lt;/b&gt;&lt;/li&gt; &lt;li&gt;can be filled with &lt;b&gt;game namespace&lt;/b&gt; in order to get &lt;b&gt;game user wallet&lt;/b&gt;&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Wallet.UserMeWallet_ByCurrencyCode, input]
 * }
 * ```
 */
export const useWalletApi_GetUserMeWallet_ByCurrencyCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { currencyCode: string },
  options?: Omit<UseQueryOptions<PlatformWallet, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PlatformWallet>) => void
): UseQueryResult<PlatformWallet, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useWalletApi_GetUserMeWallet_ByCurrencyCode>[1]) => async () => {
    const response = await WalletApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUserMeWallet_ByCurrencyCode(
      input.currencyCode
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PlatformWallet, AxiosError<ApiError>>({
    queryKey: [Key_Wallet.UserMeWallet_ByCurrencyCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * get a wallet by currency code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Wallet.Wallet_ByUserId_ByCurrencyCode, input]
 * }
 * ```
 */
export const useWalletApi_GetWallet_ByUserId_ByCurrencyCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; currencyCode: string },
  options?: Omit<UseQueryOptions<PlatformWallet, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PlatformWallet>) => void
): UseQueryResult<PlatformWallet, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useWalletApi_GetWallet_ByUserId_ByCurrencyCode>[1]) => async () => {
    const response = await WalletApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getWallet_ByUserId_ByCurrencyCode(input.userId, input.currencyCode)
    callback && callback(response)
    return response.data
  }

  return useQuery<PlatformWallet, AxiosError<ApiError>>({
    queryKey: [Key_Wallet.Wallet_ByUserId_ByCurrencyCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * List wallet transactions by currency code ordered by create time desc.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: currency transaction info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Wallet.Transactions_ByUserId_ByCurrencyCode, input]
 * }
 * ```
 */
export const useWalletApi_GetTransactions_ByUserId_ByCurrencyCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; currencyCode: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<WalletTransactionPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<WalletTransactionPagingSlicedResult>) => void
): UseQueryResult<WalletTransactionPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useWalletApi_GetTransactions_ByUserId_ByCurrencyCode>[1]) => async () => {
    const response = await WalletApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getTransactions_ByUserId_ByCurrencyCode(input.userId, input.currencyCode, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<WalletTransactionPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_Wallet.Transactions_ByUserId_ByCurrencyCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
