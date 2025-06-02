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
import { GroupRolesAdminApi } from '../GroupRolesAdminApi.js'

import { CreateMemberRoleRequestV1 } from '../../generated-definitions/CreateMemberRoleRequestV1.js'
import { GetMemberRolesListResponseV1 } from '../../generated-definitions/GetMemberRolesListResponseV1.js'
import { MemberRoleResponseV1 } from '../../generated-definitions/MemberRoleResponseV1.js'
import { UpdateMemberRolePermissionsRequestV1 } from '../../generated-definitions/UpdateMemberRolePermissionsRequestV1.js'
import { UpdateMemberRoleRequestV1 } from '../../generated-definitions/UpdateMemberRoleRequestV1.js'

export enum Key_GroupRolesAdmin {
  Roles = 'Groups.GroupRolesAdmin.Roles',
  Role = 'Groups.GroupRolesAdmin.Role',
  Role_ByMemberRoleId = 'Groups.GroupRolesAdmin.Role_ByMemberRoleId',
  Permission_ByMemberRoleId = 'Groups.GroupRolesAdmin.Permission_ByMemberRoleId'
}

/**
 * This endpoint is used to get list of member roles Action Code: 73201
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GroupRolesAdmin.Roles, input]
 * }
 * ```
 */
export const useGroupRolesAdminApi_GetRoles = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetMemberRolesListResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetMemberRolesListResponseV1>) => void
): UseQueryResult<GetMemberRolesListResponseV1, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGroupRolesAdminApi_GetRoles>[1]) => async () => {
    const response = await GroupRolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRoles(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetMemberRolesListResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_GroupRolesAdmin.Roles, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint is used to create new member role Action Code: 73202 memberRolePermissions example value : &#34;action&#34;: 1 &#34;resourceName&#34;: &#34;GROUP:ROLE&#34; The changes will give user with that role have a permission to create a role for new group member
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GroupRolesAdmin.Role, input]
 * }
 * ```
 */
export const useGroupRolesAdminApi_CreateRoleMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<MemberRoleResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateMemberRoleRequestV1 }>,
    'mutationKey'
  >,
  callback?: (data: MemberRoleResponseV1) => void
): UseMutationResult<MemberRoleResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateMemberRoleRequestV1 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateMemberRoleRequestV1 }) => {
    const response = await GroupRolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createRole(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GroupRolesAdmin.Role],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to delete member role. Any member role can&#39;t be deleted if the specific role is applied to the configuration (admin and member role) Action Code: 73207
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GroupRolesAdmin.Role_ByMemberRoleId, input]
 * }
 * ```
 */
export const useGroupRolesAdminApi_DeleteRole_ByMemberRoleIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { memberRoleId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { memberRoleId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { memberRoleId: string }) => {
    const response = await GroupRolesAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteRole_ByMemberRoleId(input.memberRoleId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GroupRolesAdmin.Role_ByMemberRoleId],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to get member role based on the role ID Action Code: 73203
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GroupRolesAdmin.Role_ByMemberRoleId, input]
 * }
 * ```
 */
export const useGroupRolesAdminApi_GetRole_ByMemberRoleId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { memberRoleId: string },
  options?: Omit<UseQueryOptions<MemberRoleResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MemberRoleResponseV1>) => void
): UseQueryResult<MemberRoleResponseV1, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGroupRolesAdminApi_GetRole_ByMemberRoleId>[1]) => async () => {
    const response = await GroupRolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRole_ByMemberRoleId(
      input.memberRoleId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<MemberRoleResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_GroupRolesAdmin.Role_ByMemberRoleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint is used to update member role Action Code: 73204
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GroupRolesAdmin.Role_ByMemberRoleId, input]
 * }
 * ```
 */
export const useGroupRolesAdminApi_PatchRole_ByMemberRoleIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      MemberRoleResponseV1,
      AxiosError<ApiError>,
      SdkSetConfigParam & { memberRoleId: string; data: UpdateMemberRoleRequestV1 }
    >,
    'mutationKey'
  >,
  callback?: (data: MemberRoleResponseV1) => void
): UseMutationResult<
  MemberRoleResponseV1,
  AxiosError<ApiError>,
  SdkSetConfigParam & { memberRoleId: string; data: UpdateMemberRoleRequestV1 }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { memberRoleId: string; data: UpdateMemberRoleRequestV1 }) => {
    const response = await GroupRolesAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchRole_ByMemberRoleId(input.memberRoleId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GroupRolesAdmin.Role_ByMemberRoleId],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to update member role permission. It will replace the existing permission based on the request from this endpoint Action Code: 73205 memberRolePermissions example value : &#34;action&#34;: 2 &#34;resourceName&#34;: &#34;GROUP:ROLE&#34; The changes will update user role to be able to read a role of other member
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GroupRolesAdmin.Permission_ByMemberRoleId, input]
 * }
 * ```
 */
export const useGroupRolesAdminApi_UpdatePermission_ByMemberRoleIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      MemberRoleResponseV1,
      AxiosError<ApiError>,
      SdkSetConfigParam & { memberRoleId: string; data: UpdateMemberRolePermissionsRequestV1 }
    >,
    'mutationKey'
  >,
  callback?: (data: MemberRoleResponseV1) => void
): UseMutationResult<
  MemberRoleResponseV1,
  AxiosError<ApiError>,
  SdkSetConfigParam & { memberRoleId: string; data: UpdateMemberRolePermissionsRequestV1 }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { memberRoleId: string; data: UpdateMemberRolePermissionsRequestV1 }) => {
    const response = await GroupRolesAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePermission_ByMemberRoleId(input.memberRoleId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GroupRolesAdmin.Permission_ByMemberRoleId],
    mutationFn,
    ...options
  })
}
