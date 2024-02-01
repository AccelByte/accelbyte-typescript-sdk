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
import { BuildIdVersionArray } from '../../generated-definitions/BuildIdVersionArray.js'
import { BuildManifest } from '../../generated-definitions/BuildManifest.js'
import { UpdateBuildMetadataRequest } from '../../generated-definitions/UpdateBuildMetadataRequest.js'
import { UploadBuildManifest } from '../../generated-definitions/UploadBuildManifest.js'
import { UploadSummary } from '../../generated-definitions/UploadSummary.js'

export class UploaderV2Admin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * This API is used to get basic build manifests. Only committed build will be retrieved.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Basic Build Manifest&lt;/li&gt;&lt;/ul&gt;
   */
  getBuildsByAppId(queryParams: { appId: string | null; platformId: string | null }): Promise<IResponseWithSync<BuildIdVersionArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/builds/byAppId'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, BuildIdVersionArray, 'BuildIdVersionArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get basic DLC build manifests. Only committed build will be retrieved.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Basic Build Manifest&lt;/li&gt;&lt;/ul&gt;
   */
  getDlcByGameAppId(queryParams: { appId: string | null; platformId: string | null }): Promise<IResponseWithSync<BuildIdVersionArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/dlc/byGameAppId'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, BuildIdVersionArray, 'BuildIdVersionArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to delete build manifest.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=8 (DELETE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
   */
  deleteBuild_ByBuildId(buildId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/builds/{buildId}'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to get build manifest for build uploaded with BuildInfo v2.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Build Manifest&lt;/li&gt;&lt;/ul&gt;
   */
  getBuild_ByBuildId(buildId: string): Promise<IResponseWithSync<BuildManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/builds/{buildId}'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
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
   * This API is used to edit build&#39;s launchArgument.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: None&lt;/li&gt;&lt;/ul&gt;
   */
  patchBuild_ByBuildId(buildId: string, data: UpdateBuildMetadataRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/builds/{buildId}'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to start build upload.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v2/startfileupload/{uploaderId}&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build id&lt;/li&gt;&lt;/ul&gt;
   */
  createStartbuildupload(data: UploadBuildManifest): Promise<IResponse<BuildManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/startbuildupload'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BuildManifest, 'BuildManifest')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to get diff trigger status.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getDifftriggerStatus(): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/difftrigger/status'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to commit build manifest.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
   */
  createCommitbuildmanifest(data: BuildManifest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/commitbuildmanifest'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to start DLC build upload.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v2/startfileupload/{uploaderId} for normal (non-differential) upload&lt;/li&gt;&lt;li&gt;/v3/prezsyncupload for differential upload&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build id&lt;/li&gt;&lt;/ul&gt;
   */
  createStartdlcbuildupload(data: UploadBuildManifest): Promise<IResponse<BuildManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/startdlcbuildupload'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BuildManifest, 'BuildManifest')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to commit build manifest.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
   */
  createCommitdlcbuildmanifest(data: BuildManifest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/commitdlcbuildmanifest'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to toggle diff trigger status. Use 0 to turn off and 1 to turn on. Any values other than 0 will be regarded as 1.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  patchDifftriggerStatu_ByValue(value: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/difftrigger/status/{value}'
      .replace('{namespace}', this.namespace)
      .replace('{value}', value)
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to start file upload and retrieve upload url.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: upload data&lt;/li&gt;&lt;/ul&gt;
   */
  createStartfileupload_ByUploaderId(uploaderId: string, data: BinaryUpload): Promise<IResponse<UploadSummary>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/startfileupload/{uploaderId}'
      .replace('{namespace}', this.namespace)
      .replace('{uploaderId}', uploaderId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UploadSummary, 'UploadSummary')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to start zsync control file upload and retrieve upload url.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: upload data&lt;/li&gt;&lt;/ul&gt;
   */
  createStartzsyncfileupload_ByFileHash(fileHash: string, data: BinaryUpload): Promise<IResponse<UploadSummary>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/startzsyncfileupload/{fileHash}'
      .replace('{namespace}', this.namespace)
      .replace('{fileHash}', fileHash)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UploadSummary, 'UploadSummary')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to start incremental build upload. This endpoint used for incremental build upload, where developer update the files from existing build version (that hasn&#39;t yet set as latest).&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build id&lt;/li&gt;&lt;/ul&gt;
   */
  createStartbuildupload_BySourceBuildId(sourceBuildId: string, data: UploadBuildManifest): Promise<IResponse<BuildManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/startbuildupload/{sourceBuildId}'
      .replace('{namespace}', this.namespace)
      .replace('{sourceBuildId}', sourceBuildId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BuildManifest, 'BuildManifest')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to commit file that has been uploaded to signal completion.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: chunk data&lt;/li&gt;&lt;/ul&gt;
   */
  patchCommitfileupload_ByBuildId_ByHash(buildId: string, hash: string): Promise<IResponse<BlockManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/commitfileupload/{buildId}/{hash}'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
      .replace('{hash}', hash)
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BlockManifest, 'BlockManifest')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to start DLC build upload. This endpoint used for incremental build upload, where developer update the files from existing build version (that hasn&#39;t yet set as latest).&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build id&lt;/li&gt;&lt;/ul&gt;
   */
  createStartdlcbuildupload_BySourceBuildId(sourceBuildId: string, data: UploadBuildManifest): Promise<IResponse<BuildManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/startdlcbuildupload/{sourceBuildId}'
      .replace('{namespace}', this.namespace)
      .replace('{sourceBuildId}', sourceBuildId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BuildManifest, 'BuildManifest')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to commit file that has been uploaded to signal completion.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: chunk data&lt;/li&gt;&lt;/ul&gt;
   */
  patchCommitzsyncfileupload_ByBuildId_ByHash(buildId: string, hash: string): Promise<IResponse<BlockManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/commitzsyncfileupload/{buildId}/{hash}'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
      .replace('{hash}', hash)
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BlockManifest, 'BlockManifest')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to set current build as release version.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
   */
  updateVersion_ByAppId_ByVersion_ByPlatformId(appId: string, version: string, platformId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/setcurrentbuild/{appId}/{version}/{platformId}'
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
   * This API is used to start diff manifest upload.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: UploadSummary&lt;/li&gt;&lt;/ul&gt;
   */
  createDiffStart_BySourceBuildId_ByDestinationBuildId(
    sourceBuildId: string,
    destinationBuildId: string
  ): Promise<IResponse<UploadSummary>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/diff/start/{sourceBuildId}/{destinationBuildId}'
      .replace('{namespace}', this.namespace)
      .replace('{sourceBuildId}', sourceBuildId)
      .replace('{destinationBuildId}', destinationBuildId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UploadSummary, 'UploadSummary')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to commit diff manifest.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
   */
  patchDiffCommit_BySourceBuildId_ByDestinationBuildId(sourceBuildId: string, destinationBuildId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/diff/commit/{sourceBuildId}/{destinationBuildId}'
      .replace('{namespace}', this.namespace)
      .replace('{sourceBuildId}', sourceBuildId)
      .replace('{destinationBuildId}', destinationBuildId)
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to commit chunk that has been uploaded.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;/v2/startzsyncfileupload&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v2/startfileupload/{uploaderId}&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  patchHash_ByBuildId_ByHash_ByBlockSize(buildId: string, hash: string, blockSize: number): Promise<IResponse<BlockManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/commitzsyncfileupload/{buildId}/{hash}/{blockSize}'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
      .replace('{hash}', hash)
      .replace('{blockSize}', String(blockSize))
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BlockManifest, 'BlockManifest')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Use this API to get the presigned url to upload the diff manifest.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build id&lt;/li&gt;&lt;/ul&gt;
   */
  createDiffSignedurl_BySourceBuildId_ByDestinationBuildId(
    sourceBuildId: string,
    destinationBuildId: string
  ): Promise<IResponse<UploadSummary>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/diff/signedurl/{sourceBuildId}/{destinationBuildId}'
      .replace('{namespace}', this.namespace)
      .replace('{sourceBuildId}', sourceBuildId)
      .replace('{destinationBuildId}', destinationBuildId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UploadSummary, 'UploadSummary')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
