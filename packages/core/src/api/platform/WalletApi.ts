/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { WalletInfo } from '@od-web-sdk/generated-public/platform/definitions/WalletInfo'
import { Wallet$ } from '@od-web-sdk/generated-public/platform/Wallet$'
import { Network } from '@od-web-sdk/utils/Network'

export class WalletApi {
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = true) {}

  newInstance() {
    return new Wallet$(Network.create(this.conf), this.namespace, this.cache)
  }

  getUserMeWallet = (currencyCode: string) => {
    return this.newInstance().fetchUsersMeWalletsByCurrencycode(currencyCode)
  }

  getWalletByUserId = (userId: string, currencyCode: string) => {
    return this.newInstance().fetchUsersByUseridWalletsByCurrencycode(userId, currencyCode)
  }

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
}
