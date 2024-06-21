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
import { GroupRolesAdminApi } from '../GroupRolesAdminApi.js'

import { CreateMemberRoleRequestV1 } from '../../generated-definitions/CreateMemberRoleRequestV1.js'
import { GetMemberRolesListResponseV1 } from '../../generated-definitions/GetMemberRolesListResponseV1.js'
import { MemberRoleResponseV1 } from '../../generated-definitions/MemberRoleResponseV1.js'
import { UpdateMemberRolePermissionsRequestV1 } from '../../generated-definitions/UpdateMemberRolePermissionsRequestV1.js'
import { UpdateMemberRoleRequestV1 } from '../../generated-definitions/UpdateMemberRoleRequestV1.js'

export enum Key_GroupRolesAdmin {
  Roles = 'GroupRolesAdmin.Roles',
  Role = 'GroupRolesAdmin.Role',
  Role_ByMemberRoleId = 'GroupRolesAdmin.Role_ByMemberRoleId',
  Permission_ByMemberRoleId = 'GroupRolesAdmin.Permission_ByMemberRoleId'
}

export const useAdmRoles = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetMemberRolesListResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetMemberRolesListResponseV1) => void
): UseQueryResult<GetMemberRolesListResponseV1, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRoles>[1]) => async () => {
    const data = await GroupRolesAdminApi(sdk, { namespace: input.namespace }).getRoles(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<GetMemberRolesListResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_GroupRolesAdmin.Roles, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateRoleMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<MemberRoleResponseV1, AxiosError<ApiError>, ApiArgs & { data: CreateMemberRoleRequestV1 }>,
    'mutationKey'
  >,
  callback?: (data: MemberRoleResponseV1) => void
): UseMutationResult<MemberRoleResponseV1, AxiosError<ApiError>, ApiArgs & { data: CreateMemberRoleRequestV1 }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CreateMemberRoleRequestV1 }) => {
    const data = await GroupRolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).createRole(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_GroupRolesAdmin.Role],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteRole_ByMemberRoleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { memberRoleId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { memberRoleId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { memberRoleId: string }) => {
    const data = await GroupRolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteRole_ByMemberRoleId(
      input.memberRoleId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_GroupRolesAdmin.Role_ByMemberRoleId],
    mutationFn,
    ...options
  })
}

export const useAdmRole_ByMemberRoleId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { memberRoleId: string },
  options?: Omit<UseQueryOptions<MemberRoleResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: MemberRoleResponseV1) => void
): UseQueryResult<MemberRoleResponseV1, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRole_ByMemberRoleId>[1]) => async () => {
    const data = await GroupRolesAdminApi(sdk, { namespace: input.namespace }).getRole_ByMemberRoleId(input.memberRoleId)
    callback && callback(data)
    return data
  }

  return useQuery<MemberRoleResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_GroupRolesAdmin.Role_ByMemberRoleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchRole_ByMemberRoleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<MemberRoleResponseV1, AxiosError<ApiError>, ApiArgs & { memberRoleId: string; data: UpdateMemberRoleRequestV1 }>,
    'mutationKey'
  >,
  callback?: (data: MemberRoleResponseV1) => void
): UseMutationResult<MemberRoleResponseV1, AxiosError<ApiError>, ApiArgs & { memberRoleId: string; data: UpdateMemberRoleRequestV1 }> => {
  //
  const mutationFn = async (input: ApiArgs & { memberRoleId: string; data: UpdateMemberRoleRequestV1 }) => {
    const data = await GroupRolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchRole_ByMemberRoleId(
      input.memberRoleId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_GroupRolesAdmin.Role_ByMemberRoleId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdatePermission_ByMemberRoleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      MemberRoleResponseV1,
      AxiosError<ApiError>,
      ApiArgs & { memberRoleId: string; data: UpdateMemberRolePermissionsRequestV1 }
    >,
    'mutationKey'
  >,
  callback?: (data: MemberRoleResponseV1) => void
): UseMutationResult<
  MemberRoleResponseV1,
  AxiosError<ApiError>,
  ApiArgs & { memberRoleId: string; data: UpdateMemberRolePermissionsRequestV1 }
> => {
  //
  const mutationFn = async (input: ApiArgs & { memberRoleId: string; data: UpdateMemberRolePermissionsRequestV1 }) => {
    const data = await GroupRolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).updatePermission_ByMemberRoleId(
      input.memberRoleId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_GroupRolesAdmin.Permission_ByMemberRoleId],
    mutationFn,
    ...options
  })
}
