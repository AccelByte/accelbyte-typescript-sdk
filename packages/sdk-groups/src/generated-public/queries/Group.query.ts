/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { GroupApi } from '../GroupApi.js'

import { GetGroupListRequestV2 } from '../../generated-definitions/GetGroupListRequestV2.js'
import { GetGroupsListResponseV1 } from '../../generated-definitions/GetGroupsListResponseV1.js'
import { GetGroupsResponseV1 } from '../../generated-definitions/GetGroupsResponseV1.js'
import { GroupResponseV1 } from '../../generated-definitions/GroupResponseV1.js'
import { PublicCreateNewGroupRequestV1 } from '../../generated-definitions/PublicCreateNewGroupRequestV1.js'
import { UpdateGroupCustomAttributesRequestV1 } from '../../generated-definitions/UpdateGroupCustomAttributesRequestV1.js'
import { UpdateGroupCustomRuleRequestV1 } from '../../generated-definitions/UpdateGroupCustomRuleRequestV1.js'
import { UpdateGroupPredefinedRuleRequestV1 } from '../../generated-definitions/UpdateGroupPredefinedRuleRequestV1.js'
import { UpdateGroupRequestV1 } from '../../generated-definitions/UpdateGroupRequestV1.js'

export enum Key_Group {
  Groups = 'Groups.Group.Groups',
  Group = 'Groups.Group.Group',
  Group_v2 = 'Groups.Group.Group_v2',
  GroupBulk_v2 = 'Groups.Group.GroupBulk_v2',
  Group_ByGroupId = 'Groups.Group.Group_ByGroupId',
  Group_ByGroupId_v2 = 'Groups.Group.Group_ByGroupId_v2',
  RuleCustom_ByGroupId = 'Groups.Group.RuleCustom_ByGroupId',
  RuleCustom_ByGroupId_v2 = 'Groups.Group.RuleCustom_ByGroupId_v2',
  AttributeCustom_ByGroupId = 'Groups.Group.AttributeCustom_ByGroupId',
  AttributeCustom_ByGroupId_v2 = 'Groups.Group.AttributeCustom_ByGroupId_v2',
  RuleDefined_ByGroupId_ByAllowedAction = 'Groups.Group.RuleDefined_ByGroupId_ByAllowedAction',
  RuleDefined_ByGroupId_ByAllowedAction_v2 = 'Groups.Group.RuleDefined_ByGroupId_ByAllowedAction_v2'
}

/**
 * Required valid user authentication Get list of groups. This endpoint will only show OPEN and PUBLIC group type. This endpoint can search based on the group name by filling the &#34;groupName&#34; query parameter Action Code: 73303
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Group.Groups, input]
 * }
 * ```
 */
export const useGroupApi_GetGroups = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { groupName?: string | null; groupRegion?: string | null; limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetGroupsListResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetGroupsListResponseV1>) => void
): UseQueryResult<GetGroupsListResponseV1, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGroupApi_GetGroups>[1]) => async () => {
    const response = await GroupApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getGroups(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetGroupsListResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_Group.Groups, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required valid user authentication This endpoint is used to create new group There are some fields that needs to be fulfilled * **groupDescription**: the description of the group (optional) * **groupIcon**: group icon URL link (optional) * **groupName**: name of the group * **groupRegion**: region of the group * **groupRules**: rules for specific group. It consists of groupCustomRule that can be used to save custom rule, and groupPredefinedRules that has similar usage with configuration, but this rule only works in specific group * **allowedAction**: available action in group service. It consist of joinGroup and createGroup * **ruleAttribute**: attribute of the player that needs to be checked * **ruleCriteria**: criteria of the value. The value will be in enum of EQUAL, MINIMUM, MAXIMUM * **ruleValue**: value that needs to be checked * **customAttributes**: additional custom group attributes (optional) Action Code: 73304
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Group.Group, input]
 * }
 * ```
 */
export const useGroupApi_CreateGroupMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<GroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicCreateNewGroupRequestV1 }>,
    'mutationKey'
  >,
  callback?: (data: GroupResponseV1) => void
): UseMutationResult<GroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicCreateNewGroupRequestV1 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PublicCreateNewGroupRequestV1 }) => {
    const response = await GroupApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createGroup(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Group.Group],
    mutationFn,
    ...options
  })
}

/**
 * Required valid user authentication This endpoint is used to create new group There are some fields that needs to be fulfilled * **groupDescription**: the description of the group (optional) * **groupIcon**: group icon URL link (optional) * **groupName**: name of the group * **groupRegion**: region of the group * **groupRules**: rules for specific group. It consists of groupCustomRule that can be used to save custom rule, and groupPredefinedRules that has similar usage with configuration, but this rule only works in specific group * **allowedAction**: available action in group service. It consist of joinGroup and inviteGroup * **ruleAttribute**: attribute of the player that needs to be checked * **ruleCriteria**: criteria of the value. The value will be in enum of EQUAL, MINIMUM, MAXIMUM * **ruleValue**: value that needs to be checked * **customAttributes**: additional custom group attributes (optional) Action Code: 73304
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Group.Group_v2, input]
 * }
 * ```
 */
