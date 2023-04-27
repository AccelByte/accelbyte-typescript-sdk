/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { BasicBuildManifestArray } from '../definitions/BasicBuildManifestArray.js'
import { BlockDownloadUrls } from '../definitions/BlockDownloadUrls.js'
import { BlockDownloadUrlsRequest } from '../definitions/BlockDownloadUrlsRequest.js'
import { BuildAvailabilityArray } from '../definitions/BuildAvailabilityArray.js'
import { BuildManifest } from '../definitions/BuildManifest.js'
import { DiffStatusReport } from '../definitions/DiffStatusReport.js'
import { VersionChain } from '../definitions/VersionChain.js'

export class Downloader$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This API is used to get version history.<p>Other detail info: <ul><li><i>Required permission</i>: login user</li><li><i>Returns</i>: version chain from specified build</li></ul>
   */
  getVersionHistory(queryParams: { appId: string | null; comparedBuildId: string | null }): Promise<IResponseWithSync<VersionChain>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/versionHistory'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, VersionChain, 'VersionChain')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to check whether supplied list of appId has valid buildmanifest and at least one of its build set as latest.<p>Other detail info: <ul><li><i>Required permission</i>: login user</li><li><i>Returns</i>: list of build availability</li></ul>
   */
  getBulkCheckLatest(queryParams: { appIds: string[] }): Promise<IResponseWithSync<BuildAvailabilityArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/bulkCheckLatest'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, BuildAvailabilityArray, 'BuildAvailabilityArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get simple build manifest that contains list of current build in various platform.<p>Other detail info: <ul><li><i>Required permission</i>: login user</li><li><i>Returns</i>: build manifest</li></ul>
   */
  getAvailablebuild_ByAppId(appId: string): Promise<IResponseWithSync<BasicBuildManifestArray>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/availablebuilds/{appId}'
      .replace('{namespace}', this.namespace)
      .replace('{appId}', appId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, BasicBuildManifestArray, 'BasicBuildManifestArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to Generate Download URLs for the requested blocks inside the specified buildId.<br/>The download URL generation may returns Signed URL or Public URL, depends on service configurations.<br/>Before processing the URL generation, it will validate the user entitlement first, if not entitled then the request will be refused.<br/><br/>Other detail info: <ul><li><i>Required permission</i>: login user</li><li><i>Returns</i>: Block Download URLs</li></ul>
   */
  createBlockUrl_ByBuildId(buildId: string, data: BlockDownloadUrlsRequest): Promise<IResponse<BlockDownloadUrls>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/builds/{buildId}/blocks/urls'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, BlockDownloadUrls, 'BlockDownloadUrls')
  }

  /**
   * This API is used to get build manifest of release version of the application. Supply it with source buildId and BuildInfo will output release build and obsolete files list between two version. Only works for builds uploaded with BuildInfo v2<p>Other detail info: <ul><li><i>Required permission</i>: login user</li><li><i>Returns</i>: build manifest</li></ul>
   */
  getUpdategameBuild_ByBuildId(buildId: string): Promise<IResponseWithSync<BuildManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/v2/updategame/builds/{buildId}'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, BuildManifest, 'BuildManifest')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get build manifest of release version of the application.<p>Other detail info: <ul><li><i>Required permission</i>: login user</li><li><i>Returns</i>: build manifest</li></ul>
   */
  getUpdategame_ByAppId_ByPlatformId(appId: string, platformId: string): Promise<IResponseWithSync<BuildManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/v2/updategame/{appId}/{platformId}'
      .replace('{namespace}', this.namespace)
      .replace('{appId}', appId)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, BuildManifest, 'BuildManifest')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API fetch the diff status between two builds. The diff generated by diff wrapper and saved in the database. Return 404 if no diff found.<p>Other detail info: <ul><li><i>Required permission</i>: login user</li><li><i>Returns</i>: Simple diff status containing where to fetch diff manifest</li></ul>
   */
  getDiff_BySourceBuildId_ByDestinationBuildId(
    sourceBuildId: string,
    destinationBuildId: string
  ): Promise<IResponseWithSync<DiffStatusReport>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/diff/{sourceBuildId}/{destinationBuildId}'
      .replace('{namespace}', this.namespace)
      .replace('{sourceBuildId}', sourceBuildId)
      .replace('{destinationBuildId}', destinationBuildId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, DiffStatusReport, 'DiffStatusReport')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get build manifest. The binary diff will be calculated in the client side, while obsolete file list will be generated by server side.<p>Other detail info: <ul><li><i>Required permission</i>: login user</li><li><i>Returns</i>: build manifest</li></ul>
   */
  getVersion_ByAppId_ByVersion_ByPlatformId(appId: string, version: string, platformId: string): Promise<IResponseWithSync<BuildManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/v2/updategame/{appId}/{version}/{platformId}'
      .replace('{namespace}', this.namespace)
      .replace('{appId}', appId)
      .replace('{version}', version)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, BuildManifest, 'BuildManifest')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
