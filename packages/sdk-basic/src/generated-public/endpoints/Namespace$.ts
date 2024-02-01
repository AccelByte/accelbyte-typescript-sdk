/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { NamespaceInfoArray } from '../../generated-definitions/NamespaceInfoArray.js'
import { NamespacePublisherInfo } from '../../generated-definitions/NamespacePublisherInfo.js'

export class Namespace$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Get all namespaces.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11303&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of namespaces&lt;/li&gt;&lt;/ul&gt;
   */
  getNamespaces(queryParams?: { activeOnly?: boolean | null }): Promise<IResponseWithSync<NamespaceInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/public/namespaces'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, NamespaceInfoArray, 'NamespaceInfoArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get namespace info related publisher namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;NAMESPACE:{namespace}:NAMESPACE&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11305&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Namespace info related publisher namespace&lt;/li&gt;&lt;/ul&gt;
   */
  getPublisher(): Promise<IResponseWithSync<NamespacePublisherInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/publisher'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, NamespacePublisherInfo, 'NamespacePublisherInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
