/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { GetMemberRequestsListResponseV1 } from '../generated-definitions/GetMemberRequestsListResponseV1.js'
import { MemberRequest$ } from './endpoints/MemberRequest$.js'

export function MemberRequestApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * Required valid user authentication This endpoint is used to Get My Join Request To The Groups Get My Join Request To The Groups for the user calling this endpoint. It will check any join request group for this user Action Code: 73502
   */
  async function getUsersMeJoinRequest(queryParams?: { limit?: number; offset?: number }): Promise<GetMemberRequestsListResponseV1> {
    const $ = new MemberRequest$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getUsersMeJoinRequest(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication This endpoint is used to Get Group Invitation Request List Get Group Invitation Request List for the user calling this endpoint. It will check any group invitation for this user Action Code: 73502
   */
  async function getUsersMeInviteRequest(queryParams?: { limit?: number; offset?: number }): Promise<GetMemberRequestsListResponseV1> {
    const $ = new MemberRequest$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getUsersMeInviteRequest(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [READ]&#34; This endpoint is used to Get Group Join Request List Get Group Join Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint Action Code: 73501
   */
  async function getJoinRequest_ByGroupId(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<GetMemberRequestsListResponseV1> {
    const $ = new MemberRequest$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getJoinRequest_ByGroupId(groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [READ]&#34; This endpoint is used to Get Group Join Request List Get Group Join Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint Action Code: 73501
   */
  async function getJoinRequest_ByGroupId_ByNS(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<GetMemberRequestsListResponseV1> {
    const $ = new MemberRequest$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getJoinRequest_ByGroupId_ByNS(groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [READ]&#34; This endpoint is used to Get Group Invite Request List Get Group Invite Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint Action Code: 73501
   */
  async function getInviteRequest_ByGroupId(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<GetMemberRequestsListResponseV1> {
    const $ = new MemberRequest$(Network.create(requestConfig), namespace, isZodEnabled)
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
