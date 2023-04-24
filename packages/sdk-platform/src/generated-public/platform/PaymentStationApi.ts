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
import { PaymentMethodArray } from './definitions/PaymentMethodArray'
import { PaymentOrderDetails } from './definitions/PaymentOrderDetails'
import { PaymentOrderPaidResult } from './definitions/PaymentOrderPaidResult'
import { PaymentProcessResult } from './definitions/PaymentProcessResult'
import { PaymentStation$ } from './endpoints/PaymentStation$'
import { PaymentToken } from './definitions/PaymentToken'
import { PaymentUrl } from './definitions/PaymentUrl'
import { PaymentUrlCreate } from './definitions/PaymentUrlCreate'
import { TaxResult } from './definitions/TaxResult'

export function PaymentStationApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Check and get a payment order's should pay tax.<br>Other detail info: <ul><li><i>Returns</i>: tax result</li></ul>
   */
  async function getPaymentTax(queryParams: {
    paymentProvider: 'WALLET' | 'XSOLLA' | 'ADYEN' | 'STRIPE' | 'CHECKOUT' | 'ALIPAY' | 'WXPAY' | 'PAYPAL'
    paymentOrderNo: string | null
    zipCode?: string | null
  }): Promise<TaxResult> {
    const $ = new PaymentStation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPaymentTax(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get payment url.<br>Other detail info: <ul><li><i>Returns</i>: Get payment link</li></ul>
   */
  async function createPaymentLink(data: PaymentUrlCreate): Promise<PaymentUrl> {
    const $ = new PaymentStation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createPaymentLink(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get qrcode.<br>Other detail info: <ul><li><i>Returns</i>: QRCode image stream</li></ul>
   */
  async function getPaymentQrcode(queryParams: { code: string | null }): Promise<unknown> {
    const $ = new PaymentStation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPaymentQrcode(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get payment methods.<br>Other detail info: <ul><li><i>Returns</i>: Payment method list</li></ul>
   */
  async function getPaymentMethods(queryParams: { paymentOrderNo: string | null }): Promise<PaymentMethodArray> {
    const $ = new PaymentStation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPaymentMethods(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Normalize payment return url for payment provider<br>Payment response: <table><tr><td>Field</td><td>Type</td><td>Required</td><td>Description</td></tr><tr><td>orderNo</td><td>String</td><td>Yes</td><td>order no</td></tr><tr><td>paymentStatus</td><td>String</td><td>Yes</td><td><ul><li>DONE: The payment was successfully completed.</li><li>CANCELLED: The payment was cancelled by the shopper before completion, or the shopper returned to the merchant's site before completing the transaction.</li><li>PENDING: Inform the shopper that you've received their order, and are waiting for the payment to be completed. When the shopper has completed the payment you will receive a successful AUTHORISATION.</li><li>RECEIVED: Inform the shopper that you've received their order, and are waiting for the payment to clear.</li><li>UNKNOWN: An error occurred during the payment processing.</li><li>FAILED: Shopper paid failed because of various reasons.</li></ul></td></tr><tr><td>reason</td><td>String</td><td>No</td><td>payment status reason</td></tr></table>Other detail info: <ul><li><i>xsolla</i>: parameters 'user_id', 'foreinginvoice', 'invoice_id' and 'status' will be automatically added to the link</li><li><i>adyen</i>: https://docs.adyen.com/developers/checkout/web-sdk</li></ul>
   */
  async function getPaymentReturnurl(queryParams: {
    returnUrl: string | null
    orderNo: string | null
    paymentOrderNo: string | null
    paymentProvider: 'WALLET' | 'XSOLLA' | 'ADYEN' | 'STRIPE' | 'CHECKOUT' | 'ALIPAY' | 'WXPAY' | 'PAYPAL'
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
  }): Promise<unknown> {
    const $ = new PaymentStation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPaymentReturnurl(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get payment provider public config, at current only Strip provide public config.<br>Other detail info: <ul><li><i>Returns</i>: Public config</li></ul>
   */
  async function getPaymentPublicconfig(queryParams: {
    paymentProvider: 'WALLET' | 'XSOLLA' | 'ADYEN' | 'STRIPE' | 'CHECKOUT' | 'ALIPAY' | 'WXPAY' | 'PAYPAL'
    region: string | null
    sandbox?: boolean | null
  }): Promise<unknown> {
    const $ = new PaymentStation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPaymentPublicconfig(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Do payment(For now, this only support checkout.com).<br>Other detail info: <ul><li><i>Returns</i>: Payment process result</li></ul>
   */
  async function createPayPayment_ByPaymentOrderNo(
    paymentOrderNo: string,
    data: PaymentToken,
    queryParams?: {
      paymentProvider?: 'WALLET' | 'XSOLLA' | 'ADYEN' | 'STRIPE' | 'CHECKOUT' | 'ALIPAY' | 'WXPAY' | 'PAYPAL'
      zipCode?: string | null
    }
  ): Promise<PaymentProcessResult> {
    const $ = new PaymentStation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createPayPayment_ByPaymentOrderNo(paymentOrderNo, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get payment order info.<br>Other detail info: <ul><li><i>Returns</i>: Payment order details</li></ul>
   */
  async function getInfoPayment_ByPaymentOrderNo(paymentOrderNo: string): Promise<PaymentOrderDetails> {
    const $ = new PaymentStation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getInfoPayment_ByPaymentOrderNo(paymentOrderNo)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Check payment order paid status.<br>Other detail info: <ul><li><i>Returns</i>: Payment order paid result</li></ul>
   */
  async function getStatusPayment_ByPaymentOrderNo(paymentOrderNo: string): Promise<PaymentOrderPaidResult> {
    const $ = new PaymentStation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getStatusPayment_ByPaymentOrderNo(paymentOrderNo)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getPaymentTax,
    createPaymentLink,
    getPaymentQrcode,
    getPaymentMethods,
    getPaymentReturnurl,
    getPaymentPublicconfig,
    createPayPayment_ByPaymentOrderNo,
    getInfoPayment_ByPaymentOrderNo,
    getStatusPayment_ByPaymentOrderNo
  }
}
