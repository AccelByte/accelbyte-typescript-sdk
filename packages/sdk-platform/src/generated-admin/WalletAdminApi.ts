/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
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
import { WalletAdmin$ } from './endpoints/WalletAdmin$.js'
import { WalletInfo } from '../generated-definitions/WalletInfo.js'
import { WalletPagingSlicedResult } from '../generated-definitions/WalletPagingSlicedResult.js'
import { WalletTransactionPagingSlicedResult } from '../generated-definitions/WalletTransactionPagingSlicedResult.js'

export function WalletAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * @deprecated
   * Query wallets.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:WALLET&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated wallets info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getWallets(queryParams?: {
    currencyCode?: string | null
    limit?: number
    offset?: number
    origin?: 'Epic' | 'GooglePlay' | 'IOS' | 'Nintendo' | 'Oculus' | 'Other' | 'Playstation' | 'Steam' | 'System' | 'Twitch' | 'Xbox'
    userId?: string | null
  }): Promise<WalletPagingSlicedResult> {
    const $ = new WalletAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getWallets(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Debit different users&#39; wallets.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:WALLET&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk credit result&lt;/li&gt;&lt;/ul&gt;
   */
  async function createWalletDebit(data: BulkDebitRequest[]): Promise<BulkDebitResult> {
    const $ = new WalletAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createWalletDebit(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Credit different users&#39; wallets.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:WALLET&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk credit result&lt;/li&gt;&lt;/ul&gt;
   */
  async function createWalletCredit(data: BulkCreditRequest[]): Promise<BulkCreditResult> {
    const $ = new WalletAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createWalletCredit(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * get a wallet by wallet id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:WALLET&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getWallet_ByWalletId(walletId: string): Promise<WalletInfo> {
    const $ = new WalletAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getWallet_ByWalletId(walletId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * get a user wallet.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:WALLET&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getWallet_ByUserId_ByWalletId(userId: string, walletId: string): Promise<WalletInfo> {
    const $ = new WalletAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getWallet_ByUserId_ByWalletId(userId, walletId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get platform wallet config list.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:WALLET:CONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getWalletConfig_ByPlatform(platform: string): Promise<PlatformWalletConfigInfo> {
    const $ = new WalletAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getWalletConfig_ByPlatform(platform)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update platform wallet config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:WALLET:CONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: platform wallet config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateWalletConfig_ByPlatform(platform: string, data: PlatformWalletConfigUpdate): Promise<PlatformWalletConfigInfo> {
    const $ = new WalletAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateWalletConfig_ByPlatform(platform, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Debit a user wallet.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:WALLET&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateDebit_ByUserId_ByWalletId(userId: string, walletId: string, data: DebitRequest): Promise<WalletInfo> {
    const $ = new WalletAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateDebit_ByUserId_ByWalletId(userId, walletId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Reset platform wallet config to default config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:WALLET:CONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: platform wallet config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateWalletConfigReset_ByPlatform(platform: string): Promise<PlatformWalletConfigInfo> {
    const $ = new WalletAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateWalletConfigReset_ByPlatform(platform)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * enable a user wallet.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:WALLET&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateEnable_ByUserId_ByWalletId(userId: string, walletId: string): Promise<unknown> {
    const $ = new WalletAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateEnable_ByUserId_ByWalletId(userId, walletId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * disable a user wallet.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:WALLET&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateDisable_ByUserId_ByWalletId(userId: string, walletId: string): Promise<unknown> {
    const $ = new WalletAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateDisable_ByUserId_ByWalletId(userId, walletId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user currency wallet summary.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:WALLET&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: currency wallet summary&lt;/li&gt;&lt;/ul&gt;
   */
  async function getWalletsCurrenciesSummary_ByUserId(userId: string): Promise<CurrencyWalletArray> {
    const $ = new WalletAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getWalletsCurrenciesSummary_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Check wallet by balance origin and currency code whether it&#39;s inactive.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:WALLET&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getCheck_ByUserId_ByCurrencyCode(
    userId: string,
    currencyCode: string,
    queryParams: {
      origin: 'Epic' | 'GooglePlay' | 'IOS' | 'Nintendo' | 'Oculus' | 'Other' | 'Playstation' | 'Steam' | 'System' | 'Twitch' | 'Xbox'
    }
  ): Promise<unknown> {
    const $ = new WalletAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getCheck_ByUserId_ByCurrencyCode(userId, currencyCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Credit a user wallet by currency code and balance origin, if wallet not exists, it will create a new wallet.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:WALLET&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateCredit_ByUserId_ByCurrencyCode(userId: string, currencyCode: string, data: CreditRequest): Promise<WalletInfo> {
    const $ = new WalletAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateCredit_ByUserId_ByCurrencyCode(userId, currencyCode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Pay with user wallet by currency code and client platform.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:WALLET&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function updatePayment_ByUserId_ByCurrencyCode(
    userId: string,
    currencyCode: string,
    data: PaymentRequest
  ): Promise<PlatformWallet> {
    const $ = new WalletAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updatePayment_ByUserId_ByCurrencyCode(userId, currencyCode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * List user wallet transactions ordered by create time desc.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:WALLET&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet transaction info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getTransactions_ByUserId_ByWalletId(
    userId: string,
    walletId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<DetailedWalletTransactionPagingSlicedResult> {
    const $ = new WalletAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getTransactions_ByUserId_ByWalletId(userId, walletId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Checks if the user has enough balance based on the provided criteria.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:WALLET&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: boolean value indicating if the user has enough balance&lt;/li&gt;&lt;/ul&gt;
   */
  async function createBalanceCheck_ByUserId_ByCurrencyCode(
    userId: string,
    currencyCode: string,
    data: DebitByWalletPlatformRequest
  ): Promise<unknown> {
    const $ = new WalletAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createBalanceCheck_ByUserId_ByCurrencyCode(userId, currencyCode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Debit a user wallet by currency code, default is debit system wallet.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:WALLET&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateDebitWallet_ByUserId_ByCurrencyCode(
    userId: string,
    currencyCode: string,
    data: DebitByCurrencyCodeRequest
  ): Promise<WalletInfo> {
    const $ = new WalletAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateDebitWallet_ByUserId_ByCurrencyCode(userId, currencyCode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Pay with user wallet by currency code and client platform.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:WALLET&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for metadata&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
   */
  async function updateDebitByWalletPlatform_ByUserId_ByCurrencyCode(
    userId: string,
    currencyCode: string,
    data: DebitByWalletPlatformRequest
  ): Promise<PlatformWallet> {
    const $ = new WalletAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateDebitByWalletPlatform_ByUserId_ByCurrencyCode(userId, currencyCode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * List user currency transactions ordered by create time desc.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:WALLET&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: currency transaction info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getTransactionsWallets_ByUserId_ByCurrencyCode(
    userId: string,
    currencyCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<WalletTransactionPagingSlicedResult> {
    const $ = new WalletAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getTransactionsWallets_ByUserId_ByCurrencyCode(userId, currencyCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getWallets,
    createWalletDebit,
    createWalletCredit,
    getWallet_ByWalletId,
    getWallet_ByUserId_ByWalletId,
    getWalletConfig_ByPlatform,
    updateWalletConfig_ByPlatform,
    updateDebit_ByUserId_ByWalletId,
    updateWalletConfigReset_ByPlatform,
    updateEnable_ByUserId_ByWalletId,
    updateDisable_ByUserId_ByWalletId,
    getWalletsCurrenciesSummary_ByUserId,
    getCheck_ByUserId_ByCurrencyCode,
    updateCredit_ByUserId_ByCurrencyCode,
    updatePayment_ByUserId_ByCurrencyCode,
    getTransactions_ByUserId_ByWalletId,
    createBalanceCheck_ByUserId_ByCurrencyCode,
    updateDebitWallet_ByUserId_ByCurrencyCode,
    updateDebitByWalletPlatform_ByUserId_ByCurrencyCode,
    getTransactionsWallets_ByUserId_ByCurrencyCode
  }
}
