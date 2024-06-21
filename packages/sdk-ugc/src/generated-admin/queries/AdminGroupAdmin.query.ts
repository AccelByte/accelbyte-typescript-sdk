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
import { AdminGroupAdminApi } from '../AdminGroupAdminApi.js'

import { CreateGroupRequest } from '../../generated-definitions/CreateGroupRequest.js'
import { CreateGroupResponse } from '../../generated-definitions/CreateGroupResponse.js'
import { PaginatedContentDownloadResponse } from '../../generated-definitions/PaginatedContentDownloadResponse.js'
import { PaginatedContentDownloadResponseV2 } from '../../generated-definitions/PaginatedContentDownloadResponseV2.js'
import { PaginatedGroupResponse } from '../../generated-definitions/PaginatedGroupResponse.js'

export enum Key_AdminGroupAdmin {
  Groups = 'AdminGroupAdmin.Groups',
  Group = 'AdminGroupAdmin.Group',
  Group_ByGroupId = 'AdminGroupAdmin.Group_ByGroupId',
  Groups_ByUserId = 'AdminGroupAdmin.Groups_ByUserId',
  Contents_ByGroupId = 'AdminGroupAdmin.Contents_ByGroupId',
  Contents_ByGroupId_ByNS = 'AdminGroupAdmin.Contents_ByGroupId_ByNS',
  Group_ByUserId_ByGroupId = 'AdminGroupAdmin.Group_ByUserId_ByGroupId',
  Contents_ByUserId_ByGroupId = 'AdminGroupAdmin.Contents_ByUserId_ByGroupId',
  Contents_ByUserId_ByGroupId_ByNS = 'AdminGroupAdmin.Contents_ByUserId_ByGroupId_ByNS'
}

export const useAdmGroups = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedGroupResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedGroupResponse) => void
): UseQueryResult<PaginatedGroupResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmGroups>[1]) => async () => {
    const data = await AdminGroupAdminApi(sdk, { namespace: input.namespace }).getGroups(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedGroupResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminGroupAdmin.Groups, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateGroupMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<CreateGroupResponse, AxiosError<ApiError>, ApiArgs & { data: CreateGroupRequest }>, 'mutationKey'>,
  callback?: (data: CreateGroupResponse) => void
): UseMutationResult<CreateGroupResponse, AxiosError<ApiError>, ApiArgs & { data: CreateGroupRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CreateGroupRequest }) => {
    const data = await AdminGroupAdminApi(sdk, { namespace: input.namespace, config: input.config }).createGroup(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminGroupAdmin.Group],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteGroup_ByGroupIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { groupId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { groupId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { groupId: string }) => {
    const data = await AdminGroupAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteGroup_ByGroupId(input.groupId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminGroupAdmin.Group_ByGroupId],
    mutationFn,
    ...options
  })
}

export const useAdmGroup_ByGroupId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { groupId: string },
  options?: Omit<UseQueryOptions<CreateGroupResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CreateGroupResponse) => void
): UseQueryResult<CreateGroupResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmGroup_ByGroupId>[1]) => async () => {
    const data = await AdminGroupAdminApi(sdk, { namespace: input.namespace }).getGroup_ByGroupId(input.groupId)
    callback && callback(data)
    return data
  }

  return useQuery<CreateGroupResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminGroupAdmin.Group_ByGroupId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateGroup_ByGroupIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<CreateGroupResponse, AxiosError<ApiError>, ApiArgs & { groupId: string; data: CreateGroupRequest }>,
    'mutationKey'
  >,
  callback?: (data: CreateGroupResponse) => void
): UseMutationResult<CreateGroupResponse, AxiosError<ApiError>, ApiArgs & { groupId: string; data: CreateGroupRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { groupId: string; data: CreateGroupRequest }) => {
    const data = await AdminGroupAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateGroup_ByGroupId(
      input.groupId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminGroupAdmin.Group_ByGroupId],
    mutationFn,
    ...options
  })
}

