/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { OrderCreate } from '../definitions/OrderCreate.js'
import { OrderHistoryInfoArray } from '../definitions/OrderHistoryInfoArray.js'
import { OrderInfo } from '../definitions/OrderInfo.js'
import { OrderPagingSlicedResult } from '../definitions/OrderPagingSlicedResult.js'

export class Order$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Query user orders.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ORDER&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: get order&lt;/li&gt;&lt;/ul&gt;
   */
  getOrders_ByUserId(
    userId: string,
    queryParams?: {
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
   * Create an order. The result contains the checkout link and payment token. User with permission SANDBOX will create sandbox order that not real paid for xsolla/alipay and not validate price for wxpay.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ORDER&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission(user with this permission will create sandbox order)&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;It will be forbidden while the user is banned: ORDER_INITIATE or ORDER_AND_PAYMENT&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created order&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for ext field&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
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
   * Get user order.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ORDER&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: get order&lt;/li&gt;&lt;/ul&gt;
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
   * Cancel user order.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ORDER&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: cancelled order&lt;/li&gt;&lt;/ul&gt;
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
   * Get user order histories.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ORDER&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: get order history&lt;/li&gt;&lt;/ul&gt;
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
   * Download user order receipt by orderNo.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ORDER&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: order receipt pdf&lt;/li&gt;&lt;/ul&gt;
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
