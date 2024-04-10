/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { BulkGetAdminPlayerRecordResponse } from '../../generated-definitions/BulkGetAdminPlayerRecordResponse.js'
import { BulkGetPlayerRecordResponse } from '../../generated-definitions/BulkGetPlayerRecordResponse.js'
import { BulkGetPlayerRecordSizeResponse } from '../../generated-definitions/BulkGetPlayerRecordSizeResponse.js'
import { BulkGetPlayerRecordsRequest } from '../../generated-definitions/BulkGetPlayerRecordsRequest.js'
import { BulkUpdatePlayerRecordByKeyResponseArray } from '../../generated-definitions/BulkUpdatePlayerRecordByKeyResponseArray.js'
import { BulkUpdatePlayerRecordResponseArray } from '../../generated-definitions/BulkUpdatePlayerRecordResponseArray.js'
import { BulkUpdatePlayerRecordsByKeyRequest } from '../../generated-definitions/BulkUpdatePlayerRecordsByKeyRequest.js'
import { BulkUpdatePlayerRecordsRequest } from '../../generated-definitions/BulkUpdatePlayerRecordsRequest.js'
import { BulkUserIDsRequest } from '../../generated-definitions/BulkUserIDsRequest.js'
import { BulkUserKeyRequest } from '../../generated-definitions/BulkUserKeyRequest.js'
import { ListPlayerRecordKeysResponse } from '../../generated-definitions/ListPlayerRecordKeysResponse.js'
import { PlayerRecordRequest } from '../../generated-definitions/PlayerRecordRequest.js'
import { PlayerRecordResponse } from '../../generated-definitions/PlayerRecordResponse.js'
import { PlayerRecordSizeResponse } from '../../generated-definitions/PlayerRecordSizeResponse.js'

export class AdminPlayerRecordAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * @deprecated
   * Retrieve list of player records key and userID under given namespace.
   */
  getUsersRecords(queryParams?: {
    limit?: number
    offset?: number
    query?: string | null
  }): Promise<IResponseWithSync<ListPlayerRecordKeysResponse>> {
    const params = { limit: 25, ...queryParams } as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/records'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ListPlayerRecordKeysResponse, 'ListPlayerRecordKeysResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Retrieve list of player records key and userID under given namespace.
   */
  getRecords_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; query?: string | null; tags?: string[] }
  ): Promise<IResponseWithSync<ListPlayerRecordKeysResponse>> {
    const params = { limit: 25, ...queryParams } as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ListPlayerRecordKeysResponse, 'ListPlayerRecordKeysResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Bulk get player&#39;s record size, max allowed 20 at a time, that can be retrieved using this endpoint.
   */
  createUserBulkRecordSize(data: BulkUserKeyRequest): Promise<IResponse<BulkGetPlayerRecordSizeResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/bulk/records/size'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BulkGetPlayerRecordSizeResponse, 'BulkGetPlayerRecordSizeResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Retrieve player record key and payload in bulk under given namespace. Maximum number of user ids per request is 20.
   */
  createBulkUser_ByKey(key: string, data: BulkUserIDsRequest): Promise<IResponse<BulkGetPlayerRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/records/{key}/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BulkGetPlayerRecordResponse, 'BulkGetPlayerRecordResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoints will create new player record or replace the existing player record in bulk. Maximum number of user ids per request is 10. Maximum total size of the request payload is 5 MB.
   */
  updateBulkUser_ByKey(
    key: string,
    data: BulkUpdatePlayerRecordsByKeyRequest
  ): Promise<IResponse<BulkUpdatePlayerRecordByKeyResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/records/{key}/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BulkUpdatePlayerRecordByKeyResponseArray, 'BulkUpdatePlayerRecordByKeyResponseArray')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Retrieve player record key and payload in bulk under given namespace. Maximum bulk key limit per request 20.
   */
  createRecordBulk_ByUserId(userId: string, data: BulkGetPlayerRecordsRequest): Promise<IResponse<BulkGetAdminPlayerRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BulkGetAdminPlayerRecordResponse, 'BulkGetAdminPlayerRecordResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoints will create new player record or replace the existing player record in bulk. Maximum bulk key limit per request 10.
   */
  updateRecordBulk_ByUserId(userId: string, data: BulkUpdatePlayerRecordsRequest): Promise<IResponse<BulkUpdatePlayerRecordResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BulkUpdatePlayerRecordResponseArray, 'BulkUpdatePlayerRecordResponseArray')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Delete a record (arbitrary JSON data) in user-level with given key.
   */
  deleteRecord_ByUserId_ByKey(userId: string, key: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get a record in user-level (arbitrary JSON data) by its key.
   */
  getRecord_ByUserId_ByKey(userId: string, key: string): Promise<IResponseWithSync<PlayerRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, PlayerRecordResponse, 'PlayerRecordResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * ## Description This endpoints will create new player record or append the existing player record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. is_public (default: false, type: bool) Indicate whether the player record is a public record or not. 3. tags (default: *empty array*, type: array of string) Indicate the tagging for the game record. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;is_public&#34;: true, &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ... } ```
   */
  createRecord_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<IResponse<PlayerRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PlayerRecordResponse, 'PlayerRecordResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * ## Description This endpoints will create new player record or replace the existing player record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. is_public (default: false, type: bool) Indicate whether the player record is a public record or not. 3. tags (default: *empty array*, type: array of string) Indicate the tagging for the game record. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;is_public&#34;: true, &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ... } ```
   */
  updateRecord_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<IResponse<PlayerRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PlayerRecordResponse, 'PlayerRecordResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get a size of the player record
   */
  getSize_ByUserId_ByKey(userId: string, key: string): Promise<IResponseWithSync<PlayerRecordSizeResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}/size'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, PlayerRecordSizeResponse, 'PlayerRecordSizeResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Delete player public record. ## Warning: This endpoint is going to deprecate This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - **POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **DELETE /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}**
   */
  deletePublic_ByUserId_ByKey(userId: string, key: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}/public'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get a record in user-level (arbitrary JSON data) by its key.
   */
  getPublic_ByUserId_ByKey(userId: string, key: string): Promise<IResponseWithSync<PlayerRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}/public'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, PlayerRecordResponse, 'PlayerRecordResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * ## Description This endpoints will create new player public record or append the existing player public record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Warning: This endpoint is going to deprecate This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - **POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **DELETE /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}**
   */
  createPublic_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<IResponse<PlayerRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}/public'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PlayerRecordResponse, 'PlayerRecordResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * ## Description This endpoints will create new player public record or replace the existing player public record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Warning: This endpoint is going to deprecate This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - **POST /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **PUT /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **DELETE /cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}**
   */
  updatePublic_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<IResponse<PlayerRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/records/{key}/public'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PlayerRecordResponse, 'PlayerRecordResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
