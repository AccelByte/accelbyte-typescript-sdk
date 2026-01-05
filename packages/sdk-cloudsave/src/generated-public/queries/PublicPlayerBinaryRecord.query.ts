/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { PublicPlayerBinaryRecordApi } from '../PublicPlayerBinaryRecordApi.js'

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

export enum Key_PublicPlayerBinaryRecord {
  UsersMeBinaries = 'Cloudsave.PublicPlayerBinaryRecord.UsersMeBinaries',
  UserMeBinaryBulk = 'Cloudsave.PublicPlayerBinaryRecord.UserMeBinaryBulk',
  Binary_ByUserId = 'Cloudsave.PublicPlayerBinaryRecord.Binary_ByUserId',
  Binary_ByUserId_ByKey = 'Cloudsave.PublicPlayerBinaryRecord.Binary_ByUserId_ByKey',
  BinariesPublic_ByUserId = 'Cloudsave.PublicPlayerBinaryRecord.BinariesPublic_ByUserId',
  PublicBulkUser_ByKey = 'Cloudsave.PublicPlayerBinaryRecord.PublicBulkUser_ByKey',
  BinaryBulk_ByUserId = 'Cloudsave.PublicPlayerBinaryRecord.BinaryBulk_ByUserId',
  Public_ByUserId_ByKey = 'Cloudsave.PublicPlayerBinaryRecord.Public_ByUserId_ByKey',
  Metadata_ByUserId_ByKey = 'Cloudsave.PublicPlayerBinaryRecord.Metadata_ByUserId_ByKey',
  Presigned_ByUserId_ByKey = 'Cloudsave.PublicPlayerBinaryRecord.Presigned_ByUserId_ByKey'
}

/**
 * Retrieve list of my binary records by namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicPlayerBinaryRecord.UsersMeBinaries, input]
 * }
 * ```
 */
export const usePublicPlayerBinaryRecordApi_GetUsersMeBinaries = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number; query?: string | null; tags?: string[] } },
  options?: Omit<UseQueryOptions<ListPlayerBinaryRecordsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListPlayerBinaryRecordsResponse>) => void
): UseQueryResult<ListPlayerBinaryRecordsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicPlayerBinaryRecordApi_GetUsersMeBinaries>[1]) => async () => {
    const response = await PublicPlayerBinaryRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getUsersMeBinaries(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ListPlayerBinaryRecordsResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerBinaryRecord.UsersMeBinaries, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Retrieve player record key and payload in bulk under given namespace. Maximum bulk key limit per request 20
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicPlayerBinaryRecord.UserMeBinaryBulk, input]
 * }
 * ```
 */
export const usePublicPlayerBinaryRecordApi_CreateUserMeBinaryBulkMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BulkGetPlayerBinaryRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkGetPlayerRecordsRequest }>,
    'mutationKey'
  >,
  callback?: (data: BulkGetPlayerBinaryRecordResponse) => void
): UseMutationResult<
  BulkGetPlayerBinaryRecordResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: BulkGetPlayerRecordsRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkGetPlayerRecordsRequest }) => {
    const response = await PublicPlayerBinaryRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createUserMeBinaryBulk(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicPlayerBinaryRecord.UserMeBinaryBulk],
    mutationFn,
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
 *    queryKey: [Key_PublicPlayerBinaryRecord.Binary_ByUserId, input]
 * }
 * ```
 */
