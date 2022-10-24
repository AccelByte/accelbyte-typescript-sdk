/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { CodeGenUtil } from '@od-web-sdk/utils/CodeGenUtil'
import { SdkCache } from '@od-web-sdk/utils/SdkCache'
import { IResponseWithSync, Validate } from '@od-web-sdk/utils/Validate'
import { AxiosInstance } from 'axios'
/* eslint-disable camelcase */
import { CurrencyInfoArray } from './definitions/CurrencyInfoArray'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class Currency$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  fetchCurrencies<T = CurrencyInfoArray>(queryParams?: { currencyType?: string | null }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/currencies'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, CurrencyInfoArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }
}
