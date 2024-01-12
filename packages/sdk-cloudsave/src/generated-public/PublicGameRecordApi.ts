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

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;NAMESPACE:{namespace}:CLOUDSAVE:RECORD [READ]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; Bulk get game records. Maximum key per request 20.
   */
  async function createRecordBulk(data: BulkGetGameRecordRequest): Promise<BulkGetGameRecordResponse> {
    const $ = new PublicGameRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createRecordBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;NAMESPACE:{namespace}:CLOUDSAVE:RECORD [DELETE]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; Delete records by its key
   */
  async function deleteRecord_ByKey(key: string): Promise<unknown> {
    const $ = new PublicGameRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteRecord_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;NAMESPACE:{namespace}:CLOUDSAVE:RECORD [READ]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; Get game record by its key.
   */
  async function getRecord_ByKey(key: string): Promise<GameRecordResponse> {
    const $ = new PublicGameRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRecord_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:CLOUDSAVE:RECORD [CREATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will create new game record or append the existing game record. &lt;b&gt;Append example:&lt;/b&gt; Example 1 - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; Example 2 - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }&lt;/pre&gt; &lt;h2&gt;Restriction &lt;/h2&gt; This is the restriction of Key Naming for the record: 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 3. Cannot use empty string in key names - &lt;pre&gt;{ &#34;&#34;: &#34;value&#34; }&lt;/pre&gt; &lt;h2&gt;Reserved Word&lt;/h2&gt; Reserved Word List: &lt;b&gt;__META&lt;/b&gt; The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored.
   */
  async function createRecord_ByKey(key: string, data: GameRecordRequest): Promise<GameRecordResponse> {
    const $ = new PublicGameRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createRecord_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will create new game record or replace the existing game record. &lt;b&gt;Replace behaviour:&lt;/b&gt; The existing value will be replaced completely with the new value. Example - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; &lt;h2&gt;Restriction &lt;/h2&gt; This is the restriction of Key Naming for the record: 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 3. Cannot use empty string in key names - &lt;pre&gt;{ &#34;&#34;: &#34;value&#34; }&lt;/pre&gt; &lt;h2&gt;Reserved Word&lt;/h2&gt; Reserved Word List: &lt;b&gt;__META&lt;/b&gt; The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored.
   */
  async function updateRecord_ByKey(key: string, data: GameRecordRequest): Promise<GameRecordResponse> {
    const $ = new PublicGameRecord$(Network.create(requestConfig), namespace, cache)
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
