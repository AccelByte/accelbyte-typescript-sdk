/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { BasicBuildManifestArray } from '../generated-definitions/BasicBuildManifestArray.js'
import { BlockData } from '../generated-definitions/BlockData.js'
import { BuildDeletionDataArray } from '../generated-definitions/BuildDeletionDataArray.js'
import { BuildIdVersionArray } from '../generated-definitions/BuildIdVersionArray.js'
import { BuildManifest } from '../generated-definitions/BuildManifest.js'
import { UploaderV1Admin$ } from './endpoints/UploaderV1Admin$.js'

export function UploaderV1AdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This API is used to get basic build manifests. Only committed build will be retrieved.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Basic Build Manifest&lt;/li&gt;&lt;/ul&gt;
   */
  async function getBuildsByAppId(queryParams: { appId: string | null }): Promise<BuildIdVersionArray> {
    const $ = new UploaderV1Admin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getBuildsByAppId(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get build manifest.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Build Manifest&lt;/li&gt;&lt;/ul&gt;
   */
  async function getBuild_ByBuildId(buildId: string): Promise<BuildManifest> {
    const $ = new UploaderV1Admin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getBuild_ByBuildId(buildId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get basic build manifests. Only committed build will be retrieved. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Basic Build Manifest&lt;/li&gt;&lt;/ul&gt;
   */
  async function getBuildsByNamespace(): Promise<BasicBuildManifestArray> {
    const $ = new UploaderV1Admin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getBuildsByNamespace()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get build deletion. Only deleted build will be retrieved.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: List of build deletion&lt;/li&gt;&lt;/ul&gt;
   */
  async function getBuildsdeletionByAppId(queryParams: {
    appId: string | null
    deletionStatus?: number
    platformId?: string | null
  }): Promise<BuildDeletionDataArray> {
    const $ = new UploaderV1Admin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getBuildsdeletionByAppId(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to set current build as release version.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateSetcurrentbuild_ByBuildId(buildId: string, queryParams?: { sendNotification?: boolean | null }): Promise<unknown> {
    const $ = new UploaderV1Admin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateSetcurrentbuild_ByBuildId(buildId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to retrieve chunk by hash.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: chunk data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getRetrievechunkbyhash_ByHash(hash: string): Promise<BlockData> {
    const $ = new UploaderV1Admin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRetrievechunkbyhash_ByHash(hash)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to retry build deletion.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateRetry_ByBuildId(buildId: string): Promise<unknown> {
    const $ = new UploaderV1Admin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateRetry_ByBuildId(buildId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to cancel build deletion.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=8 (DELETE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: none&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteCancel_ByBuildId(buildId: string): Promise<unknown> {
    const $ = new UploaderV1Admin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteCancel_ByBuildId(buildId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getBuildsByAppId,
    getBuild_ByBuildId,
    getBuildsByNamespace,
    getBuildsdeletionByAppId,
    updateSetcurrentbuild_ByBuildId,
    getRetrievechunkbyhash_ByHash,
    updateRetry_ByBuildId,
    deleteCancel_ByBuildId
  }
}
