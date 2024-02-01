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
import { InvoiceAdmin$ } from './endpoints/InvoiceAdmin$.js'
import { InvoiceSummary } from '../generated-definitions/InvoiceSummary.js'

export function InvoiceAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Generate invoice summary.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ORDER&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: query orders&lt;/li&gt;&lt;/ul&gt;
   */
  async function getInvoiceSummary(queryParams: {
    endTime: string | null
    startTime: string | null
    feature?: string | null
    itemId?: string | null
    itemType?:
      | 'APP'
      | 'BUNDLE'
      | 'CODE'
      | 'COINS'
      | 'EXTENSION'
      | 'INGAMEITEM'
      | 'LOOTBOX'
      | 'MEDIA'
      | 'OPTIONBOX'
      | 'SEASON'
      | 'SUBSCRIPTION'
  }): Promise<InvoiceSummary> {
    const $ = new InvoiceAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getInvoiceSummary(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Download invoice details as a csv file.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ORDER&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: invoice details csv file&lt;/li&gt;&lt;/ul&gt;
   */
  async function getInvoiceDetailsCsv(queryParams: {
    endTime: string | null
    startTime: string | null
    feature?: string | null
    itemId?: string | null
    itemType?:
      | 'APP'
      | 'BUNDLE'
      | 'CODE'
      | 'COINS'
      | 'EXTENSION'
      | 'INGAMEITEM'
      | 'LOOTBOX'
      | 'MEDIA'
      | 'OPTIONBOX'
      | 'SEASON'
      | 'SUBSCRIPTION'
  }): Promise<unknown> {
    const $ = new InvoiceAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getInvoiceDetailsCsv(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getInvoiceSummary,
    getInvoiceDetailsCsv
  }
}
