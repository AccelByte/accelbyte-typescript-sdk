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
import { BulkGetPlayerRecordResponse } from '../../generated-definitions/BulkGetPlayerRecordResponse.js'
import { BulkGetPlayerRecordsRequest } from '../../generated-definitions/BulkGetPlayerRecordsRequest.js'
import { BulkUserIDsRequest } from '../../generated-definitions/BulkUserIDsRequest.js'
import { ListPlayerRecordKeysResponse } from '../../generated-definitions/ListPlayerRecordKeysResponse.js'
import { PlayerRecordRequest } from '../../generated-definitions/PlayerRecordRequest.js'
import { PlayerRecordResponse } from '../../generated-definitions/PlayerRecordResponse.js'

export class PublicPlayerRecord$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required valid user token Required scope: &lt;code&gt;social&lt;/code&gt; Retrieve list of player records key under given namespace.
   */
  getUsersMeRecords(queryParams?: { limit?: number; offset?: number }): Promise<IResponseWithSync<ListPlayerRecordKeysResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/me/records'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ListPlayerRecordKeysResponse, 'ListPlayerRecordKeysResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required valid user token Required scope: &lt;code&gt;social&lt;/code&gt; Retrieve player record key and payload in bulk under given namespace. Maximum bulk key limit per request 20
   */
  createUserMeRecordBulk(data: BulkGetPlayerRecordsRequest): Promise<IResponse<BulkGetPlayerRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/me/records/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, BulkGetPlayerRecordResponse, 'BulkGetPlayerRecordResponse')
  }

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [DELETE]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; Delete player record by its key. Only user that own the player record could delete it.
   */
  deleteRecord_ByUserId_ByKey(userId: string, key: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [READ]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; Get player record by its key. &lt;b&gt;Private Record:&lt;/b&gt; Only user that own the player record could retrieve it.
   */
  getRecord_ByUserId_ByKey(userId: string, key: string): Promise<IResponseWithSync<PlayerRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PlayerRecordResponse, 'PlayerRecordResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [CREATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will create new player record or append the existing player record. Only user that own the existing player record could modify. &lt;b&gt;Append example:&lt;/b&gt; Example 1 - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; Example 2 - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }&lt;/pre&gt; &lt;h2&gt;Restriction &lt;/h2&gt; This is the restriction of Key Naming for the record: 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 3. Cannot use empty string in key names - &lt;pre&gt;{ &#34;&#34;: &#34;value&#34; }&lt;/pre&gt; &lt;h2&gt;Record Metadata&lt;/h2&gt; Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name &lt;b&gt;__META&lt;/b&gt;. When creating record, if &lt;b&gt;__META&lt;/b&gt; field is not defined, the metadata value will use the default value. When updating record, if &lt;b&gt;__META&lt;/b&gt; field is not defined, the existing metadata value will stay as is. &lt;b&gt;Metadata List:&lt;/b&gt; 1. is_public (default: false, type: bool) Indicate whether the player record is a public record or not. &lt;b&gt;Request Body Example:&lt;/b&gt; &lt;pre&gt; { &#34;__META&#34;: { &#34;is_public&#34;: true } ... } &lt;/pre&gt;
   */
  createRecord_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<IResponse<PlayerRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, PlayerRecordResponse, 'PlayerRecordResponse')
  }

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will create new player record or replace the existing player record. Only user that own the existing player record could modify it. &lt;b&gt;Replace behaviour:&lt;/b&gt; The existing value will be replaced completely with the new value. Example - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; &lt;h2&gt;Restriction &lt;/h2&gt; This is the restriction of Key Naming for the record: 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 3. Cannot use empty string in key names - &lt;pre&gt;{ &#34;&#34;: &#34;value&#34; }&lt;/pre&gt; &lt;h2&gt;Record Metadata&lt;/h2&gt; Metadata allows user to define the behaviour of the record. Metadata can be defined in request body with field name &lt;b&gt;__META&lt;/b&gt;. When creating record, if &lt;b&gt;__META&lt;/b&gt; field is not defined, the metadata value will use the default value. When updating record, if &lt;b&gt;__META&lt;/b&gt; field is not defined, the existing metadata value will stay as is. &lt;b&gt;Metadata List:&lt;/b&gt; 1. is_public (default: false, type: bool) Indicate whether the player record is a public record or not. &lt;b&gt;Request Body Example:&lt;/b&gt; &lt;pre&gt; { &#34;__META&#34;: { &#34;is_public&#34;: true } ... } &lt;/pre&gt;
   */
  updateRecord_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<IResponse<PlayerRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, PlayerRecordResponse, 'PlayerRecordResponse')
  }

  /**
   * Required valid user token with permission: &lt;code&gt;NAMESPACE:{namespace}:USER:*:PUBLIC:CLOUDSAVE:RECORD [READ]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Retrieve list of other public player records key under given namespace.
   */
  getRecordsPublic_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<ListPlayerRecordKeysResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/records/public'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ListPlayerRecordKeysResponse, 'ListPlayerRecordKeysResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required valid user authorization Required scope: &lt;code&gt;social&lt;/code&gt; Delete player public record. &lt;h2&gt;Warning: This endpoint is going to deprecate&lt;/h2&gt; This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - &lt;b&gt;POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}&lt;/b&gt; and utilizing &lt;b&gt;__META&lt;/b&gt; functionality - &lt;b&gt;PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}&lt;/b&gt; and utilizing &lt;b&gt;__META&lt;/b&gt; functionality - &lt;b&gt;DELETE /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}&lt;/b&gt;
   */
  deletePublicMeUser_ByKey(key: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/me/records/{key}/public'
      .replace('{namespace}', this.namespace)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;NAMESPACE:{namespace}:PUBLIC:CLOUDSAVE:RECORD [READ]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; Bulk get other player&#39;s record that is public by userIds, max allowed 20 at a time. Only record with &lt;code&gt;isPublic=true&lt;/code&gt; that can be retrieved using this endpoint.
   */
  createPublicBulkUser_ByKey(key: string, data: BulkUserIDsRequest): Promise<IResponse<BulkGetPlayerRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/bulk/records/{key}/public'
      .replace('{namespace}', this.namespace)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, BulkGetPlayerRecordResponse, 'BulkGetPlayerRecordResponse')
  }

  /**
   * Required valid user token with permission: &lt;code&gt;NAMESPACE:{namespace}:USER:*:PUBLIC:CLOUDSAVE:RECORD [READ]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Retrieve other player public record key and payload in bulk under given namespace. Maximum bulk key limit per request 20
   */
  createRecordBulk_ByUserId(userId: string, data: BulkGetPlayerRecordsRequest): Promise<IResponse<BulkGetPlayerRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/records/public/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, BulkGetPlayerRecordResponse, 'BulkGetPlayerRecordResponse')
  }

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:PUBLIC:CLOUDSAVE:RECORD [READ]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; Get other player&#39;s record that is public. Only record with &lt;code&gt;isPublic=true&lt;/code&gt; that can be retrieved using this endpoint.
   */
  getPublic_ByUserId_ByKey(userId: string, key: string): Promise<IResponseWithSync<PlayerRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}/public'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PlayerRecordResponse, 'PlayerRecordResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:PUBLIC:CLOUDSAVE:RECORD [WRITE]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will create new player public record or append the existing player public record. &lt;b&gt;Append example:&lt;/b&gt; Example 1 - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; Example 2 - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }&lt;/pre&gt; &lt;h2&gt;Restriction &lt;/h2&gt; This is the restriction of Key Naming for the record: 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 3. Cannot use empty string in key names - &lt;pre&gt;{ &#34;&#34;: &#34;value&#34; }&lt;/pre&gt; &lt;h2&gt;Reserved Word&lt;/h2&gt; Reserved Word List: &lt;b&gt;__META&lt;/b&gt; The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. &lt;h2&gt;Warning: This endpoint is going to deprecate&lt;/h2&gt; This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - &lt;b&gt;POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}&lt;/b&gt; and utilizing &lt;b&gt;__META&lt;/b&gt; functionality - &lt;b&gt;PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}&lt;/b&gt; and utilizing &lt;b&gt;__META&lt;/b&gt; functionality - &lt;b&gt;DELETE /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}&lt;/b&gt;
   */
  createPublic_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<IResponse<PlayerRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}/public'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, PlayerRecordResponse, 'PlayerRecordResponse')
  }

  /**
   * &lt;table&gt; &lt;tr&gt; &lt;td&gt;Required Permission&lt;/td&gt; &lt;td&gt;&lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:PUBLIC:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Required Scope&lt;/td&gt; &lt;td&gt;&lt;code&gt;social&lt;/code&gt;&lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;br/&gt; &lt;h2&gt;Description&lt;/h2&gt; This endpoints will create new player public record or replace the existing player public record. &lt;b&gt;Replace behaviour:&lt;/b&gt; The existing value will be replaced completely with the new value. Example - Existing JSON: &lt;pre&gt;{ &#34;data1&#34;: &#34;value&#34; }&lt;/pre&gt; - New JSON: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; - Result: &lt;pre&gt;{ &#34;data2&#34;: &#34;new value&#34; }&lt;/pre&gt; &lt;h2&gt;Restriction &lt;/h2&gt; This is the restriction of Key Naming for the record: 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 3. Cannot use empty string in key names - &lt;pre&gt;{ &#34;&#34;: &#34;value&#34; }&lt;/pre&gt; &lt;h2&gt;Reserved Word&lt;/h2&gt; Reserved Word List: &lt;b&gt;__META&lt;/b&gt; The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored. &lt;h2&gt;Warning: This endpoint is going to deprecate&lt;/h2&gt; This endpoint is going to deprecate in the future please don&#39;t use it. For alternative, please use these endpoints: - &lt;b&gt;POST /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}&lt;/b&gt; and utilizing &lt;b&gt;__META&lt;/b&gt; functionality - &lt;b&gt;PUT /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}&lt;/b&gt; and utilizing &lt;b&gt;__META&lt;/b&gt; functionality - &lt;b&gt;DELETE /cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}&lt;/b&gt;
   */
  updatePublic_ByUserId_ByKey(userId: string, key: string, data: PlayerRecordRequest): Promise<IResponse<PlayerRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/records/{key}/public'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, PlayerRecordResponse, 'PlayerRecordResponse')
  }
}
