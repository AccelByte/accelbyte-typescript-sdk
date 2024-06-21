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
import { GetGroupMemberListResponseV1 } from '../generated-definitions/GetGroupMemberListResponseV1.js'
import { GetUserGroupInformationResponseV1 } from '../generated-definitions/GetUserGroupInformationResponseV1.js'
import { GroupMemberAdmin$ } from './endpoints/GroupMemberAdmin$.js'

export function GroupMemberAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Required valid user authentication This endpoint is used to get user joined group information. Get user group joined information. If user does not belong to any group, it will return warning to give information about it Group Member Status: * JOINED: status of user already joined to a group
   */
  async function getGroups_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<GetGroupMemberListResponseV1> {
    const $ = new GroupMemberAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getGroups_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to get list of group members. Action Code: 73410
   */
  async function getMembers_ByGroupId(
    groupId: string,
    queryParams?: { limit?: number; offset?: number; order?: string | null }
  ): Promise<GetGroupMemberListResponseV1> {
    const $ = new GroupMemberAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getMembers_ByGroupId(groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint is used to get user group status information.
   */
  async function getStatus_ByUserId_ByGroupId(userId: string, groupId: string): Promise<GetUserGroupInformationResponseV1> {
    const $ = new GroupMemberAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getStatus_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getGroups_ByUserId,
    getMembers_ByGroupId,
    getStatus_ByUserId_ByGroupId
  }
}
