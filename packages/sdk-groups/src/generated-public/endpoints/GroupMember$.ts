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
import { CancelInvitationGroupResponseV2 } from '../../generated-definitions/CancelInvitationGroupResponseV2.js'
import { GetGroupMemberListResponseV1 } from '../../generated-definitions/GetGroupMemberListResponseV1.js'
import { GetUserGroupInformationResponseV1 } from '../../generated-definitions/GetUserGroupInformationResponseV1.js'
import { JoinGroupResponseV1 } from '../../generated-definitions/JoinGroupResponseV1.js'
import { KickGroupMemberResponseV1 } from '../../generated-definitions/KickGroupMemberResponseV1.js'
import { LeaveGroupResponseV1 } from '../../generated-definitions/LeaveGroupResponseV1.js'
import { MemberRequestGroupResponseV1 } from '../../generated-definitions/MemberRequestGroupResponseV1.js'
import { UserInvitationResponseV1 } from '../../generated-definitions/UserInvitationResponseV1.js'

export class GroupMember$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * Required valid user authentication This endpoint is used to leave from group. leave from group. Admin is not allowed to leave the group. This endpoint will also give response if the user does not belong to any group. Action Code: 73404
   */
  createLeave(): Promise<IResponse<LeaveGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/leave'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, LeaveGroupResponseV1, 'LeaveGroupResponseV1')
  }

  /**
   * Required valid user authentication This endpoint is used to get user group information. Get user group information. If user does not belong to any group, it will return warning to give information about it Group Member Status: * JOIN : status of user requested to join group * INVITE: status of user invited to a group * JOINED: status of user already joined to a group Action Code: 73405
   */
  getUser_ByUserId(userId: string): Promise<IResponse<GetUserGroupInformationResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/users/{userId}'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      GetUserGroupInformationResponseV1,
      'GetUserGroupInformationResponseV1'
    )
  }

  /**
   * Required valid user authentication This endpoint is used to get user joined group information. Get user group joined information. If user does not belong to any group, it will return warning to give information about it Group Member Status: * JOINED: status of user already joined to a group Action Code: 73405
   */
  getUsersMeGroups(queryParams?: { limit?: number; offset?: number }): Promise<IResponse<GetGroupMemberListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/users/me/groups'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      GetGroupMemberListResponseV1,
      'GetGroupMemberListResponseV1'
    )
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:KICK [CREATE]&#34; This endpoint is used to kick group member. Kick group member. This endpoint will check the member and group information, and also the role permission of the the user who accesses this endpoint Action Code: 73409
   */
  createKick_ByUserId(userId: string): Promise<IResponse<KickGroupMemberResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/users/{userId}/kick'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, KickGroupMemberResponseV1, 'KickGroupMemberResponseV1')
  }

  /**
   * Required valid user authentication This endpoint is used to join as group member Join to the group. This endpoint will check the the the type of the group based on the groupID. Additional Information: * User cannot join to the group with PRIVATE type * Joining PUBLIC group type will create join request and need approval from the privileged group member to accept the request to become the member * Joining OPEN group type will make this user become member of that group immediately This endpoint will return status field to give information whether the user is JOINED or REQUESTED to join to the specific group Action Code: 73403
   */
  createJoin_ByGroupId(groupId: string): Promise<IResponse<JoinGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}/join'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, JoinGroupResponseV1, 'JoinGroupResponseV1')
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:INVITE [CREATE]&#34; This endpoint is used to invite specific user to the group. invite specific user to the group. If specific user is already have the join request to the group, this endpoint will notify if this user already have join request that needs to be accepted / rejected Invited user will receive notification through lobby. Action Code: 73406 memberRolePermissions example value : &#34;action&#34;: 1 &#34;resourceName&#34;: &#34;GROUP:INVITE&#34; The invited user will have a permission to invite another user to the group
   */
  createInvite_ByUserId(userId: string): Promise<IResponse<UserInvitationResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/users/{userId}/invite'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, UserInvitationResponseV1, 'UserInvitationResponseV1')
  }

  /**
   * Required valid user authentication This endpoint is used to join as group member Join to the group. This endpoint will check the the the type of the group based on the groupID. Additional Information: * User cannot join to the group with PRIVATE type * Joining PUBLIC group type will create join request and need approval from the privileged group member to accept the request to become the member * Joining OPEN group type will make this user become member of that group immediately This endpoint will return status field to give information whether the user is JOINED or REQUESTED to join to the specific group Action Code: 73403
   */
  createJoin_ByGroupId_ByNS(groupId: string): Promise<IResponse<JoinGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}/join'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, JoinGroupResponseV1, 'JoinGroupResponseV1')
  }

  /**
   * Required valid user authentication This endpoint is used to leave from group. leave from group. Admin is not allowed to leave the group. This endpoint will also give response if the user does not belong to any group. Action Code: 73404
   */
  createLeave_ByGroupId(groupId: string): Promise<IResponse<LeaveGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}/leave'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, LeaveGroupResponseV1, 'LeaveGroupResponseV1')
  }

  /**
   * Required valid user authentication This endpoint is used to get list of group members. Action Code: 73410
   */
  getMembers_ByGroupId(
    groupId: string,
    queryParams?: { limit?: number; offset?: number; order?: string | null }
  ): Promise<IResponse<GetGroupMemberListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}/members'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      GetGroupMemberListResponseV1,
      'GetGroupMemberListResponseV1'
    )
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [CREATE]&#34; This endpoint is used to accept group join request. Accept group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet. This endpoint will also check if the specific user is already joined to specific group Action Code: 73407
   */
  createJoinAccept_ByUserId(userId: string): Promise<IResponse<MemberRequestGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/users/{userId}/join/accept'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      MemberRequestGroupResponseV1,
      'MemberRequestGroupResponseV1'
    )
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [CREATE]&#34; This endpoint is used to reject group join request. Reject group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet. This endpoint will also check if the specific user is already joined to specific group Action Code: 73408
   */
  createJoinReject_ByUserId(userId: string): Promise<IResponse<MemberRequestGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/users/{userId}/join/reject'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      MemberRequestGroupResponseV1,
      'MemberRequestGroupResponseV1'
    )
  }

  /**
   * Requires valid user authentication This endpoint allows user to cancel request to join specific group. Action Code: 73411
   */
  createJoinCancel_ByGroupId(groupId: string): Promise<IResponse<MemberRequestGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}/join/cancel'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      MemberRequestGroupResponseV1,
      'MemberRequestGroupResponseV1'
    )
  }

  /**
   * Required valid user authentication This endpoint is used to accept group invitation. Accept group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet. This endpoint will also check if the user who access this endpoint is already joined to specific group Accessing this endpoint will make all requests (invite / join request) will be deleted for the user who access this endpoint Existing members will receive notification of newly accepted member. Action Code: 73401
   */
  createInviteAccept_ByGroupId(groupId: string): Promise<IResponse<MemberRequestGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}/invite/accept'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      MemberRequestGroupResponseV1,
      'MemberRequestGroupResponseV1'
    )
  }

  /**
   * Required valid user authentication This endpoint is used to reject group invitation. Reject group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet. Action Code: 73402
   */
  createInviteReject_ByGroupId(groupId: string): Promise<IResponse<MemberRequestGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}/invite/reject'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      MemberRequestGroupResponseV1,
      'MemberRequestGroupResponseV1'
    )
  }

  /**
   * Required valid user authentication This endpoint is used to accept group invitation. Accept group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet. This endpoint will also check if the user who access this endpoint is already joined to specific group Accessing this endpoint will make all requests (invite / join request) will be deleted for the user who access this endpoint Existing members will receive notification of newly accepted member. Action Code: 73401
   */
  createInviteAccept_ByGroupId_ByNS(groupId: string): Promise<IResponse<MemberRequestGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}/invite/accept'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      MemberRequestGroupResponseV1,
      'MemberRequestGroupResponseV1'
    )
  }

  /**
   * Required valid user authentication This endpoint is used to reject group invitation. Reject group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet. Action Code: 73402
   */
  createInviteReject_ByGroupId_ByNS(groupId: string): Promise<IResponse<MemberRequestGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}/invite/reject'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      MemberRequestGroupResponseV1,
      'MemberRequestGroupResponseV1'
    )
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:KICK [CREATE]&#34; This endpoint is used to kick group member. Kick group member. This endpoint will check the member and group information, and also the role permission of the the user who accesses this endpoint Action Code: 73409
   */
  createKick_ByUserId_ByGroupId(userId: string, groupId: string): Promise<IResponse<KickGroupMemberResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/kick'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, KickGroupMemberResponseV1, 'KickGroupMemberResponseV1')
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:INVITE [CREATE]&#34; This endpoint is used to invite specific user to the group. invite specific user to the group. If specific user is already have the join request to the group, this endpoint will notify if this user already have join request that needs to be accepted / rejected Invited user will receive notification through lobby. Action Code: 73406 memberRolePermissions example value : &#34;action&#34;: 1 &#34;resourceName&#34;: &#34;GROUP:INVITE&#34; The invited user will have a permission to invite another user to the group
   */
  createInvite_ByUserId_ByGroupId(userId: string, groupId: string): Promise<IResponse<UserInvitationResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/invite'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, UserInvitationResponseV1, 'UserInvitationResponseV1')
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP [READ]&#34; This endpoint is used to get user group status information. get user group status information. This endpoint will check the member and group information, and also the role permission of the the user who accesses this endpoint Action Code: 73409
   */
  getStatus_ByUserId_ByGroupId(userId: string, groupId: string): Promise<IResponse<GetUserGroupInformationResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/status'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      GetUserGroupInformationResponseV1,
      'GetUserGroupInformationResponseV1'
    )
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [CREATE]&#34; This endpoint is used to accept group join request. Accept group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet. This endpoint will also check if the specific user is already joined to specific group Action Code: 73407
   */
  createJoinAccept_ByUserId_ByGroupId(userId: string, groupId: string): Promise<IResponse<MemberRequestGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/join/accept'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      MemberRequestGroupResponseV1,
      'MemberRequestGroupResponseV1'
    )
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [CREATE]&#34; This endpoint is used to reject group join request. Reject group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet. This endpoint will also check if the specific user is already joined to specific group Action Code: 73408
   */
  createJoinReject_ByUserId_ByGroupId(userId: string, groupId: string): Promise<IResponse<MemberRequestGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/join/reject'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      MemberRequestGroupResponseV1,
      'MemberRequestGroupResponseV1'
    )
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:INVITE [DELETE]&#34; This endpoint is used to cancel invitation group member. cancel invitation group member. This endpoint will cancel invitation to specific user, and also the role permission of the the user who accesses this endpoint Action Code: 73409
   */
  createInviteCancel_ByUserId_ByGroupId(userId: string, groupId: string): Promise<IResponse<CancelInvitationGroupResponseV2>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/invite/cancel'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.isZodEnabled,
      () => resultPromise,
      CancelInvitationGroupResponseV2,
      'CancelInvitationGroupResponseV2'
    )
  }
}
