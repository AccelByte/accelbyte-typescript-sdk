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
import { OrderSyncResult } from '../generated-definitions/OrderSyncResult.js'
import { OrderDedicatedAdmin$ } from './endpoints/OrderDedicatedAdmin$.js'

export function OrderDedicatedAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Sync orders. If response contains nextEvaluatedKey, please use it as query param in the next call to fetch the next batch, a batch has 1000 elements or less.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: sync orders&lt;/li&gt;&lt;/ul&gt;
   */
  async function getOrders(queryParams: {
    end: string | null
    start: string | null
    nextEvaluatedKey?: string | null
  }): Promise<OrderSyncResult> {
    const $ = new OrderDedicatedAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getOrders(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getOrders
  }
}
