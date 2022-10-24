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
/* eslint-disable camelcase */
import { PaymentAccountArray } from './definitions/PaymentAccountArray'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class PaymentAccount$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  fetchUsersByUseridPaymentAccounts<T = PaymentAccountArray>(userId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/payment/accounts'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, PaymentAccountArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  deleteUsersByUseridPaymentAccountsByTypeById(userId: string, type: string, id: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/payment/accounts/' + type + '/' + id + ''
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }
}
