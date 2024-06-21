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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { GroupMemberAdminApi } from '../GroupMemberAdminApi.js'

import { GetGroupMemberListResponseV1 } from '../../generated-definitions/GetGroupMemberListResponseV1.js'
import { GetUserGroupInformationResponseV1 } from '../../generated-definitions/GetUserGroupInformationResponseV1.js'

export enum Key_GroupMemberAdmin {
  Groups_ByUserId = 'GroupMemberAdmin.Groups_ByUserId',
  Members_ByGroupId = 'GroupMemberAdmin.Members_ByGroupId',
  Status_ByUserId_ByGroupId = 'GroupMemberAdmin.Status_ByUserId_ByGroupId'
}

export const useAdmGroups_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetGroupMemberListResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetGroupMemberListResponseV1) => void
): UseQueryResult<GetGroupMemberListResponseV1, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmGroups_ByUserId>[1]) => async () => {
    const data = await GroupMemberAdminApi(sdk, { namespace: input.namespace }).getGroups_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<GetGroupMemberListResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_GroupMemberAdmin.Groups_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmMembers_ByGroupId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { groupId: string; queryParams?: { limit?: number; offset?: number; order?: string | null } },
  options?: Omit<UseQueryOptions<GetGroupMemberListResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetGroupMemberListResponseV1) => void
): UseQueryResult<GetGroupMemberListResponseV1, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmMembers_ByGroupId>[1]) => async () => {
    const data = await GroupMemberAdminApi(sdk, { namespace: input.namespace }).getMembers_ByGroupId(input.groupId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<GetGroupMemberListResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_GroupMemberAdmin.Members_ByGroupId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmStatus_ByUserId_ByGroupId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; groupId: string },
  options?: Omit<UseQueryOptions<GetUserGroupInformationResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetUserGroupInformationResponseV1) => void
): UseQueryResult<GetUserGroupInformationResponseV1, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStatus_ByUserId_ByGroupId>[1]) => async () => {
    const data = await GroupMemberAdminApi(sdk, { namespace: input.namespace }).getStatus_ByUserId_ByGroupId(input.userId, input.groupId)
    callback && callback(data)
    return data
  }

  return useQuery<GetUserGroupInformationResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_GroupMemberAdmin.Status_ByUserId_ByGroupId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
