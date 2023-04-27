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
import { RetrieveBaseGameResponseArray } from '../definitions/RetrieveBaseGameResponseArray.js'
import { RetrieveDependencyCompatibilityResponse } from '../definitions/RetrieveDependencyCompatibilityResponse.js'
import { RetrieveDependencyLinkResponse } from '../definitions/RetrieveDependencyLinkResponse.js'
import { RetrieveLatestDlcResponseArray } from '../definitions/RetrieveLatestDlcResponseArray.js'

export class Dlc$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This API is used to retrieve DLC versions against the game version.<p>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  getLink_ByBuildId(buildId: string): Promise<IResponseWithSync<RetrieveDependencyLinkResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/dlc/{buildId}/link'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RetrieveDependencyLinkResponse, 'RetrieveDependencyLinkResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to retrieve compatibility of specific DLC versions against the game version.<p>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  getCompatibility_ByBuildId(buildId: string): Promise<IResponseWithSync<RetrieveDependencyCompatibilityResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/dlc/{buildId}/compatibility'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => resultPromise, RetrieveDependencyCompatibilityResponse, 'RetrieveDependencyCompatibilityResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Retrieve the list of DLC available on specific game. Use game's appId to query.<p>Other detail info: <ul><li><i>Returns</i>: list of DLC</li></ul>
   */
  getDlcLatestByGameAppId_ByAppId(appId: string): Promise<IResponseWithSync<RetrieveLatestDlcResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/dlcs/latest/byGameAppId/{appId}'
      .replace('{namespace}', this.namespace)
      .replace('{appId}', appId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RetrieveLatestDlcResponseArray, 'RetrieveLatestDlcResponseArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Retrieve the list of DLC available on specific game. Use DLC's appId to query.<p>Other detail info: <ul><li><i>Returns</i>: appId of game and list of its builds by platformId</li></ul>
   */
  getAppLatestByDlcAppId_ByDlcAppId(dlcAppId: string): Promise<IResponseWithSync<RetrieveBaseGameResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/apps/latest/byDLCAppId/{dlcAppId}'
      .replace('{namespace}', this.namespace)
      .replace('{dlcAppId}', dlcAppId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RetrieveBaseGameResponseArray, 'RetrieveBaseGameResponseArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
