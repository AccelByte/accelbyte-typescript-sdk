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
import { BulkGetPlayerRecordResponse } from '../generated-definitions/BulkGetPlayerRecordResponse.js'
import { BulkGetPlayerRecordsRequest } from '../generated-definitions/BulkGetPlayerRecordsRequest.js'
import { BulkUserIDsRequest } from '../generated-definitions/BulkUserIDsRequest.js'
import { ListPlayerRecordKeysResponse } from '../generated-definitions/ListPlayerRecordKeysResponse.js'
import { PlayerRecordRequest } from '../generated-definitions/PlayerRecordRequest.js'
import { PlayerRecordResponse } from '../generated-definitions/PlayerRecordResponse.js'
import { PublicPlayerRecord$ } from './endpoints/PublicPlayerRecord$.js'

export function PublicPlayerRecordApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Retrieve list of player records key under given namespace.
   */
  async function getUsersMeRecords(queryParams?: { limit?: number; offset?: number }): Promise<ListPlayerRecordKeysResponse> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getUsersMeRecords(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve player record key and payload in bulk under given namespace. Maximum bulk key limit per request 20
   */
  async function createUserMeRecordBulk(data: BulkGetPlayerRecordsRequest): Promise<BulkGetPlayerRecordResponse> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createUserMeRecordBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete player record by its key. Only user that own the player record could delete it.
   */
  async function deleteRecord_ByUserId_ByKey(userId: string, key: string): Promise<unknown> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteRecord_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get player record by its key. **Private Record**: Only user that own the player record could retrieve it.
   */
  async function getRecord_ByUserId_ByKey(userId: string, key: string): Promise<PlayerRecordResponse> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getRecord_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Description This endpoints will create new player record or append the existing player record. Only user that own the existing player record could modify. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. is_public (default: false, type: bool) Indicate whether the player record is a public record or not. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;is_public&#34;: true } ... } ```
   */
  async function createRecord_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<PlayerRecordResponse> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createRecord_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Description This endpoints will create new player record or replace the existing player record. Only user that own the existing player record could modify it. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. is_public (default: false, type: bool) Indicate whether the player record is a public record or not. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;is_public&#34;: true } ... } ```
   */
  async function updateRecord_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<PlayerRecordResponse> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateRecord_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve list of other public player records key under given namespace.
   */
  async function getRecordsPublic_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<ListPlayerRecordKeysResponse> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getRecordsPublic_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete player public record. ## Warning: This endpoint is going to deprecate This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - **POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **DELETE /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}**
   */
  async function deletePublicMeUser_ByKey(key: string): Promise<unknown> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deletePublicMeUser_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk get other player&#39;s record that is public by userIds, max allowed 20 at a time. Only record with `isPublic=true` that can be retrieved using this endpoint.
   */
  async function createPublicBulkUser_ByKey(key: string, data: BulkUserIDsRequest): Promise<BulkGetPlayerRecordResponse> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createPublicBulkUser_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve other player public record key and payload in bulk under given namespace. Maximum bulk key limit per request 20
   */
  async function createRecordBulk_ByUserId(userId: string, data: BulkGetPlayerRecordsRequest): Promise<BulkGetPlayerRecordResponse> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createRecordBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get other player&#39;s record that is public. Only record with `isPublic=true` that can be retrieved using this endpoint.
   */
  async function getPublic_ByUserId_ByKey(userId: string, key: string): Promise<PlayerRecordResponse> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getPublic_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Description This endpoints will create new player public record or append the existing player public record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Warning: This endpoint is going to deprecate This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - **POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **DELETE /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}**
   */
  async function createPublic_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<PlayerRecordResponse> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createPublic_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Description This endpoints will create new player public record or replace the existing player public record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Warning: This endpoint is going to deprecate This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - **POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **DELETE /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}**
   */
  async function updatePublic_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<PlayerRecordResponse> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updatePublic_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getUsersMeRecords,
    createUserMeRecordBulk,
    deleteRecord_ByUserId_ByKey,
    getRecord_ByUserId_ByKey,
    createRecord_ByUserId_ByKey,
    updateRecord_ByUserId_ByKey,
    getRecordsPublic_ByUserId,
    deletePublicMeUser_ByKey,
    createPublicBulkUser_ByKey,
    createRecordBulk_ByUserId,
    getPublic_ByUserId_ByKey,
    createPublic_ByUserId_ByKey,
    updatePublic_ByUserId_ByKey
  }
}
