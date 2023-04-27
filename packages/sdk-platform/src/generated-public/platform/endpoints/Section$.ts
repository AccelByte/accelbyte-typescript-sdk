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
import { SectionInfoArray } from '../definitions/SectionInfoArray.js'

export class Section$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This API is used to list active section contents.<p>Other detail info: <ul><li><i>Required permission</i>: resource=NAMESPACE:{namespace}:USER:{userId}:STORE, action=2 (READ)</li><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store sections)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store sections)</li><li><i>Returns</i>: active section contents</li></ul>
   */
  getSections_ByUserId(
    userId: string,
    queryParams?: { storeId?: string | null; viewId?: string | null; region?: string | null; language?: string | null }
  ): Promise<IResponseWithSync<SectionInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/sections'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, SectionInfoArray, 'SectionInfoArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
