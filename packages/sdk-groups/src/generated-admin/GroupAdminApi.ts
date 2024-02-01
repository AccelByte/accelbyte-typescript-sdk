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
import { GetGroupListRequestV2 } from '../generated-definitions/GetGroupListRequestV2.js'
import { GetGroupsListResponseV1 } from '../generated-definitions/GetGroupsListResponseV1.js'
import { GetGroupsResponseV1 } from '../generated-definitions/GetGroupsResponseV1.js'
import { GroupAdmin$ } from './endpoints/GroupAdmin$.js'
import { GroupResponseV1 } from '../generated-definitions/GroupResponseV1.js'

export function GroupAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * &lt;p&gt;Required Permission: &#34;ADMIN:NAMESPACE:{namespace}:GROUP [READ]&#34; &lt;/p&gt; &lt;p&gt;Get list of groups. This endpoint will show any types of group&lt;/p&gt; &lt;p&gt;Action Code: 73301&lt;/p&gt;
   */
  async function getGroups(queryParams?: {
    configurationCode?: string | null
    groupName?: string | null
    groupRegion?: string | null
    limit?: number
    offset?: number
  }): Promise<GetGroupsListResponseV1> {
    const $ = new GroupAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getGroups(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Get list of groups by group Ids.&lt;/p&gt; &lt;p&gt;Action Code: 73303&lt;/p&gt;
   */
  async function createGroupBulk(data: GetGroupListRequestV2): Promise<GetGroupsResponseV1> {
    const $ = new GroupAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createGroupBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required Permission: &#34;ADMIN:NAMESPACE:{namespace}:GROUP:{groupId} [DELETE]&#34;&lt;/p&gt; &lt;p&gt;Delete existing group. It will check whether the groupID is exist before doing the process to delete the group.&lt;/p&gt; &lt;p&gt;Action Code: 73302&lt;/p&gt;
   */
  async function deleteGroup_ByGroupId(groupId: string): Promise<unknown> {
    const $ = new GroupAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteGroup_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required Permission: &#34;ADMIN:NAMESPACE:{namespace}:GROUP [READ]&#34;&lt;/p&gt; &lt;p&gt;Get single group information. This endpoint will show the group information by the groupId&lt;/p&gt; &lt;p&gt;Action Code: 73306&lt;/p&gt;
   */
  async function getGroup_ByGroupId(groupId: string): Promise<GroupResponseV1> {
    const $ = new GroupAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getGroup_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getGroups,
    createGroupBulk,
    deleteGroup_ByGroupId,
    getGroup_ByGroupId
  }
}
