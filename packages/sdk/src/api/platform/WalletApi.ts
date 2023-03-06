/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { WalletInfo } from '@accelbyte/sdk/generated-public/platform/definitions/WalletInfo'
import { Wallet$ } from '@accelbyte/sdk/generated-public/platform/Wallet$'
import { Network } from '@accelbyte/sdk/utils/Network'

export class WalletApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * GET [/platform/public/namespaces/{namespace}/users/me/wallets/{currencyCode}](api)
   *
   * get my wallet by currency code and namespace.
   *
   * Returns: wallet info
   *
   * Path's namespace:
   *  - can be filled with __publisher namespace__ in order to get __publisher user wallet__
   *  - can be filled with __game namespace__ in order to get __game user wallet__
   */
  getUserMeWallet = (currencyCode: string) => {
    return this.newInstance().fetchUserMeWallet_ByCurrencyCode(currencyCode)
  }

  /**
   * GET [/platform/public/namespaces/{namespace}/users/{userId}/wallets/{currencyCode}](api)
   *
   * Get a wallet by currency code.
   *
   * Returns: wallet info
   */
  getWalletByUserId = (userId: string, currencyCode: string) => {
    return this.newInstance().fetchWallet_ByUserId_ByCurrencyCode(userId, currencyCode)
  }

  /**
   * get a map of wallet represented by its currency code
   * @internal
   */
  getWalletMap = async ({ userId, currencyCodes }: { userId: string; currencyCodes: string[] }) => {
    try {
      const wallets = await Promise.all(
        currencyCodes.map(currencyCode =>
          this.getWalletByUserId(userId, currencyCode).then(result => {
            if (result.error) throw result.error
            return result.response.data as WalletInfo
          })
        )
      )
      return {
        value: wallets.reduce((map: Map<string, WalletInfo>, wallet: WalletInfo) => {
          map.set(wallet.currencyCode, wallet)
          return map
        }, new Map() as Map<string, WalletInfo>),
        error: null
      }
    } catch (error) {
      return { error, value: null }
    }
  }

  private newInstance() {
    return new Wallet$(Network.create(this.conf), this.namespace, this.cache)
  }
}
