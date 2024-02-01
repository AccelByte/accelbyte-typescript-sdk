/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { AdminConcurrentRecordRequest } from '../../generated-definitions/AdminConcurrentRecordRequest.js'
import { AdminGameConcurrentRecordRequest } from '../../generated-definitions/AdminGameConcurrentRecordRequest.js'
import { AdminPlayerConcurrentRecordRequest } from '../../generated-definitions/AdminPlayerConcurrentRecordRequest.js'
import { PlayerRecordConcurrentUpdateResponse } from '../../generated-definitions/PlayerRecordConcurrentUpdateResponse.js'

export class AdminConcurrentRecordAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * ## Description This endpoints will create new game record or replace the existing game record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Parameters Notes 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. updatedAt (required: true) Time format style: RFC3339 3. value Json **Request Body Example:** ``` { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;value&#34;: {}, &#34;updatedAt&#34;: &#34;2022-03-17T10:42:15.444Z&#34; } ``` ## Optimistic Concurrency Control This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
   */
  updateConcurrentRecord_ByKey(key: string, data: AdminConcurrentRecordRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/concurrent/records/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * ## Description This endpoints will create new game record or replace the existing game record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Parameters Notes 1. updatedAt (required: true) Time format style: RFC3339 2. value Json **Request Body Example:** ``` { &#34;value&#34;: {}, &#34;updatedAt&#34;: &#34;2022-03-17T10:42:15.444Z&#34; } ``` ## Optimistic Concurrency Control This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
   */
  updateConcurrentAdminrecord_ByKey(key: string, data: AdminGameConcurrentRecordRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/concurrent/adminrecords/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * ## Description This endpoints will create new player record or replace the existing player record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Parameters Notes 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. updatedAt (required: true) Time format style: RFC3339 3. value Json **Request Body Example:** ``` { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;value&#34;: {}, &#34;updatedAt&#34;: &#34;2022-03-17T10:42:15.444Z&#34; } ``` ## Optimistic Concurrency Control This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
   */
  updateConcurrentRecord_ByUserId_ByKey(
    userId: string,
    key: string,
    data: AdminConcurrentRecordRequest,
    queryParams?: { responseBody?: boolean | null }
  ): Promise<IResponse<PlayerRecordConcurrentUpdateResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/concurrent/records/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PlayerRecordConcurrentUpdateResponse, 'PlayerRecordConcurrentUpdateResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * ## Description This endpoints will create new admin player record or replace the existing admin player record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Parameters Notes 1. updatedAt (required: true) Time format style: RFC3339 2. value Json **Request Body Example:** ``` { &#34;value&#34;: {}, &#34;updatedAt&#34;: &#34;2022-03-17T10:42:15.444Z&#34; } ``` ## Optimistic Concurrency Control This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
   */
  updateConcurrentAdminrecord_ByUserId_ByKey(
    userId: string,
    key: string,
    data: AdminPlayerConcurrentRecordRequest,
    queryParams?: { responseBody?: boolean | null }
  ): Promise<IResponse<PlayerRecordConcurrentUpdateResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/concurrent/adminrecords/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PlayerRecordConcurrentUpdateResponse, 'PlayerRecordConcurrentUpdateResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * ## Description This endpoints will create new player public record or replace the existing player public record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Parameters Notes 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. updatedAt (required: true) Time format style: RFC3339 3. value Json **Request Body Example:** ``` { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;value&#34;: {}, &#34;updatedAt&#34;: &#34;2022-03-17T10:42:15.444Z&#34; } ``` ## Optimistic Concurrency Control This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
   */
  updatePublicConcurrent_ByUserId_ByKey(
    userId: string,
    key: string,
    data: AdminConcurrentRecordRequest,
    queryParams?: { responseBody?: boolean | null }
  ): Promise<IResponse<PlayerRecordConcurrentUpdateResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/concurrent/records/{key}/public'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PlayerRecordConcurrentUpdateResponse, 'PlayerRecordConcurrentUpdateResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
