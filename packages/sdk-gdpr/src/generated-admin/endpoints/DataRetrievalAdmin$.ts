/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { DataRetrievalResponse } from '../../generated-definitions/DataRetrievalResponse.js'
import { ListPersonalDataResponse } from '../../generated-definitions/ListPersonalDataResponse.js'
import { UserDataUrl } from '../../generated-definitions/UserDataUrl.js'
import { UserPersonalDataResponse } from '../../generated-definitions/UserPersonalDataResponse.js'

export class DataRetrievalAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get list personal data requests Scope: account
   */
  getRequests(queryParams?: { limit?: number; offset?: number; requestDate?: string | null }): Promise<Response<ListPersonalDataResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/requests'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListPersonalDataResponse,
      'ListPersonalDataResponse'
    )
  }
  /**
   * Get user&#39;s personal data requests Scope: account
   */
  getRequests_ByUserId(userId: string, queryParams?: { limit?: number; offset?: number }): Promise<Response<UserPersonalDataResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/users/{userId}/requests'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserPersonalDataResponse,
      'UserPersonalDataResponse'
    )
  }
  /**
   * Submit user personal data retrieval request. Scope: account ### Request Header: - **Content-Type: application/x-www-form-urlencoded**
   */
  postRequest_ByUserId(userId: string, data: { password?: string | null }): Promise<Response<DataRetrievalResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/users/{userId}/requests'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, DataRetrievalResponse, 'DataRetrievalResponse')
  }
  /**
   * Cancel user&#39;s personal data requests Scope: account
   */
  deleteRequest_ByUserId_ByRequestDate(userId: string, requestDate: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/users/{userId}/requests/{requestDate}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{requestDate}', requestDate)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Generate personal data download url. Scope: account ### Request Header: - **Content-Type: application/x-www-form-urlencoded**
   */
  postGenerate_ByUserId_ByRequestDate(
    userId: string,
    requestDate: string,
    data: { password: string | null }
  ): Promise<Response<UserDataUrl>> {
    const params = {} as AxiosRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/users/{userId}/requests/{requestDate}/generate'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{requestDate}', requestDate)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UserDataUrl, 'UserDataUrl')
  }
}
