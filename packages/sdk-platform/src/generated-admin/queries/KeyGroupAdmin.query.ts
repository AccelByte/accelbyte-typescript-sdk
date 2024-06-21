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
import { KeyGroupAdminApi } from '../KeyGroupAdminApi.js'

import { BulkOperationResult } from '../../generated-definitions/BulkOperationResult.js'
import { KeyGroupCreate } from '../../generated-definitions/KeyGroupCreate.js'
import { KeyGroupDynamicInfo } from '../../generated-definitions/KeyGroupDynamicInfo.js'
import { KeyGroupInfo } from '../../generated-definitions/KeyGroupInfo.js'
import { KeyGroupPagingSlicedResult } from '../../generated-definitions/KeyGroupPagingSlicedResult.js'
import { KeyGroupUpdate } from '../../generated-definitions/KeyGroupUpdate.js'
import { KeyPagingSliceResult } from '../../generated-definitions/KeyPagingSliceResult.js'

export enum Key_KeyGroupAdmin {
  Keygroups = 'KeyGroupAdmin.Keygroups',
  Keygroup = 'KeyGroupAdmin.Keygroup',
  Keygroup_ByKeyGroupId = 'KeyGroupAdmin.Keygroup_ByKeyGroupId',
  Keys_ByKeyGroupId = 'KeyGroupAdmin.Keys_ByKeyGroupId',
  Key_ByKeyGroupId = 'KeyGroupAdmin.Key_ByKeyGroupId',
  Dynamic_ByKeyGroupId = 'KeyGroupAdmin.Dynamic_ByKeyGroupId'
}

export const useAdmKeygroups = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; name?: string | null; offset?: number; tag?: string | null } },
  options?: Omit<UseQueryOptions<KeyGroupPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: KeyGroupPagingSlicedResult) => void
): UseQueryResult<KeyGroupPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmKeygroups>[1]) => async () => {
    const data = await KeyGroupAdminApi(sdk, { namespace: input.namespace }).getKeygroups(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<KeyGroupPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_KeyGroupAdmin.Keygroups, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateKeygroupMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<KeyGroupInfo, AxiosError<ApiError>, ApiArgs & { data: KeyGroupCreate }>, 'mutationKey'>,
  callback?: (data: KeyGroupInfo) => void
): UseMutationResult<KeyGroupInfo, AxiosError<ApiError>, ApiArgs & { data: KeyGroupCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: KeyGroupCreate }) => {
    const data = await KeyGroupAdminApi(sdk, { namespace: input.namespace, config: input.config }).createKeygroup(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_KeyGroupAdmin.Keygroup],
    mutationFn,
    ...options
  })
}

export const useAdmKeygroup_ByKeyGroupId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { keyGroupId: string },
  options?: Omit<UseQueryOptions<KeyGroupInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: KeyGroupInfo) => void
): UseQueryResult<KeyGroupInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmKeygroup_ByKeyGroupId>[1]) => async () => {
    const data = await KeyGroupAdminApi(sdk, { namespace: input.namespace }).getKeygroup_ByKeyGroupId(input.keyGroupId)
    callback && callback(data)
    return data
  }

  return useQuery<KeyGroupInfo, AxiosError<ApiError>>({
    queryKey: [Key_KeyGroupAdmin.Keygroup_ByKeyGroupId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateKeygroup_ByKeyGroupIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<KeyGroupInfo, AxiosError<ApiError>, ApiArgs & { keyGroupId: string; data: KeyGroupUpdate }>,
    'mutationKey'
  >,
  callback?: (data: KeyGroupInfo) => void
): UseMutationResult<KeyGroupInfo, AxiosError<ApiError>, ApiArgs & { keyGroupId: string; data: KeyGroupUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { keyGroupId: string; data: KeyGroupUpdate }) => {
    const data = await KeyGroupAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateKeygroup_ByKeyGroupId(
      input.keyGroupId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_KeyGroupAdmin.Keygroup_ByKeyGroupId],
    mutationFn,
    ...options
  })
}

export const useAdmKeys_ByKeyGroupId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { keyGroupId: string; queryParams?: { limit?: number; offset?: number; status?: 'ACQUIRED' | 'ACTIVE' } },
  options?: Omit<UseQueryOptions<KeyPagingSliceResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: KeyPagingSliceResult) => void
): UseQueryResult<KeyPagingSliceResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmKeys_ByKeyGroupId>[1]) => async () => {
    const data = await KeyGroupAdminApi(sdk, { namespace: input.namespace }).getKeys_ByKeyGroupId(input.keyGroupId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<KeyPagingSliceResult, AxiosError<ApiError>>({
    queryKey: [Key_KeyGroupAdmin.Keys_ByKeyGroupId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateKey_ByKeyGroupIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BulkOperationResult, AxiosError<ApiError>, ApiArgs & { keyGroupId: string; data: { file?: File } }>,
    'mutationKey'
  >,
  callback?: (data: BulkOperationResult) => void
): UseMutationResult<BulkOperationResult, AxiosError<ApiError>, ApiArgs & { keyGroupId: string; data: { file?: File } }> => {
  //
  const mutationFn = async (input: ApiArgs & { keyGroupId: string; data: { file?: File } }) => {
    const data = await KeyGroupAdminApi(sdk, { namespace: input.namespace, config: input.config }).createKey_ByKeyGroupId(
      input.keyGroupId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_KeyGroupAdmin.Key_ByKeyGroupId],
    mutationFn,
    ...options
  })
}

export const useAdmDynamic_ByKeyGroupId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { keyGroupId: string },
  options?: Omit<UseQueryOptions<KeyGroupDynamicInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: KeyGroupDynamicInfo) => void
): UseQueryResult<KeyGroupDynamicInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDynamic_ByKeyGroupId>[1]) => async () => {
    const data = await KeyGroupAdminApi(sdk, { namespace: input.namespace }).getDynamic_ByKeyGroupId(input.keyGroupId)
    callback && callback(data)
    return data
  }

  return useQuery<KeyGroupDynamicInfo, AxiosError<ApiError>>({
    queryKey: [Key_KeyGroupAdmin.Dynamic_ByKeyGroupId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
