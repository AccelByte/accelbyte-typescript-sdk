/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { RetrievePolicyPublicResponseArray } from './definitions/RetrievePolicyPublicResponseArray'

export class Policies$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Retrieve all active latest policies based on a namespace and country.<br>Other detail info: <ul><li><i>Leave the policyType empty if you want to be responded with all policy type</i></li><li><i>Fill the tags if you want to filter the responded policy by tags</i></li><li><i>Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist</i></li><li><i>Fill the alwaysIncludeDefault with true if you want to be responded with always include default policy. If there are duplicate policies (default policies and country specific policies with same base policy) it'll include policy with same country code, for example:<ul><li>Document 1 (default): Region US (default), UA</li><li>Document 2 (default): Region US (default)</li><li>Document 3 (default): Region US (default)</li><li>User: Region UA</li><li>Query: alwaysIncludeDefault: true</li><li>Response: Document 1 (UA), Document 2 (US), Document 3 (US)</li></ul>
   */
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
    const url = '/agreement/public/policies/namespaces/{namespace}/countries/{countryCode}'
      .replace('{namespace}', this.namespace)
      .replace('{countryCode}', countryCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RetrievePolicyPublicResponseArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Retrieve all active latest policies based on a namespace and country. The country will be read from user token.<br>Other detail info: <ul><li><i>Leave the policyType empty if you want to be responded with all policy type</i></li><li><i>Fill the tags if you want to filter the responded policy by tags</i></li><li><i>Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist</i></li><li><i>Fill the alwaysIncludeDefault with true if you want to be responded with always include default policy. If there are duplicate policies (default policies and country specific policies with same base policy) it'll include policy with same country code, for example:<ul><li>Document 1 (default): Region US (default), UA</li><li>Document 2 (default): Region US (default)</li><li>Document 3 (default): Region US (default)</li><li>User: Region UA</li><li>Query: alwaysIncludeDefault: true</li><li>Response: Document 1 (UA), Document 2 (US), Document 3 (US)</li></ul></i></li><li><i>Required permission: login user </i></li></ul>
   */
  fetchPublicPoliciesNamespacesByNamespace<T = RetrievePolicyPublicResponseArray>(queryParams?: {
    policyType?: string | null
    tags?: string | null
    defaultOnEmpty?: boolean | null
    alwaysIncludeDefault?: boolean | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/agreement/public/policies/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RetrievePolicyPublicResponseArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Retrieve all active latest policies based on a country.<br>Other detail info: <ul><li><i>Leave the policyType empty if you want to be responded with all policy type</i></li><li><i>Fill the tags if you want to filter the responded policy by tags</i></li><li><i>Fill the defaultOnEmpty with true if you want to be responded with default country-specific policy if your requested country is not exist</i></li></ul>
   */
  fetchPublicPoliciesCountriesByCountrycode<T = RetrievePolicyPublicResponseArray>(
    countryCode: string,
    queryParams?: { policyType?: string | null; tags?: string | null; defaultOnEmpty?: boolean | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/agreement/public/policies/countries/{countryCode}'.replace('{countryCode}', countryCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RetrievePolicyPublicResponseArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }
}
