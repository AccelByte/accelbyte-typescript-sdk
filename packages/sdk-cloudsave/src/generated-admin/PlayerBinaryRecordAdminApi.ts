/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
import { ListPlayerBinaryRecordsResponse } from '../generated-definitions/ListPlayerBinaryRecordsResponse.js'
import { PlayerBinaryRecordCreate } from '../generated-definitions/PlayerBinaryRecordCreate.js'
import { PlayerBinaryRecordMetadataRequest } from '../generated-definitions/PlayerBinaryRecordMetadataRequest.js'
import { PlayerBinaryRecordResponse } from '../generated-definitions/PlayerBinaryRecordResponse.js'
import { UploadBinaryRecordRequest } from '../generated-definitions/UploadBinaryRecordRequest.js'
import { UploadBinaryRecordResponse } from '../generated-definitions/UploadBinaryRecordResponse.js'
import { PlayerBinaryRecordAdmin$ } from './endpoints/PlayerBinaryRecordAdmin$.js'

export function PlayerBinaryRecordAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getBinaries_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; query?: string | null; tags?: string[] }
  ): Promise<AxiosResponse<ListPlayerBinaryRecordsResponse>> {
    const $ = new PlayerBinaryRecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBinaries_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createBinary_ByUserId(userId: string, data: PlayerBinaryRecordCreate): Promise<AxiosResponse<UploadBinaryRecordResponse>> {
    const $ = new PlayerBinaryRecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createBinary_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteBinary_ByUserId_ByKey(userId: string, key: string): Promise<AxiosResponse<unknown>> {
    const $ = new PlayerBinaryRecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteBinary_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getBinary_ByUserId_ByKey(userId: string, key: string): Promise<AxiosResponse<PlayerBinaryRecordResponse>> {
    const $ = new PlayerBinaryRecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBinary_ByUserId_ByKey(userId, key)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateBinary_ByUserId_ByKey(
    userId: string,
    key: string,
    data: BinaryRecordRequest
  ): Promise<AxiosResponse<PlayerBinaryRecordResponse>> {
    const $ = new PlayerBinaryRecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateBinary_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateMetadata_ByUserId_ByKey(
    userId: string,
    key: string,
    data: PlayerBinaryRecordMetadataRequest
  ): Promise<AxiosResponse<PlayerBinaryRecordResponse>> {
    const $ = new PlayerBinaryRecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateMetadata_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createPresigned_ByUserId_ByKey(
    userId: string,
    key: string,
    data: UploadBinaryRecordRequest
  ): Promise<AxiosResponse<UploadBinaryRecordResponse>> {
    const $ = new PlayerBinaryRecordAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPresigned_ByUserId_ByKey(userId, key, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Retrieve list of player binary records by namespace.
     */
    getBinaries_ByUserId,
    /**
     * Create a player binary record. Other detail info: `key` should follow these rules: 1. support uppercase and lowercase letters, numbers, and separators **&#34;-&#34;**, **&#34;_&#34;**, **&#34;.&#34;** are allowed 2. begin and end with letters or numbers 3. spaces are not allowed 4. separators must not appears twice in a row Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
     */
    createBinary_ByUserId,
    /**
     * Delete a player binary record.
     */
    deleteBinary_ByUserId_ByKey,
    /**
     * Get a player binary record by its key.
     */
    getBinary_ByUserId_ByKey,
    /**
     * Update a player binary record file by its key
     */
    updateBinary_ByUserId_ByKey,
    /**
     * Update a player binary record metadata by its key
     */
    updateMetadata_ByUserId_ByKey,
    /**
     * Request presigned URL to upload the binary record to s3. Other detail info: Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
     */
    createPresigned_ByUserId_ByKey
  }
}
