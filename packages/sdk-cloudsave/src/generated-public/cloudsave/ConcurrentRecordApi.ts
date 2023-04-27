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
import { ConcurrentRecord$ } from './endpoints/ConcurrentRecord$.js'
import { ConcurrentRecordRequest } from './definitions/ConcurrentRecordRequest.js'

export function ConcurrentRecordApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * <table> <tr> <td>Required Permission</td> <td><code>NAMESPACE:{namespace}:CLOUDSAVE:RECORD [UPDATE]</code></td> </tr> <tr> <td>Required Scope</td> <td><code>social</code></td> </tr> </table> <br/> <h2>Description</h2> This endpoints will create new game record or replace the existing game record. <b>Replace behaviour:</b> The existing value will be replaced completely with the new value. Example - Existing JSON: <pre>{ "data1": "value" }</pre> - New JSON: <pre>{ "data2": "new value" }</pre> - Result: <pre>{ "data2": "new value" }</pre> <h2>Restriction </h2> This is the restriction of Key Naming for the record: 1. Cannot use <b>"."</b> as the key name - <pre>{ "data.2": "value" }</pre> 2. Cannot use <b>"$"</b> as the prefix in key names - <pre>{ "$data": "value" }</pre> 3. Cannot use empty string in key names - <pre>{ "": "value" }</pre> <h2>Reserved Word</h2> Reserved Word List: <b>__META</b> The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. <h2>Optimistic Concurrency Control</h2> This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
   */
  async function updateConcurrentRecord_ByKey(key: string, data: ConcurrentRecordRequest): Promise<unknown> {
    const $ = new ConcurrentRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateConcurrentRecord_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <table> <tr> <td>Required Permission</td> <td><code>NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [UPDATE]</code></td> </tr> <tr> <td>Required Scope</td> <td><code>social</code></td> </tr> </table> <br/> <h2>Description</h2> This endpoints will create new player record or replace the existing player record. <b>Replace behaviour:</b> The existing value will be replaced completely with the new value. Example - Existing JSON: <pre>{ "data1": "value" }</pre> - New JSON: <pre>{ "data2": "new value" }</pre> - Result: <pre>{ "data2": "new value" }</pre> <h2>Restriction </h2> This is the restriction of Key Naming for the record: 1. Cannot use <b>"."</b> as the key name - <pre>{ "data.2": "value" }</pre> 2. Cannot use <b>"$"</b> as the prefix in key names - <pre>{ "$data": "value" }</pre> 3. Cannot use empty string in key names - <pre>{ "": "value" }</pre> <h2>Reserved Word</h2> Reserved Word List: <b>__META</b> The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. <h2>Optimistic Concurrency Control</h2> This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
   */
  async function updateConcurrentRecord_ByUserId_ByKey(userId: string, key: string, data: ConcurrentRecordRequest): Promise<unknown> {
    const $ = new ConcurrentRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateConcurrentRecord_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <table> <tr> <td>Required Permission</td> <td><code>NAMESPACE:{namespace}:USER:{userId}:PUBLIC:CLOUDSAVE:RECORD [UPDATE]</code></td> </tr> <tr> <td>Required Scope</td> <td><code>social</code></td> </tr> </table> <br/> <h2>Description</h2> This endpoints will create new player public record or replace the existing player public record. <b>Replace behaviour:</b> The existing value will be replaced completely with the new value. Example - Existing JSON: <pre>{ "data1": "value" }</pre> - New JSON: <pre>{ "data2": "new value" }</pre> - Result: <pre>{ "data2": "new value" }</pre> <h2>Restriction </h2> This is the restriction of Key Naming for the record: 1. Cannot use <b>"."</b> as the key name - <pre>{ "data.2": "value" }</pre> 2. Cannot use <b>"$"</b> as the prefix in key names - <pre>{ "$data": "value" }</pre> 3. Cannot use empty string in key names - <pre>{ "": "value" }</pre> <h2>Reserved Word</h2> Reserved Word List: <b>__META</b> The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. <h2>Optimistic Concurrency Control</h2> This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
   */
  async function updatePublicConcurrent_ByUserId_ByKey(userId: string, key: string, data: ConcurrentRecordRequest): Promise<unknown> {
    const $ = new ConcurrentRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updatePublicConcurrent_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    updateConcurrentRecord_ByKey,
    updateConcurrentRecord_ByUserId_ByKey,
    updatePublicConcurrent_ByUserId_ByKey
  }
}
