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
import { BinaryRecordRequest } from '../../generated-definitions/BinaryRecordRequest.js'
import { ListPlayerBinaryRecordsResponse } from '../../generated-definitions/ListPlayerBinaryRecordsResponse.js'
import { PlayerBinaryRecordCreate } from '../../generated-definitions/PlayerBinaryRecordCreate.js'
import { PlayerBinaryRecordMetadataRequest } from '../../generated-definitions/PlayerBinaryRecordMetadataRequest.js'
import { PlayerBinaryRecordResponse } from '../../generated-definitions/PlayerBinaryRecordResponse.js'
import { UploadBinaryRecordRequest } from '../../generated-definitions/UploadBinaryRecordRequest.js'
import { UploadBinaryRecordResponse } from '../../generated-definitions/UploadBinaryRecordResponse.js'

export class AdminPlayerBinaryRecordAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Retrieve list of player binary records by namespace.
   */
  getBinaries_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; query?: string | null }
  ): Promise<IResponseWithSync<ListPlayerBinaryRecordsResponse>> {
    const params = { limit: 25, ...queryParams } as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ListPlayerBinaryRecordsResponse, 'ListPlayerBinaryRecordsResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Create a player binary record. Other detail info: `key` should follow these rules: 1. support uppercase and lowercase letters, numbers, and separators **&#34;-&#34;**, **&#34;_&#34;**, **&#34;.&#34;** are allowed 2. begin and end with letters or numbers 3. spaces are not allowed 4. separators must not appears twice in a row Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
   */
  createBinary_ByUserId(userId: string, data: PlayerBinaryRecordCreate): Promise<IResponse<UploadBinaryRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UploadBinaryRecordResponse, 'UploadBinaryRecordResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Delete a player binary record.
   */
  deleteBinary_ByUserId_ByKey(userId: string, key: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get a player binary record by its key.
   */
  getBinary_ByUserId_ByKey(userId: string, key: string): Promise<IResponseWithSync<PlayerBinaryRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, PlayerBinaryRecordResponse, 'PlayerBinaryRecordResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Update a player binary record file by its key
   */
  updateBinary_ByUserId_ByKey(userId: string, key: string, data: BinaryRecordRequest): Promise<IResponse<PlayerBinaryRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PlayerBinaryRecordResponse, 'PlayerBinaryRecordResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Update a player binary record metadata by its key
   */
  updateMetadata_ByUserId_ByKey(
    userId: string,
    key: string,
    data: PlayerBinaryRecordMetadataRequest
  ): Promise<IResponse<PlayerBinaryRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries/{key}/metadata'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PlayerBinaryRecordResponse, 'PlayerBinaryRecordResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Request presigned URL to upload the binary record to s3. Other detail info: Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
   */
  createPresigned_ByUserId_ByKey(
    userId: string,
    key: string,
    data: UploadBinaryRecordRequest
  ): Promise<IResponse<UploadBinaryRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries/{key}/presigned'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UploadBinaryRecordResponse, 'UploadBinaryRecordResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
