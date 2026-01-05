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
  Roles_v3 = 'Iam.RolesAdmin.Roles_v3',
  Role_v3 = 'Iam.RolesAdmin.Role_v3',
  Roles_v4 = 'Iam.RolesAdmin.Roles_v4',
  Role_v4 = 'Iam.RolesAdmin.Role_v4',
  Role_ByRoleId_v3 = 'Iam.RolesAdmin.Role_ByRoleId_v3',
  Role_ByRoleId_v4 = 'Iam.RolesAdmin.Role_ByRoleId_v4',
  Admin_ByRoleId_v3 = 'Iam.RolesAdmin.Admin_ByRoleId_v3',
  User_ByRoleId_v4 = 'Iam.RolesAdmin.User_ByRoleId_v4',
  Users_ByRoleId_v4 = 'Iam.RolesAdmin.Users_ByRoleId_v4',
  Member_ByRoleId_v3 = 'Iam.RolesAdmin.Member_ByRoleId_v3',
  Members_ByRoleId_v3 = 'Iam.RolesAdmin.Members_ByRoleId_v3',
  Manager_ByRoleId_v3 = 'Iam.RolesAdmin.Manager_ByRoleId_v3',
  Managers_ByRoleId_v3 = 'Iam.RolesAdmin.Managers_ByRoleId_v3',
  Permission_ByRoleId_v3 = 'Iam.RolesAdmin.Permission_ByRoleId_v3',
  Permission_ByRoleId_admin_v3 = 'Iam.RolesAdmin.Permission_ByRoleId_admin_v3',
  Permission_ByRoleId_v4 = 'Iam.RolesAdmin.Permission_ByRoleId_v4',
  Permission_ByRoleId_admin_v4 = 'Iam.RolesAdmin.Permission_ByRoleId_admin_v4',
  Permission_ByRoleId_ByResource_ByAction_v3 = 'Iam.RolesAdmin.Permission_ByRoleId_ByResource_ByAction_v3'
}

/**
 * action code: 10414
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Roles_v3, input]
 * }
 * ```
 */
export const useRolesAdminApi_GetRoles_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: { after?: string | null; before?: string | null; isWildcard?: boolean | null; limit?: number }
  },
  options?: Omit<UseQueryOptions<RoleResponseWithManagersAndPaginationV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RoleResponseWithManagersAndPaginationV3>) => void
): UseQueryResult<RoleResponseWithManagersAndPaginationV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRolesAdminApi_GetRoles_v3>[1]) => async () => {
    const response = await RolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRoles_v3(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RoleResponseWithManagersAndPaginationV3, AxiosError<ApiError>>({
    queryKey: [Key_RolesAdmin.Roles_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create role request body: - roleName: specify role name, alphanumeric, cannot have special character (required) - permissions: specify the permission that this role have - managers: specify list of user that will act as the managers of this role - members: specify list of user that will act as the members of this role - adminRole: specify if role is for admin user (default false) - isWildcard: specify if role can be assigned to wildcard (*) namespace (default false) - deletable: specify if role can be deleted or not (default true) action code: 10401
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Role_v3, input]
 * }
 * ```
 */
export const useRolesAdminApi_CreateRoleMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<RoleV3, AxiosError<ApiError>, SdkSetConfigParam & { data: RoleCreateV3Request }>, 'mutationKey'>,
  callback?: (data: RoleV3) => void
): UseMutationResult<RoleV3, AxiosError<ApiError>, SdkSetConfigParam & { data: RoleCreateV3Request }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: RoleCreateV3Request }) => {
    const response = await RolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createRole_v3(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Role_v3],
    mutationFn,
    ...options
  })
}

/**
 * action code: 10414
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Roles_v4, input]
 * }
 * ```
 */
export const useRolesAdminApi_GetRoles_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { adminRole?: boolean | null; isWildcard?: boolean | null; limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<ListRoleV4Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListRoleV4Response>) => void
): UseQueryResult<ListRoleV4Response, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRolesAdminApi_GetRoles_v4>[1]) => async () => {
    const response = await RolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRoles_v4(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListRoleV4Response, AxiosError<ApiError>>({
    queryKey: [Key_RolesAdmin.Roles_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create role request body: - roleName: specify role name, alphanumeric, cannot have special character (required) - adminRole: specify if role is for admin user (default false) - isWildcard: specify if role can be assigned to wildcard (*) namespace (default false) - deletable: specify if role can be deleted (default true) action code: 10401
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Role_v4, input]
 * }
 * ```
 */
export const useRolesAdminApi_CreateRoleMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<RoleV4Response, AxiosError<ApiError>, SdkSetConfigParam & { data: RoleV4Request }>, 'mutationKey'>,
  callback?: (data: RoleV4Response) => void
): UseMutationResult<RoleV4Response, AxiosError<ApiError>, SdkSetConfigParam & { data: RoleV4Request }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: RoleV4Request }) => {
    const response = await RolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createRole_v4(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Role_v4],
    mutationFn,
    ...options
  })
}

/**
 * action code: 10403
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Role_ByRoleId_v3, input]
 * }
 * ```
 */
export const useRolesAdminApi_DeleteRole_ByRoleIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string }) => {
    const response = await RolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteRole_ByRoleId_v3(
      input.roleId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Role_ByRoleId_v3],
    mutationFn,
    ...options
  })
}

