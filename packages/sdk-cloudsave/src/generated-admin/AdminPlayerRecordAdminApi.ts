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
import { BulkGetPlayerRecordSizeResponse } from '../generated-definitions/BulkGetPlayerRecordSizeResponse.js'
import { BulkGetPlayerRecordsRequest } from '../generated-definitions/BulkGetPlayerRecordsRequest.js'
import { BulkUpdatePlayerRecordResponseArray } from '../generated-definitions/BulkUpdatePlayerRecordResponseArray.js'
import { BulkUpdatePlayerRecordsRequest } from '../generated-definitions/BulkUpdatePlayerRecordsRequest.js'
import { BulkUserKeyRequest } from '../generated-definitions/BulkUserKeyRequest.js'
import { ListPlayerRecordKeysResponse } from '../generated-definitions/ListPlayerRecordKeysResponse.js'
import { PlayerRecordRequest } from '../generated-definitions/PlayerRecordRequest.js'
import { PlayerRecordResponse } from '../generated-definitions/PlayerRecordResponse.js'
import { PlayerRecordSizeResponse } from '../generated-definitions/PlayerRecordSizeResponse.js'

export function AdminPlayerRecordAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:RECORD [READ]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Retrieve list of player records key and userID under given namespace.
   */
  async function getRecords_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<ListPlayerRecordKeysResponse> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRecords_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;ADMIN:NAMESPACE:{namespace}:CLOUDSAVE:RECORD [READ]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; Bulk get player&#39;s record size, max allowed 20 at a time, that can be retrieved using this endpoint.
   */
  async function createUserBulkRecordSize(data: BulkUserKeyRequest): Promise<BulkGetPlayerRecordSizeResponse> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserBulkRecordSize(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CLOUDSAVE:RECORD [READ]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; Retrieve player record key and payload in bulk under given namespace. Maximum bulk key limit per request 20.
   */
  async function createRecordBulk_ByUserId(userId: string, data: BulkGetPlayerRecordsRequest): Promise<BulkGetAdminPlayerRecordResponse> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createRecordBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:*:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; This endpoints will create new player record or replace the existing player record in bulk. Maximum bulk key limit per request 10.
   */
  async function updateRecordBulk_ByUserId(
    userId: string,
    data: BulkUpdatePlayerRecordsRequest
  ): Promise<BulkUpdatePlayerRecordResponseArray> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateRecordBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [DELETE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Delete a record (arbitrary JSON data) in user-level with given key.
   */
  async function deleteRecord_ByUserId_ByKey(userId: string, key: string): Promise<unknown> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteRecord_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [READ]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Get a record in user-level (arbitrary JSON data) by its key.
   */
  async function getRecord_ByUserId_ByKey(userId: string, key: string): Promise<PlayerRecordResponse> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRecord_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [CREATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will create new player record or append the existing player record. &lt;b&gt;Append example:&lt;/b&gt; Example 1 - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; Example 2 - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }&lt;/pre&gt; &lt;h2&gt;Restriction &lt;/h2&gt; This is the restriction of Key Naming for the record: 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 3. Cannot use empty string in key names - &lt;pre&gt;{ &#34;&#34;: &#34;value&#34; }&lt;/pre&gt; &lt;h2&gt;Record Metadata&lt;/h2&gt; Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name &lt;b&gt;__META&lt;/b&gt;. When creating record, if &lt;b&gt;__META&lt;/b&gt; field is not defined, the metadata value will use the default value. When updating record, if &lt;b&gt;__META&lt;/b&gt; field is not defined, the existing metadata value will stay as is. &lt;b&gt;Metadata List:&lt;/b&gt; 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. is_public (default: false, type: bool) Indicate whether the player record is a public record or not. &lt;b&gt;Request Body Example:&lt;/b&gt; &lt;pre&gt; { &#34;__META&#34;: { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;is_public&#34;: true } ... } &lt;/pre&gt;
   */
  async function createRecord_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<PlayerRecordResponse> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createRecord_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will create new player record or replace the existing player record. &lt;b&gt;Replace behaviour:&lt;/b&gt; The existing value will be replaced completely with the new value. Example - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; &lt;h2&gt;Restriction &lt;/h2&gt; This is the restriction of Key Naming for the record: 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 3. Cannot use empty string in key names - &lt;pre&gt;{ &#34;&#34;: &#34;value&#34; }&lt;/pre&gt; &lt;h2&gt;Record Metadata&lt;/h2&gt; Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name &lt;b&gt;__META&lt;/b&gt;. When creating record, if &lt;b&gt;__META&lt;/b&gt; field is not defined, the metadata value will use the default value. When updating record, if &lt;b&gt;__META&lt;/b&gt; field is not defined, the existing metadata value will stay as is. &lt;b&gt;Metadata List:&lt;/b&gt; 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. is_public (default: false, type: bool) Indicate whether the player record is a public record or not. &lt;b&gt;Request Body Example:&lt;/b&gt; &lt;pre&gt; { &#34;__META&#34;: { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;is_public&#34;: true } ... } &lt;/pre&gt;
   */
  async function updateRecord_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<PlayerRecordResponse> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateRecord_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [READ]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Get a size of the player record
   */
  async function getSize_ByUserId_ByKey(userId: string, key: string): Promise<PlayerRecordSizeResponse> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getSize_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:PUBLIC:CLOUDSAVE:RECORD [DELETE]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; Delete player public record. &lt;h2&gt;Warning: This endpoint is going to deprecate&lt;/h2&gt; This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - &lt;b&gt;POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}&lt;/b&gt; and utilizing &lt;b&gt;__META&lt;/b&gt; functionality - &lt;b&gt;PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}&lt;/b&gt; and utilizing &lt;b&gt;__META&lt;/b&gt; functionality - &lt;b&gt;DELETE /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}&lt;/b&gt;
   */
  async function deletePublic_ByUserId_ByKey(userId: string, key: string): Promise<unknown> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deletePublic_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:PUBLIC:CLOUDSAVE:RECORD [READ]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Get a record in user-level (arbitrary JSON data) by its key.
   */
  async function getPublic_ByUserId_ByKey(userId: string, key: string): Promise<PlayerRecordResponse> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPublic_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:PUBLIC:CLOUDSAVE:RECORD [CREATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will create new player public record or append the existing player public record. &lt;b&gt;Append example:&lt;/b&gt; Example 1 - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; Example 2 - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }&lt;/pre&gt; &lt;h2&gt;Restriction &lt;/h2&gt; This is the restriction of Key Naming for the record: 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 3. Cannot use empty string in key names - &lt;pre&gt;{ &#34;&#34;: &#34;value&#34; }&lt;/pre&gt; &lt;h2&gt;Warning: This endpoint is going to deprecate&lt;/h2&gt; This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - &lt;b&gt;POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}&lt;/b&gt; and utilizing &lt;b&gt;__META&lt;/b&gt; functionality - &lt;b&gt;PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}&lt;/b&gt; and utilizing &lt;b&gt;__META&lt;/b&gt; functionality - &lt;b&gt;DELETE /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}&lt;/b&gt;
   */
  async function createPublic_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<PlayerRecordResponse> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createPublic_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:PUBLIC:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will create new player public record or replace the existing player public record. &lt;b&gt;Replace behaviour:&lt;/b&gt; The existing value will be replaced completely with the new value. Example - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; &lt;h2&gt;Restriction &lt;/h2&gt; This is the restriction of Key Naming for the record: 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 3. Cannot use empty string in key names - &lt;pre&gt;{ &#34;&#34;: &#34;value&#34; }&lt;/pre&gt; &lt;h2&gt;Warning: This endpoint is going to deprecate&lt;/h2&gt; This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - &lt;b&gt;POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}&lt;/b&gt; and utilizing &lt;b&gt;__META&lt;/b&gt; functionality - &lt;b&gt;PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}&lt;/b&gt; and utilizing &lt;b&gt;__META&lt;/b&gt; functionality - &lt;b&gt;DELETE /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}&lt;/b&gt;
   */
  async function updatePublic_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<PlayerRecordResponse> {
    const $ = new AdminPlayerRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updatePublic_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getRecords_ByUserId,
    createUserBulkRecordSize,
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
