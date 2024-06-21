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
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { AdminConcurrentRecordAdminApi } from '../AdminConcurrentRecordAdminApi.js'

import { AdminConcurrentRecordRequest } from '../../generated-definitions/AdminConcurrentRecordRequest.js'
import { AdminGameConcurrentRecordRequest } from '../../generated-definitions/AdminGameConcurrentRecordRequest.js'
import { AdminPlayerConcurrentRecordRequest } from '../../generated-definitions/AdminPlayerConcurrentRecordRequest.js'
import { PlayerRecordConcurrentUpdateResponse } from '../../generated-definitions/PlayerRecordConcurrentUpdateResponse.js'

export enum Key_AdminConcurrentRecordAdmin {
  ConcurrentRecord_ByKey = 'AdminConcurrentRecordAdmin.ConcurrentRecord_ByKey',
  ConcurrentAdminrecord_ByKey = 'AdminConcurrentRecordAdmin.ConcurrentAdminrecord_ByKey',
  ConcurrentRecord_ByUserId_ByKey = 'AdminConcurrentRecordAdmin.ConcurrentRecord_ByUserId_ByKey',
  ConcurrentAdminrecord_ByUserId_ByKey = 'AdminConcurrentRecordAdmin.ConcurrentAdminrecord_ByUserId_ByKey',
  PublicConcurrent_ByUserId_ByKey = 'AdminConcurrentRecordAdmin.PublicConcurrent_ByUserId_ByKey'
}

export const useAdmUpdateConcurrentRecord_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { key: string; data: AdminConcurrentRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { key: string; data: AdminConcurrentRecordRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { key: string; data: AdminConcurrentRecordRequest }) => {
    const data = await AdminConcurrentRecordAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateConcurrentRecord_ByKey(input.key, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminConcurrentRecordAdmin.ConcurrentRecord_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateConcurrentAdminrecord_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { key: string; data: AdminGameConcurrentRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { key: string; data: AdminGameConcurrentRecordRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { key: string; data: AdminGameConcurrentRecordRequest }) => {
    const data = await AdminConcurrentRecordAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateConcurrentAdminrecord_ByKey(input.key, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminConcurrentRecordAdmin.ConcurrentAdminrecord_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateConcurrentRecord_ByUserId_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      PlayerRecordConcurrentUpdateResponse,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; key: string; data: AdminConcurrentRecordRequest; queryParams?: { responseBody?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PlayerRecordConcurrentUpdateResponse) => void
): UseMutationResult<
  PlayerRecordConcurrentUpdateResponse,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; key: string; data: AdminConcurrentRecordRequest; queryParams?: { responseBody?: boolean | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { userId: string; key: string; data: AdminConcurrentRecordRequest; queryParams?: { responseBody?: boolean | null } }
  ) => {
    const data = await AdminConcurrentRecordAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateConcurrentRecord_ByUserId_ByKey(input.userId, input.key, input.data, input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminConcurrentRecordAdmin.ConcurrentRecord_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateConcurrentAdminrecord_ByUserId_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      PlayerRecordConcurrentUpdateResponse,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; key: string; data: AdminPlayerConcurrentRecordRequest; queryParams?: { responseBody?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PlayerRecordConcurrentUpdateResponse) => void
): UseMutationResult<
  PlayerRecordConcurrentUpdateResponse,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; key: string; data: AdminPlayerConcurrentRecordRequest; queryParams?: { responseBody?: boolean | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & {
      userId: string
      key: string
      data: AdminPlayerConcurrentRecordRequest
      queryParams?: { responseBody?: boolean | null }
    }
  ) => {
    const data = await AdminConcurrentRecordAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateConcurrentAdminrecord_ByUserId_ByKey(input.userId, input.key, input.data, input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminConcurrentRecordAdmin.ConcurrentAdminrecord_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmUpdatePublicConcurrent_ByUserId_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      PlayerRecordConcurrentUpdateResponse,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; key: string; data: AdminConcurrentRecordRequest; queryParams?: { responseBody?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PlayerRecordConcurrentUpdateResponse) => void
): UseMutationResult<
  PlayerRecordConcurrentUpdateResponse,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; key: string; data: AdminConcurrentRecordRequest; queryParams?: { responseBody?: boolean | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { userId: string; key: string; data: AdminConcurrentRecordRequest; queryParams?: { responseBody?: boolean | null } }
  ) => {
    const data = await AdminConcurrentRecordAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updatePublicConcurrent_ByUserId_ByKey(input.userId, input.key, input.data, input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminConcurrentRecordAdmin.PublicConcurrent_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
