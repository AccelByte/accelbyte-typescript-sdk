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
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to leave from group.&lt;/p&gt; &lt;p&gt;leave from group. Admin is not allowed to leave the group. This endpoint will also give response if the user does not belong to any group.&lt;/p&gt; &lt;p&gt;Action Code: 73404&lt;/p&gt;
   */
  createLeave(): Promise<IResponse<LeaveGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/leave'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, LeaveGroupResponseV1, 'LeaveGroupResponseV1')
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to get user group information.&lt;/p&gt; &lt;p&gt;Get user group information. If user does not belong to any group, it will return warning to give information about it&lt;/p&gt; &lt;p&gt;Group Member Status:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;JOIN : status of user requested to join group &lt;/li&gt; &lt;li&gt;INVITE: status of user invited to a group &lt;/li&gt; &lt;li&gt;JOINED: status of user already joined to a group&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Action Code: 73405&lt;/p&gt;
   */
  getUser_ByUserId(userId: string): Promise<IResponseWithSync<GetUserGroupInformationResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/users/{userId}'.replace('{namespace}', this.namespace).replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetUserGroupInformationResponseV1, 'GetUserGroupInformationResponseV1')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to get user joined group information.&lt;/p&gt; &lt;p&gt;Get user group joined information. If user does not belong to any group, it will return warning to give information about it&lt;/p&gt; &lt;p&gt;Group Member Status:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;JOINED: status of user already joined to a group&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Action Code: 73405&lt;/p&gt;
   */
  getUsersMeGroups(queryParams?: { limit?: number; offset?: number }): Promise<IResponseWithSync<GetGroupMemberListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/users/me/groups'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetGroupMemberListResponseV1, 'GetGroupMemberListResponseV1')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP:KICK [CREATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to kick group member.&lt;/p&gt; &lt;p&gt;Kick group member. This endpoint will check the member and group information, and also the role permission of the the user who accesses this endpoint&lt;/p&gt; &lt;p&gt;Action Code: 73409&lt;/p&gt;
   */
  createKick_ByUserId(userId: string): Promise<IResponse<KickGroupMemberResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/users/{userId}/kick'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, KickGroupMemberResponseV1, 'KickGroupMemberResponseV1')
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to join as group member&lt;/p&gt; &lt;p&gt;Join to the group. This endpoint will check the the the type of the group based on the groupID.&lt;/p&gt; &lt;p&gt;Additional Information:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;User cannot join to the group with PRIVATE type&lt;/li&gt; &lt;li&gt;Joining PUBLIC group type will create join request and need approval from the privileged group member to accept the request to become the member&lt;/li&gt; &lt;li&gt;Joining OPEN group type will make this user become member of that group immediately&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;This endpoint will return status field to give information whether the user is JOINED or REQUESTED to join to the specific group&lt;/p&gt; &lt;p&gt;Action Code: 73403&lt;/p&gt;
   */
  createJoin_ByGroupId(groupId: string): Promise<IResponse<JoinGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}/join'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, JoinGroupResponseV1, 'JoinGroupResponseV1')
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP:INVITE [CREATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to invite specific user to the group.&lt;/p&gt; &lt;p&gt;invite specific user to the group. If specific user is already have the join request to the group, this endpoint will notify if this user already have join request that needs to be accepted / rejected&lt;/p&gt; &lt;p&gt;Invited user will receive notification through lobby.&lt;/p&gt; &lt;p&gt;Action Code: 73406&lt;/p&gt; &lt;br&gt; &lt;p&gt;memberRolePermissions example value :&lt;/p&gt; &lt;p&gt;&#34;action&#34;: 1&lt;/p&gt; &lt;p&gt;&#34;resourceName&#34;: &#34;GROUP:INVITE&#34;&lt;/p&gt; &lt;p&gt;The invited user will have a permission to invite another user to the group&lt;p/&gt;
   */
  createInvite_ByUserId(userId: string): Promise<IResponse<UserInvitationResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/users/{userId}/invite'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, UserInvitationResponseV1, 'UserInvitationResponseV1')
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to join as group member&lt;/p&gt; &lt;p&gt;Join to the group. This endpoint will check the the the type of the group based on the groupID.&lt;/p&gt; &lt;p&gt;Additional Information:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;User cannot join to the group with PRIVATE type&lt;/li&gt; &lt;li&gt;Joining PUBLIC group type will create join request and need approval from the privileged group member to accept the request to become the member&lt;/li&gt; &lt;li&gt;Joining OPEN group type will make this user become member of that group immediately&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;This endpoint will return status field to give information whether the user is JOINED or REQUESTED to join to the specific group&lt;/p&gt; &lt;p&gt;Action Code: 73403&lt;/p&gt;
   */
  createJoin_ByGroupId_ByNS(groupId: string): Promise<IResponse<JoinGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}/join'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, JoinGroupResponseV1, 'JoinGroupResponseV1')
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to leave from group.&lt;/p&gt; &lt;p&gt;leave from group. Admin is not allowed to leave the group. This endpoint will also give response if the user does not belong to any group.&lt;/p&gt; &lt;p&gt;Action Code: 73404&lt;/p&gt;
   */
  createLeave_ByGroupId(groupId: string): Promise<IResponse<LeaveGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}/leave'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, LeaveGroupResponseV1, 'LeaveGroupResponseV1')
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to get list of group members.&lt;/p&gt; &lt;p&gt;Action Code: 73410&lt;/p&gt;
   */
  getMembers_ByGroupId(
    groupId: string,
    queryParams?: { limit?: number; offset?: number; order?: string | null }
  ): Promise<IResponseWithSync<GetGroupMemberListResponseV1>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}/members'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetGroupMemberListResponseV1, 'GetGroupMemberListResponseV1')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP:JOIN [CREATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to accept group join request.&lt;/p&gt; &lt;p&gt;Accept group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet.&lt;/p&gt; &lt;p&gt;This endpoint will also check if the specific user is already joined to specific group&lt;/p&gt; &lt;p&gt;Action Code: 73407&lt;/p&gt;
   */
  createJoinAccept_ByUserId(userId: string): Promise<IResponse<MemberRequestGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/users/{userId}/join/accept'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, MemberRequestGroupResponseV1, 'MemberRequestGroupResponseV1')
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP:JOIN [CREATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to reject group join request.&lt;/p&gt; &lt;p&gt;Reject group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet.&lt;/p&gt; &lt;p&gt;This endpoint will also check if the specific user is already joined to specific group&lt;/p&gt; &lt;p&gt;Action Code: 73408&lt;/p&gt;
   */
  createJoinReject_ByUserId(userId: string): Promise<IResponse<MemberRequestGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/users/{userId}/join/reject'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, MemberRequestGroupResponseV1, 'MemberRequestGroupResponseV1')
  }

  /**
   * &lt;p&gt;Requires valid user authentication&lt;/p&gt; &lt;p&gt;This endpoint allows user to cancel request to join specific group.&lt;/p&gt; &lt;p&gt;Action Code: 73411&lt;/p&gt;
   */
  createJoinCancel_ByGroupId(groupId: string): Promise<IResponse<MemberRequestGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}/join/cancel'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, MemberRequestGroupResponseV1, 'MemberRequestGroupResponseV1')
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to accept group invitation.&lt;/p&gt; &lt;p&gt;Accept group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet.&lt;/p&gt; &lt;p&gt;This endpoint will also check if the user who access this endpoint is already joined to specific group&lt;/p&gt; &lt;p&gt;Accessing this endpoint will make all requests (invite / join request) will be deleted for the user who access this endpoint&lt;/p&gt; &lt;p&gt;Existing members will receive notification of newly accepted member.&lt;/p&gt; &lt;p&gt;Action Code: 73401&lt;/p&gt;
   */
  createInviteAccept_ByGroupId(groupId: string): Promise<IResponse<MemberRequestGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}/invite/accept'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, MemberRequestGroupResponseV1, 'MemberRequestGroupResponseV1')
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to reject group invitation.&lt;/p&gt; &lt;p&gt;Reject group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet.&lt;/p&gt; &lt;p&gt;Action Code: 73402&lt;/p&gt;
   */
  createInviteReject_ByGroupId(groupId: string): Promise<IResponse<MemberRequestGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/groups/{groupId}/invite/reject'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, MemberRequestGroupResponseV1, 'MemberRequestGroupResponseV1')
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to accept group invitation.&lt;/p&gt; &lt;p&gt;Accept group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet.&lt;/p&gt; &lt;p&gt;This endpoint will also check if the user who access this endpoint is already joined to specific group&lt;/p&gt; &lt;p&gt;Accessing this endpoint will make all requests (invite / join request) will be deleted for the user who access this endpoint&lt;/p&gt; &lt;p&gt;Existing members will receive notification of newly accepted member.&lt;/p&gt; &lt;p&gt;Action Code: 73401&lt;/p&gt;
   */
  createInviteAccept_ByGroupId_ByNS(groupId: string): Promise<IResponse<MemberRequestGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}/invite/accept'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, MemberRequestGroupResponseV1, 'MemberRequestGroupResponseV1')
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;This endpoint is used to reject group invitation.&lt;/p&gt; &lt;p&gt;Reject group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet.&lt;/p&gt; &lt;p&gt;Action Code: 73402&lt;/p&gt;
   */
  createInviteReject_ByGroupId_ByNS(groupId: string): Promise<IResponse<MemberRequestGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/groups/{groupId}/invite/reject'
      .replace('{namespace}', this.namespace)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, MemberRequestGroupResponseV1, 'MemberRequestGroupResponseV1')
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP:KICK [CREATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to kick group member.&lt;/p&gt; &lt;p&gt;Kick group member. This endpoint will check the member and group information, and also the role permission of the the user who accesses this endpoint&lt;/p&gt; &lt;p&gt;Action Code: 73409&lt;/p&gt;
   */
  createKick_ByUserId_ByGroupId(userId: string, groupId: string): Promise<IResponse<KickGroupMemberResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/kick'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, KickGroupMemberResponseV1, 'KickGroupMemberResponseV1')
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP:INVITE [CREATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to invite specific user to the group.&lt;/p&gt; &lt;p&gt;invite specific user to the group. If specific user is already have the join request to the group, this endpoint will notify if this user already have join request that needs to be accepted / rejected&lt;/p&gt; &lt;p&gt;Invited user will receive notification through lobby.&lt;/p&gt; &lt;p&gt;Action Code: 73406&lt;/p&gt; &lt;br&gt; &lt;p&gt;memberRolePermissions example value :&lt;/p&gt; &lt;p&gt;&#34;action&#34;: 1&lt;/p&gt; &lt;p&gt;&#34;resourceName&#34;: &#34;GROUP:INVITE&#34;&lt;/p&gt; &lt;p&gt;The invited user will have a permission to invite another user to the group&lt;p/&gt;
   */
  createInvite_ByUserId_ByGroupId(userId: string, groupId: string): Promise<IResponse<UserInvitationResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/invite'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, UserInvitationResponseV1, 'UserInvitationResponseV1')
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP [READ]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to get user group status information.&lt;/p&gt; &lt;p&gt;get user group status information. This endpoint will check the member and group information, and also the role permission of the the user who accesses this endpoint&lt;/p&gt; &lt;p&gt;Action Code: 73409&lt;/p&gt;
   */
  getStatus_ByUserId_ByGroupId(userId: string, groupId: string): Promise<IResponseWithSync<GetUserGroupInformationResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/status'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetUserGroupInformationResponseV1, 'GetUserGroupInformationResponseV1')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP:JOIN [CREATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to accept group join request.&lt;/p&gt; &lt;p&gt;Accept group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet.&lt;/p&gt; &lt;p&gt;This endpoint will also check if the specific user is already joined to specific group&lt;/p&gt; &lt;p&gt;Action Code: 73407&lt;/p&gt;
   */
  createJoinAccept_ByUserId_ByGroupId(userId: string, groupId: string): Promise<IResponse<MemberRequestGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/join/accept'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, MemberRequestGroupResponseV1, 'MemberRequestGroupResponseV1')
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP:JOIN [CREATE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to reject group join request.&lt;/p&gt; &lt;p&gt;Reject group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet.&lt;/p&gt; &lt;p&gt;This endpoint will also check if the specific user is already joined to specific group&lt;/p&gt; &lt;p&gt;Action Code: 73408&lt;/p&gt;
   */
  createJoinReject_ByUserId_ByGroupId(userId: string, groupId: string): Promise<IResponse<MemberRequestGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/join/reject'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, MemberRequestGroupResponseV1, 'MemberRequestGroupResponseV1')
  }

  /**
   * &lt;p&gt;Required valid user authentication &lt;/p&gt; &lt;p&gt;Required Member Role Permission: &#34;GROUP:INVITE [DELETE]&#34;&lt;/p&gt; &lt;p&gt;This endpoint is used to cancel invitation group member.&lt;/p&gt; &lt;p&gt;cancel invitation group member. This endpoint will cancel invitation to specific user, and also the role permission of the the user who accesses this endpoint&lt;/p&gt; &lt;p&gt;Action Code: 73409&lt;/p&gt;
   */
  createInviteCancel_ByUserId_ByGroupId(userId: string, groupId: string): Promise<IResponse<CancelInvitationGroupResponseV2>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v2/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/invite/cancel'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{groupId}', groupId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, CancelInvitationGroupResponseV2, 'CancelInvitationGroupResponseV2')
  }
}
