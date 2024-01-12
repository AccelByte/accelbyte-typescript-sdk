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
import { z } from 'zod'
import { CountryBlacklistRequest } from '../../generated-definitions/CountryBlacklistRequest.js'
import { CountryBlacklistResponse } from '../../generated-definitions/CountryBlacklistResponse.js'
import { CountryResponseArray } from '../../generated-definitions/CountryResponseArray.js'

export class CountryAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Admin get country list
   */
  getCountries(queryParams?: { filterBlacklist?: boolean | null }): Promise<IResponseWithSync<CountryResponseArray>> {
    const params = { filterBlacklist: true, ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/countries'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, CountryResponseArray, 'CountryResponseArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Admin get country blacklist
   */
  getCountriesBlacklist(): Promise<IResponseWithSync<CountryBlacklistResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/countries/blacklist'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, CountryBlacklistResponse, 'CountryBlacklistResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Admin update country blacklist
   */
  createCountryBlacklist(data: CountryBlacklistRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/countries/blacklist'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