export const useAdmGroups_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedGroupResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedGroupResponse) => void
): UseQueryResult<PaginatedGroupResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmGroups_ByUserId>[1]) => async () => {
    const data = await AdminGroupAdminApi(sdk, { namespace: input.namespace }).getGroups_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedGroupResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminGroupAdmin.Groups_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmContents_ByGroupId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { groupId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedContentDownloadResponse) => void
): UseQueryResult<PaginatedContentDownloadResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmContents_ByGroupId>[1]) => async () => {
    const data = await AdminGroupAdminApi(sdk, { namespace: input.namespace }).getContents_ByGroupId(input.groupId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminGroupAdmin.Contents_ByGroupId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmContents_ByGroupId_ByNS = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { groupId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedContentDownloadResponseV2, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedContentDownloadResponseV2) => void
): UseQueryResult<PaginatedContentDownloadResponseV2, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmContents_ByGroupId_ByNS>[1]) => async () => {
    const data = await AdminGroupAdminApi(sdk, { namespace: input.namespace }).getContents_ByGroupId_ByNS(input.groupId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedContentDownloadResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_AdminGroupAdmin.Contents_ByGroupId_ByNS, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteGroup_ByUserId_ByGroupIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; groupId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; groupId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; groupId: string }) => {
    const data = await AdminGroupAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteGroup_ByUserId_ByGroupId(
      input.userId,
      input.groupId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminGroupAdmin.Group_ByUserId_ByGroupId],
    mutationFn,
    ...options
  })
}

export const useAdmGroup_ByUserId_ByGroupId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; groupId: string },
  options?: Omit<UseQueryOptions<CreateGroupResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CreateGroupResponse) => void
): UseQueryResult<CreateGroupResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmGroup_ByUserId_ByGroupId>[1]) => async () => {
    const data = await AdminGroupAdminApi(sdk, { namespace: input.namespace }).getGroup_ByUserId_ByGroupId(input.userId, input.groupId)
    callback && callback(data)
    return data
  }

  return useQuery<CreateGroupResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminGroupAdmin.Group_ByUserId_ByGroupId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateGroup_ByUserId_ByGroupIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<CreateGroupResponse, AxiosError<ApiError>, ApiArgs & { userId: string; groupId: string; data: CreateGroupRequest }>,
    'mutationKey'
  >,
  callback?: (data: CreateGroupResponse) => void
): UseMutationResult<
  CreateGroupResponse,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; groupId: string; data: CreateGroupRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; groupId: string; data: CreateGroupRequest }) => {
    const data = await AdminGroupAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateGroup_ByUserId_ByGroupId(
      input.userId,
      input.groupId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminGroupAdmin.Group_ByUserId_ByGroupId],
    mutationFn,
    ...options
  })
}

export const useAdmContents_ByUserId_ByGroupId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; groupId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedContentDownloadResponse) => void
): UseQueryResult<PaginatedContentDownloadResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmContents_ByUserId_ByGroupId>[1]) => async () => {
    const data = await AdminGroupAdminApi(sdk, { namespace: input.namespace }).getContents_ByUserId_ByGroupId(
      input.userId,
      input.groupId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminGroupAdmin.Contents_ByUserId_ByGroupId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmContents_ByUserId_ByGroupId_ByNS = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; groupId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedContentDownloadResponseV2, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedContentDownloadResponseV2) => void
): UseQueryResult<PaginatedContentDownloadResponseV2, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmContents_ByUserId_ByGroupId_ByNS>[1]) => async () => {
    const data = await AdminGroupAdminApi(sdk, { namespace: input.namespace }).getContents_ByUserId_ByGroupId_ByNS(
      input.userId,
      input.groupId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedContentDownloadResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_AdminGroupAdmin.Contents_ByUserId_ByGroupId_ByNS, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
