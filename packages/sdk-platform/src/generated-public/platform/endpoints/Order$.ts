/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { OrderCreate } from '../definitions/OrderCreate'
import { OrderHistoryInfoArray } from '../definitions/OrderHistoryInfoArray'
import { OrderInfo } from '../definitions/OrderInfo'
import { OrderPagingSlicedResult } from '../definitions/OrderPagingSlicedResult'

export class Order$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Query user orders.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=2 (READ)</li><li><i>Returns</i>: get order</li></ul>
   */
  getOrders_ByUserId(
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
  ): Promise<IResponseWithSync<OrderPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/orders'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, OrderPagingSlicedResult, 'OrderPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Create an order. The result contains the checkout link and payment token. User with permission SANDBOX will create sandbox order that not real paid for xsolla/alipay and not validate price for wxpay.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=1 (CREATE)</li><li><i>Optional permission(user with this permission will create sandbox order)</i>: resource="SANDBOX", action=1 (CREATE)</li><li>It will be forbidden while the user is banned: ORDER_INITIATE or ORDER_AND_PAYMENT</li><li><i>Returns</i>: created order</li></ul>
   */
  createOrder_ByUserId(userId: string, data: OrderCreate): Promise<IResponse<OrderInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/orders'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, OrderInfo, 'OrderInfo')
  }

  /**
   * Get user order.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=2 (READ)</li><li><i>Returns</i>: get order</li></ul>
   */
  getOrder_ByUserId_ByOrderNo(userId: string, orderNo: string): Promise<IResponseWithSync<OrderInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/orders/{orderNo}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{orderNo}', orderNo)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, OrderInfo, 'OrderInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Cancel user order.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=4 (UPDATE)</li><li><i>Returns</i>: cancelled order</li></ul>
   */
  updateCancel_ByUserId_ByOrderNo(userId: string, orderNo: string): Promise<IResponse<OrderInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/orders/{orderNo}/cancel'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{orderNo}', orderNo)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.responseType(() => resultPromise, OrderInfo, 'OrderInfo')
  }

  /**
   * Get user order histories.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=2 (READ)</li><li><i>Returns</i>: get order history</li></ul>
   */
  getHistory_ByUserId_ByOrderNo(userId: string, orderNo: string): Promise<IResponseWithSync<OrderHistoryInfoArray>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/orders/{orderNo}/history'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{orderNo}', orderNo)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, OrderHistoryInfoArray, 'OrderHistoryInfoArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Download user order receipt by orderNo.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=2 (READ)</li><li><i>Returns</i>: order receipt pdf</li></ul>
   */
  getReceiptPdf_ByUserId_ByOrderNo(userId: string, orderNo: string): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/orders/{orderNo}/receipt.pdf'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{orderNo}', orderNo)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
