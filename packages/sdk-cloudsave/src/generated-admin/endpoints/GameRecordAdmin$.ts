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
import { GameRecordAdminResponse } from '../../generated-definitions/GameRecordAdminResponse.js'
import { GameRecordRequest } from '../../generated-definitions/GameRecordRequest.js'
import { ListGameRecordKeysResponse } from '../../generated-definitions/ListGameRecordKeysResponse.js'

export class GameRecordAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Retrieve list of records key by namespace
   */
  getRecords(queryParams: {
    limit: number
    offset: number
    query?: string | null
    tags?: string[]
  }): Promise<Response<ListGameRecordKeysResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/records'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListGameRecordKeysResponse,
      'ListGameRecordKeysResponse'
    )
  }
  /**
   * This endpoints delete game record in namespace-level
   */
  deleteRecord_ByKey(key: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/records/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get a record by its key in namespace-level.
   */
  getRecord_ByKey(key: string): Promise<Response<GameRecordAdminResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/records/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GameRecordAdminResponse,
      'GameRecordAdminResponse'
    )
  }
  /**
   * ## Description This endpoints will create new game record or append the existing game record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. ttl_config (default: *empty*, type: object) Indicate the TTL configuration for the game record. action: - DELETE: record will be deleted after TTL is reached 3. tags (default: *empty array*, type: array of string) Indicate the tagging for the game record. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;ttl_config&#34;: { &#34;expires_at&#34;: &#34;2026-01-02T15:04:05Z&#34;, // should be in RFC3339 format &#34;action&#34;: &#34;DELETE&#34; }, &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ... } ```
   */
  createRecord_ByKey(key: string, data: GameRecordRequest): Promise<Response<GameRecordAdminResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/records/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GameRecordAdminResponse,
      'GameRecordAdminResponse'
    )
  }
  /**
   * ## Description This endpoints will create new game record or replace the existing game record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. ttl_config (default: *empty*, type: object) Indicate the TTL configuration for the game record. action: - DELETE: record will be deleted after TTL is reached 3. tags (default: *empty array*, type: array of string) Indicate the tagging for the game record. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;ttl_config&#34;: { &#34;expires_at&#34;: &#34;2026-01-02T15:04:05Z&#34;, // should be in RFC3339 format &#34;action&#34;: &#34;DELETE&#34; }, &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ... } ```
   */
  updateRecord_ByKey(key: string, data: GameRecordRequest): Promise<Response<GameRecordAdminResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/records/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GameRecordAdminResponse,
      'GameRecordAdminResponse'
    )
  }
}
