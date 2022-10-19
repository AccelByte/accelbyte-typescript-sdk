/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { Currency$ } from '@od-web-sdk/generated-public/platform/Currency$'
import { CurrencyInfo } from '@od-web-sdk/generated-public/platform/definitions/CurrencyInfo'
import { Network } from '@od-web-sdk/utils/Network'

export class CurrencyApi {
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = true) {}

  newInstance() {
    return new Currency$(Network.create(this.conf), this.namespace, this.cache)
  }

  getCurrencies = () => {
    return this.newInstance().fetchCurrencies()
  }

  getCurrencyMap = async () => {
    const result = await this.getCurrencies()
    if (result.error) return result

    return {
      value: result.response.data.reduce((currencyMap: Map<string, CurrencyInfo>, currency) => {
        currencyMap.set(currency.currencyCode, currency)
        return currencyMap
      }, new Map() as Map<string, CurrencyInfo>),
      error: result.error
    }
  }
}
