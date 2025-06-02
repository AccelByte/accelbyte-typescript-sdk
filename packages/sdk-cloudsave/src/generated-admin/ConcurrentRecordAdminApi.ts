/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { AdminConcurrentRecordRequest } from '../generated-definitions/AdminConcurrentRecordRequest.js'
import { AdminGameConcurrentRecordRequest } from '../generated-definitions/AdminGameConcurrentRecordRequest.js'
import { AdminPlayerConcurrentRecordRequest } from '../generated-definitions/AdminPlayerConcurrentRecordRequest.js'
import { PlayerRecordConcurrentUpdateResponse } from '../generated-definitions/PlayerRecordConcurrentUpdateResponse.js'
import { ConcurrentRecordAdmin$ } from './endpoints/ConcurrentRecordAdmin$.js'

export function ConcurrentRecordAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function updateConcurrentRecord_ByKey(key: string, data: AdminConcurrentRecordRequest): Promise<AxiosResponse<unknown>> {
    const $ = new ConcurrentRecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateConcurrentRecord_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateConcurrentAdminrecord_ByKey(key: string, data: AdminGameConcurrentRecordRequest): Promise<AxiosResponse<unknown>> {
    const $ = new ConcurrentRecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateConcurrentAdminrecord_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateConcurrentRecord_ByUserId_ByKey(
    userId: string,
    key: string,
    data: AdminConcurrentRecordRequest,
    queryParams?: { responseBody?: boolean | null }
  ): Promise<AxiosResponse<PlayerRecordConcurrentUpdateResponse>> {
    const $ = new ConcurrentRecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateConcurrentRecord_ByUserId_ByKey(userId, key, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateConcurrentAdminrecord_ByUserId_ByKey(
    userId: string,
    key: string,
    data: AdminPlayerConcurrentRecordRequest,
    queryParams?: { responseBody?: boolean | null }
  ): Promise<AxiosResponse<PlayerRecordConcurrentUpdateResponse>> {
    const $ = new ConcurrentRecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateConcurrentAdminrecord_ByUserId_ByKey(userId, key, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePublicConcurrent_ByUserId_ByKey(
    userId: string,
    key: string,
    data: AdminConcurrentRecordRequest,
    queryParams?: { responseBody?: boolean | null }
  ): Promise<AxiosResponse<PlayerRecordConcurrentUpdateResponse>> {
    const $ = new ConcurrentRecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePublicConcurrent_ByUserId_ByKey(userId, key, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * ## Description This endpoints will create new game record or replace the existing game record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Recommended Request Body Size To ensure optimal performance and efficient resource utilization, it is recommended that the request body size for this endpoint does not exceed 250 KB. ## Exceeding the recommended limit While it&#39;s possible to handle larger request, exceeding this limit may lead to increased processing time, potential performance degradation, and potential timeout issues. ## Parameters Notes 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. updatedAt (required: true) Time format style: RFC3339 3. value Json 4. tags (default: *empty array*, type: array of string) Indicate the tagging for the game record. **Request Body Example:** ``` { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;value&#34;: {}, &#34;updatedAt&#34;: &#34;2022-03-17T10:42:15.444Z&#34;, &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ``` ## Optimistic Concurrency Control This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
     */
    updateConcurrentRecord_ByKey,
    /**
     * ## Description This endpoints will create new game record or replace the existing game record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Recommended Request Body Size To ensure optimal performance and efficient resource utilization, it is recommended that the request body size for this endpoint does not exceed 250 KB. ## Exceeding the recommended limit While it&#39;s possible to handle larger request, exceeding this limit may lead to increased processing time, potential performance degradation, and potential timeout issues. ## Parameters Notes 1. updatedAt (required: true) Time format style: RFC3339 2. value Json 3. tags (default: *empty array*, type: array of string) Indicate the tagging for the admin record. **Request Body Example:** ``` { &#34;value&#34;: {}, &#34;updatedAt&#34;: &#34;2022-03-17T10:42:15.444Z&#34;, &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ``` ## Optimistic Concurrency Control This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
     */
    updateConcurrentAdminrecord_ByKey,
    /**
     * ## Description This endpoints will create new player record or replace the existing player record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Recommended Request Body Size To ensure optimal performance and efficient resource utilization, it is recommended that the request body size for this endpoint does not exceed 250 KB. ## Exceeding the recommended limit While it&#39;s possible to handle larger request, exceeding this limit may lead to increased processing time, potential performance degradation, and potential timeout issues. ## Parameters Notes 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. updatedAt (required: true) Time format style: RFC3339 3. value Json 4. tags (default: *empty array*, type: array of string) Indicate the tagging for the game record. **Request Body Example:** ``` { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;value&#34;: {}, &#34;updatedAt&#34;: &#34;2022-03-17T10:42:15.444Z&#34;, &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ``` ## Optimistic Concurrency Control This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
     */
    updateConcurrentRecord_ByUserId_ByKey,
    /**
     * ## Description This endpoints will create new admin player record or replace the existing admin player record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Recommended Request Body Size To ensure optimal performance and efficient resource utilization, it is recommended that the request body size for this endpoint does not exceed 250 KB. ## Exceeding the recommended limit While it&#39;s possible to handle larger request, exceeding this limit may lead to increased processing time, potential performance degradation, and potential timeout issues. ## Parameters Notes 1. updatedAt (required: true) Time format style: RFC3339 2. value Json 3. tags (default: *empty array*, type: array of string) Indicate the tagging for the admin record. **Request Body Example:** ``` { &#34;value&#34;: {}, &#34;updatedAt&#34;: &#34;2022-03-17T10:42:15.444Z&#34;, &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ``` ## Optimistic Concurrency Control This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
     */
    updateConcurrentAdminrecord_ByUserId_ByKey,
    /**
     * ## Description This endpoints will create new player public record or replace the existing player public record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Recommended Request Body Size To ensure optimal performance and efficient resource utilization, it is recommended that the request body size for this endpoint does not exceed 250 KB. ## Exceeding the recommended limit While it&#39;s possible to handle larger request, exceeding this limit may lead to increased processing time, potential performance degradation, and potential timeout issues. ## Parameters Notes 1. set_by (default: CLIENT, type: string) Indicate which party that could modify the game record. SERVER: record can be modified by server only. CLIENT: record can be modified by client and server. 2. updatedAt (required: true) Time format style: RFC3339 3. value Json 4. tags (default: *empty array*, type: array of string) Indicate the tagging for the game record. **Request Body Example:** ``` { &#34;set_by&#34;: &#34;SERVER&#34;, &#34;value&#34;: {}, &#34;updatedAt&#34;: &#34;2022-03-17T10:42:15.444Z&#34;, &#34;tags&#34;: [&#34;tag1&#34;, &#34;tag2&#34;] } ``` ## Optimistic Concurrency Control This endpoint implement optimistic concurrency control to avoid race condition. If the record has been updated since the client fetch it, the server will return HTTP status code 412 (precondition failed) and client need to redo the operation (fetch data and do update). Otherwise, the server will process the request.
     */
    updatePublicConcurrent_ByUserId_ByKey
  }
}
