/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { DeletionStatus } from '../definitions/DeletionStatus.js'
import { RequestDeleteResponse } from '../definitions/RequestDeleteResponse.js'

export class DataDeletion$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * &lt;p&gt;Requires valid user access token&lt;br&gt; This is for in-game only and require a valid platformId and platform token. If a full account is not logged by 3rd platform, then please use &lt;a href=&#39;#operations-Data_Deletion-PublicSubmitUserAccountDeletionRequest&#39;&gt;/gdpr/public/namespaces/{namespace}/users/{userId}/deletions&lt;/a&gt;
   */
  postUserMeDeletion(data: { platformId: string | null; platformToken: string | null }): Promise<IResponse<RequestDeleteResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/users/me/deletions'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, RequestDeleteResponse, 'RequestDeleteResponse')
  }

  /**
   * &lt;p&gt;Requires valid user access token&lt;/p&gt;
   */
  deleteDeletion_ByUserId(userId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/namespaces/{namespace}/users/{userId}/deletions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * &lt;p&gt;Requires valid user access token and password
   */
  postDeletion_ByUserId(userId: string, data: { password: string | null }): Promise<IResponse<RequestDeleteResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/namespaces/{namespace}/users/{userId}/deletions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, RequestDeleteResponse, 'RequestDeleteResponse')
  }

  /**
   * &lt;p&gt;Requires valid user access token&lt;/p&gt;
   */
  getDeletionsStatus_ByUserId(userId: string): Promise<IResponseWithSync<DeletionStatus>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/namespaces/{namespace}/users/{userId}/deletions/status'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, DeletionStatus, 'DeletionStatus')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
