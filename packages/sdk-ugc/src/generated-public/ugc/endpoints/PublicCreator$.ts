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
import { CreatorResponse } from '../definitions/CreatorResponse.js'
import { PaginatedCreatorOverviewResponse } from '../definitions/PaginatedCreatorOverviewResponse.js'

export class PublicCreator$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  getUsers(queryParams?: {
    limit?: number
    offset?: number
    orderby?: string | null
    sortby?: string | null
  }): Promise<IResponseWithSync<PaginatedCreatorOverviewResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PaginatedCreatorOverviewResponse, 'PaginatedCreatorOverviewResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  getUser_ByUserId(userId: string): Promise<IResponseWithSync<CreatorResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/ugc/v1/public/namespaces/{namespace}/users/{userId}'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, CreatorResponse, 'CreatorResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
