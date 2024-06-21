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
import { AdminGameBinaryRecordAdminApi } from '../AdminGameBinaryRecordAdminApi.js'

import { BinaryRecordRequest } from '../../generated-definitions/BinaryRecordRequest.js'
import { GameBinaryRecordAdminResponse } from '../../generated-definitions/GameBinaryRecordAdminResponse.js'
import { GameBinaryRecordCreate } from '../../generated-definitions/GameBinaryRecordCreate.js'
import { GameBinaryRecordMetadataRequest } from '../../generated-definitions/GameBinaryRecordMetadataRequest.js'
import { ListGameBinaryRecordsAdminResponse } from '../../generated-definitions/ListGameBinaryRecordsAdminResponse.js'
import { UploadBinaryRecordRequest } from '../../generated-definitions/UploadBinaryRecordRequest.js'
import { UploadBinaryRecordResponse } from '../../generated-definitions/UploadBinaryRecordResponse.js'

export enum Key_AdminGameBinaryRecordAdmin {
  Binaries = 'AdminGameBinaryRecordAdmin.Binaries',
  Binary = 'AdminGameBinaryRecordAdmin.Binary',
  Binary_ByKey = 'AdminGameBinaryRecordAdmin.Binary_ByKey',
  Metadata_ByKey = 'AdminGameBinaryRecordAdmin.Metadata_ByKey',
  Presigned_ByKey = 'AdminGameBinaryRecordAdmin.Presigned_ByKey'
}

export const useAdmBinaries = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number; query?: string | null; tags?: string[] } },
  options?: Omit<UseQueryOptions<ListGameBinaryRecordsAdminResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListGameBinaryRecordsAdminResponse) => void
): UseQueryResult<ListGameBinaryRecordsAdminResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmBinaries>[1]) => async () => {
    const data = await AdminGameBinaryRecordAdminApi(sdk, { namespace: input.namespace }).getBinaries(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ListGameBinaryRecordsAdminResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminGameBinaryRecordAdmin.Binaries, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateBinaryMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UploadBinaryRecordResponse, AxiosError<ApiError>, ApiArgs & { data: GameBinaryRecordCreate }>,
    'mutationKey'
  >,
  callback?: (data: UploadBinaryRecordResponse) => void
): UseMutationResult<UploadBinaryRecordResponse, AxiosError<ApiError>, ApiArgs & { data: GameBinaryRecordCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: GameBinaryRecordCreate }) => {
    const data = await AdminGameBinaryRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).createBinary(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminGameBinaryRecordAdmin.Binary],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteBinary_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { key: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { key: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { key: string }) => {
    const data = await AdminGameBinaryRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteBinary_ByKey(
      input.key
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminGameBinaryRecordAdmin.Binary_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmBinary_ByKey = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { key: string },
  options?: Omit<UseQueryOptions<GameBinaryRecordAdminResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GameBinaryRecordAdminResponse) => void
): UseQueryResult<GameBinaryRecordAdminResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmBinary_ByKey>[1]) => async () => {
    const data = await AdminGameBinaryRecordAdminApi(sdk, { namespace: input.namespace }).getBinary_ByKey(input.key)
    callback && callback(data)
    return data
  }

  return useQuery<GameBinaryRecordAdminResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminGameBinaryRecordAdmin.Binary_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateBinary_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<GameBinaryRecordAdminResponse, AxiosError<ApiError>, ApiArgs & { key: string; data: BinaryRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: GameBinaryRecordAdminResponse) => void
): UseMutationResult<GameBinaryRecordAdminResponse, AxiosError<ApiError>, ApiArgs & { key: string; data: BinaryRecordRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { key: string; data: BinaryRecordRequest }) => {
    const data = await AdminGameBinaryRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateBinary_ByKey(
      input.key,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminGameBinaryRecordAdmin.Binary_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateMetadata_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      GameBinaryRecordAdminResponse,
      AxiosError<ApiError>,
      ApiArgs & { key: string; data: GameBinaryRecordMetadataRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: GameBinaryRecordAdminResponse) => void
): UseMutationResult<
  GameBinaryRecordAdminResponse,
  AxiosError<ApiError>,
  ApiArgs & { key: string; data: GameBinaryRecordMetadataRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { key: string; data: GameBinaryRecordMetadataRequest }) => {
    const data = await AdminGameBinaryRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateMetadata_ByKey(
      input.key,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminGameBinaryRecordAdmin.Metadata_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmCreatePresigned_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UploadBinaryRecordResponse, AxiosError<ApiError>, ApiArgs & { key: string; data: UploadBinaryRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: UploadBinaryRecordResponse) => void
): UseMutationResult<UploadBinaryRecordResponse, AxiosError<ApiError>, ApiArgs & { key: string; data: UploadBinaryRecordRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { key: string; data: UploadBinaryRecordRequest }) => {
    const data = await AdminGameBinaryRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).createPresigned_ByKey(
      input.key,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminGameBinaryRecordAdmin.Presigned_ByKey],
    mutationFn,
    ...options
  })
}
