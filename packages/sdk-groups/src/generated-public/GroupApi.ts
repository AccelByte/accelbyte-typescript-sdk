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
import { GetGroupListRequestV2 } from '../generated-definitions/GetGroupListRequestV2.js'
import { GetGroupsListResponseV1 } from '../generated-definitions/GetGroupsListResponseV1.js'
import { GetGroupsResponseV1 } from '../generated-definitions/GetGroupsResponseV1.js'
import { GroupResponseV1 } from '../generated-definitions/GroupResponseV1.js'
import { PublicCreateNewGroupRequestV1 } from '../generated-definitions/PublicCreateNewGroupRequestV1.js'
import { UpdateGroupCustomAttributesRequestV1 } from '../generated-definitions/UpdateGroupCustomAttributesRequestV1.js'
import { UpdateGroupCustomRuleRequestV1 } from '../generated-definitions/UpdateGroupCustomRuleRequestV1.js'
import { UpdateGroupPredefinedRuleRequestV1 } from '../generated-definitions/UpdateGroupPredefinedRuleRequestV1.js'
import { UpdateGroupRequestV1 } from '../generated-definitions/UpdateGroupRequestV1.js'
import { Group$ } from './endpoints/Group$.js'

export function GroupApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Required valid user authentication Get list of groups. This endpoint will only show OPEN and PUBLIC group type. This endpoint can search based on the group name by filling the &#34;groupName&#34; query parameter Action Code: 73303
   */
  async function getGroups(queryParams?: {
    groupName?: string | null
    groupRegion?: string | null
    limit?: number
    offset?: number
  }): Promise<GetGroupsListResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getGroups(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication This endpoint is used to create new group There are some fields that needs to be fulfilled * **groupDescription**: the description of the group (optional) * **groupIcon**: group icon URL link (optional) * **groupName**: name of the group * **groupRegion**: region of the group * **groupRules**: rules for specific group. It consists of groupCustomRule that can be used to save custom rule, and groupPredefinedRules that has similar usage with configuration, but this rule only works in specific group * **allowedAction**: available action in group service. It consist of joinGroup and inviteGroup * **ruleAttribute**: attribute of the player that needs to be checked * **ruleCriteria**: criteria of the value. The value will be in enum of EQUAL, MINIMUM, MAXIMUM * **ruleValue**: value that needs to be checked * **customAttributes**: additional custom group attributes (optional) Action Code: 73304
   */
  async function createGroup(data: PublicCreateNewGroupRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createGroup(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication This endpoint is used to create new group There are some fields that needs to be fulfilled * **groupDescription**: the description of the group (optional) * **groupIcon**: group icon URL link (optional) * **groupName**: name of the group * **groupRegion**: region of the group * **groupRules**: rules for specific group. It consists of groupCustomRule that can be used to save custom rule, and groupPredefinedRules that has similar usage with configuration, but this rule only works in specific group * **allowedAction**: available action in group service. It consist of joinGroup and inviteGroup * **ruleAttribute**: attribute of the player that needs to be checked * **ruleCriteria**: criteria of the value. The value will be in enum of EQUAL, MINIMUM, MAXIMUM * **ruleValue**: value that needs to be checked * **customAttributes**: additional custom group attributes (optional) Action Code: 73304
   */
  async function createGroup_ByNS(data: PublicCreateNewGroupRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createGroup_ByNS(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Get list of groups by group Ids. Action Code: 73303
   */
  async function createGroupBulk(data: GetGroupListRequestV2): Promise<GetGroupsResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createGroupBulk(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP [DELETE]&#34; Delete existing group. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73305
   */
  async function deleteGroup_ByGroupId(groupId: string): Promise<unknown> {
    const $ = new Group$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteGroup_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Get single group information. This endpoint will show the group information by the groupId Action Code: 73306
   */
  async function getGroup_ByGroupId(groupId: string): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getGroup_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73307
   */
  async function patchGroup_ByGroupId(groupId: string, data: UpdateGroupRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchGroup_ByGroupId(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73307
   */
  async function updateGroup_ByGroupId(groupId: string, data: UpdateGroupRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateGroup_ByGroupId(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP [DELETE]&#34; Delete existing group. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73305
   */
  async function deleteGroup_ByGroupId_ByNS(groupId: string): Promise<unknown> {
    const $ = new Group$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteGroup_ByGroupId_ByNS(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73307
   */
  async function patchGroup_ByGroupId_ByNS(groupId: string, data: UpdateGroupRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchGroup_ByGroupId_ByNS(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73307
   */
  async function updateGroup_ByGroupId_ByNS(groupId: string, data: UpdateGroupRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateGroup_ByGroupId_ByNS(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Update group custom rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73308
   */
  async function updateRuleCustom_ByGroupId(groupId: string, data: UpdateGroupCustomRuleRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateRuleCustom_ByGroupId(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Update group custom rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73308
   */
  async function updateRuleCustom_ByGroupId_ByNS(groupId: string, data: UpdateGroupCustomRuleRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateRuleCustom_ByGroupId_ByNS(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Requires valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE] This endpoint replaces current group custom attributes entirely. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73311
   */
  async function updateAttributeCustom_ByGroupId(groupId: string, data: UpdateGroupCustomAttributesRequestV1): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateAttributeCustom_ByGroupId(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Requires valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; This endpoint replaces current group custom attributes entirely. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73311
   */
  async function updateAttributeCustom_ByGroupId_ByNS(
    groupId: string,
    data: UpdateGroupCustomAttributesRequestV1
  ): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateAttributeCustom_ByGroupId_ByNS(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Delete group predefined rule based on the allowed action. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73309
   */
  async function deleteRuleDefined_ByGroupId_ByAllowedAction(groupId: string, allowedAction: string): Promise<unknown> {
    const $ = new Group$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteRuleDefined_ByGroupId_ByAllowedAction(groupId, allowedAction)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update predefined group rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token If the rule action is not defined in the group, it will be added immediately to the predefined group rule Action Code: 73310
   */
  async function updateRuleDefined_ByGroupId_ByAllowedAction(
    groupId: string,
    allowedAction: string,
    data: UpdateGroupPredefinedRuleRequestV1
  ): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateRuleDefined_ByGroupId_ByAllowedAction(groupId, allowedAction, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Delete group predefined rule based on the allowed action. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73309
   */
  async function deleteRuleDefined_ByGroupId_ByAllowedAction_ByNS(groupId: string, allowedAction: string): Promise<unknown> {
    const $ = new Group$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteRuleDefined_ByGroupId_ByAllowedAction_ByNS(groupId, allowedAction)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update predefined group rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token If the rule action is not defined in the group, it will be added immediately to the predefined group rule Action Code: 73310
   */
  async function updateRuleDefined_ByGroupId_ByAllowedAction_ByNS(
    groupId: string,
    allowedAction: string,
    data: UpdateGroupPredefinedRuleRequestV1
  ): Promise<GroupResponseV1> {
    const $ = new Group$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateRuleDefined_ByGroupId_ByAllowedAction_ByNS(groupId, allowedAction, data)
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
