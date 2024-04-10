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
import { DataRetrievalResponse } from '../../generated-definitions/DataRetrievalResponse.js'
import { UserDataUrl } from '../../generated-definitions/UserDataUrl.js'
import { UserPersonalDataResponse } from '../../generated-definitions/UserPersonalDataResponse.js'

export class DataRetrieval$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Get user&#39;s personal data requests Requires valid user access token Scope: account
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

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, UserPersonalDataResponse, 'UserPersonalDataResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Submit personal data retrieval request. Scope: account
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

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, DataRetrievalResponse, 'DataRetrievalResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Cancel user&#39;s personal data requests Requires valid user access token Scope: account
   */
  deleteRequest_ByUserId_ByRequestDate(userId: string, requestDate: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/namespaces/{namespace}/users/{userId}/requests/{requestDate}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{requestDate}', requestDate)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Generate personal data download url Requires valid user access token Scope: account
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

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UserDataUrl, 'UserDataUrl')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
