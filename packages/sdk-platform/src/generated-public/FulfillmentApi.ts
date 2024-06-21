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
import { FulfillCodeRequest } from '../generated-definitions/FulfillCodeRequest.js'
import { FulfillmentResult } from '../generated-definitions/FulfillmentResult.js'
import { Fulfillment$ } from './endpoints/Fulfillment$.js'

export function FulfillmentApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Redeem campaign code, this api have rate limit, default: only allow request once per user in 2 seconds&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;/ul&gt;
   */
  async function createFulfillmentCode_ByUserId(userId: string, data: FulfillCodeRequest): Promise<FulfillmentResult> {
    const $ = new Fulfillment$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createFulfillmentCode_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createFulfillmentCode_ByUserId
  }
}
