/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { AssignUserV4Request } from '../generated-definitions/AssignUserV4Request.js'
import { AssignedUserV4Response } from '../generated-definitions/AssignedUserV4Response.js'
import { ListAssignedUsersV4Response } from '../generated-definitions/ListAssignedUsersV4Response.js'
import { ListRoleV4Response } from '../generated-definitions/ListRoleV4Response.js'
import { PermissionsV3 } from '../generated-definitions/PermissionsV3.js'
import { RevokeUserV4Request } from '../generated-definitions/RevokeUserV4Request.js'
import { RoleAdminStatusResponseV3 } from '../generated-definitions/RoleAdminStatusResponseV3.js'
import { RoleCreateV3Request } from '../generated-definitions/RoleCreateV3Request.js'
import { RoleManagersRequestV3 } from '../generated-definitions/RoleManagersRequestV3.js'
import { RoleManagersResponsesV3 } from '../generated-definitions/RoleManagersResponsesV3.js'
import { RoleMembersRequestV3 } from '../generated-definitions/RoleMembersRequestV3.js'
import { RoleMembersResponseV3 } from '../generated-definitions/RoleMembersResponseV3.js'
import { RoleResponseV3 } from '../generated-definitions/RoleResponseV3.js'
import { RoleResponseWithManagersAndPaginationV3 } from '../generated-definitions/RoleResponseWithManagersAndPaginationV3.js'
import { RoleUpdateRequestV3 } from '../generated-definitions/RoleUpdateRequestV3.js'
import { RoleV3 } from '../generated-definitions/RoleV3.js'
import { RoleV4Request } from '../generated-definitions/RoleV4Request.js'
import { RoleV4Response } from '../generated-definitions/RoleV4Response.js'
import { RolesAdmin$ } from './endpoints/RolesAdmin$.js'

