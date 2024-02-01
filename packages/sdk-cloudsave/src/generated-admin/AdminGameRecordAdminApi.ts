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
import { AdminGameRecordAdmin$ } from './endpoints/AdminGameRecordAdmin$.js'
import { GameRecordRequest } from '../generated-definitions/GameRecordRequest.js'
import { GameRecordResponse } from '../generated-definitions/GameRecordResponse.js'
import { ListGameRecordKeysResponse } from '../generated-definitions/ListGameRecordKeysResponse.js'

export function AdminGameRecordAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Retrieve list of records key by namespace
   */
  async function getRecords(queryParams: { limit: number; offset: number; query?: string | null }): Promise<ListGameRecordKeysResponse> {
    const $ = new AdminGameRecordAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getRecords(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoints delete game record in namespace-level
   */
  async function deleteRecord_ByKey(key: string): Promise<unknown> {
    const $ = new AdminGameRecordAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteRecord_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get a record by its key in namespace-level.
   */
  async function getRecord_ByKey(key: string): Promise<GameRecordResponse> {
    const $ = new AdminGameRecordAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getRecord_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Description This endpoints will create new game record or append the existing game record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;set_by&#34;: &#34;SERVER&#34; } ... } ```
   */
  async function createRecord_ByKey(key: string, data: GameRecordRequest): Promise<GameRecordResponse> {
    const $ = new AdminGameRecordAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createRecord_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Description This endpoints will create new game record or replace the existing game record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;set_by&#34;: &#34;SERVER&#34; } ... } ```
   */
  async function updateRecord_ByKey(key: string, data: GameRecordRequest): Promise<GameRecordResponse> {
    const $ = new AdminGameRecordAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateRecord_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getRecords,
    deleteRecord_ByKey,
    getRecord_ByKey,
    createRecord_ByKey,
    updateRecord_ByKey
  }
}
