/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
import { MemberRequestApi } from '../MemberRequestApi.js'

import { GetMemberRequestsListResponseV1 } from '../../generated-definitions/GetMemberRequestsListResponseV1.js'

export enum Key_MemberRequest {
  UsersMeJoinRequest_v2 = 'Groups.MemberRequest.UsersMeJoinRequest_v2',
  UsersMeInviteRequest = 'Groups.MemberRequest.UsersMeInviteRequest',
  JoinRequest_ByGroupId = 'Groups.MemberRequest.JoinRequest_ByGroupId',
  JoinRequest_ByGroupId_v2 = 'Groups.MemberRequest.JoinRequest_ByGroupId_v2',
  InviteRequest_ByGroupId_v2 = 'Groups.MemberRequest.InviteRequest_ByGroupId_v2'
}

/**
 * Required valid user authentication This endpoint is used to Get My Join Request To The Groups Get My Join Request To The Groups for the user calling this endpoint. It will check any join request group for this user Action Code: 73502
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MemberRequest.UsersMeJoinRequest_v2, input]
 * }
 * ```
 */
export const useMemberRequestApi_GetUsersMeJoinRequest_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetMemberRequestsListResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetMemberRequestsListResponseV1>) => void
): UseQueryResult<GetMemberRequestsListResponseV1, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMemberRequestApi_GetUsersMeJoinRequest_v2>[1]) => async () => {
    const response = await MemberRequestApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersMeJoinRequest_v2(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetMemberRequestsListResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_MemberRequest.UsersMeJoinRequest_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required valid user authentication This endpoint is used to Get Group Invitation Request List Get Group Invitation Request List for the user calling this endpoint. It will check any group invitation for this user Action Code: 73502
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MemberRequest.UsersMeInviteRequest, input]
 * }
 * ```
 */
export const useMemberRequestApi_GetUsersMeInviteRequest = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetMemberRequestsListResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetMemberRequestsListResponseV1>) => void
): UseQueryResult<GetMemberRequestsListResponseV1, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMemberRequestApi_GetUsersMeInviteRequest>[1]) => async () => {
    const response = await MemberRequestApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersMeInviteRequest(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetMemberRequestsListResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_MemberRequest.UsersMeInviteRequest, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [READ]&#34; This endpoint is used to Get Group Join Request List Get Group Join Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint Action Code: 73501
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MemberRequest.JoinRequest_ByGroupId, input]
 * }
 * ```
 */
export const useMemberRequestApi_GetJoinRequest_ByGroupId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { groupId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetMemberRequestsListResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetMemberRequestsListResponseV1>) => void
): UseQueryResult<GetMemberRequestsListResponseV1, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMemberRequestApi_GetJoinRequest_ByGroupId>[1]) => async () => {
    const response = await MemberRequestApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getJoinRequest_ByGroupId(
      input.groupId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetMemberRequestsListResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_MemberRequest.JoinRequest_ByGroupId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [READ]&#34; This endpoint is used to Get Group Join Request List Get Group Join Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint Action Code: 73501
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MemberRequest.JoinRequest_ByGroupId_v2, input]
 * }
 * ```
 */
export const useMemberRequestApi_GetJoinRequest_ByGroupId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { groupId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetMemberRequestsListResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetMemberRequestsListResponseV1>) => void
): UseQueryResult<GetMemberRequestsListResponseV1, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMemberRequestApi_GetJoinRequest_ByGroupId_v2>[1]) => async () => {
    const response = await MemberRequestApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getJoinRequest_ByGroupId_v2(input.groupId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetMemberRequestsListResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_MemberRequest.JoinRequest_ByGroupId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [READ]&#34; This endpoint is used to Get Group Invite Request List Get Group Invite Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint Action Code: 73501
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MemberRequest.InviteRequest_ByGroupId_v2, input]
 * }
 * ```
 */
export const useMemberRequestApi_GetInviteRequest_ByGroupId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { groupId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetMemberRequestsListResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetMemberRequestsListResponseV1>) => void
): UseQueryResult<GetMemberRequestsListResponseV1, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMemberRequestApi_GetInviteRequest_ByGroupId_v2>[1]) => async () => {
    const response = await MemberRequestApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getInviteRequest_ByGroupId_v2(input.groupId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetMemberRequestsListResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_MemberRequest.InviteRequest_ByGroupId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
