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
import { DataDeletionAdminApi } from '../DataDeletionAdminApi.js'

import { DeletionData } from '../../generated-definitions/DeletionData.js'
import { ListDeletionDataResponse } from '../../generated-definitions/ListDeletionDataResponse.js'
import { RequestDeleteResponse } from '../../generated-definitions/RequestDeleteResponse.js'

export enum Key_DataDeletionAdmin {
  Deletions = 'DataDeletionAdmin.Deletions',
  Deletion_ByUserId = 'DataDeletionAdmin.Deletion_ByUserId',
  Deletions_ByUserId = 'DataDeletionAdmin.Deletions_ByUserId'
}

export const useAdmDeletions = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: { after?: string | null; before?: string | null; limit?: number; offset?: number; requestDate?: string | null }
  },
  options?: Omit<UseQueryOptions<ListDeletionDataResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListDeletionDataResponse) => void
): UseQueryResult<ListDeletionDataResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDeletions>[1]) => async () => {
    const data = await DataDeletionAdminApi(sdk, { namespace: input.namespace }).getDeletions(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ListDeletionDataResponse, AxiosError<ApiError>>({
    queryKey: [Key_DataDeletionAdmin.Deletions, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteDeletion_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string }) => {
    const data = await DataDeletionAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteDeletion_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DataDeletionAdmin.Deletion_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDeletions_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string },
  options?: Omit<UseQueryOptions<DeletionData, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: DeletionData) => void
): UseQueryResult<DeletionData, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDeletions_ByUserId>[1]) => async () => {
    const data = await DataDeletionAdminApi(sdk, { namespace: input.namespace }).getDeletions_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useQuery<DeletionData, AxiosError<ApiError>>({
    queryKey: [Key_DataDeletionAdmin.Deletions_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateDeletion_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<RequestDeleteResponse, AxiosError<ApiError>, ApiArgs & { userId: string }>, 'mutationKey'>,
  callback?: (data: RequestDeleteResponse) => void
): UseMutationResult<RequestDeleteResponse, AxiosError<ApiError>, ApiArgs & { userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string }) => {
    const data = await DataDeletionAdminApi(sdk, { namespace: input.namespace, config: input.config }).createDeletion_ByUserId(input.userId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DataDeletionAdmin.Deletion_ByUserId],
    mutationFn,
    ...options
  })
}
