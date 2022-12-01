/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
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
   * get my wallet by currency code and namespace.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:WALLET", action=2 (READ)</li><li><i>Returns</i>: wallet info</li><li><i>Path's namespace</i> : <ul>   <li>can be filled with <b>publisher namespace</b> in order to get <b>publisher user wallet</b></li>   <li>can be filled with <b>game namespace</b> in order to get <b>game user wallet</b></li>   </ul></li></ul>
   */
  getUserMeWallet = (currencyCode: string) => {
    return this.newInstance().fetchUsersMeWalletsByCurrencycode(currencyCode)
  }

  /**
   * get a wallet by currency code.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:WALLET", action=2 (READ)</li><li><i>Returns</i>: wallet info</li></ul>
   */
  getWalletByUserId = (userId: string, currencyCode: string) => {
    return this.newInstance().fetchUsersByUseridWalletsByCurrencycode(userId, currencyCode)
  }

  /**
   * get a map of wallet represented by its currency code
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
