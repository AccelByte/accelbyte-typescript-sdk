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
import { AdminPlayerBinaryRecordAdmin$ } from './endpoints/AdminPlayerBinaryRecordAdmin$.js'
import { BinaryRecordRequest } from '../generated-definitions/BinaryRecordRequest.js'
import { ListPlayerBinaryRecordsResponse } from '../generated-definitions/ListPlayerBinaryRecordsResponse.js'
import { PlayerBinaryRecordCreate } from '../generated-definitions/PlayerBinaryRecordCreate.js'
import { PlayerBinaryRecordMetadataRequest } from '../generated-definitions/PlayerBinaryRecordMetadataRequest.js'
import { PlayerBinaryRecordResponse } from '../generated-definitions/PlayerBinaryRecordResponse.js'
import { UploadBinaryRecordRequest } from '../generated-definitions/UploadBinaryRecordRequest.js'
import { UploadBinaryRecordResponse } from '../generated-definitions/UploadBinaryRecordResponse.js'

export function AdminPlayerBinaryRecordAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [READ]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Retrieve list of player binary records by namespace.
   */
  async function getBinaries_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; query?: string | null }
  ): Promise<ListPlayerBinaryRecordsResponse> {
    const $ = new AdminPlayerBinaryRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getBinaries_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [CREATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Create a player binary record. &lt;p&gt;Other detail info:&lt;/p&gt; &lt;code&gt;key&lt;/code&gt; should follow these rules: 1. support uppercase and lowercase letters, numbers, and separators &lt;b&gt;&#34;-&#34;&lt;/b&gt;, &lt;b&gt;&#34;_&#34;&lt;/b&gt;, &lt;b&gt;&#34;.&#34;&lt;/b&gt; are allowed 2. begin and end with letters or numbers 3. spaces are not allowed 4. separators must not appears twice in a row Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
   */
  async function createBinary_ByUserId(userId: string, data: PlayerBinaryRecordCreate): Promise<UploadBinaryRecordResponse> {
    const $ = new AdminPlayerBinaryRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createBinary_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [DELETE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Delete a player binary record.
   */
  async function deleteBinary_ByUserId_ByKey(userId: string, key: string): Promise<unknown> {
    const $ = new AdminPlayerBinaryRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteBinary_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [READ]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Get a player binary record by its key.
   */
  async function getBinary_ByUserId_ByKey(userId: string, key: string): Promise<PlayerBinaryRecordResponse> {
    const $ = new AdminPlayerBinaryRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getBinary_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Update a player binary record file by its key
   */
  async function updateBinary_ByUserId_ByKey(userId: string, key: string, data: BinaryRecordRequest): Promise<PlayerBinaryRecordResponse> {
    const $ = new AdminPlayerBinaryRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateBinary_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Update a player binary record metadata by its key
   */
  async function updateMetadata_ByUserId_ByKey(
    userId: string,
    key: string,
    data: PlayerBinaryRecordMetadataRequest
  ): Promise<PlayerBinaryRecordResponse> {
    const $ = new AdminPlayerBinaryRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateMetadata_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [CREATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Request presigned URL to upload the binary record to s3. &lt;p&gt;Other detail info:&lt;/p&gt; Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
   */
  async function createPresigned_ByUserId_ByKey(
    userId: string,
    key: string,
    data: UploadBinaryRecordRequest
  ): Promise<UploadBinaryRecordResponse> {
    const $ = new AdminPlayerBinaryRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createPresigned_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getBinaries_ByUserId,
    createBinary_ByUserId,
    deleteBinary_ByUserId_ByKey,
    getBinary_ByUserId_ByKey,
    updateBinary_ByUserId_ByKey,
    updateMetadata_ByUserId_ByKey,
    createPresigned_ByUserId_ByKey
  }
}
