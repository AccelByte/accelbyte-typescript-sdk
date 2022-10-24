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
import { RetrieveUserEligibilitiesIndirectResponse } from './definitions/RetrieveUserEligibilitiesIndirectResponse'
import { RetrieveUserEligibilitiesResponseArray } from './definitions/RetrieveUserEligibilitiesResponseArray'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class Eligibilities$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  fetchPublicEligibilitiesCountriesByCountrycodeClientsByClientidUsersByUserid<T = RetrieveUserEligibilitiesIndirectResponse>(
    countryCode: string,
    clientId: string,
    userId: string
  ): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url =
      '/agreement/public/eligibilities/namespaces/' +
      this.namespace +
      '/countries/' +
      countryCode +
      '/clients/' +
      clientId +
      '/users/' +
      userId +
      ''
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, RetrieveUserEligibilitiesIndirectResponse)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchPublicEligibilitiesNamespacesByNamespace<T = RetrieveUserEligibilitiesResponseArray>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/public/eligibilities/namespaces/' + this.namespace + ''
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, RetrieveUserEligibilitiesResponseArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }
}
