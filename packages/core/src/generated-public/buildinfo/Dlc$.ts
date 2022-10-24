/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { CodeGenUtil } from '@od-web-sdk/utils/CodeGenUtil'
import { SdkCache } from '@od-web-sdk/utils/SdkCache'
import { IResponseWithSync, Validate } from '@od-web-sdk/utils/Validate'
import { AxiosInstance } from 'axios'
import { RetrieveBaseGameResponseArray } from './definitions/RetrieveBaseGameResponseArray'
import { RetrieveDependencyCompatibilityResponse } from './definitions/RetrieveDependencyCompatibilityResponse'
/* eslint-disable camelcase */
import { RetrieveDependencyLinkResponse } from './definitions/RetrieveDependencyLinkResponse'
import { RetrieveLatestDlcResponseArray } from './definitions/RetrieveLatestDlcResponseArray'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class Dlc$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  fetchDlcByBuildidLink<T = RetrieveDependencyLinkResponse>(buildId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/' + this.namespace + '/dlc/' + buildId + '/link'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, RetrieveDependencyLinkResponse)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchAppsLatestByDlcAppIdByDlcappid<T = RetrieveBaseGameResponseArray>(dlcAppId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/' + this.namespace + '/apps/latest/byDLCAppId/' + dlcAppId + ''
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, RetrieveBaseGameResponseArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchDlcsLatestByGameAppIdByAppid<T = RetrieveLatestDlcResponseArray>(appId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/' + this.namespace + '/dlcs/latest/byGameAppId/' + appId + ''
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, RetrieveLatestDlcResponseArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchDlcByBuildidCompatibility<T = RetrieveDependencyCompatibilityResponse>(buildId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/' + this.namespace + '/dlc/' + buildId + '/compatibility'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, RetrieveDependencyCompatibilityResponse)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }
}
