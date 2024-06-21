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
import { AdminPlayerRecordAdminApi } from '../AdminPlayerRecordAdminApi.js'

import { BulkGetAdminPlayerRecordResponse } from '../../generated-definitions/BulkGetAdminPlayerRecordResponse.js'
import { BulkGetPlayerRecordResponse } from '../../generated-definitions/BulkGetPlayerRecordResponse.js'
import { BulkGetPlayerRecordSizeResponse } from '../../generated-definitions/BulkGetPlayerRecordSizeResponse.js'
import { BulkGetPlayerRecordsRequest } from '../../generated-definitions/BulkGetPlayerRecordsRequest.js'
import { BulkUpdatePlayerRecordByKeyResponseArray } from '../../generated-definitions/BulkUpdatePlayerRecordByKeyResponseArray.js'
import { BulkUpdatePlayerRecordResponseArray } from '../../generated-definitions/BulkUpdatePlayerRecordResponseArray.js'
import { BulkUpdatePlayerRecordsByKeyRequest } from '../../generated-definitions/BulkUpdatePlayerRecordsByKeyRequest.js'
import { BulkUpdatePlayerRecordsRequest } from '../../generated-definitions/BulkUpdatePlayerRecordsRequest.js'
import { BulkUserIDsRequest } from '../../generated-definitions/BulkUserIDsRequest.js'
import { BulkUserKeyRequest } from '../../generated-definitions/BulkUserKeyRequest.js'
import { ListPlayerRecordKeysResponse } from '../../generated-definitions/ListPlayerRecordKeysResponse.js'
import { PlayerRecordRequest } from '../../generated-definitions/PlayerRecordRequest.js'
import { PlayerRecordResponse } from '../../generated-definitions/PlayerRecordResponse.js'
import { PlayerRecordSizeResponse } from '../../generated-definitions/PlayerRecordSizeResponse.js'

export enum Key_AdminPlayerRecordAdmin {
  Records_ByUserId = 'AdminPlayerRecordAdmin.Records_ByUserId',
  UserBulkRecordSize = 'AdminPlayerRecordAdmin.UserBulkRecordSize',
  BulkUser_ByKey = 'AdminPlayerRecordAdmin.BulkUser_ByKey',
  RecordBulk_ByUserId = 'AdminPlayerRecordAdmin.RecordBulk_ByUserId',
  Record_ByUserId_ByKey = 'AdminPlayerRecordAdmin.Record_ByUserId_ByKey',
  Size_ByUserId_ByKey = 'AdminPlayerRecordAdmin.Size_ByUserId_ByKey',
  Public_ByUserId_ByKey = 'AdminPlayerRecordAdmin.Public_ByUserId_ByKey'
}

export const useAdmRecords_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { limit?: number; offset?: number; query?: string | null; tags?: string[] } },
  options?: Omit<UseQueryOptions<ListPlayerRecordKeysResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListPlayerRecordKeysResponse) => void
): UseQueryResult<ListPlayerRecordKeysResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRecords_ByUserId>[1]) => async () => {
    const data = await AdminPlayerRecordAdminApi(sdk, { namespace: input.namespace }).getRecords_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ListPlayerRecordKeysResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminPlayerRecordAdmin.Records_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateUserBulkRecordSizeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BulkGetPlayerRecordSizeResponse, AxiosError<ApiError>, ApiArgs & { data: BulkUserKeyRequest }>,
    'mutationKey'
  >,
  callback?: (data: BulkGetPlayerRecordSizeResponse) => void
): UseMutationResult<BulkGetPlayerRecordSizeResponse, AxiosError<ApiError>, ApiArgs & { data: BulkUserKeyRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: BulkUserKeyRequest }) => {
    const data = await AdminPlayerRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).createUserBulkRecordSize(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminPlayerRecordAdmin.UserBulkRecordSize],
    mutationFn,
    ...options
  })
}

