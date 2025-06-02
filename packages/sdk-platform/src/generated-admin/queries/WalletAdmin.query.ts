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
import { WalletAdminApi } from '../WalletAdminApi.js'

import { BulkCreditRequest } from '../../generated-definitions/BulkCreditRequest.js'
import { BulkCreditResult } from '../../generated-definitions/BulkCreditResult.js'
import { BulkDebitRequest } from '../../generated-definitions/BulkDebitRequest.js'
import { BulkDebitResult } from '../../generated-definitions/BulkDebitResult.js'
import { CreditRequest } from '../../generated-definitions/CreditRequest.js'
import { CurrencyWalletArray } from '../../generated-definitions/CurrencyWalletArray.js'
import { DebitByCurrencyCodeRequest } from '../../generated-definitions/DebitByCurrencyCodeRequest.js'
import { DebitByWalletPlatformRequest } from '../../generated-definitions/DebitByWalletPlatformRequest.js'
import { DebitRequest } from '../../generated-definitions/DebitRequest.js'
import { DetailedWalletTransactionPagingSlicedResult } from '../../generated-definitions/DetailedWalletTransactionPagingSlicedResult.js'
import { PaymentRequest } from '../../generated-definitions/PaymentRequest.js'
import { PlatformWallet } from '../../generated-definitions/PlatformWallet.js'
import { PlatformWalletConfigInfo } from '../../generated-definitions/PlatformWalletConfigInfo.js'
import { PlatformWalletConfigUpdate } from '../../generated-definitions/PlatformWalletConfigUpdate.js'
import { WalletConfigInfo } from '../../generated-definitions/WalletConfigInfo.js'
import { WalletConfigUpdate } from '../../generated-definitions/WalletConfigUpdate.js'
import { WalletInfo } from '../../generated-definitions/WalletInfo.js'
import { WalletPagingSlicedResult } from '../../generated-definitions/WalletPagingSlicedResult.js'
import { WalletTransactionPagingSlicedResult } from '../../generated-definitions/WalletTransactionPagingSlicedResult.js'

export enum Key_WalletAdmin {
  Wallets = 'Platform.WalletAdmin.Wallets',
  WalletConfig = 'Platform.WalletAdmin.WalletConfig',
  WalletDebit = 'Platform.WalletAdmin.WalletDebit',
  WalletCredit = 'Platform.WalletAdmin.WalletCredit',
  Wallet_ByWalletId = 'Platform.WalletAdmin.Wallet_ByWalletId',
  Wallet_ByUserId_ByWalletId = 'Platform.WalletAdmin.Wallet_ByUserId_ByWalletId',
  WalletConfig_ByPlatform = 'Platform.WalletAdmin.WalletConfig_ByPlatform',
  Debit_ByUserId_ByWalletId = 'Platform.WalletAdmin.Debit_ByUserId_ByWalletId',
  WalletConfigReset_ByPlatform = 'Platform.WalletAdmin.WalletConfigReset_ByPlatform',
  Enable_ByUserId_ByWalletId = 'Platform.WalletAdmin.Enable_ByUserId_ByWalletId',
  Disable_ByUserId_ByWalletId = 'Platform.WalletAdmin.Disable_ByUserId_ByWalletId',
  WalletsCurrenciesSummary_ByUserId = 'Platform.WalletAdmin.WalletsCurrenciesSummary_ByUserId',
  Check_ByUserId_ByCurrencyCode = 'Platform.WalletAdmin.Check_ByUserId_ByCurrencyCode',
  Credit_ByUserId_ByCurrencyCode = 'Platform.WalletAdmin.Credit_ByUserId_ByCurrencyCode',
  Payment_ByUserId_ByCurrencyCode = 'Platform.WalletAdmin.Payment_ByUserId_ByCurrencyCode',
  Transactions_ByUserId_ByWalletId = 'Platform.WalletAdmin.Transactions_ByUserId_ByWalletId',
  BalanceCheck_ByUserId_ByCurrencyCode = 'Platform.WalletAdmin.BalanceCheck_ByUserId_ByCurrencyCode',
  DebitWallet_ByUserId_ByCurrencyCode = 'Platform.WalletAdmin.DebitWallet_ByUserId_ByCurrencyCode',
  DebitByWalletPlatform_ByUserId_ByCurrencyCode = 'Platform.WalletAdmin.DebitByWalletPlatform_ByUserId_ByCurrencyCode',
  TransactionsWallets_ByUserId_ByCurrencyCode = 'Platform.WalletAdmin.TransactionsWallets_ByUserId_ByCurrencyCode'
}

