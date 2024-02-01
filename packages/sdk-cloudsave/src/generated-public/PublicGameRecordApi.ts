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
import { BulkGetGameRecordRequest } from '../generated-definitions/BulkGetGameRecordRequest.js'
import { BulkGetGameRecordResponse } from '../generated-definitions/BulkGetGameRecordResponse.js'
import { GameRecordRequest } from '../generated-definitions/GameRecordRequest.js'
import { GameRecordResponse } from '../generated-definitions/GameRecordResponse.js'
import { PublicGameRecord$ } from './endpoints/PublicGameRecord$.js'

export function PublicGameRecordApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Bulk get game records. Maximum key per request 20.
   */
  async function createRecordBulk(data: BulkGetGameRecordRequest): Promise<BulkGetGameRecordResponse> {
    const $ = new PublicGameRecord$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createRecordBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete records by its key
   */
  async function deleteRecord_ByKey(key: string): Promise<unknown> {
    const $ = new PublicGameRecord$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteRecord_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get game record by its key.
   */
  async function getRecord_ByKey(key: string): Promise<GameRecordResponse> {
    const $ = new PublicGameRecord$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getRecord_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Description This endpoints will create new game record or append the existing game record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored.
   */
  async function createRecord_ByKey(key: string, data: GameRecordRequest): Promise<GameRecordResponse> {
    const $ = new PublicGameRecord$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createRecord_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Description This endpoints will create new game record or replace the existing game record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored.
   */
  async function updateRecord_ByKey(key: string, data: GameRecordRequest): Promise<GameRecordResponse> {
    const $ = new PublicGameRecord$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateRecord_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createRecordBulk,
    deleteRecord_ByKey,
    getRecord_ByKey,
    createRecord_ByKey,
    updateRecord_ByKey
  }
}
