/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { CodeGenUtil } from '@accelbyte/sdk/utils/CodeGenUtil'
import { SdkCache } from '@accelbyte/sdk/utils/SdkCache'
import { IResponse, IResponseWithSync, Validate } from '@accelbyte/sdk/utils/Validate'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { PaymentMethodArray } from './definitions/PaymentMethodArray'
import { PaymentOrderDetails } from './definitions/PaymentOrderDetails'
import { PaymentOrderPaidResult } from './definitions/PaymentOrderPaidResult'
import { PaymentProcessResult } from './definitions/PaymentProcessResult'
import { PaymentToken } from './definitions/PaymentToken'
import { PaymentUrl } from './definitions/PaymentUrl'
/* eslint-disable camelcase */
import { PaymentUrlCreate } from './definitions/PaymentUrlCreate'
import { TaxResult } from './definitions/TaxResult'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class PaymentStation$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Check payment order paid status.<br>Other detail info: <ul><li><i>Returns</i>: Payment order paid result</li></ul>
   */
  fetchPaymentOrdersByPaymentordernoStatus<T = PaymentOrderPaidResult>(paymentOrderNo: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/payment/orders/{paymentOrderNo}/status'
      .replace('{namespace}', this.namespace)
      .replace('{paymentOrderNo}', paymentOrderNo)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PaymentOrderPaidResult)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Check and get a payment order's should pay tax.<br>Other detail info: <ul><li><i>Returns</i>: tax result</li></ul>
   */
  fetchPaymentTax<T = TaxResult>(queryParams?: {
    paymentProvider: string | null
    paymentOrderNo: string | null
    zipCode?: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/payment/tax'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, TaxResult)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Do payment(For now, this only support checkout.com).<br>Other detail info: <ul><li><i>Returns</i>: Payment process result</li></ul>
   */
  postPaymentOrdersByPaymentordernoPay<T = PaymentProcessResult>(
    paymentOrderNo: string,
    data: PaymentToken,
    queryParams?: { paymentProvider?: string | null; zipCode?: string | null }
  ): Promise<IResponse<T>> {
    const params = { paymentProvider: 'CHECKOUT', ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/payment/orders/{paymentOrderNo}/pay'
      .replace('{namespace}', this.namespace)
      .replace('{paymentOrderNo}', paymentOrderNo)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, PaymentProcessResult)
  }

  /**
   * Get payment provider public config, at current only Strip provide public config.<br>Other detail info: <ul><li><i>Returns</i>: Public config</li></ul>
   */
  fetchPaymentPublicconfig(queryParams?: {
    paymentProvider: string | null
    region: string | null
    sandbox?: boolean | null
  }): Promise<IResponseWithSync<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/payment/publicconfig'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown())

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Normalize payment return url for payment provider<br>Payment response: <table><tr><td>Field</td><td>Type</td><td>Required</td><td>Description</td></tr><tr><td>orderNo</td><td>String</td><td>Yes</td><td>order no</td></tr><tr><td>paymentStatus</td><td>String</td><td>Yes</td><td><ul><li>DONE: The payment was successfully completed.</li><li>CANCELLED: The payment was cancelled by the shopper before completion, or the shopper returned to the merchant's site before completing the transaction.</li><li>PENDING: Inform the shopper that you've received their order, and are waiting for the payment to be completed.
   *
   * When the shopper has completed the payment you will receive a successful AUTHORISATION.</li><li>RECEIVED: Inform the shopper that you've received their order, and are waiting for the payment to clear.</li><li>UNKNOWN: An error occurred during the payment processing.</li><li>FAILED: Shopper paid failed because of various reasons.</li></ul></td></tr><tr><td>reason</td><td>String</td><td>No</td><td>payment status reason</td></tr></table>Other detail info: <ul><li><i>xsolla</i>: parameters 'user_id', 'foreinginvoice', 'invoice_id' and 'status' will be automatically added to the link</li><li><i>adyen</i>: https://docs.adyen.com/developers/checkout/web-sdk</li></ul>
   */
  fetchPaymentReturnurl(queryParams?: {
    returnUrl: string | null
    orderNo: string | null
    paymentOrderNo: string | null
    paymentProvider: string | null
    user_id?: string | null
    foreinginvoice?: string | null
    invoice_id?: string | null
    status?: string | null
    type?: string | null
    token?: string | null
    PayerID?: string | null
    resultCode?: string | null
    payload?: string | null
    sessionId?: string | null
    redirectResult?: string | null
  }): Promise<IResponseWithSync<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/payment/returnurl'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown())

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Get payment methods.<br>Other detail info: <ul><li><i>Returns</i>: Payment method list</li></ul>
   */
  fetchPaymentMethods<T = PaymentMethodArray>(queryParams?: { paymentOrderNo: string | null }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/payment/methods'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PaymentMethodArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Get payment order info.<br>Other detail info: <ul><li><i>Returns</i>: Payment order details</li></ul>
   */
  fetchPaymentOrdersByPaymentordernoInfo<T = PaymentOrderDetails>(paymentOrderNo: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/payment/orders/{paymentOrderNo}/info'
      .replace('{namespace}', this.namespace)
      .replace('{paymentOrderNo}', paymentOrderNo)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PaymentOrderDetails)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Get qrcode.<br>Other detail info: <ul><li><i>Returns</i>: QRCode image stream</li></ul>
   */
  fetchPaymentQrcode(queryParams?: { code: string | null }): Promise<IResponseWithSync<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/payment/qrcode'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown())

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Get payment url.<br>Other detail info: <ul><li><i>Returns</i>: Get payment link</li></ul>
   */
  postPaymentLink<T = PaymentUrl>(data: PaymentUrlCreate): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/payment/link'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, PaymentUrl)
  }
}
