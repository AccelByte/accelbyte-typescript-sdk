/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { GetGroupListRequestV2 } from '../definitions/GetGroupListRequestV2.js'
import { GetGroupsListResponseV1 } from '../definitions/GetGroupsListResponseV1.js'
import { GetGroupsResponseV1 } from '../definitions/GetGroupsResponseV1.js'
import { GroupResponseV1 } from '../definitions/GroupResponseV1.js'
import { PublicCreateNewGroupRequestV1 } from '../definitions/PublicCreateNewGroupRequestV1.js'
import { UpdateGroupCustomAttributesRequestV1 } from '../definitions/UpdateGroupCustomAttributesRequestV1.js'
import { UpdateGroupCustomRuleRequestV1 } from '../definitions/UpdateGroupCustomRuleRequestV1.js'
import { UpdateGroupPredefinedRuleRequestV1 } from '../definitions/UpdateGroupPredefinedRuleRequestV1.js'
import { UpdateGroupRequestV1 } from '../definitions/UpdateGroupRequestV1.js'

export class Group$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * <p>Required valid user authentication </p> <p>Get list of groups. This endpoint will only show OPEN and PUBLIC group type. This endpoint can search based on the group name by filling the "groupName" query parameter</p> <p>Action Code: 73303</p>
   */
  getGroups(queryParams?: {
    limit?: number
    offset?: number
    groupName?: string | null
    groupRegion?: string | null
  }): Promise<IResponseWithSync<GetGroupsListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetGroupsListResponseV1, 'GetGroupsListResponseV1')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>Required valid user authentication </p> <p>This endpoint is used to create new group</p> <p>There are some fields that needs to be fulfilled</p> <ul> <li><b>groupDescription</b>: the description of the group (optional)</li> <li><b>groupIcon</b>: group icon URL link (optional)</li> <li><b>groupName</b>: name of the group</li> <li><b>groupRegion</b>: region of the group</li> <li><b>groupRules</b>: rules for specific group. It consists of groupCustomRule that can be used to save custom rule, and groupPredefinedRules that has similar usage with configuration, but this rule only works in specific group</li> <li><b>allowedAction</b>: available action in group service. It consist of joinGroup and inviteGroup</li> <li><b>ruleAttribute</b>: attribute of the player that needs to be checked</li> <li><b>ruleCriteria</b>: criteria of the value. The value will be in enum of EQUAL, MINIMUM, MAXIMUM</li> <li><b>ruleValue</b>: value that needs to be checked</li> <li><b>customAttributes</b>: additional custom group attributes (optional)</li> </ul> <p>Action Code: 73304</p>
   */
  createGroup(data: PublicCreateNewGroupRequestV1): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
  }

  /**
   * <p>Required valid user authentication </p> <p>This endpoint is used to create new group</p> <p>There are some fields that needs to be fulfilled</p> <ul> <li><b>groupDescription</b>: the description of the group (optional)</li> <li><b>groupIcon</b>: group icon URL link (optional)</li> <li><b>groupName</b>: name of the group</li> <li><b>groupRegion</b>: region of the group</li> <li><b>groupRules</b>: rules for specific group. It consists of groupCustomRule that can be used to save custom rule, and groupPredefinedRules that has similar usage with configuration, but this rule only works in specific group</li> <li><b>allowedAction</b>: available action in group service. It consist of joinGroup and inviteGroup</li> <li><b>ruleAttribute</b>: attribute of the player that needs to be checked</li> <li><b>ruleCriteria</b>: criteria of the value. The value will be in enum of EQUAL, MINIMUM, MAXIMUM</li> <li><b>ruleValue</b>: value that needs to be checked</li> <li><b>customAttributes</b>: additional custom group attributes (optional)</li> </ul> <p>Action Code: 73304</p>
   */
  createGroup_ByNS(data: PublicCreateNewGroupRequestV1): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
  }

  /**
   * <p>Required valid user authentication </p> <p>Get list of groups by group Ids.</p> <p>Action Code: 73303</p>
   */
  createGroupBulk(data: GetGroupListRequestV2): Promise<IResponse<GetGroupsResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/bulk'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, GetGroupsResponseV1, 'GetGroupsResponseV1')
  }

  /**
   * <p>Required valid user authentication </p> <p>Get single group information. This endpoint will show the group information by the groupId</p> <p>Action Code: 73306</p>
   */
  getGroup_ByGroupId(groupId: string): Promise<IResponseWithSync<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP [UPDATE]"</p> <p>Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73307</p>
   */
  updateGroup_ByGroupId(groupId: string, data: UpdateGroupRequestV1): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP [DELETE]"</p> <p>Delete existing group. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73305</p>
   */
  deleteGroup_ByGroupId(groupId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP [UPDATE]"</p> <p>Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73307</p>
   */
  patchGroup_ByGroupId(groupId: string, data: UpdateGroupRequestV1): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP [UPDATE]"</p> <p>Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73307</p>
   */
  updateGroup_ByGroupId_ByNS(groupId: string, data: UpdateGroupRequestV1): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP [DELETE]"</p> <p>Delete existing group. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73305</p>
   */
  deleteGroup_ByGroupId_ByNS(groupId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP [UPDATE]"</p> <p>Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73307</p>
   */
  patchGroup_ByGroupId_ByNS(groupId: string, data: UpdateGroupRequestV1): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
  }

  /**
   * <p>Required valid user authentication </p> <p>Update group custom rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73308</p>
   */
  updateRuleCustom_ByGroupId(groupId: string, data: UpdateGroupCustomRuleRequestV1): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}/rules/custom'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
  }

  /**
   * <p>Required valid user authentication </p> <p>Update group custom rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73308</p>
   */
  updateRuleCustom_ByGroupId_ByNS(groupId: string, data: UpdateGroupCustomRuleRequestV1): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}/rules/custom'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
  }

  /**
   * <p>Requires valid user authentication </p> <p>Required Member Role Permission: "GROUP [UPDATE]"</p> <p>This endpoint replaces current group custom attributes entirely. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73311</p>
   */
  updateAttributeCustom_ByGroupId(groupId: string, data: UpdateGroupCustomAttributesRequestV1): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}/attributes/custom'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
  }

  /**
   * <p>Requires valid user authentication </p> <p>Required Member Role Permission: "GROUP [UPDATE]"</p> <p>This endpoint replaces current group custom attributes entirely. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73311</p>
   */
  updateAttributeCustom_ByGroupId_ByNS(groupId: string, data: UpdateGroupCustomAttributesRequestV1): Promise<IResponse<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}/attributes/custom'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP [UPDATE]"</p> <p>Update predefined group rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>If the rule action is not defined in the group, it will be added immediately to the predefined group rule</p> <p>Action Code: 73310</p>
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

    return Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP [UPDATE]"</p> <p>Delete group predefined rule based on the allowed action. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73309</p>
   */
  deleteRuleDefined_ByGroupId_ByAllowedAction(groupId: string, allowedAction: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}/rules/defined/{allowedAction}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
      .replace('{allowedAction}', allowedAction)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP [UPDATE]"</p> <p>Update predefined group rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>If the rule action is not defined in the group, it will be added immediately to the predefined group rule</p> <p>Action Code: 73310</p>
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

    return Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP [UPDATE]"</p> <p>Delete group predefined rule based on the allowed action. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token</p> <p>Action Code: 73309</p>
   */
  deleteRuleDefined_ByGroupId_ByAllowedAction_ByNS(groupId: string, allowedAction: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}/rules/defined/{allowedAction}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
      .replace('{allowedAction}', allowedAction)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
