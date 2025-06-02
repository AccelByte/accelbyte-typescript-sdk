/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { ReasonsAdminApi } from '../ReasonsAdminApi.js'

import { AdminAllReasonsResponse } from '../../generated-definitions/AdminAllReasonsResponse.js'
import { AdminReasonListResponse } from '../../generated-definitions/AdminReasonListResponse.js'
import { AdminReasonResponse } from '../../generated-definitions/AdminReasonResponse.js'
import { CreateReasonGroupRequest } from '../../generated-definitions/CreateReasonGroupRequest.js'
import { CreateReasonRequest } from '../../generated-definitions/CreateReasonRequest.js'
import { ReasonGroupListResponse } from '../../generated-definitions/ReasonGroupListResponse.js'
import { ReasonGroupResponse } from '../../generated-definitions/ReasonGroupResponse.js'
import { UnusedReasonListResponse } from '../../generated-definitions/UnusedReasonListResponse.js'
import { UpdateReasonGroupRequest } from '../../generated-definitions/UpdateReasonGroupRequest.js'

export enum Key_ReasonsAdmin {
  Reasons = 'Reporting.ReasonsAdmin.Reasons',
  Reason = 'Reporting.ReasonsAdmin.Reason',
  ReasonsAll = 'Reporting.ReasonsAdmin.ReasonsAll',
  ReasonGroups = 'Reporting.ReasonsAdmin.ReasonGroups',
  ReasonGroup = 'Reporting.ReasonsAdmin.ReasonGroup',
  ReasonsUnused = 'Reporting.ReasonsAdmin.ReasonsUnused',
  Reason_ByReasonId = 'Reporting.ReasonsAdmin.Reason_ByReasonId',
  ReasonGroup_ByGroupId = 'Reporting.ReasonsAdmin.ReasonGroup_ByGroupId'
}

/**
 * This endpoint get reasons with pagination
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ReasonsAdmin.Reasons, input]
 * }
 * ```
 */
export const useReasonsAdminApi_GetReasons = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { group?: string | null; limit?: number; offset?: number; title?: string | null } },
  options?: Omit<UseQueryOptions<AdminReasonListResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AdminReasonListResponse>) => void
): UseQueryResult<AdminReasonListResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useReasonsAdminApi_GetReasons>[1]) => async () => {
    const response = await ReasonsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getReasons(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<AdminReasonListResponse, AxiosError<ApiError>>({
    queryKey: [Key_ReasonsAdmin.Reasons, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint create a reason for a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ReasonsAdmin.Reason, input]
 * }
 * ```
 */
export const useReasonsAdminApi_CreateReasonMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<AdminReasonResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateReasonRequest }>,
    'mutationKey'
  >,
  callback?: (data: AdminReasonResponse) => void
): UseMutationResult<AdminReasonResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateReasonRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateReasonRequest }) => {
    const response = await ReasonsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createReason(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ReasonsAdmin.Reason],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint get all reasons without pagination.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ReasonsAdmin.ReasonsAll, input]
 * }
 * ```
 */
export const useReasonsAdminApi_GetReasonsAll = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<AdminAllReasonsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AdminAllReasonsResponse>) => void
): UseQueryResult<AdminAllReasonsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useReasonsAdminApi_GetReasonsAll>[1]) => async () => {
    const response = await ReasonsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getReasonsAll()
    callback && callback(response)
    return response.data
  }

  return useQuery<AdminAllReasonsResponse, AxiosError<ApiError>>({
    queryKey: [Key_ReasonsAdmin.ReasonsAll, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Return list of reason groups ID and title under given namespace. To fetch the reasons inside a group, use get reason group endpoint.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ReasonsAdmin.ReasonGroups, input]
 * }
 * ```
 */
export const useReasonsAdminApi_GetReasonGroups = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<ReasonGroupListResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ReasonGroupListResponse>) => void
): UseQueryResult<ReasonGroupListResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useReasonsAdminApi_GetReasonGroups>[1]) => async () => {
    const response = await ReasonsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getReasonGroups(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ReasonGroupListResponse, AxiosError<ApiError>>({
    queryKey: [Key_ReasonsAdmin.ReasonGroups, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create a reason group for easier query. You can query reasons by specifying the group title in the list reasons query. Reason group title is case insensitive, meaning you can&#39;t have **reason** if you already create a reason titled **Reason**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ReasonsAdmin.ReasonGroup, input]
 * }
 * ```
 */
export const useReasonsAdminApi_CreateReasonGroupMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ReasonGroupResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateReasonGroupRequest }>,
    'mutationKey'
  >,
  callback?: (data: ReasonGroupResponse) => void
): UseMutationResult<ReasonGroupResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateReasonGroupRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateReasonGroupRequest }) => {
    const response = await ReasonsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createReasonGroup(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ReasonsAdmin.ReasonGroup],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint get reasons not used by moderation rules.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ReasonsAdmin.ReasonsUnused, input]
 * }
 * ```
 */
export const useReasonsAdminApi_GetReasonsUnused = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { category: string | null; extensionCategory?: string | null } },
  options?: Omit<UseQueryOptions<UnusedReasonListResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UnusedReasonListResponse>) => void
): UseQueryResult<UnusedReasonListResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useReasonsAdminApi_GetReasonsUnused>[1]) => async () => {
    const response = await ReasonsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getReasonsUnused(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UnusedReasonListResponse, AxiosError<ApiError>>({
    queryKey: [Key_ReasonsAdmin.ReasonsUnused, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint delete a reason for a namespace with ID.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ReasonsAdmin.Reason_ByReasonId, input]
 * }
 * ```
 */
