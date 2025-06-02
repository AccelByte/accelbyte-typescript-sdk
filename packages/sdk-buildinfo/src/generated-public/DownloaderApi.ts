/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { BasicBuildManifestArray } from '../generated-definitions/BasicBuildManifestArray.js'
import { BlockDownloadUrls } from '../generated-definitions/BlockDownloadUrls.js'
import { BlockDownloadUrlsRequest } from '../generated-definitions/BlockDownloadUrlsRequest.js'
import { BuildAvailabilityArray } from '../generated-definitions/BuildAvailabilityArray.js'
import { BuildManifest } from '../generated-definitions/BuildManifest.js'
import { DiffStatusReport } from '../generated-definitions/DiffStatusReport.js'
import { VersionChain } from '../generated-definitions/VersionChain.js'
import { Downloader$ } from './endpoints/Downloader$.js'

export function DownloaderApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getVersionHistory(queryParams: {
    appId: string | null
    comparedBuildId: string | null
  }): Promise<AxiosResponse<VersionChain>> {
    const $ = new Downloader$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getVersionHistory(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getBulkCheckLatest(queryParams: { appIds: string[] }): Promise<AxiosResponse<BuildAvailabilityArray>> {
    const $ = new Downloader$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBulkCheckLatest(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUpdategame_ByAppId(appId: string): Promise<AxiosResponse<BuildManifest>> {
    const $ = new Downloader$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUpdategame_ByAppId(appId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getAvailablebuild_ByAppId(appId: string): Promise<AxiosResponse<BasicBuildManifestArray>> {
    const $ = new Downloader$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAvailablebuild_ByAppId(appId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUpdategameBuild_ByBuildId(buildId: string): Promise<AxiosResponse<BuildManifest>> {
    const $ = new Downloader$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUpdategameBuild_ByBuildId(buildId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createBlockUrl_ByBuildId(buildId: string, data: BlockDownloadUrlsRequest): Promise<AxiosResponse<BlockDownloadUrls>> {
    const $ = new Downloader$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createBlockUrl_ByBuildId(buildId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUpdategame_ByAppId_ByVersion(appId: string, version: string): Promise<AxiosResponse<BuildManifest>> {
    const $ = new Downloader$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUpdategame_ByAppId_ByVersion(appId, version)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUpdategameBuild_ByBuildId_v2(buildId: string): Promise<AxiosResponse<BuildManifest>> {
    const $ = new Downloader$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUpdategameBuild_ByBuildId_v2(buildId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUpdategame_ByAppId_ByPlatformId_v2(appId: string, platformId: string): Promise<AxiosResponse<BuildManifest>> {
    const $ = new Downloader$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUpdategame_ByAppId_ByPlatformId_v2(appId, platformId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDiff_BySourceBuildId_ByDestinationBuildId(
    sourceBuildId: string,
    destinationBuildId: string
  ): Promise<AxiosResponse<DiffStatusReport>> {
    const $ = new Downloader$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDiff_BySourceBuildId_ByDestinationBuildId(sourceBuildId, destinationBuildId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getVersion_ByAppId_ByVersion_ByPlatformId_v2(
    appId: string,
    version: string,
    platformId: string
  ): Promise<AxiosResponse<BuildManifest>> {
    const $ = new Downloader$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getVersion_ByAppId_ByVersion_ByPlatformId_v2(appId, version, platformId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to get version history.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: version chain from specified build&lt;/li&gt;&lt;/ul&gt;
     */
    getVersionHistory,
    /**
     * This API is used to check whether supplied list of appId has valid buildmanifest and at least one of its build set as latest.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of build availability&lt;/li&gt;&lt;/ul&gt;
     */
    getBulkCheckLatest,
    /**
     * @deprecated
     * This API is used to get build manifest of release version of the application. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
     */
    getUpdategame_ByAppId,
    /**
     * This API is used to get simple build manifest that contains list of current build in various platform.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
     */
    getAvailablebuild_ByAppId,
    /**
     * @deprecated
     * This API is used to get build manifest of release version of the application. Supply it with source buildId and BuildInfo will output release build and generate chunks difference and obsolete files list between two version. Only works for builds uploaded with BuildInfo v1 [DEPRECATED}&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
     */
    getUpdategameBuild_ByBuildId,
    /**
     * This API is used to Generate Download URLs for the requested blocks inside the specified buildId.&lt;br/&gt;The download URL generation may returns Signed URL or Public URL, depends on service configurations.&lt;br/&gt;Before processing the URL generation, it will validate the user entitlement first, if not entitled then the request will be refused.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Block Download URLs&lt;/li&gt;&lt;/ul&gt;
     */
    createBlockUrl_ByBuildId,
    /**
     * @deprecated
     * This API is used to get build manifest that contains file difference between requested version and release version. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
     */
    getUpdategame_ByAppId_ByVersion,
    /**
     * This API is used to get build manifest of release version of the application. Supply it with source buildId and BuildInfo will output release build and obsolete files list between two version. Only works for builds uploaded with BuildInfo v2&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
     */
    getUpdategameBuild_ByBuildId_v2,
    /**
     * This API is used to get build manifest of release version of the application.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
     */
    getUpdategame_ByAppId_ByPlatformId_v2,
    /**
     * This API fetch the diff status between two builds. The diff generated by diff wrapper and saved in the database. Return 404 if no diff found.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Simple diff status containing where to fetch diff manifest&lt;/li&gt;&lt;/ul&gt;
     */
    getDiff_BySourceBuildId_ByDestinationBuildId,
    /**
     * This API is used to get build manifest. The binary diff will be calculated in the client side, while obsolete file list will be generated by server side.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
     */
    getVersion_ByAppId_ByVersion_ByPlatformId_v2
  }
}
