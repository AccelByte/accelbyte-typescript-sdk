/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { FulfillCodeRequest } from './definitions/FulfillCodeRequest.js'
import { Fulfillment$ } from './endpoints/Fulfillment$.js'
import { FulfillmentResult } from './definitions/FulfillmentResult.js'

export function FulfillmentApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Redeem campaign code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:FULFILLMENT&#34;, action=1 (CREATED)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;/ul&gt;
   */
  async function createFulfillmentCode_ByUserId(userId: string, data: FulfillCodeRequest): Promise<FulfillmentResult> {
    const $ = new Fulfillment$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createFulfillmentCode_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createFulfillmentCode_ByUserId
  }
}
