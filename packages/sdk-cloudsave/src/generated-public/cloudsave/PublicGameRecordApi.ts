/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { BulkGetGameRecordRequest } from './definitions/BulkGetGameRecordRequest.js'
import { BulkGetGameRecordResponse } from './definitions/BulkGetGameRecordResponse.js'
import { GameRecordRequest } from './definitions/GameRecordRequest.js'
import { GameRecordResponse } from './definitions/GameRecordResponse.js'
import { PublicGameRecord$ } from './endpoints/PublicGameRecord$.js'

export function PublicGameRecordApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * <table> <tr> <td>Required Permission</td> <td><code>NAMESPACE:{namespace}:CLOUDSAVE:RECORD [READ]</code></td> </tr> <tr> <td>Required Scope</td> <td><code>social</code></td> </tr> </table> <br/> Bulk get game records. Maximum key per request 20.
   */
  async function createRecordBulk(data: BulkGetGameRecordRequest): Promise<BulkGetGameRecordResponse> {
    const $ = new PublicGameRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createRecordBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <table> <tr> <td>Required Permission</td> <td><code>NAMESPACE:{namespace}:CLOUDSAVE:RECORD [READ]</code></td> </tr> <tr> <td>Required Scope</td> <td><code>social</code></td> </tr> </table> <br/> Get game record by its key.
   */
  async function getRecord_ByKey(key: string): Promise<GameRecordResponse> {
    const $ = new PublicGameRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRecord_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: <code>NAMESPACE:{namespace}:CLOUDSAVE:RECORD [UPDATE]</code> Required scope: <code>social</code> <h2>Description</h2> This endpoints will create new game record or replace the existing game record. <b>Replace behaviour:</b> The existing value will be replaced completely with the new value. Example - Existing JSON: <pre>{ "data1": "value" }</pre> - New JSON: <pre>{ "data2": "new value" }</pre> - Result: <pre>{ "data2": "new value" }</pre> <h2>Restriction </h2> This is the restriction of Key Naming for the record: 1. Cannot use <b>"."</b> as the key name - <pre>{ "data.2": "value" }</pre> 2. Cannot use <b>"$"</b> as the prefix in key names - <pre>{ "$data": "value" }</pre> 3. Cannot use empty string in key names - <pre>{ "": "value" }</pre> <h2>Reserved Word</h2> Reserved Word List: <b>__META</b> The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored.
   */
  async function updateRecord_ByKey(key: string, data: GameRecordRequest): Promise<GameRecordResponse> {
    const $ = new PublicGameRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateRecord_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: <code>NAMESPACE:{namespace}:CLOUDSAVE:RECORD [CREATE]</code> Required scope: <code>social</code> <h2>Description</h2> This endpoints will create new game record or append the existing game record. <b>Append example:</b> Example 1 - Existing JSON: <pre>{ "data1": "value" }</pre> - New JSON: <pre>{ "data2": "new value" }</pre> - Result: <pre>{ "data1": "value", "data2": "new value" }</pre> Example 2 - Existing JSON: <pre>{ "data1": { "data2": "value" }</pre> - New JSON: <pre>{ "data1": { "data3": "new value" }</pre> - Result: <pre>{ "data1": { "data2": "value", "data3": "new value" }</pre> <h2>Restriction </h2> This is the restriction of Key Naming for the record: 1. Cannot use <b>"."</b> as the key name - <pre>{ "data.2": "value" }</pre> 2. Cannot use <b>"$"</b> as the prefix in key names - <pre>{ "$data": "value" }</pre> 3. Cannot use empty string in key names - <pre>{ "": "value" }</pre> <h2>Reserved Word</h2> Reserved Word List: <b>__META</b> The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored.
   */
  async function createRecord_ByKey(key: string, data: GameRecordRequest): Promise<GameRecordResponse> {
    const $ = new PublicGameRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createRecord_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <table> <tr> <td>Required Permission</td> <td><code>NAMESPACE:{namespace}:CLOUDSAVE:RECORD [DELETE]</code></td> </tr> <tr> <td>Required Scope</td> <td><code>social</code></td> </tr> </table> <br/> Delete records by its key
   */
  async function deleteRecord_ByKey(key: string): Promise<unknown> {
    const $ = new PublicGameRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteRecord_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createRecordBulk,
    getRecord_ByKey,
    updateRecord_ByKey,
    createRecord_ByKey,
    deleteRecord_ByKey
  }
}
