/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { BasicBuildManifestArray } from './definitions/BasicBuildManifestArray'
import { BlockDownloadUrls } from './definitions/BlockDownloadUrls'
import { BlockDownloadUrlsRequest } from './definitions/BlockDownloadUrlsRequest'
import { BuildAvailabilityArray } from './definitions/BuildAvailabilityArray'
import { BuildManifest } from './definitions/BuildManifest'
import { DiffStatusReport } from './definitions/DiffStatusReport'
import { Downloader$ } from './endpoints/Downloader$'
import { VersionChain } from './definitions/VersionChain'

export function DownloaderApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  async function getVersionHistory(queryParams: { appId: string | null; comparedBuildId: string | null }): Promise<VersionChain> {
    const $ = new Downloader$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getVersionHistory(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getBulkCheckLatest(queryParams: { appIds: string[] }): Promise<BuildAvailabilityArray> {
    const $ = new Downloader$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getBulkCheckLatest(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getAvailablebuild_ByAppId(appId: string): Promise<BasicBuildManifestArray> {
    const $ = new Downloader$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAvailablebuild_ByAppId(appId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function createBlockUrl_ByBuildId(buildId: string, data: BlockDownloadUrlsRequest): Promise<BlockDownloadUrls> {
    const $ = new Downloader$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createBlockUrl_ByBuildId(buildId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getUpdategameBuild_ByBuildId(buildId: string): Promise<BuildManifest> {
    const $ = new Downloader$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUpdategameBuild_ByBuildId(buildId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getUpdategame_ByAppId_ByPlatformId(appId: string, platformId: string): Promise<BuildManifest> {
    const $ = new Downloader$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUpdategame_ByAppId_ByPlatformId(appId, platformId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getDiff_BySourceBuildId_ByDestinationBuildId(
    sourceBuildId: string,
    destinationBuildId: string
  ): Promise<DiffStatusReport> {
    const $ = new Downloader$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getDiff_BySourceBuildId_ByDestinationBuildId(sourceBuildId, destinationBuildId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getVersion_ByAppId_ByVersion_ByPlatformId(appId: string, version: string, platformId: string): Promise<BuildManifest> {
    const $ = new Downloader$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getVersion_ByAppId_ByVersion_ByPlatformId(appId, version, platformId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getVersionHistory,
    getBulkCheckLatest,
    getAvailablebuild_ByAppId,
    createBlockUrl_ByBuildId,
    getUpdategameBuild_ByBuildId,
    getUpdategame_ByAppId_ByPlatformId,
    getDiff_BySourceBuildId_ByDestinationBuildId,
    getVersion_ByAppId_ByVersion_ByPlatformId
  }
}
