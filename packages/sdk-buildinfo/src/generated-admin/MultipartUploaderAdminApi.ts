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
import { BlockManifest } from '../generated-definitions/BlockManifest.js'
import { CommitMultipartUploadRequest } from '../generated-definitions/CommitMultipartUploadRequest.js'
import { MultipartUploadSummary } from '../generated-definitions/MultipartUploadSummary.js'
import { MultipartUploadedPart } from '../generated-definitions/MultipartUploadedPart.js'
import { StartMultipartUploadRequest } from '../generated-definitions/StartMultipartUploadRequest.js'
import { MultipartUploaderAdmin$ } from './endpoints/MultipartUploaderAdmin$.js'

export function MultipartUploaderAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * This API is used to &lt;b&gt;start multipart file upload&lt;/b&gt;. The service will returns the list of presigned urls that will be used to upload the Parts.&lt;br/&gt;Make sure to upload the Parts in-order based on the presigned urls order.The size of each Part should above or equals to 5MB, except the last one.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission (IAM Auth)&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: multipart upload summary&lt;/li&gt;&lt;/ul&gt;
   */
  async function createBlockMultipart(data: StartMultipartUploadRequest): Promise<MultipartUploadSummary> {
    const $ = new MultipartUploaderAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createBlockMultipart(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to &lt;b&gt;start resumable multipart file upload&lt;/b&gt;.&lt;br/&gt;The service will returns the list of presigned urls that will be used to upload the Parts.&lt;br/&gt;If there&#39;s a missing Part in the presigned urls list, it indicates that the Part already uploaded previously, so it can be skipped.&lt;br/&gt;The size of each Part should above or equals to 5MB, except the last Part.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission (IAM Auth)&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: multipart upload summary&lt;/li&gt;&lt;/ul&gt;
   */
  async function createBlockMultipart_ByNS(data: StartMultipartUploadRequest): Promise<MultipartUploadSummary> {
    const $ = new MultipartUploaderAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createBlockMultipart_ByNS(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to &lt;b&gt;abort multipart file upload&lt;/b&gt;. The aborted multipart file upload cannot be continued again.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission (IAM Auth)&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteBlockMultipart_ByHash(hash: string): Promise<BlockManifest> {
    const $ = new MultipartUploaderAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteBlockMultipart_ByHash(hash)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to &lt;b&gt;commit multipart file upload&lt;/b&gt; to signal the upload completion.&lt;br/&gt;The request should contains list of PartNumber along with its ETag value. The list should be in-order.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission (IAM Auth)&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: block manifest&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchBlockMultipart_ByHash(hash: string, data: CommitMultipartUploadRequest): Promise<BlockManifest> {
    const $ = new MultipartUploaderAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchBlockMultipart_ByHash(hash, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to &lt;b&gt;abort resumable multipart file upload&lt;/b&gt;.&lt;br/&gt;The aborted multipart file upload cannot be continued again.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission (IAM Auth)&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteBlockMultipart_ByHash_ByNS(hash: string): Promise<BlockManifest> {
    const $ = new MultipartUploaderAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteBlockMultipart_ByHash_ByNS(hash)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to &lt;b&gt;commit resumable multipart file upload&lt;/b&gt; to signal the upload completion.&lt;br/&gt;If there&#39;s a missing Part that not uploaded yet, then the multipart file upload cannot be committed.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission (IAM Auth)&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: block manifest&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchBlockMultipart_ByHash_ByNS(hash: string): Promise<BlockManifest> {
    const $ = new MultipartUploaderAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchBlockMultipart_ByHash_ByNS(hash)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to &lt;b&gt;commit the Part of multipart upload&lt;/b&gt;.&lt;br/&gt;The committed Part will be marked as completed, so in case the multipart file upload retries, it won&#39;t be included in the list of unuploaded parts.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission (IAM Auth)&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: None&lt;/li&gt;&lt;/ul&gt;
   */
  async function createPartBlock_ByHash(hash: string, data: MultipartUploadedPart): Promise<MultipartUploadSummary> {
    const $ = new MultipartUploaderAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createPartBlock_ByHash(hash, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createBlockMultipart,
    createBlockMultipart_ByNS,
    deleteBlockMultipart_ByHash,
    patchBlockMultipart_ByHash,
    deleteBlockMultipart_ByHash_ByNS,
    patchBlockMultipart_ByHash_ByNS,
    createPartBlock_ByHash
  }
}
