/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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

export function GroupApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getGroups(queryParams?: {
    groupName?: string | null
    groupRegion?: string | null
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<GetGroupsListResponseV1>> {
    const $ = new Group$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGroups(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createGroup(data: PublicCreateNewGroupRequestV1): Promise<AxiosResponse<GroupResponseV1>> {
    const $ = new Group$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createGroup(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createGroup_v2(data: PublicCreateNewGroupRequestV1): Promise<AxiosResponse<GroupResponseV1>> {
    const $ = new Group$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createGroup_v2(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createGroupBulk_v2(data: GetGroupListRequestV2): Promise<AxiosResponse<GetGroupsResponseV1>> {
    const $ = new Group$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createGroupBulk_v2(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteGroup_ByGroupId(groupId: string): Promise<AxiosResponse<unknown>> {
    const $ = new Group$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteGroup_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getGroup_ByGroupId(groupId: string): Promise<AxiosResponse<GroupResponseV1>> {
    const $ = new Group$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGroup_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchGroup_ByGroupId(groupId: string, data: UpdateGroupRequestV1): Promise<AxiosResponse<GroupResponseV1>> {
    const $ = new Group$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchGroup_ByGroupId(groupId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateGroup_ByGroupId(groupId: string, data: UpdateGroupRequestV1): Promise<AxiosResponse<GroupResponseV1>> {
    const $ = new Group$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateGroup_ByGroupId(groupId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteGroup_ByGroupId_v2(groupId: string): Promise<AxiosResponse<unknown>> {
    const $ = new Group$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteGroup_ByGroupId_v2(groupId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchGroup_ByGroupId_v2(groupId: string, data: UpdateGroupRequestV1): Promise<AxiosResponse<GroupResponseV1>> {
    const $ = new Group$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchGroup_ByGroupId_v2(groupId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateGroup_ByGroupId_v2(groupId: string, data: UpdateGroupRequestV1): Promise<AxiosResponse<GroupResponseV1>> {
    const $ = new Group$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateGroup_ByGroupId_v2(groupId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRuleCustom_ByGroupId(
    groupId: string,
    data: UpdateGroupCustomRuleRequestV1
  ): Promise<AxiosResponse<GroupResponseV1>> {
    const $ = new Group$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRuleCustom_ByGroupId(groupId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRuleCustom_ByGroupId_v2(
    groupId: string,
    data: UpdateGroupCustomRuleRequestV1
  ): Promise<AxiosResponse<GroupResponseV1>> {
    const $ = new Group$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRuleCustom_ByGroupId_v2(groupId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateAttributeCustom_ByGroupId(
    groupId: string,
    data: UpdateGroupCustomAttributesRequestV1
  ): Promise<AxiosResponse<GroupResponseV1>> {
    const $ = new Group$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateAttributeCustom_ByGroupId(groupId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateAttributeCustom_ByGroupId_v2(
    groupId: string,
    data: UpdateGroupCustomAttributesRequestV1
  ): Promise<AxiosResponse<GroupResponseV1>> {
    const $ = new Group$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateAttributeCustom_ByGroupId_v2(groupId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteRuleDefined_ByGroupId_ByAllowedAction(groupId: string, allowedAction: string): Promise<AxiosResponse<unknown>> {
    const $ = new Group$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteRuleDefined_ByGroupId_ByAllowedAction(groupId, allowedAction)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRuleDefined_ByGroupId_ByAllowedAction(
    groupId: string,
    allowedAction: string,
    data: UpdateGroupPredefinedRuleRequestV1
  ): Promise<AxiosResponse<GroupResponseV1>> {
    const $ = new Group$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRuleDefined_ByGroupId_ByAllowedAction(groupId, allowedAction, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteRuleDefined_ByGroupId_ByAllowedAction_v2(groupId: string, allowedAction: string): Promise<AxiosResponse<unknown>> {
    const $ = new Group$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteRuleDefined_ByGroupId_ByAllowedAction_v2(groupId, allowedAction)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRuleDefined_ByGroupId_ByAllowedAction_v2(
    groupId: string,
    allowedAction: string,
    data: UpdateGroupPredefinedRuleRequestV1
  ): Promise<AxiosResponse<GroupResponseV1>> {
    const $ = new Group$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRuleDefined_ByGroupId_ByAllowedAction_v2(groupId, allowedAction, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Required valid user authentication Get list of groups. This endpoint will only show OPEN and PUBLIC group type. This endpoint can search based on the group name by filling the &#34;groupName&#34; query parameter Action Code: 73303
     */
    getGroups,
    /**
     * Required valid user authentication This endpoint is used to create new group There are some fields that needs to be fulfilled * **groupDescription**: the description of the group (optional) * **groupIcon**: group icon URL link (optional) * **groupName**: name of the group * **groupRegion**: region of the group * **groupRules**: rules for specific group. It consists of groupCustomRule that can be used to save custom rule, and groupPredefinedRules that has similar usage with configuration, but this rule only works in specific group * **allowedAction**: available action in group service. It consist of joinGroup and createGroup * **ruleAttribute**: attribute of the player that needs to be checked * **ruleCriteria**: criteria of the value. The value will be in enum of EQUAL, MINIMUM, MAXIMUM * **ruleValue**: value that needs to be checked * **customAttributes**: additional custom group attributes (optional) Action Code: 73304
     */
    createGroup,
    /**
     * Required valid user authentication This endpoint is used to create new group There are some fields that needs to be fulfilled * **groupDescription**: the description of the group (optional) * **groupIcon**: group icon URL link (optional) * **groupName**: name of the group * **groupRegion**: region of the group * **groupRules**: rules for specific group. It consists of groupCustomRule that can be used to save custom rule, and groupPredefinedRules that has similar usage with configuration, but this rule only works in specific group * **allowedAction**: available action in group service. It consist of joinGroup and inviteGroup * **ruleAttribute**: attribute of the player that needs to be checked * **ruleCriteria**: criteria of the value. The value will be in enum of EQUAL, MINIMUM, MAXIMUM * **ruleValue**: value that needs to be checked * **customAttributes**: additional custom group attributes (optional) Action Code: 73304
     */
    createGroup_v2,
    /**
     * Required valid user authentication Get list of groups by group Ids. Action Code: 73303
     */
    createGroupBulk_v2,
    /**
     * Required valid user authentication Required Member Role Permission: &#34;GROUP [DELETE]&#34; Delete existing group. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73305
     */
    deleteGroup_ByGroupId,
    /**
     * Required valid user authentication Get single group information. This endpoint will show the group information by the groupId Action Code: 73306
     */
    getGroup_ByGroupId,
    /**
     * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73307
     */
    patchGroup_ByGroupId,
    /**
     * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73307
     */
    updateGroup_ByGroupId,
    /**
     * Required valid user authentication Required Member Role Permission: &#34;GROUP [DELETE]&#34; Delete existing group. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73305
     */
    deleteGroup_ByGroupId_v2,
    /**
     * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73307
     */
    patchGroup_ByGroupId_v2,
    /**
     * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73307
     */
    updateGroup_ByGroupId_v2,
    /**
     * Required valid user authentication Update group custom rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73308
     */
    updateRuleCustom_ByGroupId,
    /**
     * Required valid user authentication Update group custom rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73308
     */
    updateRuleCustom_ByGroupId_v2,
    /**
     * Requires valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE] This endpoint replaces current group custom attributes entirely. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73311
     */
    updateAttributeCustom_ByGroupId,
    /**
     * Requires valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; This endpoint replaces current group custom attributes entirely. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73311
     */
    updateAttributeCustom_ByGroupId_v2,
    /**
     * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Delete group predefined rule based on the allowed action. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73309
     */
    deleteRuleDefined_ByGroupId_ByAllowedAction,
    /**
     * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update predefined group rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token If the rule action is not defined in the group, it will be added immediately to the predefined group rule Action Code: 73310
     */
    updateRuleDefined_ByGroupId_ByAllowedAction,
    /**
     * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Delete group predefined rule based on the allowed action. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73309
     */
    deleteRuleDefined_ByGroupId_ByAllowedAction_v2,
    /**
     * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update predefined group rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token If the rule action is not defined in the group, it will be added immediately to the predefined group rule Action Code: 73310
     */
    updateRuleDefined_ByGroupId_ByAllowedAction_v2
  }
}