export const useReasonsAdminApi_DeleteReason_ByReasonIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { reasonId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { reasonId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { reasonId: string }) => {
    const response = await ReasonsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteReason_ByReasonId(
      input.reasonId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ReasonsAdmin.Reason_ByReasonId],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint get a single reason.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ReasonsAdmin.Reason_ByReasonId, input]
 * }
 * ```
 */
export const useReasonsAdminApi_GetReason_ByReasonId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { reasonId: string },
  options?: Omit<UseQueryOptions<AdminReasonResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AdminReasonResponse>) => void
): UseQueryResult<AdminReasonResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useReasonsAdminApi_GetReason_ByReasonId>[1]) => async () => {
    const response = await ReasonsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getReason_ByReasonId(
      input.reasonId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<AdminReasonResponse, AxiosError<ApiError>>({
    queryKey: [Key_ReasonsAdmin.Reason_ByReasonId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint update a reason for a namespace with ID.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ReasonsAdmin.Reason_ByReasonId, input]
 * }
 * ```
 */
export const useReasonsAdminApi_PatchReason_ByReasonIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<AdminReasonResponse, AxiosError<ApiError>, SdkSetConfigParam & { reasonId: string; data: CreateReasonRequest }>,
    'mutationKey'
  >,
  callback?: (data: AdminReasonResponse) => void
): UseMutationResult<AdminReasonResponse, AxiosError<ApiError>, SdkSetConfigParam & { reasonId: string; data: CreateReasonRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { reasonId: string; data: CreateReasonRequest }) => {
    const response = await ReasonsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchReason_ByReasonId(
      input.reasonId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ReasonsAdmin.Reason_ByReasonId],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint delete a reason group for a namespace with ID.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ReasonsAdmin.ReasonGroup_ByGroupId, input]
 * }
 * ```
 */
export const useReasonsAdminApi_DeleteReasonGroup_ByGroupIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { groupId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { groupId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { groupId: string }) => {
    const response = await ReasonsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteReasonGroup_ByGroupId(input.groupId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ReasonsAdmin.ReasonGroup_ByGroupId],
    mutationFn,
    ...options
  })
}

export const useReasonsAdminApi_GetReasonGroup_ByGroupId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { groupId: string },
  options?: Omit<UseQueryOptions<ReasonGroupResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ReasonGroupResponse>) => void
): UseQueryResult<ReasonGroupResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useReasonsAdminApi_GetReasonGroup_ByGroupId>[1]) => async () => {
    const response = await ReasonsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getReasonGroup_ByGroupId(
      input.groupId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ReasonGroupResponse, AxiosError<ApiError>>({
    queryKey: [Key_ReasonsAdmin.ReasonGroup_ByGroupId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Reason group title is case insensitive, meaning you can&#39;t have **reason** if you already create a reason titled **Reason** If no reasonIds passed when updating, the current reasons under the reason group will be kept (reasons will not be removed from the group).
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ReasonsAdmin.ReasonGroup_ByGroupId, input]
 * }
 * ```
 */
export const useReasonsAdminApi_PatchReasonGroup_ByGroupIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ReasonGroupResponse, AxiosError<ApiError>, SdkSetConfigParam & { groupId: string; data: UpdateReasonGroupRequest }>,
    'mutationKey'
  >,
  callback?: (data: ReasonGroupResponse) => void
): UseMutationResult<
  ReasonGroupResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { groupId: string; data: UpdateReasonGroupRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { groupId: string; data: UpdateReasonGroupRequest }) => {
    const response = await ReasonsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchReasonGroup_ByGroupId(input.groupId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ReasonsAdmin.ReasonGroup_ByGroupId],
    mutationFn,
    ...options
  })
}