/**
 * @deprecated
 * Query wallets.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated wallets info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_WalletAdmin.Wallets, input]
 * }
 * ```
 */
export const useWalletAdminApi_GetWallets = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      currencyCode?: string | null
      limit?: number
      offset?: number
      origin?: 'Epic' | 'GooglePlay' | 'IOS' | 'Nintendo' | 'Oculus' | 'Other' | 'Playstation' | 'Steam' | 'System' | 'Twitch' | 'Xbox'
      userId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<WalletPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<WalletPagingSlicedResult>) => void
): UseQueryResult<WalletPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useWalletAdminApi_GetWallets>[1]) => async () => {
    const response = await WalletAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getWallets(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<WalletPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_WalletAdmin.Wallets, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * get wallet config
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_WalletAdmin.WalletConfig, input]
 * }
 * ```
 */
export const useWalletAdminApi_GetWalletConfig = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<WalletConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<WalletConfigInfo>) => void
): UseQueryResult<WalletConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useWalletAdminApi_GetWalletConfig>[1]) => async () => {
    const response = await WalletAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getWalletConfig()
    callback && callback(response)
    return response.data
  }

  return useQuery<WalletConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_WalletAdmin.WalletConfig, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update wallet config of a namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_WalletAdmin.WalletConfig, input]
 * }
 * ```
 */
export const useWalletAdminApi_UpdateWalletConfigMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<WalletConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: WalletConfigUpdate }>,
    'mutationKey'
  >,
  callback?: (data: WalletConfigInfo) => void
): UseMutationResult<WalletConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: WalletConfigUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: WalletConfigUpdate }) => {
    const response = await WalletAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateWalletConfig(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_WalletAdmin.WalletConfig],
    mutationFn,
    ...options
  })
}

/**
 * Debit different users&#39; wallets.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk credit result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_WalletAdmin.WalletDebit, input]
 * }
 * ```
 */
export const useWalletAdminApi_CreateWalletDebitMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BulkDebitResult, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkDebitRequest[] }>,
    'mutationKey'
  >,
  callback?: (data: BulkDebitResult) => void
): UseMutationResult<BulkDebitResult, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkDebitRequest[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkDebitRequest[] }) => {
    const response = await WalletAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createWalletDebit(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_WalletAdmin.WalletDebit],
    mutationFn,
    ...options
  })
}

/**
 * Credit different users&#39; wallets.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk credit result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_WalletAdmin.WalletCredit, input]
 * }
 * ```
 */
export const useWalletAdminApi_CreateWalletCreditMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BulkCreditResult, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkCreditRequest[] }>,
    'mutationKey'
  >,
  callback?: (data: BulkCreditResult) => void
): UseMutationResult<BulkCreditResult, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkCreditRequest[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkCreditRequest[] }) => {
    const response = await WalletAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createWalletCredit(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_WalletAdmin.WalletCredit],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * get a wallet by wallet id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_WalletAdmin.Wallet_ByWalletId, input]
 * }
 * ```
 */
export const useWalletAdminApi_GetWallet_ByWalletId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { walletId: string },
  options?: Omit<UseQueryOptions<WalletInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<WalletInfo>) => void
): UseQueryResult<WalletInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useWalletAdminApi_GetWallet_ByWalletId>[1]) => async () => {
    const response = await WalletAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getWallet_ByWalletId(
      input.walletId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<WalletInfo, AxiosError<ApiError>>({
    queryKey: [Key_WalletAdmin.Wallet_ByWalletId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * get a user wallet.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_WalletAdmin.Wallet_ByUserId_ByWalletId, input]
 * }
 * ```
 */
