/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { EventResponseV2 } from './definitions/EventResponseV2'

export class EventV2$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * <p>Available Type: </p>
   * 			<ul>
   * 				<li>email</li>
   * 				<li>password</li>
   * 				<li>displayname</li>
   * 				<li>dateofbirth</li>
   * 				<li>country</li>
   * 				<li>language</li>
   * 			</ul>
   * 			<p>Requires a valid user access token</p>
   */
  fetchEventV2UsersByUseridEdithistory<T = EventResponseV2>(
    userId: string,
    queryParams?: { pageSize?: number; startDate?: string | null; endDate?: string | null; offset?: number; type?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/v2/public/namespaces/{namespace}/users/{userId}/edithistory'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, EventResponseV2)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>Requires valid user access token</p>
   */
  fetchEventV2UsersByUseridEvent<T = EventResponseV2>(
    userId: string,
    queryParams?: { pageSize?: number; startDate?: string | null; endDate?: string | null; offset?: number; eventName?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/event/v2/public/namespaces/{namespace}/users/{userId}/event'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, EventResponseV2)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
