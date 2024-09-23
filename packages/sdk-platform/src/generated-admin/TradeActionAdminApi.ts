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
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { TradeActionPagingSlicedResult } from '../generated-definitions/TradeActionPagingSlicedResult.js'
import { TradeChainActionHistoryInfo } from '../generated-definitions/TradeChainActionHistoryInfo.js'
import { TradeChainedActionCommitRequest } from '../generated-definitions/TradeChainedActionCommitRequest.js'
import { TradeActionAdmin$ } from './endpoints/TradeActionAdmin$.js'

export function TradeActionAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function createTradeCommit(data: TradeChainedActionCommitRequest): Promise<AxiosResponse<TradeChainActionHistoryInfo>> {
    const $ = new TradeActionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createTradeCommit(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getTrade_ByTransactionId(transactionId: string): Promise<AxiosResponse<TradeChainActionHistoryInfo>> {
    const $ = new TradeActionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTrade_ByTransactionId(transactionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getTradeHistoryByCriteria(queryParams?: {
    limit?: number
    offset?: number
    status?: 'FAILED' | 'INIT' | 'SUCCESS'
    type?: string | null
    userId?: string | null
  }): Promise<AxiosResponse<TradeActionPagingSlicedResult>> {
    const $ = new TradeActionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTradeHistoryByCriteria(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to create a chained operations&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: chain action history&lt;/li&gt;&lt;li&gt;&lt;i&gt;FULFILL_ITEM operation supported item type&lt;/i&gt;: INGAMEITEM,LOOTBOX,OPTIONBOX&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for metadata&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
     */
    createTradeCommit,
    /**
     * This API is used to fetch a specific trade history using transaction ID&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: trade history based on transaction ID&lt;/li&gt;&lt;/ul&gt;
     */
    getTrade_ByTransactionId,
    /**
     * This API is used to fetch trade history based on the provided criteria&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: trade history list based on criteria&lt;/li&gt;&lt;/ul&gt;
     */
    getTradeHistoryByCriteria
  }
}
