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
import { PaymentMethodArray } from './definitions/PaymentMethodArray.js'
import { PaymentOrderDetails } from './definitions/PaymentOrderDetails.js'
import { PaymentOrderPaidResult } from './definitions/PaymentOrderPaidResult.js'
import { PaymentProcessResult } from './definitions/PaymentProcessResult.js'
import { PaymentStation$ } from './endpoints/PaymentStation$.js'
import { PaymentToken } from './definitions/PaymentToken.js'
import { PaymentUrl } from './definitions/PaymentUrl.js'
import { PaymentUrlCreate } from './definitions/PaymentUrlCreate.js'
import { TaxResult } from './definitions/TaxResult.js'

export function PaymentStationApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Check and get a payment order&#39;s should pay tax.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: tax result&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPaymentTax(queryParams: {
    paymentOrderNo: string | null
    paymentProvider: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA'
    zipCode?: string | null
  }): Promise<TaxResult> {
    const $ = new PaymentStation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPaymentTax(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get payment url.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Get payment link&lt;/li&gt;&lt;/ul&gt;
   */
  async function createPaymentLink(data: PaymentUrlCreate): Promise<PaymentUrl> {
    const $ = new PaymentStation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createPaymentLink(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get qrcode.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: QRCode image stream&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPaymentQrcode(queryParams: { code: string | null }): Promise<unknown> {
    const $ = new PaymentStation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPaymentQrcode(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get payment methods.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment method list&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPaymentMethods(queryParams: { paymentOrderNo: string | null }): Promise<PaymentMethodArray> {
    const $ = new PaymentStation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPaymentMethods(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Normalize payment return url for payment provider&lt;br&gt;Payment response: &lt;table&gt;&lt;tr&gt;&lt;td&gt;Field&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;orderNo&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;order no&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;paymentStatus&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;&lt;ul&gt;&lt;li&gt;DONE: The payment was successfully completed.&lt;/li&gt;&lt;li&gt;CANCELLED: The payment was cancelled by the shopper before completion, or the shopper returned to the merchant&#39;s site before completing the transaction.&lt;/li&gt;&lt;li&gt;PENDING: Inform the shopper that you&#39;ve received their order, and are waiting for the payment to be completed. When the shopper has completed the payment you will receive a successful AUTHORISATION.&lt;/li&gt;&lt;li&gt;RECEIVED: Inform the shopper that you&#39;ve received their order, and are waiting for the payment to clear.&lt;/li&gt;&lt;li&gt;UNKNOWN: An error occurred during the payment processing.&lt;/li&gt;&lt;li&gt;FAILED: Shopper paid failed because of various reasons.&lt;/li&gt;&lt;/ul&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;reason&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;payment status reason&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;xsolla&lt;/i&gt;: parameters &#39;user_id&#39;, &#39;foreinginvoice&#39;, &#39;invoice_id&#39; and &#39;status&#39; will be automatically added to the link&lt;/li&gt;&lt;li&gt;&lt;i&gt;adyen&lt;/i&gt;: https://docs.adyen.com/developers/checkout/web-sdk&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPaymentReturnurl(queryParams: {
    orderNo: string | null
    paymentOrderNo: string | null
    paymentProvider: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA'
    returnUrl: string | null
    PayerID?: string | null
    foreinginvoice?: string | null
    invoice_id?: string | null
    payload?: string | null
    redirectResult?: string | null
    resultCode?: string | null
    sessionId?: string | null
    status?: string | null
    token?: string | null
    type?: string | null
    user_id?: string | null
  }): Promise<unknown> {
    const $ = new PaymentStation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPaymentReturnurl(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get payment provider public config, at current only Strip provide public config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Public config&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPaymentPublicconfig(queryParams: {
    paymentProvider: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA'
    region: string | null
    sandbox?: boolean | null
  }): Promise<unknown> {
    const $ = new PaymentStation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPaymentPublicconfig(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Do payment(For now, this only support checkout.com).&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment process result&lt;/li&gt;&lt;/ul&gt;
   */
  async function createPayPayment_ByPaymentOrderNo(
    paymentOrderNo: string,
    data: PaymentToken,
    queryParams?: {
      paymentProvider?: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA'
      zipCode?: string | null
    }
  ): Promise<PaymentProcessResult> {
    const $ = new PaymentStation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createPayPayment_ByPaymentOrderNo(paymentOrderNo, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get payment order info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment order details&lt;/li&gt;&lt;/ul&gt;
   */
  async function getInfoPayment_ByPaymentOrderNo(paymentOrderNo: string): Promise<PaymentOrderDetails> {
    const $ = new PaymentStation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getInfoPayment_ByPaymentOrderNo(paymentOrderNo)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Check payment order paid status.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment order paid result&lt;/li&gt;&lt;/ul&gt;
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
