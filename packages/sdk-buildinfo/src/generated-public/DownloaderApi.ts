/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { BasicBuildManifestArray } from '../generated-definitions/BasicBuildManifestArray.js'
import { BlockDownloadUrls } from '../generated-definitions/BlockDownloadUrls.js'
import { BlockDownloadUrlsRequest } from '../generated-definitions/BlockDownloadUrlsRequest.js'
import { BuildAvailabilityArray } from '../generated-definitions/BuildAvailabilityArray.js'
import { BuildManifest } from '../generated-definitions/BuildManifest.js'
import { DiffStatusReport } from '../generated-definitions/DiffStatusReport.js'
import { Downloader$ } from './endpoints/Downloader$.js'
import { VersionChain } from '../generated-definitions/VersionChain.js'

export function DownloaderApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * This API is used to get version history.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: version chain from specified build&lt;/li&gt;&lt;/ul&gt;
   */
  async function getVersionHistory(queryParams: { appId: string | null; comparedBuildId: string | null }): Promise<VersionChain> {
    const $ = new Downloader$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getVersionHistory(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to check whether supplied list of appId has valid buildmanifest and at least one of its build set as latest.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of build availability&lt;/li&gt;&lt;/ul&gt;
   */
  async function getBulkCheckLatest(queryParams: { appIds: string[] }): Promise<BuildAvailabilityArray> {
    const $ = new Downloader$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getBulkCheckLatest(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * This API is used to get build manifest of release version of the application. [DEPRECATED]&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
   */
  async function getUpdategame_ByAppId_DEPRECATED(appId: string): Promise<BuildManifest> {
    const $ = new Downloader$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getUpdategame_ByAppId_DEPRECATED(appId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get simple build manifest that contains list of current build in various platform.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
   */
  async function getAvailablebuild_ByAppId(appId: string): Promise<BasicBuildManifestArray> {
    const $ = new Downloader$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getAvailablebuild_ByAppId(appId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * This API is used to get build manifest of release version of the application. Supply it with source buildId and BuildInfo will output release build and generate chunks difference and obsolete files list between two version. Only works for builds uploaded with BuildInfo v1 [DEPRECATED}&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
   */
  async function getUpdategameBuild_ByBuildId_DEPRECATED(buildId: string): Promise<BuildManifest> {
    const $ = new Downloader$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getUpdategameBuild_ByBuildId_DEPRECATED(buildId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to Generate Download URLs for the requested blocks inside the specified buildId.&lt;br/&gt;The download URL generation may returns Signed URL or Public URL, depends on service configurations.&lt;br/&gt;Before processing the URL generation, it will validate the user entitlement first, if not entitled then the request will be refused.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Block Download URLs&lt;/li&gt;&lt;/ul&gt;
   */
  async function createBlockUrl_ByBuildId(buildId: string, data: BlockDownloadUrlsRequest): Promise<BlockDownloadUrls> {
    const $ = new Downloader$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createBlockUrl_ByBuildId(buildId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * This API is used to get build manifest that contains file difference between requested version and release version. [DEPRECATED]&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
   */
  async function getUpdategame_ByAppId_ByVersion_DEPRECATED(appId: string, version: string): Promise<BuildManifest> {
    const $ = new Downloader$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getUpdategame_ByAppId_ByVersion_DEPRECATED(appId, version)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get build manifest of release version of the application. Supply it with source buildId and BuildInfo will output release build and obsolete files list between two version. Only works for builds uploaded with BuildInfo v2&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
   */
  async function getUpdategameBuild_ByBuildId_ByNS(buildId: string): Promise<BuildManifest> {
    const $ = new Downloader$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getUpdategameBuild_ByBuildId_ByNS(buildId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get build manifest of release version of the application.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
   */
  async function getUpdategame_ByAppId_ByPlatformId(appId: string, platformId: string): Promise<BuildManifest> {
    const $ = new Downloader$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getUpdategame_ByAppId_ByPlatformId(appId, platformId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API fetch the diff status between two builds. The diff generated by diff wrapper and saved in the database. Return 404 if no diff found.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Simple diff status containing where to fetch diff manifest&lt;/li&gt;&lt;/ul&gt;
   */
  async function getDiff_BySourceBuildId_ByDestinationBuildId(
    sourceBuildId: string,
    destinationBuildId: string
  ): Promise<DiffStatusReport> {
    const $ = new Downloader$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getDiff_BySourceBuildId_ByDestinationBuildId(sourceBuildId, destinationBuildId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get build manifest. The binary diff will be calculated in the client side, while obsolete file list will be generated by server side.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: login user&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build manifest&lt;/li&gt;&lt;/ul&gt;
   */
  async function getVersion_ByAppId_ByVersion_ByPlatformId(appId: string, version: string, platformId: string): Promise<BuildManifest> {
    const $ = new Downloader$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getVersion_ByAppId_ByVersion_ByPlatformId(appId, version, platformId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getVersionHistory,
    getBulkCheckLatest,
    getUpdategame_ByAppId_DEPRECATED,
    getAvailablebuild_ByAppId,
    getUpdategameBuild_ByBuildId_DEPRECATED,
    createBlockUrl_ByBuildId,
    getUpdategame_ByAppId_ByVersion_DEPRECATED,
    getUpdategameBuild_ByBuildId_ByNS,
    getUpdategame_ByAppId_ByPlatformId,
    getDiff_BySourceBuildId_ByDestinationBuildId,
    getVersion_ByAppId_ByVersion_ByPlatformId
  }
}
