/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
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
   * &lt;p&gt;Requires valid user access token&lt;/p&gt;
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
   * &lt;p&gt;Available Type: &lt;/p&gt; &lt;ul&gt; &lt;li&gt;email&lt;/li&gt; &lt;li&gt;password&lt;/li&gt; &lt;li&gt;displayname&lt;/li&gt; &lt;li&gt;dateofbirth&lt;/li&gt; &lt;li&gt;country&lt;/li&gt; &lt;li&gt;language&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Requires a valid user access token&lt;/p&gt;
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
