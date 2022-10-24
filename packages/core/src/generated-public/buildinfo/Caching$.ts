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
import { RetrieveDiffCacheResponse } from './definitions/RetrieveDiffCacheResponse'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class Caching$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  fetchDiffCacheSourceBySourcebuildidDestByDestinationbuildid<T = RetrieveDiffCacheResponse>(
    sourceBuildId: string,
    destinationBuildId: string
  ): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url =
      '/buildinfo/public/namespaces/' + this.namespace + '/diff/cache/source/' + sourceBuildId + '/dest/' + destinationBuildId + ''
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, RetrieveDiffCacheResponse)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }
}
