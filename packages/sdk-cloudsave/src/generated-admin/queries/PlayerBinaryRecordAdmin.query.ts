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
import { PlayerBinaryRecordAdminApi } from '../PlayerBinaryRecordAdminApi.js'

import { BinaryRecordRequest } from '../../generated-definitions/BinaryRecordRequest.js'
import { ListPlayerBinaryRecordsResponse } from '../../generated-definitions/ListPlayerBinaryRecordsResponse.js'
import { PlayerBinaryRecordCreate } from '../../generated-definitions/PlayerBinaryRecordCreate.js'
import { PlayerBinaryRecordMetadataRequest } from '../../generated-definitions/PlayerBinaryRecordMetadataRequest.js'
import { PlayerBinaryRecordResponse } from '../../generated-definitions/PlayerBinaryRecordResponse.js'
import { UploadBinaryRecordRequest } from '../../generated-definitions/UploadBinaryRecordRequest.js'
import { UploadBinaryRecordResponse } from '../../generated-definitions/UploadBinaryRecordResponse.js'

export enum Key_PlayerBinaryRecordAdmin {
  Binaries_ByUserId = 'Cloudsave.PlayerBinaryRecordAdmin.Binaries_ByUserId',
  Binary_ByUserId = 'Cloudsave.PlayerBinaryRecordAdmin.Binary_ByUserId',
  Binary_ByUserId_ByKey = 'Cloudsave.PlayerBinaryRecordAdmin.Binary_ByUserId_ByKey',
  Metadata_ByUserId_ByKey = 'Cloudsave.PlayerBinaryRecordAdmin.Metadata_ByUserId_ByKey',
  Presigned_ByUserId_ByKey = 'Cloudsave.PlayerBinaryRecordAdmin.Presigned_ByUserId_ByKey'
}

/**
 * Retrieve list of player binary records by namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerBinaryRecordAdmin.Binaries_ByUserId, input]
 * }
 * ```
 */
export const usePlayerBinaryRecordAdminApi_GetBinaries_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { limit?: number; offset?: number; query?: string | null; tags?: string[] } },
  options?: Omit<UseQueryOptions<ListPlayerBinaryRecordsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListPlayerBinaryRecordsResponse>) => void
): UseQueryResult<ListPlayerBinaryRecordsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayerBinaryRecordAdminApi_GetBinaries_ByUserId>[1]) => async () => {
    const response = await PlayerBinaryRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getBinaries_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ListPlayerBinaryRecordsResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerBinaryRecordAdmin.Binaries_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create a player binary record. Other detail info: `key` should follow these rules: 1. support uppercase and lowercase letters, numbers, and separators **&#34;-&#34;**, **&#34;_&#34;**, **&#34;.&#34;** are allowed 2. begin and end with letters or numbers 3. spaces are not allowed 4. separators must not appears twice in a row Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerBinaryRecordAdmin.Binary_ByUserId, input]
 * }
 * ```
 */
export const usePlayerBinaryRecordAdminApi_CreateBinary_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UploadBinaryRecordResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: PlayerBinaryRecordCreate }
    >,
    'mutationKey'
  >,
  callback?: (data: UploadBinaryRecordResponse) => void
): UseMutationResult<
  UploadBinaryRecordResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: PlayerBinaryRecordCreate }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: PlayerBinaryRecordCreate }) => {
    const response = await PlayerBinaryRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createBinary_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlayerBinaryRecordAdmin.Binary_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Delete a player binary record.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerBinaryRecordAdmin.Binary_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePlayerBinaryRecordAdminApi_DeleteBinary_ByUserId_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; key: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; key: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; key: string }) => {
    const response = await PlayerBinaryRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteBinary_ByUserId_ByKey(input.userId, input.key)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlayerBinaryRecordAdmin.Binary_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * Get a player binary record by its key.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerBinaryRecordAdmin.Binary_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePlayerBinaryRecordAdminApi_GetBinary_ByUserId_ByKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; key: string },
  options?: Omit<UseQueryOptions<PlayerBinaryRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PlayerBinaryRecordResponse>) => void
): UseQueryResult<PlayerBinaryRecordResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePlayerBinaryRecordAdminApi_GetBinary_ByUserId_ByKey>[1]) => async () => {
    const response = await PlayerBinaryRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getBinary_ByUserId_ByKey(input.userId, input.key)
    callback && callback(response)
    return response.data
  }

  return useQuery<PlayerBinaryRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerBinaryRecordAdmin.Binary_ByUserId_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update a player binary record file by its key
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerBinaryRecordAdmin.Binary_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePlayerBinaryRecordAdminApi_UpdateBinary_ByUserId_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PlayerBinaryRecordResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; key: string; data: BinaryRecordRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: PlayerBinaryRecordResponse) => void
): UseMutationResult<
  PlayerBinaryRecordResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; key: string; data: BinaryRecordRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; key: string; data: BinaryRecordRequest }) => {
    const response = await PlayerBinaryRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateBinary_ByUserId_ByKey(input.userId, input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlayerBinaryRecordAdmin.Binary_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * Update a player binary record metadata by its key
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerBinaryRecordAdmin.Metadata_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePlayerBinaryRecordAdminApi_UpdateMetadata_ByUserId_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PlayerBinaryRecordResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; key: string; data: PlayerBinaryRecordMetadataRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: PlayerBinaryRecordResponse) => void
): UseMutationResult<
  PlayerBinaryRecordResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; key: string; data: PlayerBinaryRecordMetadataRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; key: string; data: PlayerBinaryRecordMetadataRequest }) => {
    const response = await PlayerBinaryRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateMetadata_ByUserId_ByKey(input.userId, input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlayerBinaryRecordAdmin.Metadata_ByUserId_ByKey],
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
 *    queryKey: [Key_PlayerBinaryRecordAdmin.Presigned_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePlayerBinaryRecordAdminApi_CreatePresigned_ByUserId_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UploadBinaryRecordResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; key: string; data: UploadBinaryRecordRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: UploadBinaryRecordResponse) => void
): UseMutationResult<
  UploadBinaryRecordResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; key: string; data: UploadBinaryRecordRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; key: string; data: UploadBinaryRecordRequest }) => {
    const response = await PlayerBinaryRecordAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPresigned_ByUserId_ByKey(input.userId, input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PlayerBinaryRecordAdmin.Presigned_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
