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
import { OrderCreate } from '../generated-definitions/OrderCreate.js'
import { OrderDiscountPreviewRequest } from '../generated-definitions/OrderDiscountPreviewRequest.js'
import { OrderDiscountPreviewResponse } from '../generated-definitions/OrderDiscountPreviewResponse.js'
import { OrderHistoryInfoArray } from '../generated-definitions/OrderHistoryInfoArray.js'
import { OrderInfo } from '../generated-definitions/OrderInfo.js'
import { OrderPagingSlicedResult } from '../generated-definitions/OrderPagingSlicedResult.js'
import { Order$ } from './endpoints/Order$.js'

export function OrderApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Query user orders.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: get order&lt;/li&gt;&lt;/ul&gt;
   */
  async function getOrders_ByUserId(
    userId: string,
    queryParams?: {
      discounted?: boolean | null
      itemId?: string | null
      limit?: number
      offset?: number
      status?:
        | 'CHARGEBACK'
        | 'CHARGEBACK_REVERSED'
        | 'CHARGED'
        | 'CLOSED'
        | 'DELETED'
        | 'FULFILLED'
        | 'FULFILL_FAILED'
        | 'INIT'
        | 'REFUNDED'
        | 'REFUNDING'
        | 'REFUND_FAILED'
    }
  ): Promise<OrderPagingSlicedResult> {
    const $ = new Order$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getOrders_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create an order. The result contains the checkout link and payment token. User with permission SANDBOX will create sandbox order that not real paid for xsolla/alipay and not validate price for wxpay.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission(user with this permission will create sandbox order)&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;It will be forbidden while the user is banned: ORDER_INITIATE or ORDER_AND_PAYMENT&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created order&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for ext field&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
   */
  async function createOrder_ByUserId(userId: string, data: OrderCreate): Promise<OrderInfo> {
    const $ = new Order$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createOrder_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user order.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: get order&lt;/li&gt;&lt;/ul&gt;
   */
  async function getOrder_ByUserId_ByOrderNo(userId: string, orderNo: string): Promise<OrderInfo> {
    const $ = new Order$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getOrder_ByUserId_ByOrderNo(userId, orderNo)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Cancel user order.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: cancelled order&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateCancel_ByUserId_ByOrderNo(userId: string, orderNo: string): Promise<OrderInfo> {
    const $ = new Order$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateCancel_ByUserId_ByOrderNo(userId, orderNo)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Preview order price with discount code, this api is used to auto calc order price with discount code.Notes: this api don&#39;t do full order validation, only check discount code and calc final order price.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: previewed order&lt;/li&gt;&lt;/ul&gt;
   */
  async function createOrderDiscountPreview_ByUserId(
    userId: string,
    data: OrderDiscountPreviewRequest
  ): Promise<OrderDiscountPreviewResponse> {
    const $ = new Order$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createOrderDiscountPreview_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user order histories.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: get order history&lt;/li&gt;&lt;/ul&gt;
   */
  async function getHistory_ByUserId_ByOrderNo(userId: string, orderNo: string): Promise<OrderHistoryInfoArray> {
    const $ = new Order$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getHistory_ByUserId_ByOrderNo(userId, orderNo)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Download user order receipt by orderNo.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: order receipt pdf&lt;/li&gt;&lt;/ul&gt;
   */
  async function getReceiptPdf_ByUserId_ByOrderNo(userId: string, orderNo: string): Promise<unknown> {
    const $ = new Order$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getReceiptPdf_ByUserId_ByOrderNo(userId, orderNo)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getOrders_ByUserId,
    createOrder_ByUserId,
    getOrder_ByUserId_ByOrderNo,
    updateCancel_ByUserId_ByOrderNo,
    createOrderDiscountPreview_ByUserId,
    getHistory_ByUserId_ByOrderNo,
    getReceiptPdf_ByUserId_ByOrderNo
  }
}
