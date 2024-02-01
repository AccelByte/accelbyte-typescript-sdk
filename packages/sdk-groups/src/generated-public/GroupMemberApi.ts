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
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to leave from group.&lt;/p&gt; &lt;p&gt;leave from group. Admin is not allowed to leave the group. This endpoint will also give response if the user does not belong to any group.&lt;/p&gt; &lt;p&gt;Action Code: 73404&lt;/p&gt;
   */
  async function createLeave(): Promise<LeaveGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createLeave()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to get user group information.&lt;/p&gt; &lt;p&gt;Get user group information. If user does not belong to any group, it will return warning to give information about it&lt;/p&gt; &lt;p&gt;Group Member Status:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;JOIN : status of user requested to join group &lt;/li&gt; &lt;li&gt;INVITE: status of user invited to a group &lt;/li&gt; &lt;li&gt;JOINED: status of user already joined to a group&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Action Code: 73405&lt;/p&gt;
   */
  async function getUser_ByUserId(userId: string): Promise<GetUserGroupInformationResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getUser_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to get user joined group information.&lt;/p&gt; &lt;p&gt;Get user group joined information. If user does not belong to any group, it will return warning to give information about it&lt;/p&gt; &lt;p&gt;Group Member Status:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;JOINED: status of user already joined to a group&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Action Code: 73405&lt;/p&gt;
   */
  async function getUsersMeGroups(queryParams?: { limit?: number; offset?: number }): Promise<GetGroupMemberListResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getUsersMeGroups(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP:KICK [CREATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to kick group member.&lt;/p&gt; &lt;p&gt;Kick group member. This endpoint will check the member and group information, and also the role permission of the the user who accesses this endpoint&lt;/p&gt; &lt;p&gt;Action Code: 73409&lt;/p&gt;
   */
  async function createKick_ByUserId(userId: string): Promise<KickGroupMemberResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createKick_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to join as group member&lt;/p&gt; &lt;p&gt;Join to the group. This endpoint will check the the the type of the group based on the groupID.&lt;/p&gt; &lt;p&gt;Additional Information:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;User cannot join to the group with PRIVATE type&lt;/li&gt; &lt;li&gt;Joining PUBLIC group type will create join request and need approval from the privileged group member to accept the request to become the member&lt;/li&gt; &lt;li&gt;Joining OPEN group type will make this user become member of that group immediately&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;This endpoint will return status field to give information whether the user is JOINED or REQUESTED to join to the specific group&lt;/p&gt; &lt;p&gt;Action Code: 73403&lt;/p&gt;
   */
  async function createJoin_ByGroupId(groupId: string): Promise<JoinGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createJoin_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP:INVITE [CREATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to invite specific user to the group.&lt;/p&gt; &lt;p&gt;invite specific user to the group. If specific user is already have the join request to the group, this endpoint will notify if this user already have join request that needs to be accepted / rejected&lt;/p&gt; &lt;p&gt;Invited user will receive notification through lobby.&lt;/p&gt; &lt;p&gt;Action Code: 73406&lt;/p&gt; &lt;br&gt; &lt;p&gt;memberRolePermissions example value :&lt;/p&gt; &lt;p&gt;&#34;action&#34;: 1&lt;/p&gt; &lt;p&gt;&#34;resourceName&#34;: &#34;GROUP:INVITE&#34;&lt;/p&gt; &lt;p&gt;The invited user will have a permission to invite another user to the group&lt;p/&gt;
   */
  async function createInvite_ByUserId(userId: string): Promise<UserInvitationResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createInvite_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to join as group member&lt;/p&gt; &lt;p&gt;Join to the group. This endpoint will check the the the type of the group based on the groupID.&lt;/p&gt; &lt;p&gt;Additional Information:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;User cannot join to the group with PRIVATE type&lt;/li&gt; &lt;li&gt;Joining PUBLIC group type will create join request and need approval from the privileged group member to accept the request to become the member&lt;/li&gt; &lt;li&gt;Joining OPEN group type will make this user become member of that group immediately&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;This endpoint will return status field to give information whether the user is JOINED or REQUESTED to join to the specific group&lt;/p&gt; &lt;p&gt;Action Code: 73403&lt;/p&gt;
   */
  async function createJoin_ByGroupId_ByNS(groupId: string): Promise<JoinGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createJoin_ByGroupId_ByNS(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to leave from group.&lt;/p&gt; &lt;p&gt;leave from group. Admin is not allowed to leave the group. This endpoint will also give response if the user does not belong to any group.&lt;/p&gt; &lt;p&gt;Action Code: 73404&lt;/p&gt;
   */
  async function createLeave_ByGroupId(groupId: string): Promise<LeaveGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createLeave_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to get list of group members.&lt;/p&gt; &lt;p&gt;Action Code: 73410&lt;/p&gt;
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
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP:JOIN [CREATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to accept group join request.&lt;/p&gt; &lt;p&gt;Accept group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet.&lt;/p&gt; &lt;p&gt;This endpoint will also check if the specific user is already joined to specific group&lt;/p&gt; &lt;p&gt;Action Code: 73407&lt;/p&gt;
   */
  async function createJoinAccept_ByUserId(userId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createJoinAccept_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP:JOIN [CREATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to reject group join request.&lt;/p&gt; &lt;p&gt;Reject group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet.&lt;/p&gt; &lt;p&gt;This endpoint will also check if the specific user is already joined to specific group&lt;/p&gt; &lt;p&gt;Action Code: 73408&lt;/p&gt;
   */
  async function createJoinReject_ByUserId(userId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createJoinReject_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Requires valid user authentication&lt;/p&gt; &lt;p&gt;This endpoint allows user to cancel request to join specific group.&lt;/p&gt; &lt;p&gt;Action Code: 73411&lt;/p&gt;
   */
  async function createJoinCancel_ByGroupId(groupId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createJoinCancel_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to accept group invitation.&lt;/p&gt; &lt;p&gt;Accept group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet.&lt;/p&gt; &lt;p&gt;This endpoint will also check if the user who access this endpoint is already joined to specific group&lt;/p&gt; &lt;p&gt;Accessing this endpoint will make all requests (invite / join request) will be deleted for the user who access this endpoint&lt;/p&gt; &lt;p&gt;Existing members will receive notification of newly accepted member.&lt;/p&gt; &lt;p&gt;Action Code: 73401&lt;/p&gt;
   */
  async function createInviteAccept_ByGroupId(groupId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createInviteAccept_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to reject group invitation.&lt;/p&gt; &lt;p&gt;Reject group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet.&lt;/p&gt; &lt;p&gt;Action Code: 73402&lt;/p&gt;
   */
  async function createInviteReject_ByGroupId(groupId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createInviteReject_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to accept group invitation.&lt;/p&gt; &lt;p&gt;Accept group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet.&lt;/p&gt; &lt;p&gt;This endpoint will also check if the user who access this endpoint is already joined to specific group&lt;/p&gt; &lt;p&gt;Accessing this endpoint will make all requests (invite / join request) will be deleted for the user who access this endpoint&lt;/p&gt; &lt;p&gt;Existing members will receive notification of newly accepted member.&lt;/p&gt; &lt;p&gt;Action Code: 73401&lt;/p&gt;
   */
  async function createInviteAccept_ByGroupId_ByNS(groupId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createInviteAccept_ByGroupId_ByNS(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to reject group invitation.&lt;/p&gt; &lt;p&gt;Reject group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet.&lt;/p&gt; &lt;p&gt;Action Code: 73402&lt;/p&gt;
   */
  async function createInviteReject_ByGroupId_ByNS(groupId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createInviteReject_ByGroupId_ByNS(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP:KICK [CREATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to kick group member.&lt;/p&gt; &lt;p&gt;Kick group member. This endpoint will check the member and group information, and also the role permission of the the user who accesses this endpoint&lt;/p&gt; &lt;p&gt;Action Code: 73409&lt;/p&gt;
   */
  async function createKick_ByUserId_ByGroupId(userId: string, groupId: string): Promise<KickGroupMemberResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createKick_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP:INVITE [CREATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to invite specific user to the group.&lt;/p&gt; &lt;p&gt;invite specific user to the group. If specific user is already have the join request to the group, this endpoint will notify if this user already have join request that needs to be accepted / rejected&lt;/p&gt; &lt;p&gt;Invited user will receive notification through lobby.&lt;/p&gt; &lt;p&gt;Action Code: 73406&lt;/p&gt; &lt;br&gt; &lt;p&gt;memberRolePermissions example value :&lt;/p&gt; &lt;p&gt;&#34;action&#34;: 1&lt;/p&gt; &lt;p&gt;&#34;resourceName&#34;: &#34;GROUP:INVITE&#34;&lt;/p&gt; &lt;p&gt;The invited user will have a permission to invite another user to the group&lt;p/&gt;
   */
  async function createInvite_ByUserId_ByGroupId(userId: string, groupId: string): Promise<UserInvitationResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createInvite_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [READ]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to get user group status information.&lt;/p&gt; &lt;p&gt;get user group status information. This endpoint will check the member and group information, and also the role permission of the the user who accesses this endpoint&lt;/p&gt; &lt;p&gt;Action Code: 73409&lt;/p&gt;
   */
  async function getStatus_ByUserId_ByGroupId(userId: string, groupId: string): Promise<GetUserGroupInformationResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getStatus_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP:JOIN [CREATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to accept group join request.&lt;/p&gt; &lt;p&gt;Accept group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet.&lt;/p&gt; &lt;p&gt;This endpoint will also check if the specific user is already joined to specific group&lt;/p&gt; &lt;p&gt;Action Code: 73407&lt;/p&gt;
   */
  async function createJoinAccept_ByUserId_ByGroupId(userId: string, groupId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createJoinAccept_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP:JOIN [CREATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to reject group join request.&lt;/p&gt; &lt;p&gt;Reject group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet.&lt;/p&gt; &lt;p&gt;This endpoint will also check if the specific user is already joined to specific group&lt;/p&gt; &lt;p&gt;Action Code: 73408&lt;/p&gt;
   */
  async function createJoinReject_ByUserId_ByGroupId(userId: string, groupId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createJoinReject_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP:INVITE [DELETE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to cancel invitation group member.&lt;/p&gt; &lt;p&gt;cancel invitation group member. This endpoint will cancel invitation to specific user, and also the role permission of the the user who accesses this endpoint&lt;/p&gt; &lt;p&gt;Action Code: 73409&lt;/p&gt;
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
