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
import { StoreInfoArray } from '../definitions/StoreInfoArray.js'

export class Store$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This API is used to list all stores in a namespace.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store)</li><li><i>Returns</i>: the list of stores</li></ul>
   */
  getStores(): Promise<IResponseWithSync<StoreInfoArray>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/stores'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, StoreInfoArray, 'StoreInfoArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
