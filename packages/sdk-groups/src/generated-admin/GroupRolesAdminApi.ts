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
import { CreateMemberRoleRequestV1 } from '../generated-definitions/CreateMemberRoleRequestV1.js'
import { GetMemberRolesListResponseV1 } from '../generated-definitions/GetMemberRolesListResponseV1.js'
import { GroupRolesAdmin$ } from './endpoints/GroupRolesAdmin$.js'
import { MemberRoleResponseV1 } from '../generated-definitions/MemberRoleResponseV1.js'
import { UpdateMemberRolePermissionsRequestV1 } from '../generated-definitions/UpdateMemberRolePermissionsRequestV1.js'
import { UpdateMemberRoleRequestV1 } from '../generated-definitions/UpdateMemberRoleRequestV1.js'

export function GroupRolesAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * &lt;p&gt;Required permission ADMIN:NAMESPACE:{namespace}:GROUP:ROLE [READ]&lt;/p&gt; &lt;p&gt;This endpoint is used to get list of member roles&lt;/p&gt; &lt;p&gt;Action Code: 73201&lt;/p&gt;
   */
  async function getRoles(queryParams?: { limit?: number; offset?: number }): Promise<GetMemberRolesListResponseV1> {
    const $ = new GroupRolesAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getRoles(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission ADMIN:NAMESPACE:{namespace}:GROUP:ROLE [CREATE]&lt;/p&gt; &lt;p&gt;This endpoint is used to create new member role&lt;/p&gt; &lt;p&gt;Action Code: 73202&lt;/p&gt; &lt;br&gt; &lt;p&gt;memberRolePermissions example value :&lt;/p&gt; &lt;p&gt;&#34;action&#34;: 1&lt;/p&gt; &lt;p&gt;&#34;resourceName&#34;: &#34;GROUP:ROLE&#34;&lt;/p&gt; &lt;p&gt;The changes will give user with that role have a permission to create a role for new group member&lt;p/&gt;
   */
  async function createRole(data: CreateMemberRoleRequestV1): Promise<MemberRoleResponseV1> {
    const $ = new GroupRolesAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createRole(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission ADMIN:NAMESPACE:{namespace}:GROUP:ROLE [DELETE]&lt;/p&gt; &lt;p&gt;This endpoint is used to delete member role. Any member role can&#39;t be deleted if the specific role is applied to the configuration (admin and member role)&lt;/p&gt; &lt;p&gt;Action Code: 73207&lt;/p&gt;
   */
  async function deleteRole_ByMemberRoleId(memberRoleId: string): Promise<unknown> {
    const $ = new GroupRolesAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteRole_ByMemberRoleId(memberRoleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission ADMIN:NAMESPACE:{namespace}:GROUP:ROLE [READ]&lt;/p&gt; &lt;p&gt;This endpoint is used to get member role based on the role ID&lt;/p&gt; &lt;p&gt;Action Code: 73203&lt;/p&gt;
   */
  async function getRole_ByMemberRoleId(memberRoleId: string): Promise<MemberRoleResponseV1> {
    const $ = new GroupRolesAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getRole_ByMemberRoleId(memberRoleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission ADMIN:NAMESPACE:{namespace}:GROUP:ROLE [UPDATE]&lt;/p&gt; &lt;p&gt;This endpoint is used to update member role&lt;/p&gt; &lt;p&gt;Action Code: 73204&lt;/p&gt;
   */
  async function patchRole_ByMemberRoleId(memberRoleId: string, data: UpdateMemberRoleRequestV1): Promise<MemberRoleResponseV1> {
    const $ = new GroupRolesAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.patchRole_ByMemberRoleId(memberRoleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission ADMIN:NAMESPACE:{namespace}:GROUP:ROLE [UPDATE]&lt;/p&gt; &lt;p&gt;This endpoint is used to update member role permission. It will replace the existing permission based on the request from this endpoint&lt;/p&gt; &lt;p&gt;Action Code: 73205&lt;/p&gt; &lt;br&gt; &lt;p&gt;memberRolePermissions example value :&lt;/p&gt; &lt;p&gt;&#34;action&#34;: 2&lt;/p&gt; &lt;p&gt;&#34;resourceName&#34;: &#34;GROUP:ROLE&#34;&lt;/p&gt; &lt;p&gt;The changes will update user role to be able to read a role of other member &lt;p/&gt;
   */
  async function updatePermission_ByMemberRoleId(
    memberRoleId: string,
    data: UpdateMemberRolePermissionsRequestV1
  ): Promise<MemberRoleResponseV1> {
    const $ = new GroupRolesAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updatePermission_ByMemberRoleId(memberRoleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getRoles,
    createRole,
    deleteRole_ByMemberRoleId,
    getRole_ByMemberRoleId,
    patchRole_ByMemberRoleId,
    updatePermission_ByMemberRoleId
  }
}
