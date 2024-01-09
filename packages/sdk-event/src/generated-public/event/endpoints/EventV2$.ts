/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { EventResponseV2 } from '../definitions/EventResponseV2.js'

export class EventV2$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Requires valid user access token
   */
  getEvent_ByUserId(
    userId: string,
    queryParams?: { endDate?: string | null; eventName?: string | null; offset?: number; pageSize?: number; startDate?: string | null }
  ): Promise<IResponseWithSync<EventResponseV2>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/v2/public/namespaces/{namespace}/users/{userId}/event'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, EventResponseV2, 'EventResponseV2')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Available Type: * email * password * displayname * dateofbirth * country * language
   */
  getEdithistory_ByUserId(
    userId: string,
    queryParams?: { endDate?: string | null; offset?: number; pageSize?: number; startDate?: string | null; type?: string | null }
  ): Promise<IResponseWithSync<EventResponseV2>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/v2/public/namespaces/{namespace}/users/{userId}/edithistory'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, EventResponseV2, 'EventResponseV2')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
