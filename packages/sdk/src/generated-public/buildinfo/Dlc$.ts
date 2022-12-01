/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { CodeGenUtil } from '@accelbyte/sdk/utils/CodeGenUtil'
import { SdkCache } from '@accelbyte/sdk/utils/SdkCache'
import { IResponseWithSync, Validate } from '@accelbyte/sdk/utils/Validate'
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
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This API is used to retrieve DLC versions against the game version.<p>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  fetchDlcByBuildidLink<T = RetrieveDependencyLinkResponse>(buildId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/dlc/{buildId}/link'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RetrieveDependencyLinkResponse)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Retrieve the list of DLC available on specific game. Use DLC's appId to query.<p>Other detail info: <ul><li><i>Returns</i>: appId of game and list of its builds by platformId</li></ul>
   */
  fetchAppsLatestByDlcAppIdByDlcappid<T = RetrieveBaseGameResponseArray>(dlcAppId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/apps/latest/byDLCAppId/{dlcAppId}'
      .replace('{namespace}', this.namespace)
      .replace('{dlcAppId}', dlcAppId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RetrieveBaseGameResponseArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * Retrieve the list of DLC available on specific game. Use game's appId to query.<p>Other detail info: <ul><li><i>Returns</i>: list of DLC</li></ul>
   */
  fetchDlcsLatestByGameAppIdByAppid<T = RetrieveLatestDlcResponseArray>(appId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/dlcs/latest/byGameAppId/{appId}'
      .replace('{namespace}', this.namespace)
      .replace('{appId}', appId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RetrieveLatestDlcResponseArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  /**
   * This API is used to retrieve compatibility of specific DLC versions against the game version.<p>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  fetchDlcByBuildidCompatibility<T = RetrieveDependencyCompatibilityResponse>(buildId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/dlc/{buildId}/compatibility'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RetrieveDependencyCompatibilityResponse)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }
}
