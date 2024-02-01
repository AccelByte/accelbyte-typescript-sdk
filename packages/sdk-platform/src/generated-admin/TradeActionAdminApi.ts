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
import { TradeActionAdmin$ } from './endpoints/TradeActionAdmin$.js'
import { TradeActionPagingSlicedResult } from '../generated-definitions/TradeActionPagingSlicedResult.js'
import { TradeChainActionHistoryInfo } from '../generated-definitions/TradeChainActionHistoryInfo.js'
import { TradeChainedActionCommitRequest } from '../generated-definitions/TradeChainedActionCommitRequest.js'

export function TradeActionAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * This API is used to create a chained operations&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:TRADE, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: chain action history&lt;/li&gt;&lt;li&gt;&lt;i&gt;FULFILL_ITEM operation supported item type&lt;/i&gt;: INGAMEITEM,LOOTBOX,OPTIONBOX&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for metadata&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
   */
  async function createTradeCommit(data: TradeChainedActionCommitRequest): Promise<TradeChainActionHistoryInfo> {
    const $ = new TradeActionAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createTradeCommit(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to fetch a specific trade history using transaction ID&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:TRADE, action=2 (REDA)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: trade history based on transaction ID&lt;/li&gt;&lt;/ul&gt;
   */
  async function getTrade_ByTransactionId(transactionId: string): Promise<TradeChainActionHistoryInfo> {
    const $ = new TradeActionAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getTrade_ByTransactionId(transactionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to fetch trade history based on the provided criteria&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:TRADE, action=2 (REDA)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: trade history list based on criteria&lt;/li&gt;&lt;/ul&gt;
   */
  async function getTradeHistoryByCriteria(queryParams?: {
    limit?: number
    offset?: number
    status?: 'FAILED' | 'INIT' | 'SUCCESS'
    type?: string | null
    userId?: string | null
  }): Promise<TradeActionPagingSlicedResult> {
    const $ = new TradeActionAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getTradeHistoryByCriteria(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createTradeCommit,
    getTrade_ByTransactionId,
    getTradeHistoryByCriteria
  }
}
