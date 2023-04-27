/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { PlatformWallet } from './definitions/PlatformWallet.js'
import { Wallet$ } from './endpoints/Wallet$.js'
import { WalletTransactionPagingSlicedResult } from './definitions/WalletTransactionPagingSlicedResult.js'

export function WalletApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * get my wallet by currency code and namespace.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:WALLET", action=2 (READ)</li><li><i>Returns</i>: wallet info</li><li><i>Path's namespace</i> : <ul> <li>can be filled with <b>publisher namespace</b> in order to get <b>publisher user wallet</b></li> <li>can be filled with <b>game namespace</b> in order to get <b>game user wallet</b></li> </ul></li></ul>
   */
  async function getUserMeWallet_ByCurrencyCode(currencyCode: string): Promise<PlatformWallet> {
    const $ = new Wallet$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUserMeWallet_ByCurrencyCode(currencyCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * get a wallet by currency code.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:WALLET", action=2 (READ)</li><li><i>Returns</i>: wallet info</li></ul>
   */
  async function getWallet_ByUserId_ByCurrencyCode(userId: string, currencyCode: string): Promise<PlatformWallet> {
    const $ = new Wallet$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getWallet_ByUserId_ByCurrencyCode(userId, currencyCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * List wallet transactions by currency code ordered by create time desc.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:WALLET", action=2 (READ)</li><li><i>Returns</i>: currency transaction info</li></ul>
   */
  async function getTransactions_ByUserId_ByCurrencyCode(
    userId: string,
    currencyCode: string,
    queryParams?: { offset?: number; limit?: number }
  ): Promise<WalletTransactionPagingSlicedResult> {
    const $ = new Wallet$(Network.create(requestConfig), namespace, cache)
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
