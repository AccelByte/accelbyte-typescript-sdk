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
import { SessionStorageAdminApi } from '../SessionStorageAdminApi.js'

export enum Key_SessionStorageAdmin {
  Storage_BySessionId = 'SessionStorageAdmin.Storage_BySessionId',
  StorageUser_BySessionId_ByUserId = 'SessionStorageAdmin.StorageUser_BySessionId_ByUserId'
}

export const useAdmDeleteStorage_BySessionIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { sessionId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { sessionId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { sessionId: string }) => {
    const data = await SessionStorageAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteStorage_BySessionId(
      input.sessionId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SessionStorageAdmin.Storage_BySessionId],
    mutationFn,
    ...options
  })
}

export const useAdmStorage_BySessionId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { sessionId: string },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStorage_BySessionId>[1]) => async () => {
    const data = await SessionStorageAdminApi(sdk, { namespace: input.namespace }).getStorage_BySessionId(input.sessionId)
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_SessionStorageAdmin.Storage_BySessionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmStorageUser_BySessionId_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { sessionId: string; userId: string },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStorageUser_BySessionId_ByUserId>[1]) => async () => {
    const data = await SessionStorageAdminApi(sdk, { namespace: input.namespace }).getStorageUser_BySessionId_ByUserId(
      input.sessionId,
      input.userId
    )
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_SessionStorageAdmin.StorageUser_BySessionId_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
