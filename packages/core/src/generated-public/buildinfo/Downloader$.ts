/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { CodeGenUtil } from '@od-web-sdk/utils/CodeGenUtil'
import { SdkCache } from '@od-web-sdk/utils/SdkCache'
import { IResponse, IResponseWithSync, Validate } from '@od-web-sdk/utils/Validate'
import { AxiosInstance } from 'axios'
import { BasicBuildManifestArray } from './definitions/BasicBuildManifestArray'
import { BlockDownloadUrls } from './definitions/BlockDownloadUrls'
/* eslint-disable camelcase */
import { BlockDownloadUrlsRequest } from './definitions/BlockDownloadUrlsRequest'
import { BuildAvailabilityArray } from './definitions/BuildAvailabilityArray'
import { BuildManifest } from './definitions/BuildManifest'
import { DiffStatusReport } from './definitions/DiffStatusReport'
import { VersionChain } from './definitions/VersionChain'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class Downloader$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  postBuildsByBuildidBlocksUrls<T = BlockDownloadUrls>(buildId: string, data: BlockDownloadUrlsRequest): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/' + this.namespace + '/builds/' + buildId + '/blocks/urls'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, BlockDownloadUrls)
  }

  fetchBulkCheckLatest<T = BuildAvailabilityArray>(queryParams?: { appIds: string[] }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/' + this.namespace + '/bulkCheckLatest'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, BuildAvailabilityArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchV2UpdategameByAppidByVersionByPlatformid<T = BuildManifest>(
    appId: string,
    version: string,
    platformId: string
  ): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/' + this.namespace + '/v2/updategame/' + appId + '/' + version + '/' + platformId + ''
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, BuildManifest)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchAvailablebuildsByAppid<T = BasicBuildManifestArray>(appId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/' + this.namespace + '/availablebuilds/' + appId + ''
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, BasicBuildManifestArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchDiffBySourcebuildidByDestinationbuildid<T = DiffStatusReport>(
    sourceBuildId: string,
    destinationBuildId: string
  ): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/' + this.namespace + '/diff/' + sourceBuildId + '/' + destinationBuildId + ''
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, DiffStatusReport)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchVersionHistory<T = VersionChain>(queryParams?: {
    appId: string | null
    comparedBuildId: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/' + this.namespace + '/versionHistory'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, VersionChain)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchV2UpdategameByAppidByPlatformid<T = BuildManifest>(appId: string, platformId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/' + this.namespace + '/v2/updategame/' + appId + '/' + platformId + ''
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, BuildManifest)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchV2UpdategameBuildsByBuildid<T = BuildManifest>(buildId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/' + this.namespace + '/v2/updategame/builds/' + buildId + ''
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, BuildManifest)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }
}
