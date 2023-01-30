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
import { DeletionStatus } from './definitions/DeletionStatus'
import { RequestDeleteResponse } from './definitions/RequestDeleteResponse'

export class DataDeletion$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * <p>Requires valid user access token and password
   */
  postGdprUsersByUseridDeletions<T = RequestDeleteResponse>(userId: string, data: { password: string | null }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/namespaces/{namespace}/users/{userId}/deletions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, RequestDeleteResponse)
  }

  /**
   * <p>Requires valid user access token</p>
   */
  deleteGdprUsersByUseridDeletions(userId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/namespaces/{namespace}/users/{userId}/deletions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown())
  }

  /**
   * <p>Requires valid user access token</p>
   */
  fetchGdprUsersByUseridDeletionsStatus<T = DeletionStatus>(userId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/namespaces/{namespace}/users/{userId}/deletions/status'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, DeletionStatus)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
