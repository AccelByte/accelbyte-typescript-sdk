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
import { PaginatedTagResponse } from '../definitions/PaginatedTagResponse.js'

export class Tags$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * <p>Required permission <code>NAMESPACE:{namespace}:ACHIEVEMENT [READ]</code> and scope <code>social</code></p>
   */
  getTags(queryParams?: {
    name?: string | null
    sortBy?: string | null
    limit?: number
    offset?: number
  }): Promise<IResponseWithSync<PaginatedTagResponse>> {
    const params = { sortBy: 'name:asc', limit: 10, ...queryParams } as SDKRequestConfig
    const url = '/achievement/v1/public/namespaces/{namespace}/tags'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PaginatedTagResponse, 'PaginatedTagResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
