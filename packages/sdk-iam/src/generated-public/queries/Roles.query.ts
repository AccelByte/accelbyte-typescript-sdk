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
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { RolesApi } from '../RolesApi.js'

import { Permissions } from '../../generated-definitions/Permissions.js'
import { Role } from '../../generated-definitions/Role.js'
import { RoleAdminStatusResponse } from '../../generated-definitions/RoleAdminStatusResponse.js'
import { RoleCreateRequest } from '../../generated-definitions/RoleCreateRequest.js'
import { RoleManagersRequest } from '../../generated-definitions/RoleManagersRequest.js'
import { RoleManagersResponse } from '../../generated-definitions/RoleManagersResponse.js'
import { RoleMembersRequest } from '../../generated-definitions/RoleMembersRequest.js'
import { RoleMembersResponse } from '../../generated-definitions/RoleMembersResponse.js'
import { RoleNamesResponseV3 } from '../../generated-definitions/RoleNamesResponseV3.js'
import { RoleResponse } from '../../generated-definitions/RoleResponse.js'
import { RoleResponseWithManagersArray } from '../../generated-definitions/RoleResponseWithManagersArray.js'
import { RoleUpdateRequest } from '../../generated-definitions/RoleUpdateRequest.js'
import { UpdatePermissionScheduleRequest } from '../../generated-definitions/UpdatePermissionScheduleRequest.js'

export enum Key_Roles {
  Roles = 'Iam.Roles.Roles',
  Role = 'Iam.Roles.Role',
  Role_ByRoleId = 'Iam.Roles.Role_ByRoleId',
  Roles_v3 = 'Iam.Roles.Roles_v3',
  Admin_ByRoleId = 'Iam.Roles.Admin_ByRoleId',
  Member_ByRoleId = 'Iam.Roles.Member_ByRoleId',
  Members_ByRoleId = 'Iam.Roles.Members_ByRoleId',
  Manager_ByRoleId = 'Iam.Roles.Manager_ByRoleId',
  Managers_ByRoleId = 'Iam.Roles.Managers_ByRoleId',
  Role_ByRoleId_v3 = 'Iam.Roles.Role_ByRoleId_v3',
  Permission_ByRoleId = 'Iam.Roles.Permission_ByRoleId',
  Permission_ByRoleId_ByResource_ByAction = 'Iam.Roles.Permission_ByRoleId_ByResource_ByAction'
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles [GET]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Roles.Roles, input]
 * }
 * ```
 */
export const useRolesApi_GetRoles = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { isWildcard?: string | null } },
  options?: Omit<UseQueryOptions<RoleResponseWithManagersArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RoleResponseWithManagersArray>) => void
): UseQueryResult<RoleResponseWithManagersArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRolesApi_GetRoles>[1]) => async () => {
    const response = await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRoles(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<RoleResponseWithManagersArray, AxiosError<ApiError>>({
    queryKey: [Key_Roles.Roles, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated Role can only be assigned to other users by the role&#39;s manager. If role is an administrator role (i.e. AdminRole == true), it will list out the role&#39;s members. Administrator role can be created only when at least 1 manager is specified. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles [POST]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Roles.Role, input]
 * }
 * ```
 */
export const useRolesApi_CreateRoleMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<Role, AxiosError<ApiError>, SdkSetConfigParam & { data: RoleCreateRequest }>, 'mutationKey'>,
  callback?: (data: Role) => void
): UseMutationResult<Role, AxiosError<ApiError>, SdkSetConfigParam & { data: RoleCreateRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: RoleCreateRequest }) => {
    const response = await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createRole(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Roles.Role],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId} [DELETE]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Roles.Role_ByRoleId, input]
 * }
 * ```
 */
export const useRolesApi_DeleteRole_ByRoleIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string }) => {
    const response = await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteRole_ByRoleId(input.roleId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Roles.Role_ByRoleId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId} [GET]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Roles.Role_ByRoleId, input]
 * }
 * ```
 */
export const useRolesApi_GetRole_ByRoleId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { roleId: string },
  options?: Omit<UseQueryOptions<RoleResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RoleResponse>) => void
): UseQueryResult<RoleResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRolesApi_GetRole_ByRoleId>[1]) => async () => {
    const response = await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRole_ByRoleId(input.roleId)
    callback && callback(response)
    return response.data
  }

  return useQuery<RoleResponse, AxiosError<ApiError>>({
    queryKey: [Key_Roles.Role_ByRoleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId} [PATCH]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Roles.Role_ByRoleId, input]
 * }
 * ```
 */
export const useRolesApi_UpdateRole_ByRoleIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<RoleResponse, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RoleUpdateRequest }>,
    'mutationKey'
  >,
  callback?: (data: RoleResponse) => void
): UseMutationResult<RoleResponse, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RoleUpdateRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string; data: RoleUpdateRequest }) => {
    const response = await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateRole_ByRoleId(
      input.roleId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Roles.Role_ByRoleId],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to get all non-admin role. action code: 10418
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Roles.Roles_v3, input]
 * }
 * ```
 */