export const useGroupApi_CreateGroupMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<GroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicCreateNewGroupRequestV1 }>,
    'mutationKey'
  >,
  callback?: (data: GroupResponseV1) => void
): UseMutationResult<GroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicCreateNewGroupRequestV1 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PublicCreateNewGroupRequestV1 }) => {
    const response = await GroupApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createGroup_v2(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Group.Group_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required valid user authentication Get list of groups by group Ids. Action Code: 73303
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Group.GroupBulk_v2, input]
 * }
 * ```
 */
export const useGroupApi_CreateGroupBulkMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<GetGroupsResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { data: GetGroupListRequestV2 }>,
    'mutationKey'
  >,
  callback?: (data: GetGroupsResponseV1) => void
): UseMutationResult<GetGroupsResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { data: GetGroupListRequestV2 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: GetGroupListRequestV2 }) => {
    const response = await GroupApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createGroupBulk_v2(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Group.GroupBulk_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required valid user authentication Required Member Role Permission: &#34;GROUP [DELETE]&#34; Delete existing group. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73305
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Group.Group_ByGroupId, input]
 * }
 * ```
 */
export const useGroupApi_DeleteGroup_ByGroupIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { groupId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { groupId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { groupId: string }) => {
    const response = await GroupApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteGroup_ByGroupId(
      input.groupId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Group.Group_ByGroupId],
    mutationFn,
    ...options
  })
}

/**
 * Required valid user authentication Get single group information. This endpoint will show the group information by the groupId Action Code: 73306
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Group.Group_ByGroupId, input]
 * }
 * ```
 */
export const useGroupApi_GetGroup_ByGroupId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { groupId: string },
  options?: Omit<UseQueryOptions<GroupResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GroupResponseV1>) => void
): UseQueryResult<GroupResponseV1, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGroupApi_GetGroup_ByGroupId>[1]) => async () => {
    const response = await GroupApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getGroup_ByGroupId(input.groupId)
    callback && callback(response)
    return response.data
  }

  return useQuery<GroupResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_Group.Group_ByGroupId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73307
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Group.Group_ByGroupId, input]
 * }
 * ```
 */
export const useGroupApi_PatchGroup_ByGroupIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<GroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId: string; data: UpdateGroupRequestV1 }>,
    'mutationKey'
  >,
  callback?: (data: GroupResponseV1) => void
): UseMutationResult<GroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId: string; data: UpdateGroupRequestV1 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { groupId: string; data: UpdateGroupRequestV1 }) => {
    const response = await GroupApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchGroup_ByGroupId(
      input.groupId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Group.Group_ByGroupId],
    mutationFn,
    ...options
  })
}

/**
 * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73307
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Group.Group_ByGroupId, input]
 * }
 * ```
 */
export const useGroupApi_UpdateGroup_ByGroupIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<GroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId: string; data: UpdateGroupRequestV1 }>,
    'mutationKey'
  >,
  callback?: (data: GroupResponseV1) => void
): UseMutationResult<GroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId: string; data: UpdateGroupRequestV1 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { groupId: string; data: UpdateGroupRequestV1 }) => {
    const response = await GroupApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateGroup_ByGroupId(
      input.groupId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Group.Group_ByGroupId],
    mutationFn,
    ...options
  })
}

/**
 * Required valid user authentication Required Member Role Permission: &#34;GROUP [DELETE]&#34; Delete existing group. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73305
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Group.Group_ByGroupId_v2, input]
 * }
 * ```
 */
