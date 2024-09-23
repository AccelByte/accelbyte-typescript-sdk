/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
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

export class RolesAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * action code: 10414
   */
  getRoles_v3(queryParams?: {
    after?: string | null
    before?: string | null
    isWildcard?: boolean | null
    limit?: number
  }): Promise<Response<RoleResponseWithManagersAndPaginationV3>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/roles'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RoleResponseWithManagersAndPaginationV3,
      'RoleResponseWithManagersAndPaginationV3'
    )
  }
  /**
   * Create role request body: - roleName: specify role name, alphanumeric, cannot have special character (required) - permissions: specify the permission that this role have - managers: specify list of user that will act as the managers of this role - members: specify list of user that will act as the members of this role - adminRole: specify if role is for admin user (default false) - isWildcard: specify if role can be assigned to wildcard (*) namespace (default false) - deletable: specify if role can be deleted or not (default true) action code: 10401
   */
  createRole_v3(data: RoleCreateV3Request): Promise<Response<RoleV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/roles'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RoleV3, 'RoleV3')
  }
  /**
   * action code: 10414
   */
  getRoles_v4(queryParams?: {
    adminRole?: boolean | null
    isWildcard?: boolean | null
    limit?: number
    offset?: number
  }): Promise<Response<ListRoleV4Response>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v4/admin/roles'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListRoleV4Response, 'ListRoleV4Response')
  }
  /**
   * Create role request body: - roleName: specify role name, alphanumeric, cannot have special character (required) - adminRole: specify if role is for admin user (default false) - isWildcard: specify if role can be assigned to wildcard (*) namespace (default false) - deletable: specify if role can be deleted (default true) action code: 10401
   */
  createRole_v4(data: RoleV4Request): Promise<Response<RoleV4Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/roles'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RoleV4Response, 'RoleV4Response')
  }
  /**
   * action code: 10403
   */
  deleteRole_ByRoleId_v3(roleId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/roles/{roleId}'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * action code: 10419
   */
  getRole_ByRoleId_v3(roleId: string): Promise<Response<RoleResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/roles/{roleId}'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RoleResponseV3, 'RoleResponseV3')
  }
  /**
   * Update role request body: - roleName: specify role name, alphanumeric, cannot have special character (required) - isWildcard: specify if role can be assigned to wildcard (*) namespace (default false) - deletable: specify if role can be deleted or not (optional) action code: 10402
   */
  patchRole_ByRoleId_v3(roleId: string, data: RoleUpdateRequestV3): Promise<Response<RoleResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/roles/{roleId}'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RoleResponseV3, 'RoleResponseV3')
  }
  /**
   * Removes role ID from user&#39;s Roles and NamespaceRoles before deleting the role. action code: 10403
   */
  deleteRole_ByRoleId_v4(roleId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/roles/{roleId}'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * action code: 10419
   */
  getRole_ByRoleId_v4(roleId: string): Promise<Response<RoleV4Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/roles/{roleId}'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RoleV4Response, 'RoleV4Response')
  }
  /**
   * Update role request body: - roleName: specify role name, alphanumeric, cannot have special character (required) - adminRole: specify if role is for admin user (default false) - isWildcard: specify if role can be assigned to wildcard (*) namespace (default false) - deletable: specify if role can be deleted (optional) action code: 10402
   */
  patchRole_ByRoleId_v4(roleId: string, data: RoleV4Request): Promise<Response<RoleV4Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/roles/{roleId}'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RoleV4Response, 'RoleV4Response')
  }
  /**
   * code: 10413
   */
  deleteAdmin_ByRoleId_v3(roleId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/roles/{roleId}/admin'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Admin roles has its members listed in the role. action code: 10420
   */
  getAdmin_ByRoleId_v3(roleId: string): Promise<Response<RoleAdminStatusResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/roles/{roleId}/admin'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RoleAdminStatusResponseV3,
      'RoleAdminStatusResponseV3'
    )
  }
  /**
   * Admin roles has its members listed in the role. Role can be set as admin role only when it has at least 1 manager. action code: 10412
   */
  updateAdmin_ByRoleId_v3(roleId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/roles/{roleId}/admin'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Current implementation will revoke user from role in all assigned namespaces. Parameters: - userId: string (required) - namespace: string (user’s namespace) (required) action code: 10411
   */
  deleteUser_ByRoleId_v4(roleId: string, data: RevokeUserV4Request): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/roles/{roleId}/users'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Query all users that has the specified role. action code: 10416
   */
  getUsers_ByRoleId_v4(
    roleId: string,
    queryParams?: { after?: string | null; before?: string | null; limit?: number }
  ): Promise<Response<ListAssignedUsersV4Response>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v4/admin/roles/{roleId}/users'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListAssignedUsersV4Response,
      'ListAssignedUsersV4Response'
    )
  }
  /**
   * Parameters: - **userId**: string (required) - **namespace**: string (user’s namespace) (required) - **assignedNamespaces**: array of string (namespaces to be assigned on role) (required) action code: 10410
   */
  updateUser_ByRoleId_v4(roleId: string, data: AssignUserV4Request): Promise<Response<AssignedUserV4Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/roles/{roleId}/users'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AssignedUserV4Response,
      'AssignedUserV4Response'
    )
  }
  /**
   * @deprecated
   * Admin roles has its members listed in the role. Role can only be assigned to other users by the role&#39;s manager. action code: 10411 Deprecate: Suggest to use this: AdminRevokeUserFromRoleV4
   */
  deleteMember_ByRoleId_v3(roleId: string, data: RoleMembersRequestV3): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/roles/{roleId}/members'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Admin roles has its members listed in the role. action code: 10416
   */
  getMembers_ByRoleId_v3(
    roleId: string,
    queryParams?: { after?: string | null; before?: string | null; limit?: number }
  ): Promise<Response<RoleMembersResponseV3>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/roles/{roleId}/members'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RoleMembersResponseV3, 'RoleMembersResponseV3')
  }
  /**
   * Admin roles has its members listed in the role. Role can only be assigned to other users by the role&#39;s manager. action code: 10410
   */
  updateMember_ByRoleId_v3(roleId: string, data: RoleMembersRequestV3): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/roles/{roleId}/members'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Role can only be assigned to other users by the role&#39;s manager. action code: 10409
   */
  deleteManager_ByRoleId_v3(roleId: string, data: RoleManagersRequestV3): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/roles/{roleId}/managers'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Role can only be assigned to other users by the role&#39;s manager. action code: 10415
   */
  getManagers_ByRoleId_v3(
    roleId: string,
    queryParams?: { after?: string | null; before?: string | null; limit?: number }
  ): Promise<Response<RoleManagersResponsesV3>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/roles/{roleId}/managers'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RoleManagersResponsesV3,
      'RoleManagersResponsesV3'
    )
  }
  /**
   * Role can only be assigned to other users by the role&#39;s manager. action code: 10408
   */
  updateManager_ByRoleId_v3(roleId: string, data: RoleManagersRequestV3): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/roles/{roleId}/managers'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  deletePermission_ByRoleId_v3(roleId: string, data: string[]): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/roles/{roleId}/permissions'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint will ATTACH permission(s) into the role action code: 10404 Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 1. Minutes: 0-59 * / , - 1. Hours: 0-23 * / , - 1. Day of month: 1-31 * / , - L W 1. Month: 1-12 JAN-DEC * / , - 1. Day of week: 0-6 SUN-SAT * / , - L # 1. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 1. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 1. ,: separate items of a list, e.g. MON,WED,FRI in day of week 1. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 1. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 1. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 1. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
   */
  updatePermission_ByRoleId_v3(roleId: string, data: PermissionsV3): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/roles/{roleId}/permissions'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint will REPLACE role&#39;s permissions with the ones defined in body action code: 10405 Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 1. Minutes: 0-59 * / , - 1. Hours: 0-23 * / , - 1. Day of month: 1-31 * / , - L W 1. Month: 1-12 JAN-DEC * / , - 1. Day of week: 0-6 SUN-SAT * / , - L # 1. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 1. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 1. ,: separate items of a list, e.g. MON,WED,FRI in day of week 1. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 1. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 1. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 1. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
   */
  updatePermission_ByRoleId_admin_v3(roleId: string, data: PermissionsV3): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/roles/{roleId}/permissions'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  deletePermission_ByRoleId_v4(roleId: string, data: string[]): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/roles/{roleId}/permissions'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint will ATTACH permission(s) into the role action code: 10404 Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 2. Minutes: 0-59 * / , - 3. Hours: 0-23 * / , - 4. Day of month: 1-31 * / , - L W 5. Month: 1-12 JAN-DEC * / , - 6. Day of week: 0-6 SUN-SAT * / , - L # 7. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 2. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 3. ,: separate items of a list, e.g. MON,WED,FRI in day of week 4. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 5. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 6. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 7. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
   */
  updatePermission_ByRoleId_v4(roleId: string, data: PermissionsV3): Promise<Response<RoleV4Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/roles/{roleId}/permissions'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RoleV4Response, 'RoleV4Response')
  }
  /**
   * This endpoint will REPLACE role&#39;s permissions with the ones defined in body action code: 10405 Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 2. Minutes: 0-59 * / , - 3. Hours: 0-23 * / , - 4. Day of month: 1-31 * / , - L W 5. Month: 1-12 JAN-DEC * / , - 6. Day of week: 0-6 SUN-SAT * / , - L # 7. Year: 1970-2099 * / , - Special characters: 1. *: all values in the fields, e.g. * in seconds fields indicates every second 2. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 3. ,: separate items of a list, e.g. MON,WED,FRI in day of week 4. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 5. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 6. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 7. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month.
   */
  updatePermission_ByRoleId_admin_v4(roleId: string, data: PermissionsV3): Promise<Response<RoleV4Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/roles/{roleId}/permissions'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RoleV4Response, 'RoleV4Response')
  }
  /**
   * action code: 10406
   */
  deletePermission_ByRoleId_ByResource_ByAction_v3(roleId: string, resource: string, action: number): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/roles/{roleId}/permissions/{resource}/{action}'
      .replace('{roleId}', roleId)
      .replace('{resource}', resource)
      .replace('{action}', String(action))
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
