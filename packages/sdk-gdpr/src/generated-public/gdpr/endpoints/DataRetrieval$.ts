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
import { DataRetrievalResponse } from '../definitions/DataRetrievalResponse.js'
import { UserDataUrl } from '../definitions/UserDataUrl.js'
import { UserPersonalDataResponse } from '../definitions/UserPersonalDataResponse.js'

export class DataRetrieval$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * &lt;p&gt;Requires valid user access token&lt;/p&gt;
   */
  getRequests_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<UserPersonalDataResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/gdpr/public/namespaces/{namespace}/users/{userId}/requests'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserPersonalDataResponse, 'UserPersonalDataResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Requires valid user access token&lt;/p&gt;
   */
  postRequest_ByUserId(userId: string, data: { password: string | null }): Promise<IResponse<DataRetrievalResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/namespaces/{namespace}/users/{userId}/requests'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, DataRetrievalResponse, 'DataRetrievalResponse')
  }

  /**
   * &lt;p&gt;Requires valid user access token&lt;/p&gt;
   */
  deleteRequest_ByUserId_ByRequestDate(userId: string, requestDate: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/namespaces/{namespace}/users/{userId}/requests/{requestDate}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{requestDate}', requestDate)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * &lt;p&gt;Requires valid user access token&lt;/p&gt;
   */
  postGenerate_ByUserId_ByRequestDate(
    userId: string,
    requestDate: string,
    data: { password: string | null }
  ): Promise<IResponse<UserDataUrl>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/namespaces/{namespace}/users/{userId}/requests/{requestDate}/generate'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{requestDate}', requestDate)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, UserDataUrl, 'UserDataUrl')
  }
}
