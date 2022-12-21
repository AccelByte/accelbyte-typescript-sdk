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
import { NamespaceInfoArray } from './definitions/NamespaceInfoArray'
import { NamespacePublisherInfo } from './definitions/NamespacePublisherInfo'

export class Namespace$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Get namespace info related publisher namespace.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:NAMESPACE"</b>, action=2 <b>(READ)</b></li><li><i>Action code</i>: 11305</li><li><i>Returns</i>: Namespace info related publisher namespace</li></ul>
   */
  fetchV1Publisher<T = NamespacePublisherInfo>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/publisher'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, NamespacePublisherInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get all namespaces.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li><li><i>Action code</i>: 11303</li><li><i>Returns</i>: list of namespaces</li></ul>
   */
  fetchV1PublicNamespaces<T = NamespaceInfoArray>(queryParams?: { activeOnly?: boolean | null }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/public/namespaces'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, NamespaceInfoArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
