/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { PaymentAccountArray } from '../../generated-definitions/PaymentAccountArray.js'

export class PaymentAccount$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment accounts.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment account list&lt;/li&gt;&lt;/ul&gt;
   */
  getPaymentAccounts_ByUserId(userId: string): Promise<Response<PaymentAccountArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/payment/accounts'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PaymentAccountArray, 'PaymentAccountArray')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Delete payment account.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;:&lt;/li&gt;&lt;/ul&gt;
   */
  deletePaymentAccount_ByUserId_ByType_ById(userId: string, type: string, id: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/payment/accounts/{type}/{id}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{type}', type)
      .replace('{id}', id)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
