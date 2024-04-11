/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
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

export function RolesAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * action code: 10414
   */
  async function getRoles(queryParams?: {
    after?: string | null
    before?: string | null
    isWildcard?: boolean | null
    limit?: number
  }): Promise<RoleResponseWithManagersAndPaginationV3> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getRoles(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create role request body: - roleName: specify role name, alphanumeric, cannot have special character (required) - permissions: specify the permission that this role have - managers: specify list of user that will act as the managers of this role - members: specify list of user that will act as the members of this role - adminRole: specify if role is for admin user (default false) - isWildcard: specify if role can be assigned to wildcard (*) namespace (default false) - deletable: specify if role can be deleted or not (default true) action code: 10401
   */
  async function createRole(data: RoleCreateV3Request): Promise<RoleV3> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createRole(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * action code: 10414
   */
  async function getRoles_v4(queryParams?: {
    adminRole?: boolean | null
    isWildcard?: boolean | null
    limit?: number
    offset?: number
  }): Promise<ListRoleV4Response> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getRoles_v4(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create role request body: - roleName: specify role name, alphanumeric, cannot have special character (required) - adminRole: specify if role is for admin user (default false) - isWildcard: specify if role can be assigned to wildcard (*) namespace (default false) - deletable: specify if role can be deleted (default true) action code: 10401
   */
  async function createRole_v4(data: RoleV4Request): Promise<RoleV4Response> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createRole_v4(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * action code: 10403
   */
  async function deleteRole_ByRoleId(roleId: string): Promise<unknown> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteRole_ByRoleId(roleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * action code: 10419
   */
  async function getRole_ByRoleId(roleId: string): Promise<RoleResponseV3> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getRole_ByRoleId(roleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update role request body: - roleName: specify role name, alphanumeric, cannot have special character (required) - isWildcard: specify if role can be assigned to wildcard (*) namespace (default false) - deletable: specify if role can be deleted or not (optional) action code: 10402
   */
  async function patchRole_ByRoleId(roleId: string, data: RoleUpdateRequestV3): Promise<RoleResponseV3> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.patchRole_ByRoleId(roleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Removes role ID from user&#39;s Roles and NamespaceRoles before deleting the role. action code: 10403
   */
  async function deleteRole_ByRoleId_v4(roleId: string): Promise<unknown> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteRole_ByRoleId_v4(roleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * action code: 10419
   */
  async function getRole_ByRoleId_v4(roleId: string): Promise<RoleV4Response> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getRole_ByRoleId_v4(roleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update role request body: - roleName: specify role name, alphanumeric, cannot have special character (required) - adminRole: specify if role is for admin user (default false) - isWildcard: specify if role can be assigned to wildcard (*) namespace (default false) - deletable: specify if role can be deleted (optional) action code: 10402
   */
  async function patchRole_ByRoleId_v4(roleId: string, data: RoleV4Request): Promise<RoleV4Response> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.patchRole_ByRoleId_v4(roleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * code: 10413
   */
  async function deleteAdmin_ByRoleId(roleId: string): Promise<unknown> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteAdmin_ByRoleId(roleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Admin roles has its members listed in the role. action code: 10420
   */
  async function getAdmin_ByRoleId(roleId: string): Promise<RoleAdminStatusResponseV3> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getAdmin_ByRoleId(roleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Admin roles has its members listed in the role. Role can be set as admin role only when it has at least 1 manager. action code: 10412
   */
  async function createAdmin_ByRoleId(roleId: string): Promise<unknown> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createAdmin_ByRoleId(roleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Current implementation will revoke user from role in all assigned namespaces. Parameters: - userId: string (required) - namespace: string (user’s namespace) (required) action code: 10411
   */
  async function deleteUser_ByRoleId(roleId: string, data: RevokeUserV4Request): Promise<unknown> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteUser_ByRoleId(roleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query all users that has the specified role. action code: 10416
   */
  async function getUsers_ByRoleId(
    roleId: string,
    queryParams?: { after?: string | null; before?: string | null; limit?: number }
  ): Promise<ListAssignedUsersV4Response> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getUsers_ByRoleId(roleId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Parameters: - **userId**: string (required) - **namespace**: string (user’s namespace) (required) - **assignedNamespaces**: array of string (namespaces to be assigned on role) (required) action code: 10410
   */
  async function createUser_ByRoleId(roleId: string, data: AssignUserV4Request): Promise<AssignedUserV4Response> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createUser_ByRoleId(roleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Admin roles has its members listed in the role. Role can only be assigned to other users by the role&#39;s manager. action code: 10411
   */
  async function deleteMember_ByRoleId(roleId: string, data: RoleMembersRequestV3): Promise<unknown> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteMember_ByRoleId(roleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Admin roles has its members listed in the role. action code: 10416
   */
  async function getMembers_ByRoleId(
    roleId: string,
    queryParams?: { after?: string | null; before?: string | null; limit?: number }
  ): Promise<RoleMembersResponseV3> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getMembers_ByRoleId(roleId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Admin roles has its members listed in the role. Role can only be assigned to other users by the role&#39;s manager. action code: 10410
   */
  async function createMember_ByRoleId(roleId: string, data: RoleMembersRequestV3): Promise<unknown> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createMember_ByRoleId(roleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Role can only be assigned to other users by the role&#39;s manager. action code: 10409
   */
  async function deleteManager_ByRoleId(roleId: string, data: RoleManagersRequestV3): Promise<unknown> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteManager_ByRoleId(roleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Role can only be assigned to other users by the role&#39;s manager. action code: 10415
   */
  async function getManagers_ByRoleId(
    roleId: string,
    queryParams?: { after?: string | null; before?: string | null; limit?: number }
  ): Promise<RoleManagersResponsesV3> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getManagers_ByRoleId(roleId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Role can only be assigned to other users by the role&#39;s manager. action code: 10408
   */
  async function createManager_ByRoleId(roleId: string, data: RoleManagersRequestV3): Promise<unknown> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createManager_ByRoleId(roleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function deletePermission_ByRoleId(roleId: string, data: string[]): Promise<unknown> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deletePermission_ByRoleId(roleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint will ATTACH permission(s) into the role action code: 10404 Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 1. Minutes: 0-59 * / , - 1. Hours: 0-23 * / , - 1. Day of month: 1-31 * / , - L W 1. Month: 1-12 JAN-DEC * / , - 1. Day of week: 0-6 SUN-SAT * / , - L # 1. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 1. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 1. ,: separate items of a list, e.g. MON,WED,FRI in day of week 1. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 1. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 1. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 1. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
   */
  async function createPermission_ByRoleId(roleId: string, data: PermissionsV3): Promise<unknown> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createPermission_ByRoleId(roleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint will REPLACE role&#39;s permissions with the ones defined in body action code: 10405 Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 1. Minutes: 0-59 * / , - 1. Hours: 0-23 * / , - 1. Day of month: 1-31 * / , - L W 1. Month: 1-12 JAN-DEC * / , - 1. Day of week: 0-6 SUN-SAT * / , - L # 1. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 1. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 1. ,: separate items of a list, e.g. MON,WED,FRI in day of week 1. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 1. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 1. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 1. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
   */
  async function updatePermission_ByRoleId(roleId: string, data: PermissionsV3): Promise<unknown> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updatePermission_ByRoleId(roleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function deletePermission_ByRoleId_v4(roleId: string, data: string[]): Promise<unknown> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deletePermission_ByRoleId_v4(roleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint will ATTACH permission(s) into the role action code: 10404 Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 2. Minutes: 0-59 * / , - 3. Hours: 0-23 * / , - 4. Day of month: 1-31 * / , - L W 5. Month: 1-12 JAN-DEC * / , - 6. Day of week: 0-6 SUN-SAT * / , - L # 7. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 2. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 3. ,: separate items of a list, e.g. MON,WED,FRI in day of week 4. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 5. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 6. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 7. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
   */
  async function createPermission_ByRoleId_v4(roleId: string, data: PermissionsV3): Promise<RoleV4Response> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createPermission_ByRoleId_v4(roleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint will REPLACE role&#39;s permissions with the ones defined in body action code: 10405 Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 2. Minutes: 0-59 * / , - 3. Hours: 0-23 * / , - 4. Day of month: 1-31 * / , - L W 5. Month: 1-12 JAN-DEC * / , - 6. Day of week: 0-6 SUN-SAT * / , - L # 7. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 2. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 3. ,: separate items of a list, e.g. MON,WED,FRI in day of week 4. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 5. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 6. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 7. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
   */
  async function updatePermission_ByRoleId_v4(roleId: string, data: PermissionsV3): Promise<RoleV4Response> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updatePermission_ByRoleId_v4(roleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * action code: 10406
   */
  async function deletePermission_ByRoleId_ByResource_ByAction(roleId: string, resource: string, action: number): Promise<unknown> {
    const $ = new RolesAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deletePermission_ByRoleId_ByResource_ByAction(roleId, resource, action)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getRoles,
    createRole,
    getRoles_v4,
    createRole_v4,
    deleteRole_ByRoleId,
    getRole_ByRoleId,
    patchRole_ByRoleId,
    deleteRole_ByRoleId_v4,
    getRole_ByRoleId_v4,
    patchRole_ByRoleId_v4,
    deleteAdmin_ByRoleId,
    getAdmin_ByRoleId,
    createAdmin_ByRoleId,
    deleteUser_ByRoleId,
    getUsers_ByRoleId,
    createUser_ByRoleId,
    deleteMember_ByRoleId,
    getMembers_ByRoleId,
    createMember_ByRoleId,
    deleteManager_ByRoleId,
    getManagers_ByRoleId,
    createManager_ByRoleId,
    deletePermission_ByRoleId,
    createPermission_ByRoleId,
    updatePermission_ByRoleId,
    deletePermission_ByRoleId_v4,
    createPermission_ByRoleId_v4,
    updatePermission_ByRoleId_v4,
    deletePermission_ByRoleId_ByResource_ByAction
  }
}
