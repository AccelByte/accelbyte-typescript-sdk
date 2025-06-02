/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
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

export class Roles$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles [GET]_**
   */
  getRoles(queryParams?: { isWildcard?: string | null }): Promise<Response<RoleResponseWithManagersArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/roles'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RoleResponseWithManagersArray,
      'RoleResponseWithManagersArray'
    )
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated Role can only be assigned to other users by the role&#39;s manager. If role is an administrator role (i.e. AdminRole == true), it will list out the role&#39;s members. Administrator role can be created only when at least 1 manager is specified. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles [POST]_**
   */
  createRole(data: RoleCreateRequest): Promise<Response<Role>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/roles'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, Role, 'Role')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId} [DELETE]_**
   */
  deleteRole_ByRoleId(roleId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/roles/{roleId}'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId} [GET]_**
   */
  getRole_ByRoleId(roleId: string): Promise<Response<RoleResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/roles/{roleId}'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RoleResponse, 'RoleResponse')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId} [PATCH]_**
   */
  updateRole_ByRoleId(roleId: string, data: RoleUpdateRequest): Promise<Response<RoleResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/roles/{roleId}'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RoleResponse, 'RoleResponse')
  }
  /**
   * This endpoint is used to get all non-admin role. action code: 10418
   */
  getRoles_v3(queryParams?: {
    after?: string | null
    before?: string | null
    isWildcard?: boolean | null
    limit?: number
  }): Promise<Response<RoleNamesResponseV3>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/public/roles'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RoleNamesResponseV3, 'RoleNamesResponseV3')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/admin [DELETE]_**
   */
  deleteAdmin_ByRoleId(roleId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/roles/{roleId}/admin'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated Admin roles has its members listed in the role. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/admin [GET]_**
   */
  getAdmin_ByRoleId(roleId: string): Promise<Response<RoleAdminStatusResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/roles/{roleId}/admin'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RoleAdminStatusResponse,
      'RoleAdminStatusResponse'
    )
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated Admin roles has its members listed in the role. Role can be set as admin role only when it has at least 1 manager. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/admin [POST]_**
   */
  updateAdmin_ByRoleId(roleId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/roles/{roleId}/admin'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/members [DELETE]_**
   */
  deleteMember_ByRoleId(roleId: string, data: RoleMembersRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/roles/{roleId}/members'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/members [GET]_**
   */
  getMembers_ByRoleId(roleId: string): Promise<Response<RoleMembersResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/roles/{roleId}/members'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RoleMembersResponse, 'RoleMembersResponse')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated Admin roles has its members listed in the role. Role can only be assigned to other users by the role&#39;s manager. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/members [POST]_**
   */
  updateMember_ByRoleId(roleId: string, data: RoleMembersRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/roles/{roleId}/members'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/managers [DELETE]_**
   */
  deleteManager_ByRoleId(roleId: string, data: RoleManagersRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/roles/{roleId}/managers'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated Role can only be assigned to other users by the role&#39;s manager. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/managers [GET]_**
   */
  getManagers_ByRoleId(roleId: string): Promise<Response<RoleManagersResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/roles/{roleId}/managers'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RoleManagersResponse, 'RoleManagersResponse')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated Role can only be assigned to other users by the role&#39;s manager. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/managers [POST]_**
   */
  updateManager_ByRoleId(roleId: string, data: RoleManagersRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/roles/{roleId}/managers'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint is used to get non-admin role based on specify roleId. action code : 10417
   */
  getRole_ByRoleId_v3(roleId: string): Promise<Response<RoleResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/public/roles/{roleId}'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RoleResponse, 'RoleResponse')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated This endpoint will REPLACE role&#39;s permissions with the ones defined in body Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: 1. Seconds: 0-59 * / , - 2. Minutes: 0-59 * / , - 3. Hours: 0-23 * / , - 4. Day of month: 1-31 * / , - L W 5. Month: 1-12 JAN-DEC * / , - 6. Day of week: 0-6 SUN-SAT * / , - L # 7. Year: 1970-2099 * / , - Special characters: 1. \*: all values in the fields, e.g. \* in seconds fields indicates every second 2. /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter 3. ,: separate items of a list, e.g. MON,WED,FRI in day of week 4. -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive 5. L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. 6. W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; 7. #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/permissions [POST]_**
   */
  updatePermission_ByRoleId(roleId: string, data: Permissions): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/roles/{roleId}/permissions'.replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/admin/roles/{roleId}/permissions/{resource}/{action} [DELETE]_** - **Substitute endpoint: _/iam/v4/admin/roles/{roleId}/permissions [DELETE]_**
   */
  deletePermission_ByRoleId_ByResource_ByAction(roleId: string, resource: string, action: number): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/roles/{roleId}/permissions/{resource}/{action}'
      .replace('{roleId}', roleId)
      .replace('{resource}', resource)
      .replace('{action}', String(action))
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated This endpoint will update existing permission (bitwise OR the action) if found one with same resource, otherwise it will append a new permission Schedule contains cron string or date range (both are UTC, also in cron syntax) to indicate when a permission and action are in effect. Both schedule types accepts quartz compatible cron syntax e.g. * * * * * * *. In ranged schedule, first element will be start date, and second one will be end date If schedule is set, the scheduled action must be valid too, that is between 1 to 15, inclusive Syntax reference Fields: - Seconds: 0-59 * / , - - Minutes: 0-59 * / , - - Hours: 0-23 * / , - - Day of month: 1-31 * / , - L W - Month: 1-12 JAN-DEC * / , - - Day of week: 0-6 SUN-SAT * / , - L # - Year: 1970-2099 * / , - Special characters: - \**: all values in the fields, e.g. \* in seconds fields indicates every second - /: increments of ranges, e.g. 3-59/15 in the minute field indicate the third minute of the hour and every 15 minutes thereafter - ,: separate items of a list, e.g. MON,WED,FRI in day of week - -: range, e.g. 2010-2018 indicates every year between 2010 and 2018, inclusive - L: last, e.g. When used in the day-of-week field, it allows you to specify constructs such as &#34;the last Friday&#34; (5L) of a given month. In the day-of-month field, it specifies the last day of the month. - W: business day, e.g. if you were to specify 15W as the value for the day-of-month field, the meaning is: &#34;the nearest business day to the 15th of the month.&#34; - #: must be followed by a number between one and five. It allows you to specify constructs such as &#34;the second Friday&#34; of a given month. ### Endpoint migration guide - **Substitute endpoint(update): _/iam/v3/admin/roles/{roleId}/permissions [PUT]_** - **Substitute endpoint(create): _/iam/v3/admin/roles/{roleId}/permissions [POST]_**
   */
  updatePermission_ByRoleId_ByResource_ByAction(
    roleId: string,
    resource: string,
    action: number,
    data: UpdatePermissionScheduleRequest
  ): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/roles/{roleId}/permissions/{resource}/{action}'
      .replace('{roleId}', roleId)
      .replace('{resource}', resource)
      .replace('{action}', String(action))
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
