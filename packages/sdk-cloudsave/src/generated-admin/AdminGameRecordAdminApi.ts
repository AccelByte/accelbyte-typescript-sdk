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

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:CLOUDSAVE:RECORD [READ]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Retrieve list of records key by namespace
   */
  async function getRecords(queryParams: { limit: number; offset: number; query?: string | null }): Promise<ListGameRecordKeysResponse> {
    const $ = new AdminGameRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRecords(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:CLOUDSAVE:RECORD [DELETE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; This endpoints delete game record in namespace-level
   */
  async function deleteRecord_ByKey(key: string): Promise<unknown> {
    const $ = new AdminGameRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteRecord_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:CLOUDSAVE:RECORD [READ]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Get a record by its key in namespace-level.
   */
  async function getRecord_ByKey(key: string): Promise<GameRecordResponse> {
    const $ = new AdminGameRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRecord_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:CLOUDSAVE:RECORD [CREATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will create new game record or append the existing game record. &lt;b&gt;Append example:&lt;/b&gt; Example 1 - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; Example 2 - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }&lt;/pre&gt; &lt;h2&gt;Restriction &lt;/h2&gt; This is the restriction of Key Naming for the record: 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 3. Cannot use empty string in key names - &lt;pre&gt;{ &#34;&#34;: &#34;value&#34; }&lt;/pre&gt; &lt;h2&gt;Record Metadata&lt;/h2&gt; Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name &lt;b&gt;__META&lt;/b&gt;. When creating record, if &lt;b&gt;__META&lt;/b&gt; field is not defined, the metadata value will use the default value. When updating record, if &lt;b&gt;__META&lt;/b&gt; field is not defined, the existing metadata value will stay as is. &lt;b&gt;Metadata List:&lt;/b&gt; 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. &lt;b&gt;Request Body Example:&lt;/b&gt; &lt;pre&gt; { &#34;__META&#34;: { &#34;set_by&#34;: &#34;SERVER&#34; } ... } &lt;/pre&gt;
   */
  async function createRecord_ByKey(key: string, data: GameRecordRequest): Promise<GameRecordResponse> {
    const $ = new AdminGameRecordAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createRecord_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;ADMIN:NAMESPACE:{namespace}:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will create new game record or replace the existing game record. &lt;b&gt;Replace behaviour:&lt;/b&gt; The existing value will be replaced completely with the new value. Example - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; &lt;h2&gt;Restriction &lt;/h2&gt; This is the restriction of Key Naming for the record: 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 3. Cannot use empty string in key names - &lt;pre&gt;{ &#34;&#34;: &#34;value&#34; }&lt;/pre&gt; &lt;h2&gt;Record Metadata&lt;/h2&gt; Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name &lt;b&gt;__META&lt;/b&gt;. When creating record, if &lt;b&gt;__META&lt;/b&gt; field is not defined, the metadata value will use the default value. When updating record, if &lt;b&gt;__META&lt;/b&gt; field is not defined, the existing metadata value will stay as is. &lt;b&gt;Metadata List:&lt;/b&gt; 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. &lt;b&gt;Request Body Example:&lt;/b&gt; &lt;pre&gt; { &#34;__META&#34;: { &#34;set_by&#34;: &#34;SERVER&#34; } ... } &lt;/pre&gt;
   */
  async function updateRecord_ByKey(key: string, data: GameRecordRequest): Promise<GameRecordResponse> {
    const $ = new AdminGameRecordAdmin$(Network.create(requestConfig), namespace, cache)
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
