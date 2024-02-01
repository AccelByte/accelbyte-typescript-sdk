/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
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
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Get list of groups. This endpoint will only show OPEN and PUBLIC group type. This endpoint can search based on the group name by filling the &#34;groupName&#34; query parameter&lt;/p&gt; &lt;p&gt;Action Code: 73303&lt;/p&gt;
   */
  getGroups(queryParams?: {
    groupName?: string | null
    groupRegion?: string | null
    limit?: number
    offset?: number
  }): Promise<IResponseWithSync<GetGroupsListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GetGroupsListResponseV1, 'GetGroupsListResponseV1')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to create new group&lt;/p&gt; &lt;p&gt;There are some fields that needs to be fulfilled&lt;/p&gt; &lt;ul&gt; &lt;li&gt;&lt;b&gt;groupDescription&lt;/b&gt;: the description of the group (optional)&lt;/li&gt; &lt;li&gt;&lt;b&gt;groupIcon&lt;/b&gt;: group icon URL link (optional)&lt;/li&gt; &lt;li&gt;&lt;b&gt;groupName&lt;/b&gt;: name of the group&lt;/li&gt; &lt;li&gt;&lt;b&gt;groupRegion&lt;/b&gt;: region of the group&lt;/li&gt; &lt;li&gt;&lt;b&gt;groupRules&lt;/b&gt;: rules for specific group. It consists of groupCustomRule that can be used to save custom rule, and groupPredefinedRules that has similar usage with configuration, but this rule only works in specific group&lt;/li&gt; &lt;li&gt;&lt;b&gt;allowedAction&lt;/b&gt;: available action in group service. It consist of joinGroup and inviteGroup&lt;/li&gt; &lt;li&gt;&lt;b&gt;ruleAttribute&lt;/b&gt;: attribute of the player that needs to be checked&lt;/li&gt; &lt;li&gt;&lt;b&gt;ruleCriteria&lt;/b&gt;: criteria of the value. The value will be in enum of EQUAL, MINIMUM, MAXIMUM&lt;/li&gt; &lt;li&gt;&lt;b&gt;ruleValue&lt;/b&gt;: value that needs to be checked&lt;/li&gt; &lt;li&gt;&lt;b&gt;customAttributes&lt;/b&gt;: additional custom group attributes (optional)&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Action Code: 73304&lt;/p&gt;
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
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to create new group&lt;/p&gt; &lt;p&gt;There are some fields that needs to be fulfilled&lt;/p&gt; &lt;ul&gt; &lt;li&gt;&lt;b&gt;groupDescription&lt;/b&gt;: the description of the group (optional)&lt;/li&gt; &lt;li&gt;&lt;b&gt;groupIcon&lt;/b&gt;: group icon URL link (optional)&lt;/li&gt; &lt;li&gt;&lt;b&gt;groupName&lt;/b&gt;: name of the group&lt;/li&gt; &lt;li&gt;&lt;b&gt;groupRegion&lt;/b&gt;: region of the group&lt;/li&gt; &lt;li&gt;&lt;b&gt;groupRules&lt;/b&gt;: rules for specific group. It consists of groupCustomRule that can be used to save custom rule, and groupPredefinedRules that has similar usage with configuration, but this rule only works in specific group&lt;/li&gt; &lt;li&gt;&lt;b&gt;allowedAction&lt;/b&gt;: available action in group service. It consist of joinGroup and inviteGroup&lt;/li&gt; &lt;li&gt;&lt;b&gt;ruleAttribute&lt;/b&gt;: attribute of the player that needs to be checked&lt;/li&gt; &lt;li&gt;&lt;b&gt;ruleCriteria&lt;/b&gt;: criteria of the value. The value will be in enum of EQUAL, MINIMUM, MAXIMUM&lt;/li&gt; &lt;li&gt;&lt;b&gt;ruleValue&lt;/b&gt;: value that needs to be checked&lt;/li&gt; &lt;li&gt;&lt;b&gt;customAttributes&lt;/b&gt;: additional custom group attributes (optional)&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Action Code: 73304&lt;/p&gt;
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
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Get list of groups by group Ids.&lt;/p&gt; &lt;p&gt;Action Code: 73303&lt;/p&gt;
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
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [DELETE]&#34;&lt;/p&gt; &lt;p&gt;Delete existing group. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73305&lt;/p&gt;
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
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Get single group information. This endpoint will show the group information by the groupId&lt;/p&gt; &lt;p&gt;Action Code: 73306&lt;/p&gt;
   */
  getGroup_ByGroupId(groupId: string): Promise<IResponseWithSync<GroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, GroupResponseV1, 'GroupResponseV1')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73307&lt;/p&gt;
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
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73307&lt;/p&gt;
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
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [DELETE]&#34;&lt;/p&gt; &lt;p&gt;Delete existing group. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73305&lt;/p&gt;
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
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73307&lt;/p&gt;
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
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73307&lt;/p&gt;
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
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Update group custom rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73308&lt;/p&gt;
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
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Update group custom rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73308&lt;/p&gt;
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
   * &lt;p&gt;Requires valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint replaces current group custom attributes entirely. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73311&lt;/p&gt;
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
   * &lt;p&gt;Requires valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint replaces current group custom attributes entirely. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73311&lt;/p&gt;
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
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;Delete group predefined rule based on the allowed action. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73309&lt;/p&gt;
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
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;Update predefined group rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;If the rule action is not defined in the group, it will be added immediately to the predefined group rule&lt;/p&gt; &lt;p&gt;Action Code: 73310&lt;/p&gt;
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
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;Delete group predefined rule based on the allowed action. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;Action Code: 73309&lt;/p&gt;
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
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [UPDATE]&#34;&lt;/p&gt; &lt;p&gt;Update predefined group rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token&lt;/p&gt; &lt;p&gt;If the rule action is not defined in the group, it will be added immediately to the predefined group rule&lt;/p&gt; &lt;p&gt;Action Code: 73310&lt;/p&gt;
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
