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
import { AdminRecordAdminApi } from '../AdminRecordAdminApi.js'

import { AdminGameRecordRequest } from '../../generated-definitions/AdminGameRecordRequest.js'
import { AdminGameRecordResponse } from '../../generated-definitions/AdminGameRecordResponse.js'
import { AdminPlayerRecordRequest } from '../../generated-definitions/AdminPlayerRecordRequest.js'
import { AdminPlayerRecordResponse } from '../../generated-definitions/AdminPlayerRecordResponse.js'
import { BulkGetAdminGameRecordRequest } from '../../generated-definitions/BulkGetAdminGameRecordRequest.js'
import { BulkGetAdminGameRecordResponse } from '../../generated-definitions/BulkGetAdminGameRecordResponse.js'
import { BulkGetAdminPlayerRecordRequest } from '../../generated-definitions/BulkGetAdminPlayerRecordRequest.js'
import { BulkGetAdminPlayerRecordResponse } from '../../generated-definitions/BulkGetAdminPlayerRecordResponse.js'
import { BulkUserIDsRequest } from '../../generated-definitions/BulkUserIDsRequest.js'
import { ListAdminGameRecordKeysResponse } from '../../generated-definitions/ListAdminGameRecordKeysResponse.js'
import { ListAdminPlayerRecordKeysResponse } from '../../generated-definitions/ListAdminPlayerRecordKeysResponse.js'

export enum Key_AdminRecordAdmin {
  Adminrecords = 'AdminRecordAdmin.Adminrecords',
  AdminrecordBulk = 'AdminRecordAdmin.AdminrecordBulk',
  Adminrecord_ByKey = 'AdminRecordAdmin.Adminrecord_ByKey',
  Adminrecords_ByUserId = 'AdminRecordAdmin.Adminrecords_ByUserId',
  BulkUser_ByKey = 'AdminRecordAdmin.BulkUser_ByKey',
  AdminrecordBulk_ByUserId = 'AdminRecordAdmin.AdminrecordBulk_ByUserId',
  Adminrecord_ByUserId_ByKey = 'AdminRecordAdmin.Adminrecord_ByUserId_ByKey'
}