/**
 * action code: 10419
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Role_ByRoleId_v3, input]
 * }
 * ```
 */
export const useRolesAdminApi_GetRole_ByRoleId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { roleId: string },
  options?: Omit<UseQueryOptions<RoleResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RoleResponseV3>) => void
): UseQueryResult<RoleResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRolesAdminApi_GetRole_ByRoleId_v3>[1]) => async () => {
    const response = await RolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRole_ByRoleId_v3(
      input.roleId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RoleResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_RolesAdmin.Role_ByRoleId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update role request body: - roleName: specify role name, alphanumeric, cannot have special character (required) - isWildcard: specify if role can be assigned to wildcard (*) namespace (default false) - deletable: specify if role can be deleted or not (optional) action code: 10402
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Role_ByRoleId_v3, input]
 * }
 * ```
 */
export const useRolesAdminApi_PatchRole_ByRoleIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<RoleResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RoleUpdateRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: RoleResponseV3) => void
): UseMutationResult<RoleResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RoleUpdateRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string; data: RoleUpdateRequestV3 }) => {
    const response = await RolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchRole_ByRoleId_v3(
      input.roleId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Role_ByRoleId_v3],
    mutationFn,
    ...options
  })
}

/**
 * Removes role ID from user&#39;s Roles and NamespaceRoles before deleting the role. action code: 10403
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Role_ByRoleId_v4, input]
 * }
 * ```
 */
export const useRolesAdminApi_DeleteRole_ByRoleIdMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string }) => {
    const response = await RolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteRole_ByRoleId_v4(
      input.roleId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Role_ByRoleId_v4],
    mutationFn,
    ...options
  })
}

/**
 * action code: 10419
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Role_ByRoleId_v4, input]
 * }
 * ```
 */
export const useRolesAdminApi_GetRole_ByRoleId_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { roleId: string },
  options?: Omit<UseQueryOptions<RoleV4Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RoleV4Response>) => void
): UseQueryResult<RoleV4Response, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRolesAdminApi_GetRole_ByRoleId_v4>[1]) => async () => {
    const response = await RolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRole_ByRoleId_v4(
      input.roleId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RoleV4Response, AxiosError<ApiError>>({
    queryKey: [Key_RolesAdmin.Role_ByRoleId_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update role request body: - roleName: specify role name, alphanumeric, cannot have special character (required) - adminRole: specify if role is for admin user (default false) - isWildcard: specify if role can be assigned to wildcard (*) namespace (default false) - deletable: specify if role can be deleted (optional) action code: 10402
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Role_ByRoleId_v4, input]
 * }
 * ```
 */
export const useRolesAdminApi_PatchRole_ByRoleIdMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<RoleV4Response, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RoleV4Request }>,
    'mutationKey'
  >,
  callback?: (data: RoleV4Response) => void
): UseMutationResult<RoleV4Response, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RoleV4Request }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string; data: RoleV4Request }) => {
    const response = await RolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchRole_ByRoleId_v4(
      input.roleId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Role_ByRoleId_v4],
    mutationFn,
    ...options
  })
}

/**
 * code: 10413
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Admin_ByRoleId_v3, input]
 * }
 * ```
 */
export const useRolesAdminApi_DeleteAdmin_ByRoleIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string }) => {
    const response = await RolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteAdmin_ByRoleId_v3(
      input.roleId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Admin_ByRoleId_v3],
    mutationFn,
    ...options
  })
}

