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
import { FulfillmentAdmin$ } from './endpoints/FulfillmentAdmin$.js'
import { FulfillmentHistoryPagingSlicedResult } from '../generated-definitions/FulfillmentHistoryPagingSlicedResult.js'
import { FulfillmentItemArray } from '../generated-definitions/FulfillmentItemArray.js'
import { FulfillmentRequest } from '../generated-definitions/FulfillmentRequest.js'
import { FulfillmentResult } from '../generated-definitions/FulfillmentResult.js'
import { PreCheckFulfillmentRequest } from '../generated-definitions/PreCheckFulfillmentRequest.js'
import { RewardsRequest } from '../generated-definitions/RewardsRequest.js'

export function FulfillmentAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * Query fulfillment histories in a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:FULFILLMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: query fulfillment history&lt;/li&gt;&lt;/ul&gt;
   */
  async function getFulfillmentHistory(queryParams?: {
    limit?: number
    offset?: number
    status?: 'FAIL' | 'SUCCESS'
    userId?: string | null
  }): Promise<FulfillmentHistoryPagingSlicedResult> {
    const $ = new FulfillmentAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getFulfillmentHistory(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Fulfill item.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:FULFILLMENT&#34;, action=1 (CREATED)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;/ul&gt;
   */
  async function createFulfillment_ByUserId(userId: string, data: FulfillmentRequest): Promise<FulfillmentResult> {
    const $ = new FulfillmentAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createFulfillment_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Redeem campaign code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:FULFILLMENT&#34;, action=1 (CREATED)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;/ul&gt;
   */
  async function createFulfillmentCode_ByUserId(userId: string, data: FulfillCodeRequest): Promise<FulfillmentResult> {
    const $ = new FulfillmentAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createFulfillmentCode_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Fulfill rewards.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:FULFILLMENT&#34;, action=1 (CREATED)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;/ul&gt;
   */
  async function createFulfillmentReward_ByUserId(userId: string, data: RewardsRequest): Promise<unknown> {
    const $ = new FulfillmentAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createFulfillmentReward_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve and check fulfillment items based on the provided request.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:FULFILLMENT&#34;, action=READ&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of fulfillment items&lt;/li&gt;&lt;/ul&gt;
   */
  async function createFulfillmentPreCheck_ByUserId(userId: string, data: PreCheckFulfillmentRequest): Promise<FulfillmentItemArray> {
    const $ = new FulfillmentAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createFulfillmentPreCheck_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Fulfill rewards.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:FULFILLMENT&#34;, action=1 (CREATED)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;li&gt;&lt;i&gt;rewards Item unsupported Type&lt;/i&gt;: SUBSCRIPTION&lt;/ul&gt;
   */
  async function createFulfillmentReward_ByUserId_ByNS(userId: string, data: RewardsRequest): Promise<FulfillmentResult> {
    const $ = new FulfillmentAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createFulfillmentReward_ByUserId_ByNS(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getFulfillmentHistory,
    createFulfillment_ByUserId,
    createFulfillmentCode_ByUserId,
    createFulfillmentReward_ByUserId,
    createFulfillmentPreCheck_ByUserId,
    createFulfillmentReward_ByUserId_ByNS
  }
}