export const useWalletAdminApi_GetWallet_ByUserId_ByWalletId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; walletId: string },
  options?: Omit<UseQueryOptions<WalletInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<WalletInfo>) => void
): UseQueryResult<WalletInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useWalletAdminApi_GetWallet_ByUserId_ByWalletId>[1]) => async () => {
    const response = await WalletAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getWallet_ByUserId_ByWalletId(input.userId, input.walletId)
    callback && callback(response)
    return response.data
  }

  return useQuery<WalletInfo, AxiosError<ApiError>>({
    queryKey: [Key_WalletAdmin.Wallet_ByUserId_ByWalletId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get platform wallet config list.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_WalletAdmin.WalletConfig_ByPlatform, input]
 * }
 * ```
 */
export const useWalletAdminApi_GetWalletConfig_ByPlatform = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { platform: string },
  options?: Omit<UseQueryOptions<PlatformWalletConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PlatformWalletConfigInfo>) => void
): UseQueryResult<PlatformWalletConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useWalletAdminApi_GetWalletConfig_ByPlatform>[1]) => async () => {
    const response = await WalletAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getWalletConfig_ByPlatform(
      input.platform
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PlatformWalletConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_WalletAdmin.WalletConfig_ByPlatform, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update platform wallet config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: platform wallet config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_WalletAdmin.WalletConfig_ByPlatform, input]
 * }
 * ```
 */
export const useWalletAdminApi_UpdateWalletConfig_ByPlatformMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PlatformWalletConfigInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { platform: string; data: PlatformWalletConfigUpdate }
    >,
    'mutationKey'
  >,
  callback?: (data: PlatformWalletConfigInfo) => void
): UseMutationResult<
  PlatformWalletConfigInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { platform: string; data: PlatformWalletConfigUpdate }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { platform: string; data: PlatformWalletConfigUpdate }) => {
    const response = await WalletAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateWalletConfig_ByPlatform(input.platform, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_WalletAdmin.WalletConfig_ByPlatform],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Debit a user wallet.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_WalletAdmin.Debit_ByUserId_ByWalletId, input]
 * }
 * ```
 */
export const useWalletAdminApi_UpdateDebit_ByUserId_ByWalletIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<WalletInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; walletId: string; data: DebitRequest }>,
    'mutationKey'
  >,
  callback?: (data: WalletInfo) => void
): UseMutationResult<WalletInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; walletId: string; data: DebitRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; walletId: string; data: DebitRequest }) => {
    const response = await WalletAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateDebit_ByUserId_ByWalletId(input.userId, input.walletId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_WalletAdmin.Debit_ByUserId_ByWalletId],
    mutationFn,
    ...options
  })
}

/**
 * Reset platform wallet config to default config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: platform wallet config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_WalletAdmin.WalletConfigReset_ByPlatform, input]
 * }
 * ```
 */
export const useWalletAdminApi_UpdateWalletConfigReset_ByPlatformMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<PlatformWalletConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { platform: string }>,
    'mutationKey'
  >,
  callback?: (data: PlatformWalletConfigInfo) => void
): UseMutationResult<PlatformWalletConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { platform: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { platform: string }) => {
    const response = await WalletAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateWalletConfigReset_ByPlatform(input.platform)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_WalletAdmin.WalletConfigReset_ByPlatform],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * enable a user wallet.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_WalletAdmin.Enable_ByUserId_ByWalletId, input]
 * }
 * ```
 */
export const useWalletAdminApi_UpdateEnable_ByUserId_ByWalletIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; walletId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; walletId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; walletId: string }) => {
    const response = await WalletAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateEnable_ByUserId_ByWalletId(input.userId, input.walletId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_WalletAdmin.Enable_ByUserId_ByWalletId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * disable a user wallet.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_WalletAdmin.Disable_ByUserId_ByWalletId, input]
 * }
 * ```
 */
