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
import { BulkGetPlayerRecordResponse } from './definitions/BulkGetPlayerRecordResponse.js'
import { BulkGetPlayerRecordsRequest } from './definitions/BulkGetPlayerRecordsRequest.js'
import { BulkUserIDsRequest } from './definitions/BulkUserIDsRequest.js'
import { ListPlayerRecordKeysResponse } from './definitions/ListPlayerRecordKeysResponse.js'
import { PlayerRecordRequest } from './definitions/PlayerRecordRequest.js'
import { PlayerRecordResponse } from './definitions/PlayerRecordResponse.js'
import { PublicPlayerRecord$ } from './endpoints/PublicPlayerRecord$.js'

export function PublicPlayerRecordApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required valid user token Required scope: <code>social</code> Retrieve list of player records key under given namespace.
   */
  async function getUsersMeRecords(queryParams?: { offset?: number; limit?: number }): Promise<ListPlayerRecordKeysResponse> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeRecords(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user token Required scope: <code>social</code> Retrieve player record key and payload in bulk under given namespace. Maximum bulk key limit per request 20
   */
  async function createUserMeRecordBulk(data: BulkGetPlayerRecordsRequest): Promise<BulkGetPlayerRecordResponse> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserMeRecordBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <table> <tr> <td>Required Permission</td> <td><code>NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [READ]</code></td> </tr> <tr> <td>Required Scope</td> <td><code>social</code></td> </tr> </table> <br/> Get player record by its key. <b>Private Record:</b> Only user that own the player record could retrieve it.
   */
  async function getRecord_ByUserId_ByKey(userId: string, key: string): Promise<PlayerRecordResponse> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRecord_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: <code>NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [UPDATE]</code> Required scope: <code>social</code> <h2>Description</h2> This endpoints will create new player record or replace the existing player record. Only user that own the existing player record could modify it. <b>Replace behaviour:</b> The existing value will be replaced completely with the new value. Example - Existing JSON: <pre>{ "data1": "value" }</pre> - New JSON: <pre>{ "data2": "new value" }</pre> - Result: <pre>{ "data2": "new value" }</pre> <h2>Restriction </h2> This is the restriction of Key Naming for the record: 1. Cannot use <b>"."</b> as the key name - <pre>{ "data.2": "value" }</pre> 2. Cannot use <b>"$"</b> as the prefix in key names - <pre>{ "$data": "value" }</pre> 3. Cannot use empty string in key names - <pre>{ "": "value" }</pre> <h2>Record Metadata</h2> Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name <b>__META</b>. When creating record, if <b>__META</b> field is not defined, the metadata value will use the default value. When updating record, if <b>__META</b> field is not defined, the existing metadata value will stay as is. <b>Metadata List:</b> 1. is_public (default: false, type: bool) Indicate whether the player record is a public record or not. <b>Request Body Example:</b> <pre> { "__META": { "is_public": true } ... } </pre>
   */
  async function updateRecord_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<PlayerRecordResponse> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateRecord_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: <code>NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [CREATE]</code> Required scope: <code>social</code> <h2>Description</h2> This endpoints will create new player record or append the existing player record. Only user that own the existing player record could modify. <b>Append example:</b> Example 1 - Existing JSON: <pre>{ "data1": "value" }</pre> - New JSON: <pre>{ "data2": "new value" }</pre> - Result: <pre>{ "data1": "value", "data2": "new value" }</pre> Example 2 - Existing JSON: <pre>{ "data1": { "data2": "value" }</pre> - New JSON: <pre>{ "data1": { "data3": "new value" }</pre> - Result: <pre>{ "data1": { "data2": "value", "data3": "new value" }</pre> <h2>Restriction </h2> This is the restriction of Key Naming for the record: 1. Cannot use <b>"."</b> as the key name - <pre>{ "data.2": "value" }</pre> 2. Cannot use <b>"$"</b> as the prefix in key names - <pre>{ "$data": "value" }</pre> 3. Cannot use empty string in key names - <pre>{ "": "value" }</pre> <h2>Record Metadata</h2> Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name <b>__META</b>. When creating record, if <b>__META</b> field is not defined, the metadata value will use the default value. When updating record, if <b>__META</b> field is not defined, the existing metadata value will stay as is. <b>Metadata List:</b> 1. is_public (default: false, type: bool) Indicate whether the player record is a public record or not. <b>Request Body Example:</b> <pre> { "__META": { "is_public": true } ... } </pre>
   */
  async function createRecord_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<PlayerRecordResponse> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createRecord_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <table> <tr> <td>Required Permission</td> <td><code>NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [DELETE]</code></td> </tr> <tr> <td>Required Scope</td> <td><code>social</code></td> </tr> </table> <br/> Delete player record by its key. Only user that own the player record could delete it.
   */
  async function deleteRecord_ByUserId_ByKey(userId: string, key: string): Promise<unknown> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteRecord_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user token with permission: <code>NAMESPACE:{namespace}:USER:*:PUBLIC:CLOUDSAVE:RECORD [READ]</code> Required scope: <code>social</code> Retrieve list of other public player records key under given namespace.
   */
  async function getRecordsPublic_ByUserId(
    userId: string,
    queryParams?: { offset?: number; limit?: number }
  ): Promise<ListPlayerRecordKeysResponse> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRecordsPublic_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authorization Required scope: <code>social</code> Delete player public record. <h2>Warning: This endpoint is going to deprecate</h2> This endpoint is going to deprecate in the future please don't use it. For alternative, please use these endpoints: - <b>POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}</b> and utilizing <b>__META</b> functionality - <b>PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}</b> and utilizing <b>__META</b> functionality - <b>DELETE /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}</b>
   */
  async function deletePublicMeUser_ByKey(key: string): Promise<unknown> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deletePublicMeUser_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <table> <tr> <td>Required Permission</td> <td><code>NAMESPACE:{namespace}:PUBLIC:CLOUDSAVE:RECORD [READ]</code></td> </tr> <tr> <td>Required Scope</td> <td><code>social</code></td> </tr> </table> <br/> Bulk get other player's record that is public by userIds, max allowed 20 at a time. Only record with <code>isPublic=true</code> that can be retrieved using this endpoint.
   */
  async function createPublicBulkUser_ByKey(key: string, data: BulkUserIDsRequest): Promise<BulkGetPlayerRecordResponse> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createPublicBulkUser_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user token with permission: <code>NAMESPACE:{namespace}:USER:*:PUBLIC:CLOUDSAVE:RECORD [READ]</code> Required scope: <code>social</code> Retrieve other player public record key and payload in bulk under given namespace. Maximum bulk key limit per request 20
   */
  async function createRecordBulk_ByUserId(userId: string, data: BulkGetPlayerRecordsRequest): Promise<BulkGetPlayerRecordResponse> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createRecordBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <table> <tr> <td>Required Permission</td> <td><code>NAMESPACE:{namespace}:USER:{userId}:PUBLIC:CLOUDSAVE:RECORD [READ]</code></td> </tr> <tr> <td>Required Scope</td> <td><code>social</code></td> </tr> </table> <br/> Get other player's record that is public. Only record with <code>isPublic=true</code> that can be retrieved using this endpoint.
   */
  async function getPublic_ByUserId_ByKey(userId: string, key: string): Promise<PlayerRecordResponse> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPublic_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <table> <tr> <td>Required Permission</td> <td><code>NAMESPACE:{namespace}:USER:{userId}:PUBLIC:CLOUDSAVE:RECORD [UPDATE]</code></td> </tr> <tr> <td>Required Scope</td> <td><code>social</code></td> </tr> </table> <br/> <h2>Description</h2> This endpoints will create new player public record or replace the existing player public record. <b>Replace behaviour:</b> The existing value will be replaced completely with the new value. Example - Existing JSON: <pre>{ "data1": "value" }</pre> - New JSON: <pre>{ "data2": "new value" }</pre> - Result: <pre>{ "data2": "new value" }</pre> <h2>Restriction </h2> This is the restriction of Key Naming for the record: 1. Cannot use <b>"."</b> as the key name - <pre>{ "data.2": "value" }</pre> 2. Cannot use <b>"$"</b> as the prefix in key names - <pre>{ "$data": "value" }</pre> 3. Cannot use empty string in key names - <pre>{ "": "value" }</pre> <h2>Reserved Word</h2> Reserved Word List: <b>__META</b> The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. <h2>Warning: This endpoint is going to deprecate</h2> This endpoint is going to deprecate in the future please don't use it. For alternative, please use these endpoints: - <b>POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}</b> and utilizing <b>__META</b> functionality - <b>PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}</b> and utilizing <b>__META</b> functionality - <b>DELETE /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}</b>
   */
  async function updatePublic_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<PlayerRecordResponse> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updatePublic_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <table> <tr> <td>Required Permission</td> <td><code>NAMESPACE:{namespace}:USER:{userId}:PUBLIC:CLOUDSAVE:RECORD [WRITE]</code></td> </tr> <tr> <td>Required Scope</td> <td><code>social</code></td> </tr> </table> <br/> <h2>Description</h2> This endpoints will create new player public record or append the existing player public record. <b>Append example:</b> Example 1 - Existing JSON: <pre>{ "data1": "value" }</pre> - New JSON: <pre>{ "data2": "new value" }</pre> - Result: <pre>{ "data1": "value", "data2": "new value" }</pre> Example 2 - Existing JSON: <pre>{ "data1": { "data2": "value" }</pre> - New JSON: <pre>{ "data1": { "data3": "new value" }</pre> - Result: <pre>{ "data1": { "data2": "value", "data3": "new value" }</pre> <h2>Restriction </h2> This is the restriction of Key Naming for the record: 1. Cannot use <b>"."</b> as the key name - <pre>{ "data.2": "value" }</pre> 2. Cannot use <b>"$"</b> as the prefix in key names - <pre>{ "$data": "value" }</pre> 3. Cannot use empty string in key names - <pre>{ "": "value" }</pre> <h2>Reserved Word</h2> Reserved Word List: <b>__META</b> The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. <h2>Warning: This endpoint is going to deprecate</h2> This endpoint is going to deprecate in the future please don't use it. For alternative, please use these endpoints: - <b>POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}</b> and utilizing <b>__META</b> functionality - <b>PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}</b> and utilizing <b>__META</b> functionality - <b>DELETE /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}</b>
   */
  async function createPublic_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<PlayerRecordResponse> {
    const $ = new PublicPlayerRecord$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createPublic_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getUsersMeRecords,
    createUserMeRecordBulk,
    getRecord_ByUserId_ByKey,
    updateRecord_ByUserId_ByKey,
    createRecord_ByUserId_ByKey,
    deleteRecord_ByUserId_ByKey,
    getRecordsPublic_ByUserId,
    deletePublicMeUser_ByKey,
    createPublicBulkUser_ByKey,
    createRecordBulk_ByUserId,
    getPublic_ByUserId_ByKey,
    updatePublic_ByUserId_ByKey,
    createPublic_ByUserId_ByKey
  }
}
