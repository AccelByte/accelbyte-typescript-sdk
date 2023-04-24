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
import { CancelInvitationGroupResponseV2 } from './definitions/CancelInvitationGroupResponseV2'
import { GetGroupMemberListResponseV1 } from './definitions/GetGroupMemberListResponseV1'
import { GetUserGroupInformationResponseV1 } from './definitions/GetUserGroupInformationResponseV1'
import { GroupMember$ } from './endpoints/GroupMember$'
import { JoinGroupResponseV1 } from './definitions/JoinGroupResponseV1'
import { KickGroupMemberResponseV1 } from './definitions/KickGroupMemberResponseV1'
import { LeaveGroupResponseV1 } from './definitions/LeaveGroupResponseV1'
import { MemberRequestGroupResponseV1 } from './definitions/MemberRequestGroupResponseV1'
import { UserInvitationResponseV1 } from './definitions/UserInvitationResponseV1'

export function GroupMemberApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * <p>Required valid user authentication </p> <p>This endpoint is used to leave from group.</p> <p>leave from group. Admin is not allowed to leave the group. This endpoint will also give response if the user does not belong to any group.</p> <p>Action Code: 73404</p>
   */
  async function createLeave(): Promise<LeaveGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createLeave()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>This endpoint is used to get user group information.</p> <p>Get user group information. If user does not belong to any group, it will return warning to give information about it</p> <p>Group Member Status:</p> <ul> <li>JOIN : status of user requested to join group </li> <li>INVITE: status of user invited to a group </li> <li>JOINED: status of user already joined to a group</li> </ul> <p>Action Code: 73405</p>
   */
  async function getUser_ByUserId(userId: string): Promise<GetUserGroupInformationResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUser_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>This endpoint is used to get user joined group information.</p> <p>Get user group joined information. If user does not belong to any group, it will return warning to give information about it</p> <p>Group Member Status:</p> <ul> <li>JOINED: status of user already joined to a group</li> </ul> <p>Action Code: 73405</p>
   */
  async function getUsersMeGroups(queryParams?: { limit?: number; offset?: number }): Promise<GetGroupMemberListResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeGroups(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:KICK [CREATE]"</p> <p>This endpoint is used to kick group member.</p> <p>Kick group member. This endpoint will check the member and group information, and also the role permission of the the user who accesses this endpoint</p> <p>Action Code: 73409</p>
   */
  async function createKick_ByUserId(userId: string): Promise<KickGroupMemberResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createKick_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>This endpoint is used to join as group member</p> <p>Join to the group. This endpoint will check the the the type of the group based on the groupID.</p> <p>Additional Information:</p> <ul> <li>User cannot join to the group with PRIVATE type</li> <li>Joining PUBLIC group type will create join request and need approval from the privileged group member to accept the request to become the member</li> <li>Joining OPEN group type will make this user become member of that group immediately</li> </ul> <p>This endpoint will return status field to give information whether the user is JOINED or REQUESTED to join to the specific group</p> <p>Action Code: 73403</p>
   */
  async function createJoin_ByGroupId(groupId: string): Promise<JoinGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createJoin_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:INVITE [CREATE]"</p> <p>This endpoint is used to invite specific user to the group.</p> <p>invite specific user to the group. If specific user is already have the join request to the group, this endpoint will notify if this user already have join request that needs to be accepted / rejected</p> <p>Invited user will receive notification through lobby.</p> <p>Action Code: 73406</p> <br> <p>memberRolePermissions example value :</p> <p>"action": 1</p> <p>"resourceName": "GROUP:INVITE"</p> <p>The invited user will have a permission to invite another user to the group<p/>
   */
  async function createInvite_ByUserId(userId: string): Promise<UserInvitationResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createInvite_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>This endpoint is used to join as group member</p> <p>Join to the group. This endpoint will check the the the type of the group based on the groupID.</p> <p>Additional Information:</p> <ul> <li>User cannot join to the group with PRIVATE type</li> <li>Joining PUBLIC group type will create join request and need approval from the privileged group member to accept the request to become the member</li> <li>Joining OPEN group type will make this user become member of that group immediately</li> </ul> <p>This endpoint will return status field to give information whether the user is JOINED or REQUESTED to join to the specific group</p> <p>Action Code: 73403</p>
   */
  async function createJoin_ByGroupId_ByNS(groupId: string): Promise<JoinGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createJoin_ByGroupId_ByNS(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>This endpoint is used to leave from group.</p> <p>leave from group. Admin is not allowed to leave the group. This endpoint will also give response if the user does not belong to any group.</p> <p>Action Code: 73404</p>
   */
  async function createLeave_ByGroupId(groupId: string): Promise<LeaveGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createLeave_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>This endpoint is used to get list of group members.</p> <p>Action Code: 73410</p>
   */
  async function getMembers_ByGroupId(
    groupId: string,
    queryParams?: { limit?: number; offset?: number; order?: string | null }
  ): Promise<GetGroupMemberListResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getMembers_ByGroupId(groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:JOIN [CREATE]"</p> <p>This endpoint is used to accept group join request.</p> <p>Accept group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet.</p> <p>This endpoint will also check if the specific user is already joined to specific group</p> <p>Action Code: 73407</p>
   */
  async function createJoinAccept_ByUserId(userId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createJoinAccept_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:JOIN [CREATE]"</p> <p>This endpoint is used to reject group join request.</p> <p>Reject group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet.</p> <p>This endpoint will also check if the specific user is already joined to specific group</p> <p>Action Code: 73408</p>
   */
  async function createJoinReject_ByUserId(userId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createJoinReject_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Requires valid user authentication</p> <p>This endpoint allows user to cancel request to join specific group.</p> <p>Action Code: 73411</p>
   */
  async function createJoinCancel_ByGroupId(groupId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createJoinCancel_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>This endpoint is used to accept group invitation.</p> <p>Accept group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet.</p> <p>This endpoint will also check if the user who access this endpoint is already joined to specific group</p> <p>Accessing this endpoint will make all requests (invite / join request) will be deleted for the user who access this endpoint</p> <p>Existing members will receive notification of newly accepted member.</p> <p>Action Code: 73401</p>
   */
  async function createInviteAccept_ByGroupId(groupId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createInviteAccept_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>This endpoint is used to reject group invitation.</p> <p>Reject group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet.</p> <p>Action Code: 73402</p>
   */
  async function createInviteReject_ByGroupId(groupId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createInviteReject_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>This endpoint is used to accept group invitation.</p> <p>Accept group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet.</p> <p>This endpoint will also check if the user who access this endpoint is already joined to specific group</p> <p>Accessing this endpoint will make all requests (invite / join request) will be deleted for the user who access this endpoint</p> <p>Existing members will receive notification of newly accepted member.</p> <p>Action Code: 73401</p>
   */
  async function createInviteAccept_ByGroupId_ByNS(groupId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createInviteAccept_ByGroupId_ByNS(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>This endpoint is used to reject group invitation.</p> <p>Reject group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet.</p> <p>Action Code: 73402</p>
   */
  async function createInviteReject_ByGroupId_ByNS(groupId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createInviteReject_ByGroupId_ByNS(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:KICK [CREATE]"</p> <p>This endpoint is used to kick group member.</p> <p>Kick group member. This endpoint will check the member and group information, and also the role permission of the the user who accesses this endpoint</p> <p>Action Code: 73409</p>
   */
  async function createKick_ByUserId_ByGroupId(userId: string, groupId: string): Promise<KickGroupMemberResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createKick_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:INVITE [CREATE]"</p> <p>This endpoint is used to invite specific user to the group.</p> <p>invite specific user to the group. If specific user is already have the join request to the group, this endpoint will notify if this user already have join request that needs to be accepted / rejected</p> <p>Invited user will receive notification through lobby.</p> <p>Action Code: 73406</p> <br> <p>memberRolePermissions example value :</p> <p>"action": 1</p> <p>"resourceName": "GROUP:INVITE"</p> <p>The invited user will have a permission to invite another user to the group<p/>
   */
  async function createInvite_ByUserId_ByGroupId(userId: string, groupId: string): Promise<UserInvitationResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createInvite_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP [READ]"</p> <p>This endpoint is used to get user group status information.</p> <p>get user group status information. This endpoint will check the member and group information, and also the role permission of the the user who accesses this endpoint</p> <p>Action Code: 73409</p>
   */
  async function getStatus_ByUserId_ByGroupId(userId: string, groupId: string): Promise<GetUserGroupInformationResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getStatus_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:JOIN [CREATE]"</p> <p>This endpoint is used to accept group join request.</p> <p>Accept group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet.</p> <p>This endpoint will also check if the specific user is already joined to specific group</p> <p>Action Code: 73407</p>
   */
  async function createJoinAccept_ByUserId_ByGroupId(userId: string, groupId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createJoinAccept_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:JOIN [CREATE]"</p> <p>This endpoint is used to reject group join request.</p> <p>Reject group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet.</p> <p>This endpoint will also check if the specific user is already joined to specific group</p> <p>Action Code: 73408</p>
   */
  async function createJoinReject_ByUserId_ByGroupId(userId: string, groupId: string): Promise<MemberRequestGroupResponseV1> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createJoinReject_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:INVITE [DELETE]"</p> <p>This endpoint is used to cancel invitation group member.</p> <p>cancel invitation group member. This endpoint will cancel invitation to specific user, and also the role permission of the the user who accesses this endpoint</p> <p>Action Code: 73409</p>
   */
  async function createInviteCancel_ByUserId_ByGroupId(userId: string, groupId: string): Promise<CancelInvitationGroupResponseV2> {
    const $ = new GroupMember$(Network.create(requestConfig), namespace, cache)
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