/**
 * Admin roles has its members listed in the role. action code: 10420
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Admin_ByRoleId_v3, input]
 * }
 * ```
 */
export const useRolesAdminApi_GetAdmin_ByRoleId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { roleId: string },
  options?: Omit<UseQueryOptions<RoleAdminStatusResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RoleAdminStatusResponseV3>) => void
): UseQueryResult<RoleAdminStatusResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRolesAdminApi_GetAdmin_ByRoleId_v3>[1]) => async () => {
    const response = await RolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getAdmin_ByRoleId_v3(
      input.roleId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RoleAdminStatusResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_RolesAdmin.Admin_ByRoleId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Admin roles has its members listed in the role. Role can be set as admin role only when it has at least 1 manager. action code: 10412
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Admin_ByRoleId_v3, input]
 * }
 * ```
 */
export const useRolesAdminApi_UpdateAdmin_ByRoleIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string }) => {
    const response = await RolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateAdmin_ByRoleId_v3(
      input.roleId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Admin_ByRoleId_v3],
    mutationFn,
    ...options
  })
}

/**
 * Current implementation will revoke user from role in all assigned namespaces. Parameters: - userId: string (required) - namespace: string (user’s namespace) (required) action code: 10411
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.User_ByRoleId_v4, input]
 * }
 * ```
 */
export const useRolesAdminApi_DeleteUser_ByRoleIdMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RevokeUserV4Request }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RevokeUserV4Request }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string; data: RevokeUserV4Request }) => {
    const response = await RolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteUser_ByRoleId_v4(
      input.roleId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.User_ByRoleId_v4],
    mutationFn,
    ...options
  })
}

/**
 * Query all users that has the specified role. action code: 10416
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Users_ByRoleId_v4, input]
 * }
 * ```
 */
export const useRolesAdminApi_GetUsers_ByRoleId_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { roleId: string; queryParams?: { after?: string | null; before?: string | null; limit?: number } },
  options?: Omit<UseQueryOptions<ListAssignedUsersV4Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListAssignedUsersV4Response>) => void
): UseQueryResult<ListAssignedUsersV4Response, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRolesAdminApi_GetUsers_ByRoleId_v4>[1]) => async () => {
    const response = await RolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsers_ByRoleId_v4(
      input.roleId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListAssignedUsersV4Response, AxiosError<ApiError>>({
    queryKey: [Key_RolesAdmin.Users_ByRoleId_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Parameters: - **userId**: string (required) - **namespace**: string (user’s namespace) (required) - **assignedNamespaces**: array of string (namespaces to be assigned on role) (required) action code: 10410
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.User_ByRoleId_v4, input]
 * }
 * ```
 */
export const useRolesAdminApi_UpdateUser_ByRoleIdMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<AssignedUserV4Response, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: AssignUserV4Request }>,
    'mutationKey'
  >,
  callback?: (data: AssignedUserV4Response) => void
): UseMutationResult<AssignedUserV4Response, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: AssignUserV4Request }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string; data: AssignUserV4Request }) => {
    const response = await RolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateUser_ByRoleId_v4(
      input.roleId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.User_ByRoleId_v4],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Admin roles has its members listed in the role. Role can only be assigned to other users by the role&#39;s manager. action code: 10411 Deprecate: Suggest to use this: AdminRevokeUserFromRoleV4
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Member_ByRoleId_v3, input]
 * }
 * ```
 */
export const useRolesAdminApi_DeleteMember_ByRoleIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RoleMembersRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RoleMembersRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string; data: RoleMembersRequestV3 }) => {
    const response = await RolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteMember_ByRoleId_v3(
      input.roleId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Member_ByRoleId_v3],
    mutationFn,
    ...options
  })
}