export const useAdmAdminrecords = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number; query?: string | null; tags?: string[] } },
  options?: Omit<UseQueryOptions<ListAdminGameRecordKeysResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListAdminGameRecordKeysResponse) => void
): UseQueryResult<ListAdminGameRecordKeysResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAdminrecords>[1]) => async () => {
    const data = await AdminRecordAdminApi(sdk, { namespace: input.namespace }).getAdminrecords(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ListAdminGameRecordKeysResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminRecordAdmin.Adminrecords, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateAdminrecordBulkMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BulkGetAdminGameRecordResponse, AxiosError<ApiError>, ApiArgs & { data: BulkGetAdminGameRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: BulkGetAdminGameRecordResponse) => void
): UseMutationResult<BulkGetAdminGameRecordResponse, AxiosError<ApiError>, ApiArgs & { data: BulkGetAdminGameRecordRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: BulkGetAdminGameRecordRequest }) => {
    const data = await AdminRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).createAdminrecordBulk(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminRecordAdmin.AdminrecordBulk],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteAdminrecord_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { key: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { key: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { key: string }) => {
    const data = await AdminRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteAdminrecord_ByKey(input.key)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminRecordAdmin.Adminrecord_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmAdminrecord_ByKey = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { key: string },
  options?: Omit<UseQueryOptions<AdminGameRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AdminGameRecordResponse) => void
): UseQueryResult<AdminGameRecordResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAdminrecord_ByKey>[1]) => async () => {
    const data = await AdminRecordAdminApi(sdk, { namespace: input.namespace }).getAdminrecord_ByKey(input.key)
    callback && callback(data)
    return data
  }

  return useQuery<AdminGameRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminRecordAdmin.Adminrecord_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateAdminrecord_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<AdminGameRecordResponse, AxiosError<ApiError>, ApiArgs & { key: string; data: AdminGameRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: AdminGameRecordResponse) => void
): UseMutationResult<AdminGameRecordResponse, AxiosError<ApiError>, ApiArgs & { key: string; data: AdminGameRecordRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { key: string; data: AdminGameRecordRequest }) => {
    const data = await AdminRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).createAdminrecord_ByKey(
      input.key,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminRecordAdmin.Adminrecord_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateAdminrecord_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<AdminGameRecordResponse, AxiosError<ApiError>, ApiArgs & { key: string; data: AdminGameRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: AdminGameRecordResponse) => void
): UseMutationResult<AdminGameRecordResponse, AxiosError<ApiError>, ApiArgs & { key: string; data: AdminGameRecordRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { key: string; data: AdminGameRecordRequest }) => {
    const data = await AdminRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateAdminrecord_ByKey(
      input.key,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminRecordAdmin.Adminrecord_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmAdminrecords_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { limit?: number; offset?: number; query?: string | null; tags?: string[] } },
  options?: Omit<UseQueryOptions<ListAdminPlayerRecordKeysResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListAdminPlayerRecordKeysResponse) => void
): UseQueryResult<ListAdminPlayerRecordKeysResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAdminrecords_ByUserId>[1]) => async () => {
    const data = await AdminRecordAdminApi(sdk, { namespace: input.namespace }).getAdminrecords_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ListAdminPlayerRecordKeysResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminRecordAdmin.Adminrecords_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateBulkUser_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BulkGetAdminPlayerRecordResponse, AxiosError<ApiError>, ApiArgs & { key: string; data: BulkUserIDsRequest }>,
    'mutationKey'
  >,
  callback?: (data: BulkGetAdminPlayerRecordResponse) => void
): UseMutationResult<BulkGetAdminPlayerRecordResponse, AxiosError<ApiError>, ApiArgs & { key: string; data: BulkUserIDsRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { key: string; data: BulkUserIDsRequest }) => {
    const data = await AdminRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).createBulkUser_ByKey(
      input.key,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminRecordAdmin.BulkUser_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmCreateAdminrecordBulk_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      BulkGetAdminPlayerRecordResponse,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; data: BulkGetAdminPlayerRecordRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: BulkGetAdminPlayerRecordResponse) => void
): UseMutationResult<
  BulkGetAdminPlayerRecordResponse,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; data: BulkGetAdminPlayerRecordRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: BulkGetAdminPlayerRecordRequest }) => {
    const data = await AdminRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).createAdminrecordBulk_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminRecordAdmin.AdminrecordBulk_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteAdminrecord_ByUserId_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; key: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; key: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; key: string }) => {
    const data = await AdminRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteAdminrecord_ByUserId_ByKey(
      input.userId,
      input.key
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminRecordAdmin.Adminrecord_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmAdminrecord_ByUserId_ByKey = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; key: string },
  options?: Omit<UseQueryOptions<AdminPlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AdminPlayerRecordResponse) => void
): UseQueryResult<AdminPlayerRecordResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAdminrecord_ByUserId_ByKey>[1]) => async () => {
    const data = await AdminRecordAdminApi(sdk, { namespace: input.namespace }).getAdminrecord_ByUserId_ByKey(input.userId, input.key)
    callback && callback(data)
    return data
  }

  return useQuery<AdminPlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminRecordAdmin.Adminrecord_ByUserId_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateAdminrecord_ByUserId_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      AdminPlayerRecordResponse,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; key: string; data: AdminPlayerRecordRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: AdminPlayerRecordResponse) => void
): UseMutationResult<
  AdminPlayerRecordResponse,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; key: string; data: AdminPlayerRecordRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; key: string; data: AdminPlayerRecordRequest }) => {
    const data = await AdminRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).createAdminrecord_ByUserId_ByKey(
      input.userId,
      input.key,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminRecordAdmin.Adminrecord_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateAdminrecord_ByUserId_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      AdminPlayerRecordResponse,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; key: string; data: AdminPlayerRecordRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: AdminPlayerRecordResponse) => void
): UseMutationResult<
  AdminPlayerRecordResponse,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; key: string; data: AdminPlayerRecordRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; key: string; data: AdminPlayerRecordRequest }) => {
    const data = await AdminRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateAdminrecord_ByUserId_ByKey(
      input.userId,
      input.key,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminRecordAdmin.Adminrecord_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
