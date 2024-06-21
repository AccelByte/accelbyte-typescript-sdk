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
import { AdminGameRecordAdminApi } from '../AdminGameRecordAdminApi.js'

import { GameRecordAdminResponse } from '../../generated-definitions/GameRecordAdminResponse.js'
import { GameRecordRequest } from '../../generated-definitions/GameRecordRequest.js'
import { ListGameRecordKeysResponse } from '../../generated-definitions/ListGameRecordKeysResponse.js'

export enum Key_AdminGameRecordAdmin {
  Records = 'AdminGameRecordAdmin.Records',
  Record_ByKey = 'AdminGameRecordAdmin.Record_ByKey'
}

export const useAdmRecords = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { limit: number; offset: number; query?: string | null; tags?: string[] } },
  options?: Omit<UseQueryOptions<ListGameRecordKeysResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListGameRecordKeysResponse) => void
): UseQueryResult<ListGameRecordKeysResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRecords>[1]) => async () => {
    const data = await AdminGameRecordAdminApi(sdk, { namespace: input.namespace }).getRecords(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ListGameRecordKeysResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminGameRecordAdmin.Records, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteRecord_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { key: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { key: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { key: string }) => {
    const data = await AdminGameRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteRecord_ByKey(input.key)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminGameRecordAdmin.Record_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmRecord_ByKey = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { key: string },
  options?: Omit<UseQueryOptions<GameRecordAdminResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GameRecordAdminResponse) => void
): UseQueryResult<GameRecordAdminResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRecord_ByKey>[1]) => async () => {
    const data = await AdminGameRecordAdminApi(sdk, { namespace: input.namespace }).getRecord_ByKey(input.key)
    callback && callback(data)
    return data
  }

  return useQuery<GameRecordAdminResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminGameRecordAdmin.Record_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateRecord_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<GameRecordAdminResponse, AxiosError<ApiError>, ApiArgs & { key: string; data: GameRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: GameRecordAdminResponse) => void
): UseMutationResult<GameRecordAdminResponse, AxiosError<ApiError>, ApiArgs & { key: string; data: GameRecordRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { key: string; data: GameRecordRequest }) => {
    const data = await AdminGameRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).createRecord_ByKey(
      input.key,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminGameRecordAdmin.Record_ByKey],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateRecord_ByKeyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<GameRecordAdminResponse, AxiosError<ApiError>, ApiArgs & { key: string; data: GameRecordRequest }>,
    'mutationKey'
  >,
  callback?: (data: GameRecordAdminResponse) => void
): UseMutationResult<GameRecordAdminResponse, AxiosError<ApiError>, ApiArgs & { key: string; data: GameRecordRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { key: string; data: GameRecordRequest }) => {
    const data = await AdminGameRecordAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateRecord_ByKey(
      input.key,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminGameRecordAdmin.Record_ByKey],
    mutationFn,
    ...options
  })
}
