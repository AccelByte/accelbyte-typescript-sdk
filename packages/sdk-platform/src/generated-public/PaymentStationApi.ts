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
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { BinarySchema } from '../generated-definitions/BinarySchema.js'
import { Customization } from '../generated-definitions/Customization.js'
import { PaymentMethodArray } from '../generated-definitions/PaymentMethodArray.js'
import { PaymentOrderDetails } from '../generated-definitions/PaymentOrderDetails.js'
import { PaymentOrderPaidResult } from '../generated-definitions/PaymentOrderPaidResult.js'
import { PaymentProcessResult } from '../generated-definitions/PaymentProcessResult.js'
import { PaymentToken } from '../generated-definitions/PaymentToken.js'
import { PaymentUrl } from '../generated-definitions/PaymentUrl.js'
import { PaymentUrlCreate } from '../generated-definitions/PaymentUrlCreate.js'
import { TaxResult } from '../generated-definitions/TaxResult.js'
import { PaymentStation$ } from './endpoints/PaymentStation$.js'

export function PaymentStationApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getPaymentTax(queryParams: {
    paymentOrderNo: string | null
    paymentProvider: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'NEONPAY' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA'
    zipCode?: string | null
  }): Promise<AxiosResponse<TaxResult>> {
    const $ = new PaymentStation$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPaymentTax(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createPaymentLink(data: PaymentUrlCreate): Promise<AxiosResponse<PaymentUrl>> {
    const $ = new PaymentStation$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPaymentLink(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPaymentQrcode(queryParams: { code: string | null }): Promise<AxiosResponse<BinarySchema>> {
    const $ = new PaymentStation$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPaymentQrcode(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPaymentMethods(queryParams: { paymentOrderNo: string | null }): Promise<AxiosResponse<PaymentMethodArray>> {
    const $ = new PaymentStation$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPaymentMethods(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPaymentReturnurl(queryParams: {
    orderNo: string | null
    paymentOrderNo: string | null
    paymentProvider: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'NEONPAY' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA'
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
  }): Promise<AxiosResponse<unknown>> {
    const $ = new PaymentStation$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPaymentReturnurl(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPaymentPublicconfig(queryParams: {
    paymentProvider: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'NEONPAY' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA'
    region: string | null
    sandbox?: boolean | null
  }): Promise<AxiosResponse<unknown>> {
    const $ = new PaymentStation$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPaymentPublicconfig(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPaymentCustomization(queryParams: {
    paymentProvider: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'NEONPAY' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA'
    region: string | null
    sandbox?: boolean | null
  }): Promise<AxiosResponse<Customization>> {
    const $ = new PaymentStation$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPaymentCustomization(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createPayPayment_ByPaymentOrderNo(
    paymentOrderNo: string,
    data: PaymentToken,
    queryParams?: {
      paymentProvider?: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'NEONPAY' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA'
      zipCode?: string | null
    }
  ): Promise<AxiosResponse<PaymentProcessResult>> {
    const $ = new PaymentStation$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPayPayment_ByPaymentOrderNo(paymentOrderNo, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getInfoPayment_ByPaymentOrderNo(paymentOrderNo: string): Promise<AxiosResponse<PaymentOrderDetails>> {
    const $ = new PaymentStation$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInfoPayment_ByPaymentOrderNo(paymentOrderNo)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStatusPayment_ByPaymentOrderNo(paymentOrderNo: string): Promise<AxiosResponse<PaymentOrderPaidResult>> {
    const $ = new PaymentStation$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatusPayment_ByPaymentOrderNo(paymentOrderNo)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Check and get a payment order&#39;s should pay tax.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: tax result&lt;/li&gt;&lt;/ul&gt;
     */
    getPaymentTax,
    /**
     * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment url.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;For Neon Pay payment provider, the &#39;neonPayConfig&#39; field can be used to provide success and cancel URL. If &#39;neonPayConfig&#39; field is not present, the &#39;returnUrl&#39; will be used for both success and cancel URL.&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Get payment link&lt;/li&gt;&lt;/ul&gt;
     */
    createPaymentLink,
    /**
     * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get qrcode.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: QRCode image stream&lt;/li&gt;&lt;/ul&gt;
     */
    getPaymentQrcode,
    /**
     * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment methods.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment method list&lt;/li&gt;&lt;/ul&gt;
     */
    getPaymentMethods,
    /**
     * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Normalize payment return url for payment provider&lt;br&gt;Payment response: &lt;table&gt;&lt;tr&gt;&lt;td&gt;Field&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;orderNo&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;order no&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;paymentStatus&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;&lt;ul&gt;&lt;li&gt;DONE: The payment was successfully completed.&lt;/li&gt;&lt;li&gt;CANCELLED: The payment was cancelled by the shopper before completion, or the shopper returned to the merchant&#39;s site before completing the transaction.&lt;/li&gt;&lt;li&gt;PENDING: Inform the shopper that you&#39;ve received their order, and are waiting for the payment to be completed. When the shopper has completed the payment you will receive a successful AUTHORISATION.&lt;/li&gt;&lt;li&gt;RECEIVED: Inform the shopper that you&#39;ve received their order, and are waiting for the payment to clear.&lt;/li&gt;&lt;li&gt;UNKNOWN: An error occurred during the payment processing.&lt;/li&gt;&lt;li&gt;FAILED: Shopper paid failed because of various reasons.&lt;/li&gt;&lt;/ul&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;reason&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;payment status reason&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;xsolla&lt;/i&gt;: parameters &#39;user_id&#39;, &#39;foreinginvoice&#39;, &#39;invoice_id&#39; and &#39;status&#39; will be automatically added to the link&lt;/li&gt;&lt;li&gt;&lt;i&gt;adyen&lt;/i&gt;: https://docs.adyen.com/developers/checkout/web-sdk&lt;/li&gt;&lt;/ul&gt;
     */
    getPaymentReturnurl,
    /**
     * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment provider public config, at current only Strip provide public config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Public config&lt;/li&gt;&lt;/ul&gt;
     */
    getPaymentPublicconfig,
    /**
     * @deprecated
     * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment provider customization, at current only Adyen provide customization. This api has been deprecated, pls use /public/namespaces/{namespace}/payment/publicconfig to get adyen config&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: customization&lt;/li&gt;&lt;/ul&gt;
     */
    getPaymentCustomization,
    /**
     * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Do payment(For now, this only support checkout.com).&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment process result&lt;/li&gt;&lt;/ul&gt;
     */
    createPayPayment_ByPaymentOrderNo,
    /**
     * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment order info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment order details&lt;/li&gt;&lt;/ul&gt;
     */
    getInfoPayment_ByPaymentOrderNo,
    /**
     * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Check payment order paid status.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment order paid result&lt;/li&gt;&lt;/ul&gt;
     */
    getStatusPayment_ByPaymentOrderNo
  }
}
