/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
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
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to get basic build manifests. Only committed build will be retrieved.
   */
  getBuildsByAppId_v2(queryParams: { appId: string | null; platformId: string | null }): Promise<Response<BuildIdVersionArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/builds/byAppId'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BuildIdVersionArray, 'BuildIdVersionArray')
  }
  /**
   * This API is used to get basic DLC build manifests. Only committed build will be retrieved.
   */
  getDlcByGameAppId_v2(queryParams: { appId: string | null; platformId: string | null }): Promise<Response<BuildIdVersionArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/dlc/byGameAppId'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BuildIdVersionArray, 'BuildIdVersionArray')
  }
  /**
   * This API is used to delete build manifest.
   */
  deleteBuild_ByBuildId_v2(buildId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/builds/{buildId}'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This API is used to get build manifest for build uploaded with BuildInfo v2.
   */
  getBuild_ByBuildId_v2(buildId: string): Promise<Response<BuildManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/builds/{buildId}'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BuildManifest, 'BuildManifest')
  }
  /**
   * This API is used to edit build&#39;s launchArgument.
   */
  patchBuild_ByBuildId_v2(buildId: string, data: UpdateBuildMetadataRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/builds/{buildId}'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This API is used to start build upload.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v2/startfileupload/{uploaderId}&lt;/li&gt;&lt;/ul&gt;
   */
  createStartbuildupload_v2(data: UploadBuildManifest): Promise<Response<BuildManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/startbuildupload'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BuildManifest, 'BuildManifest')
  }
  /**
   * This API is used to get diff trigger status.
   */
  getDifftriggerStatus_v2(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/difftrigger/status'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This API is used to commit build manifest.
   */
  createCommitbuildmanifest_v2(data: BuildManifest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/commitbuildmanifest'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This API is used to start DLC build upload.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v2/startfileupload/{uploaderId} for normal (non-differential) upload&lt;/li&gt;&lt;li&gt;/v3/prezsyncupload for differential upload&lt;/li&gt;&lt;/ul&gt;
   */
  createStartdlcbuildupload_v2(data: UploadBuildManifest): Promise<Response<BuildManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/startdlcbuildupload'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BuildManifest, 'BuildManifest')
  }
  /**
   * This API is used to commit build manifest.
   */
  createCommitdlcbuildmanifest_v2(data: BuildManifest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/commitdlcbuildmanifest'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This API is used to toggle diff trigger status. Use 0 to turn off and 1 to turn on. Any values other than 0 will be regarded as 1.
   */
  patchDifftriggerStatu_ByValue_v2(value: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/difftrigger/status/{value}'
      .replace('{namespace}', this.namespace)
      .replace('{value}', value)
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This API is used to start file upload and retrieve upload url.
   */
  createStartfileupload_ByUploaderId_v2(uploaderId: string, data: BinaryUpload): Promise<Response<UploadSummary>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/startfileupload/{uploaderId}'
      .replace('{namespace}', this.namespace)
      .replace('{uploaderId}', uploaderId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UploadSummary, 'UploadSummary')
  }
  /**
   * This API is used to start zsync control file upload and retrieve upload url.
   */
  createStartzsyncfileupload_ByFileHash_v2(fileHash: string, data: BinaryUpload): Promise<Response<UploadSummary>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/startzsyncfileupload/{fileHash}'
      .replace('{namespace}', this.namespace)
      .replace('{fileHash}', fileHash)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UploadSummary, 'UploadSummary')
  }
  /**
   * This API is used to start incremental build upload. This endpoint used for incremental build upload, where developer update the files from existing build version (that hasn&#39;t yet set as latest).
   */
  createStartbuildupload_BySourceBuildId_v2(sourceBuildId: string, data: UploadBuildManifest): Promise<Response<BuildManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/startbuildupload/{sourceBuildId}'
      .replace('{namespace}', this.namespace)
      .replace('{sourceBuildId}', sourceBuildId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BuildManifest, 'BuildManifest')
  }
  /**
   * This API is used to commit file that has been uploaded to signal completion.
   */
  patchCommitfileupload_ByBuildId_ByHash_v2(buildId: string, hash: string): Promise<Response<BlockManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/commitfileupload/{buildId}/{hash}'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
      .replace('{hash}', hash)
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BlockManifest, 'BlockManifest')
  }
  /**
   * This API is used to start DLC build upload. This endpoint used for incremental build upload, where developer update the files from existing build version (that hasn&#39;t yet set as latest).
   */
  createStartdlcbuildupload_BySourceBuildId_v2(sourceBuildId: string, data: UploadBuildManifest): Promise<Response<BuildManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/startdlcbuildupload/{sourceBuildId}'
      .replace('{namespace}', this.namespace)
      .replace('{sourceBuildId}', sourceBuildId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BuildManifest, 'BuildManifest')
  }
  /**
   * This API is used to commit file that has been uploaded to signal completion
   */
  patchCommitzsyncfileupload_ByBuildId_ByHash_v2(buildId: string, hash: string): Promise<Response<BlockManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/commitzsyncfileupload/{buildId}/{hash}'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
      .replace('{hash}', hash)
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BlockManifest, 'BlockManifest')
  }
  /**
   * This API is used to set current build as release version.
   */
  updateVersion_ByAppId_ByVersion_ByPlatformId_v2(appId: string, version: string, platformId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/setcurrentbuild/{appId}/{version}/{platformId}'
      .replace('{namespace}', this.namespace)
      .replace('{appId}', appId)
      .replace('{version}', version)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This API is used to start diff manifest upload.
   */
  createDiffStart_BySourceBuildId_ByDestinationBuildId_v2(
    sourceBuildId: string,
    destinationBuildId: string
  ): Promise<Response<UploadSummary>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/diff/start/{sourceBuildId}/{destinationBuildId}'
      .replace('{namespace}', this.namespace)
      .replace('{sourceBuildId}', sourceBuildId)
      .replace('{destinationBuildId}', destinationBuildId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UploadSummary, 'UploadSummary')
  }
  /**
   * This API is used to commit diff manifest.
   */
  patchDiffCommit_BySourceBuildId_ByDestinationBuildId_v2(sourceBuildId: string, destinationBuildId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/diff/commit/{sourceBuildId}/{destinationBuildId}'
      .replace('{namespace}', this.namespace)
      .replace('{sourceBuildId}', sourceBuildId)
      .replace('{destinationBuildId}', destinationBuildId)
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This API is used to commit chunk that has been uploaded.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;/v2/startzsyncfileupload&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v2/startfileupload/{uploaderId}&lt;/li&gt;&lt;/ul&gt;
   */
  patchHash_ByBuildId_ByHash_ByBlockSize_v2(buildId: string, hash: string, blockSize: number): Promise<Response<BlockManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/commitzsyncfileupload/{buildId}/{hash}/{blockSize}'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
      .replace('{hash}', hash)
      .replace('{blockSize}', String(blockSize))
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BlockManifest, 'BlockManifest')
  }
  /**
   * Use this API to get the presigned url to upload the diff manifest.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build id&lt;/li&gt;&lt;/ul&gt;
   */
  createDiffSignedurl_BySourceBuildId_ByDestinationBuildId_v2(
    sourceBuildId: string,
    destinationBuildId: string
  ): Promise<Response<UploadSummary>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/v2/diff/signedurl/{sourceBuildId}/{destinationBuildId}'
      .replace('{namespace}', this.namespace)
      .replace('{sourceBuildId}', sourceBuildId)
      .replace('{destinationBuildId}', destinationBuildId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UploadSummary, 'UploadSummary')
  }
}
