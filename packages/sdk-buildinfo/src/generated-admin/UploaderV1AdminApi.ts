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
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { BasicBuildManifestArray } from '../generated-definitions/BasicBuildManifestArray.js'
import { BinaryUpload } from '../generated-definitions/BinaryUpload.js'
import { BlockData } from '../generated-definitions/BlockData.js'
import { BlockManifest } from '../generated-definitions/BlockManifest.js'
import { BuildDeletionDataArray } from '../generated-definitions/BuildDeletionDataArray.js'
import { BuildIdManifest } from '../generated-definitions/BuildIdManifest.js'
import { BuildIdVersionArray } from '../generated-definitions/BuildIdVersionArray.js'
import { BuildManifest } from '../generated-definitions/BuildManifest.js'
import { UploadSummary } from '../generated-definitions/UploadSummary.js'
import { UploaderV1Admin$ } from './endpoints/UploaderV1Admin$.js'

export function UploaderV1AdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getBuildsByAppId(queryParams: { appId: string | null }): Promise<AxiosResponse<BuildIdVersionArray>> {
    const $ = new UploaderV1Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBuildsByAppId(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteBuild_ByBuildId(buildId: string): Promise<AxiosResponse<unknown>> {
    const $ = new UploaderV1Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteBuild_ByBuildId(buildId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getBuild_ByBuildId(buildId: string): Promise<AxiosResponse<BuildManifest>> {
    const $ = new UploaderV1Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBuild_ByBuildId(buildId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createStartchunkupload(data: BinaryUpload): Promise<AxiosResponse<UploadSummary>> {
    const $ = new UploaderV1Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStartchunkupload(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getBuildsByNamespace(): Promise<AxiosResponse<BasicBuildManifestArray>> {
    const $ = new UploaderV1Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBuildsByNamespace()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createCommitbuildmanifest(data: BuildManifest): Promise<AxiosResponse<unknown>> {
    const $ = new UploaderV1Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createCommitbuildmanifest(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getBuildsdeletionByAppId(queryParams: {
    appId: string | null
    deletionStatus?: number
    platformId?: string | null
  }): Promise<AxiosResponse<BuildDeletionDataArray>> {
    const $ = new UploaderV1Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBuildsdeletionByAppId(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateSetcurrentbuild_ByBuildId(
    buildId: string,
    queryParams?: { sendNotification?: boolean | null }
  ): Promise<AxiosResponse<unknown>> {
    const $ = new UploaderV1Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateSetcurrentbuild_ByBuildId(buildId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRetrievechunkbyhash_ByHash(hash: string): Promise<AxiosResponse<BlockData>> {
    const $ = new UploaderV1Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRetrievechunkbyhash_ByHash(hash)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRetry_ByBuildId(buildId: string): Promise<AxiosResponse<unknown>> {
    const $ = new UploaderV1Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRetry_ByBuildId(buildId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteCancel_ByBuildId(buildId: string): Promise<AxiosResponse<unknown>> {
    const $ = new UploaderV1Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteCancel_ByBuildId(buildId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateSetcurrentbuild_ByAppId_ByVersion(appId: string, version: string): Promise<AxiosResponse<unknown>> {
    const $ = new UploaderV1Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateSetcurrentbuild_ByAppId_ByVersion(appId, version)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createStartbuildupload_ByAppId_ByVersion(appId: string, version: string): Promise<AxiosResponse<BuildIdManifest>> {
    const $ = new UploaderV1Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStartbuildupload_ByAppId_ByVersion(appId, version)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUuid_ByHash_ByUuid_ByOffset(hash: string, uuid: string, offset: number): Promise<AxiosResponse<BlockManifest>> {
    const $ = new UploaderV1Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUuid_ByHash_ByUuid_ByOffset(hash, uuid, offset)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createOffset_ByHash_ByUuid_ByOffset_ByBlockSize(
    hash: string,
    uuid: string,
    offset: number,
    blockSize: number
  ): Promise<AxiosResponse<BlockManifest>> {
    const $ = new UploaderV1Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createOffset_ByHash_ByUuid_ByOffset_ByBlockSize(hash, uuid, offset, blockSize)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to get basic build manifests. Only committed build will be retrieved.
     */
    getBuildsByAppId,
    /**
     * @deprecated
     * This API is used to delete build manifest.
     */
    deleteBuild_ByBuildId,
    /**
     * This API is used to get build manifest.
     */
    getBuild_ByBuildId,
    /**
     * @deprecated
     * This API is used to start chunk upload and retrieve upload url.
     */
    createStartchunkupload,
    /**
     * This API is used to get basic build manifests. Only committed build will be retrieved.
     */
    getBuildsByNamespace,
    /**
     * @deprecated
     * This API is used to commit build manifest.
     */
    createCommitbuildmanifest,
    /**
     * This API is used to get build deletion. Only deleted build will be retrieved.
     */
    getBuildsdeletionByAppId,
    /**
     * This API is used to set current build as release version.
     */
    updateSetcurrentbuild_ByBuildId,
    /**
     * This API is used to retrieve chunk by hash.
     */
    getRetrievechunkbyhash_ByHash,
    /**
     * This API is used to retry build deletion.
     */
    updateRetry_ByBuildId,
    /**
     * This API is used to cancel build deletion.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=8 (DELETE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
     */
    deleteCancel_ByBuildId,
    /**
     * @deprecated
     * This API is used to set current build as release version.
     */
    updateSetcurrentbuild_ByAppId_ByVersion,
    /**
     * @deprecated
     * This API is used to start build upload.
     */
    createStartbuildupload_ByAppId_ByVersion,
    /**
     * @deprecated
     * This API is used to commit chunk that has been uploaded.
     */
    createUuid_ByHash_ByUuid_ByOffset,
    /**
     * @deprecated
     * This API is used to commit chunk that has been uploaded.
     */
    createOffset_ByHash_ByUuid_ByOffset_ByBlockSize
  }
}
