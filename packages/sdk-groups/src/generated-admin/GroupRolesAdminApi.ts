/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
import { CreateMemberRoleRequestV1 } from '../generated-definitions/CreateMemberRoleRequestV1.js'
import { GetMemberRolesListResponseV1 } from '../generated-definitions/GetMemberRolesListResponseV1.js'
import { MemberRoleResponseV1 } from '../generated-definitions/MemberRoleResponseV1.js'
import { UpdateMemberRolePermissionsRequestV1 } from '../generated-definitions/UpdateMemberRolePermissionsRequestV1.js'
import { UpdateMemberRoleRequestV1 } from '../generated-definitions/UpdateMemberRoleRequestV1.js'
import { GroupRolesAdmin$ } from './endpoints/GroupRolesAdmin$.js'

export function GroupRolesAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getRoles(queryParams?: { limit?: number; offset?: number }): Promise<AxiosResponse<GetMemberRolesListResponseV1>> {
    const $ = new GroupRolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRoles(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createRole(data: CreateMemberRoleRequestV1): Promise<AxiosResponse<MemberRoleResponseV1>> {
    const $ = new GroupRolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createRole(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteRole_ByMemberRoleId(memberRoleId: string): Promise<AxiosResponse<unknown>> {
    const $ = new GroupRolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteRole_ByMemberRoleId(memberRoleId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRole_ByMemberRoleId(memberRoleId: string): Promise<AxiosResponse<MemberRoleResponseV1>> {
    const $ = new GroupRolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRole_ByMemberRoleId(memberRoleId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchRole_ByMemberRoleId(
    memberRoleId: string,
    data: UpdateMemberRoleRequestV1
  ): Promise<AxiosResponse<MemberRoleResponseV1>> {
    const $ = new GroupRolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchRole_ByMemberRoleId(memberRoleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePermission_ByMemberRoleId(
    memberRoleId: string,
    data: UpdateMemberRolePermissionsRequestV1
  ): Promise<AxiosResponse<MemberRoleResponseV1>> {
    const $ = new GroupRolesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePermission_ByMemberRoleId(memberRoleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This endpoint is used to get list of member roles Action Code: 73201
     */
    getRoles,
    /**
     * This endpoint is used to create new member role Action Code: 73202 memberRolePermissions example value : &#34;action&#34;: 1 &#34;resourceName&#34;: &#34;GROUP:ROLE&#34; The changes will give user with that role have a permission to create a role for new group member
     */
    createRole,
    /**
     * This endpoint is used to delete member role. Any member role can&#39;t be deleted if the specific role is applied to the configuration (admin and member role) Action Code: 73207
     */
    deleteRole_ByMemberRoleId,
    /**
     * This endpoint is used to get member role based on the role ID Action Code: 73203
     */
    getRole_ByMemberRoleId,
    /**
     * This endpoint is used to update member role Action Code: 73204
     */
    patchRole_ByMemberRoleId,
    /**
     * This endpoint is used to update member role permission. It will replace the existing permission based on the request from this endpoint Action Code: 73205 memberRolePermissions example value : &#34;action&#34;: 2 &#34;resourceName&#34;: &#34;GROUP:ROLE&#34; The changes will update user role to be able to read a role of other member
     */
    updatePermission_ByMemberRoleId
  }
}
