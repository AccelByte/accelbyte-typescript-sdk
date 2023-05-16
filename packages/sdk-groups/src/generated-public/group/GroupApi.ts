/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { GetGroupListRequestV2 } from './definitions/GetGroupListRequestV2.js'
import { GetGroupsListResponseV1 } from './definitions/GetGroupsListResponseV1.js'
import { GetGroupsResponseV1 } from './definitions/GetGroupsResponseV1.js'
import { Group$ } from './endpoints/Group$.js'
import { GroupResponseV1 } from './definitions/GroupResponseV1.js'
import { PublicCreateNewGroupRequestV1 } from './definitions/PublicCreateNewGroupRequestV1.js'
import { UpdateGroupCustomAttributesRequestV1 } from './definitions/UpdateGroupCustomAttributesRequestV1.js'
import { UpdateGroupCustomRuleRequestV1 } from './definitions/UpdateGroupCustomRuleRequestV1.js'
import { UpdateGroupPredefinedRuleRequestV1 } from './definitions/UpdateGroupPredefinedRuleRequestV1.js'
import { UpdateGroupRequestV1 } from './definitions/UpdateGroupRequestV1.js'

export function GroupApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Get list of groups. This endpoint will only show OPEN and PUBLIC group type. This endpoint can search based on the group name by filling the &#34;groupName&#34; query parameter&lt;/p&gt; &lt;p&gt;Action Code: 73303&lt;/p&gt;
   */
  async function getGroups(queryParams?: {
    groupName?: string | null
    groupRegion?: string | null
    limit?: number
    offset?: number
  }): Promise<GetGroupsListResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getGroups(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to create new group&lt;/p&gt; &lt;p&gt;There are some fields that needs to be fulfilled&lt;/p&gt; &lt;ul&gt; &lt;li&gt;&lt;b&gt;groupDescription&lt;/b&gt;: the description of the group (optional)&lt;/li&gt; &lt;li&gt;&lt;b&gt;groupIcon&lt;/b&gt;: group icon URL link (optional)&lt;/li&gt; &lt;li&gt;&lt;b&gt;groupName&lt;/b&gt;: name of the group&lt;/li&gt; &lt;li&gt;&lt;b&gt;groupRegion&lt;/b&gt;: region of the group&lt;/li&gt; &lt;li&gt;&lt;b&gt;groupRules&lt;/b&gt;: rules for specific group. It consists of groupCustomRule that can be used to save custom rule, and groupPredefinedRules that has similar usage with configuration, but this rule only works in specific group&lt;/li&gt; &lt;li&gt;&lt;b&gt;allowedAction&lt;/b&gt;: available action in group service. It consist of joinGroup and inviteGroup&lt;/li&gt; &lt;li&gt;&lt;b&gt;ruleAttribute&lt;/b&gt;: attribute of the player that needs to be checked&lt;/li&gt; &lt;li&gt;&lt;b&gt;ruleCriteria&lt;/b&gt;: criteria of the value. The value will be in enum of EQUAL, MINIMUM, MAXIMUM&lt;/li&gt; &lt;li&gt;&lt;b&gt;ruleValue&lt;/b&gt;: value that needs to be checked&lt;/li&gt; &lt;li&gt;&lt;b&gt;customAttributes&lt;/b&gt;: additional custom group attributes (optional)&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Action Code: 73304&lt;/p&gt;
   */
  async function createGroup(data: PublicCreateNewGroupRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createGroup(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to create new group&lt;/p&gt; &lt;p&gt;There are some fields that needs to be fulfilled&lt;/p&gt; &lt;ul&gt; &lt;li&gt;&lt;b&gt;groupDescription&lt;/b&gt;: the description of the group (optional)&lt;/li&gt; &lt;li&gt;&lt;b&gt;groupIcon&lt;/b&gt;: group icon URL link (optional)&lt;/li&gt; &lt;li&gt;&lt;b&gt;groupName&lt;/b&gt;: name of the group&lt;/li&gt; &lt;li&gt;&lt;b&gt;groupRegion&lt;/b&gt;: region of the group&lt;/li&gt; &lt;li&gt;&lt;b&gt;groupRules&lt;/b&gt;: rules for specific group. It consists of groupCustomRule that can be used to save custom rule, and groupPredefinedRules that has similar usage with configuration, but this rule only works in specific group&lt;/li&gt; &lt;li&gt;&lt;b&gt;allowedAction&lt;/b&gt;: available action in group service. It consist of joinGroup and inviteGroup&lt;/li&gt; &lt;li&gt;&lt;b&gt;ruleAttribute&lt;/b&gt;: attribute of the player that needs to be checked&lt;/li&gt; &lt;li&gt;&lt;b&gt;ruleCriteria&lt;/b&gt;: criteria of the value. The value will be in enum of EQUAL, MINIMUM, MAXIMUM&lt;/li&gt; &lt;li&gt;&lt;b&gt;ruleValue&lt;/b&gt;: value that needs to be checked&lt;/li&gt; &lt;li&gt;&lt;b&gt;customAttributes&lt;/b&gt;: additional custom group attributes (optional)&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Action Code: 73304&lt;/p&gt;
   */
  async function createGroup_ByNS(data: PublicCreateNewGroupRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createGroup_ByNS(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Get list of groups by group Ids.&lt;/p&gt; &lt;p&gt;Action Code: 73303&lt;/p&gt;
   */
  async function createGroupBulk(data: GetGroupListRequestV2): Promise<GetGroupsResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createGroupBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [DELETE]&#34;&lt;/p&gt; &lt;p&gt;Delete existing group. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73305&lt;/p&gt;
   */
  async function deleteGroup_ByGroupId(groupId: string): Promise<unknown> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteGroup_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Get single group information. This endpoint will show the group information by the groupId&lt;/p&gt; &lt;p&gt;Action Code: 73306&lt;/p&gt;
   */
  async function getGroup_ByGroupId(groupId: string): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getGroup_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73307&lt;/p&gt;
   */
  async function patchGroup_ByGroupId(groupId: string, data: UpdateGroupRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchGroup_ByGroupId(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73307&lt;/p&gt;
   */
  async function updateGroup_ByGroupId(groupId: string, data: UpdateGroupRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateGroup_ByGroupId(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [DELETE]&#34;&lt;/p&gt; &lt;p&gt;Delete existing group. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73305&lt;/p&gt;
   */
  async function deleteGroup_ByGroupId_ByNS(groupId: string): Promise<unknown> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteGroup_ByGroupId_ByNS(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73307&lt;/p&gt;
   */
  async function patchGroup_ByGroupId_ByNS(groupId: string, data: UpdateGroupRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchGroup_ByGroupId_ByNS(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73307&lt;/p&gt;
   */
  async function updateGroup_ByGroupId_ByNS(groupId: string, data: UpdateGroupRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateGroup_ByGroupId_ByNS(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Update group custom rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73308&lt;/p&gt;
   */
  async function updateRuleCustom_ByGroupId(groupId: string, data: UpdateGroupCustomRuleRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateRuleCustom_ByGroupId(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Update group custom rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73308&lt;/p&gt;
   */
  async function updateRuleCustom_ByGroupId_ByNS(groupId: string, data: UpdateGroupCustomRuleRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateRuleCustom_ByGroupId_ByNS(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Requires valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint replaces current group custom attributes entirely. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73311&lt;/p&gt;
   */
  async function updateAttributeCustom_ByGroupId(groupId: string, data: UpdateGroupCustomAttributesRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateAttributeCustom_ByGroupId(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Requires valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint replaces current group custom attributes entirely. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73311&lt;/p&gt;
   */
  async function updateAttributeCustom_ByGroupId_ByNS(
    groupId: string,
    data: UpdateGroupCustomAttributesRequestV1
  ): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateAttributeCustom_ByGroupId_ByNS(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;Delete group predefined rule based on the allowed action. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73309&lt;/p&gt;
   */
  async function deleteRuleDefined_ByGroupId_ByAllowedAction(allowedAction: string, groupId: string): Promise<unknown> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteRuleDefined_ByGroupId_ByAllowedAction(allowedAction, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;Update predefined group rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;If the rule action is not defined in the group, it will be added immediately to the predefined group rule&lt;/p&gt; &lt;p&gt;Action Code: 73310&lt;/p&gt;
   */
  async function updateRuleDefined_ByGroupId_ByAllowedAction(
    allowedAction: string,
    groupId: string,
    data: UpdateGroupPredefinedRuleRequestV1
  ): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateRuleDefined_ByGroupId_ByAllowedAction(allowedAction, groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;Delete group predefined rule based on the allowed action. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73309&lt;/p&gt;
   */
  async function deleteRuleDefined_ByGroupId_ByAllowedAction_ByNS(allowedAction: string, groupId: string): Promise<unknown> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteRuleDefined_ByGroupId_ByAllowedAction_ByNS(allowedAction, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;Update predefined group rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;If the rule action is not defined in the group, it will be added immediately to the predefined group rule&lt;/p&gt; &lt;p&gt;Action Code: 73310&lt;/p&gt;
   */
  async function updateRuleDefined_ByGroupId_ByAllowedAction_ByNS(
    allowedAction: string,
    groupId: string,
    data: UpdateGroupPredefinedRuleRequestV1
  ): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateRuleDefined_ByGroupId_ByAllowedAction_ByNS(allowedAction, groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getGroups,
    createGroup,
    createGroup_ByNS,
    createGroupBulk,
    deleteGroup_ByGroupId,
    getGroup_ByGroupId,
    patchGroup_ByGroupId,
    updateGroup_ByGroupId,
    deleteGroup_ByGroupId_ByNS,
    patchGroup_ByGroupId_ByNS,
    updateGroup_ByGroupId_ByNS,
    updateRuleCustom_ByGroupId,
    updateRuleCustom_ByGroupId_ByNS,
    updateAttributeCustom_ByGroupId,
    updateAttributeCustom_ByGroupId_ByNS,
    deleteRuleDefined_ByGroupId_ByAllowedAction,
    updateRuleDefined_ByGroupId_ByAllowedAction,
    deleteRuleDefined_ByGroupId_ByAllowedAction_ByNS,
    updateRuleDefined_ByGroupId_ByAllowedAction_ByNS
  }
}
