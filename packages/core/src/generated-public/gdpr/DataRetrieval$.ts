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
import { DataRetrievalResponse } from './definitions/DataRetrievalResponse'
import { UserDataUrl } from './definitions/UserDataUrl'
/* eslint-disable camelcase */
import { UserPersonalDataResponse } from './definitions/UserPersonalDataResponse'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class DataRetrieval$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  fetchGdprUsersByUseridRequests<T = UserPersonalDataResponse>(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/gdpr/public/namespaces/' + this.namespace + '/users/' + userId + '/requests'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, UserPersonalDataResponse)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  postGdprUsersByUseridRequests<T = DataRetrievalResponse>(userId: string, data: { password: string | null }): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/namespaces/' + this.namespace + '/users/' + userId + '/requests'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => {
      return resultPromise
    }, DataRetrievalResponse)
  }

  deleteGdprUsersByUseridRequestsByRequestdate(userId: string, requestDate: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/namespaces/' + this.namespace + '/users/' + userId + '/requests/' + requestDate + ''
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  postGdprUsersByUseridRequestsByRequestdateGenerate<T = UserDataUrl>(
    userId: string,
    requestDate: string,
    data: { password: string | null }
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/gdpr/public/namespaces/' + this.namespace + '/users/' + userId + '/requests/' + requestDate + '/generate'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => {
      return resultPromise
    }, UserDataUrl)
  }
}
