/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { CodeGenUtil } from '@accelbyte/sdk/utils/CodeGenUtil'
import { SdkCache } from '@accelbyte/sdk/utils/SdkCache'
import { IResponseWithSync, Validate } from '@accelbyte/sdk/utils/Validate'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { CountryObjectArray } from './definitions/CountryObjectArray'
/* eslint-disable camelcase */
import { RetrieveTimeResponse } from './definitions/RetrieveTimeResponse'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class Misc$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Get server time
   */
  fetchV1PublicMiscTime<T = RetrieveTimeResponse>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/misc/time'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RetrieveTimeResponse)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * List time zones.<br>Other detail info: <ul><li><i>Returns</i>: time zones</li></ul>
   */
  fetchV1MiscTimezones(): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/misc/timezones'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown())

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * List languages.<br>Other detail info: <ul><li><i>Returns</i>: language list</li></ul>
   */
  fetchV1MiscLanguages(): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/misc/languages'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown())

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * List countries.<br>Other detail info: <ul><li><i>Returns</i>: country code list</li></ul>
   */
  fetchV1MiscCountries<T = CountryObjectArray>(queryParams?: { lang?: string | null }): Promise<IResponseWithSync<T>> {
    const params = { lang: 'en', ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/misc/countries'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, CountryObjectArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }
}
