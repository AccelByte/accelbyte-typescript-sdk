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
import { AssignRoleToMemberRequestV1 } from '../generated-definitions/AssignRoleToMemberRequestV1.js'
import { GetMemberRolesListResponseV1 } from '../generated-definitions/GetMemberRolesListResponseV1.js'
import { GetUserGroupInformationResponseV1 } from '../generated-definitions/GetUserGroupInformationResponseV1.js'
import { GroupRoles$ } from './endpoints/GroupRoles$.js'
import { RemoveRoleFromMemberRequestV1 } from '../generated-definitions/RemoveRoleFromMemberRequestV1.js'

export function GroupRolesApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * &lt;p&gt;Required Member Role Permission: &#34;GROUP:ROLE [READ]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to get list of member roles&lt;/p&gt; &lt;p&gt;Action Code: 73201&lt;/p&gt;
   */
  async function getRoles(queryParams?: { limit?: number; offset?: number }): Promise<GetMemberRolesListResponseV1> {
    const $ = new GroupRoles$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRoles(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;This endpoint is used to get list of member roles&lt;/p&gt; &lt;p&gt;Action Code: 73201&lt;/p&gt;
   */
  async function getRoles_ByNS(queryParams?: { limit?: number; offset?: number }): Promise<GetMemberRolesListResponseV1> {
    const $ = new GroupRoles$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRoles_ByNS(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Member Role Permission: &#34;GROUP:ROLE [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to remove role from group member&lt;/p&gt; &lt;p&gt;Action Code: 73204&lt;/p&gt;
   */
  async function deleteMember_ByMemberRoleId(memberRoleId: string, data: RemoveRoleFromMemberRequestV1): Promise<unknown> {
    const $ = new GroupRoles$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteMember_ByMemberRoleId(memberRoleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Member Role Permission: &#34;GROUP:ROLE [UPDATE]&lt;/p&gt; &lt;p&gt;This endpoint is used to assign role to group member&lt;/p&gt; &lt;p&gt;Action Code: 73204&lt;/p&gt;
   */
  async function createMember_ByMemberRoleId(
    memberRoleId: string,
    data: AssignRoleToMemberRequestV1
  ): Promise<GetUserGroupInformationResponseV1> {
    const $ = new GroupRoles$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createMember_ByMemberRoleId(memberRoleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Member Role Permission: &#34;GROUP:ROLE [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to remove role from group member&lt;/p&gt; &lt;p&gt;Action Code: 73204&lt;/p&gt;
   */
  async function deleteMember_ByMemberRoleId_ByGroupId(
    memberRoleId: string,
    groupId: string,
    data: RemoveRoleFromMemberRequestV1
  ): Promise<unknown> {
    const $ = new GroupRoles$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteMember_ByMemberRoleId_ByGroupId(memberRoleId, groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Member Role Permission: &#34;GROUP:ROLE [UPDATE]&lt;/p&gt; &lt;p&gt;This endpoint is used to assign role to group member&lt;/p&gt; &lt;p&gt;Action Code: 73204&lt;/p&gt;
   */
  async function createMember_ByMemberRoleId_ByGroupId(
    memberRoleId: string,
    groupId: string,
    data: AssignRoleToMemberRequestV1
  ): Promise<GetUserGroupInformationResponseV1> {
    const $ = new GroupRoles$(Network.create(requestConfig), namespace, cache)
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
