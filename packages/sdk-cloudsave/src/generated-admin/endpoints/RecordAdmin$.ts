/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { AdminGameRecordRequest } from '../../generated-definitions/AdminGameRecordRequest.js'
import { AdminGameRecordResponse } from '../../generated-definitions/AdminGameRecordResponse.js'
import { AdminPlayerRecordRequest } from '../../generated-definitions/AdminPlayerRecordRequest.js'
import { AdminPlayerRecordResponse } from '../../generated-definitions/AdminPlayerRecordResponse.js'
import { BulkGetAdminGameRecordRequest } from '../../generated-definitions/BulkGetAdminGameRecordRequest.js'
import { BulkGetAdminGameRecordResponse } from '../../generated-definitions/BulkGetAdminGameRecordResponse.js'
import { BulkGetAdminPlayerRecordRequest } from '../../generated-definitions/BulkGetAdminPlayerRecordRequest.js'
import { BulkGetAdminPlayerRecordResponse } from '../../generated-definitions/BulkGetAdminPlayerRecordResponse.js'
import { BulkUserIDsRequest } from '../../generated-definitions/BulkUserIDsRequest.js'
import { ListAdminGameRecordKeysResponse } from '../../generated-definitions/ListAdminGameRecordKeysResponse.js'
import { ListAdminPlayerRecordKeysResponse } from '../../generated-definitions/ListAdminPlayerRecordKeysResponse.js'

export class RecordAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Retrieve list of records key by namespace
   */
  getAdminrecords(queryParams?: {
    limit?: number
    offset?: number
    query?: string | null
    tags?: string[]
  }): Promise<Response<ListAdminGameRecordKeysResponse>> {
    const params = { limit: 25, ...queryParams } as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/adminrecords'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListAdminGameRecordKeysResponse,
      'ListAdminGameRecordKeysResponse'
    )
  }
  /**
   * Bulk get admin game records. Maximum key per request 20.
   */
  fetchAdminrecordBulk(data: BulkGetAdminGameRecordRequest): Promise<Response<BulkGetAdminGameRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/adminrecords/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkGetAdminGameRecordResponse,
      'BulkGetAdminGameRecordResponse'
    )
  }
  /**
   * This endpoints delete game record in namespace-level
   */
  deleteAdminrecord_ByKey(key: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/adminrecords/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get a record by its key in namespace-level.
   */
  getAdminrecord_ByKey(key: string): Promise<Response<AdminGameRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/adminrecords/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AdminGameRecordResponse,
      'AdminGameRecordResponse'
    )
  }
  /**
   * ## Description This endpoints will create new admin game record or append the existing admin game record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. tags (default: *empty array*, type: array of string) Indicate the tagging for the admin record. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ... } ```
   */
  createAdminrecord_ByKey(key: string, data: AdminGameRecordRequest): Promise<Response<AdminGameRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/adminrecords/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AdminGameRecordResponse,
      'AdminGameRecordResponse'
    )
  }
  /**
   * ## Description This endpoints will create new admin game record or replace the existing admin game record. **Append example:** Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. tags (default: *empty array*, type: array of string) Indicate the tagging for the admin record. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ... } ```
   */
  updateAdminrecord_ByKey(key: string, data: AdminGameRecordRequest): Promise<Response<AdminGameRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/adminrecords/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AdminGameRecordResponse,
      'AdminGameRecordResponse'
    )
  }
  /**
   * Retrieve list of admin player records key and userID under given namespace.
   */
  getAdminrecords_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; query?: string | null; tags?: string[] }
  ): Promise<Response<ListAdminPlayerRecordKeysResponse>> {
    const params = { limit: 25, ...queryParams } as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListAdminPlayerRecordKeysResponse,
      'ListAdminPlayerRecordKeysResponse'
    )
  }
  /**
   * Bulk get admin player record by userIds, max allowed 20 at a time.
   */
  fetchBulkUser_ByKey(key: string, data: BulkUserIDsRequest): Promise<Response<BulkGetAdminPlayerRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/adminrecords/{key}/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkGetAdminPlayerRecordResponse,
      'BulkGetAdminPlayerRecordResponse'
    )
  }
  /**
   * Bulk get admin player records. Maximum key per request 20.
   */
  fetchAdminrecordBulk_ByUserId(
    userId: string,
    data: BulkGetAdminPlayerRecordRequest
  ): Promise<Response<BulkGetAdminPlayerRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkGetAdminPlayerRecordResponse,
      'BulkGetAdminPlayerRecordResponse'
    )
  }
  /**
   * Delete a record (arbitrary JSON data) in user-level with given key.
   */
  deleteAdminrecord_ByUserId_ByKey(userId: string, key: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get a admin record in user-level (arbitrary JSON data) by its key.
   */
  getAdminrecord_ByUserId_ByKey(userId: string, key: string): Promise<Response<AdminPlayerRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AdminPlayerRecordResponse,
      'AdminPlayerRecordResponse'
    )
  }
  /**
   * ## Description This endpoints will create new admin player record or append the existing admin game record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. tags (default: *empty array*, type: array of string) Indicate the tagging for the admin record. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ... } ```
   */
  createAdminrecord_ByUserId_ByKey(
    userId: string,
    key: string,
    data: AdminPlayerRecordRequest
  ): Promise<Response<AdminPlayerRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AdminPlayerRecordResponse,
      'AdminPlayerRecordResponse'
    )
  }
  /**
   * ## Description This endpoints will create new admin player record or replace the existing admin player record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. tags (default: *empty array*, type: array of string) Indicate the tagging for the admin record. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ... } ```
   */
  updateAdminrecord_ByUserId_ByKey(
    userId: string,
    key: string,
    data: AdminPlayerRecordRequest
  ): Promise<Response<AdminPlayerRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AdminPlayerRecordResponse,
      'AdminPlayerRecordResponse'
    )
  }
}
