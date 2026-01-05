/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { ListPlayerBinaryRecordsResponse } from '../../generated-definitions/ListPlayerBinaryRecordsResponse.js'
import { PlayerBinaryRecordCreate } from '../../generated-definitions/PlayerBinaryRecordCreate.js'
import { PlayerBinaryRecordMetadataRequest } from '../../generated-definitions/PlayerBinaryRecordMetadataRequest.js'
import { PlayerBinaryRecordResponse } from '../../generated-definitions/PlayerBinaryRecordResponse.js'
import { UploadBinaryRecordRequest } from '../../generated-definitions/UploadBinaryRecordRequest.js'
import { UploadBinaryRecordResponse } from '../../generated-definitions/UploadBinaryRecordResponse.js'

export class PlayerBinaryRecordAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Retrieve list of player binary records by namespace.
   */
  getBinaries_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; query?: string | null; tags?: string[] }
  ): Promise<Response<ListPlayerBinaryRecordsResponse>> {
    const params = { limit: 25, ...queryParams } as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries'
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
   * Create a player binary record. Other detail info: `key` should follow these rules: 1. support uppercase and lowercase letters, numbers, and separators **&#34;-&#34;**, **&#34;_&#34;**, **&#34;.&#34;** are allowed 2. begin and end with letters or numbers 3. spaces are not allowed 4. separators must not appears twice in a row Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
   */
  createBinary_ByUserId(userId: string, data: PlayerBinaryRecordCreate): Promise<Response<UploadBinaryRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries'
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
   * Delete a player binary record.
   */
  deleteBinary_ByUserId_ByKey(userId: string, key: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries/{key}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{key}', key)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get a player binary record by its key.
   */
  getBinary_ByUserId_ByKey(userId: string, key: string): Promise<Response<PlayerBinaryRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries/{key}'
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
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries/{key}'
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
   * Update a player binary record metadata by its key
   */
  updateMetadata_ByUserId_ByKey(
    userId: string,
    key: string,
    data: PlayerBinaryRecordMetadataRequest
  ): Promise<Response<PlayerBinaryRecordResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries/{key}/metadata'
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
    const url = '/cloudsave/v1/admin/namespaces/{namespace}/users/{userId}/binaries/{key}/presigned'
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
