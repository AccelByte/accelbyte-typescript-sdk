/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { TradeActionPagingSlicedResult } from '../../generated-definitions/TradeActionPagingSlicedResult.js'
import { TradeChainActionHistoryInfo } from '../../generated-definitions/TradeChainActionHistoryInfo.js'
import { TradeChainedActionCommitRequest } from '../../generated-definitions/TradeChainedActionCommitRequest.js'

export class TradeActionAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This API is used to create a chained operations&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:TRADE, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: chain action history&lt;/li&gt;&lt;li&gt;&lt;i&gt;FULFILL_ITEM operation supported item type&lt;/i&gt;: INGAMEITEM,LOOTBOX,OPTIONBOX&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for metadata&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
   */
  createTradeCommit(data: TradeChainedActionCommitRequest): Promise<IResponse<TradeChainActionHistoryInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/trade/commit'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, TradeChainActionHistoryInfo, 'TradeChainActionHistoryInfo')
  }

  /**
   * This API is used to fetch a specific trade history using transaction ID&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:TRADE, action=2 (REDA)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: trade history based on transaction ID&lt;/li&gt;&lt;/ul&gt;
   */
  getTrade_ByTransactionId(transactionId: string): Promise<IResponseWithSync<TradeChainActionHistoryInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/trade/{transactionId}'
      .replace('{namespace}', this.namespace)
      .replace('{transactionId}', transactionId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, TradeChainActionHistoryInfo, 'TradeChainActionHistoryInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to fetch trade history based on the provided criteria&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:TRADE, action=2 (REDA)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: trade history list based on criteria&lt;/li&gt;&lt;/ul&gt;
   */
  getTradeHistoryByCriteria(queryParams?: {
    limit?: number
    offset?: number
    status?: 'FAILED' | 'INIT' | 'SUCCESS'
    type?: string | null
    userId?: string | null
  }): Promise<IResponseWithSync<TradeActionPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/trade/history/byCriteria'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, TradeActionPagingSlicedResult, 'TradeActionPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
