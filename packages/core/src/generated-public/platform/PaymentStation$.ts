/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { CodeGenUtil } from '@od-web-sdk/utils/CodeGenUtil'
import { SdkCache } from '@od-web-sdk/utils/SdkCache'
import { IResponse, IResponseWithSync, Validate } from '@od-web-sdk/utils/Validate'
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
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  fetchPaymentOrdersByPaymentordernoStatus<T = PaymentOrderPaidResult>(paymentOrderNo: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/payment/orders/' + paymentOrderNo + '/status'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, PaymentOrderPaidResult)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchPaymentTax<T = TaxResult>(queryParams?: {
    paymentProvider: string | null
    paymentOrderNo: string | null
    zipCode?: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/payment/tax'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, TaxResult)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  postPaymentOrdersByPaymentordernoPay<T = PaymentProcessResult>(
    paymentOrderNo: string,
    data: PaymentToken,
    queryParams?: { paymentProvider?: string | null; zipCode?: string | null }
  ): Promise<IResponse<T>> {
    const params = { paymentProvider: 'CHECKOUT', ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/payment/orders/' + paymentOrderNo + '/pay'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, PaymentProcessResult)
  }

  fetchPaymentPublicconfig(queryParams?: {
    paymentProvider: string | null
    region: string | null
    sandbox?: boolean | null
  }): Promise<IResponseWithSync<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/payment/publicconfig'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, z.unknown())

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

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
    const url = '/platform/public/namespaces/' + this.namespace + '/payment/returnurl'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, z.unknown())

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchPaymentMethods<T = PaymentMethodArray>(queryParams?: { paymentOrderNo: string | null }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/payment/methods'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, PaymentMethodArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchPaymentOrdersByPaymentordernoInfo<T = PaymentOrderDetails>(paymentOrderNo: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/payment/orders/' + paymentOrderNo + '/info'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, PaymentOrderDetails)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchPaymentQrcode(queryParams?: { code: string | null }): Promise<IResponseWithSync<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/payment/qrcode'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, z.unknown())

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  postPaymentLink<T = PaymentUrl>(data: PaymentUrlCreate): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/payment/link'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, PaymentUrl)
  }
}
