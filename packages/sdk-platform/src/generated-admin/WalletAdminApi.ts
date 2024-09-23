/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { BulkCreditRequest } from '../generated-definitions/BulkCreditRequest.js'
import { BulkCreditResult } from '../generated-definitions/BulkCreditResult.js'
import { BulkDebitRequest } from '../generated-definitions/BulkDebitRequest.js'
import { BulkDebitResult } from '../generated-definitions/BulkDebitResult.js'
import { CreditRequest } from '../generated-definitions/CreditRequest.js'
import { CurrencyWalletArray } from '../generated-definitions/CurrencyWalletArray.js'
import { DebitByCurrencyCodeRequest } from '../generated-definitions/DebitByCurrencyCodeRequest.js'
import { DebitByWalletPlatformRequest } from '../generated-definitions/DebitByWalletPlatformRequest.js'
import { DebitRequest } from '../generated-definitions/DebitRequest.js'
import { DetailedWalletTransactionPagingSlicedResult } from '../generated-definitions/DetailedWalletTransactionPagingSlicedResult.js'
import { PaymentRequest } from '../generated-definitions/PaymentRequest.js'
import { PlatformWallet } from '../generated-definitions/PlatformWallet.js'
import { PlatformWalletConfigInfo } from '../generated-definitions/PlatformWalletConfigInfo.js'
import { PlatformWalletConfigUpdate } from '../generated-definitions/PlatformWalletConfigUpdate.js'
import { WalletInfo } from '../generated-definitions/WalletInfo.js'
import { WalletPagingSlicedResult } from '../generated-definitions/WalletPagingSlicedResult.js'
import { WalletTransactionPagingSlicedResult } from '../generated-definitions/WalletTransactionPagingSlicedResult.js'
import { WalletAdmin$ } from './endpoints/WalletAdmin$.js'

