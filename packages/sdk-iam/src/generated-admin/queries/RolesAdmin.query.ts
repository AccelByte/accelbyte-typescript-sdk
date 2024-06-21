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
import { RolesAdminApi } from '../RolesAdminApi.js'

import { AssignUserV4Request } from '../../generated-definitions/AssignUserV4Request.js'
import { AssignedUserV4Response } from '../../generated-definitions/AssignedUserV4Response.js'
import { ListAssignedUsersV4Response } from '../../generated-definitions/ListAssignedUsersV4Response.js'
import { ListRoleV4Response } from '../../generated-definitions/ListRoleV4Response.js'
import { PermissionsV3 } from '../../generated-definitions/PermissionsV3.js'
import { RevokeUserV4Request } from '../../generated-definitions/RevokeUserV4Request.js'
import { RoleAdminStatusResponseV3 } from '../../generated-definitions/RoleAdminStatusResponseV3.js'
import { RoleCreateV3Request } from '../../generated-definitions/RoleCreateV3Request.js'
import { RoleManagersRequestV3 } from '../../generated-definitions/RoleManagersRequestV3.js'
import { RoleManagersResponsesV3 } from '../../generated-definitions/RoleManagersResponsesV3.js'
import { RoleMembersRequestV3 } from '../../generated-definitions/RoleMembersRequestV3.js'
import { RoleMembersResponseV3 } from '../../generated-definitions/RoleMembersResponseV3.js'
import { RoleResponseV3 } from '../../generated-definitions/RoleResponseV3.js'
import { RoleResponseWithManagersAndPaginationV3 } from '../../generated-definitions/RoleResponseWithManagersAndPaginationV3.js'
import { RoleUpdateRequestV3 } from '../../generated-definitions/RoleUpdateRequestV3.js'
import { RoleV3 } from '../../generated-definitions/RoleV3.js'
import { RoleV4Request } from '../../generated-definitions/RoleV4Request.js'
import { RoleV4Response } from '../../generated-definitions/RoleV4Response.js'

export enum Key_RolesAdmin {
  Roles = 'RolesAdmin.Roles',
  Role = 'RolesAdmin.Role',
  Roles_v4 = 'RolesAdmin.Roles_v4',
  Role_v4 = 'RolesAdmin.Role_v4',
  Role_ByRoleId = 'RolesAdmin.Role_ByRoleId',
  Role_ByRoleId_v4 = 'RolesAdmin.Role_ByRoleId_v4',
  Admin_ByRoleId = 'RolesAdmin.Admin_ByRoleId',
  User_ByRoleId = 'RolesAdmin.User_ByRoleId',
  Users_ByRoleId = 'RolesAdmin.Users_ByRoleId',
  Member_ByRoleId = 'RolesAdmin.Member_ByRoleId',
  Members_ByRoleId = 'RolesAdmin.Members_ByRoleId',
  Manager_ByRoleId = 'RolesAdmin.Manager_ByRoleId',
  Managers_ByRoleId = 'RolesAdmin.Managers_ByRoleId',
  Permission_ByRoleId = 'RolesAdmin.Permission_ByRoleId',
  Permission_ByRoleId_v4 = 'RolesAdmin.Permission_ByRoleId_v4',
  Permission_ByRoleId_ByResource_ByAction = 'RolesAdmin.Permission_ByRoleId_ByResource_ByAction'
}

export const useAdmRoles = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { after?: string | null; before?: string | null; isWildcard?: boolean | null; limit?: number } },
  options?: Omit<UseQueryOptions<RoleResponseWithManagersAndPaginationV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RoleResponseWithManagersAndPaginationV3) => void
): UseQueryResult<RoleResponseWithManagersAndPaginationV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRoles>[1]) => async () => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace }).getRoles(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<RoleResponseWithManagersAndPaginationV3, AxiosError<ApiError>>({
    queryKey: [Key_RolesAdmin.Roles, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateRoleMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<RoleV3, AxiosError<ApiError>, ApiArgs & { data: RoleCreateV3Request }>, 'mutationKey'>,
  callback?: (data: RoleV3) => void
): UseMutationResult<RoleV3, AxiosError<ApiError>, ApiArgs & { data: RoleCreateV3Request }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: RoleCreateV3Request }) => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).createRole(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Role],
    mutationFn,
    ...options
  })
}

export const useAdmRoles_v4 = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { adminRole?: boolean | null; isWildcard?: boolean | null; limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<ListRoleV4Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListRoleV4Response) => void
): UseQueryResult<ListRoleV4Response, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRoles_v4>[1]) => async () => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace }).getRoles_v4(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ListRoleV4Response, AxiosError<ApiError>>({
    queryKey: [Key_RolesAdmin.Roles_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateRole_v4Mutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<RoleV4Response, AxiosError<ApiError>, ApiArgs & { data: RoleV4Request }>, 'mutationKey'>,
  callback?: (data: RoleV4Response) => void
): UseMutationResult<RoleV4Response, AxiosError<ApiError>, ApiArgs & { data: RoleV4Request }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: RoleV4Request }) => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).createRole_v4(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Role_v4],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteRole_ByRoleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { roleId: string }) => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteRole_ByRoleId(input.roleId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Role_ByRoleId],
    mutationFn,
    ...options
  })
}

