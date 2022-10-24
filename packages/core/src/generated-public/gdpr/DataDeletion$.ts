/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { CodeGenUtil } from '@od-web-sdk/utils/CodeGenUtil'
import { SdkCache } from '@od-web-sdk/utils/SdkCache'
import { IResponse, IResponseWithSync, Validate } from '@od-web-sdk/utils/Validate'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { DeletionStatus } from './definitions/DeletionStatus'
/* eslint-disable camelcase */
import { RequestDeleteResponse } from './definitions/RequestDeleteResponse'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class DataDeletion$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  postGdprUsersByUseridDeletions<T = RequestDeleteResponse>(userId: string, data: { password: string | null }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/namespaces/' + this.namespace + '/users/' + userId + '/deletions'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => {
      return resultPromise
    }, RequestDeleteResponse)
  }

  deleteGdprUsersByUseridDeletions(userId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/namespaces/' + this.namespace + '/users/' + userId + '/deletions'
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  fetchGdprUsersByUseridDeletionsStatus<T = DeletionStatus>(userId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/namespaces/' + this.namespace + '/users/' + userId + '/deletions/status'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, DeletionStatus)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }
}
