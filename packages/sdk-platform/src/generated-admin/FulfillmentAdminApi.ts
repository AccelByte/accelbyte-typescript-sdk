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
import { FulfillmentHistoryPagingSlicedResult } from '../generated-definitions/FulfillmentHistoryPagingSlicedResult.js'
import { FulfillmentItemArray } from '../generated-definitions/FulfillmentItemArray.js'
import { FulfillmentRequest } from '../generated-definitions/FulfillmentRequest.js'
import { FulfillmentResult } from '../generated-definitions/FulfillmentResult.js'
import { FulfillmentV2Request } from '../generated-definitions/FulfillmentV2Request.js'
import { FulfillmentV2Result } from '../generated-definitions/FulfillmentV2Result.js'
import { PreCheckFulfillmentRequest } from '../generated-definitions/PreCheckFulfillmentRequest.js'
import { RevokeFulfillmentV2Result } from '../generated-definitions/RevokeFulfillmentV2Result.js'
import { RewardsRequest } from '../generated-definitions/RewardsRequest.js'
import { FulfillmentAdmin$ } from './endpoints/FulfillmentAdmin$.js'

export function FulfillmentAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt; Query fulfillments in a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: query fulfillments&lt;/li&gt;&lt;/ul&gt;
   */
  async function getFulfillments(queryParams?: {
    endTime?: string | null
    limit?: number
    offset?: number
    startTime?: string | null
    state?: 'FULFILLED' | 'FULFILL_FAILED' | 'REVOKED' | 'REVOKE_FAILED'
    transactionId?: string | null
    userId?: string | null
  }): Promise<FulfillmentHistoryPagingSlicedResult> {
    const $ = new FulfillmentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getFulfillments(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query fulfillment histories in a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: query fulfillment history&lt;/li&gt;&lt;/ul&gt;
   */
  async function getFulfillmentHistory(queryParams?: {
    limit?: number
    offset?: number
    status?: 'FAIL' | 'SUCCESS'
    userId?: string | null
  }): Promise<FulfillmentHistoryPagingSlicedResult> {
    const $ = new FulfillmentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getFulfillmentHistory(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Fulfill item.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;/ul&gt;
   */
  async function createFulfillment_ByUserId(userId: string, data: FulfillmentRequest): Promise<FulfillmentResult> {
    const $ = new FulfillmentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createFulfillment_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Redeem campaign code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;/ul&gt;
   */
  async function createFulfillmentCode_ByUserId(userId: string, data: FulfillCodeRequest): Promise<FulfillmentResult> {
    const $ = new FulfillmentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createFulfillmentCode_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Fulfill rewards.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;/ul&gt;
   */
  async function createFulfillmentReward_ByUserId(userId: string, data: RewardsRequest): Promise<unknown> {
    const $ = new FulfillmentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createFulfillmentReward_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve and check fulfillment items based on the provided request.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of fulfillment items&lt;/li&gt;&lt;/ul&gt;
   */
  async function createFulfillmentPreCheck_ByUserId(userId: string, data: PreCheckFulfillmentRequest): Promise<FulfillmentItemArray> {
    const $ = new FulfillmentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createFulfillmentPreCheck_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Fulfill rewards.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;li&gt;&lt;i&gt;rewards Item unsupported Type&lt;/i&gt;: SUBSCRIPTION&lt;/ul&gt;
   */
  async function createFulfillmentReward_ByUserId_ByNS(userId: string, data: RewardsRequest): Promise<FulfillmentResult> {
    const $ = new FulfillmentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createFulfillmentReward_ByUserId_ByNS(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt; Fulfill items by transactionId.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment v2 result&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateFulfillment_ByUserId_ByTransactionId(
    userId: string,
    transactionId: string,
    data: FulfillmentV2Request
  ): Promise<FulfillmentV2Result> {
    const $ = new FulfillmentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateFulfillment_ByUserId_ByTransactionId(userId, transactionId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt; Revoke items by transactionId.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revoke fulfillment v2 result&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateRevoke_ByUserId_ByTransactionId(userId: string, transactionId: string): Promise<RevokeFulfillmentV2Result> {
    const $ = new FulfillmentAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateRevoke_ByUserId_ByTransactionId(userId, transactionId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getFulfillments,
    getFulfillmentHistory,
    createFulfillment_ByUserId,
    createFulfillmentCode_ByUserId,
    createFulfillmentReward_ByUserId,
    createFulfillmentPreCheck_ByUserId,
    createFulfillmentReward_ByUserId_ByNS,
    updateFulfillment_ByUserId_ByTransactionId,
    updateRevoke_ByUserId_ByTransactionId
  }
}
