/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { BinaryRecordRequest } from '../../generated-definitions/BinaryRecordRequest.js'
import { BulkGetGameBinaryRecordResponse } from '../../generated-definitions/BulkGetGameBinaryRecordResponse.js'
import { BulkGetGameRecordRequest } from '../../generated-definitions/BulkGetGameRecordRequest.js'
import { GameBinaryRecordResponse } from '../../generated-definitions/GameBinaryRecordResponse.js'
import { ListGameBinaryRecordsResponse } from '../../generated-definitions/ListGameBinaryRecordsResponse.js'
import { PublicGameBinaryRecordCreate } from '../../generated-definitions/PublicGameBinaryRecordCreate.js'
import { UploadBinaryRecordRequest } from '../../generated-definitions/UploadBinaryRecordRequest.js'
import { UploadBinaryRecordResponse } from '../../generated-definitions/UploadBinaryRecordResponse.js'

export class PublicGameBinaryRecord$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * Retrieve list of binary records by namespace.
   */
  getBinaries(queryParams?: {
    limit?: number
    offset?: number
    query?: string | null
    tags?: string[]
  }): Promise<IResponse<ListGameBinaryRecordsResponse>> {
    const params = { limit: 25, ...queryParams } as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/binaries'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListGameBinaryRecordsResponse,
      'ListGameBinaryRecordsResponse'
    )
  }

  /**
   * Create a game binary record. Other detail info: `key` should follow these rules: 1. support uppercase and lowercase letters, numbers, and separators **&#34;-&#34;**, **&#34;_&#34;**, **&#34;.&#34;** are allowed 2. begin and end with letters or numbers 3. spaces are not allowed 4. separators must not appears twice in a row Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
   */
  createBinary(data: PublicGameBinaryRecordCreate): Promise<IResponse<UploadBinaryRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/binaries'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UploadBinaryRecordResponse,
      'UploadBinaryRecordResponse'
    )
  }

  /**
   * Bulk get game binary records. Maximum key per request 20.
   */
  createBinaryBulk(data: BulkGetGameRecordRequest): Promise<IResponse<BulkGetGameBinaryRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/binaries/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BulkGetGameBinaryRecordResponse,
      'BulkGetGameBinaryRecordResponse'
    )
  }

  /**
   * Delete a game binary record.
   */
  deleteBinary_ByKey(key: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/binaries/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get a game binary record by its key.
   */
  getBinary_ByKey(key: string): Promise<IResponse<GameBinaryRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/binaries/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GameBinaryRecordResponse,
      'GameBinaryRecordResponse'
    )
  }

  /**
   * Update a game binary record file by its key
   */
  updateBinary_ByKey(key: string, data: BinaryRecordRequest): Promise<IResponse<GameBinaryRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/binaries/{key}'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GameBinaryRecordResponse,
      'GameBinaryRecordResponse'
    )
  }

  /**
   * Request presigned URL to upload the binary record to s3. Other detail info: Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
   */
  createPresigned_ByKey(key: string, data: UploadBinaryRecordRequest): Promise<IResponse<UploadBinaryRecordResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/cloudsave/v1/namespaces/{namespace}/binaries/{key}/presigned'.replace('{namespace}', this.namespace).replace('{key}', key)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UploadBinaryRecordResponse,
      'UploadBinaryRecordResponse'
    )
  }
}
