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
import { OrderDedicatedAdmin$ } from './endpoints/OrderDedicatedAdmin$.js'
import { OrderSyncResult } from '../generated-definitions/OrderSyncResult.js'

export function OrderDedicatedAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Sync orders. If response contains nextEvaluatedKey, please use it as query param in the next call to fetch the next batch, a batch has 1000 elements or less.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:ORDER&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: sync orders&lt;/li&gt;&lt;/ul&gt;
   */
  async function getOrders(queryParams: {
    end: string | null
    start: string | null
    nextEvaluatedKey?: string | null
  }): Promise<OrderSyncResult> {
    const $ = new OrderDedicatedAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getOrders(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getOrders
  }
}
