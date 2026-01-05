/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { GroupAdminApi } from '../GroupAdminApi.js'

import { GetGroupListRequestV2 } from '../../generated-definitions/GetGroupListRequestV2.js'
import { GetGroupsListResponseV1 } from '../../generated-definitions/GetGroupsListResponseV1.js'
import { GetGroupsResponseV1 } from '../../generated-definitions/GetGroupsResponseV1.js'
import { GroupResponseV1 } from '../../generated-definitions/GroupResponseV1.js'

export enum Key_GroupAdmin {
  Groups = 'Groups.GroupAdmin.Groups',
  GroupBulk_v2 = 'Groups.GroupAdmin.GroupBulk_v2',
  Group_ByGroupId = 'Groups.GroupAdmin.Group_ByGroupId'
}

/**
 * Get list of groups. This endpoint will show any types of group Action Code: 73301
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GroupAdmin.Groups, input]
 * }
 * ```
 */
export const useGroupAdminApi_GetGroups = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      configurationCode?: string | null
      groupName?: string | null
      groupRegion?: string | null
      limit?: number
      offset?: number
    }
  },
  options?: Omit<UseQueryOptions<GetGroupsListResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetGroupsListResponseV1>) => void
): UseQueryResult<GetGroupsListResponseV1, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGroupAdminApi_GetGroups>[1]) => async () => {
    const response = await GroupAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getGroups(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetGroupsListResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_GroupAdmin.Groups, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required valid user authentication Get list of groups by group Ids. Action Code: 73303
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GroupAdmin.GroupBulk_v2, input]
 * }
 * ```
 */
export const useGroupAdminApi_FetchGroupBulk_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { data: GetGroupListRequestV2 },
  options?: Omit<UseQueryOptions<GetGroupsResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetGroupsResponseV1>) => void
): UseQueryResult<GetGroupsResponseV1, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGroupAdminApi_FetchGroupBulk_v2>[1]) => async () => {
    const response = await GroupAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).fetchGroupBulk_v2(
      input.data
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetGroupsResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_GroupAdmin.GroupBulk_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Delete existing group. It will check whether the groupID is exist before doing the process to delete the group. Action Code: 73302
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GroupAdmin.Group_ByGroupId, input]
 * }
 * ```
 */
export const useGroupAdminApi_DeleteGroup_ByGroupIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { groupId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { groupId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { groupId: string }) => {
    const response = await GroupAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteGroup_ByGroupId(
      input.groupId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GroupAdmin.Group_ByGroupId],
    mutationFn,
    ...options
  })
}

/**
 * Get single group information. This endpoint will show the group information by the groupId Action Code: 73306
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GroupAdmin.Group_ByGroupId, input]
 * }
 * ```
 */
export const useGroupAdminApi_GetGroup_ByGroupId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { groupId: string },
  options?: Omit<UseQueryOptions<GroupResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GroupResponseV1>) => void
): UseQueryResult<GroupResponseV1, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGroupAdminApi_GetGroup_ByGroupId>[1]) => async () => {
    const response = await GroupAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getGroup_ByGroupId(
      input.groupId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GroupResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_GroupAdmin.Group_ByGroupId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
