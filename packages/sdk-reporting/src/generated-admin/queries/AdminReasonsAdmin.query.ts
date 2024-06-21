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
import { AdminReasonsAdminApi } from '../AdminReasonsAdminApi.js'

import { AdminAllReasonsResponse } from '../../generated-definitions/AdminAllReasonsResponse.js'
import { AdminReasonListResponse } from '../../generated-definitions/AdminReasonListResponse.js'
import { AdminReasonResponse } from '../../generated-definitions/AdminReasonResponse.js'
import { CreateReasonGroupRequest } from '../../generated-definitions/CreateReasonGroupRequest.js'
import { CreateReasonRequest } from '../../generated-definitions/CreateReasonRequest.js'
import { ReasonGroupListResponse } from '../../generated-definitions/ReasonGroupListResponse.js'
import { ReasonGroupResponse } from '../../generated-definitions/ReasonGroupResponse.js'
import { UnusedReasonListResponse } from '../../generated-definitions/UnusedReasonListResponse.js'
import { UpdateReasonGroupRequest } from '../../generated-definitions/UpdateReasonGroupRequest.js'

export enum Key_AdminReasonsAdmin {
  Reasons = 'AdminReasonsAdmin.Reasons',
  Reason = 'AdminReasonsAdmin.Reason',
  ReasonsAll = 'AdminReasonsAdmin.ReasonsAll',
  ReasonGroups = 'AdminReasonsAdmin.ReasonGroups',
  ReasonGroup = 'AdminReasonsAdmin.ReasonGroup',
  ReasonsUnused = 'AdminReasonsAdmin.ReasonsUnused',
  Reason_ByReasonId = 'AdminReasonsAdmin.Reason_ByReasonId',
  ReasonGroup_ByGroupId = 'AdminReasonsAdmin.ReasonGroup_ByGroupId'
}

export const useAdmReasons = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { group?: string | null; limit?: number; offset?: number; title?: string | null } },
  options?: Omit<UseQueryOptions<AdminReasonListResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AdminReasonListResponse) => void
): UseQueryResult<AdminReasonListResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmReasons>[1]) => async () => {
    const data = await AdminReasonsAdminApi(sdk, { namespace: input.namespace }).getReasons(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<AdminReasonListResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminReasonsAdmin.Reasons, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateReasonMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<AdminReasonResponse, AxiosError<ApiError>, ApiArgs & { data: CreateReasonRequest }>, 'mutationKey'>,
  callback?: (data: AdminReasonResponse) => void
): UseMutationResult<AdminReasonResponse, AxiosError<ApiError>, ApiArgs & { data: CreateReasonRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CreateReasonRequest }) => {
    const data = await AdminReasonsAdminApi(sdk, { namespace: input.namespace, config: input.config }).createReason(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminReasonsAdmin.Reason],
    mutationFn,
    ...options
  })
}

export const useAdmReasonsAll = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<AdminAllReasonsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AdminAllReasonsResponse) => void
): UseQueryResult<AdminAllReasonsResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmReasonsAll>[1]) => async () => {
    const data = await AdminReasonsAdminApi(sdk, { namespace: input.namespace }).getReasonsAll()
    callback && callback(data)
    return data
  }

  return useQuery<AdminAllReasonsResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminReasonsAdmin.ReasonsAll, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmReasonGroups = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<ReasonGroupListResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ReasonGroupListResponse) => void
): UseQueryResult<ReasonGroupListResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmReasonGroups>[1]) => async () => {
    const data = await AdminReasonsAdminApi(sdk, { namespace: input.namespace }).getReasonGroups(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ReasonGroupListResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminReasonsAdmin.ReasonGroups, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateReasonGroupMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ReasonGroupResponse, AxiosError<ApiError>, ApiArgs & { data: CreateReasonGroupRequest }>,
    'mutationKey'
  >,
  callback?: (data: ReasonGroupResponse) => void
): UseMutationResult<ReasonGroupResponse, AxiosError<ApiError>, ApiArgs & { data: CreateReasonGroupRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CreateReasonGroupRequest }) => {
    const data = await AdminReasonsAdminApi(sdk, { namespace: input.namespace, config: input.config }).createReasonGroup(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminReasonsAdmin.ReasonGroup],
    mutationFn,
    ...options
  })
}

export const useAdmReasonsUnused = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { category: string | null; extensionCategory?: string | null } },
  options?: Omit<UseQueryOptions<UnusedReasonListResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: UnusedReasonListResponse) => void
): UseQueryResult<UnusedReasonListResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmReasonsUnused>[1]) => async () => {
    const data = await AdminReasonsAdminApi(sdk, { namespace: input.namespace }).getReasonsUnused(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<UnusedReasonListResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminReasonsAdmin.ReasonsUnused, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteReason_ByReasonIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { reasonId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { reasonId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { reasonId: string }) => {
    const data = await AdminReasonsAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteReason_ByReasonId(
      input.reasonId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminReasonsAdmin.Reason_ByReasonId],
    mutationFn,
    ...options
  })
}

export const useAdmReason_ByReasonId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { reasonId: string },
  options?: Omit<UseQueryOptions<AdminReasonResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AdminReasonResponse) => void
): UseQueryResult<AdminReasonResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmReason_ByReasonId>[1]) => async () => {
    const data = await AdminReasonsAdminApi(sdk, { namespace: input.namespace }).getReason_ByReasonId(input.reasonId)
    callback && callback(data)
    return data
  }

  return useQuery<AdminReasonResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminReasonsAdmin.Reason_ByReasonId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchReason_ByReasonIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<AdminReasonResponse, AxiosError<ApiError>, ApiArgs & { reasonId: string; data: CreateReasonRequest }>,
    'mutationKey'
  >,
  callback?: (data: AdminReasonResponse) => void
): UseMutationResult<AdminReasonResponse, AxiosError<ApiError>, ApiArgs & { reasonId: string; data: CreateReasonRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { reasonId: string; data: CreateReasonRequest }) => {
    const data = await AdminReasonsAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchReason_ByReasonId(
      input.reasonId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminReasonsAdmin.Reason_ByReasonId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteReasonGroup_ByGroupIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { groupId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { groupId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { groupId: string }) => {
    const data = await AdminReasonsAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteReasonGroup_ByGroupId(
      input.groupId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminReasonsAdmin.ReasonGroup_ByGroupId],
    mutationFn,
    ...options
  })
}

export const useAdmReasonGroup_ByGroupId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { groupId: string },
  options?: Omit<UseQueryOptions<ReasonGroupResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ReasonGroupResponse) => void
): UseQueryResult<ReasonGroupResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmReasonGroup_ByGroupId>[1]) => async () => {
    const data = await AdminReasonsAdminApi(sdk, { namespace: input.namespace }).getReasonGroup_ByGroupId(input.groupId)
    callback && callback(data)
    return data
  }

  return useQuery<ReasonGroupResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminReasonsAdmin.ReasonGroup_ByGroupId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchReasonGroup_ByGroupIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ReasonGroupResponse, AxiosError<ApiError>, ApiArgs & { groupId: string; data: UpdateReasonGroupRequest }>,
    'mutationKey'
  >,
  callback?: (data: ReasonGroupResponse) => void
): UseMutationResult<ReasonGroupResponse, AxiosError<ApiError>, ApiArgs & { groupId: string; data: UpdateReasonGroupRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { groupId: string; data: UpdateReasonGroupRequest }) => {
    const data = await AdminReasonsAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchReasonGroup_ByGroupId(
      input.groupId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminReasonsAdmin.ReasonGroup_ByGroupId],
    mutationFn,
    ...options
  })
}