/**
 * Admin roles has its members listed in the role. action code: 10416
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Members_ByRoleId_v3, input]
 * }
 * ```
 */
export const useRolesAdminApi_GetMembers_ByRoleId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { roleId: string; queryParams?: { after?: string | null; before?: string | null; limit?: number } },
  options?: Omit<UseQueryOptions<RoleMembersResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RoleMembersResponseV3>) => void
): UseQueryResult<RoleMembersResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRolesAdminApi_GetMembers_ByRoleId_v3>[1]) => async () => {
    const response = await RolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getMembers_ByRoleId_v3(
      input.roleId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RoleMembersResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_RolesAdmin.Members_ByRoleId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Admin roles has its members listed in the role. Role can only be assigned to other users by the role&#39;s manager. action code: 10410
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Member_ByRoleId_v3, input]
 * }
 * ```
 */
export const useRolesAdminApi_UpdateMember_ByRoleIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RoleMembersRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RoleMembersRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string; data: RoleMembersRequestV3 }) => {
    const response = await RolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateMember_ByRoleId_v3(
      input.roleId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Member_ByRoleId_v3],
    mutationFn,
    ...options
  })
}

/**
 * Role can only be assigned to other users by the role&#39;s manager. action code: 10409
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Manager_ByRoleId_v3, input]
 * }
 * ```
 */
export const useRolesAdminApi_DeleteManager_ByRoleIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RoleManagersRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RoleManagersRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string; data: RoleManagersRequestV3 }) => {
    const response = await RolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteManager_ByRoleId_v3(
      input.roleId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Manager_ByRoleId_v3],
    mutationFn,
    ...options
  })
}

/**
 * Role can only be assigned to other users by the role&#39;s manager. action code: 10415
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Managers_ByRoleId_v3, input]
 * }
 * ```
 */
