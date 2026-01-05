/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { BasicBuildManifestArray } from '../../generated-definitions/BasicBuildManifestArray.js'
import { BinaryUpload } from '../../generated-definitions/BinaryUpload.js'
import { BlockData } from '../../generated-definitions/BlockData.js'
import { BlockManifest } from '../../generated-definitions/BlockManifest.js'
import { BuildDeletionDataArray } from '../../generated-definitions/BuildDeletionDataArray.js'
import { BuildIdManifest } from '../../generated-definitions/BuildIdManifest.js'
import { BuildIdVersionArray } from '../../generated-definitions/BuildIdVersionArray.js'
import { BuildManifest } from '../../generated-definitions/BuildManifest.js'
import { UploadSummary } from '../../generated-definitions/UploadSummary.js'

export class UploaderV1Admin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to get basic build manifests. Only committed build will be retrieved.
   */
  getBuildsByAppId(queryParams: { appId: string | null }): Promise<Response<BuildIdVersionArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/builds/byAppId'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BuildIdVersionArray, 'BuildIdVersionArray')
  }
  /**
   * @deprecated
   * This API is used to delete build manifest.
   */
  deleteBuild_ByBuildId(buildId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/builds/{buildId}'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This API is used to get build manifest.
   */
  getBuild_ByBuildId(buildId: string): Promise<Response<BuildManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/builds/{buildId}'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BuildManifest, 'BuildManifest')
  }
  /**
   * @deprecated
   * This API is used to start chunk upload and retrieve upload url.
   */
  createStartchunkupload(data: BinaryUpload): Promise<Response<UploadSummary>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/startchunkupload'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UploadSummary, 'UploadSummary')
  }
  /**
   * This API is used to get basic build manifests. Only committed build will be retrieved.
   */
  getBuildsByNamespace(): Promise<Response<BasicBuildManifestArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/builds/byNamespace'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BasicBuildManifestArray,
      'BasicBuildManifestArray'
    )
  }
  /**
   * @deprecated
   * This API is used to commit build manifest.
   */
  createCommitbuildmanifest(data: BuildManifest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/commitbuildmanifest'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This API is used to get build deletion. Only deleted build will be retrieved.
   */
  getBuildsdeletionByAppId(queryParams: {
    appId: string | null
    deletionStatus?: number
    platformId?: string | null
  }): Promise<Response<BuildDeletionDataArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/buildsdeletion/byAppId'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BuildDeletionDataArray,
      'BuildDeletionDataArray'
    )
  }
  /**
   * This API is used to set current build as release version.
   */
  updateSetcurrentbuild_ByBuildId(buildId: string, queryParams?: { sendNotification?: boolean | null }): Promise<Response<unknown>> {
    const params = { sendNotification: true, ...queryParams } as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/setcurrentbuild/{buildId}'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This API is used to retrieve chunk by hash.
   */
  getRetrievechunkbyhash_ByHash(hash: string): Promise<Response<BlockData>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/retrievechunkbyhash/{hash}'
      .replace('{namespace}', this.namespace)
      .replace('{hash}', hash)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BlockData, 'BlockData')
  }
  /**
   * This API is used to retry build deletion.
   */
  updateRetry_ByBuildId(buildId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/builddeletion/{buildId}/retry'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This API is used to cancel build deletion.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=8 (DELETE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
   */
  deleteCancel_ByBuildId(buildId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/builddeletion/{buildId}/cancel'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * This API is used to set current build as release version.
   */
  updateSetcurrentbuild_ByAppId_ByVersion(appId: string, version: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/setcurrentbuild/{appId}/{version}'
      .replace('{namespace}', this.namespace)
      .replace('{appId}', appId)
      .replace('{version}', version)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * This API is used to start build upload.
   */
  createStartbuildupload_ByAppId_ByVersion(appId: string, version: string): Promise<Response<BuildIdManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/startbuildupload/{appId}/{version}'
      .replace('{namespace}', this.namespace)
      .replace('{appId}', appId)
      .replace('{version}', version)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BuildIdManifest, 'BuildIdManifest')
  }
  /**
   * @deprecated
   * This API is used to commit chunk that has been uploaded.
   */
  createUuid_ByHash_ByUuid_ByOffset(hash: string, uuid: string, offset: number): Promise<Response<BlockManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/commitchunkupload/{hash}/{uuid}/{offset}'
      .replace('{namespace}', this.namespace)
      .replace('{hash}', hash)
      .replace('{uuid}', uuid)
      .replace('{offset}', String(offset))
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BlockManifest, 'BlockManifest')
  }
  /**
   * @deprecated
   * This API is used to commit chunk that has been uploaded.
   */
  createOffset_ByHash_ByUuid_ByOffset_ByBlockSize(
    hash: string,
    uuid: string,
    offset: number,
    blockSize: number
  ): Promise<Response<BlockManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/commitchunkupload/{hash}/{uuid}/{offset}/{blockSize}'
      .replace('{namespace}', this.namespace)
      .replace('{hash}', hash)
      .replace('{uuid}', uuid)
      .replace('{offset}', String(offset))
      .replace('{blockSize}', String(blockSize))
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BlockManifest, 'BlockManifest')
  }
}
