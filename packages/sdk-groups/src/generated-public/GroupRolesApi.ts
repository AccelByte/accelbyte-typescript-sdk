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
import { AssignRoleToMemberRequestV1 } from '../generated-definitions/AssignRoleToMemberRequestV1.js'
import { GetMemberRolesListResponseV1 } from '../generated-definitions/GetMemberRolesListResponseV1.js'
import { GetUserGroupInformationResponseV1 } from '../generated-definitions/GetUserGroupInformationResponseV1.js'
import { RemoveRoleFromMemberRequestV1 } from '../generated-definitions/RemoveRoleFromMemberRequestV1.js'
import { GroupRoles$ } from './endpoints/GroupRoles$.js'

export function GroupRolesApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
    const $ = new GroupRoles$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRoles(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRoles_v2(queryParams?: { limit?: number; offset?: number }): Promise<AxiosResponse<GetMemberRolesListResponseV1>> {
    const $ = new GroupRoles$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRoles_v2(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteMember_ByMemberRoleId(memberRoleId: string, data: RemoveRoleFromMemberRequestV1): Promise<AxiosResponse<unknown>> {
    const $ = new GroupRoles$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteMember_ByMemberRoleId(memberRoleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createMember_ByMemberRoleId(
    memberRoleId: string,
    data: AssignRoleToMemberRequestV1
  ): Promise<AxiosResponse<GetUserGroupInformationResponseV1>> {
    const $ = new GroupRoles$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createMember_ByMemberRoleId(memberRoleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteMember_ByMemberRoleId_ByGroupId_v2(
    memberRoleId: string,
    groupId: string,
    data: RemoveRoleFromMemberRequestV1
  ): Promise<AxiosResponse<unknown>> {
    const $ = new GroupRoles$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteMember_ByMemberRoleId_ByGroupId_v2(memberRoleId, groupId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createMember_ByMemberRoleId_ByGroupId_v2(
    memberRoleId: string,
    groupId: string,
    data: AssignRoleToMemberRequestV1
  ): Promise<AxiosResponse<GetUserGroupInformationResponseV1>> {
    const $ = new GroupRoles$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createMember_ByMemberRoleId_ByGroupId_v2(memberRoleId, groupId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Required Member Role Permission: &#34;GROUP:ROLE \[READ\]&#34; This endpoint is used to get list of member roles Action Code: 73201
     */
    getRoles,
    /**
     * This endpoint is used to get list of member roles Action Code: 73201
     */
    getRoles_v2,
    /**
     * Required Member Role Permission: &#34;GROUP:ROLE [UPDATE]&#34; This endpoint is used to remove role from group member Action Code: 73204
     */
    deleteMember_ByMemberRoleId,
    /**
     * Required Member Role Permission: &#34;GROUP:ROLE [UPDATE] This endpoint is used to assign role to group member Action Code: 73204
     */
    createMember_ByMemberRoleId,
    /**
     * Required Member Role Permission: &#34;GROUP:ROLE \[UPDATE\]&#34; This endpoint is used to remove role from group member Action Code: 73204
     */
    deleteMember_ByMemberRoleId_ByGroupId_v2,
    /**
     * Required Member Role Permission: &#34;GROUP:ROLE [UPDATE] This endpoint is used to assign role to group member Action Code: 73204
     */
    createMember_ByMemberRoleId_ByGroupId_v2
  }
}
