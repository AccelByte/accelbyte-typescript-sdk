/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { CountryObjectArray } from '../definitions/CountryObjectArray.js'
import { RetrieveTimeResponse } from '../definitions/RetrieveTimeResponse.js'

export class Misc$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Get server time
   */
  getMiscTime(): Promise<IResponseWithSync<RetrieveTimeResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/misc/time'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RetrieveTimeResponse, 'RetrieveTimeResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * List countries.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: country code list&lt;/li&gt;&lt;/ul&gt;
   */
  getMiscCountries(queryParams?: { lang?: string | null }): Promise<IResponseWithSync<CountryObjectArray>> {
    const params = { lang: 'en', ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/misc/countries'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, CountryObjectArray, 'CountryObjectArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * List languages.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: language list&lt;/li&gt;&lt;/ul&gt;
   */
  getMiscLanguages(): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/misc/languages'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * List time zones.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: time zones&lt;/li&gt;&lt;/ul&gt;
   */
  getMiscTimezones(): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/misc/timezones'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