export const useWalletAdminApi_UpdateDisable_ByUserId_ByWalletIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; walletId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; walletId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; walletId: string }) => {
    const response = await WalletAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateDisable_ByUserId_ByWalletId(input.userId, input.walletId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_WalletAdmin.Disable_ByUserId_ByWalletId],
    mutationFn,
    ...options
  })
}

/**
 * Get user currency wallet summary.&lt;br&gt;Other detail info: &lt;ul&gt;(READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: currency wallet summary&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_WalletAdmin.WalletsCurrenciesSummary_ByUserId, input]
 * }
 * ```
 */
export const useWalletAdminApi_GetWalletsCurrenciesSummary_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string },
  options?: Omit<UseQueryOptions<CurrencyWalletArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CurrencyWalletArray>) => void
): UseQueryResult<CurrencyWalletArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useWalletAdminApi_GetWalletsCurrenciesSummary_ByUserId>[1]) => async () => {
    const response = await WalletAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getWalletsCurrenciesSummary_ByUserId(input.userId)
    callback && callback(response)
    return response.data
  }

  return useQuery<CurrencyWalletArray, AxiosError<ApiError>>({
    queryKey: [Key_WalletAdmin.WalletsCurrenciesSummary_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Check wallet by balance origin and currency code whether it&#39;s inactive.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_WalletAdmin.Check_ByUserId_ByCurrencyCode, input]
 * }
 * ```
 */
export const useWalletAdminApi_GetCheck_ByUserId_ByCurrencyCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    currencyCode: string
    queryParams: {
      origin: 'Epic' | 'GooglePlay' | 'IOS' | 'Nintendo' | 'Oculus' | 'Other' | 'Playstation' | 'Steam' | 'System' | 'Twitch' | 'Xbox'
    }
  },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useWalletAdminApi_GetCheck_ByUserId_ByCurrencyCode>[1]) => async () => {
    const response = await WalletAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getCheck_ByUserId_ByCurrencyCode(input.userId, input.currencyCode, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_WalletAdmin.Check_ByUserId_ByCurrencyCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Credit a user wallet by currency code and balance origin, if wallet not exists, it will create a new wallet.&lt;br&gt;Other detail info: &lt;ul&gt;(UPDATE)&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_WalletAdmin.Credit_ByUserId_ByCurrencyCode, input]
 * }
 * ```
 */
export const useWalletAdminApi_UpdateCredit_ByUserId_ByCurrencyCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<WalletInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; currencyCode: string; data: CreditRequest }>,
    'mutationKey'
  >,
  callback?: (data: WalletInfo) => void
): UseMutationResult<
  WalletInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; currencyCode: string; data: CreditRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; currencyCode: string; data: CreditRequest }) => {
    const response = await WalletAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateCredit_ByUserId_ByCurrencyCode(input.userId, input.currencyCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_WalletAdmin.Credit_ByUserId_ByCurrencyCode],
    mutationFn,
    ...options
  })
}

/**
 * Pay with user wallet by currency code and client platform.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_WalletAdmin.Payment_ByUserId_ByCurrencyCode, input]
 * }
 * ```
 */
