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
import { PlatformWallet } from './definitions/PlatformWallet'
import { Wallet$ } from './endpoints/Wallet$'
import { WalletTransactionPagingSlicedResult } from './definitions/WalletTransactionPagingSlicedResult'

export function WalletApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  async function getUserMeWallet_ByCurrencyCode(currencyCode: string): Promise<PlatformWallet> {
    const $ = new Wallet$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUserMeWallet_ByCurrencyCode(currencyCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getWallet_ByUserId_ByCurrencyCode(userId: string, currencyCode: string): Promise<PlatformWallet> {
    const $ = new Wallet$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getWallet_ByUserId_ByCurrencyCode(userId, currencyCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

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
