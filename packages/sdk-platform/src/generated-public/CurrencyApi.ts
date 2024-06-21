/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { CurrencyInfoArray } from '../generated-definitions/CurrencyInfoArray.js'
import { Currency$ } from './endpoints/Currency$.js'

export function CurrencyApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * List currencies of a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Currency List&lt;/li&gt;&lt;/ul&gt;
   */
  async function getCurrencies(queryParams?: { currencyType?: 'REAL' | 'VIRTUAL' }): Promise<CurrencyInfoArray> {
    const $ = new Currency$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getCurrencies(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getCurrencies
  }
}