export const useRolesApi_GetRoles_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: { after?: string | null; before?: string | null; isWildcard?: boolean | null; limit?: number }
  },
  options?: Omit<UseQueryOptions<RoleNamesResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RoleNamesResponseV3>) => void
): UseQueryResult<RoleNamesResponseV3, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRolesApi_GetRoles_v3>[1]) => async () => {
    const response = await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRoles_v3(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<RoleNamesResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_Roles.Roles_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/admin [DELETE]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Roles.Admin_ByRoleId, input]
 * }
 * ```
 */
export const useRolesApi_DeleteAdmin_ByRoleIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string }) => {
    const response = await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteAdmin_ByRoleId(
      input.roleId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Roles.Admin_ByRoleId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated Admin roles has its members listed in the role. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/admin [GET]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Roles.Admin_ByRoleId, input]
 * }
 * ```
 */
export const useRolesApi_GetAdmin_ByRoleId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { roleId: string },
  options?: Omit<UseQueryOptions<RoleAdminStatusResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RoleAdminStatusResponse>) => void
): UseQueryResult<RoleAdminStatusResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRolesApi_GetAdmin_ByRoleId>[1]) => async () => {
    const response = await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getAdmin_ByRoleId(input.roleId)
    callback && callback(response)
    return response.data
  }

  return useQuery<RoleAdminStatusResponse, AxiosError<ApiError>>({
    queryKey: [Key_Roles.Admin_ByRoleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated Admin roles has its members listed in the role. Role can be set as admin role only when it has at least 1 manager. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/admin [POST]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Roles.Admin_ByRoleId, input]
 * }
 * ```
 */
export const useRolesApi_UpdateAdmin_ByRoleIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string }) => {
    const response = await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateAdmin_ByRoleId(
      input.roleId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Roles.Admin_ByRoleId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/members [DELETE]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Roles.Member_ByRoleId, input]
 * }
 * ```
 */
export const useRolesApi_DeleteMember_ByRoleIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RoleMembersRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RoleMembersRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string; data: RoleMembersRequest }) => {
    const response = await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteMember_ByRoleId(
      input.roleId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Roles.Member_ByRoleId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/members [GET]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Roles.Members_ByRoleId, input]
 * }
 * ```
 */
export const useRolesApi_GetMembers_ByRoleId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { roleId: string },
  options?: Omit<UseQueryOptions<RoleMembersResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RoleMembersResponse>) => void
): UseQueryResult<RoleMembersResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRolesApi_GetMembers_ByRoleId>[1]) => async () => {
    const response = await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getMembers_ByRoleId(input.roleId)
    callback && callback(response)
    return response.data
  }

  return useQuery<RoleMembersResponse, AxiosError<ApiError>>({
    queryKey: [Key_Roles.Members_ByRoleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated Admin roles has its members listed in the role. Role can only be assigned to other users by the role&#39;s manager. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/members [POST]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Roles.Member_ByRoleId, input]
 * }
 * ```
 */
export const useRolesApi_UpdateMember_ByRoleIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RoleMembersRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RoleMembersRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string; data: RoleMembersRequest }) => {
    const response = await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateMember_ByRoleId(
      input.roleId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Roles.Member_ByRoleId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/managers [DELETE]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Roles.Manager_ByRoleId, input]
 * }
 * ```
 */
export const useRolesApi_DeleteManager_ByRoleIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RoleManagersRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RoleManagersRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string; data: RoleManagersRequest }) => {
    const response = await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteManager_ByRoleId(
      input.roleId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Roles.Manager_ByRoleId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated Role can only be assigned to other users by the role&#39;s manager. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/managers [GET]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Roles.Managers_ByRoleId, input]
 * }
 * ```
 */
