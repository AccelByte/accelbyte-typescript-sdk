/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { BinaryRecordRequest } from '../generated-definitions/BinaryRecordRequest.js'
import { GameBinaryRecordAdminResponse } from '../generated-definitions/GameBinaryRecordAdminResponse.js'
import { GameBinaryRecordCreate } from '../generated-definitions/GameBinaryRecordCreate.js'
import { GameBinaryRecordMetadataRequest } from '../generated-definitions/GameBinaryRecordMetadataRequest.js'
import { ListGameBinaryRecordsAdminResponse } from '../generated-definitions/ListGameBinaryRecordsAdminResponse.js'
import { UploadBinaryRecordRequest } from '../generated-definitions/UploadBinaryRecordRequest.js'
import { UploadBinaryRecordResponse } from '../generated-definitions/UploadBinaryRecordResponse.js'
import { GameBinaryRecordAdmin$ } from './endpoints/GameBinaryRecordAdmin$.js'

export function GameBinaryRecordAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function getBinaries(queryParams?: {
    limit?: number
    offset?: number
    query?: string | null
    tags?: string[]
  }): Promise<AxiosResponse<ListGameBinaryRecordsAdminResponse>> {
    const $ = new GameBinaryRecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBinaries(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createBinary(data: GameBinaryRecordCreate): Promise<AxiosResponse<UploadBinaryRecordResponse>> {
    const $ = new GameBinaryRecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createBinary(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteBinary_ByKey(key: string): Promise<AxiosResponse<unknown>> {
    const $ = new GameBinaryRecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteBinary_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getBinary_ByKey(key: string): Promise<AxiosResponse<GameBinaryRecordAdminResponse>> {
    const $ = new GameBinaryRecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBinary_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateBinary_ByKey(key: string, data: BinaryRecordRequest): Promise<AxiosResponse<GameBinaryRecordAdminResponse>> {
    const $ = new GameBinaryRecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateBinary_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateMetadata_ByKey(
    key: string,
    data: GameBinaryRecordMetadataRequest
  ): Promise<AxiosResponse<GameBinaryRecordAdminResponse>> {
    const $ = new GameBinaryRecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateMetadata_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createPresigned_ByKey(key: string, data: UploadBinaryRecordRequest): Promise<AxiosResponse<UploadBinaryRecordResponse>> {
    const $ = new GameBinaryRecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPresigned_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Retrieve list of binary records by namespace.
     */
    getBinaries,
    /**
     * Create a game binary record. Other detail info: `key` should follow these rules: 1. support uppercase and lowercase letters, numbers, and separators **&#34;-&#34;**, **&#34;_&#34;**, **&#34;.&#34;** are allowed 2. begin and end with letters or numbers 3. spaces are not allowed 4. separators must not appears twice in a row Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
     */
    createBinary,
    /**
     * Delete a game binary record.
     */
    deleteBinary_ByKey,
    /**
     * Get a game binary record by its key.
     */
    getBinary_ByKey,
    /**
     * Update a game binary record file by its key
     */
    updateBinary_ByKey,
    /**
     * Update a game binary record metadata by its key
     */
    updateMetadata_ByKey,
    /**
     * Request presigned URL to upload the binary record to s3. Other detail info: Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
     */
    createPresigned_ByKey
  }
}
