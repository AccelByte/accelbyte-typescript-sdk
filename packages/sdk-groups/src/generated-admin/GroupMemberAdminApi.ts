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
import { GetGroupMemberListResponseV1 } from '../generated-definitions/GetGroupMemberListResponseV1.js'
import { GetUserGroupInformationResponseV1 } from '../generated-definitions/GetUserGroupInformationResponseV1.js'
import { GroupMemberAdmin$ } from './endpoints/GroupMemberAdmin$.js'

export function GroupMemberAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to get user joined group information.&lt;/p&gt; &lt;p&gt;Get user group joined information. If user does not belong to any group, it will return warning to give information about it&lt;/p&gt; &lt;p&gt;Group Member Status:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;JOINED: status of user already joined to a group&lt;/li&gt; &lt;/ul&gt;
   */
  async function getGroups_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<GetGroupMemberListResponseV1> {
    const $ = new GroupMemberAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getGroups_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required permission ADMIN:NAMESPACE:{namespace}:GROUP:MEMBER [READ] &lt;/p&gt; &lt;p&gt;This endpoint is used to get list of group members.&lt;/p&gt; &lt;p&gt;Action Code: 73410&lt;/p&gt;
   */
  async function getMembers_ByGroupId(
    groupId: string,
    queryParams?: { limit?: number; offset?: number; order?: string | null }
  ): Promise<GetGroupMemberListResponseV1> {
    const $ = new GroupMemberAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getMembers_ByGroupId(groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required Permission: &#34;ADMIN:NAMESPACE:{namespace}:GROUP:MEMBER [READ]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to get user group status information.&lt;/p&gt;
   */
  async function getStatus_ByUserId_ByGroupId(userId: string, groupId: string): Promise<GetUserGroupInformationResponseV1> {
    const $ = new GroupMemberAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getStatus_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getGroups_ByUserId,
    getMembers_ByGroupId,
    getStatus_ByUserId_ByGroupId
  }
}
