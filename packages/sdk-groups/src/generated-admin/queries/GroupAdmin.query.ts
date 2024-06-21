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
import { GroupAdminApi } from '../GroupAdminApi.js'

import { GetGroupListRequestV2 } from '../../generated-definitions/GetGroupListRequestV2.js'
import { GetGroupsListResponseV1 } from '../../generated-definitions/GetGroupsListResponseV1.js'
import { GetGroupsResponseV1 } from '../../generated-definitions/GetGroupsResponseV1.js'
import { GroupResponseV1 } from '../../generated-definitions/GroupResponseV1.js'

export enum Key_GroupAdmin {
  Groups = 'GroupAdmin.Groups',
  GroupBulk = 'GroupAdmin.GroupBulk',
  Group_ByGroupId = 'GroupAdmin.Group_ByGroupId'
}

export const useAdmGroups = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: {
      configurationCode?: string | null
      groupName?: string | null
      groupRegion?: string | null
      limit?: number
      offset?: number
    }
  },
  options?: Omit<UseQueryOptions<GetGroupsListResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetGroupsListResponseV1) => void
): UseQueryResult<GetGroupsListResponseV1, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmGroups>[1]) => async () => {
    const data = await GroupAdminApi(sdk, { namespace: input.namespace }).getGroups(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<GetGroupsListResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_GroupAdmin.Groups, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateGroupBulkMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<GetGroupsResponseV1, AxiosError<ApiError>, ApiArgs & { data: GetGroupListRequestV2 }>, 'mutationKey'>,
  callback?: (data: GetGroupsResponseV1) => void
): UseMutationResult<GetGroupsResponseV1, AxiosError<ApiError>, ApiArgs & { data: GetGroupListRequestV2 }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: GetGroupListRequestV2 }) => {
    const data = await GroupAdminApi(sdk, { namespace: input.namespace, config: input.config }).createGroupBulk(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_GroupAdmin.GroupBulk],
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
    const data = await GroupAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteGroup_ByGroupId(input.groupId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_GroupAdmin.Group_ByGroupId],
    mutationFn,
    ...options
  })
}

export const useAdmGroup_ByGroupId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { groupId: string },
  options?: Omit<UseQueryOptions<GroupResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GroupResponseV1) => void
): UseQueryResult<GroupResponseV1, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmGroup_ByGroupId>[1]) => async () => {
    const data = await GroupAdminApi(sdk, { namespace: input.namespace }).getGroup_ByGroupId(input.groupId)
    callback && callback(data)
    return data
  }

  return useQuery<GroupResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_GroupAdmin.Group_ByGroupId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
