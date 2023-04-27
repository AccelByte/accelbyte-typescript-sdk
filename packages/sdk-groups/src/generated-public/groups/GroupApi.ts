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
   * <p>Required valid user authentication </p> <p>Get list of groups. This endpoint will only show OPEN and PUBLIC group type. This endpoint can search based on the group name by filling the "groupName" query parameter</p> <p>Action Code: 73303</p>
   */
  async function getGroups(queryParams?: {
    limit?: number
    offset?: number
    groupName?: string | null
    groupRegion?: string | null
  }): Promise<GetGroupsListResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getGroups(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>This endpoint is used to create new group</p> <p>There are some fields that needs to be fulfilled</p> <ul> <li><b>groupDescription</b>: the description of the group (optional)</li> <li><b>groupIcon</b>: group icon URL link (optional)</li> <li><b>groupName</b>: name of the group</li> <li><b>groupRegion</b>: region of the group</li> <li><b>groupRules</b>: rules for specific group. It consists of groupCustomRule that can be used to save custom rule, and groupPredefinedRules that has similar usage with configuration, but this rule only works in specific group</li> <li><b>allowedAction</b>: available action in group service. It consist of joinGroup and inviteGroup</li> <li><b>ruleAttribute</b>: attribute of the player that needs to be checked</li> <li><b>ruleCriteria</b>: criteria of the value. The value will be in enum of EQUAL, MINIMUM, MAXIMUM</li> <li><b>ruleValue</b>: value that needs to be checked</li> <li><b>customAttributes</b>: additional custom group attributes (optional)</li> </ul> <p>Action Code: 73304</p>
   */
  async function createGroup(data: PublicCreateNewGroupRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createGroup(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>This endpoint is used to create new group</p> <p>There are some fields that needs to be fulfilled</p> <ul> <li><b>groupDescription</b>: the description of the group (optional)</li> <li><b>groupIcon</b>: group icon URL link (optional)</li> <li><b>groupName</b>: name of the group</li> <li><b>groupRegion</b>: region of the group</li> <li><b>groupRules</b>: rules for specific group. It consists of groupCustomRule that can be used to save custom rule, and groupPredefinedRules that has similar usage with configuration, but this rule only works in specific group</li> <li><b>allowedAction</b>: available action in group service. It consist of joinGroup and inviteGroup</li> <li><b>ruleAttribute</b>: attribute of the player that needs to be checked</li> <li><b>ruleCriteria</b>: criteria of the value. The value will be in enum of EQUAL, MINIMUM, MAXIMUM</li> <li><b>ruleValue</b>: value that needs to be checked</li> <li><b>customAttributes</b>: additional custom group attributes (optional)</li> </ul> <p>Action Code: 73304</p>
   */
  async function createGroup_ByNS(data: PublicCreateNewGroupRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createGroup_ByNS(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Get list of groups by group Ids.</p> <p>Action Code: 73303</p>
   */
  async function createGroupBulk(data: GetGroupListRequestV2): Promise<GetGroupsResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createGroupBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Get single group information. This endpoint will show the group information by the groupId</p> <p>Action Code: 73306</p>
   */
  async function getGroup_ByGroupId(groupId: string): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getGroup_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP [UPDATE]"</p> <p>Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73307</p>
   */
  async function updateGroup_ByGroupId(groupId: string, data: UpdateGroupRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateGroup_ByGroupId(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP [DELETE]"</p> <p>Delete existing group. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73305</p>
   */
  async function deleteGroup_ByGroupId(groupId: string): Promise<unknown> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteGroup_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP [UPDATE]"</p> <p>Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73307</p>
   */
  async function patchGroup_ByGroupId(groupId: string, data: UpdateGroupRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchGroup_ByGroupId(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP [UPDATE]"</p> <p>Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73307</p>
   */
  async function updateGroup_ByGroupId_ByNS(groupId: string, data: UpdateGroupRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateGroup_ByGroupId_ByNS(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP [DELETE]"</p> <p>Delete existing group. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73305</p>
   */
  async function deleteGroup_ByGroupId_ByNS(groupId: string): Promise<unknown> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteGroup_ByGroupId_ByNS(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP [UPDATE]"</p> <p>Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73307</p>
   */
  async function patchGroup_ByGroupId_ByNS(groupId: string, data: UpdateGroupRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchGroup_ByGroupId_ByNS(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Update group custom rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73308</p>
   */
  async function updateRuleCustom_ByGroupId(groupId: string, data: UpdateGroupCustomRuleRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateRuleCustom_ByGroupId(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Update group custom rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73308</p>
   */
  async function updateRuleCustom_ByGroupId_ByNS(groupId: string, data: UpdateGroupCustomRuleRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateRuleCustom_ByGroupId_ByNS(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Requires valid user authentication </p> <p>Required Member Role Permission: "GROUP [UPDATE]"</p> <p>This endpoint replaces current group custom attributes entirely. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73311</p>
   */
  async function updateAttributeCustom_ByGroupId(groupId: string, data: UpdateGroupCustomAttributesRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateAttributeCustom_ByGroupId(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Requires valid user authentication </p> <p>Required Member Role Permission: "GROUP [UPDATE]"</p> <p>This endpoint replaces current group custom attributes entirely. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73311</p>
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
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP [UPDATE]"</p> <p>Update predefined group rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>If the rule action is not defined in the group, it will be added immediately to the predefined group rule</p> <p>Action Code: 73310</p>
   */
  async function updateRuleDefined_ByGroupId_ByAllowedAction(
    groupId: string,
    allowedAction: string,
    data: UpdateGroupPredefinedRuleRequestV1
  ): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateRuleDefined_ByGroupId_ByAllowedAction(groupId, allowedAction, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP [UPDATE]"</p> <p>Delete group predefined rule based on the allowed action. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73309</p>
   */
  async function deleteRuleDefined_ByGroupId_ByAllowedAction(groupId: string, allowedAction: string): Promise<unknown> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteRuleDefined_ByGroupId_ByAllowedAction(groupId, allowedAction)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP [UPDATE]"</p> <p>Update predefined group rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>If the rule action is not defined in the group, it will be added immediately to the predefined group rule</p> <p>Action Code: 73310</p>
   */
  async function updateRuleDefined_ByGroupId_ByAllowedAction_ByNS(
    groupId: string,
    allowedAction: string,
    data: UpdateGroupPredefinedRuleRequestV1
  ): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateRuleDefined_ByGroupId_ByAllowedAction_ByNS(groupId, allowedAction, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP [UPDATE]"</p> <p>Delete group predefined rule based on the allowed action. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73309</p>
   */
  async function deleteRuleDefined_ByGroupId_ByAllowedAction_ByNS(groupId: string, allowedAction: string): Promise<unknown> {
    const $ = new Group$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteRuleDefined_ByGroupId_ByAllowedAction_ByNS(groupId, allowedAction)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getGroups,
    createGroup,
    createGroup_ByNS,
    createGroupBulk,
    getGroup_ByGroupId,
    updateGroup_ByGroupId,
    deleteGroup_ByGroupId,
    patchGroup_ByGroupId,
    updateGroup_ByGroupId_ByNS,
    deleteGroup_ByGroupId_ByNS,
    patchGroup_ByGroupId_ByNS,
    updateRuleCustom_ByGroupId,
    updateRuleCustom_ByGroupId_ByNS,
    updateAttributeCustom_ByGroupId,
    updateAttributeCustom_ByGroupId_ByNS,
    updateRuleDefined_ByGroupId_ByAllowedAction,
    deleteRuleDefined_ByGroupId_ByAllowedAction,
    updateRuleDefined_ByGroupId_ByAllowedAction_ByNS,
    deleteRuleDefined_ByGroupId_ByAllowedAction_ByNS
  }
}
