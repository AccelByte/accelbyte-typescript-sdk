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
import { DeletionData } from '../../generated-definitions/DeletionData.js'
import { ListDeletionDataResponse } from '../../generated-definitions/ListDeletionDataResponse.js'
import { RequestDeleteResponse } from '../../generated-definitions/RequestDeleteResponse.js'

export class DataDeletionAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Retrieve all user&#39;s account deletion requests in specified date Scope: account
   */
  getDeletions(queryParams?: {
    after?: string | null
    before?: string | null
    limit?: number
    offset?: number
    requestDate?: string | null
  }): Promise<IResponseWithSync<ListDeletionDataResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/deletions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ListDeletionDataResponse, 'ListDeletionDataResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Cancel user&#39;s account deletion request Scope: account
   */
  deleteDeletion_ByUserId(userId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/users/{userId}/deletions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Retrieve specific user&#39;s account deletion request Scope: account
   */
  getDeletions_ByUserId(userId: string): Promise<IResponseWithSync<DeletionData>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/users/{userId}/deletions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, DeletionData, 'DeletionData')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Submit user&#39;s account deletion requests Scope: account
   */
  createDeletion_ByUserId(userId: string): Promise<IResponse<RequestDeleteResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/admin/namespaces/{namespace}/users/{userId}/deletions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, RequestDeleteResponse, 'RequestDeleteResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
