/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { AdminGameRecordRequest } from '../generated-definitions/AdminGameRecordRequest.js'
import { AdminGameRecordResponse } from '../generated-definitions/AdminGameRecordResponse.js'
import { AdminPlayerRecordRequest } from '../generated-definitions/AdminPlayerRecordRequest.js'
import { AdminPlayerRecordResponse } from '../generated-definitions/AdminPlayerRecordResponse.js'
import { BulkGetAdminGameRecordRequest } from '../generated-definitions/BulkGetAdminGameRecordRequest.js'
import { BulkGetAdminGameRecordResponse } from '../generated-definitions/BulkGetAdminGameRecordResponse.js'
import { BulkGetAdminPlayerRecordRequest } from '../generated-definitions/BulkGetAdminPlayerRecordRequest.js'
import { BulkGetAdminPlayerRecordResponse } from '../generated-definitions/BulkGetAdminPlayerRecordResponse.js'
import { BulkUserIDsRequest } from '../generated-definitions/BulkUserIDsRequest.js'
import { ListAdminGameRecordKeysResponse } from '../generated-definitions/ListAdminGameRecordKeysResponse.js'
import { ListAdminPlayerRecordKeysResponse } from '../generated-definitions/ListAdminPlayerRecordKeysResponse.js'
import { RecordAdmin$ } from './endpoints/RecordAdmin$.js'

export function RecordAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getAdminrecords(queryParams?: {
    limit?: number
    offset?: number
    query?: string | null
    tags?: string[]
  }): Promise<AxiosResponse<ListAdminGameRecordKeysResponse>> {
    const $ = new RecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAdminrecords(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function fetchAdminrecordBulk(data: BulkGetAdminGameRecordRequest): Promise<AxiosResponse<BulkGetAdminGameRecordResponse>> {
    const $ = new RecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchAdminrecordBulk(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteAdminrecord_ByKey(key: string): Promise<AxiosResponse<unknown>> {
    const $ = new RecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAdminrecord_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getAdminrecord_ByKey(key: string): Promise<AxiosResponse<AdminGameRecordResponse>> {
    const $ = new RecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAdminrecord_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createAdminrecord_ByKey(key: string, data: AdminGameRecordRequest): Promise<AxiosResponse<AdminGameRecordResponse>> {
    const $ = new RecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createAdminrecord_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateAdminrecord_ByKey(key: string, data: AdminGameRecordRequest): Promise<AxiosResponse<AdminGameRecordResponse>> {
    const $ = new RecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateAdminrecord_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getAdminrecords_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; query?: string | null; tags?: string[] }
  ): Promise<AxiosResponse<ListAdminPlayerRecordKeysResponse>> {
    const $ = new RecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAdminrecords_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function fetchBulkUser_ByKey(key: string, data: BulkUserIDsRequest): Promise<AxiosResponse<BulkGetAdminPlayerRecordResponse>> {
    const $ = new RecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchBulkUser_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function fetchAdminrecordBulk_ByUserId(
    userId: string,
    data: BulkGetAdminPlayerRecordRequest
  ): Promise<AxiosResponse<BulkGetAdminPlayerRecordResponse>> {
    const $ = new RecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchAdminrecordBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteAdminrecord_ByUserId_ByKey(userId: string, key: string): Promise<AxiosResponse<unknown>> {
    const $ = new RecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAdminrecord_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getAdminrecord_ByUserId_ByKey(userId: string, key: string): Promise<AxiosResponse<AdminPlayerRecordResponse>> {
    const $ = new RecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAdminrecord_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createAdminrecord_ByUserId_ByKey(
    userId: string,
    key: string,
    data: AdminPlayerRecordRequest
  ): Promise<AxiosResponse<AdminPlayerRecordResponse>> {
    const $ = new RecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createAdminrecord_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateAdminrecord_ByUserId_ByKey(
    userId: string,
    key: string,
    data: AdminPlayerRecordRequest
  ): Promise<AxiosResponse<AdminPlayerRecordResponse>> {
    const $ = new RecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateAdminrecord_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Retrieve list of records key by namespace
     */
    getAdminrecords,
    /**
     * Bulk get admin game records. Maximum key per request 20.
     */
    fetchAdminrecordBulk,
    /**
     * This endpoints delete game record in namespace-level
     */
    deleteAdminrecord_ByKey,
    /**
     * Get a record by its key in namespace-level.
     */
    getAdminrecord_ByKey,
    /**
     * ## Description This endpoints will create new admin game record or append the existing admin game record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. tags (default: *empty array*, type: array of string) Indicate the tagging for the admin record. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ... } ```
     */
    createAdminrecord_ByKey,
    /**
     * ## Description This endpoints will create new admin game record or replace the existing admin game record. **Append example:** Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. tags (default: *empty array*, type: array of string) Indicate the tagging for the admin record. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ... } ```
     */
    updateAdminrecord_ByKey,
    /**
     * Retrieve list of admin player records key and userID under given namespace.
     */
    getAdminrecords_ByUserId,
    /**
     * Bulk get admin player record by userIds, max allowed 20 at a time.
     */
    fetchBulkUser_ByKey,
    /**
     * Bulk get admin player records. Maximum key per request 20.
     */
    fetchAdminrecordBulk_ByUserId,
    /**
     * Delete a record (arbitrary JSON data) in user-level with given key.
     */
    deleteAdminrecord_ByUserId_ByKey,
    /**
     * Get a admin record in user-level (arbitrary JSON data) by its key.
     */
    getAdminrecord_ByUserId_ByKey,
    /**
     * ## Description This endpoints will create new admin player record or append the existing admin game record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. tags (default: *empty array*, type: array of string) Indicate the tagging for the admin record. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ... } ```
     */
    createAdminrecord_ByUserId_ByKey,
    /**
     * ## Description This endpoints will create new admin player record or replace the existing admin player record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. tags (default: *empty array*, type: array of string) Indicate the tagging for the admin record. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ... } ```
     */
    updateAdminrecord_ByUserId_ByKey
  }
}
