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
import { CancelInvitationGroupResponseV2 } from '../definitions/CancelInvitationGroupResponseV2'
import { GetGroupMemberListResponseV1 } from '../definitions/GetGroupMemberListResponseV1'
import { GetUserGroupInformationResponseV1 } from '../definitions/GetUserGroupInformationResponseV1'
import { JoinGroupResponseV1 } from '../definitions/JoinGroupResponseV1'
import { KickGroupMemberResponseV1 } from '../definitions/KickGroupMemberResponseV1'
import { LeaveGroupResponseV1 } from '../definitions/LeaveGroupResponseV1'
import { MemberRequestGroupResponseV1 } from '../definitions/MemberRequestGroupResponseV1'
import { UserInvitationResponseV1 } from '../definitions/UserInvitationResponseV1'

export class GroupMember$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * <p>Required valid user authentication </p> <p>This endpoint is used to leave from group.</p> <p>leave from group. Admin is not allowed to leave the group. This endpoint will also give response if the user does not belong to any group.</p> <p>Action Code: 73404</p>
   */
  createLeave(): Promise<IResponse<LeaveGroupResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/group/v1/public/namespaces/{namespace}/leave'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, LeaveGroupResponseV1, 'LeaveGroupResponseV1')
  }

  /**
   * <p>Required valid user authentication </p> <p>This endpoint is used to get user group information.</p> <p>Get user group information. If user does not belong to any group, it will return warning to give information about it</p> <p>Group Member Status:</p> <ul> <li>JOIN : status of user requested to join group </li> <li>INVITE: status of user invited to a group </li> <li>JOINED: status of user already joined to a group</li> </ul> <p>Action Code: 73405</p>
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
   * <p>Required valid user authentication </p> <p>This endpoint is used to get user joined group information.</p> <p>Get user group joined information. If user does not belong to any group, it will return warning to give information about it</p> <p>Group Member Status:</p> <ul> <li>JOINED: status of user already joined to a group</li> </ul> <p>Action Code: 73405</p>
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
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:KICK [CREATE]"</p> <p>This endpoint is used to kick group member.</p> <p>Kick group member. This endpoint will check the member and group information, and also the role permission of the the user who accesses this endpoint</p> <p>Action Code: 73409</p>
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
   * <p>Required valid user authentication </p> <p>This endpoint is used to join as group member</p> <p>Join to the group. This endpoint will check the the the type of the group based on the groupID.</p> <p>Additional Information:</p> <ul> <li>User cannot join to the group with PRIVATE type</li> <li>Joining PUBLIC group type will create join request and need approval from the privileged group member to accept the request to become the member</li> <li>Joining OPEN group type will make this user become member of that group immediately</li> </ul> <p>This endpoint will return status field to give information whether the user is JOINED or REQUESTED to join to the specific group</p> <p>Action Code: 73403</p>
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
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:INVITE [CREATE]"</p> <p>This endpoint is used to invite specific user to the group.</p> <p>invite specific user to the group. If specific user is already have the join request to the group, this endpoint will notify if this user already have join request that needs to be accepted / rejected</p> <p>Invited user will receive notification through lobby.</p> <p>Action Code: 73406</p> <br> <p>memberRolePermissions example value :</p> <p>"action": 1</p> <p>"resourceName": "GROUP:INVITE"</p> <p>The invited user will have a permission to invite another user to the group<p/>
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
   * <p>Required valid user authentication </p> <p>This endpoint is used to join as group member</p> <p>Join to the group. This endpoint will check the the the type of the group based on the groupID.</p> <p>Additional Information:</p> <ul> <li>User cannot join to the group with PRIVATE type</li> <li>Joining PUBLIC group type will create join request and need approval from the privileged group member to accept the request to become the member</li> <li>Joining OPEN group type will make this user become member of that group immediately</li> </ul> <p>This endpoint will return status field to give information whether the user is JOINED or REQUESTED to join to the specific group</p> <p>Action Code: 73403</p>
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
   * <p>Required valid user authentication </p> <p>This endpoint is used to leave from group.</p> <p>leave from group. Admin is not allowed to leave the group. This endpoint will also give response if the user does not belong to any group.</p> <p>Action Code: 73404</p>
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
   * <p>Required valid user authentication </p> <p>This endpoint is used to get list of group members.</p> <p>Action Code: 73410</p>
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
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:JOIN [CREATE]"</p> <p>This endpoint is used to accept group join request.</p> <p>Accept group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet.</p> <p>This endpoint will also check if the specific user is already joined to specific group</p> <p>Action Code: 73407</p>
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
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:JOIN [CREATE]"</p> <p>This endpoint is used to reject group join request.</p> <p>Reject group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet.</p> <p>This endpoint will also check if the specific user is already joined to specific group</p> <p>Action Code: 73408</p>
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
   * <p>Requires valid user authentication</p> <p>This endpoint allows user to cancel request to join specific group.</p> <p>Action Code: 73411</p>
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
   * <p>Required valid user authentication </p> <p>This endpoint is used to accept group invitation.</p> <p>Accept group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet.</p> <p>This endpoint will also check if the user who access this endpoint is already joined to specific group</p> <p>Accessing this endpoint will make all requests (invite / join request) will be deleted for the user who access this endpoint</p> <p>Existing members will receive notification of newly accepted member.</p> <p>Action Code: 73401</p>
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
   * <p>Required valid user authentication </p> <p>This endpoint is used to reject group invitation.</p> <p>Reject group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet.</p> <p>Action Code: 73402</p>
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
   * <p>Required valid user authentication </p> <p>This endpoint is used to accept group invitation.</p> <p>Accept group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet.</p> <p>This endpoint will also check if the user who access this endpoint is already joined to specific group</p> <p>Accessing this endpoint will make all requests (invite / join request) will be deleted for the user who access this endpoint</p> <p>Existing members will receive notification of newly accepted member.</p> <p>Action Code: 73401</p>
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
   * <p>Required valid user authentication </p> <p>This endpoint is used to reject group invitation.</p> <p>Reject group invitation. If specific user is not invited in the specific group ID, it will show the the error to show if the user is not invited yet.</p> <p>Action Code: 73402</p>
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
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:KICK [CREATE]"</p> <p>This endpoint is used to kick group member.</p> <p>Kick group member. This endpoint will check the member and group information, and also the role permission of the the user who accesses this endpoint</p> <p>Action Code: 73409</p>
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
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:INVITE [CREATE]"</p> <p>This endpoint is used to invite specific user to the group.</p> <p>invite specific user to the group. If specific user is already have the join request to the group, this endpoint will notify if this user already have join request that needs to be accepted / rejected</p> <p>Invited user will receive notification through lobby.</p> <p>Action Code: 73406</p> <br> <p>memberRolePermissions example value :</p> <p>"action": 1</p> <p>"resourceName": "GROUP:INVITE"</p> <p>The invited user will have a permission to invite another user to the group<p/>
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
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP [READ]"</p> <p>This endpoint is used to get user group status information.</p> <p>get user group status information. This endpoint will check the member and group information, and also the role permission of the the user who accesses this endpoint</p> <p>Action Code: 73409</p>
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
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:JOIN [CREATE]"</p> <p>This endpoint is used to accept group join request.</p> <p>Accept group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet.</p> <p>This endpoint will also check if the specific user is already joined to specific group</p> <p>Action Code: 73407</p>
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
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:JOIN [CREATE]"</p> <p>This endpoint is used to reject group join request.</p> <p>Reject group join request. If specific user is not asked to join the specific group ID, it will show the the error to show if the user is not asked to join yet.</p> <p>This endpoint will also check if the specific user is already joined to specific group</p> <p>Action Code: 73408</p>
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
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:INVITE [DELETE]"</p> <p>This endpoint is used to cancel invitation group member.</p> <p>cancel invitation group member. This endpoint will cancel invitation to specific user, and also the role permission of the the user who accesses this endpoint</p> <p>Action Code: 73409</p>
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
