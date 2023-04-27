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
import { PaymentAccountArray } from '../definitions/PaymentAccountArray.js'

export class PaymentAccount$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Get payment accounts.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:PAYMENT:ACCOUNT", action=2 (READ)</li><li><i>Returns</i>: Payment account list</li></ul>
   */
  getPaymentAccounts_ByUserId(userId: string): Promise<IResponseWithSync<PaymentAccountArray>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/payment/accounts'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PaymentAccountArray, 'PaymentAccountArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Delete payment account.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:PAYMENT:ACCOUNT", action=8 (DELETE)</li><li><i>Returns</i>:</li></ul>
   */
  deletePaymentAccount_ByUserId_ByType_ById(userId: string, type: string, id: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/payment/accounts/{type}/{id}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{type}', type)
      .replace('{id}', id)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
