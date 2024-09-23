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
import { BinaryRecordRequest } from '../../generated-definitions/BinaryRecordRequest.js'
import { BulkGetPlayerBinaryRecordResponse } from '../../generated-definitions/BulkGetPlayerBinaryRecordResponse.js'
import { BulkGetPlayerRecordsRequest } from '../../generated-definitions/BulkGetPlayerRecordsRequest.js'
import { BulkUserIDsRequest } from '../../generated-definitions/BulkUserIDsRequest.js'
import { ListPlayerBinaryRecordsResponse } from '../../generated-definitions/ListPlayerBinaryRecordsResponse.js'
import { PlayerBinaryRecordMetadataPublicRequest } from '../../generated-definitions/PlayerBinaryRecordMetadataPublicRequest.js'
import { PlayerBinaryRecordResponse } from '../../generated-definitions/PlayerBinaryRecordResponse.js'
import { PublicPlayerBinaryRecordCreate } from '../../generated-definitions/PublicPlayerBinaryRecordCreate.js'
import { UploadBinaryRecordRequest } from '../../generated-definitions/UploadBinaryRecordRequest.js'
import { UploadBinaryRecordResponse } from '../../generated-definitions/UploadBinaryRecordResponse.js'

export class PublicPlayerBinaryRecord$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Retrieve list of my binary records by namespace.
   */
  getUsersMeBinaries(queryParams?: {
    limit?: number
    offset?: number
    query?: string | null
    tags?: string[]
  }): Promise<Response<ListPlayerBinaryRecordsResponse>> {
    const params = { limit: 25, ...queryParams } as AxiosRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/me/binaries'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListPlayerBinaryRecordsResponse,
      'ListPlayerBinaryRecordsResponse'
    )
  }
  /**
   * Retrieve player record key and payload in bulk under given namespace. Maximum bulk key limit per request 20
   */
  createUserMeBinaryBulk(data: BulkGetPlayerRecordsRequest): Promise<Response<BulkGetPlayerBinaryRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/me/binaries/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkGetPlayerBinaryRecordResponse,
      'BulkGetPlayerBinaryRecordResponse'
    )
  }
  /**
   * Create a player binary record. Other detail info: `key` should follow these rules: 1. support uppercase and lowercase letters, numbers, and separators **&#34;-&#34;**, **&#34;_&#34;**, **&#34;.&#34;** are allowed 2. begin and end with letters or numbers 3. spaces are not allowed 4. separators must not appears twice in a row Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
   */
  createBinary_ByUserId(userId: string, data: PublicPlayerBinaryRecordCreate): Promise<Response<UploadBinaryRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UploadBinaryRecordResponse,
      'UploadBinaryRecordResponse'
    )
  }
  /**
   * Delete a player binary record. Only player who own the record can delete it
   */
  deleteBinary_ByUserId_ByKey(userId: string, key: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get a player binary record by its key. **Private Record**: Only user who own the record could retrieve it.
   */
  getBinary_ByUserId_ByKey(userId: string, key: string): Promise<Response<PlayerBinaryRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PlayerBinaryRecordResponse,
      'PlayerBinaryRecordResponse'
    )
  }
  /**
   * Update a player binary record file by its key
   */
  updateBinary_ByUserId_ByKey(userId: string, key: string, data: BinaryRecordRequest): Promise<Response<PlayerBinaryRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PlayerBinaryRecordResponse,
      'PlayerBinaryRecordResponse'
    )
  }
  /**
   * Retrieve list of other player public binary records under given namespace.
   */
  getBinariesPublic_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; tags?: string[] }
  ): Promise<Response<ListPlayerBinaryRecordsResponse>> {
    const params = { limit: 25, ...queryParams } as AxiosRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/public'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListPlayerBinaryRecordsResponse,
      'ListPlayerBinaryRecordsResponse'
    )
  }
  /**
   * Bulk get other player&#39;s public binary record by userIds, max allowed 20 at a time. Only record with `isPublic=true` can be retrieved using this endpoint.
   */
  fetchPublicBulkUser_ByKey(key: string, data: BulkUserIDsRequest): Promise<Response<BulkGetPlayerBinaryRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/bulk/binaries/{key}/public'
      .replace('{namespace}', this.namespace)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkGetPlayerBinaryRecordResponse,
      'BulkGetPlayerBinaryRecordResponse'
    )
  }
  /**
   * Retrieve other player public binary record in bulk under given namespace. Maximum bulk key limit per request 20
   */
  fetchBinaryBulk_ByUserId(userId: string, data: BulkGetPlayerRecordsRequest): Promise<Response<BulkGetPlayerBinaryRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/public/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkGetPlayerBinaryRecordResponse,
      'BulkGetPlayerBinaryRecordResponse'
    )
  }
  /**
   * Get other player&#39;s public binary record. Only record with `isPublic=true` can be retrieved using this endpoint.
   */
  getPublic_ByUserId_ByKey(userId: string, key: string): Promise<Response<PlayerBinaryRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}/public'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PlayerBinaryRecordResponse,
      'PlayerBinaryRecordResponse'
    )
  }
  /**
   * Update a player binary record metadata by its key
   */
  updateMetadata_ByUserId_ByKey(
    userId: string,
    key: string,
    data: PlayerBinaryRecordMetadataPublicRequest
  ): Promise<Response<PlayerBinaryRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}/metadata'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PlayerBinaryRecordResponse,
      'PlayerBinaryRecordResponse'
    )
  }
  /**
   * Request presigned URL to upload the binary record to s3. Other detail info: Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
   */
  createPresigned_ByUserId_ByKey(
    userId: string,
    key: string,
    data: UploadBinaryRecordRequest
  ): Promise<Response<UploadBinaryRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/users/{userId}/binaries/{key}/presigned'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UploadBinaryRecordResponse,
      'UploadBinaryRecordResponse'
    )
  }
}
