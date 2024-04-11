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
import { CurrencyAdmin$ } from './endpoints/CurrencyAdmin$.js'
import { CurrencyConfig } from '../generated-definitions/CurrencyConfig.js'
import { CurrencyCreate } from '../generated-definitions/CurrencyCreate.js'
import { CurrencyInfo } from '../generated-definitions/CurrencyInfo.js'
import { CurrencyInfoArray } from '../generated-definitions/CurrencyInfoArray.js'
import { CurrencySummary } from '../generated-definitions/CurrencySummary.js'
import { CurrencyUpdate } from '../generated-definitions/CurrencyUpdate.js'

export function CurrencyAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * List currencies of a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CURRENCY&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Currency List&lt;/li&gt;&lt;/ul&gt;
   */
  async function getCurrencies(queryParams?: { currencyType?: 'REAL' | 'VIRTUAL' }): Promise<CurrencyInfoArray> {
    const $ = new CurrencyAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getCurrencies(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create a currency.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CURRENCY&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created currency&lt;/li&gt;&lt;/ul&gt;
   */
  async function createCurrency(data: CurrencyCreate): Promise<CurrencyInfo> {
    const $ = new CurrencyAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createCurrency(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete a currency by currency code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CURRENCY&#34;, action=8 (DELETE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteCurrency_ByCurrencyCode(currencyCode: string): Promise<CurrencyInfo> {
    const $ = new CurrencyAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteCurrency_ByCurrencyCode(currencyCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update a currency by currency code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CURRENCY&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated currency&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateCurrency_ByCurrencyCode(currencyCode: string, data: CurrencyUpdate): Promise<CurrencyInfo> {
    const $ = new CurrencyAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateCurrency_ByCurrencyCode(currencyCode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Get currency config by code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CURRENCY&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: simplified Currency&lt;/li&gt;&lt;/ul&gt;
   */
  async function getConfig_ByCurrencyCode(currencyCode: string): Promise<CurrencyConfig> {
    const $ = new CurrencyAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getConfig_ByCurrencyCode(currencyCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get currency summary by code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CURRENCY&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: simplified Currency&lt;/li&gt;&lt;/ul&gt;
   */
  async function getSummary_ByCurrencyCode(currencyCode: string): Promise<CurrencySummary> {
    const $ = new CurrencyAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getSummary_ByCurrencyCode(currencyCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getCurrencies,
    createCurrency,
    deleteCurrency_ByCurrencyCode,
    updateCurrency_ByCurrencyCode,
    getConfig_ByCurrencyCode,
    getSummary_ByCurrencyCode
  }
}
