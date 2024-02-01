/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { CurrencyConfig } from '../../generated-definitions/CurrencyConfig.js'
import { CurrencyCreate } from '../../generated-definitions/CurrencyCreate.js'
import { CurrencyInfo } from '../../generated-definitions/CurrencyInfo.js'
import { CurrencyInfoArray } from '../../generated-definitions/CurrencyInfoArray.js'
import { CurrencySummary } from '../../generated-definitions/CurrencySummary.js'
import { CurrencyUpdate } from '../../generated-definitions/CurrencyUpdate.js'

export class CurrencyAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * List currencies of a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CURRENCY&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Currency List&lt;/li&gt;&lt;/ul&gt;
   */
  getCurrencies(queryParams?: { currencyType?: 'REAL' | 'VIRTUAL' }): Promise<IResponseWithSync<CurrencyInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/currencies'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, CurrencyInfoArray, 'CurrencyInfoArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Create a currency.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CURRENCY&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created currency&lt;/li&gt;&lt;/ul&gt;
   */
  createCurrency(data: CurrencyCreate): Promise<IResponse<CurrencyInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/currencies'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CurrencyInfo, 'CurrencyInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Delete a currency by currency code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CURRENCY&#34;, action=8 (DELETE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  deleteCurrency_ByCurrencyCode(currencyCode: string): Promise<IResponse<CurrencyInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/currencies/{currencyCode}'
      .replace('{namespace}', this.namespace)
      .replace('{currencyCode}', currencyCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CurrencyInfo, 'CurrencyInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Update a currency by currency code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CURRENCY&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated currency&lt;/li&gt;&lt;/ul&gt;
   */
  updateCurrency_ByCurrencyCode(currencyCode: string, data: CurrencyUpdate): Promise<IResponse<CurrencyInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/currencies/{currencyCode}'
      .replace('{namespace}', this.namespace)
      .replace('{currencyCode}', currencyCode)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CurrencyInfo, 'CurrencyInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Get currency config by code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CURRENCY&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: simplified Currency&lt;/li&gt;&lt;/ul&gt;
   */
  getConfig_ByCurrencyCode(currencyCode: string): Promise<IResponseWithSync<CurrencyConfig>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/currencies/{currencyCode}/config'
      .replace('{namespace}', this.namespace)
      .replace('{currencyCode}', currencyCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, CurrencyConfig, 'CurrencyConfig')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get currency summary by code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:CURRENCY&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: simplified Currency&lt;/li&gt;&lt;/ul&gt;
   */
  getSummary_ByCurrencyCode(currencyCode: string): Promise<IResponseWithSync<CurrencySummary>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/currencies/{currencyCode}/summary'
      .replace('{namespace}', this.namespace)
      .replace('{currencyCode}', currencyCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, CurrencySummary, 'CurrencySummary')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
