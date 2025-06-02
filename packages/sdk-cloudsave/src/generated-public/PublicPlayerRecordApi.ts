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
import { BulkGetPlayerRecordResponse } from '../generated-definitions/BulkGetPlayerRecordResponse.js'
import { BulkGetPlayerRecordsRequest } from '../generated-definitions/BulkGetPlayerRecordsRequest.js'
import { BulkUserIDsRequest } from '../generated-definitions/BulkUserIDsRequest.js'
import { ListPlayerRecordKeysResponse } from '../generated-definitions/ListPlayerRecordKeysResponse.js'
import { PlayerRecordRequest } from '../generated-definitions/PlayerRecordRequest.js'
import { PlayerRecordResponse } from '../generated-definitions/PlayerRecordResponse.js'
import { PublicPlayerRecord$ } from './endpoints/PublicPlayerRecord$.js'

export function PublicPlayerRecordApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getUsersMeRecords(queryParams?: {
    limit?: number
    offset?: number
    tags?: string[]
  }): Promise<AxiosResponse<ListPlayerRecordKeysResponse>> {
    const $ = new PublicPlayerRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeRecords(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createUserMeRecordBulk(data: BulkGetPlayerRecordsRequest): Promise<AxiosResponse<BulkGetPlayerRecordResponse>> {
    const $ = new PublicPlayerRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeRecordBulk(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteRecord_ByUserId_ByKey(userId: string, key: string): Promise<AxiosResponse<unknown>> {
    const $ = new PublicPlayerRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteRecord_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRecord_ByUserId_ByKey(userId: string, key: string): Promise<AxiosResponse<PlayerRecordResponse>> {
    const $ = new PublicPlayerRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRecord_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createRecord_ByUserId_ByKey(
    userId: string,
    key: string,
    data: PlayerRecordRequest
  ): Promise<AxiosResponse<PlayerRecordResponse>> {
    const $ = new PublicPlayerRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createRecord_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRecord_ByUserId_ByKey(
    userId: string,
    key: string,
    data: PlayerRecordRequest
  ): Promise<AxiosResponse<PlayerRecordResponse>> {
    const $ = new PublicPlayerRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRecord_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRecordsPublic_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; tags?: string[] }
  ): Promise<AxiosResponse<ListPlayerRecordKeysResponse>> {
    const $ = new PublicPlayerRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRecordsPublic_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deletePublicMeUser_ByKey(key: string): Promise<AxiosResponse<unknown>> {
    const $ = new PublicPlayerRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePublicMeUser_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function fetchPublicBulkUser_ByKey(key: string, data: BulkUserIDsRequest): Promise<AxiosResponse<BulkGetPlayerRecordResponse>> {
    const $ = new PublicPlayerRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchPublicBulkUser_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function fetchRecordBulk_ByUserId(
    userId: string,
    data: BulkGetPlayerRecordsRequest
  ): Promise<AxiosResponse<BulkGetPlayerRecordResponse>> {
    const $ = new PublicPlayerRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchRecordBulk_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPublic_ByUserId_ByKey(userId: string, key: string): Promise<AxiosResponse<PlayerRecordResponse>> {
    const $ = new PublicPlayerRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPublic_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createPublic_ByUserId_ByKey(
    userId: string,
    key: string,
    data: PlayerRecordRequest
  ): Promise<AxiosResponse<PlayerRecordResponse>> {
    const $ = new PublicPlayerRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPublic_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePublic_ByUserId_ByKey(
    userId: string,
    key: string,
    data: PlayerRecordRequest
  ): Promise<AxiosResponse<PlayerRecordResponse>> {
    const $ = new PublicPlayerRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePublic_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Retrieve list of player records key under given namespace.
     */
    getUsersMeRecords,
    /**
     * Retrieve player record key and payload in bulk under given namespace. Maximum bulk key limit per request 20
     */
    createUserMeRecordBulk,
    /**
     * Delete player record by its key. Only user that own the player record could delete it.
     */
    deleteRecord_ByUserId_ByKey,
    /**
     * Get player record by its key. **Private Record**: Only user that own the player record could retrieve it.
     */
    getRecord_ByUserId_ByKey,
    /**
     * ## Description This endpoints will create new player record or append the existing player record. Only user that own the existing player record could modify. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. is_public (default: false, type: bool) Indicate whether the player record is a public record or not. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;is_public&#34;: true } ... } ``` ## Recommended Request Body Size To ensure optimal performance and efficient resource utilization, it is recommended that the request body size for this endpoint does not exceed 250 KB. ## Exceeding the recommended limit While it&#39;s possible to handle larger request, exceeding this limit may lead to increased processing time, potential performance degradation, and potential timeout issues.
     */
    createRecord_ByUserId_ByKey,
    /**
     * ## Description This endpoints will create new player record or replace the existing player record. Only user that own the existing player record could modify it. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Record Metadata Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name **__META**. When creating record, if **__META** field is not defined, the metadata value will use the default value. When updating record, if **__META** field is not defined, the existing metadata value will stay as is. **Metadata List:** 1. is_public (default: false, type: bool) Indicate whether the player record is a public record or not. **Request Body Example:** ``` { &#34;__META&#34;: { &#34;is_public&#34;: true } ... } ``` ## Recommended Request Body Size To ensure optimal performance and efficient resource utilization, it is recommended that the request body size for this endpoint does not exceed 250 KB. ## Exceeding the recommended limit While it&#39;s possible to handle larger request, exceeding this limit may lead to increased processing time, potential performance degradation, and potential timeout issues.
     */
    updateRecord_ByUserId_ByKey,
    /**
     * Retrieve list of other public player records key under given namespace.
     */
    getRecordsPublic_ByUserId,
    /**
     * Delete player public record. ## Warning: This endpoint is going to deprecate This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - **POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **DELETE /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}**
     */
    deletePublicMeUser_ByKey,
    /**
     * Bulk get other player&#39;s record that is public by userIds, max allowed 20 at a time. Only record with `isPublic=true` that can be retrieved using this endpoint.
     */
    fetchPublicBulkUser_ByKey,
    /**
     * Retrieve other player public record key and payload in bulk under given namespace. Maximum bulk key limit per request 20
     */
    fetchRecordBulk_ByUserId,
    /**
     * Get other player&#39;s record that is public. Only record with `isPublic=true` that can be retrieved using this endpoint.
     */
    getPublic_ByUserId_ByKey,
    /**
     * ## Description This endpoints will create new player public record or append the existing player public record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Warning: This endpoint is going to deprecate This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - **POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **DELETE /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}**
     */
    createPublic_ByUserId_ByKey,
    /**
     * ## Description This endpoints will create new player public record or replace the existing player public record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. ## Warning: This endpoint is going to deprecate This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - **POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}** and utilizing **__META** functionality - **DELETE /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}**
     */
    updatePublic_ByUserId_ByKey
  }
}
