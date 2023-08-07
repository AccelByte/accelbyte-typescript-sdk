/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { BinaryRecordRequest } from './definitions/BinaryRecordRequest.js'
import { BulkGetPlayerBinaryRecordResponse } from './definitions/BulkGetPlayerBinaryRecordResponse.js'
import { BulkGetPlayerRecordsRequest } from './definitions/BulkGetPlayerRecordsRequest.js'
import { BulkUserIDsRequest } from './definitions/BulkUserIDsRequest.js'
import { ListPlayerBinaryRecordsResponse } from './definitions/ListPlayerBinaryRecordsResponse.js'
import { PlayerBinaryRecordMetadataPublicRequest } from './definitions/PlayerBinaryRecordMetadataPublicRequest.js'
import { PlayerBinaryRecordResponse } from './definitions/PlayerBinaryRecordResponse.js'
import { PublicPlayerBinaryRecord$ } from './endpoints/PublicPlayerBinaryRecord$.js'
import { PublicPlayerBinaryRecordCreate } from './definitions/PublicPlayerBinaryRecordCreate.js'
import { UploadBinaryRecordRequest } from './definitions/UploadBinaryRecordRequest.js'
import { UploadBinaryRecordResponse } from './definitions/UploadBinaryRecordResponse.js'

export function PublicPlayerBinaryRecordApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required valid user token Required scope: &lt;code&gt;social&lt;/code&gt; Retrieve list of my binary records by namespace.
   */
  async function getUsersMeBinaries(queryParams?: {
    limit?: number
    offset?: number
    query?: string | null
  }): Promise<ListPlayerBinaryRecordsResponse> {
    const $ = new PublicPlayerBinaryRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeBinaries(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user token Required scope: &lt;code&gt;social&lt;/code&gt; Retrieve player record key and payload in bulk under given namespace. Maximum bulk key limit per request 20
   */
  async function createUserMeBinaryBulk(data: BulkGetPlayerRecordsRequest): Promise<BulkGetPlayerBinaryRecordResponse> {
    const $ = new PublicPlayerBinaryRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeBinaryBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [CREATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Create a player binary record. &lt;p&gt;Other detail info:&lt;/p&gt; &lt;code&gt;key&lt;/code&gt; should follow these rules: 1. support uppercase and lowercase letters, numbers, and separators &lt;b&gt;&#34;-&#34;&lt;/b&gt;, &lt;b&gt;&#34;_&#34;&lt;/b&gt;, &lt;b&gt;&#34;.&#34;&lt;/b&gt; are allowed 2. begin and end with letters or numbers 3. spaces are not allowed 4. separators must not appears twice in a row Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
   */
  async function createBinary_ByUserId(userId: string, data: PublicPlayerBinaryRecordCreate): Promise<UploadBinaryRecordResponse> {
    const $ = new PublicPlayerBinaryRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createBinary_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [DELETE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Delete a player binary record. Only player who own the record can delete it
   */
  async function deleteBinary_ByUserId_ByKey(userId: string, key: string): Promise<unknown> {
    const $ = new PublicPlayerBinaryRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteBinary_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [READ]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Get a player binary record by its key. Private Record: Only user who own the record could retrieve it.
   */
  async function getBinary_ByUserId_ByKey(userId: string, key: string): Promise<PlayerBinaryRecordResponse> {
    const $ = new PublicPlayerBinaryRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getBinary_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Update a player binary record file by its key
   */
  async function updateBinary_ByUserId_ByKey(userId: string, key: string, data: BinaryRecordRequest): Promise<PlayerBinaryRecordResponse> {
    const $ = new PublicPlayerBinaryRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateBinary_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:PUBLIC:CLOUDSAVE:RECORD [READ]&lt;/code&gt; Required Scope: &lt;code&gt;social&lt;/code&gt; Retrieve list of other player public binary records under given namespace.
   */
  async function getBinariesPublic_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<ListPlayerBinaryRecordsResponse> {
    const $ = new PublicPlayerBinaryRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getBinariesPublic_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:PUBLIC:CLOUDSAVE:RECORD [READ]&lt;/code&gt; Required Scope: &lt;code&gt;social&lt;/code&gt; Bulk get other player&#39;s public binary record by userIds, max allowed 20 at a time. Only record with &lt;code&gt;isPublic=true&lt;/code&gt; can be retrieved using this endpoint.
   */
  async function createPublicBulkUser_ByKey(key: string, data: BulkUserIDsRequest): Promise<BulkGetPlayerBinaryRecordResponse> {
    const $ = new PublicPlayerBinaryRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createPublicBulkUser_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:PUBLIC:CLOUDSAVE:RECORD [READ]&lt;/code&gt; Required Scope: &lt;code&gt;social&lt;/code&gt; Retrieve other player public binary record in bulk under given namespace. Maximum bulk key limit per request 20
   */
  async function createBinaryBulk_ByUserId(userId: string, data: BulkGetPlayerRecordsRequest): Promise<BulkGetPlayerBinaryRecordResponse> {
    const $ = new PublicPlayerBinaryRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createBinaryBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:PUBLIC:CLOUDSAVE:RECORD [READ]&lt;/code&gt; Required Scope: &lt;code&gt;social&lt;/code&gt; Get other player&#39;s public binary record. Only record with &lt;code&gt;isPublic=true&lt;/code&gt; can be retrieved using this endpoint.
   */
  async function getPublic_ByUserId_ByKey(userId: string, key: string): Promise<PlayerBinaryRecordResponse> {
    const $ = new PublicPlayerBinaryRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPublic_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Update a player binary record metadata by its key
   */
  async function updateMetadata_ByUserId_ByKey(
    userId: string,
    key: string,
    data: PlayerBinaryRecordMetadataPublicRequest
  ): Promise<PlayerBinaryRecordResponse> {
    const $ = new PublicPlayerBinaryRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateMetadata_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [CREATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Request presigned URL to upload the binary record to s3. &lt;p&gt;Other detail info:&lt;/p&gt; Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
   */
  async function createPresigned_ByUserId_ByKey(
    userId: string,
    key: string,
    data: UploadBinaryRecordRequest
  ): Promise<UploadBinaryRecordResponse> {
    const $ = new PublicPlayerBinaryRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createPresigned_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getUsersMeBinaries,
    createUserMeBinaryBulk,
    createBinary_ByUserId,
    deleteBinary_ByUserId_ByKey,
    getBinary_ByUserId_ByKey,
    updateBinary_ByUserId_ByKey,
    getBinariesPublic_ByUserId,
    createPublicBulkUser_ByKey,
    createBinaryBulk_ByUserId,
    getPublic_ByUserId_ByKey,
    updateMetadata_ByUserId_ByKey,
    createPresigned_ByUserId_ByKey
  }
}
