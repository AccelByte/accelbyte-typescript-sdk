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
import { Order$ } from './endpoints/Order$'
import { OrderCreate } from './definitions/OrderCreate'
import { OrderHistoryInfoArray } from './definitions/OrderHistoryInfoArray'
import { OrderInfo } from './definitions/OrderInfo'
import { OrderPagingSlicedResult } from './definitions/OrderPagingSlicedResult'

export function OrderApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Query user orders.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=2 (READ)</li><li><i>Returns</i>: get order</li></ul>
   */
  async function getOrders_ByUserId(
    userId: string,
    queryParams?: {
      itemId?: string | null
      status?:
        | 'INIT'
        | 'CHARGED'
        | 'CHARGEBACK'
        | 'CHARGEBACK_REVERSED'
        | 'FULFILLED'
        | 'FULFILL_FAILED'
        | 'REFUNDING'
        | 'REFUNDED'
        | 'REFUND_FAILED'
        | 'CLOSED'
        | 'DELETED'
      offset?: number
      limit?: number
    }
  ): Promise<OrderPagingSlicedResult> {
    const $ = new Order$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getOrders_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create an order. The result contains the checkout link and payment token. User with permission SANDBOX will create sandbox order that not real paid for xsolla/alipay and not validate price for wxpay.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=1 (CREATE)</li><li><i>Optional permission(user with this permission will create sandbox order)</i>: resource="SANDBOX", action=1 (CREATE)</li><li>It will be forbidden while the user is banned: ORDER_INITIATE or ORDER_AND_PAYMENT</li><li><i>Returns</i>: created order</li></ul>
   */
  async function createOrder_ByUserId(userId: string, data: OrderCreate): Promise<OrderInfo> {
    const $ = new Order$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createOrder_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user order.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=2 (READ)</li><li><i>Returns</i>: get order</li></ul>
   */
  async function getOrder_ByUserId_ByOrderNo(userId: string, orderNo: string): Promise<OrderInfo> {
    const $ = new Order$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getOrder_ByUserId_ByOrderNo(userId, orderNo)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Cancel user order.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=4 (UPDATE)</li><li><i>Returns</i>: cancelled order</li></ul>
   */
  async function updateCancel_ByUserId_ByOrderNo(userId: string, orderNo: string): Promise<OrderInfo> {
    const $ = new Order$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateCancel_ByUserId_ByOrderNo(userId, orderNo)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user order histories.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=2 (READ)</li><li><i>Returns</i>: get order history</li></ul>
   */
  async function getHistory_ByUserId_ByOrderNo(userId: string, orderNo: string): Promise<OrderHistoryInfoArray> {
    const $ = new Order$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getHistory_ByUserId_ByOrderNo(userId, orderNo)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Download user order receipt by orderNo.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=2 (READ)</li><li><i>Returns</i>: order receipt pdf</li></ul>
   */
  async function getReceiptPdf_ByUserId_ByOrderNo(userId: string, orderNo: string): Promise<unknown> {
    const $ = new Order$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getReceiptPdf_ByUserId_ByOrderNo(userId, orderNo)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getOrders_ByUserId,
    createOrder_ByUserId,
    getOrder_ByUserId_ByOrderNo,
    updateCancel_ByUserId_ByOrderNo,
    getHistory_ByUserId_ByOrderNo,
    getReceiptPdf_ByUserId_ByOrderNo
  }
}
