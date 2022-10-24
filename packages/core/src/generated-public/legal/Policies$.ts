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
import { RetrievePolicyPublicResponseArray } from './definitions/RetrievePolicyPublicResponseArray'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class Policies$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  fetchPublicPoliciesNamespacesByNamespaceCountriesByCountrycode<T = RetrievePolicyPublicResponseArray>(
    countryCode: string,
    queryParams?: {
      policyType?: string | null
      tags?: string | null
      defaultOnEmpty?: boolean | null
      alwaysIncludeDefault?: boolean | null
    }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/agreement/public/policies/namespaces/' + this.namespace + '/countries/' + countryCode + ''
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, RetrievePolicyPublicResponseArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchPublicPoliciesNamespacesByNamespace<T = RetrievePolicyPublicResponseArray>(queryParams?: {
    policyType?: string | null
    tags?: string | null
    defaultOnEmpty?: boolean | null
    alwaysIncludeDefault?: boolean | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/agreement/public/policies/namespaces/' + this.namespace + ''
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, RetrievePolicyPublicResponseArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchPublicPoliciesCountriesByCountrycode<T = RetrievePolicyPublicResponseArray>(
    countryCode: string,
    queryParams?: { policyType?: string | null; tags?: string | null; defaultOnEmpty?: boolean | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/agreement/public/policies/countries/' + countryCode + ''
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, RetrievePolicyPublicResponseArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }
}
