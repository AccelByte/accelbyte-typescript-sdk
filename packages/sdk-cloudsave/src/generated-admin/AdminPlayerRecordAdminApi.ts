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
import { AdminPlayerRecordAdmin$ } from './endpoints/AdminPlayerRecordAdmin$.js'
import { BulkGetAdminPlayerRecordResponse } from '../generated-definitions/BulkGetAdminPlayerRecordResponse.js'
import { BulkGetPlayerRecordResponse } from '../generated-definitions/BulkGetPlayerRecordResponse.js'
import { BulkGetPlayerRecordSizeResponse } from '../generated-definitions/BulkGetPlayerRecordSizeResponse.js'
import { BulkGetPlayerRecordsRequest } from '../generated-definitions/BulkGetPlayerRecordsRequest.js'
import { BulkUpdatePlayerRecordByKeyResponseArray } from '../generated-definitions/BulkUpdatePlayerRecordByKeyResponseArray.js'
import { BulkUpdatePlayerRecordResponseArray } from '../generated-definitions/BulkUpdatePlayerRecordResponseArray.js'
import { BulkUpdatePlayerRecordsByKeyRequest } from '../generated-definitions/BulkUpdatePlayerRecordsByKeyRequest.js'
import { BulkUpdatePlayerRecordsRequest } from '../generated-definitions/BulkUpdatePlayerRecordsRequest.js'
import { BulkUserIDsRequest } from '../generated-definitions/BulkUserIDsRequest.js'
import { BulkUserKeyRequest } from '../generated-definitions/BulkUserKeyRequest.js'
import { ListPlayerRecordKeysResponse } from '../generated-definitions/ListPlayerRecordKeysResponse.js'
import { PlayerRecordRequest } from '../generated-definitions/PlayerRecordRequest.js'
import { PlayerRecordResponse } from '../generated-definitions/PlayerRecordResponse.js'
import { PlayerRecordSizeResponse } from '../generated-definitions/PlayerRecordSizeResponse.js'

export function AdminPlayerRecordAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * @deprecated
   * Retrieve list of player records key and userID under given namespace.
   */
  async function getUsersRecords(queryParams?: {
    limit?: number
    offset?: number
    query?: string | null
  }): Promise<ListPlayerRecordKeysResponse> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getUsersRecords(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve list of player records key and userID under given namespace.
   */
  async function getRecords_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; query?: string | null; tags?: string[] }
  ): Promise<ListPlayerRecordKeysResponse> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getRecords_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk get player&#39;s record size, max allowed 20 at a time, that can be retrieved using this endpoint.
   */
  async function createUserBulkRecordSize(data: BulkUserKeyRequest): Promise<BulkGetPlayerRecordSizeResponse> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createUserBulkRecordSize(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve player record key and payload in bulk under given namespace. Maximum number of user ids per request is 20.
   */
  async function createBulkUser_ByKey(key: string, data: BulkUserIDsRequest): Promise<BulkGetPlayerRecordResponse> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createBulkUser_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoints will create new player record or replace the existing player record in bulk. Maximum number of user ids per request is 10. Maximum total size of the request payload is 5 MB.
   */
  async function updateBulkUser_ByKey(
    key: string,
    data: BulkUpdatePlayerRecordsByKeyRequest
  ): Promise<BulkUpdatePlayerRecordByKeyResponseArray> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateBulkUser_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve player record key and payload in bulk under given namespace. Maximum bulk key limit per request 20.
   */
  async function createRecordBulk_ByUserId(userId: string, data: BulkGetPlayerRecordsRequest): Promise<BulkGetAdminPlayerRecordResponse> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createRecordBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoints will create new player record or replace the existing player record in bulk. Maximum bulk key limit per request 10.
   */
  async function updateRecordBulk_ByUserId(
    userId: string,
    data: BulkUpdatePlayerRecordsRequest
  ): Promise<BulkUpdatePlayerRecordResponseArray> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateRecordBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete a record (arbitrary JSON data) in user-level with given key.
   */
  async function deleteRecord_ByUserId_ByKey(userId: string, key: string): Promise<unknown> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteRecord_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get a record in user-level (arbitrary JSON data) by its key.
   */
  async function getRecord_ByUserId_ByKey(userId: string, key: string): Promise<PlayerRecordResponse> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getRecord_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Description This endpoints will create new player record or append the existing player record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. is_public (default: false, type: bool) Indicate whether the player record is a public record or not. 3. tags (default: *empty array*, type: array of string) Indicate the tagging for the game record. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;is_public&#34;: true, &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ... } ```
   */
  async function createRecord_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<PlayerRecordResponse> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createRecord_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Description This endpoints will create new player record or replace the existing player record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. is_public (default: false, type: bool) Indicate whether the player record is a public record or not. 3. tags (default: *empty array*, type: array of string) Indicate the tagging for the game record. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;is_public&#34;: true, &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ... } ```
   */
  async function updateRecord_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<PlayerRecordResponse> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateRecord_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get a size of the player record
   */
  async function getSize_ByUserId_ByKey(userId: string, key: string): Promise<PlayerRecordSizeResponse> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getSize_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete player public record. ## Warning: This endpoint is going to deprecate This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - **POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **DELETE /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}**
   */
  async function deletePublic_ByUserId_ByKey(userId: string, key: string): Promise<unknown> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deletePublic_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get a record in user-level (arbitrary JSON data) by its key.
   */
  async function getPublic_ByUserId_ByKey(userId: string, key: string): Promise<PlayerRecordResponse> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getPublic_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Description This endpoints will create new player public record or append the existing player public record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Warning: This endpoint is going to deprecate This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - **POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **DELETE /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}**
   */
  async function createPublic_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<PlayerRecordResponse> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createPublic_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Description This endpoints will create new player public record or replace the existing player public record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Warning: This endpoint is going to deprecate This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - **POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **DELETE /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}**
   */
  async function updatePublic_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<PlayerRecordResponse> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updatePublic_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getUsersRecords,
    getRecords_ByUserId,
    createUserBulkRecordSize,
    createBulkUser_ByKey,
    updateBulkUser_ByKey,
    createRecordBulk_ByUserId,
    updateRecordBulk_ByUserId,
    deleteRecord_ByUserId_ByKey,
    getRecord_ByUserId_ByKey,
    createRecord_ByUserId_ByKey,
    updateRecord_ByUserId_ByKey,
    getSize_ByUserId_ByKey,
    deletePublic_ByUserId_ByKey,
    getPublic_ByUserId_ByKey,
    createPublic_ByUserId_ByKey,
    updatePublic_ByUserId_ByKey
  }
}
