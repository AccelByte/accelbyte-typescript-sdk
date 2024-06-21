/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiError } from '@accelbyte/sdk'
import { AxiosError } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { AdminPlayerBinaryRecordAdminApi } from '../AdminPlayerBinaryRecordAdminApi.js'

import { BinaryRecordRequest } from '../../generated-definitions/BinaryRecordRequest.js'
import { ListPlayerBinaryRecordsResponse } from '../../generated-definitions/ListPlayerBinaryRecordsResponse.js'
import { PlayerBinaryRecordCreate } from '../../generated-definitions/PlayerBinaryRecordCreate.js'
import { PlayerBinaryRecordMetadataRequest } from '../../generated-definitions/PlayerBinaryRecordMetadataRequest.js'
import { PlayerBinaryRecordResponse } from '../../generated-definitions/PlayerBinaryRecordResponse.js'
import { UploadBinaryRecordRequest } from '../../generated-definitions/UploadBinaryRecordRequest.js'
import { UploadBinaryRecordResponse } from '../../generated-definitions/UploadBinaryRecordResponse.js'

export enum Key_AdminPlayerBinaryRecordAdmin {
  Binaries_ByUserId = 'AdminPlayerBinaryRecordAdmin.Binaries_ByUserId',
  Binary_ByUserId = 'AdminPlayerBinaryRecordAdmin.Binary_ByUserId',
  Binary_ByUserId_ByKey = 'AdminPlayerBinaryRecordAdmin.Binary_ByUserId_ByKey',
  Metadata_ByUserId_ByKey = 'AdminPlayerBinaryRecordAdmin.Metadata_ByUserId_ByKey',
  Presigned_ByUserId_ByKey = 'AdminPlayerBinaryRecordAdmin.Presigned_ByUserId_ByKey'
}

export const useAdmBinaries_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { limit?: number; offset?: number; query?: string | null; tags?: string[] } },
  options?: Omit<UseQueryOptions<ListPlayerBinaryRecordsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListPlayerBinaryRecordsResponse) => void
): UseQueryResult<ListPlayerBinaryRecordsResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmBinaries_ByUserId>[1]) => async () => {
    const data = await AdminPlayerBinaryRecordAdminApi(sdk, { namespace: input.namespace }).getBinaries_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<ListPlayerBinaryRecordsResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminPlayerBinaryRecordAdmin.Binaries_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateBinary_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UploadBinaryRecordResponse, AxiosError<ApiError>, ApiArgs & { userId: string; data: PlayerBinaryRecordCreate }>,
    'mutationKey'
  >,
  callback?: (data: UploadBinaryRecordResponse) => void
): UseMutationResult<UploadBinaryRecordResponse, AxiosError<ApiError>, ApiArgs & { userId: string; data: PlayerBinaryRecordCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: PlayerBinaryRecordCreate }) => {
    const data = await AdminPlayerBinaryRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).createBinary_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminPlayerBinaryRecordAdmin.Binary_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteBinary_ByUserId_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; key: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; key: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; key: string }) => {
    const data = await AdminPlayerBinaryRecordAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteBinary_ByUserId_ByKey(input.userId, input.key)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminPlayerBinaryRecordAdmin.Binary_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmBinary_ByUserId_ByKey = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; key: string },
  options?: Omit<UseQueryOptions<PlayerBinaryRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PlayerBinaryRecordResponse) => void
): UseQueryResult<PlayerBinaryRecordResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmBinary_ByUserId_ByKey>[1]) => async () => {
    const data = await AdminPlayerBinaryRecordAdminApi(sdk, { namespace: input.namespace }).getBinary_ByUserId_ByKey(
      input.userId,
      input.key
    )
    callback && callback(data)
    return data
  }

  return useQuery<PlayerBinaryRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminPlayerBinaryRecordAdmin.Binary_ByUserId_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateBinary_ByUserId_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      PlayerBinaryRecordResponse,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; key: string; data: BinaryRecordRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: PlayerBinaryRecordResponse) => void
): UseMutationResult<
  PlayerBinaryRecordResponse,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; key: string; data: BinaryRecordRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; key: string; data: BinaryRecordRequest }) => {
    const data = await AdminPlayerBinaryRecordAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateBinary_ByUserId_ByKey(input.userId, input.key, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminPlayerBinaryRecordAdmin.Binary_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateMetadata_ByUserId_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      PlayerBinaryRecordResponse,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; key: string; data: PlayerBinaryRecordMetadataRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: PlayerBinaryRecordResponse) => void
): UseMutationResult<
  PlayerBinaryRecordResponse,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; key: string; data: PlayerBinaryRecordMetadataRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; key: string; data: PlayerBinaryRecordMetadataRequest }) => {
    const data = await AdminPlayerBinaryRecordAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateMetadata_ByUserId_ByKey(input.userId, input.key, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminPlayerBinaryRecordAdmin.Metadata_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmCreatePresigned_ByUserId_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      UploadBinaryRecordResponse,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; key: string; data: UploadBinaryRecordRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: UploadBinaryRecordResponse) => void
): UseMutationResult<
  UploadBinaryRecordResponse,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; key: string; data: UploadBinaryRecordRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; key: string; data: UploadBinaryRecordRequest }) => {
    const data = await AdminPlayerBinaryRecordAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createPresigned_ByUserId_ByKey(input.userId, input.key, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminPlayerBinaryRecordAdmin.Presigned_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
