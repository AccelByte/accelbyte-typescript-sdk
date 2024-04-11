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
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { AssignRoleToMemberRequestV1 } from '../generated-definitions/AssignRoleToMemberRequestV1.js'
import { GetMemberRolesListResponseV1 } from '../generated-definitions/GetMemberRolesListResponseV1.js'
import { GetUserGroupInformationResponseV1 } from '../generated-definitions/GetUserGroupInformationResponseV1.js'
import { GroupRoles$ } from './endpoints/GroupRoles$.js'
import { RemoveRoleFromMemberRequestV1 } from '../generated-definitions/RemoveRoleFromMemberRequestV1.js'

export function GroupRolesApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * Required Member Role Permission: &#34;GROUP:ROLE \[READ\]&#34; This endpoint is used to get list of member roles Action Code: 73201
   */
  async function getRoles(queryParams?: { limit?: number; offset?: number }): Promise<GetMemberRolesListResponseV1> {
    const $ = new GroupRoles$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getRoles(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to get list of member roles Action Code: 73201
   */
  async function getRoles_ByNS(queryParams?: { limit?: number; offset?: number }): Promise<GetMemberRolesListResponseV1> {
    const $ = new GroupRoles$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getRoles_ByNS(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Member Role Permission: &#34;GROUP:ROLE [UPDATE]&#34; This endpoint is used to remove role from group member Action Code: 73204
   */
  async function deleteMember_ByMemberRoleId(memberRoleId: string, data: RemoveRoleFromMemberRequestV1): Promise<unknown> {
    const $ = new GroupRoles$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteMember_ByMemberRoleId(memberRoleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Member Role Permission: &#34;GROUP:ROLE [UPDATE] This endpoint is used to assign role to group member Action Code: 73204
   */
  async function createMember_ByMemberRoleId(
    memberRoleId: string,
    data: AssignRoleToMemberRequestV1
  ): Promise<GetUserGroupInformationResponseV1> {
    const $ = new GroupRoles$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createMember_ByMemberRoleId(memberRoleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Member Role Permission: &#34;GROUP:ROLE \[UPDATE\]&#34; This endpoint is used to remove role from group member Action Code: 73204
   */
  async function deleteMember_ByMemberRoleId_ByGroupId(
    memberRoleId: string,
    groupId: string,
    data: RemoveRoleFromMemberRequestV1
  ): Promise<unknown> {
    const $ = new GroupRoles$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteMember_ByMemberRoleId_ByGroupId(memberRoleId, groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Member Role Permission: &#34;GROUP:ROLE [UPDATE] This endpoint is used to assign role to group member Action Code: 73204
   */
  async function createMember_ByMemberRoleId_ByGroupId(
    memberRoleId: string,
    groupId: string,
    data: AssignRoleToMemberRequestV1
  ): Promise<GetUserGroupInformationResponseV1> {
    const $ = new GroupRoles$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createMember_ByMemberRoleId_ByGroupId(memberRoleId, groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getRoles,
    getRoles_ByNS,
    deleteMember_ByMemberRoleId,
    createMember_ByMemberRoleId,
    deleteMember_ByMemberRoleId_ByGroupId,
    createMember_ByMemberRoleId_ByGroupId
  }
}