export const useAdmRole_ByRoleId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { roleId: string },
  options?: Omit<UseQueryOptions<RoleResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RoleResponseV3) => void
): UseQueryResult<RoleResponseV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRole_ByRoleId>[1]) => async () => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace }).getRole_ByRoleId(input.roleId)
    callback && callback(data)
    return data
  }

  return useQuery<RoleResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_RolesAdmin.Role_ByRoleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchRole_ByRoleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<RoleResponseV3, AxiosError<ApiError>, ApiArgs & { roleId: string; data: RoleUpdateRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: RoleResponseV3) => void
): UseMutationResult<RoleResponseV3, AxiosError<ApiError>, ApiArgs & { roleId: string; data: RoleUpdateRequestV3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { roleId: string; data: RoleUpdateRequestV3 }) => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchRole_ByRoleId(input.roleId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Role_ByRoleId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteRole_ByRoleId_v4Mutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { roleId: string }) => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteRole_ByRoleId_v4(input.roleId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Role_ByRoleId_v4],
    mutationFn,
    ...options
  })
}

export const useAdmRole_ByRoleId_v4 = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { roleId: string },
  options?: Omit<UseQueryOptions<RoleV4Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RoleV4Response) => void
): UseQueryResult<RoleV4Response, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRole_ByRoleId_v4>[1]) => async () => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace }).getRole_ByRoleId_v4(input.roleId)
    callback && callback(data)
    return data
  }

  return useQuery<RoleV4Response, AxiosError<ApiError>>({
    queryKey: [Key_RolesAdmin.Role_ByRoleId_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchRole_ByRoleId_v4Mutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<RoleV4Response, AxiosError<ApiError>, ApiArgs & { roleId: string; data: RoleV4Request }>,
    'mutationKey'
  >,
  callback?: (data: RoleV4Response) => void
): UseMutationResult<RoleV4Response, AxiosError<ApiError>, ApiArgs & { roleId: string; data: RoleV4Request }> => {
  //
  const mutationFn = async (input: ApiArgs & { roleId: string; data: RoleV4Request }) => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchRole_ByRoleId_v4(
      input.roleId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Role_ByRoleId_v4],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteAdmin_ByRoleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { roleId: string }) => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteAdmin_ByRoleId(input.roleId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Admin_ByRoleId],
    mutationFn,
    ...options
  })
}

export const useAdmAdmin_ByRoleId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { roleId: string },
  options?: Omit<UseQueryOptions<RoleAdminStatusResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RoleAdminStatusResponseV3) => void
): UseQueryResult<RoleAdminStatusResponseV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAdmin_ByRoleId>[1]) => async () => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace }).getAdmin_ByRoleId(input.roleId)
    callback && callback(data)
    return data
  }

  return useQuery<RoleAdminStatusResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_RolesAdmin.Admin_ByRoleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateAdmin_ByRoleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { roleId: string }) => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).createAdmin_ByRoleId(input.roleId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Admin_ByRoleId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteUser_ByRoleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string; data: RevokeUserV4Request }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string; data: RevokeUserV4Request }> => {
  //
  const mutationFn = async (input: ApiArgs & { roleId: string; data: RevokeUserV4Request }) => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteUser_ByRoleId(
      input.roleId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.User_ByRoleId],
    mutationFn,
    ...options
  })
}

export const useAdmUsers_ByRoleId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { roleId: string; queryParams?: { after?: string | null; before?: string | null; limit?: number } },
  options?: Omit<UseQueryOptions<ListAssignedUsersV4Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ListAssignedUsersV4Response) => void
): UseQueryResult<ListAssignedUsersV4Response, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmUsers_ByRoleId>[1]) => async () => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace }).getUsers_ByRoleId(input.roleId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ListAssignedUsersV4Response, AxiosError<ApiError>>({
    queryKey: [Key_RolesAdmin.Users_ByRoleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateUser_ByRoleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<AssignedUserV4Response, AxiosError<ApiError>, ApiArgs & { roleId: string; data: AssignUserV4Request }>,
    'mutationKey'
  >,
  callback?: (data: AssignedUserV4Response) => void
): UseMutationResult<AssignedUserV4Response, AxiosError<ApiError>, ApiArgs & { roleId: string; data: AssignUserV4Request }> => {
  //
  const mutationFn = async (input: ApiArgs & { roleId: string; data: AssignUserV4Request }) => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).createUser_ByRoleId(
      input.roleId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.User_ByRoleId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteMember_ByRoleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string; data: RoleMembersRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string; data: RoleMembersRequestV3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { roleId: string; data: RoleMembersRequestV3 }) => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteMember_ByRoleId(
      input.roleId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Member_ByRoleId],
    mutationFn,
    ...options
  })
}

