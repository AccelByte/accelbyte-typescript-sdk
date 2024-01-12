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
import { AdminGameBinaryRecordAdmin$ } from './endpoints/AdminGameBinaryRecordAdmin$.js'
import { BinaryRecordRequest } from '../generated-definitions/BinaryRecordRequest.js'
import { GameBinaryRecordCreate } from '../generated-definitions/GameBinaryRecordCreate.js'
import { GameBinaryRecordMetadataRequest } from '../generated-definitions/GameBinaryRecordMetadataRequest.js'
import { GameBinaryRecordResponse } from '../generated-definitions/GameBinaryRecordResponse.js'
import { ListGameBinaryRecordsResponse } from '../generated-definitions/ListGameBinaryRecordsResponse.js'
import { UploadBinaryRecordRequest } from '../generated-definitions/UploadBinaryRecordRequest.js'
import { UploadBinaryRecordResponse } from '../generated-definitions/UploadBinaryRecordResponse.js'

export function AdminGameBinaryRecordAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:CLOUDSAVE:RECORD [READ]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Retrieve list of binary records by namespace.
   */
  async function getBinaries(queryParams?: {
    limit?: number
    offset?: number
    query?: string | null
  }): Promise<ListGameBinaryRecordsResponse> {
    const $ = new AdminGameBinaryRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getBinaries(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:CLOUDSAVE:RECORD [CREATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Create a game binary record. &lt;p&gt;Other detail info:&lt;/p&gt; &lt;code&gt;key&lt;/code&gt; should follow these rules: 1. support uppercase and lowercase letters, numbers, and separators &lt;b&gt;&#34;-&#34;&lt;/b&gt;, &lt;b&gt;&#34;_&#34;&lt;/b&gt;, &lt;b&gt;&#34;.&#34;&lt;/b&gt; are allowed 2. begin and end with letters or numbers 3. spaces are not allowed 4. separators must not appears twice in a row Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
   */
  async function createBinary(data: GameBinaryRecordCreate): Promise<UploadBinaryRecordResponse> {
    const $ = new AdminGameBinaryRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createBinary(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:CLOUDSAVE:RECORD [DELETE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Delete a game binary record.
   */
  async function deleteBinary_ByKey(key: string): Promise<unknown> {
    const $ = new AdminGameBinaryRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteBinary_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:CLOUDSAVE:RECORD [READ]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Get a game binary record by its key.
   */
  async function getBinary_ByKey(key: string): Promise<GameBinaryRecordResponse> {
    const $ = new AdminGameBinaryRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getBinary_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Update a game binary record file by its key
   */
  async function updateBinary_ByKey(key: string, data: BinaryRecordRequest): Promise<GameBinaryRecordResponse> {
    const $ = new AdminGameBinaryRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateBinary_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Update a game binary record metadata by its key
   */
  async function updateMetadata_ByKey(key: string, data: GameBinaryRecordMetadataRequest): Promise<GameBinaryRecordResponse> {
    const $ = new AdminGameBinaryRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateMetadata_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:CLOUDSAVE:RECORD [CREATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Request presigned URL to upload the binary record to s3. &lt;p&gt;Other detail info:&lt;/p&gt; Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
   */
  async function createPresigned_ByKey(key: string, data: UploadBinaryRecordRequest): Promise<UploadBinaryRecordResponse> {
    const $ = new AdminGameBinaryRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createPresigned_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getBinaries,
    createBinary,
    deleteBinary_ByKey,
    getBinary_ByKey,
    updateBinary_ByKey,
    updateMetadata_ByKey,
    createPresigned_ByKey
  }
}