export const useRolesAdminApi_GetManagers_ByRoleId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { roleId: string; queryParams?: { after?: string | null; before?: string | null; limit?: number } },
  options?: Omit<UseQueryOptions<RoleManagersResponsesV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RoleManagersResponsesV3>) => void
): UseQueryResult<RoleManagersResponsesV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRolesAdminApi_GetManagers_ByRoleId_v3>[1]) => async () => {
    const response = await RolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getManagers_ByRoleId_v3(
      input.roleId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RoleManagersResponsesV3, AxiosError<ApiError>>({
    queryKey: [Key_RolesAdmin.Managers_ByRoleId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Role can only be assigned to other users by the role&#39;s manager. action code: 10408
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Manager_ByRoleId_v3, input]
 * }
 * ```
 */
export const useRolesAdminApi_UpdateManager_ByRoleIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RoleManagersRequestV3 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RoleManagersRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string; data: RoleManagersRequestV3 }) => {
    const response = await RolesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateManager_ByRoleId_v3(
      input.roleId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Manager_ByRoleId_v3],
    mutationFn,
    ...options
  })
}

export const useRolesAdminApi_DeletePermission_ByRoleIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: string[] }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: string[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string; data: string[] }) => {
    const response = await RolesAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deletePermission_ByRoleId_v3(input.roleId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Permission_ByRoleId_v3],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint will ATTACH permission(s) into the role action code: 10404 Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 1. Minutes: 0-59 * / , - 1. Hours: 0-23 * / , - 1. Day of month: 1-31 * / , - L W 1. Month: 1-12 JAN-DEC * / , - 1. Day of week: 0-6 SUN-SAT * / , - L # 1. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 1. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 1. ,: separate items of a list, e.g. MON,WED,FRI in day of week 1. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 1. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 1. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 1. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Permission_ByRoleId_v3, input]
 * }
 * ```
 */
export const useRolesAdminApi_UpdatePermission_ByRoleIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: PermissionsV3 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: PermissionsV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string; data: PermissionsV3 }) => {
    const response = await RolesAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePermission_ByRoleId_v3(input.roleId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Permission_ByRoleId_v3],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint will REPLACE role&#39;s permissions with the ones defined in body action code: 10405 Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 1. Minutes: 0-59 * / , - 1. Hours: 0-23 * / , - 1. Day of month: 1-31 * / , - L W 1. Month: 1-12 JAN-DEC * / , - 1. Day of week: 0-6 SUN-SAT * / , - L # 1. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 1. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 1. ,: separate items of a list, e.g. MON,WED,FRI in day of week 1. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 1. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 1. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 1. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Permission_ByRoleId_admin_v3, input]
 * }
 * ```
 */
export const useRolesAdminApi_UpdatePermission_ByRoleId_adminMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: PermissionsV3 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: PermissionsV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string; data: PermissionsV3 }) => {
    const response = await RolesAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePermission_ByRoleId_admin_v3(input.roleId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Permission_ByRoleId_admin_v3],
    mutationFn,
    ...options
  })
}

export const useRolesAdminApi_DeletePermission_ByRoleIdMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: string[] }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: string[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string; data: string[] }) => {
    const response = await RolesAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deletePermission_ByRoleId_v4(input.roleId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Permission_ByRoleId_v4],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint will ATTACH permission(s) into the role action code: 10404 Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 2. Minutes: 0-59 * / , - 3. Hours: 0-23 * / , - 4. Day of month: 1-31 * / , - L W 5. Month: 1-12 JAN-DEC * / , - 6. Day of week: 0-6 SUN-SAT * / , - L # 7. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 2. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 3. ,: separate items of a list, e.g. MON,WED,FRI in day of week 4. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 5. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 6. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 7. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Permission_ByRoleId_v4, input]
 * }
 * ```
 */
export const useRolesAdminApi_UpdatePermission_ByRoleIdMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<RoleV4Response, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: PermissionsV3 }>,
    'mutationKey'
  >,
  callback?: (data: RoleV4Response) => void
): UseMutationResult<RoleV4Response, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: PermissionsV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string; data: PermissionsV3 }) => {
    const response = await RolesAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePermission_ByRoleId_v4(input.roleId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Permission_ByRoleId_v4],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint will REPLACE role&#39;s permissions with the ones defined in body action code: 10405 Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 2. Minutes: 0-59 * / , - 3. Hours: 0-23 * / , - 4. Day of month: 1-31 * / , - L W 5. Month: 1-12 JAN-DEC * / , - 6. Day of week: 0-6 SUN-SAT * / , - L # 7. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 2. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 3. ,: separate items of a list, e.g. MON,WED,FRI in day of week 4. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 5. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 6. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 7. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Permission_ByRoleId_admin_v4, input]
 * }
 * ```
 */
export const useRolesAdminApi_UpdatePermission_ByRoleId_adminMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<RoleV4Response, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: PermissionsV3 }>,
    'mutationKey'
  >,
  callback?: (data: RoleV4Response) => void
): UseMutationResult<RoleV4Response, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: PermissionsV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string; data: PermissionsV3 }) => {
    const response = await RolesAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePermission_ByRoleId_admin_v4(input.roleId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Permission_ByRoleId_admin_v4],
    mutationFn,
    ...options
  })
}

/**
 * action code: 10406
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RolesAdmin.Permission_ByRoleId_ByResource_ByAction_v3, input]
 * }
 * ```
 */
export const useRolesAdminApi_DeletePermission_ByRoleId_ByResource_ByActionMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; resource: string; action: number }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; resource: string; action: number }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string; resource: string; action: number }) => {
    const response = await RolesAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deletePermission_ByRoleId_ByResource_ByAction_v3(input.roleId, input.resource, input.action)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RolesAdmin.Permission_ByRoleId_ByResource_ByAction_v3],
    mutationFn,
    ...options
  })
}
