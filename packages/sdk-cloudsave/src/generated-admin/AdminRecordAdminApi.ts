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
import { AdminGameRecordRequest } from '../generated-definitions/AdminGameRecordRequest.js'
import { AdminGameRecordResponse } from '../generated-definitions/AdminGameRecordResponse.js'
import { AdminPlayerRecordRequest } from '../generated-definitions/AdminPlayerRecordRequest.js'
import { AdminPlayerRecordResponse } from '../generated-definitions/AdminPlayerRecordResponse.js'
import { AdminRecordAdmin$ } from './endpoints/AdminRecordAdmin$.js'
import { BulkGetAdminGameRecordRequest } from '../generated-definitions/BulkGetAdminGameRecordRequest.js'
import { BulkGetAdminGameRecordResponse } from '../generated-definitions/BulkGetAdminGameRecordResponse.js'
import { BulkGetAdminPlayerRecordRequest } from '../generated-definitions/BulkGetAdminPlayerRecordRequest.js'
import { BulkGetAdminPlayerRecordResponse } from '../generated-definitions/BulkGetAdminPlayerRecordResponse.js'
import { BulkUserIDsRequest } from '../generated-definitions/BulkUserIDsRequest.js'
import { ListAdminGameRecordKeysResponse } from '../generated-definitions/ListAdminGameRecordKeysResponse.js'
import { ListAdminPlayerRecordKeysResponse } from '../generated-definitions/ListAdminPlayerRecordKeysResponse.js'

export function AdminRecordAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Retrieve list of records key by namespace
   */
  async function getAdminrecords(queryParams?: {
    limit?: number
    offset?: number
    query?: string | null
  }): Promise<ListAdminGameRecordKeysResponse> {
    const $ = new AdminRecordAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getAdminrecords(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk get admin game records. Maximum key per request 20.
   */
  async function createAdminrecordBulk(data: BulkGetAdminGameRecordRequest): Promise<BulkGetAdminGameRecordResponse> {
    const $ = new AdminRecordAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createAdminrecordBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoints delete game record in namespace-level
   */
  async function deleteAdminrecord_ByKey(key: string): Promise<unknown> {
    const $ = new AdminRecordAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteAdminrecord_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get a record by its key in namespace-level.
   */
  async function getAdminrecord_ByKey(key: string): Promise<AdminGameRecordResponse> {
    const $ = new AdminRecordAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getAdminrecord_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Description This endpoints will create new admin game record or append the existing admin game record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }`
   */
  async function createAdminrecord_ByKey(key: string, data: AdminGameRecordRequest): Promise<AdminGameRecordResponse> {
    const $ = new AdminRecordAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createAdminrecord_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Description This endpoints will create new admin game record or replace the existing admin game record. **Append example:** Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }`
   */
  async function updateAdminrecord_ByKey(key: string, data: AdminGameRecordRequest): Promise<AdminGameRecordResponse> {
    const $ = new AdminRecordAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateAdminrecord_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Retrieve list of admin player records key and userID under given namespace.
   */
  async function getAdminrecords_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<ListAdminPlayerRecordKeysResponse> {
    const $ = new AdminRecordAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getAdminrecords_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk get admin player record by userIds, max allowed 20 at a time.
   */
  async function createBulkUser_ByKey(key: string, data: BulkUserIDsRequest): Promise<BulkGetAdminPlayerRecordResponse> {
    const $ = new AdminRecordAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createBulkUser_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk get admin player records. Maximum key per request 20.
   */
  async function createAdminrecordBulk_ByUserId(
    userId: string,
    data: BulkGetAdminPlayerRecordRequest
  ): Promise<BulkGetAdminPlayerRecordResponse> {
    const $ = new AdminRecordAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createAdminrecordBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete a record (arbitrary JSON data) in user-level with given key.
   */
  async function deleteAdminrecord_ByUserId_ByKey(userId: string, key: string): Promise<unknown> {
    const $ = new AdminRecordAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteAdminrecord_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get a admin record in user-level (arbitrary JSON data) by its key.
   */
  async function getAdminrecord_ByUserId_ByKey(userId: string, key: string): Promise<AdminPlayerRecordResponse> {
    const $ = new AdminRecordAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getAdminrecord_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Description This endpoints will create new admin player record or append the existing admin game record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }`
   */
  async function createAdminrecord_ByUserId_ByKey(
    userId: string,
    key: string,
    data: AdminPlayerRecordRequest
  ): Promise<AdminPlayerRecordResponse> {
    const $ = new AdminRecordAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createAdminrecord_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Description This endpoints will create new admin player record or replace the existing admin player record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }`
   */
  async function updateAdminrecord_ByUserId_ByKey(
    userId: string,
    key: string,
    data: AdminPlayerRecordRequest
  ): Promise<AdminPlayerRecordResponse> {
    const $ = new AdminRecordAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateAdminrecord_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getAdminrecords,
    createAdminrecordBulk,
    deleteAdminrecord_ByKey,
    getAdminrecord_ByKey,
    createAdminrecord_ByKey,
    updateAdminrecord_ByKey,
    getAdminrecords_ByUserId,
    createBulkUser_ByKey,
    createAdminrecordBulk_ByUserId,
    deleteAdminrecord_ByUserId_ByKey,
    getAdminrecord_ByUserId_ByKey,
    createAdminrecord_ByUserId_ByKey,
    updateAdminrecord_ByUserId_ByKey
  }
}
