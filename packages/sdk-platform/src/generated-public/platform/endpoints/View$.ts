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
import { ViewInfoArray } from '../definitions/ViewInfoArray.js'

export class View$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This API is used to get all views.<p>Other detail info: <ul><li><i>Required permission</i>: resource=NAMESPACE:{namespace}:USER:{userId}:STORE, action=2 (READ)</li><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store views)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store views)</li><li><i>Returns</i>: all views</li></ul>
   */
  getViews_ByUserId(
    userId: string,
    queryParams?: { storeId?: string | null; language?: string | null }
  ): Promise<IResponseWithSync<ViewInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/views'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ViewInfoArray, 'ViewInfoArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
