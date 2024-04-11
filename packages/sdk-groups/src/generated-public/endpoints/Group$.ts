/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { GetGroupListRequestV2 } from '../../generated-definitions/GetGroupListRequestV2.js'
import { GetGroupsListResponseV1 } from '../../generated-definitions/GetGroupsListResponseV1.js'
import { GetGroupsResponseV1 } from '../../generated-definitions/GetGroupsResponseV1.js'
import { GroupResponseV1 } from '../../generated-definitions/GroupResponseV1.js'
import { PublicCreateNewGroupRequestV1 } from '../../generated-definitions/PublicCreateNewGroupRequestV1.js'
import { UpdateGroupCustomAttributesRequestV1 } from '../../generated-definitions/UpdateGroupCustomAttributesRequestV1.js'
import { UpdateGroupCustomRuleRequestV1 } from '../../generated-definitions/UpdateGroupCustomRuleRequestV1.js'
import { UpdateGroupPredefinedRuleRequestV1 } from '../../generated-definitions/UpdateGroupPredefinedRuleRequestV1.js'
import { UpdateGroupRequestV1 } from '../../generated-definitions/UpdateGroupRequestV1.js'

export class Group$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * Required valid user authentication Get list of groups. This endpoint will only show OPEN and PUBLIC group type. This endpoint can search based on the group name by filling the &#34;groupName&#34; query parameter Action Code: 73303
   */
  getGroups(queryParams?: {
    groupName?: string | null
    groupRegion?: string | null
    limit?: number
    offset?: number
  }): Promise<IResponse<GetGroupsListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GetGroupsListResponseV1, 'GetGroupsListResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required valid user authentication This endpoint is used to create new group There are some fields that needs to be fulfilled * **groupDescription**: the description of the group (optional) * **groupIcon**: group icon URL link (optional) * **groupName**: name of the group * **groupRegion**: region of the group * **groupRules**: rules for specific group. It consists of groupCustomRule that can be used to save custom rule, and groupPredefinedRules that has similar usage with configuration, but this rule only works in specific group * **allowedAction**: available action in group service. It consist of joinGroup and inviteGroup * **ruleAttribute**: attribute of the player that needs to be checked * **ruleCriteria**: criteria of the value. The value will be in enum of EQUAL, MINIMUM, MAXIMUM * **ruleValue**: value that needs to be checked * **customAttributes**: additional custom group attributes (optional) Action Code: 73304
   */
  createGroup(data: PublicCreateNewGroupRequestV1): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required valid user authentication This endpoint is used to create new group There are some fields that needs to be fulfilled * **groupDescription**: the description of the group (optional) * **groupIcon**: group icon URL link (optional) * **groupName**: name of the group * **groupRegion**: region of the group * **groupRules**: rules for specific group. It consists of groupCustomRule that can be used to save custom rule, and groupPredefinedRules that has similar usage with configuration, but this rule only works in specific group * **allowedAction**: available action in group service. It consist of joinGroup and inviteGroup * **ruleAttribute**: attribute of the player that needs to be checked * **ruleCriteria**: criteria of the value. The value will be in enum of EQUAL, MINIMUM, MAXIMUM * **ruleValue**: value that needs to be checked * **customAttributes**: additional custom group attributes (optional) Action Code: 73304
   */
  createGroup_ByNS(data: PublicCreateNewGroupRequestV1): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required valid user authentication Get list of groups by group Ids. Action Code: 73303
   */
  createGroupBulk(data: GetGroupListRequestV2): Promise<IResponse<GetGroupsResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GetGroupsResponseV1, 'GetGroupsResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP [DELETE]&#34; Delete existing group. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73305
   */
  deleteGroup_ByGroupId(groupId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required valid user authentication Get single group information. This endpoint will show the group information by the groupId Action Code: 73306
   */
  getGroup_ByGroupId(groupId: string): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73307
   */
  patchGroup_ByGroupId(groupId: string, data: UpdateGroupRequestV1): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73307
   */
  updateGroup_ByGroupId(groupId: string, data: UpdateGroupRequestV1): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP [DELETE]&#34; Delete existing group. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73305
   */
  deleteGroup_ByGroupId_ByNS(groupId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73307
   */
  patchGroup_ByGroupId_ByNS(groupId: string, data: UpdateGroupRequestV1): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73307
   */
  updateGroup_ByGroupId_ByNS(groupId: string, data: UpdateGroupRequestV1): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required valid user authentication Update group custom rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73308
   */
  updateRuleCustom_ByGroupId(groupId: string, data: UpdateGroupCustomRuleRequestV1): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}/rules/custom'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required valid user authentication Update group custom rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73308
   */
  updateRuleCustom_ByGroupId_ByNS(groupId: string, data: UpdateGroupCustomRuleRequestV1): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}/rules/custom'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Requires valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE] This endpoint replaces current group custom attributes entirely. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73311
   */
  updateAttributeCustom_ByGroupId(groupId: string, data: UpdateGroupCustomAttributesRequestV1): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}/attributes/custom'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Requires valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; This endpoint replaces current group custom attributes entirely. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73311
   */
  updateAttributeCustom_ByGroupId_ByNS(groupId: string, data: UpdateGroupCustomAttributesRequestV1): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}/attributes/custom'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Delete group predefined rule based on the allowed action. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73309
   */
  deleteRuleDefined_ByGroupId_ByAllowedAction(groupId: string, allowedAction: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}/rules/defined/{allowedAction}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
      .replace('{allowedAction}', allowedAction)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update predefined group rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token If the rule action is not defined in the group, it will be added immediately to the predefined group rule Action Code: 73310
   */
  updateRuleDefined_ByGroupId_ByAllowedAction(
    groupId: string,
    allowedAction: string,
    data: UpdateGroupPredefinedRuleRequestV1
  ): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}/rules/defined/{allowedAction}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
      .replace('{allowedAction}', allowedAction)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Delete group predefined rule based on the allowed action. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73309
   */
  deleteRuleDefined_ByGroupId_ByAllowedAction_ByNS(groupId: string, allowedAction: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}/rules/defined/{allowedAction}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
      .replace('{allowedAction}', allowedAction)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update predefined group rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token If the rule action is not defined in the group, it will be added immediately to the predefined group rule Action Code: 73310
   */
  updateRuleDefined_ByGroupId_ByAllowedAction_ByNS(
    groupId: string,
    allowedAction: string,
    data: UpdateGroupPredefinedRuleRequestV1
  ): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}/rules/defined/{allowedAction}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
      .replace('{allowedAction}', allowedAction)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