export const useAdmMembers_ByRoleId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { roleId: string; queryParams?: { after?: string | null; before?: string | null; limit?: number } },
  options?: Omit<UseQueryOptions<RoleMembersResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RoleMembersResponseV3) => void
): UseQueryResult<RoleMembersResponseV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmMembers_ByRoleId>[1]) => async () => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace }).getMembers_ByRoleId(input.roleId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<RoleMembersResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_RolesAdmin.Members_ByRoleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateMember_ByRoleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string; data: RoleMembersRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string; data: RoleMembersRequestV3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { roleId: string; data: RoleMembersRequestV3 }) => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).createMember_ByRoleId(
      input.roleId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Member_ByRoleId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteManager_ByRoleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string; data: RoleManagersRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string; data: RoleManagersRequestV3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { roleId: string; data: RoleManagersRequestV3 }) => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteManager_ByRoleId(
      input.roleId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Manager_ByRoleId],
    mutationFn,
    ...options
  })
}

export const useAdmManagers_ByRoleId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { roleId: string; queryParams?: { after?: string | null; before?: string | null; limit?: number } },
  options?: Omit<UseQueryOptions<RoleManagersResponsesV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RoleManagersResponsesV3) => void
): UseQueryResult<RoleManagersResponsesV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmManagers_ByRoleId>[1]) => async () => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace }).getManagers_ByRoleId(input.roleId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<RoleManagersResponsesV3, AxiosError<ApiError>>({
    queryKey: [Key_RolesAdmin.Managers_ByRoleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateManager_ByRoleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string; data: RoleManagersRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string; data: RoleManagersRequestV3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { roleId: string; data: RoleManagersRequestV3 }) => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).createManager_ByRoleId(
      input.roleId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Manager_ByRoleId],
    mutationFn,
    ...options
  })
}

export const useAdmDeletePermission_ByRoleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string; data: string[] }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string; data: string[] }> => {
  //
  const mutationFn = async (input: ApiArgs & { roleId: string; data: string[] }) => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).deletePermission_ByRoleId(
      input.roleId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Permission_ByRoleId],
    mutationFn,
    ...options
  })
}

export const useAdmCreatePermission_ByRoleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string; data: PermissionsV3 }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string; data: PermissionsV3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { roleId: string; data: PermissionsV3 }) => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).createPermission_ByRoleId(
      input.roleId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Permission_ByRoleId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdatePermission_ByRoleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string; data: PermissionsV3 }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string; data: PermissionsV3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { roleId: string; data: PermissionsV3 }) => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).updatePermission_ByRoleId(
      input.roleId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Permission_ByRoleId],
    mutationFn,
    ...options
  })
}

export const useAdmDeletePermission_ByRoleId_v4Mutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string; data: string[] }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string; data: string[] }> => {
  //
  const mutationFn = async (input: ApiArgs & { roleId: string; data: string[] }) => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).deletePermission_ByRoleId_v4(
      input.roleId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Permission_ByRoleId_v4],
    mutationFn,
    ...options
  })
}

export const useAdmCreatePermission_ByRoleId_v4Mutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<RoleV4Response, AxiosError<ApiError>, ApiArgs & { roleId: string; data: PermissionsV3 }>,
    'mutationKey'
  >,
  callback?: (data: RoleV4Response) => void
): UseMutationResult<RoleV4Response, AxiosError<ApiError>, ApiArgs & { roleId: string; data: PermissionsV3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { roleId: string; data: PermissionsV3 }) => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).createPermission_ByRoleId_v4(
      input.roleId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Permission_ByRoleId_v4],
    mutationFn,
    ...options
  })
}

export const useAdmUpdatePermission_ByRoleId_v4Mutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<RoleV4Response, AxiosError<ApiError>, ApiArgs & { roleId: string; data: PermissionsV3 }>,
    'mutationKey'
  >,
  callback?: (data: RoleV4Response) => void
): UseMutationResult<RoleV4Response, AxiosError<ApiError>, ApiArgs & { roleId: string; data: PermissionsV3 }> => {
  //
  const mutationFn = async (input: ApiArgs & { roleId: string; data: PermissionsV3 }) => {
    const data = await RolesAdminApi(sdk, { namespace: input.namespace, config: input.config }).updatePermission_ByRoleId_v4(
      input.roleId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Permission_ByRoleId_v4],
    mutationFn,
    ...options
  })
}

export const useAdmDeletePermission_ByRoleId_ByResource_ByActionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string; resource: string; action: number }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { roleId: string; resource: string; action: number }> => {
  //
  const mutationFn = async (input: ApiArgs & { roleId: string; resource: string; action: number }) => {
    const data = await RolesAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deletePermission_ByRoleId_ByResource_ByAction(input.roleId, input.resource, input.action)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Permission_ByRoleId_ByResource_ByAction],
    mutationFn,
    ...options
  })
}
