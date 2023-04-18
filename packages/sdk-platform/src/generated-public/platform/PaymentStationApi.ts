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

  async function createPaymentLink(data: PaymentUrlCreate): Promise<PaymentUrl> {
    const $ = new PaymentStation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createPaymentLink(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getPaymentQrcode(queryParams: { code: string | null }): Promise<unknown> {
    const $ = new PaymentStation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPaymentQrcode(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getPaymentMethods(queryParams: { paymentOrderNo: string | null }): Promise<PaymentMethodArray> {
    const $ = new PaymentStation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPaymentMethods(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

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

  async function getInfoPayment_ByPaymentOrderNo(paymentOrderNo: string): Promise<PaymentOrderDetails> {
    const $ = new PaymentStation$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getInfoPayment_ByPaymentOrderNo(paymentOrderNo)
    if (resp.error) throw resp.error
    return resp.response.data
  }

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
