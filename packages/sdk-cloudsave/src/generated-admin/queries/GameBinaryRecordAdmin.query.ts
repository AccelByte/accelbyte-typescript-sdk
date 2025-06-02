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
import { GameBinaryRecordAdminApi } from '../GameBinaryRecordAdminApi.js'

import { BinaryRecordRequest } from '../../generated-definitions/BinaryRecordRequest.js'
import { GameBinaryRecordAdminResponse } from '../../generated-definitions/GameBinaryRecordAdminResponse.js'
import { GameBinaryRecordCreate } from '../../generated-definitions/GameBinaryRecordCreate.js'
import { GameBinaryRecordMetadataRequest } from '../../generated-definitions/GameBinaryRecordMetadataRequest.js'
import { ListGameBinaryRecordsAdminResponse } from '../../generated-definitions/ListGameBinaryRecordsAdminResponse.js'
import { UploadBinaryRecordRequest } from '../../generated-definitions/UploadBinaryRecordRequest.js'
import { UploadBinaryRecordResponse } from '../../generated-definitions/UploadBinaryRecordResponse.js'

export enum Key_GameBinaryRecordAdmin {
  Binaries = 'Cloudsave.GameBinaryRecordAdmin.Binaries',
  Binary = 'Cloudsave.GameBinaryRecordAdmin.Binary',
  Binary_ByKey = 'Cloudsave.GameBinaryRecordAdmin.Binary_ByKey',
  Metadata_ByKey = 'Cloudsave.GameBinaryRecordAdmin.Metadata_ByKey',
  Presigned_ByKey = 'Cloudsave.GameBinaryRecordAdmin.Presigned_ByKey'
}

/**
 * Retrieve list of binary records by namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameBinaryRecordAdmin.Binaries, input]
 * }
 * ```
 */
export const useGameBinaryRecordAdminApi_GetBinaries = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number; query?: string | null; tags?: string[] } },
  options?: Omit<UseQueryOptions<ListGameBinaryRecordsAdminResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListGameBinaryRecordsAdminResponse>) => void
): UseQueryResult<ListGameBinaryRecordsAdminResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGameBinaryRecordAdminApi_GetBinaries>[1]) => async () => {
    const response = await GameBinaryRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getBinaries(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListGameBinaryRecordsAdminResponse, AxiosError<ApiError>>({
    queryKey: [Key_GameBinaryRecordAdmin.Binaries, input],
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
 *    queryKey: [Key_GameBinaryRecordAdmin.Binary, input]
 * }
 * ```
 */
export const useGameBinaryRecordAdminApi_CreateBinaryMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UploadBinaryRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: GameBinaryRecordCreate }>,
    'mutationKey'
  >,
  callback?: (data: UploadBinaryRecordResponse) => void
): UseMutationResult<UploadBinaryRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: GameBinaryRecordCreate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: GameBinaryRecordCreate }) => {
    const response = await GameBinaryRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createBinary(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GameBinaryRecordAdmin.Binary],
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
 *    queryKey: [Key_GameBinaryRecordAdmin.Binary_ByKey, input]
 * }
 * ```
 */
export const useGameBinaryRecordAdminApi_DeleteBinary_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { key: string }) => {
    const response = await GameBinaryRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteBinary_ByKey(input.key)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GameBinaryRecordAdmin.Binary_ByKey],
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
 *    queryKey: [Key_GameBinaryRecordAdmin.Binary_ByKey, input]
 * }
 * ```
 */
export const useGameBinaryRecordAdminApi_GetBinary_ByKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { key: string },
  options?: Omit<UseQueryOptions<GameBinaryRecordAdminResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GameBinaryRecordAdminResponse>) => void
): UseQueryResult<GameBinaryRecordAdminResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGameBinaryRecordAdminApi_GetBinary_ByKey>[1]) => async () => {
    const response = await GameBinaryRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getBinary_ByKey(
      input.key
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GameBinaryRecordAdminResponse, AxiosError<ApiError>>({
    queryKey: [Key_GameBinaryRecordAdmin.Binary_ByKey, input],
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
 *    queryKey: [Key_GameBinaryRecordAdmin.Binary_ByKey, input]
 * }
 * ```
 */
export const useGameBinaryRecordAdminApi_UpdateBinary_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<GameBinaryRecordAdminResponse, AxiosError<ApiError>, SdkSetConfigParam & { key: string; data: BinaryRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: GameBinaryRecordAdminResponse) => void
): UseMutationResult<
  GameBinaryRecordAdminResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { key: string; data: BinaryRecordRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { key: string; data: BinaryRecordRequest }) => {
    const response = await GameBinaryRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateBinary_ByKey(input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GameBinaryRecordAdmin.Binary_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * Update a game binary record metadata by its key
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameBinaryRecordAdmin.Metadata_ByKey, input]
 * }
 * ```
 */
export const useGameBinaryRecordAdminApi_UpdateMetadata_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      GameBinaryRecordAdminResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { key: string; data: GameBinaryRecordMetadataRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: GameBinaryRecordAdminResponse) => void
): UseMutationResult<
  GameBinaryRecordAdminResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { key: string; data: GameBinaryRecordMetadataRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { key: string; data: GameBinaryRecordMetadataRequest }) => {
    const response = await GameBinaryRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateMetadata_ByKey(input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GameBinaryRecordAdmin.Metadata_ByKey],
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
 *    queryKey: [Key_GameBinaryRecordAdmin.Presigned_ByKey, input]
 * }
 * ```
 */
export const useGameBinaryRecordAdminApi_CreatePresigned_ByKeyMutation = (
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
    const response = await GameBinaryRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPresigned_ByKey(input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GameBinaryRecordAdmin.Presigned_ByKey],
    mutationFn,
    ...options
  })
}
