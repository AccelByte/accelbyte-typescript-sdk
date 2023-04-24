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
import { CreateGroupRequest } from './definitions/CreateGroupRequest'
import { CreateGroupResponse } from './definitions/CreateGroupResponse'
import { PaginatedContentDownloadResponse } from './definitions/PaginatedContentDownloadResponse'
import { PaginatedGroupResponse } from './definitions/PaginatedGroupResponse'
import { PublicGroup$ } from './endpoints/PublicGroup$'

export function PublicGroupApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENTGROUP [READ]</b>.
   */
  async function getGroups_ByUserId(userId: string, queryParams?: { limit?: number; offset?: number }): Promise<PaginatedGroupResponse> {
    const $ = new PublicGroup$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getGroups_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission NAMESPACE:{namespace}:USER:{userId}:CONTENTGROUP [CREATE]
   */
  async function createGroup_ByUserId(userId: string, data: CreateGroupRequest): Promise<CreateGroupResponse> {
    const $ = new PublicGroup$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createGroup_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENTGROUP [READ]</b>.
   */
  async function getGroup_ByUserId_ByGroupId(userId: string, groupId: string): Promise<CreateGroupResponse> {
    const $ = new PublicGroup$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getGroup_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission NAMESPACE:{namespace}:USER:{userId}:CONTENTGROUP [UPDATE] replace group name and contents with new ones
   */
  async function updateGroup_ByUserId_ByGroupId(userId: string, groupId: string, data: CreateGroupRequest): Promise<CreateGroupResponse> {
    const $ = new PublicGroup$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateGroup_ByUserId_ByGroupId(userId, groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission NAMESPACE:{namespace}:USER:{userId}:CONTENTGROUP [DELETE]
   */
  async function deleteGroup_ByUserId_ByGroupId(userId: string, groupId: string): Promise<unknown> {
    const $ = new PublicGroup$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteGroup_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission <b>NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]</b>.
   */
  async function getContents_ByUserId_ByGroupId(
    userId: string,
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<PaginatedContentDownloadResponse> {
    const $ = new PublicGroup$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getContents_ByUserId_ByGroupId(userId, groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getGroups_ByUserId,
    createGroup_ByUserId,
    getGroup_ByUserId_ByGroupId,
    updateGroup_ByUserId_ByGroupId,
    deleteGroup_ByUserId_ByGroupId,
    getContents_ByUserId_ByGroupId
  }
}
