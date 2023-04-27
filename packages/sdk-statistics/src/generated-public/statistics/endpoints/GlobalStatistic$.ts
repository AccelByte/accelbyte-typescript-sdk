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
import { GlobalStatItemInfo } from '../definitions/GlobalStatItemInfo.js'
import { GlobalStatItemPagingSlicedResult } from '../definitions/GlobalStatItemPagingSlicedResult.js'

export class GlobalStatistic$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * List global statItems by pagination.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:STATITEM", action=2 (READ)</li><li><i>Returns</i>: stat items</li></ul>
   */
  getGlobalstatitems(queryParams?: {
    statCodes?: string | null
    offset?: number
    limit?: number
  }): Promise<IResponseWithSync<GlobalStatItemPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/globalstatitems'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GlobalStatItemPagingSlicedResult, 'GlobalStatItemPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get global statItem by stat code.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:STATITEM", action=2 (READ)</li><li><i>Returns</i>: global stat item</li></ul>
   */
  getGlobalstatitem_ByStatCode(statCode: string): Promise<IResponseWithSync<GlobalStatItemInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/social/v1/public/namespaces/{namespace}/globalstatitems/{statCode}'
      .replace('{namespace}', this.namespace)
      .replace('{statCode}', statCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GlobalStatItemInfo, 'GlobalStatItemInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
