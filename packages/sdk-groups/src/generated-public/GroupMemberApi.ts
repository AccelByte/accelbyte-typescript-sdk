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
import { CancelInvitationGroupResponseV2 } from '../generated-definitions/CancelInvitationGroupResponseV2.js'
import { GetGroupMemberListResponseV1 } from '../generated-definitions/GetGroupMemberListResponseV1.js'
import { GetUserGroupInformationResponseV1 } from '../generated-definitions/GetUserGroupInformationResponseV1.js'
import { GroupMember$ } from './endpoints/GroupMember$.js'
import { JoinGroupResponseV1 } from '../generated-definitions/JoinGroupResponseV1.js'
import { KickGroupMemberResponseV1 } from '../generated-definitions/KickGroupMemberResponseV1.js'
import { LeaveGroupResponseV1 } from '../generated-definitions/LeaveGroupResponseV1.js'
import { MemberRequestGroupResponseV1 } from '../generated-definitions/MemberRequestGroupResponseV1.js'
import { UserInvitationResponseV1 } from '../generated-definitions/UserInvitationResponseV1.js'

export function GroupMemberApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Required valid user authentication This endpoint is used to leave from group. leave from group. Admin is not allowed to leave the group. This endpoint will also give response if the user does not belong to any group. Action Code: 73404
   */
  async function createLeave(): Promise<LeaveGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createLeave()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication This endpoint is used to get user group information. Get user group information. If user does not belong to any group, it will return warning to give information about it Group Member Status: * JOIN : status of user requested to join group * INVITE: status of user invited to a group * JOINED: status of user already joined to a group Action Code: 73405
   */
  async function getUser_ByUserId(userId: string): Promise<GetUserGroupInformationResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getUser_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication This endpoint is used to get user joined group information. Get user group joined information. If user does not belong to any group, it will return warning to give information about it Group Member Status: * JOINED: status of user already joined to a group Action Code: 73405
   */
  async function getUsersMeGroups(queryParams?: { limit?: number; offset?: number }): Promise<GetGroupMemberListResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getUsersMeGroups(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:KICK [CREATE]&#34; This endpoint is used to kick group member. Kick group member. This endpoint will check the member and group information, and also the role permission of the the user who accesses this endpoint Action Code: 73409
   */
  async function createKick_ByUserId(userId: string): Promise<KickGroupMemberResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createKick_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication This endpoint is used to join as group member Join to the group. This endpoint will check the the the type of the group based on the groupID. Additional Information: * User cannot join to the group with PRIVATE type * Joining PUBLIC group type will create join request and need approval from the privileged group member to accept the request to become the member * Joining OPEN group type will make this user become member of that group immediately This endpoint will return status field to give information whether the user is JOINED or REQUESTED to join to the specific group Action Code: 73403
   */
  async function createJoin_ByGroupId(groupId: string): Promise<JoinGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createJoin_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:INVITE [CREATE]&#34; This endpoint is used to invite specific user to the group. invite specific user to the group. If specific user is already have the join request to the group, this endpoint will notify if this user already have join request that needs to be accepted / rejected Invited user will receive notification through lobby. Action Code: 73406 memberRolePermissions example value : &#34;action&#34;: 1 &#34;resourceName&#34;: &#34;GROUP:INVITE&#34; The invited user will have a permission to invite another user to the group
   */
  async function createInvite_ByUserId(userId: string): Promise<UserInvitationResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createInvite_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication This endpoint is used to join as group member Join to the group. This endpoint will check the the the type of the group based on the groupID. Additional Information: * User cannot join to the group with PRIVATE type * Joining PUBLIC group type will create join request and need approval from the privileged group member to accept the request to become the member * Joining OPEN group type will make this user become member of that group immediately This endpoint will return status field to give information whether the user is JOINED or REQUESTED to join to the specific group Action Code: 73403
   */
  async function createJoin_ByGroupId_ByNS(groupId: string): Promise<JoinGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createJoin_ByGroupId_ByNS(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication This endpoint is used to leave from group. leave from group. Admin is not allowed to leave the group. This endpoint will also give response if the user does not belong to any group. Action Code: 73404
   */
  async function createLeave_ByGroupId(groupId: string): Promise<LeaveGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createLeave_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication This endpoint is used to get list of group members. Action Code: 73410
   */
  async function getMembers_ByGroupId(
    groupId: string,
    queryParams?: { limit?: number; offset?: number; order?: string | null }
  ): Promise<GetGroupMemberListResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getMembers_ByGroupId(groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [CREATE]&#34; This endpoint is used to accept group join request. Accept group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet. This endpoint will also check if the specific user is already joined to specific group Action Code: 73407
   */
  async function createJoinAccept_ByUserId(userId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createJoinAccept_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [CREATE]&#34; This endpoint is used to reject group join request. Reject group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet. This endpoint will also check if the specific user is already joined to specific group Action Code: 73408
   */
  async function createJoinReject_ByUserId(userId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createJoinReject_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Requires valid user authentication This endpoint allows user to cancel request to join specific group. Action Code: 73411
   */
  async function createJoinCancel_ByGroupId(groupId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createJoinCancel_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication This endpoint is used to accept group invitation. Accept group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet. This endpoint will also check if the user who access this endpoint is already joined to specific group Accessing this endpoint will make all requests (invite / join request) will be deleted for the user who access this endpoint Existing members will receive notification of newly accepted member. Action Code: 73401
   */
  async function createInviteAccept_ByGroupId(groupId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createInviteAccept_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication This endpoint is used to reject group invitation. Reject group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet. Action Code: 73402
   */
  async function createInviteReject_ByGroupId(groupId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createInviteReject_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication This endpoint is used to accept group invitation. Accept group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet. This endpoint will also check if the user who access this endpoint is already joined to specific group Accessing this endpoint will make all requests (invite / join request) will be deleted for the user who access this endpoint Existing members will receive notification of newly accepted member. Action Code: 73401
   */
  async function createInviteAccept_ByGroupId_ByNS(groupId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createInviteAccept_ByGroupId_ByNS(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication This endpoint is used to reject group invitation. Reject group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet. Action Code: 73402
   */
  async function createInviteReject_ByGroupId_ByNS(groupId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createInviteReject_ByGroupId_ByNS(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:KICK [CREATE]&#34; This endpoint is used to kick group member. Kick group member. This endpoint will check the member and group information, and also the role permission of the the user who accesses this endpoint Action Code: 73409
   */
  async function createKick_ByUserId_ByGroupId(userId: string, groupId: string): Promise<KickGroupMemberResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createKick_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:INVITE [CREATE]&#34; This endpoint is used to invite specific user to the group. invite specific user to the group. If specific user is already have the join request to the group, this endpoint will notify if this user already have join request that needs to be accepted / rejected Invited user will receive notification through lobby. Action Code: 73406 memberRolePermissions example value : &#34;action&#34;: 1 &#34;resourceName&#34;: &#34;GROUP:INVITE&#34; The invited user will have a permission to invite another user to the group
   */
  async function createInvite_ByUserId_ByGroupId(userId: string, groupId: string): Promise<UserInvitationResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createInvite_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP [READ]&#34; This endpoint is used to get user group status information. get user group status information. This endpoint will check the member and group information, and also the role permission of the the user who accesses this endpoint Action Code: 73409
   */
  async function getStatus_ByUserId_ByGroupId(userId: string, groupId: string): Promise<GetUserGroupInformationResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getStatus_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [CREATE]&#34; This endpoint is used to accept group join request. Accept group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet. This endpoint will also check if the specific user is already joined to specific group Action Code: 73407
   */
  async function createJoinAccept_ByUserId_ByGroupId(userId: string, groupId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createJoinAccept_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [CREATE]&#34; This endpoint is used to reject group join request. Reject group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet. This endpoint will also check if the specific user is already joined to specific group Action Code: 73408
   */
  async function createJoinReject_ByUserId_ByGroupId(userId: string, groupId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createJoinReject_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:INVITE [DELETE]&#34; This endpoint is used to cancel invitation group member. cancel invitation group member. This endpoint will cancel invitation to specific user, and also the role permission of the the user who accesses this endpoint Action Code: 73409
   */
  async function createInviteCancel_ByUserId_ByGroupId(userId: string, groupId: string): Promise<CancelInvitationGroupResponseV2> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createInviteCancel_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createLeave,
    getUser_ByUserId,
    getUsersMeGroups,
    createKick_ByUserId,
    createJoin_ByGroupId,
    createInvite_ByUserId,
    createJoin_ByGroupId_ByNS,
    createLeave_ByGroupId,
    getMembers_ByGroupId,
    createJoinAccept_ByUserId,
    createJoinReject_ByUserId,
    createJoinCancel_ByGroupId,
    createInviteAccept_ByGroupId,
    createInviteReject_ByGroupId,
    createInviteAccept_ByGroupId_ByNS,
    createInviteReject_ByGroupId_ByNS,
    createKick_ByUserId_ByGroupId,
    createInvite_ByUserId_ByGroupId,
    getStatus_ByUserId_ByGroupId,
    createJoinAccept_ByUserId_ByGroupId,
    createJoinReject_ByUserId_ByGroupId,
    createInviteCancel_ByUserId_ByGroupId
  }
}
