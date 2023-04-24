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
import { GetMemberRequestsListResponseV1 } from './definitions/GetMemberRequestsListResponseV1'
import { MemberRequest$ } from './endpoints/MemberRequest$'

export function MemberRequestApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * <p>Required valid user authentication </p> <p>This endpoint is used to Get My Join Request To The Groups</p> <p>Get My Join Request To The Groups for the user calling this endpoint. It will check any join request group for this user</p> <p>Action Code: 73502</p>
   */
  async function getUsersMeJoinRequest(queryParams?: { limit?: number; offset?: number }): Promise<GetMemberRequestsListResponseV1> {
    const $ = new MemberRequest$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeJoinRequest(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>This endpoint is used to Get Group Invitation Request List</p> <p>Get Group Invitation Request List for the user calling this endpoint. It will check any group invitation for this user</p> <p>Action Code: 73502</p>
   */
  async function getUsersMeInviteRequest(queryParams?: { limit?: number; offset?: number }): Promise<GetMemberRequestsListResponseV1> {
    const $ = new MemberRequest$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeInviteRequest(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:JOIN [READ]"</p> <p>This endpoint is used to Get Group Join Request List</p> <p>Get Group Join Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint</p> <p>Action Code: 73501</p>
   */
  async function getJoinRequest_ByGroupId(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<GetMemberRequestsListResponseV1> {
    const $ = new MemberRequest$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getJoinRequest_ByGroupId(groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:JOIN [READ]"</p> <p>This endpoint is used to Get Group Join Request List</p> <p>Get Group Join Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint</p> <p>Action Code: 73501</p>
   */
  async function getJoinRequest_ByGroupId_ByNS(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<GetMemberRequestsListResponseV1> {
    const $ = new MemberRequest$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getJoinRequest_ByGroupId_ByNS(groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * <p>Required valid user authentication </p> <p>Required Member Role Permission: "GROUP:JOIN [READ]"</p> <p>This endpoint is used to Get Group Invite Request List</p> <p>Get Group Invite Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint</p> <p>Action Code: 73501</p>
   */
  async function getInviteRequest_ByGroupId(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<GetMemberRequestsListResponseV1> {
    const $ = new MemberRequest$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getInviteRequest_ByGroupId(groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getUsersMeJoinRequest,
    getUsersMeInviteRequest,
    getJoinRequest_ByGroupId,
    getJoinRequest_ByGroupId_ByNS,
    getInviteRequest_ByGroupId
  }
}
