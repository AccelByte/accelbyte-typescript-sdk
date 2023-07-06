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
import { GameBinaryRecordResponse } from './definitions/GameBinaryRecordResponse.js'
import { ListGameBinaryRecordsResponse } from './definitions/ListGameBinaryRecordsResponse.js'
import { PublicGameBinaryRecord$ } from './endpoints/PublicGameBinaryRecord$.js'
import { PublicGameBinaryRecordCreate } from './definitions/PublicGameBinaryRecordCreate.js'
import { UploadBinaryRecordRequest } from './definitions/UploadBinaryRecordRequest.js'
import { UploadBinaryRecordResponse } from './definitions/UploadBinaryRecordResponse.js'

export function PublicGameBinaryRecordApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:CLOUDSAVE:RECORD [READ]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Retrieve list of binary records by namespace.
   */
  async function getBinaries(queryParams: {
    limit: number
    offset: number
    query?: string | null
  }): Promise<ListGameBinaryRecordsResponse> {
    const $ = new PublicGameBinaryRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getBinaries(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:CLOUDSAVE:RECORD [CREATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Create a game binary record.
   */
  async function createBinary(data: PublicGameBinaryRecordCreate): Promise<UploadBinaryRecordResponse> {
    const $ = new PublicGameBinaryRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createBinary(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:CLOUDSAVE:RECORD [DELETE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Delete a game binary record.
   */
  async function deleteBinary_ByKey(key: string): Promise<unknown> {
    const $ = new PublicGameBinaryRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteBinary_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:CLOUDSAVE:RECORD [READ]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Get a game binary record by its key.
   */
  async function getBinary_ByKey(key: string): Promise<GameBinaryRecordResponse> {
    const $ = new PublicGameBinaryRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getBinary_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Update a game binary record file by its key
   */
  async function updateBinary_ByKey(key: string, data: BinaryRecordRequest): Promise<GameBinaryRecordResponse> {
    const $ = new PublicGameBinaryRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateBinary_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:CLOUDSAVE:RECORD [CREATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Request presigned URL to upload the binary record to s3.
   */
  async function createPresigned_ByKey(key: string, data: UploadBinaryRecordRequest): Promise<UploadBinaryRecordResponse> {
    const $ = new PublicGameBinaryRecord$(Network.create(requestConfig), namespace, cache)
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
    createPresigned_ByKey
  }
}
