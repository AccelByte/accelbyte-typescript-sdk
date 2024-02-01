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
import { Currency$ } from './endpoints/Currency$.js'
import { CurrencyInfoArray } from '../generated-definitions/CurrencyInfoArray.js'

export function CurrencyApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * List currencies of a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Currency List&lt;/li&gt;&lt;/ul&gt;
   */
  async function getCurrencies(queryParams?: { currencyType?: 'REAL' | 'VIRTUAL' }): Promise<CurrencyInfoArray> {
    const $ = new Currency$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getCurrencies(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getCurrencies
  }
}
