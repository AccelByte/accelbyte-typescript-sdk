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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { GroupMemberAdminApi } from '../GroupMemberAdminApi.js'

import { GetGroupMemberListResponseV1 } from '../../generated-definitions/GetGroupMemberListResponseV1.js'
import { GetUserGroupInformationResponseV1 } from '../../generated-definitions/GetUserGroupInformationResponseV1.js'

export enum Key_GroupMemberAdmin {
  Groups_ByUserId_v2 = 'Groups.GroupMemberAdmin.Groups_ByUserId_v2',
  Members_ByGroupId = 'Groups.GroupMemberAdmin.Members_ByGroupId',
  Status_ByUserId_ByGroupId_v2 = 'Groups.GroupMemberAdmin.Status_ByUserId_ByGroupId_v2'
}

/**
 * Required valid user authentication This endpoint is used to get user joined group information. Get user group joined information. If user does not belong to any group, it will return warning to give information about it Group Member Status: * JOINED: status of user already joined to a group
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GroupMemberAdmin.Groups_ByUserId_v2, input]
 * }
 * ```
 */
export const useGroupMemberAdminApi_GetGroups_ByUserId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetGroupMemberListResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetGroupMemberListResponseV1>) => void
): UseQueryResult<GetGroupMemberListResponseV1, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGroupMemberAdminApi_GetGroups_ByUserId_v2>[1]) => async () => {
    const response = await GroupMemberAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getGroups_ByUserId_v2(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetGroupMemberListResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_GroupMemberAdmin.Groups_ByUserId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint is used to get list of group members. Action Code: 73410
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GroupMemberAdmin.Members_ByGroupId, input]
 * }
 * ```
 */
export const useGroupMemberAdminApi_GetMembers_ByGroupId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { groupId: string; queryParams?: { limit?: number; offset?: number; order?: string | null } },
  options?: Omit<UseQueryOptions<GetGroupMemberListResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetGroupMemberListResponseV1>) => void
): UseQueryResult<GetGroupMemberListResponseV1, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGroupMemberAdminApi_GetMembers_ByGroupId>[1]) => async () => {
    const response = await GroupMemberAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getMembers_ByGroupId(
      input.groupId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetGroupMemberListResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_GroupMemberAdmin.Members_ByGroupId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint is used to get user group status information.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GroupMemberAdmin.Status_ByUserId_ByGroupId_v2, input]
 * }
 * ```
 */
export const useGroupMemberAdminApi_GetStatus_ByUserId_ByGroupId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; groupId: string },
  options?: Omit<UseQueryOptions<GetUserGroupInformationResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetUserGroupInformationResponseV1>) => void
): UseQueryResult<GetUserGroupInformationResponseV1, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGroupMemberAdminApi_GetStatus_ByUserId_ByGroupId_v2>[1]) => async () => {
    const response = await GroupMemberAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getStatus_ByUserId_ByGroupId_v2(input.userId, input.groupId)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetUserGroupInformationResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_GroupMemberAdmin.Status_ByUserId_ByGroupId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
