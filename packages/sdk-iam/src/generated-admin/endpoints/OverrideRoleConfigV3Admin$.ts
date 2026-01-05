/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { RoleOverrideResponse } from '../../generated-definitions/RoleOverrideResponse.js'
import { RoleOverrideSourceResponse } from '../../generated-definitions/RoleOverrideSourceResponse.js'
import { RoleOverrideStatsUpdateRequest } from '../../generated-definitions/RoleOverrideStatsUpdateRequest.js'
import { RoleOverrideUpdateRequest } from '../../generated-definitions/RoleOverrideUpdateRequest.js'
import { RolePermissionResponseV3 } from '../../generated-definitions/RolePermissionResponseV3.js'

export class OverrideRoleConfigV3Admin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get role override config. This API has upsert behavior, if there is no config yet, it will create a new one with inactive status.
   */
  getRoleoverride_v3(queryParams: { identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY' }): Promise<Response<RoleOverrideResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/roleoverride'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RoleOverrideResponse, 'RoleOverrideResponse')
  }
  /**
   * This API is for updating role override config. Note: This API has upsert behavior, if there is no config yet, it will create a new one first.
   */
  patchRoleoverride_v3(
    data: RoleOverrideUpdateRequest,
    queryParams: { identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY' }
  ): Promise<Response<RoleOverrideResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/roleoverride'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RoleOverrideResponse, 'RoleOverrideResponse')
  }
  /**
   * Get role source permission set.
   */
  getRoleoverrideSource_v3(queryParams: { identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY' }): Promise<Response<RoleOverrideSourceResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/roleoverride/source'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RoleOverrideSourceResponse,
      'RoleOverrideSourceResponse'
    )
  }
  /**
   * Enable or disable the target role override feature in path namespace. Note: This API has upsert behavior, if there is no config yet, it will create a new one first.
   */
  patchRoleoverrideStatus_v3(
    data: RoleOverrideStatsUpdateRequest,
    queryParams: { identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY' }
  ): Promise<Response<RoleOverrideResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/roleoverride/status'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RoleOverrideResponse, 'RoleOverrideResponse')
  }
  /**
   * Get role namespace permission set.
   */
  getPermissions_ByRoleId_v3(roleId: string): Promise<Response<RolePermissionResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/roleoverride/{roleId}/permissions'
      .replace('{namespace}', this.namespace)
      .replace('{roleId}', roleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RolePermissionResponseV3,
      'RolePermissionResponseV3'
    )
  }
}
