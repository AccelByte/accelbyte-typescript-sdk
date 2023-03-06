/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { DataRetrievalResponse } from './definitions/DataRetrievalResponse'
import { UserDataUrl } from './definitions/UserDataUrl'
import { UserPersonalDataResponse } from './definitions/UserPersonalDataResponse'

export class DataRetrieval$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * <p>Requires valid user access token</p>
   */
  fetchRequests_ByUserId<T = UserPersonalDataResponse>(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/gdpr/public/namespaces/{namespace}/users/{userId}/requests'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserPersonalDataResponse)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>Requires valid user access token</p>
   */
  postRequest_ByUserId<T = DataRetrievalResponse>(userId: string, data: { password: string | null }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/namespaces/{namespace}/users/{userId}/requests'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, DataRetrievalResponse)
  }

  /**
   * <p>Requires valid user access token</p>
   */
  deleteRequest_ByUserId_ByRequestDate(userId: string, requestDate: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/namespaces/{namespace}/users/{userId}/requests/{requestDate}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{requestDate}', requestDate)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * <p>Requires valid user access token</p>
   */
  postGenerate_ByUserId_ByRequestDate<T = UserDataUrl>(
    userId: string,
    requestDate: string,
    data: { password: string | null }
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/namespaces/{namespace}/users/{userId}/requests/{requestDate}/generate'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{requestDate}', requestDate)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, UserDataUrl)
  }
}
