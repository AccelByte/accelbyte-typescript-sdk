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
import { BinaryUpload } from '../generated-definitions/BinaryUpload.js'
import { BlockManifest } from '../generated-definitions/BlockManifest.js'
import { BuildIdVersionArray } from '../generated-definitions/BuildIdVersionArray.js'
import { BuildManifest } from '../generated-definitions/BuildManifest.js'
import { UpdateBuildMetadataRequest } from '../generated-definitions/UpdateBuildMetadataRequest.js'
import { UploadBuildManifest } from '../generated-definitions/UploadBuildManifest.js'
import { UploadSummary } from '../generated-definitions/UploadSummary.js'
import { UploaderV2Admin$ } from './endpoints/UploaderV2Admin$.js'

export function UploaderV2AdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * This API is used to get basic build manifests. Only committed build will be retrieved.
   */
  async function getBuildsByAppId(queryParams: { appId: string | null; platformId: string | null }): Promise<BuildIdVersionArray> {
    const $ = new UploaderV2Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getBuildsByAppId(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get basic DLC build manifests. Only committed build will be retrieved.
   */
  async function getDlcByGameAppId(queryParams: { appId: string | null; platformId: string | null }): Promise<BuildIdVersionArray> {
    const $ = new UploaderV2Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getDlcByGameAppId(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to delete build manifest.
   */
  async function deleteBuild_ByBuildId(buildId: string): Promise<unknown> {
    const $ = new UploaderV2Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteBuild_ByBuildId(buildId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get build manifest for build uploaded with BuildInfo v2.
   */
  async function getBuild_ByBuildId(buildId: string): Promise<BuildManifest> {
    const $ = new UploaderV2Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getBuild_ByBuildId(buildId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to edit build&#39;s launchArgument.
   */
  async function patchBuild_ByBuildId(buildId: string, data: UpdateBuildMetadataRequest): Promise<unknown> {
    const $ = new UploaderV2Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchBuild_ByBuildId(buildId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to start build upload.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v2/startfileupload/{uploaderId}&lt;/li&gt;&lt;/ul&gt;
   */
  async function createStartbuildupload(data: UploadBuildManifest): Promise<BuildManifest> {
    const $ = new UploaderV2Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createStartbuildupload(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get diff trigger status.
   */
  async function getDifftriggerStatus(): Promise<unknown> {
    const $ = new UploaderV2Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getDifftriggerStatus()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to commit build manifest.
   */
  async function createCommitbuildmanifest(data: BuildManifest): Promise<unknown> {
    const $ = new UploaderV2Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createCommitbuildmanifest(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to start DLC build upload.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v2/startfileupload/{uploaderId} for normal (non-differential) upload&lt;/li&gt;&lt;li&gt;/v3/prezsyncupload for differential upload&lt;/li&gt;&lt;/ul&gt;
   */
  async function createStartdlcbuildupload(data: UploadBuildManifest): Promise<BuildManifest> {
    const $ = new UploaderV2Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createStartdlcbuildupload(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to commit build manifest.
   */
  async function createCommitdlcbuildmanifest(data: BuildManifest): Promise<unknown> {
    const $ = new UploaderV2Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createCommitdlcbuildmanifest(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to toggle diff trigger status. Use 0 to turn off and 1 to turn on. Any values other than 0 will be regarded as 1.
   */
  async function patchDifftriggerStatu_ByValue(value: string): Promise<unknown> {
    const $ = new UploaderV2Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchDifftriggerStatu_ByValue(value)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to start file upload and retrieve upload url.
   */
  async function createStartfileupload_ByUploaderId(uploaderId: string, data: BinaryUpload): Promise<UploadSummary> {
    const $ = new UploaderV2Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createStartfileupload_ByUploaderId(uploaderId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to start zsync control file upload and retrieve upload url.
   */
  async function createStartzsyncfileupload_ByFileHash(fileHash: string, data: BinaryUpload): Promise<UploadSummary> {
    const $ = new UploaderV2Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createStartzsyncfileupload_ByFileHash(fileHash, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to start incremental build upload. This endpoint used for incremental build upload, where developer update the files from existing build version (that hasn&#39;t yet set as latest).
   */
  async function createStartbuildupload_BySourceBuildId(sourceBuildId: string, data: UploadBuildManifest): Promise<BuildManifest> {
    const $ = new UploaderV2Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createStartbuildupload_BySourceBuildId(sourceBuildId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to commit file that has been uploaded to signal completion.
   */
  async function patchCommitfileupload_ByBuildId_ByHash(buildId: string, hash: string): Promise<BlockManifest> {
    const $ = new UploaderV2Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchCommitfileupload_ByBuildId_ByHash(buildId, hash)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to start DLC build upload. This endpoint used for incremental build upload, where developer update the files from existing build version (that hasn&#39;t yet set as latest).
   */
  async function createStartdlcbuildupload_BySourceBuildId(sourceBuildId: string, data: UploadBuildManifest): Promise<BuildManifest> {
    const $ = new UploaderV2Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createStartdlcbuildupload_BySourceBuildId(sourceBuildId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to commit file that has been uploaded to signal completion
   */
  async function patchCommitzsyncfileupload_ByBuildId_ByHash(buildId: string, hash: string): Promise<BlockManifest> {
    const $ = new UploaderV2Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchCommitzsyncfileupload_ByBuildId_ByHash(buildId, hash)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to set current build as release version.
   */
  async function updateVersion_ByAppId_ByVersion_ByPlatformId(appId: string, version: string, platformId: string): Promise<unknown> {
    const $ = new UploaderV2Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateVersion_ByAppId_ByVersion_ByPlatformId(appId, version, platformId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to start diff manifest upload.
   */
  async function createDiffStart_BySourceBuildId_ByDestinationBuildId(
    sourceBuildId: string,
    destinationBuildId: string
  ): Promise<UploadSummary> {
    const $ = new UploaderV2Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createDiffStart_BySourceBuildId_ByDestinationBuildId(sourceBuildId, destinationBuildId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to commit diff manifest.
   */
  async function patchDiffCommit_BySourceBuildId_ByDestinationBuildId(sourceBuildId: string, destinationBuildId: string): Promise<unknown> {
    const $ = new UploaderV2Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchDiffCommit_BySourceBuildId_ByDestinationBuildId(sourceBuildId, destinationBuildId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to commit chunk that has been uploaded.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;/v2/startzsyncfileupload&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v2/startfileupload/{uploaderId}&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchHash_ByBuildId_ByHash_ByBlockSize(buildId: string, hash: string, blockSize: number): Promise<BlockManifest> {
    const $ = new UploaderV2Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchHash_ByBuildId_ByHash_ByBlockSize(buildId, hash, blockSize)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Use this API to get the presigned url to upload the diff manifest.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build id&lt;/li&gt;&lt;/ul&gt;
   */
  async function createDiffSignedurl_BySourceBuildId_ByDestinationBuildId(
    sourceBuildId: string,
    destinationBuildId: string
  ): Promise<UploadSummary> {
    const $ = new UploaderV2Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createDiffSignedurl_BySourceBuildId_ByDestinationBuildId(sourceBuildId, destinationBuildId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getBuildsByAppId,
    getDlcByGameAppId,
    deleteBuild_ByBuildId,
    getBuild_ByBuildId,
    patchBuild_ByBuildId,
    createStartbuildupload,
    getDifftriggerStatus,
    createCommitbuildmanifest,
    createStartdlcbuildupload,
    createCommitdlcbuildmanifest,
    patchDifftriggerStatu_ByValue,
    createStartfileupload_ByUploaderId,
    createStartzsyncfileupload_ByFileHash,
    createStartbuildupload_BySourceBuildId,
    patchCommitfileupload_ByBuildId_ByHash,
    createStartdlcbuildupload_BySourceBuildId,
    patchCommitzsyncfileupload_ByBuildId_ByHash,
    updateVersion_ByAppId_ByVersion_ByPlatformId,
    createDiffStart_BySourceBuildId_ByDestinationBuildId,
    patchDiffCommit_BySourceBuildId_ByDestinationBuildId,
    patchHash_ByBuildId_ByHash_ByBlockSize,
    createDiffSignedurl_BySourceBuildId_ByDestinationBuildId
  }
}