export const useAdmCreateBulkUser_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BulkGetPlayerRecordResponse, AxiosError<ApiError>, ApiArgs & { key: string; data: BulkUserIDsRequest }>,
    'mutationKey'
  >,
  callback?: (data: BulkGetPlayerRecordResponse) => void
): UseMutationResult<BulkGetPlayerRecordResponse, AxiosError<ApiError>, ApiArgs & { key: string; data: BulkUserIDsRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { key: string; data: BulkUserIDsRequest }) => {
    const data = await AdminPlayerRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).createBulkUser_ByKey(
      input.key,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminPlayerRecordAdmin.BulkUser_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateBulkUser_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      BulkUpdatePlayerRecordByKeyResponseArray,
      AxiosError<ApiError>,
      ApiArgs & { key: string; data: BulkUpdatePlayerRecordsByKeyRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: BulkUpdatePlayerRecordByKeyResponseArray) => void
): UseMutationResult<
  BulkUpdatePlayerRecordByKeyResponseArray,
  AxiosError<ApiError>,
  ApiArgs & { key: string; data: BulkUpdatePlayerRecordsByKeyRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { key: string; data: BulkUpdatePlayerRecordsByKeyRequest }) => {
    const data = await AdminPlayerRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateBulkUser_ByKey(
      input.key,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminPlayerRecordAdmin.BulkUser_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmCreateRecordBulk_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      BulkGetAdminPlayerRecordResponse,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; data: BulkGetPlayerRecordsRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: BulkGetAdminPlayerRecordResponse) => void
): UseMutationResult<
  BulkGetAdminPlayerRecordResponse,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; data: BulkGetPlayerRecordsRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: BulkGetPlayerRecordsRequest }) => {
    const data = await AdminPlayerRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).createRecordBulk_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminPlayerRecordAdmin.RecordBulk_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateRecordBulk_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      BulkUpdatePlayerRecordResponseArray,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; data: BulkUpdatePlayerRecordsRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: BulkUpdatePlayerRecordResponseArray) => void
): UseMutationResult<
  BulkUpdatePlayerRecordResponseArray,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; data: BulkUpdatePlayerRecordsRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: BulkUpdatePlayerRecordsRequest }) => {
    const data = await AdminPlayerRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateRecordBulk_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminPlayerRecordAdmin.RecordBulk_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteRecord_ByUserId_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; key: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; key: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; key: string }) => {
    const data = await AdminPlayerRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteRecord_ByUserId_ByKey(
      input.userId,
      input.key
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminPlayerRecordAdmin.Record_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmRecord_ByUserId_ByKey = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; key: string },
  options?: Omit<UseQueryOptions<PlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PlayerRecordResponse) => void
): UseQueryResult<PlayerRecordResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRecord_ByUserId_ByKey>[1]) => async () => {
    const data = await AdminPlayerRecordAdminApi(sdk, { namespace: input.namespace }).getRecord_ByUserId_ByKey(input.userId, input.key)
    callback && callback(data)
    return data
  }

  return useQuery<PlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminPlayerRecordAdmin.Record_ByUserId_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateRecord_ByUserId_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<PlayerRecordResponse, AxiosError<ApiError>, ApiArgs & { userId: string; key: string; data: PlayerRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: PlayerRecordResponse) => void
): UseMutationResult<PlayerRecordResponse, AxiosError<ApiError>, ApiArgs & { userId: string; key: string; data: PlayerRecordRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; key: string; data: PlayerRecordRequest }) => {
    const data = await AdminPlayerRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).createRecord_ByUserId_ByKey(
      input.userId,
      input.key,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminPlayerRecordAdmin.Record_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateRecord_ByUserId_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<PlayerRecordResponse, AxiosError<ApiError>, ApiArgs & { userId: string; key: string; data: PlayerRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: PlayerRecordResponse) => void
): UseMutationResult<PlayerRecordResponse, AxiosError<ApiError>, ApiArgs & { userId: string; key: string; data: PlayerRecordRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; key: string; data: PlayerRecordRequest }) => {
    const data = await AdminPlayerRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateRecord_ByUserId_ByKey(
      input.userId,
      input.key,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminPlayerRecordAdmin.Record_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmSize_ByUserId_ByKey = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; key: string },
  options?: Omit<UseQueryOptions<PlayerRecordSizeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PlayerRecordSizeResponse) => void
): UseQueryResult<PlayerRecordSizeResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSize_ByUserId_ByKey>[1]) => async () => {
    const data = await AdminPlayerRecordAdminApi(sdk, { namespace: input.namespace }).getSize_ByUserId_ByKey(input.userId, input.key)
    callback && callback(data)
    return data
  }

  return useQuery<PlayerRecordSizeResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminPlayerRecordAdmin.Size_ByUserId_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeletePublic_ByUserId_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; key: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; key: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; key: string }) => {
    const data = await AdminPlayerRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).deletePublic_ByUserId_ByKey(
      input.userId,
      input.key
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminPlayerRecordAdmin.Public_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmPublic_ByUserId_ByKey = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; key: string },
  options?: Omit<UseQueryOptions<PlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PlayerRecordResponse) => void
): UseQueryResult<PlayerRecordResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPublic_ByUserId_ByKey>[1]) => async () => {
    const data = await AdminPlayerRecordAdminApi(sdk, { namespace: input.namespace }).getPublic_ByUserId_ByKey(input.userId, input.key)
    callback && callback(data)
    return data
  }

  return useQuery<PlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminPlayerRecordAdmin.Public_ByUserId_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreatePublic_ByUserId_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<PlayerRecordResponse, AxiosError<ApiError>, ApiArgs & { userId: string; key: string; data: PlayerRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: PlayerRecordResponse) => void
): UseMutationResult<PlayerRecordResponse, AxiosError<ApiError>, ApiArgs & { userId: string; key: string; data: PlayerRecordRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; key: string; data: PlayerRecordRequest }) => {
    const data = await AdminPlayerRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).createPublic_ByUserId_ByKey(
      input.userId,
      input.key,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminPlayerRecordAdmin.Public_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmUpdatePublic_ByUserId_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<PlayerRecordResponse, AxiosError<ApiError>, ApiArgs & { userId: string; key: string; data: PlayerRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: PlayerRecordResponse) => void
): UseMutationResult<PlayerRecordResponse, AxiosError<ApiError>, ApiArgs & { userId: string; key: string; data: PlayerRecordRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; key: string; data: PlayerRecordRequest }) => {
    const data = await AdminPlayerRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).updatePublic_ByUserId_ByKey(
      input.userId,
      input.key,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminPlayerRecordAdmin.Public_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
