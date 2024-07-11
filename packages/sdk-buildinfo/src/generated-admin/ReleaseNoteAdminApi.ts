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
import { ReleaseNoteDto } from '../generated-definitions/ReleaseNoteDto.js'
import { ReleaseNoteManifest } from '../generated-definitions/ReleaseNoteManifest.js'
import { ReleaseNoteAdmin$ } from './endpoints/ReleaseNoteAdmin$.js'

export function ReleaseNoteAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * This API is used to commit release note file that has been uploaded to signal completion.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchReleasenoteUploadCommit_ByHash(hash: string): Promise<BlockManifest> {
    const $ = new ReleaseNoteAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchReleasenoteUploadCommit_ByHash(hash)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to start release note upload and get the presigned URL.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function createReleasenoteUploadStart_ByUploaderId(uploaderId: string, data: BinaryUpload): Promise<BlockManifest> {
    const $ = new ReleaseNoteAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createReleasenoteUploadStart_ByUploaderId(uploaderId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to save release note manifest.&lt;p&gt;It will update the existing release note manifest if exist (based on namespace, appId, platformId and version).&lt;br/&gt;Otherwise, it will create a new release note manifest.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Upload Mode for existing release note manifest:&lt;/b&gt;&lt;br/&gt;0 = update, will merge the old localizations with the new localizations.&lt;br/&gt;1 = replace, will replace the old localizations with the new localizations.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function createReleasenoteManifestSave_ByUploadMode(uploadMode: string, data: ReleaseNoteManifest): Promise<unknown> {
    const $ = new ReleaseNoteAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createReleasenoteManifestSave_ByUploadMode(uploadMode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get release note manifest.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getReleasenoteManifestGet_ByAppId_ByPlatformId(
    appId: string,
    platformId: string,
    queryParams?: { version?: string | null }
  ): Promise<ReleaseNoteDto> {
    const $ = new ReleaseNoteAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getReleasenoteManifestGet_ByAppId_ByPlatformId(appId, platformId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    patchReleasenoteUploadCommit_ByHash,
    createReleasenoteUploadStart_ByUploaderId,
    createReleasenoteManifestSave_ByUploadMode,
    getReleasenoteManifestGet_ByAppId_ByPlatformId
  }
}
