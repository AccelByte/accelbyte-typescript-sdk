/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { BinaryUpload } from '../../generated-definitions/BinaryUpload.js'
import { BlockManifest } from '../../generated-definitions/BlockManifest.js'
import { BuildManifest } from '../../generated-definitions/BuildManifest.js'
import { DiffPatchRequest } from '../../generated-definitions/DiffPatchRequest.js'
import { DifferentialBuildManifest } from '../../generated-definitions/DifferentialBuildManifest.js'
import { DifferentialUploadSummary } from '../../generated-definitions/DifferentialUploadSummary.js'
import { FileDiffingStatus } from '../../generated-definitions/FileDiffingStatus.js'
import { PreCheckUploadRequest } from '../../generated-definitions/PreCheckUploadRequest.js'
import { UploadBuildManifest } from '../../generated-definitions/UploadBuildManifest.js'
import { UploadModeCheck } from '../../generated-definitions/UploadModeCheck.js'
import { UploadSummary } from '../../generated-definitions/UploadSummary.js'
import { ZsyncDiffRequest } from '../../generated-definitions/ZsyncDiffRequest.js'

export class UploaderV3Admin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * This API is used to send diff request to MQ.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: diff status&lt;/li&gt;&lt;/ul&gt;
   */
  createDiffSend(data: DiffPatchRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/diff/send'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to send patch request to MQ.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: diff status&lt;/li&gt;&lt;/ul&gt;
   */
  createPatchSend(data: DiffPatchRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/patch/send'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to listen diff status.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: diff status&lt;/li&gt;&lt;/ul&gt;
   */
  createListenDiffStatu(data: DiffPatchRequest): Promise<IResponse<FileDiffingStatus>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/listenDiffStatus'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, FileDiffingStatus, 'FileDiffingStatus')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to listen patch status from source file and missing bytes file to destination file.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: diff status&lt;/li&gt;&lt;/ul&gt;
   */
  createListenPatchStatu(data: DiffPatchRequest): Promise<IResponse<FileDiffingStatus>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/listenPatchStatus'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, FileDiffingStatus, 'FileDiffingStatus')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to check the diff status (not yet diff&#39;ed, diff&#39;ed, patched) of a file before upload its control file.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;/v3/startbuildupload&lt;/li&gt;&lt;li&gt;/v3/startbuildupload/{sourceBuildId}&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/startzsyncfileupload/{fileHash}&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: upload data&lt;/li&gt;&lt;/ul&gt;
   */
  createPrezsyncupload(data: PreCheckUploadRequest): Promise<IResponse<DifferentialUploadSummary>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v3/prezsyncupload'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, DifferentialUploadSummary, 'DifferentialUploadSummary')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to start build upload for v3 upload (Differential Upload). This endpoint is the startpoint of upload.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/prezsyncupload&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build id&lt;/li&gt;&lt;/ul&gt;
   */
  createStartbuildupload(data: UploadBuildManifest): Promise<IResponse<DifferentialBuildManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v3/startbuildupload'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, DifferentialBuildManifest, 'DifferentialBuildManifest')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to the current build from particular appId. This is a utility API used by BuildUtil to determine whether there&#39;s an older build set as current. If it does, the BuildUtil will proceed the upload as differential upload.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Diff File Status Manifest&lt;/li&gt;&lt;/ul&gt;
   */
  getCurrent_ByAppId_ByPlatformId(appId: string, platformId: string): Promise<IResponseWithSync<BuildManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v3/current/{appId}/{platformId}'
      .replace('{namespace}', this.namespace)
      .replace('{appId}', appId)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, BuildManifest, 'BuildManifest')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to start file upload, which in turn will response with presigned URL for upload target.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;/v3/startbuildupload in the case of normal (non-differential) upload&lt;/li&gt;&lt;li&gt;/v3/startbuildupload/{sourceBuildId} in the case of normal (non-differential) incremental upload&lt;/li&gt;&lt;li&gt;/v3/commitzsyncfileupload/{buildId}/{hash} in the case of differential upload&lt;/li&gt;&lt;li&gt;/v3/commitzsyncfileupload/{buildId}/{hash}/{blockSize} to also specify the blocksize in the case of differential upload&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/commitfileupload//{buildId}/{hash}&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  createStartfileupload_ByUploaderId(uploaderId: string, data: BinaryUpload): Promise<IResponse<UploadSummary>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v3/startfileupload/{uploaderId}'
      .replace('{namespace}', this.namespace)
      .replace('{uploaderId}', uploaderId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UploadSummary, 'UploadSummary')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to start zsync control file upload, which in turn will respond with presigned url for the upload target.&lt;p&gt;Mandatory fields for body: sourceBuildId, destinationBuildId, destinationFilePath, destinationFileChecksum, binaryUpload{contentMd5, contentLength, hash}Previous API:&lt;ul&gt;&lt;li&gt;/v3/prezsyncupload&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/commitzsyncfileupload/{buildId}/{hash}&lt;/li&gt;&lt;li&gt;/v3/commitzsyncfileupload/{buildId}/{hash}/{blockSize} to also specify the blocksize&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: upload data&lt;/li&gt;&lt;/ul&gt;
   */
  createStartzsyncfileupload_ByFileHash(fileHash: string, data: ZsyncDiffRequest): Promise<IResponse<UploadSummary>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v3/startzsyncfileupload/{fileHash}'
      .replace('{namespace}', this.namespace)
      .replace('{fileHash}', fileHash)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UploadSummary, 'UploadSummary')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to see whether BuildUtil should upload in differential mode or normal mode.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Diff File Status Manifest&lt;/li&gt;&lt;/ul&gt;
   */
  getUploadmode_ByAppId_ByPlatformId(appId: string, platformId: string): Promise<IResponseWithSync<UploadModeCheck>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v3/uploadmode/{appId}/{platformId}'
      .replace('{namespace}', this.namespace)
      .replace('{appId}', appId)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, UploadModeCheck, 'UploadModeCheck')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to start build upload. This endpoint used for incremental build upload, where the developer update the files from existing build version (that hasn&#39;t yet set as latest).&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/prezsyncupload&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build id&lt;/li&gt;&lt;/ul&gt;
   */
  createStartbuildupload_BySourceBuildId(sourceBuildId: string, data: UploadBuildManifest): Promise<IResponse<DifferentialBuildManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v3/startbuildupload/{sourceBuildId}'
      .replace('{namespace}', this.namespace)
      .replace('{sourceBuildId}', sourceBuildId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, DifferentialBuildManifest, 'DifferentialBuildManifest')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to commit file that has been uploaded to signal completion.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;/v3/startfileupload/{uploaderId}&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/startzsyncfileupload/{fileHash} for non-differential (normal) upload&lt;/li&gt;&lt;li&gt;/v3/prezsyncupload for differential upload&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  patchCommitfileupload_ByBuildId_ByHash(buildId: string, hash: string): Promise<IResponse<BlockManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v3/commitfileupload/{buildId}/{hash}'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
      .replace('{hash}', hash)
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BlockManifest, 'BlockManifest')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to commit build manifest.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;/listenPatchStatus in case needs to patch file&lt;/li&gt;&lt;li&gt;/v3/commitzsyncfileupload/{buildId}/{hash} in case of normal non-differential upload&lt;/li&gt;&lt;li&gt;/v3/commitzsyncfileupload/{buildId}/{hash}/{blockSize} to also specify the blocksize in case of normal non-differential upload&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
   */
  createCommitbuildmanifest_BySourceBuildId(sourceBuildId: string, data: BuildManifest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v3/commitbuildmanifest/{sourceBuildId}'
      .replace('{namespace}', this.namespace)
      .replace('{sourceBuildId}', sourceBuildId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to commit missing bytes file that has been uploaded to S3.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;/v3/startzsyncfileupload&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/startfileupload/{uploaderId}&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: chunk data&lt;/li&gt;&lt;/ul&gt;
   */
  patchCommitmissingbytesfileupload_ByHash(hash: string, data: DiffPatchRequest): Promise<IResponse<BlockManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v3/commitmissingbytesfileupload/{hash}'
      .replace('{namespace}', this.namespace)
      .replace('{hash}', hash)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BlockManifest, 'BlockManifest')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to commit file that has been uploaded to signal completion.&lt;p&gt;Mandatory fields for body: sourceBuildId, destinationBuildId, destinationFilePath, destinationFileChecksum, destinationControlFileUuid, destinationControlFileChecksumPrevious API:&lt;ul&gt;&lt;li&gt;/v3/startzsyncfileupload&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/startfileupload/{uploaderId} for normal (non-differential) upload&lt;/li&gt;&lt;li&gt;/v3/listendiffstatus for differential upload&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  patchCommitzsyncfileupload_ByBuildId_ByHash(buildId: string, hash: string, data: DiffPatchRequest): Promise<IResponse<BlockManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v3/commitzsyncfileupload/{buildId}/{hash}'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
      .replace('{hash}', hash)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BlockManifest, 'BlockManifest')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to set current build as release version. Every build set as current will be recorded in version history as chain of history.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;//TODO previous api&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
   */
  updateVersion_ByAppId_ByVersion_ByPlatformId(appId: string, version: string, platformId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v3/setcurrentbuild/{appId}/{version}/{platformId}'
      .replace('{namespace}', this.namespace)
      .replace('{appId}', appId)
      .replace('{version}', version)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to commit chunk that has been uploaded. By commiting the file, it means flag the file as already uploaded.&lt;p&gt;Mandatory fields for body: sourceBuildId, destinationBuildId, destinationFilePath, destinationFileChecksum, destinationControlFileUuid, destinationControlFileChecksumPrevious API:&lt;ul&gt;&lt;li&gt;/v3/startzsyncfileupload&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v3/startfileupload/{uploaderId}&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  patchHash_ByBuildId_ByHash_ByBlockSize(
    buildId: string,
    hash: string,
    blockSize: number,
    data: DiffPatchRequest
  ): Promise<IResponse<BlockManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v3/commitzsyncfileupload/{buildId}/{hash}/{blockSize}'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
      .replace('{hash}', hash)
      .replace('{blockSize}', String(blockSize))
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BlockManifest, 'BlockManifest')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to get diff status manifests.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Diff File Status Manifest&lt;/li&gt;&lt;/ul&gt;
   */
  getDestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath(
    sourceBuildId: string,
    destinationBuildId: string,
    destinationFilePath: string
  ): Promise<IResponseWithSync<FileDiffingStatus>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v3/diff/status/{sourceBuildId}/{destinationBuildId}/{destinationFilePath}'
      .replace('{namespace}', this.namespace)
      .replace('{sourceBuildId}', sourceBuildId)
      .replace('{destinationBuildId}', destinationBuildId)
      .replace('{destinationFilePath}', destinationFilePath)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, FileDiffingStatus, 'FileDiffingStatus')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