export const useWalletAdminApi_UpdatePayment_ByUserId_ByCurrencyCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PlatformWallet,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; currencyCode: string; data: PaymentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: PlatformWallet) => void
): UseMutationResult<
  PlatformWallet,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; currencyCode: string; data: PaymentRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; currencyCode: string; data: PaymentRequest }) => {
    const response = await WalletAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePayment_ByUserId_ByCurrencyCode(input.userId, input.currencyCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_WalletAdmin.Payment_ByUserId_ByCurrencyCode],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * List user wallet transactions ordered by create time desc.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet transaction info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_WalletAdmin.Transactions_ByUserId_ByWalletId, input]
 * }
 * ```
 */
export const useWalletAdminApi_GetTransactions_ByUserId_ByWalletId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; walletId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<DetailedWalletTransactionPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DetailedWalletTransactionPagingSlicedResult>) => void
): UseQueryResult<DetailedWalletTransactionPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useWalletAdminApi_GetTransactions_ByUserId_ByWalletId>[1]) => async () => {
    const response = await WalletAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getTransactions_ByUserId_ByWalletId(input.userId, input.walletId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<DetailedWalletTransactionPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_WalletAdmin.Transactions_ByUserId_ByWalletId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Checks if the user has enough balance based on the provided criteria.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: boolean value indicating if the user has enough balance&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_WalletAdmin.BalanceCheck_ByUserId_ByCurrencyCode, input]
 * }
 * ```
 */
export const useWalletAdminApi_CreateBalanceCheck_ByUserId_ByCurrencyCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; currencyCode: string; data: DebitByWalletPlatformRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; currencyCode: string; data: DebitByWalletPlatformRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; currencyCode: string; data: DebitByWalletPlatformRequest }) => {
    const response = await WalletAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createBalanceCheck_ByUserId_ByCurrencyCode(input.userId, input.currencyCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_WalletAdmin.BalanceCheck_ByUserId_ByCurrencyCode],
    mutationFn,
    ...options
  })
}

/**
 * Debit a user wallet by currency code, default is debit system wallet.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_WalletAdmin.DebitWallet_ByUserId_ByCurrencyCode, input]
 * }
 * ```
 */
export const useWalletAdminApi_UpdateDebitWallet_ByUserId_ByCurrencyCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      WalletInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; currencyCode: string; data: DebitByCurrencyCodeRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: WalletInfo) => void
): UseMutationResult<
  WalletInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; currencyCode: string; data: DebitByCurrencyCodeRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; currencyCode: string; data: DebitByCurrencyCodeRequest }) => {
    const response = await WalletAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateDebitWallet_ByUserId_ByCurrencyCode(input.userId, input.currencyCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_WalletAdmin.DebitWallet_ByUserId_ByCurrencyCode],
    mutationFn,
    ...options
  })
}

/**
 * Debit user wallet by currency code and client platform.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for metadata&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_WalletAdmin.DebitByWalletPlatform_ByUserId_ByCurrencyCode, input]
 * }
 * ```
 */
export const useWalletAdminApi_UpdateDebitByWalletPlatform_ByUserId_ByCurrencyCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PlatformWallet,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; currencyCode: string; data: DebitByWalletPlatformRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: PlatformWallet) => void
): UseMutationResult<
  PlatformWallet,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; currencyCode: string; data: DebitByWalletPlatformRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; currencyCode: string; data: DebitByWalletPlatformRequest }) => {
    const response = await WalletAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateDebitByWalletPlatform_ByUserId_ByCurrencyCode(input.userId, input.currencyCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_WalletAdmin.DebitByWalletPlatform_ByUserId_ByCurrencyCode],
    mutationFn,
    ...options
  })
}

/**
 * List user currency transactions ordered by create time desc.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: currency transaction info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_WalletAdmin.TransactionsWallets_ByUserId_ByCurrencyCode, input]
 * }
 * ```
 */
export const useWalletAdminApi_GetTransactionsWallets_ByUserId_ByCurrencyCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; currencyCode: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<WalletTransactionPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<WalletTransactionPagingSlicedResult>) => void
): UseQueryResult<WalletTransactionPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useWalletAdminApi_GetTransactionsWallets_ByUserId_ByCurrencyCode>[1]) => async () => {
      const response = await WalletAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getTransactionsWallets_ByUserId_ByCurrencyCode(input.userId, input.currencyCode, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<WalletTransactionPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_WalletAdmin.TransactionsWallets_ByUserId_ByCurrencyCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