export function RolesAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function getRoles_v3(queryParams?: {
    after?: string | null
    before?: string | null
    isWildcard?: boolean | null
    limit?: number
  }): Promise<AxiosResponse<RoleResponseWithManagersAndPaginationV3>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRoles_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createRole_v3(data: RoleCreateV3Request): Promise<AxiosResponse<RoleV3>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createRole_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRoles_v4(queryParams?: {
    adminRole?: boolean | null
    isWildcard?: boolean | null
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<ListRoleV4Response>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRoles_v4(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createRole_v4(data: RoleV4Request): Promise<AxiosResponse<RoleV4Response>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createRole_v4(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteRole_ByRoleId_v3(roleId: string): Promise<AxiosResponse<unknown>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteRole_ByRoleId_v3(roleId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRole_ByRoleId_v3(roleId: string): Promise<AxiosResponse<RoleResponseV3>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRole_ByRoleId_v3(roleId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchRole_ByRoleId_v3(roleId: string, data: RoleUpdateRequestV3): Promise<AxiosResponse<RoleResponseV3>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchRole_ByRoleId_v3(roleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteRole_ByRoleId_v4(roleId: string): Promise<AxiosResponse<unknown>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteRole_ByRoleId_v4(roleId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRole_ByRoleId_v4(roleId: string): Promise<AxiosResponse<RoleV4Response>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRole_ByRoleId_v4(roleId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchRole_ByRoleId_v4(roleId: string, data: RoleV4Request): Promise<AxiosResponse<RoleV4Response>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchRole_ByRoleId_v4(roleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteAdmin_ByRoleId_v3(roleId: string): Promise<AxiosResponse<unknown>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAdmin_ByRoleId_v3(roleId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getAdmin_ByRoleId_v3(roleId: string): Promise<AxiosResponse<RoleAdminStatusResponseV3>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAdmin_ByRoleId_v3(roleId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateAdmin_ByRoleId_v3(roleId: string): Promise<AxiosResponse<unknown>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateAdmin_ByRoleId_v3(roleId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteUser_ByRoleId_v4(roleId: string, data: RevokeUserV4Request): Promise<AxiosResponse<unknown>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteUser_ByRoleId_v4(roleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsers_ByRoleId_v4(
    roleId: string,
    queryParams?: { after?: string | null; before?: string | null; limit?: number }
  ): Promise<AxiosResponse<ListAssignedUsersV4Response>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsers_ByRoleId_v4(roleId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateUser_ByRoleId_v4(roleId: string, data: AssignUserV4Request): Promise<AxiosResponse<AssignedUserV4Response>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUser_ByRoleId_v4(roleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteMember_ByRoleId_v3(roleId: string, data: RoleMembersRequestV3): Promise<AxiosResponse<unknown>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteMember_ByRoleId_v3(roleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getMembers_ByRoleId_v3(
    roleId: string,
    queryParams?: { after?: string | null; before?: string | null; limit?: number }
  ): Promise<AxiosResponse<RoleMembersResponseV3>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMembers_ByRoleId_v3(roleId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateMember_ByRoleId_v3(roleId: string, data: RoleMembersRequestV3): Promise<AxiosResponse<unknown>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateMember_ByRoleId_v3(roleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteManager_ByRoleId_v3(roleId: string, data: RoleManagersRequestV3): Promise<AxiosResponse<unknown>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteManager_ByRoleId_v3(roleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getManagers_ByRoleId_v3(
    roleId: string,
    queryParams?: { after?: string | null; before?: string | null; limit?: number }
  ): Promise<AxiosResponse<RoleManagersResponsesV3>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getManagers_ByRoleId_v3(roleId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateManager_ByRoleId_v3(roleId: string, data: RoleManagersRequestV3): Promise<AxiosResponse<unknown>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateManager_ByRoleId_v3(roleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deletePermission_ByRoleId_v3(roleId: string, data: string[]): Promise<AxiosResponse<unknown>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePermission_ByRoleId_v3(roleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePermission_ByRoleId_v3(roleId: string, data: PermissionsV3): Promise<AxiosResponse<unknown>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePermission_ByRoleId_v3(roleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePermission_ByRoleId_admin_v3(roleId: string, data: PermissionsV3): Promise<AxiosResponse<unknown>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePermission_ByRoleId_admin_v3(roleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deletePermission_ByRoleId_v4(roleId: string, data: string[]): Promise<AxiosResponse<unknown>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePermission_ByRoleId_v4(roleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePermission_ByRoleId_v4(roleId: string, data: PermissionsV3): Promise<AxiosResponse<RoleV4Response>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePermission_ByRoleId_v4(roleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePermission_ByRoleId_admin_v4(roleId: string, data: PermissionsV3): Promise<AxiosResponse<RoleV4Response>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePermission_ByRoleId_admin_v4(roleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deletePermission_ByRoleId_ByResource_ByAction_v3(
    roleId: string,
    resource: string,
    action: number
  ): Promise<AxiosResponse<unknown>> {
    const $ = new RolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePermission_ByRoleId_ByResource_ByAction_v3(roleId, resource, action)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * action code: 10414
     */
    getRoles_v3,
    /**
     * Create role request body: - roleName: specify role name, alphanumeric, cannot have special character (required) - permissions: specify the permission that this role have - managers: specify list of user that will act as the managers of this role - members: specify list of user that will act as the members of this role - adminRole: specify if role is for admin user (default false) - isWildcard: specify if role can be assigned to wildcard (*) namespace (default false) - deletable: specify if role can be deleted or not (default true) action code: 10401
     */
    createRole_v3,
    /**
     * action code: 10414
     */
    getRoles_v4,
    /**
     * Create role request body: - roleName: specify role name, alphanumeric, cannot have special character (required) - adminRole: specify if role is for admin user (default false) - isWildcard: specify if role can be assigned to wildcard (*) namespace (default false) - deletable: specify if role can be deleted (default true) action code: 10401
     */
    createRole_v4,
    /**
     * action code: 10403
     */
    deleteRole_ByRoleId_v3,
    /**
     * action code: 10419
     */
    getRole_ByRoleId_v3,
    /**
     * Update role request body: - roleName: specify role name, alphanumeric, cannot have special character (required) - isWildcard: specify if role can be assigned to wildcard (*) namespace (default false) - deletable: specify if role can be deleted or not (optional) action code: 10402
     */
    patchRole_ByRoleId_v3,
    /**
     * Removes role ID from user&#39;s Roles and NamespaceRoles before deleting the role. action code: 10403
     */
    deleteRole_ByRoleId_v4,
    /**
     * action code: 10419
     */
    getRole_ByRoleId_v4,
    /**
     * Update role request body: - roleName: specify role name, alphanumeric, cannot have special character (required) - adminRole: specify if role is for admin user (default false) - isWildcard: specify if role can be assigned to wildcard (*) namespace (default false) - deletable: specify if role can be deleted (optional) action code: 10402
     */
    patchRole_ByRoleId_v4,
    /**
     * code: 10413
     */
    deleteAdmin_ByRoleId_v3,
    /**
     * Admin roles has its members listed in the role. action code: 10420
     */
    getAdmin_ByRoleId_v3,
    /**
     * Admin roles has its members listed in the role. Role can be set as admin role only when it has at least 1 manager. action code: 10412
     */
    updateAdmin_ByRoleId_v3,
    /**
     * Current implementation will revoke user from role in all assigned namespaces. Parameters: - userId: string (required) - namespace: string (user’s namespace) (required) action code: 10411
     */
    deleteUser_ByRoleId_v4,
    /**
     * Query all users that has the specified role. action code: 10416
     */
    getUsers_ByRoleId_v4,
    /**
     * Parameters: - **userId**: string (required) - **namespace**: string (user’s namespace) (required) - **assignedNamespaces**: array of string (namespaces to be assigned on role) (required) action code: 10410
     */
    updateUser_ByRoleId_v4,
    /**
     * @deprecated
     * Admin roles has its members listed in the role. Role can only be assigned to other users by the role&#39;s manager. action code: 10411 Deprecate: Suggest to use this: AdminRevokeUserFromRoleV4
     */
    deleteMember_ByRoleId_v3,
    /**
     * Admin roles has its members listed in the role. action code: 10416
     */
    getMembers_ByRoleId_v3,
    /**
     * Admin roles has its members listed in the role. Role can only be assigned to other users by the role&#39;s manager. action code: 10410
     */
    updateMember_ByRoleId_v3,
    /**
     * Role can only be assigned to other users by the role&#39;s manager. action code: 10409
     */
    deleteManager_ByRoleId_v3,
    /**
     * Role can only be assigned to other users by the role&#39;s manager. action code: 10415
     */
    getManagers_ByRoleId_v3,
    /**
     * Role can only be assigned to other users by the role&#39;s manager. action code: 10408
     */
    updateManager_ByRoleId_v3,

    deletePermission_ByRoleId_v3,
    /**
     * This endpoint will ATTACH permission(s) into the role action code: 10404 Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 1. Minutes: 0-59 * / , - 1. Hours: 0-23 * / , - 1. Day of month: 1-31 * / , - L W 1. Month: 1-12 JAN-DEC * / , - 1. Day of week: 0-6 SUN-SAT * / , - L # 1. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 1. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 1. ,: separate items of a list, e.g. MON,WED,FRI in day of week 1. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 1. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 1. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 1. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
     */
    updatePermission_ByRoleId_v3,
    /**
     * This endpoint will REPLACE role&#39;s permissions with the ones defined in body action code: 10405 Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 1. Minutes: 0-59 * / , - 1. Hours: 0-23 * / , - 1. Day of month: 1-31 * / , - L W 1. Month: 1-12 JAN-DEC * / , - 1. Day of week: 0-6 SUN-SAT * / , - L # 1. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 1. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 1. ,: separate items of a list, e.g. MON,WED,FRI in day of week 1. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 1. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 1. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 1. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
     */
    updatePermission_ByRoleId_admin_v3,

    deletePermission_ByRoleId_v4,
    /**
     * This endpoint will ATTACH permission(s) into the role action code: 10404 Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 2. Minutes: 0-59 * / , - 3. Hours: 0-23 * / , - 4. Day of month: 1-31 * / , - L W 5. Month: 1-12 JAN-DEC * / , - 6. Day of week: 0-6 SUN-SAT * / , - L # 7. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 2. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 3. ,: separate items of a list, e.g. MON,WED,FRI in day of week 4. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 5. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 6. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 7. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
     */
    updatePermission_ByRoleId_v4,
    /**
     * This endpoint will REPLACE role&#39;s permissions with the ones defined in body action code: 10405 Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 2. Minutes: 0-59 * / , - 3. Hours: 0-23 * / , - 4. Day of month: 1-31 * / , - L W 5. Month: 1-12 JAN-DEC * / , - 6. Day of week: 0-6 SUN-SAT * / , - L # 7. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 2. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 3. ,: separate items of a list, e.g. MON,WED,FRI in day of week 4. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 5. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 6. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 7. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
     */
    updatePermission_ByRoleId_admin_v4,
    /**
     * action code: 10406
     */
    deletePermission_ByRoleId_ByResource_ByAction_v3
  }
}