export const useRolesApi_GetManagers_ByRoleId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { roleId: string },
  options?: Omit<UseQueryOptions<RoleManagersResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RoleManagersResponse>) => void
): UseQueryResult<RoleManagersResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRolesApi_GetManagers_ByRoleId>[1]) => async () => {
    const response = await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getManagers_ByRoleId(
      input.roleId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RoleManagersResponse, AxiosError<ApiError>>({
    queryKey: [Key_Roles.Managers_ByRoleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated Role can only be assigned to other users by the role&#39;s manager. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/managers [POST]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Roles.Manager_ByRoleId, input]
 * }
 * ```
 */
export const useRolesApi_UpdateManager_ByRoleIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RoleManagersRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: RoleManagersRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string; data: RoleManagersRequest }) => {
    const response = await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateManager_ByRoleId(
      input.roleId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Roles.Manager_ByRoleId],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is used to get non-admin role based on specify roleId. action code : 10417
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Roles.Role_ByRoleId_v3, input]
 * }
 * ```
 */
export const useRolesApi_GetRole_ByRoleId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { roleId: string },
  options?: Omit<UseQueryOptions<RoleResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RoleResponse>) => void
): UseQueryResult<RoleResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRolesApi_GetRole_ByRoleId_v3>[1]) => async () => {
    const response = await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRole_ByRoleId_v3(input.roleId)
    callback && callback(response)
    return response.data
  }

  return useQuery<RoleResponse, AxiosError<ApiError>>({
    queryKey: [Key_Roles.Role_ByRoleId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated This endpoint will REPLACE role&#39;s permissions with the ones defined in body Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 2. Minutes: 0-59 * / , - 3. Hours: 0-23 * / , - 4. Day of month: 1-31 * / , - L W 5. Month: 1-12 JAN-DEC * / , - 6. Day of week: 0-6 SUN-SAT * / , - L # 7. Year: 1970-2099 * / , - Special characters: 1. \*: all values in the fields, e.g. \* in seconds fields indicates every second 2. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 3. ,: separate items of a list, e.g. MON,WED,FRI in day of week 4. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 5. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 6. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 7. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/permissions [POST]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Roles.Permission_ByRoleId, input]
 * }
 * ```
 */
export const useRolesApi_UpdatePermission_ByRoleIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: Permissions }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; data: Permissions }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string; data: Permissions }) => {
    const response = await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updatePermission_ByRoleId(
      input.roleId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Roles.Permission_ByRoleId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/permissions/{resource}/{action} [DELETE]_** - **Substitute endpoint: _/iam/v4/admin/roles/{roleId}/permissions [DELETE]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Roles.Permission_ByRoleId_ByResource_ByAction, input]
 * }
 * ```
 */
export const useRolesApi_DeletePermission_ByRoleId_ByResource_ByActionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; resource: string; action: number }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId: string; resource: string; action: number }> => {
  const mutationFn = async (input: SdkSetConfigParam & { roleId: string; resource: string; action: number }) => {
    const response = await RolesApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deletePermission_ByRoleId_ByResource_ByAction(input.roleId, input.resource, input.action)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Roles.Permission_ByRoleId_ByResource_ByAction],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * ## The endpoint is going to be deprecated This endpoint will update existing permission (bitwise OR the action) if found one with same resource, otherwise it will append a new permission Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: - Seconds: 0-59 * / , - - Minutes: 0-59 * / , - - Hours: 0-23 * / , - - Day of month: 1-31 * / , - L W - Month: 1-12 JAN-DEC * / , - - Day of week: 0-6 SUN-SAT * / , - L # - Year: 1970-2099 * / , - Special characters: - \**: all values in the fields, e.g. \* in seconds fields indicates every second - /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter - ,: separate items of a list, e.g. MON,WED,FRI in day of week - -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive - L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. - W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; - #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month. ### Endpoint migration guide - **Substitute endpoint(update): _/iam/v3/admin/roles/{roleId}/permissions [PUT]_** - **Substitute endpoint(create): _/iam/v3/admin/roles/{roleId}/permissions [POST]_**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Roles.Permission_ByRoleId_ByResource_ByAction, input]
 * }
 * ```
 */
export const useRolesApi_UpdatePermission_ByRoleId_ByResource_ByActionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { roleId: string; resource: string; action: number; data: UpdatePermissionScheduleRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { roleId: string; resource: string; action: number; data: UpdatePermissionScheduleRequest }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { roleId: string; resource: string; action: number; data: UpdatePermissionScheduleRequest }
  ) => {
    const response = await RolesApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePermission_ByRoleId_ByResource_ByAction(input.roleId, input.resource, input.action, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Roles.Permission_ByRoleId_ByResource_ByAction],
    mutationFn,
    ...options
  })
}
