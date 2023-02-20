/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { Currency$ } from '@accelbyte/sdk/generated-public/platform/Currency$'
import { CurrencyInfo } from '@accelbyte/sdk/generated-public/platform/definitions/CurrencyInfo'
import { Network } from '@accelbyte/sdk/utils/Network'

export class CurrencyApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * GET [/platform/public/namespaces/{namespace}/currencies](api)
   *
   * List currencies of a namespace.
   *
   * Returns: Currency List
   */
  getCurrencies = () => {
    return this.newInstance().fetchNsCurrencies()
  }

  /**
   * Get the currencies list and convert into a map of currency code and the currency itself
   *
   * @internal
   */
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

  private newInstance() {
    return new Currency$(Network.create(this.conf), this.namespace, this.cache)
  }
}
