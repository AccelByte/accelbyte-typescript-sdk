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
import { PublicGroupApi } from '../PublicGroupApi.js'

import { CreateGroupRequest } from '../../generated-definitions/CreateGroupRequest.js'
import { CreateGroupResponse } from '../../generated-definitions/CreateGroupResponse.js'
import { PaginatedContentDownloadResponse } from '../../generated-definitions/PaginatedContentDownloadResponse.js'
import { PaginatedContentDownloadResponseV2 } from '../../generated-definitions/PaginatedContentDownloadResponseV2.js'
import { PaginatedGroupResponse } from '../../generated-definitions/PaginatedGroupResponse.js'

export enum Key_PublicGroup {
  Groups_ByUserId = 'Ugc.PublicGroup.Groups_ByUserId',
  Group_ByUserId = 'Ugc.PublicGroup.Group_ByUserId',
  Group_ByUserId_ByGroupId = 'Ugc.PublicGroup.Group_ByUserId_ByGroupId',
  Contents_ByUserId_ByGroupId = 'Ugc.PublicGroup.Contents_ByUserId_ByGroupId',
  Contents_ByUserId_ByGroupId_v2 = 'Ugc.PublicGroup.Contents_ByUserId_ByGroupId_v2'
}

/**
 * Get user groups paginated
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicGroup.Groups_ByUserId, input]
 * }
 * ```
 */
export const usePublicGroupApi_GetGroups_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedGroupResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedGroupResponse>) => void
): UseQueryResult<PaginatedGroupResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicGroupApi_GetGroups_ByUserId>[1]) => async () => {
    const response = await PublicGroupApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getGroups_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedGroupResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicGroup.Groups_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create group
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicGroup.Group_ByUserId, input]
 * }
 * ```
 */
export const usePublicGroupApi_CreateGroup_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<CreateGroupResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: CreateGroupRequest }>,
    'mutationKey'
  >,
  callback?: (data: CreateGroupResponse) => void
): UseMutationResult<CreateGroupResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: CreateGroupRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: CreateGroupRequest }) => {
    const response = await PublicGroupApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createGroup_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicGroup.Group_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Delete user group by group ID
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicGroup.Group_ByUserId_ByGroupId, input]
 * }
 * ```
 */
export const usePublicGroupApi_DeleteGroup_ByUserId_ByGroupIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; groupId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; groupId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; groupId: string }) => {
    const response = await PublicGroupApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteGroup_ByUserId_ByGroupId(input.userId, input.groupId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicGroup.Group_ByUserId_ByGroupId],
    mutationFn,
    ...options
  })
}

/**
 * Get user groups by group ID
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicGroup.Group_ByUserId_ByGroupId, input]
 * }
 * ```
 */
export const usePublicGroupApi_GetGroup_ByUserId_ByGroupId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; groupId: string },
  options?: Omit<UseQueryOptions<CreateGroupResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CreateGroupResponse>) => void
): UseQueryResult<CreateGroupResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicGroupApi_GetGroup_ByUserId_ByGroupId>[1]) => async () => {
    const response = await PublicGroupApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getGroup_ByUserId_ByGroupId(input.userId, input.groupId)
    callback && callback(response)
    return response.data
  }

  return useQuery<CreateGroupResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicGroup.Group_ByUserId_ByGroupId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Replace group name and contents with new ones
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicGroup.Group_ByUserId_ByGroupId, input]
 * }
 * ```
 */
export const usePublicGroupApi_UpdateGroup_ByUserId_ByGroupIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateGroupResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; groupId: string; data: CreateGroupRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateGroupResponse) => void
): UseMutationResult<
  CreateGroupResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; groupId: string; data: CreateGroupRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; groupId: string; data: CreateGroupRequest }) => {
    const response = await PublicGroupApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateGroup_ByUserId_ByGroupId(input.userId, input.groupId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicGroup.Group_ByUserId_ByGroupId],
    mutationFn,
    ...options
  })
}

/**
 * Get content that belong to a group
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicGroup.Contents_ByUserId_ByGroupId, input]
 * }
 * ```
 */
export const usePublicGroupApi_GetContents_ByUserId_ByGroupId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; groupId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedContentDownloadResponse>) => void
): UseQueryResult<PaginatedContentDownloadResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicGroupApi_GetContents_ByUserId_ByGroupId>[1]) => async () => {
    const response = await PublicGroupApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getContents_ByUserId_ByGroupId(input.userId, input.groupId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicGroup.Contents_ByUserId_ByGroupId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get content belong to a group
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicGroup.Contents_ByUserId_ByGroupId_v2, input]
 * }
 * ```
 */
export const usePublicGroupApi_GetContents_ByUserId_ByGroupId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; groupId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedContentDownloadResponseV2, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedContentDownloadResponseV2>) => void
): UseQueryResult<PaginatedContentDownloadResponseV2, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicGroupApi_GetContents_ByUserId_ByGroupId_v2>[1]) => async () => {
    const response = await PublicGroupApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getContents_ByUserId_ByGroupId_v2(input.userId, input.groupId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedContentDownloadResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_PublicGroup.Contents_ByUserId_ByGroupId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