export const useGroupApi_DeleteGroup_ByGroupIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { groupId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { groupId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { groupId: string }) => {
    const response = await GroupApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteGroup_ByGroupId_v2(
      input.groupId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Group.Group_ByGroupId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73307
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Group.Group_ByGroupId_v2, input]
 * }
 * ```
 */
export const useGroupApi_PatchGroup_ByGroupIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<GroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId: string; data: UpdateGroupRequestV1 }>,
    'mutationKey'
  >,
  callback?: (data: GroupResponseV1) => void
): UseMutationResult<GroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId: string; data: UpdateGroupRequestV1 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { groupId: string; data: UpdateGroupRequestV1 }) => {
    const response = await GroupApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchGroup_ByGroupId_v2(
      input.groupId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Group.Group_ByGroupId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update existing group. This endpoint supports partial update. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73307
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Group.Group_ByGroupId_v2, input]
 * }
 * ```
 */
export const useGroupApi_UpdateGroup_ByGroupIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<GroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId: string; data: UpdateGroupRequestV1 }>,
    'mutationKey'
  >,
  callback?: (data: GroupResponseV1) => void
): UseMutationResult<GroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId: string; data: UpdateGroupRequestV1 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { groupId: string; data: UpdateGroupRequestV1 }) => {
    const response = await GroupApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateGroup_ByGroupId_v2(
      input.groupId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Group.Group_ByGroupId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required valid user authentication Update group custom rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73308
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Group.RuleCustom_ByGroupId, input]
 * }
 * ```
 */
export const useGroupApi_UpdateRuleCustom_ByGroupIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      GroupResponseV1,
      AxiosError<ApiError>,
      SdkSetConfigParam & { groupId: string; data: UpdateGroupCustomRuleRequestV1 }
    >,
    'mutationKey'
  >,
  callback?: (data: GroupResponseV1) => void
): UseMutationResult<
  GroupResponseV1,
  AxiosError<ApiError>,
  SdkSetConfigParam & { groupId: string; data: UpdateGroupCustomRuleRequestV1 }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { groupId: string; data: UpdateGroupCustomRuleRequestV1 }) => {
    const response = await GroupApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateRuleCustom_ByGroupId(
      input.groupId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Group.RuleCustom_ByGroupId],
    mutationFn,
    ...options
  })
}

/**
 * Required valid user authentication Update group custom rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73308
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Group.RuleCustom_ByGroupId_v2, input]
 * }
 * ```
 */
export const useGroupApi_UpdateRuleCustom_ByGroupIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      GroupResponseV1,
      AxiosError<ApiError>,
      SdkSetConfigParam & { groupId: string; data: UpdateGroupCustomRuleRequestV1 }
    >,
    'mutationKey'
  >,
  callback?: (data: GroupResponseV1) => void
): UseMutationResult<
  GroupResponseV1,
  AxiosError<ApiError>,
  SdkSetConfigParam & { groupId: string; data: UpdateGroupCustomRuleRequestV1 }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { groupId: string; data: UpdateGroupCustomRuleRequestV1 }) => {
    const response = await GroupApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateRuleCustom_ByGroupId_v2(
      input.groupId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Group.RuleCustom_ByGroupId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Requires valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE] This endpoint replaces current group custom attributes entirely. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73311
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Group.AttributeCustom_ByGroupId, input]
 * }
 * ```
 */
export const useGroupApi_UpdateAttributeCustom_ByGroupIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      GroupResponseV1,
      AxiosError<ApiError>,
      SdkSetConfigParam & { groupId: string; data: UpdateGroupCustomAttributesRequestV1 }
    >,
    'mutationKey'
  >,
  callback?: (data: GroupResponseV1) => void
): UseMutationResult<
  GroupResponseV1,
  AxiosError<ApiError>,
  SdkSetConfigParam & { groupId: string; data: UpdateGroupCustomAttributesRequestV1 }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { groupId: string; data: UpdateGroupCustomAttributesRequestV1 }) => {
    const response = await GroupApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateAttributeCustom_ByGroupId(
      input.groupId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Group.AttributeCustom_ByGroupId],
    mutationFn,
    ...options
  })
}

/**
 * Requires valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; This endpoint replaces current group custom attributes entirely. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73311
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Group.AttributeCustom_ByGroupId_v2, input]
 * }
 * ```
 */
