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
import { PlatformWallet } from '../generated-definitions/PlatformWallet.js'
import { Wallet$ } from './endpoints/Wallet$.js'
import { WalletTransactionPagingSlicedResult } from '../generated-definitions/WalletTransactionPagingSlicedResult.js'

export function WalletApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * get my wallet by currency code and namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:WALLET&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet info&lt;/li&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt; &lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to get &lt;b&gt;publisher user wallet&lt;/b&gt;&lt;/li&gt; &lt;li&gt;can be filled with &lt;b&gt;game namespace&lt;/b&gt; in order to get &lt;b&gt;game user wallet&lt;/b&gt;&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  async function getUserMeWallet_ByCurrencyCode(currencyCode: string): Promise<PlatformWallet> {
    const $ = new Wallet$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getUserMeWallet_ByCurrencyCode(currencyCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * get a wallet by currency code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:WALLET&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getWallet_ByUserId_ByCurrencyCode(userId: string, currencyCode: string): Promise<PlatformWallet> {
    const $ = new Wallet$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getWallet_ByUserId_ByCurrencyCode(userId, currencyCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * List wallet transactions by currency code ordered by create time desc.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:WALLET&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: currency transaction info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getTransactions_ByUserId_ByCurrencyCode(
    userId: string,
    currencyCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<WalletTransactionPagingSlicedResult> {
    const $ = new Wallet$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getTransactions_ByUserId_ByCurrencyCode(userId, currencyCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getUserMeWallet_ByCurrencyCode,
    getWallet_ByUserId_ByCurrencyCode,
    getTransactions_ByUserId_ByCurrencyCode
  }
}
