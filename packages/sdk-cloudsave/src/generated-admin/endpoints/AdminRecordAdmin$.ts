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

export class AdminRecordAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Retrieve list of records key by namespace
   */
  getAdminrecords(queryParams?: {
    limit?: number
    offset?: number
    query?: string | null
  }): Promise<IResponseWithSync<ListAdminGameRecordKeysResponse>> {
    const params = { limit: 25, ...queryParams } as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/adminrecords'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ListAdminGameRecordKeysResponse, 'ListAdminGameRecordKeysResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Bulk get admin game records. Maximum key per request 20.
   */
  createAdminrecordBulk(data: BulkGetAdminGameRecordRequest): Promise<IResponse<BulkGetAdminGameRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/adminrecords/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BulkGetAdminGameRecordResponse, 'BulkGetAdminGameRecordResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This endpoints delete game record in namespace-level
   */
  deleteAdminrecord_ByKey(key: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/adminrecords/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get a record by its key in namespace-level.
   */
  getAdminrecord_ByKey(key: string): Promise<IResponseWithSync<AdminGameRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/adminrecords/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, AdminGameRecordResponse, 'AdminGameRecordResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * ## Description This endpoints will create new admin game record or append the existing admin game record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }`
   */
  createAdminrecord_ByKey(key: string, data: AdminGameRecordRequest): Promise<IResponse<AdminGameRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/adminrecords/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, AdminGameRecordResponse, 'AdminGameRecordResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * ## Description This endpoints will create new admin game record or replace the existing admin game record. **Append example:** Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }`
   */
  updateAdminrecord_ByKey(key: string, data: AdminGameRecordRequest): Promise<IResponse<AdminGameRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/adminrecords/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, AdminGameRecordResponse, 'AdminGameRecordResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Retrieve list of admin player records key and userID under given namespace.
   */
  getAdminrecords_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<ListAdminPlayerRecordKeysResponse>> {
    const params = { limit: 25, ...queryParams } as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ListAdminPlayerRecordKeysResponse, 'ListAdminPlayerRecordKeysResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Bulk get admin player record by userIds, max allowed 20 at a time.
   */
  createBulkUser_ByKey(key: string, data: BulkUserIDsRequest): Promise<IResponse<BulkGetAdminPlayerRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/adminrecords/{key}/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BulkGetAdminPlayerRecordResponse, 'BulkGetAdminPlayerRecordResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Bulk get admin player records. Maximum key per request 20.
   */
  createAdminrecordBulk_ByUserId(
    userId: string,
    data: BulkGetAdminPlayerRecordRequest
  ): Promise<IResponse<BulkGetAdminPlayerRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BulkGetAdminPlayerRecordResponse, 'BulkGetAdminPlayerRecordResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Delete a record (arbitrary JSON data) in user-level with given key.
   */
  deleteAdminrecord_ByUserId_ByKey(userId: string, key: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get a admin record in user-level (arbitrary JSON data) by its key.
   */
  getAdminrecord_ByUserId_ByKey(userId: string, key: string): Promise<IResponseWithSync<AdminPlayerRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, AdminPlayerRecordResponse, 'AdminPlayerRecordResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * ## Description This endpoints will create new admin player record or append the existing admin game record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }`
   */
  createAdminrecord_ByUserId_ByKey(
    userId: string,
    key: string,
    data: AdminPlayerRecordRequest
  ): Promise<IResponse<AdminPlayerRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, AdminPlayerRecordResponse, 'AdminPlayerRecordResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * ## Description This endpoints will create new admin player record or replace the existing admin player record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }`
   */
  updateAdminrecord_ByUserId_ByKey(
    userId: string,
    key: string,
    data: AdminPlayerRecordRequest
  ): Promise<IResponse<AdminPlayerRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/adminrecords/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, AdminPlayerRecordResponse, 'AdminPlayerRecordResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
