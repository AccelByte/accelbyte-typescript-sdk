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
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * This API is used to get basic build manifests. Only committed build will be retrieved.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Basic Build Manifest&lt;/li&gt;&lt;/ul&gt;
   */
  getBuildsByAppId(queryParams: { appId: string | null }): Promise<IResponseWithSync<BuildIdVersionArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/builds/byAppId'.replace('{namespace}', this.namespace)
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
   * @deprecated
   * This API is used to delete build manifest. [DEPRECATED]&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=8 (DELETE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
   */
  deleteBuild_ByBuildId(buildId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/builds/{buildId}'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to get build manifest.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Build Manifest&lt;/li&gt;&lt;/ul&gt;
   */
  getBuild_ByBuildId(buildId: string): Promise<IResponseWithSync<BuildManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/builds/{buildId}'
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
   * @deprecated
   * This API is used to start chunk upload and retrieve upload url. [DEPRECATED]&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: upload data&lt;/li&gt;&lt;/ul&gt;
   */
  createStartchunkupload(data: BinaryUpload): Promise<IResponse<UploadSummary>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/startchunkupload'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UploadSummary, 'UploadSummary')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to get basic build manifests. Only committed build will be retrieved. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Basic Build Manifest&lt;/li&gt;&lt;/ul&gt;
   */
  getBuildsByNamespace(): Promise<IResponseWithSync<BasicBuildManifestArray>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/builds/byNamespace'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, BasicBuildManifestArray, 'BasicBuildManifestArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * @deprecated
   * This API is used to commit build manifest. [DEPRECATED]&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
   */
  createCommitbuildmanifest(data: BuildManifest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/commitbuildmanifest'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to get build deletion. Only deleted build will be retrieved.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: List of build deletion&lt;/li&gt;&lt;/ul&gt;
   */
  getBuildsdeletionByAppId(queryParams: {
    appId: string | null
    deletionStatus?: number
    platformId?: string | null
  }): Promise<IResponseWithSync<BuildDeletionDataArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/buildsdeletion/byAppId'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, BuildDeletionDataArray, 'BuildDeletionDataArray')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to set current build as release version.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
   */
  updateSetcurrentbuild_ByBuildId(buildId: string, queryParams?: { sendNotification?: boolean | null }): Promise<IResponse<unknown>> {
    const params = { sendNotification: true, ...queryParams } as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/setcurrentbuild/{buildId}'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to retrieve chunk by hash.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: chunk data&lt;/li&gt;&lt;/ul&gt;
   */
  getRetrievechunkbyhash_ByHash(hash: string): Promise<IResponseWithSync<BlockData>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/retrievechunkbyhash/{hash}'
      .replace('{namespace}', this.namespace)
      .replace('{hash}', hash)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, BlockData, 'BlockData')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to retry build deletion.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
   */
  updateRetry_ByBuildId(buildId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/builddeletion/{buildId}/retry'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to cancel build deletion.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=8 (DELETE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
   */
  deleteCancel_ByBuildId(buildId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/builddeletion/{buildId}/cancel'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * This API is used to set current build as release version. [DEPRECATED] &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
   */
  updateSetcurrentbuild_ByAppId_ByVersion(appId: string, version: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/setcurrentbuild/{appId}/{version}'
      .replace('{namespace}', this.namespace)
      .replace('{appId}', appId)
      .replace('{version}', version)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * This API is used to start build upload. [DEPRECATED]&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build id&lt;/li&gt;&lt;/ul&gt;
   */
  createStartbuildupload_ByAppId_ByVersion(appId: string, version: string): Promise<IResponse<BuildIdManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/startbuildupload/{appId}/{version}'
      .replace('{namespace}', this.namespace)
      .replace('{appId}', appId)
      .replace('{version}', version)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BuildIdManifest, 'BuildIdManifest')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * This API is used to commit chunk that has been uploaded. [DEPRECATED]&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: chunk data&lt;/li&gt;&lt;/ul&gt;
   */
  createUuid_ByHash_ByUuid_ByOffset(hash: string, uuid: string, offset: number): Promise<IResponse<BlockManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/commitchunkupload/{hash}/{uuid}/{offset}'
      .replace('{namespace}', this.namespace)
      .replace('{hash}', hash)
      .replace('{uuid}', uuid)
      .replace('{offset}', String(offset))
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BlockManifest, 'BlockManifest')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * @deprecated
   * This API is used to commit chunk that has been uploaded. [DEPRECATED]&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: chunk data&lt;/li&gt;&lt;/ul&gt;
   */
  createOffset_ByHash_ByUuid_ByOffset_ByBlockSize(
    hash: string,
    uuid: string,
    offset: number,
    blockSize: number
  ): Promise<IResponse<BlockManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/commitchunkupload/{hash}/{uuid}/{offset}/{blockSize}'
      .replace('{namespace}', this.namespace)
      .replace('{hash}', hash)
      .replace('{uuid}', uuid)
      .replace('{offset}', String(offset))
      .replace('{blockSize}', String(blockSize))
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BlockManifest, 'BlockManifest')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