export const usePublicPlayerBinaryRecordApi_CreateBinary_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UploadBinaryRecordResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: PublicPlayerBinaryRecordCreate }
    >,
    'mutationKey'
  >,
  callback?: (data: UploadBinaryRecordResponse) => void
): UseMutationResult<
  UploadBinaryRecordResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: PublicPlayerBinaryRecordCreate }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: PublicPlayerBinaryRecordCreate }) => {
    const response = await PublicPlayerBinaryRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createBinary_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicPlayerBinaryRecord.Binary_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Delete a player binary record. Only player who own the record can delete it
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicPlayerBinaryRecord.Binary_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePublicPlayerBinaryRecordApi_DeleteBinary_ByUserId_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; key: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; key: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; key: string }) => {
    const response = await PublicPlayerBinaryRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteBinary_ByUserId_ByKey(input.userId, input.key)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicPlayerBinaryRecord.Binary_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * Get a player binary record by its key. **Private Record**: Only user who own the record could retrieve it.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicPlayerBinaryRecord.Binary_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePublicPlayerBinaryRecordApi_GetBinary_ByUserId_ByKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; key: string },
  options?: Omit<UseQueryOptions<PlayerBinaryRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PlayerBinaryRecordResponse>) => void
): UseQueryResult<PlayerBinaryRecordResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicPlayerBinaryRecordApi_GetBinary_ByUserId_ByKey>[1]) => async () => {
    const response = await PublicPlayerBinaryRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getBinary_ByUserId_ByKey(input.userId, input.key)
    callback && callback(response)
    return response.data
  }

  return useQuery<PlayerBinaryRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerBinaryRecord.Binary_ByUserId_ByKey, input],
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
 *    queryKey: [Key_PublicPlayerBinaryRecord.Binary_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePublicPlayerBinaryRecordApi_UpdateBinary_ByUserId_ByKeyMutation = (
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
    const response = await PublicPlayerBinaryRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateBinary_ByUserId_ByKey(input.userId, input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicPlayerBinaryRecord.Binary_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

/**
 * Retrieve list of other player public binary records under given namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicPlayerBinaryRecord.BinariesPublic_ByUserId, input]
 * }
 * ```
 */
export const usePublicPlayerBinaryRecordApi_GetBinariesPublic_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { limit?: number; offset?: number; tags?: string[] } },
  options?: Omit<UseQueryOptions<ListPlayerBinaryRecordsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListPlayerBinaryRecordsResponse>) => void
): UseQueryResult<ListPlayerBinaryRecordsResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePublicPlayerBinaryRecordApi_GetBinariesPublic_ByUserId>[1]) => async () => {
      const response = await PublicPlayerBinaryRecordApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getBinariesPublic_ByUserId(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<ListPlayerBinaryRecordsResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerBinaryRecord.BinariesPublic_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Bulk get other player&#39;s public binary record by userIds, max allowed 20 at a time. Only record with `isPublic=true` can be retrieved using this endpoint.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicPlayerBinaryRecord.PublicBulkUser_ByKey, input]
 * }
 * ```
 */
export const usePublicPlayerBinaryRecordApi_FetchPublicBulkUser_ByKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { key: string; data: BulkUserIDsRequest },
  options?: Omit<UseQueryOptions<BulkGetPlayerBinaryRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BulkGetPlayerBinaryRecordResponse>) => void
): UseQueryResult<BulkGetPlayerBinaryRecordResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePublicPlayerBinaryRecordApi_FetchPublicBulkUser_ByKey>[1]) => async () => {
      const response = await PublicPlayerBinaryRecordApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).fetchPublicBulkUser_ByKey(input.key, input.data)
      callback && callback(response)
      return response.data
    }

  return useQuery<BulkGetPlayerBinaryRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerBinaryRecord.PublicBulkUser_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Retrieve other player public binary record in bulk under given namespace. Maximum bulk key limit per request 20
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicPlayerBinaryRecord.BinaryBulk_ByUserId, input]
 * }
 * ```
 */
export const usePublicPlayerBinaryRecordApi_FetchBinaryBulk_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; data: BulkGetPlayerRecordsRequest },
  options?: Omit<UseQueryOptions<BulkGetPlayerBinaryRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BulkGetPlayerBinaryRecordResponse>) => void
): UseQueryResult<BulkGetPlayerBinaryRecordResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicPlayerBinaryRecordApi_FetchBinaryBulk_ByUserId>[1]) => async () => {
    const response = await PublicPlayerBinaryRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).fetchBinaryBulk_ByUserId(input.userId, input.data)
    callback && callback(response)
    return response.data
  }

  return useQuery<BulkGetPlayerBinaryRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerBinaryRecord.BinaryBulk_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get other player&#39;s public binary record. Only record with `isPublic=true` can be retrieved using this endpoint.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicPlayerBinaryRecord.Public_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePublicPlayerBinaryRecordApi_GetPublic_ByUserId_ByKey = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; key: string },
  options?: Omit<UseQueryOptions<PlayerBinaryRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PlayerBinaryRecordResponse>) => void
): UseQueryResult<PlayerBinaryRecordResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicPlayerBinaryRecordApi_GetPublic_ByUserId_ByKey>[1]) => async () => {
    const response = await PublicPlayerBinaryRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getPublic_ByUserId_ByKey(input.userId, input.key)
    callback && callback(response)
    return response.data
  }

  return useQuery<PlayerBinaryRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerBinaryRecord.Public_ByUserId_ByKey, input],
    queryFn: queryFn(sdk, input),
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
 *    queryKey: [Key_PublicPlayerBinaryRecord.Metadata_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePublicPlayerBinaryRecordApi_UpdateMetadata_ByUserId_ByKeyMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PlayerBinaryRecordResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; key: string; data: PlayerBinaryRecordMetadataPublicRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: PlayerBinaryRecordResponse) => void
): UseMutationResult<
  PlayerBinaryRecordResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; key: string; data: PlayerBinaryRecordMetadataPublicRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; key: string; data: PlayerBinaryRecordMetadataPublicRequest }) => {
    const response = await PublicPlayerBinaryRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateMetadata_ByUserId_ByKey(input.userId, input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicPlayerBinaryRecord.Metadata_ByUserId_ByKey],
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
 *    queryKey: [Key_PublicPlayerBinaryRecord.Presigned_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePublicPlayerBinaryRecordApi_CreatePresigned_ByUserId_ByKeyMutation = (
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
    const response = await PublicPlayerBinaryRecordApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPresigned_ByUserId_ByKey(input.userId, input.key, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicPlayerBinaryRecord.Presigned_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
