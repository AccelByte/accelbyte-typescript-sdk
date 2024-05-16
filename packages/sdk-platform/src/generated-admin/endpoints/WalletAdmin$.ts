/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
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
import { WalletInfo } from '../../generated-definitions/WalletInfo.js'
import { WalletPagingSlicedResult } from '../../generated-definitions/WalletPagingSlicedResult.js'
import { WalletTransactionPagingSlicedResult } from '../../generated-definitions/WalletTransactionPagingSlicedResult.js'

export class WalletAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * @deprecated
   * Query wallets.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated wallets info&lt;/li&gt;&lt;/ul&gt;
   */
  getWallets_DEPRECATED(queryParams?: {
    currencyCode?: string | null
    limit?: number
    offset?: number
    origin?: 'Epic' | 'GooglePlay' | 'IOS' | 'Nintendo' | 'Oculus' | 'Other' | 'Playstation' | 'Steam' | 'System' | 'Twitch' | 'Xbox'
    userId?: string | null
  }): Promise<IResponse<WalletPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/wallets'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, WalletPagingSlicedResult, 'WalletPagingSlicedResult')
  }

  /**
   * Debit different users&#39; wallets.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk credit result&lt;/li&gt;&lt;/ul&gt;
   */
  createWalletDebit(data: BulkDebitRequest[]): Promise<IResponse<BulkDebitResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/wallets/debit'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, BulkDebitResult, 'BulkDebitResult')
  }

  /**
   * Credit different users&#39; wallets.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk credit result&lt;/li&gt;&lt;/ul&gt;
   */
  createWalletCredit(data: BulkCreditRequest[]): Promise<IResponse<BulkCreditResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/wallets/credit'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, BulkCreditResult, 'BulkCreditResult')
  }

  /**
   * @deprecated
   * get a wallet by wallet id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet info&lt;/li&gt;&lt;/ul&gt;
   */
  getWallet_ByWalletId_DEPRECATED(walletId: string): Promise<IResponse<WalletInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/wallets/{walletId}'
      .replace('{namespace}', this.namespace)
      .replace('{walletId}', walletId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, WalletInfo, 'WalletInfo')
  }

  /**
   * @deprecated
   * get a user wallet.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet info&lt;/li&gt;&lt;/ul&gt;
   */
  getWallet_ByUserId_ByWalletId_DEPRECATED(userId: string, walletId: string): Promise<IResponse<WalletInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/wallets/{walletId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{walletId}', walletId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, WalletInfo, 'WalletInfo')
  }

  /**
   * Get platform wallet config list.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet info&lt;/li&gt;&lt;/ul&gt;
   */
  getWalletConfig_ByPlatform(platform: string): Promise<IResponse<PlatformWalletConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/platforms/{platform}/wallet/config'
      .replace('{namespace}', this.namespace)
      .replace('{platform}', platform)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, PlatformWalletConfigInfo, 'PlatformWalletConfigInfo')
  }

  /**
   * Update platform wallet config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: platform wallet config&lt;/li&gt;&lt;/ul&gt;
   */
  updateWalletConfig_ByPlatform(platform: string, data: PlatformWalletConfigUpdate): Promise<IResponse<PlatformWalletConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/platforms/{platform}/wallet/config'
      .replace('{namespace}', this.namespace)
      .replace('{platform}', platform)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, PlatformWalletConfigInfo, 'PlatformWalletConfigInfo')
  }

  /**
   * @deprecated
   * Debit a user wallet.
   */
  updateDebit_ByUserId_ByWalletId_DEPRECATED(userId: string, walletId: string, data: DebitRequest): Promise<IResponse<WalletInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/wallets/{walletId}/debit'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{walletId}', walletId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, WalletInfo, 'WalletInfo')
  }

  /**
   * Reset platform wallet config to default config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: platform wallet config&lt;/li&gt;&lt;/ul&gt;
   */
  updateWalletConfigReset_ByPlatform(platform: string): Promise<IResponse<PlatformWalletConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/platforms/{platform}/wallet/config/reset'
      .replace('{namespace}', this.namespace)
      .replace('{platform}', platform)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, PlatformWalletConfigInfo, 'PlatformWalletConfigInfo')
  }

  /**
   * @deprecated
   * enable a user wallet.
   */
  updateEnable_ByUserId_ByWalletId_DEPRECATED(userId: string, walletId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/wallets/{walletId}/enable'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{walletId}', walletId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * @deprecated
   * disable a user wallet.
   */
  updateDisable_ByUserId_ByWalletId_DEPRECATED(userId: string, walletId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/wallets/{walletId}/disable'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{walletId}', walletId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get user currency wallet summary.&lt;br&gt;Other detail info: &lt;ul&gt;(READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: currency wallet summary&lt;/li&gt;&lt;/ul&gt;
   */
  getWalletsCurrenciesSummary_ByUserId(userId: string): Promise<IResponse<CurrencyWalletArray>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/wallets/currencies/summary'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, CurrencyWalletArray, 'CurrencyWalletArray')
  }

  /**
   * @deprecated
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Check wallet by balance origin and currency code whether it&#39;s inactive.
   */
  getCheck_ByUserId_ByCurrencyCode_DEPRECATED(
    userId: string,
    currencyCode: string,
    queryParams: {
      origin: 'Epic' | 'GooglePlay' | 'IOS' | 'Nintendo' | 'Oculus' | 'Other' | 'Playstation' | 'Steam' | 'System' | 'Twitch' | 'Xbox'
    }
  ): Promise<IResponse<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/wallets/{currencyCode}/check'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{currencyCode}', currencyCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Credit a user wallet by currency code and balance origin, if wallet not exists, it will create a new wallet.&lt;br&gt;Other detail info: &lt;ul&gt;(UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  updateCredit_ByUserId_ByCurrencyCode(userId: string, currencyCode: string, data: CreditRequest): Promise<IResponse<WalletInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/wallets/{currencyCode}/credit'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{currencyCode}', currencyCode)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, WalletInfo, 'WalletInfo')
  }

  /**
   * Pay with user wallet by currency code and client platform.
   */
  updatePayment_ByUserId_ByCurrencyCode(userId: string, currencyCode: string, data: PaymentRequest): Promise<IResponse<PlatformWallet>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/wallets/{currencyCode}/payment'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{currencyCode}', currencyCode)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, PlatformWallet, 'PlatformWallet')
  }

  /**
   * @deprecated
   * List user wallet transactions ordered by create time desc.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet transaction info&lt;/li&gt;&lt;/ul&gt;
   */
  getTransactions_ByUserId_ByWalletId_DEPRECATED(
    userId: string,
    walletId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponse<DetailedWalletTransactionPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/wallets/{walletId}/transactions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{walletId}', walletId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      DetailedWalletTransactionPagingSlicedResult,
      'DetailedWalletTransactionPagingSlicedResult'
    )
  }

  /**
   * Checks if the user has enough balance based on the provided criteria.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: boolean value indicating if the user has enough balance&lt;/li&gt;&lt;/ul&gt;
   */
  createBalanceCheck_ByUserId_ByCurrencyCode(
    userId: string,
    currencyCode: string,
    data: DebitByWalletPlatformRequest
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/wallets/{currencyCode}/balanceCheck'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{currencyCode}', currencyCode)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Debit a user wallet by currency code, default is debit system wallet.
   */
  updateDebitWallet_ByUserId_ByCurrencyCode(
    userId: string,
    currencyCode: string,
    data: DebitByCurrencyCodeRequest
  ): Promise<IResponse<WalletInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/wallets/currencies/{currencyCode}/debit'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{currencyCode}', currencyCode)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, WalletInfo, 'WalletInfo')
  }

  /**
   * Pay with user wallet by currency code and client platform.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for metadata&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
   */
  updateDebitByWalletPlatform_ByUserId_ByCurrencyCode(
    userId: string,
    currencyCode: string,
    data: DebitByWalletPlatformRequest
  ): Promise<IResponse<PlatformWallet>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/wallets/{currencyCode}/debitByWalletPlatform'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{currencyCode}', currencyCode)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, PlatformWallet, 'PlatformWallet')
  }

  /**
   * List user currency transactions ordered by create time desc.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: currency transaction info&lt;/li&gt;&lt;/ul&gt;
   */
  getTransactionsWallets_ByUserId_ByCurrencyCode(
    userId: string,
    currencyCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponse<WalletTransactionPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/wallets/currencies/{currencyCode}/transactions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{currencyCode}', currencyCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      WalletTransactionPagingSlicedResult,
      'WalletTransactionPagingSlicedResult'
    )
  }
}