export function WalletAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getWallets(queryParams?: {
    currencyCode?: string | null
    limit?: number
    offset?: number
    origin?: 'Epic' | 'GooglePlay' | 'IOS' | 'Nintendo' | 'Oculus' | 'Other' | 'Playstation' | 'Steam' | 'System' | 'Twitch' | 'Xbox'
    userId?: string | null
  }): Promise<AxiosResponse<WalletPagingSlicedResult>> {
    const $ = new WalletAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getWallets(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createWalletDebit(data: BulkDebitRequest[]): Promise<AxiosResponse<BulkDebitResult>> {
    const $ = new WalletAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createWalletDebit(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createWalletCredit(data: BulkCreditRequest[]): Promise<AxiosResponse<BulkCreditResult>> {
    const $ = new WalletAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createWalletCredit(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getWallet_ByWalletId(walletId: string): Promise<AxiosResponse<WalletInfo>> {
    const $ = new WalletAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getWallet_ByWalletId(walletId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getWallet_ByUserId_ByWalletId(userId: string, walletId: string): Promise<AxiosResponse<WalletInfo>> {
    const $ = new WalletAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getWallet_ByUserId_ByWalletId(userId, walletId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getWalletConfig_ByPlatform(platform: string): Promise<AxiosResponse<PlatformWalletConfigInfo>> {
    const $ = new WalletAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getWalletConfig_ByPlatform(platform)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateWalletConfig_ByPlatform(
    platform: string,
    data: PlatformWalletConfigUpdate
  ): Promise<AxiosResponse<PlatformWalletConfigInfo>> {
    const $ = new WalletAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateWalletConfig_ByPlatform(platform, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDebit_ByUserId_ByWalletId(userId: string, walletId: string, data: DebitRequest): Promise<AxiosResponse<WalletInfo>> {
    const $ = new WalletAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDebit_ByUserId_ByWalletId(userId, walletId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateWalletConfigReset_ByPlatform(platform: string): Promise<AxiosResponse<PlatformWalletConfigInfo>> {
    const $ = new WalletAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateWalletConfigReset_ByPlatform(platform)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateEnable_ByUserId_ByWalletId(userId: string, walletId: string): Promise<AxiosResponse<unknown>> {
    const $ = new WalletAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateEnable_ByUserId_ByWalletId(userId, walletId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDisable_ByUserId_ByWalletId(userId: string, walletId: string): Promise<AxiosResponse<unknown>> {
    const $ = new WalletAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDisable_ByUserId_ByWalletId(userId, walletId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getWalletsCurrenciesSummary_ByUserId(userId: string): Promise<AxiosResponse<CurrencyWalletArray>> {
    const $ = new WalletAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getWalletsCurrenciesSummary_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getCheck_ByUserId_ByCurrencyCode(
    userId: string,
    currencyCode: string,
    queryParams: {
      origin: 'Epic' | 'GooglePlay' | 'IOS' | 'Nintendo' | 'Oculus' | 'Other' | 'Playstation' | 'Steam' | 'System' | 'Twitch' | 'Xbox'
    }
  ): Promise<AxiosResponse<unknown>> {
    const $ = new WalletAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCheck_ByUserId_ByCurrencyCode(userId, currencyCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateCredit_ByUserId_ByCurrencyCode(
    userId: string,
    currencyCode: string,
    data: CreditRequest
  ): Promise<AxiosResponse<WalletInfo>> {
    const $ = new WalletAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCredit_ByUserId_ByCurrencyCode(userId, currencyCode, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePayment_ByUserId_ByCurrencyCode(
    userId: string,
    currencyCode: string,
    data: PaymentRequest
  ): Promise<AxiosResponse<PlatformWallet>> {
    const $ = new WalletAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePayment_ByUserId_ByCurrencyCode(userId, currencyCode, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getTransactions_ByUserId_ByWalletId(
    userId: string,
    walletId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<DetailedWalletTransactionPagingSlicedResult>> {
    const $ = new WalletAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTransactions_ByUserId_ByWalletId(userId, walletId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createBalanceCheck_ByUserId_ByCurrencyCode(
    userId: string,
    currencyCode: string,
    data: DebitByWalletPlatformRequest
  ): Promise<AxiosResponse<unknown>> {
    const $ = new WalletAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createBalanceCheck_ByUserId_ByCurrencyCode(userId, currencyCode, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDebitWallet_ByUserId_ByCurrencyCode(
    userId: string,
    currencyCode: string,
    data: DebitByCurrencyCodeRequest
  ): Promise<AxiosResponse<WalletInfo>> {
    const $ = new WalletAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDebitWallet_ByUserId_ByCurrencyCode(userId, currencyCode, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDebitByWalletPlatform_ByUserId_ByCurrencyCode(
    userId: string,
    currencyCode: string,
    data: DebitByWalletPlatformRequest
  ): Promise<AxiosResponse<PlatformWallet>> {
    const $ = new WalletAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDebitByWalletPlatform_ByUserId_ByCurrencyCode(userId, currencyCode, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getTransactionsWallets_ByUserId_ByCurrencyCode(
    userId: string,
    currencyCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<WalletTransactionPagingSlicedResult>> {
    const $ = new WalletAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTransactionsWallets_ByUserId_ByCurrencyCode(userId, currencyCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * @deprecated
     * Query wallets.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated wallets info&lt;/li&gt;&lt;/ul&gt;
     */
    getWallets,
    /**
     * Debit different users&#39; wallets.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk credit result&lt;/li&gt;&lt;/ul&gt;
     */
    createWalletDebit,
    /**
     * Credit different users&#39; wallets.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk credit result&lt;/li&gt;&lt;/ul&gt;
     */
    createWalletCredit,
    /**
     * @deprecated
     * get a wallet by wallet id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet info&lt;/li&gt;&lt;/ul&gt;
     */
    getWallet_ByWalletId,
    /**
     * @deprecated
     * get a user wallet.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet info&lt;/li&gt;&lt;/ul&gt;
     */
    getWallet_ByUserId_ByWalletId,
    /**
     * Get platform wallet config list.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet info&lt;/li&gt;&lt;/ul&gt;
     */
    getWalletConfig_ByPlatform,
    /**
     * Update platform wallet config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: platform wallet config&lt;/li&gt;&lt;/ul&gt;
     */
    updateWalletConfig_ByPlatform,
    /**
     * @deprecated
     * Debit a user wallet.
     */
    updateDebit_ByUserId_ByWalletId,
    /**
     * Reset platform wallet config to default config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: platform wallet config&lt;/li&gt;&lt;/ul&gt;
     */
    updateWalletConfigReset_ByPlatform,
    /**
     * @deprecated
     * enable a user wallet.
     */
    updateEnable_ByUserId_ByWalletId,
    /**
     * @deprecated
     * disable a user wallet.
     */
    updateDisable_ByUserId_ByWalletId,
    /**
     * Get user currency wallet summary.&lt;br&gt;Other detail info: &lt;ul&gt;(READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: currency wallet summary&lt;/li&gt;&lt;/ul&gt;
     */
    getWalletsCurrenciesSummary_ByUserId,
    /**
     * @deprecated
     * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Check wallet by balance origin and currency code whether it&#39;s inactive.
     */
    getCheck_ByUserId_ByCurrencyCode,
    /**
     * Credit a user wallet by currency code and balance origin, if wallet not exists, it will create a new wallet.&lt;br&gt;Other detail info: &lt;ul&gt;(UPDATE)&lt;/li&gt;&lt;/ul&gt;
     */
    updateCredit_ByUserId_ByCurrencyCode,
    /**
     * Pay with user wallet by currency code and client platform.
     */
    updatePayment_ByUserId_ByCurrencyCode,
    /**
     * @deprecated
     * List user wallet transactions ordered by create time desc.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet transaction info&lt;/li&gt;&lt;/ul&gt;
     */
    getTransactions_ByUserId_ByWalletId,
    /**
     * Checks if the user has enough balance based on the provided criteria.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: boolean value indicating if the user has enough balance&lt;/li&gt;&lt;/ul&gt;
     */
    createBalanceCheck_ByUserId_ByCurrencyCode,
    /**
     * Debit a user wallet by currency code, default is debit system wallet.
     */
    updateDebitWallet_ByUserId_ByCurrencyCode,
    /**
     * Pay with user wallet by currency code and client platform.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for metadata&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
     */
    updateDebitByWalletPlatform_ByUserId_ByCurrencyCode,
    /**
     * List user currency transactions ordered by create time desc.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: currency transaction info&lt;/li&gt;&lt;/ul&gt;
     */
    getTransactionsWallets_ByUserId_ByCurrencyCode
  }
}
