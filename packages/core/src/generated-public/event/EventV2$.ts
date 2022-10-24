/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { CodeGenUtil } from '@od-web-sdk/utils/CodeGenUtil'
import { SdkCache } from '@od-web-sdk/utils/SdkCache'
import { IResponseWithSync, Validate } from '@od-web-sdk/utils/Validate'
import { AxiosInstance } from 'axios'
/* eslint-disable camelcase */
import { EventResponseV2 } from './definitions/EventResponseV2'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class EventV2$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  fetchEventV2UsersByUseridEdithistory<T = EventResponseV2>(
    userId: string,
    queryParams?: {
      pageSize?: number | null
      startDate?: string | null
      endDate?: string | null
      offset?: number | null
      type?: string | null
    }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/v2/public/namespaces/' + this.namespace + '/users/' + userId + '/edithistory'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, EventResponseV2)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchEventV2UsersByUseridEvent<T = EventResponseV2>(
    userId: string,
    queryParams?: {
      pageSize?: number | null
      startDate?: string | null
      endDate?: string | null
      offset?: number | null
      eventName?: string | null
    }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/v2/public/namespaces/' + this.namespace + '/users/' + userId + '/event'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, EventResponseV2)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }
}
