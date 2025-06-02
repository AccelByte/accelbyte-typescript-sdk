/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { PublicGameBinaryRecordApi } from '../PublicGameBinaryRecordApi.js'

import { BinaryRecordRequest } from '../../generated-definitions/BinaryRecordRequest.js'
import { BulkGetGameBinaryRecordResponse } from '../../generated-definitions/BulkGetGameBinaryRecordResponse.js'
import { BulkGetGameRecordRequest } from '../../generated-definitions/BulkGetGameRecordRequest.js'
import { GameBinaryRecordResponse } from '../../generated-definitions/GameBinaryRecordResponse.js'
import { ListGameBinaryRecordsResponse } from '../../generated-definitions/ListGameBinaryRecordsResponse.js'
import { PublicGameBinaryRecordCreate } from '../../generated-definitions/PublicGameBinaryRecordCreate.js'
import { UploadBinaryRecordRequest } from '../../generated-definitions/UploadBinaryRecordRequest.js'
import { UploadBinaryRecordResponse } from '../../generated-definitions/UploadBinaryRecordResponse.js'

export enum Key_PublicGameBinaryRecord {
  Binaries = 'Cloudsave.PublicGameBinaryRecord.Binaries',
  Binary = 'Cloudsave.PublicGameBinaryRecord.Binary',
  BinaryBulk = 'Cloudsave.PublicGameBinaryRecord.BinaryBulk',
  Binary_ByKey = 'Cloudsave.PublicGameBinaryRecord.Binary_ByKey',
  Presigned_ByKey = 'Cloudsave.PublicGameBinaryRecord.Presigned_ByKey'
}

/**
 * Retrieve list of binary records by namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicGameBinaryRecord.Binaries, input]
 * }
 * ```
 */
export const usePublicGameBinaryRecordApi_GetBinaries = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number; query?: string | null; tags?: string[] } },
  options?: Omit<UseQueryOptions<ListGameBinaryRecordsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListGameBinaryRecordsResponse>) => void
): UseQueryResult<ListGameBinaryRecordsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicGameBinaryRecordApi_GetBinaries>[1]) => async () => {
    const response = await PublicGameBinaryRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getBinaries(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListGameBinaryRecordsResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicGameBinaryRecord.Binaries, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create a game binary record. Other detail info: `key` should follow these rules: 1. support uppercase and lowercase letters, numbers, and separators **&#34;-&#34;**, **&#34;_&#34;**, **&#34;.&#34;** are allowed 2. begin and end with letters or numbers 3. spaces are not allowed 4. separators must not appears twice in a row Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicGameBinaryRecord.Binary, input]
 * }
 * ```
 */
export const usePublicGameBinaryRecordApi_CreateBinaryMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UploadBinaryRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicGameBinaryRecordCreate }>,
    'mutationKey'
  >,
  callback?: (data: UploadBinaryRecordResponse) => void
): UseMutationResult<UploadBinaryRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicGameBinaryRecordCreate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PublicGameBinaryRecordCreate }) => {
    const response = await PublicGameBinaryRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createBinary(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicGameBinaryRecord.Binary],
    mutationFn,
    ...options
  })
}

/**
 * Bulk get game binary records. Maximum key per request 20.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicGameBinaryRecord.BinaryBulk, input]
 * }
 * ```
 */
export const usePublicGameBinaryRecordApi_CreateBinaryBulkMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BulkGetGameBinaryRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkGetGameRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: BulkGetGameBinaryRecordResponse) => void
): UseMutationResult<BulkGetGameBinaryRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkGetGameRecordRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkGetGameRecordRequest }) => {
    const response = await PublicGameBinaryRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createBinaryBulk(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicGameBinaryRecord.BinaryBulk],
    mutationFn,
    ...options
  })
}

/**
 * Delete a game binary record.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicGameBinaryRecord.Binary_ByKey, input]
 * }
 * ```
 */
export const usePublicGameBinaryRecordApi_DeleteBinary_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { key: string }) => {
    const response = await PublicGameBinaryRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteBinary_ByKey(input.key)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicGameBinaryRecord.Binary_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * Get a game binary record by its key.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicGameBinaryRecord.Binary_ByKey, input]
 * }
 * ```
 */
export const usePublicGameBinaryRecordApi_GetBinary_ByKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { key: string },
  options?: Omit<UseQueryOptions<GameBinaryRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GameBinaryRecordResponse>) => void
): UseQueryResult<GameBinaryRecordResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicGameBinaryRecordApi_GetBinary_ByKey>[1]) => async () => {
    const response = await PublicGameBinaryRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getBinary_ByKey(
      input.key
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GameBinaryRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicGameBinaryRecord.Binary_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update a game binary record file by its key
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicGameBinaryRecord.Binary_ByKey, input]
 * }
 * ```
 */
export const usePublicGameBinaryRecordApi_UpdateBinary_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<GameBinaryRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { key: string; data: BinaryRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: GameBinaryRecordResponse) => void
): UseMutationResult<GameBinaryRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { key: string; data: BinaryRecordRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { key: string; data: BinaryRecordRequest }) => {
    const response = await PublicGameBinaryRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateBinary_ByKey(input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicGameBinaryRecord.Binary_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * Request presigned URL to upload the binary record to s3. Other detail info: Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicGameBinaryRecord.Presigned_ByKey, input]
 * }
 * ```
 */
export const usePublicGameBinaryRecordApi_CreatePresigned_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UploadBinaryRecordResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { key: string; data: UploadBinaryRecordRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: UploadBinaryRecordResponse) => void
): UseMutationResult<
  UploadBinaryRecordResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { key: string; data: UploadBinaryRecordRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { key: string; data: UploadBinaryRecordRequest }) => {
    const response = await PublicGameBinaryRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPresigned_ByKey(input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicGameBinaryRecord.Presigned_ByKey],
    mutationFn,
    ...options
  })
}