export const useGroupApi_UpdateAttributeCustom_ByGroupIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      GroupResponseV1,
      AxiosError<ApiError>,
      SdkSetConfigParam & { groupId: string; data: UpdateGroupCustomAttributesRequestV1 }
    >,
    'mutationKey'
  >,
  callback?: (data: GroupResponseV1) => void
): UseMutationResult<
  GroupResponseV1,
  AxiosError<ApiError>,
  SdkSetConfigParam & { groupId: string; data: UpdateGroupCustomAttributesRequestV1 }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { groupId: string; data: UpdateGroupCustomAttributesRequestV1 }) => {
    const response = await GroupApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateAttributeCustom_ByGroupId_v2(input.groupId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Group.AttributeCustom_ByGroupId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Delete group predefined rule based on the allowed action. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73309
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Group.RuleDefined_ByGroupId_ByAllowedAction, input]
 * }
 * ```
 */
export const useGroupApi_DeleteRuleDefined_ByGroupId_ByAllowedActionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { groupId: string; allowedAction: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { groupId: string; allowedAction: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { groupId: string; allowedAction: string }) => {
    const response = await GroupApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteRuleDefined_ByGroupId_ByAllowedAction(input.groupId, input.allowedAction)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Group.RuleDefined_ByGroupId_ByAllowedAction],
    mutationFn,
    ...options
  })
}

/**
 * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update predefined group rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token If the rule action is not defined in the group, it will be added immediately to the predefined group rule Action Code: 73310
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Group.RuleDefined_ByGroupId_ByAllowedAction, input]
 * }
 * ```
 */
export const useGroupApi_UpdateRuleDefined_ByGroupId_ByAllowedActionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      GroupResponseV1,
      AxiosError<ApiError>,
      SdkSetConfigParam & { groupId: string; allowedAction: string; data: UpdateGroupPredefinedRuleRequestV1 }
    >,
    'mutationKey'
  >,
  callback?: (data: GroupResponseV1) => void
): UseMutationResult<
  GroupResponseV1,
  AxiosError<ApiError>,
  SdkSetConfigParam & { groupId: string; allowedAction: string; data: UpdateGroupPredefinedRuleRequestV1 }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { groupId: string; allowedAction: string; data: UpdateGroupPredefinedRuleRequestV1 }
  ) => {
    const response = await GroupApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRuleDefined_ByGroupId_ByAllowedAction(input.groupId, input.allowedAction, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Group.RuleDefined_ByGroupId_ByAllowedAction],
    mutationFn,
    ...options
  })
}

/**
 * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Delete group predefined rule based on the allowed action. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token Action Code: 73309
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Group.RuleDefined_ByGroupId_ByAllowedAction_v2, input]
 * }
 * ```
 */
export const useGroupApi_DeleteRuleDefined_ByGroupId_ByAllowedActionMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { groupId: string; allowedAction: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { groupId: string; allowedAction: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { groupId: string; allowedAction: string }) => {
    const response = await GroupApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteRuleDefined_ByGroupId_ByAllowedAction_v2(input.groupId, input.allowedAction)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Group.RuleDefined_ByGroupId_ByAllowedAction_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required valid user authentication Required Member Role Permission: &#34;GROUP [UPDATE]&#34; Update predefined group rule. This endpoint will check the group ID of the user based on the access token and compare it with the group ID in path parameter. It will also check the member role of the user based on the access token If the rule action is not defined in the group, it will be added immediately to the predefined group rule Action Code: 73310
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Group.RuleDefined_ByGroupId_ByAllowedAction_v2, input]
 * }
 * ```
 */
export const useGroupApi_UpdateRuleDefined_ByGroupId_ByAllowedActionMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      GroupResponseV1,
      AxiosError<ApiError>,
      SdkSetConfigParam & { groupId: string; allowedAction: string; data: UpdateGroupPredefinedRuleRequestV1 }
    >,
    'mutationKey'
  >,
  callback?: (data: GroupResponseV1) => void
): UseMutationResult<
  GroupResponseV1,
  AxiosError<ApiError>,
  SdkSetConfigParam & { groupId: string; allowedAction: string; data: UpdateGroupPredefinedRuleRequestV1 }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { groupId: string; allowedAction: string; data: UpdateGroupPredefinedRuleRequestV1 }
  ) => {
    const response = await GroupApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRuleDefined_ByGroupId_ByAllowedAction_v2(input.groupId, input.allowedAction, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Group.RuleDefined_ByGroupId_ByAllowedAction_v2],
    mutationFn,
    ...options
  })
}
