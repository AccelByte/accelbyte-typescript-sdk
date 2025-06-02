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
import { BinaryUpload } from '../generated-definitions/BinaryUpload.js'
import { BlockManifest } from '../generated-definitions/BlockManifest.js'
import { BuildManifest } from '../generated-definitions/BuildManifest.js'
import { DiffPatchRequest } from '../generated-definitions/DiffPatchRequest.js'
import { DifferentialBuildManifest } from '../generated-definitions/DifferentialBuildManifest.js'
import { DifferentialUploadSummary } from '../generated-definitions/DifferentialUploadSummary.js'
import { FileDiffingStatus } from '../generated-definitions/FileDiffingStatus.js'
import { PreCheckUploadRequest } from '../generated-definitions/PreCheckUploadRequest.js'
import { UploadBuildManifest } from '../generated-definitions/UploadBuildManifest.js'
import { UploadModeCheck } from '../generated-definitions/UploadModeCheck.js'
import { UploadSummary } from '../generated-definitions/UploadSummary.js'
import { ZsyncDiffRequest } from '../generated-definitions/ZsyncDiffRequest.js'
import { UploaderV3Admin$ } from './endpoints/UploaderV3Admin$.js'

export function UploaderV3AdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function createDiffSend(data: DiffPatchRequest): Promise<AxiosResponse<unknown>> {
    const $ = new UploaderV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createDiffSend(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createPatchSend(data: DiffPatchRequest): Promise<AxiosResponse<unknown>> {
    const $ = new UploaderV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPatchSend(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createListenDiffStatu(data: DiffPatchRequest): Promise<AxiosResponse<FileDiffingStatus>> {
    const $ = new UploaderV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createListenDiffStatu(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createListenPatchStatu(data: DiffPatchRequest): Promise<AxiosResponse<FileDiffingStatus>> {
    const $ = new UploaderV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createListenPatchStatu(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createPrezsyncupload_v3(data: PreCheckUploadRequest): Promise<AxiosResponse<DifferentialUploadSummary>> {
    const $ = new UploaderV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPrezsyncupload_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createStartbuildupload_v3(data: UploadBuildManifest): Promise<AxiosResponse<DifferentialBuildManifest>> {
    const $ = new UploaderV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStartbuildupload_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getCurrent_ByAppId_ByPlatformId_v3(appId: string, platformId: string): Promise<AxiosResponse<BuildManifest>> {
    const $ = new UploaderV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCurrent_ByAppId_ByPlatformId_v3(appId, platformId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createStartfileupload_ByUploaderId_v3(uploaderId: string, data: BinaryUpload): Promise<AxiosResponse<UploadSummary>> {
    const $ = new UploaderV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStartfileupload_ByUploaderId_v3(uploaderId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createStartzsyncfileupload_ByFileHash_v3(fileHash: string, data: ZsyncDiffRequest): Promise<AxiosResponse<UploadSummary>> {
    const $ = new UploaderV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStartzsyncfileupload_ByFileHash_v3(fileHash, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUploadmode_ByAppId_ByPlatformId_v3(appId: string, platformId: string): Promise<AxiosResponse<UploadModeCheck>> {
    const $ = new UploaderV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUploadmode_ByAppId_ByPlatformId_v3(appId, platformId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createStartbuildupload_BySourceBuildId_v3(
    sourceBuildId: string,
    data: UploadBuildManifest
  ): Promise<AxiosResponse<DifferentialBuildManifest>> {
    const $ = new UploaderV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStartbuildupload_BySourceBuildId_v3(sourceBuildId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchCommitfileupload_ByBuildId_ByHash_v3(buildId: string, hash: string): Promise<AxiosResponse<BlockManifest>> {
    const $ = new UploaderV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchCommitfileupload_ByBuildId_ByHash_v3(buildId, hash)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createCommitbuildmanifest_BySourceBuildId_v3(sourceBuildId: string, data: BuildManifest): Promise<AxiosResponse<unknown>> {
    const $ = new UploaderV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createCommitbuildmanifest_BySourceBuildId_v3(sourceBuildId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchCommitmissingbytesfileupload_ByHash_v3(hash: string, data: DiffPatchRequest): Promise<AxiosResponse<BlockManifest>> {
    const $ = new UploaderV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchCommitmissingbytesfileupload_ByHash_v3(hash, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchCommitzsyncfileupload_ByBuildId_ByHash_v3(
    buildId: string,
    hash: string,
    data: DiffPatchRequest
  ): Promise<AxiosResponse<BlockManifest>> {
    const $ = new UploaderV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchCommitzsyncfileupload_ByBuildId_ByHash_v3(buildId, hash, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateVersion_ByAppId_ByVersion_ByPlatformId_v3(
    appId: string,
    version: string,
    platformId: string
  ): Promise<AxiosResponse<unknown>> {
    const $ = new UploaderV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateVersion_ByAppId_ByVersion_ByPlatformId_v3(appId, version, platformId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchHash_ByBuildId_ByHash_ByBlockSize_v3(
    buildId: string,
    hash: string,
    blockSize: number,
    data: DiffPatchRequest
  ): Promise<AxiosResponse<BlockManifest>> {
    const $ = new UploaderV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchHash_ByBuildId_ByHash_ByBlockSize_v3(buildId, hash, blockSize, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath_v3(
    sourceBuildId: string,
    destinationBuildId: string,
    destinationFilePath: string
  ): Promise<AxiosResponse<FileDiffingStatus>> {
    const $ = new UploaderV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath_v3(
      sourceBuildId,
      destinationBuildId,
      destinationFilePath
    )
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to send diff request to MQ.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: diff status&lt;/li&gt;&lt;/ul&gt;
     */
    createDiffSend,
    /**
     * This API is used to send patch request to MQ.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: diff status&lt;/li&gt;&lt;/ul&gt;
     */
    createPatchSend,
    /**
     * This API is used to listen diff status.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: diff status&lt;/li&gt;&lt;/ul&gt;
     */
    createListenDiffStatu,
    /**
     * This API is used to listen patch status from source file and missing bytes file to destination file.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: diff status&lt;/li&gt;&lt;/ul&gt;
     */
    createListenPatchStatu,
    /**
     * This API is used to check the diff status (not yet diff&#39;ed, diff&#39;ed, patched) of a file before upload its control file.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;/v3/startbuildupload&lt;/li&gt;&lt;li&gt;/v3/startbuildupload/{sourceBuildId}&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/startzsyncfileupload/{fileHash}&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: upload data&lt;/li&gt;&lt;/ul&gt;
     */
    createPrezsyncupload_v3,
    /**
     * This API is used to start build upload for v3 upload (Differential Upload). This endpoint is the startpoint of upload.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/prezsyncupload&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build id&lt;/li&gt;&lt;/ul&gt;
     */
    createStartbuildupload_v3,
    /**
     * This API is used to the current build from particular appId. This is a utility API used by BuildUtil to determine whether there&#39;s an older build set as current. If it does, the BuildUtil will proceed the upload as differential upload.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Diff File Status Manifest&lt;/li&gt;&lt;/ul&gt;
     */
    getCurrent_ByAppId_ByPlatformId_v3,
    /**
     * This API is used to start file upload, which in turn will response with presigned URL for upload target.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;/v3/startbuildupload in the case of normal (non-differential) upload&lt;/li&gt;&lt;li&gt;/v3/startbuildupload/{sourceBuildId} in the case of normal (non-differential) incremental upload&lt;/li&gt;&lt;li&gt;/v3/commitzsyncfileupload/{buildId}/{hash} in the case of differential upload&lt;/li&gt;&lt;li&gt;/v3/commitzsyncfileupload/{buildId}/{hash}/{blockSize} to also specify the blocksize in the case of differential upload&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/commitfileupload//{buildId}/{hash}&lt;/li&gt;&lt;/ul&gt;
     */
    createStartfileupload_ByUploaderId_v3,
    /**
     * This API is used to start zsync control file upload, which in turn will respond with presigned url for the upload target.&lt;p&gt;Mandatory fields for body: sourceBuildId, destinationBuildId, destinationFilePath, destinationFileChecksum, binaryUpload{contentMd5, contentLength, hash}Previous API:&lt;ul&gt;&lt;li&gt;/v3/prezsyncupload&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/commitzsyncfileupload/{buildId}/{hash}&lt;/li&gt;&lt;li&gt;/v3/commitzsyncfileupload/{buildId}/{hash}/{blockSize} to also specify the blocksize&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: upload data&lt;/li&gt;&lt;/ul&gt;
     */
    createStartzsyncfileupload_ByFileHash_v3,
    /**
     * This API is used to see whether BuildUtil should upload in differential mode or normal mode.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Diff File Status Manifest&lt;/li&gt;&lt;/ul&gt;
     */
    getUploadmode_ByAppId_ByPlatformId_v3,
    /**
     * This API is used to start build upload. This endpoint used for incremental build upload, where the developer update the files from existing build version (that hasn&#39;t yet set as latest).&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/prezsyncupload&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build id&lt;/li&gt;&lt;/ul&gt;
     */
    createStartbuildupload_BySourceBuildId_v3,
    /**
     * This API is used to commit file that has been uploaded to signal completion.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;/v3/startfileupload/{uploaderId}&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/startzsyncfileupload/{fileHash} for non-differential (normal) upload&lt;/li&gt;&lt;li&gt;/v3/prezsyncupload for differential upload&lt;/li&gt;&lt;/ul&gt;
     */
    patchCommitfileupload_ByBuildId_ByHash_v3,
    /**
     * This API is used to commit build manifest.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;/listenPatchStatus in case needs to patch file&lt;/li&gt;&lt;li&gt;/v3/commitzsyncfileupload/{buildId}/{hash} in case of normal non-differential upload&lt;/li&gt;&lt;li&gt;/v3/commitzsyncfileupload/{buildId}/{hash}/{blockSize} to also specify the blocksize in case of normal non-differential upload&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
     */
    createCommitbuildmanifest_BySourceBuildId_v3,
    /**
     * This API is used to commit missing bytes file that has been uploaded to S3.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;/v3/startzsyncfileupload&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/startfileupload/{uploaderId}&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: chunk data&lt;/li&gt;&lt;/ul&gt;
     */
    patchCommitmissingbytesfileupload_ByHash_v3,
    /**
     * This API is used to commit file that has been uploaded to signal completion.&lt;p&gt;Mandatory fields for body: sourceBuildId, destinationBuildId, destinationFilePath, destinationFileChecksum, destinationControlFileUuid, destinationControlFileChecksumPrevious API:&lt;ul&gt;&lt;li&gt;/v3/startzsyncfileupload&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/startfileupload/{uploaderId} for normal (non-differential) upload&lt;/li&gt;&lt;li&gt;/v3/listendiffstatus for differential upload&lt;/li&gt;&lt;/ul&gt;
     */
    patchCommitzsyncfileupload_ByBuildId_ByHash_v3,
    /**
     * This API is used to set current build as release version. Every build set as current will be recorded in version history as chain of history.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;//TODO previous api&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
     */
    updateVersion_ByAppId_ByVersion_ByPlatformId_v3,
    /**
     * This API is used to commit chunk that has been uploaded. By commiting the file, it means flag the file as already uploaded.&lt;p&gt;Mandatory fields for body: sourceBuildId, destinationBuildId, destinationFilePath, destinationFileChecksum, destinationControlFileUuid, destinationControlFileChecksumPrevious API:&lt;ul&gt;&lt;li&gt;/v3/startzsyncfileupload&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/startfileupload/{uploaderId}&lt;/li&gt;&lt;/ul&gt;
     */
    patchHash_ByBuildId_ByHash_ByBlockSize_v3,
    /**
     * This API is used to get diff status manifests.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Diff File Status Manifest&lt;/li&gt;&lt;/ul&gt;
     */
    getDestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath_v3
  }
}
