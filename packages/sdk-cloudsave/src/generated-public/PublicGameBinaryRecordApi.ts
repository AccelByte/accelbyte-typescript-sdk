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
import { BinaryRecordRequest } from '../generated-definitions/BinaryRecordRequest.js'
import { BulkGetGameBinaryRecordResponse } from '../generated-definitions/BulkGetGameBinaryRecordResponse.js'
import { BulkGetGameRecordRequest } from '../generated-definitions/BulkGetGameRecordRequest.js'
import { GameBinaryRecordResponse } from '../generated-definitions/GameBinaryRecordResponse.js'
import { ListGameBinaryRecordsResponse } from '../generated-definitions/ListGameBinaryRecordsResponse.js'
import { PublicGameBinaryRecord$ } from './endpoints/PublicGameBinaryRecord$.js'
import { PublicGameBinaryRecordCreate } from '../generated-definitions/PublicGameBinaryRecordCreate.js'
import { UploadBinaryRecordRequest } from '../generated-definitions/UploadBinaryRecordRequest.js'
import { UploadBinaryRecordResponse } from '../generated-definitions/UploadBinaryRecordResponse.js'

export function PublicGameBinaryRecordApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * Retrieve list of binary records by namespace.
   */
  async function getBinaries(queryParams?: {
    limit?: number
    offset?: number
    query?: string | null
    tags?: string[]
  }): Promise<ListGameBinaryRecordsResponse> {
    const $ = new PublicGameBinaryRecord$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getBinaries(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create a game binary record. Other detail info: `key` should follow these rules: 1. support uppercase and lowercase letters, numbers, and separators **&#34;-&#34;**, **&#34;_&#34;**, **&#34;.&#34;** are allowed 2. begin and end with letters or numbers 3. spaces are not allowed 4. separators must not appears twice in a row Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
   */
  async function createBinary(data: PublicGameBinaryRecordCreate): Promise<UploadBinaryRecordResponse> {
    const $ = new PublicGameBinaryRecord$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createBinary(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk get game binary records. Maximum key per request 20.
   */
  async function createBinaryBulk(data: BulkGetGameRecordRequest): Promise<BulkGetGameBinaryRecordResponse> {
    const $ = new PublicGameBinaryRecord$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createBinaryBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete a game binary record.
   */
  async function deleteBinary_ByKey(key: string): Promise<unknown> {
    const $ = new PublicGameBinaryRecord$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteBinary_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get a game binary record by its key.
   */
  async function getBinary_ByKey(key: string): Promise<GameBinaryRecordResponse> {
    const $ = new PublicGameBinaryRecord$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getBinary_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update a game binary record file by its key
   */
  async function updateBinary_ByKey(key: string, data: BinaryRecordRequest): Promise<GameBinaryRecordResponse> {
    const $ = new PublicGameBinaryRecord$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateBinary_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Request presigned URL to upload the binary record to s3. Other detail info: Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
   */
  async function createPresigned_ByKey(key: string, data: UploadBinaryRecordRequest): Promise<UploadBinaryRecordResponse> {
    const $ = new PublicGameBinaryRecord$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createPresigned_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getBinaries,
    createBinary,
    createBinaryBulk,
    deleteBinary_ByKey,
    getBinary_ByKey,
    updateBinary_ByKey,
    createPresigned_ByKey
  }
}
