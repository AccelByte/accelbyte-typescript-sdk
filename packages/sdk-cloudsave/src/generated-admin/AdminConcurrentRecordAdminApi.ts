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
import { AdminConcurrentRecordAdmin$ } from './endpoints/AdminConcurrentRecordAdmin$.js'
import { AdminConcurrentRecordRequest } from '../generated-definitions/AdminConcurrentRecordRequest.js'
import { AdminGameConcurrentRecordRequest } from '../generated-definitions/AdminGameConcurrentRecordRequest.js'
import { AdminPlayerConcurrentRecordRequest } from '../generated-definitions/AdminPlayerConcurrentRecordRequest.js'
import { PlayerRecordConcurrentUpdateResponse } from '../generated-definitions/PlayerRecordConcurrentUpdateResponse.js'

export function AdminConcurrentRecordAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;ADMIN:NAMESPACE:{namespace}:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will create new game record or replace the existing game record. &lt;b&gt;Replace behaviour:&lt;/b&gt; The existing value will be replaced completely with the new value. Example - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; &lt;h2&gt;Restriction &lt;/h2&gt; This is the restriction of Key Naming for the record: 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 3. Cannot use empty string in key names - &lt;pre&gt;{ &#34;&#34;: &#34;value&#34; }&lt;/pre&gt; &lt;h2&gt;Reserved Word&lt;/h2&gt; Reserved Word List: &lt;b&gt;__META&lt;/b&gt; The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. &lt;h2&gt;Parameters Notes &lt;/h2&gt; 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. updatedAt (required: true) Time format style: RFC3339 3. value Json &lt;b&gt;Request Body Example:&lt;/b&gt; &lt;pre&gt; { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;value&#34;: {}, &#34;updatedAt&#34;: &#34;2022-03-17T10:42:15.444Z&#34; } &lt;/pre&gt; &lt;h2&gt;Optimistic Concurrency Control&lt;/h2&gt; This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
   */
  async function updateConcurrentRecord_ByKey(key: string, data: AdminConcurrentRecordRequest): Promise<unknown> {
    const $ = new AdminConcurrentRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateConcurrentRecord_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;ADMIN:NAMESPACE:{namespace}:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will create new game record or replace the existing game record. &lt;b&gt;Replace behaviour:&lt;/b&gt; The existing value will be replaced completely with the new value. Example - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; &lt;h2&gt;Restriction &lt;/h2&gt; This is the restriction of Key Naming for the record: 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 3. Cannot use empty string in key names - &lt;pre&gt;{ &#34;&#34;: &#34;value&#34; }&lt;/pre&gt; &lt;h2&gt;Reserved Word&lt;/h2&gt; Reserved Word List: &lt;b&gt;__META&lt;/b&gt; The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. &lt;h2&gt;Parameters Notes &lt;/h2&gt; 1. updatedAt (required: true) Time format style: RFC3339 2. value Json &lt;b&gt;Request Body Example:&lt;/b&gt; &lt;pre&gt; { &#34;value&#34;: {}, &#34;updatedAt&#34;: &#34;2022-03-17T10:42:15.444Z&#34; } &lt;/pre&gt; &lt;h2&gt;Optimistic Concurrency Control&lt;/h2&gt; This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
   */
  async function updateConcurrentAdminrecord_ByKey(key: string, data: AdminGameConcurrentRecordRequest): Promise<unknown> {
    const $ = new AdminConcurrentRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateConcurrentAdminrecord_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will create new player record or replace the existing player record. &lt;b&gt;Replace behaviour:&lt;/b&gt; The existing value will be replaced completely with the new value. Example - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; &lt;h2&gt;Restriction &lt;/h2&gt; This is the restriction of Key Naming for the record: 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 3. Cannot use empty string in key names - &lt;pre&gt;{ &#34;&#34;: &#34;value&#34; }&lt;/pre&gt; &lt;h2&gt;Reserved Word&lt;/h2&gt; Reserved Word List: &lt;b&gt;__META&lt;/b&gt; The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. &lt;h2&gt;Parameters Notes &lt;/h2&gt; 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. updatedAt (required: true) Time format style: RFC3339 3. value Json &lt;b&gt;Request Body Example:&lt;/b&gt; &lt;pre&gt; { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;value&#34;: {}, &#34;updatedAt&#34;: &#34;2022-03-17T10:42:15.444Z&#34; } &lt;/pre&gt; &lt;h2&gt;Optimistic Concurrency Control&lt;/h2&gt; This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
   */
  async function updateConcurrentRecord_ByUserId_ByKey(
    userId: string,
    key: string,
    data: AdminConcurrentRecordRequest,
    queryParams?: { responseBody?: boolean | null }
  ): Promise<PlayerRecordConcurrentUpdateResponse> {
    const $ = new AdminConcurrentRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateConcurrentRecord_ByUserId_ByKey(userId, key, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will create new admin player record or replace the existing admin player record. &lt;b&gt;Replace behaviour:&lt;/b&gt; The existing value will be replaced completely with the new value. Example - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; &lt;h2&gt;Restriction &lt;/h2&gt; This is the restriction of Key Naming for the record: 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 3. Cannot use empty string in key names - &lt;pre&gt;{ &#34;&#34;: &#34;value&#34; }&lt;/pre&gt; &lt;h2&gt;Reserved Word&lt;/h2&gt; Reserved Word List: &lt;b&gt;__META&lt;/b&gt; The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. &lt;h2&gt;Parameters Notes &lt;/h2&gt; 1. updatedAt (required: true) Time format style: RFC3339 2. value Json &lt;b&gt;Request Body Example:&lt;/b&gt; &lt;pre&gt; { &#34;value&#34;: {}, &#34;updatedAt&#34;: &#34;2022-03-17T10:42:15.444Z&#34; } &lt;/pre&gt; &lt;h2&gt;Optimistic Concurrency Control&lt;/h2&gt; This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
   */
  async function updateConcurrentAdminrecord_ByUserId_ByKey(
    userId: string,
    key: string,
    data: AdminPlayerConcurrentRecordRequest,
    queryParams?: { responseBody?: boolean | null }
  ): Promise<PlayerRecordConcurrentUpdateResponse> {
    const $ = new AdminConcurrentRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateConcurrentAdminrecord_ByUserId_ByKey(userId, key, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:PUBLIC:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will create new player public record or replace the existing player public record. &lt;b&gt;Replace behaviour:&lt;/b&gt; The existing value will be replaced completely with the new value. Example - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; &lt;h2&gt;Restriction &lt;/h2&gt; This is the restriction of Key Naming for the record: 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 3. Cannot use empty string in key names - &lt;pre&gt;{ &#34;&#34;: &#34;value&#34; }&lt;/pre&gt; &lt;h2&gt;Reserved Word&lt;/h2&gt; Reserved Word List: &lt;b&gt;__META&lt;/b&gt; The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. &lt;h2&gt;Parameters Notes &lt;/h2&gt; 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. updatedAt (required: true) Time format style: RFC3339 3. value Json &lt;b&gt;Request Body Example:&lt;/b&gt; &lt;pre&gt; { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;value&#34;: {}, &#34;updatedAt&#34;: &#34;2022-03-17T10:42:15.444Z&#34; } &lt;/pre&gt; &lt;h2&gt;Optimistic Concurrency Control&lt;/h2&gt; This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
   */
  async function updatePublicConcurrent_ByUserId_ByKey(
    userId: string,
    key: string,
    data: AdminConcurrentRecordRequest,
    queryParams?: { responseBody?: boolean | null }
  ): Promise<PlayerRecordConcurrentUpdateResponse> {
    const $ = new AdminConcurrentRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updatePublicConcurrent_ByUserId_ByKey(userId, key, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    updateConcurrentRecord_ByKey,
    updateConcurrentAdminrecord_ByKey,
    updateConcurrentRecord_ByUserId_ByKey,
    updateConcurrentAdminrecord_ByUserId_ByKey,
    updatePublicConcurrent_ByUserId_ByKey
  }
}
