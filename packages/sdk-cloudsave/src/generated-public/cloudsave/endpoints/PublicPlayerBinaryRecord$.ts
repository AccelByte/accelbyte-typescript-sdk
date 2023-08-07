/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { BinaryRecordRequest } from '../definitions/BinaryRecordRequest.js'
import { BulkGetPlayerBinaryRecordResponse } from '../definitions/BulkGetPlayerBinaryRecordResponse.js'
import { BulkGetPlayerRecordsRequest } from '../definitions/BulkGetPlayerRecordsRequest.js'
import { BulkUserIDsRequest } from '../definitions/BulkUserIDsRequest.js'
import { ListPlayerBinaryRecordsResponse } from '../definitions/ListPlayerBinaryRecordsResponse.js'
import { PlayerBinaryRecordMetadataPublicRequest } from '../definitions/PlayerBinaryRecordMetadataPublicRequest.js'
import { PlayerBinaryRecordResponse } from '../definitions/PlayerBinaryRecordResponse.js'
import { PublicPlayerBinaryRecordCreate } from '../definitions/PublicPlayerBinaryRecordCreate.js'
import { UploadBinaryRecordRequest } from '../definitions/UploadBinaryRecordRequest.js'
import { UploadBinaryRecordResponse } from '../definitions/UploadBinaryRecordResponse.js'

export class PublicPlayerBinaryRecord$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required valid user token Required scope: &lt;code&gt;social&lt;/code&gt; Retrieve list of my binary records by namespace.
   */
  getUsersMeBinaries(queryParams?: {
    limit?: number
    offset?: number
    query?: string | null
  }): Promise<IResponseWithSync<ListPlayerBinaryRecordsResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/me/binaries'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ListPlayerBinaryRecordsResponse, 'ListPlayerBinaryRecordsResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required valid user token Required scope: &lt;code&gt;social&lt;/code&gt; Retrieve player record key and payload in bulk under given namespace. Maximum bulk key limit per request 20
   */
  createUserMeBinaryBulk(data: BulkGetPlayerRecordsRequest): Promise<IResponse<BulkGetPlayerBinaryRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/me/binaries/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, BulkGetPlayerBinaryRecordResponse, 'BulkGetPlayerBinaryRecordResponse')
  }

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [CREATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Create a player binary record. &lt;p&gt;Other detail info:&lt;/p&gt; &lt;code&gt;key&lt;/code&gt; should follow these rules: 1. support uppercase and lowercase letters, numbers, and separators &lt;b&gt;&#34;-&#34;&lt;/b&gt;, &lt;b&gt;&#34;_&#34;&lt;/b&gt;, &lt;b&gt;&#34;.&#34;&lt;/b&gt; are allowed 2. begin and end with letters or numbers 3. spaces are not allowed 4. separators must not appears twice in a row Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
   */
  createBinary_ByUserId(userId: string, data: PublicPlayerBinaryRecordCreate): Promise<IResponse<UploadBinaryRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, UploadBinaryRecordResponse, 'UploadBinaryRecordResponse')
  }

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [DELETE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Delete a player binary record. Only player who own the record can delete it
   */
  deleteBinary_ByUserId_ByKey(userId: string, key: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [READ]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Get a player binary record by its key. Private Record: Only user who own the record could retrieve it.
   */
  getBinary_ByUserId_ByKey(userId: string, key: string): Promise<IResponseWithSync<PlayerBinaryRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PlayerBinaryRecordResponse, 'PlayerBinaryRecordResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Update a player binary record file by its key
   */
  updateBinary_ByUserId_ByKey(userId: string, key: string, data: BinaryRecordRequest): Promise<IResponse<PlayerBinaryRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, PlayerBinaryRecordResponse, 'PlayerBinaryRecordResponse')
  }

  /**
   * Required Permission: &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:PUBLIC:CLOUDSAVE:RECORD [READ]&lt;/code&gt; Required Scope: &lt;code&gt;social&lt;/code&gt; Retrieve list of other player public binary records under given namespace.
   */
  getBinariesPublic_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<IResponseWithSync<ListPlayerBinaryRecordsResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/public'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ListPlayerBinaryRecordsResponse, 'ListPlayerBinaryRecordsResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required Permission: &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:PUBLIC:CLOUDSAVE:RECORD [READ]&lt;/code&gt; Required Scope: &lt;code&gt;social&lt;/code&gt; Bulk get other player&#39;s public binary record by userIds, max allowed 20 at a time. Only record with &lt;code&gt;isPublic=true&lt;/code&gt; can be retrieved using this endpoint.
   */
  createPublicBulkUser_ByKey(key: string, data: BulkUserIDsRequest): Promise<IResponse<BulkGetPlayerBinaryRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/bulk/binaries/{key}/public'
      .replace('{namespace}', this.namespace)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, BulkGetPlayerBinaryRecordResponse, 'BulkGetPlayerBinaryRecordResponse')
  }

  /**
   * Required Permission: &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:PUBLIC:CLOUDSAVE:RECORD [READ]&lt;/code&gt; Required Scope: &lt;code&gt;social&lt;/code&gt; Retrieve other player public binary record in bulk under given namespace. Maximum bulk key limit per request 20
   */
  createBinaryBulk_ByUserId(userId: string, data: BulkGetPlayerRecordsRequest): Promise<IResponse<BulkGetPlayerBinaryRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/public/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, BulkGetPlayerBinaryRecordResponse, 'BulkGetPlayerBinaryRecordResponse')
  }

  /**
   * Required Permission: &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:PUBLIC:CLOUDSAVE:RECORD [READ]&lt;/code&gt; Required Scope: &lt;code&gt;social&lt;/code&gt; Get other player&#39;s public binary record. Only record with &lt;code&gt;isPublic=true&lt;/code&gt; can be retrieved using this endpoint.
   */
  getPublic_ByUserId_ByKey(userId: string, key: string): Promise<IResponseWithSync<PlayerBinaryRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}/public'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PlayerBinaryRecordResponse, 'PlayerBinaryRecordResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [UPDATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Update a player binary record metadata by its key
   */
  updateMetadata_ByUserId_ByKey(
    userId: string,
    key: string,
    data: PlayerBinaryRecordMetadataPublicRequest
  ): Promise<IResponse<PlayerBinaryRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}/metadata'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, PlayerBinaryRecordResponse, 'PlayerBinaryRecordResponse')
  }

  /**
   * Required permission: &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:CLOUDSAVE:RECORD [CREATE]&lt;/code&gt; Required scope: &lt;code&gt;social&lt;/code&gt; Request presigned URL to upload the binary record to s3. &lt;p&gt;Other detail info:&lt;/p&gt; Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
   */
  createPresigned_ByUserId_ByKey(
    userId: string,
    key: string,
    data: UploadBinaryRecordRequest
  ): Promise<IResponse<UploadBinaryRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}/presigned'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, UploadBinaryRecordResponse, 'UploadBinaryRecordResponse')
  }
}
