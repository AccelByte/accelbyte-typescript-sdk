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
import { CreateGroupRequest } from '../generated-definitions/CreateGroupRequest.js'
import { CreateGroupResponse } from '../generated-definitions/CreateGroupResponse.js'
import { PaginatedContentDownloadResponse } from '../generated-definitions/PaginatedContentDownloadResponse.js'
import { PaginatedContentDownloadResponseV2 } from '../generated-definitions/PaginatedContentDownloadResponseV2.js'
import { PaginatedGroupResponse } from '../generated-definitions/PaginatedGroupResponse.js'
import { PublicGroup$ } from './endpoints/PublicGroup$.js'

export function PublicGroupApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Get user groups paginated
   */
  async function getGroups_ByUserId(userId: string, queryParams?: { limit?: number; offset?: number }): Promise<PaginatedGroupResponse> {
    const $ = new PublicGroup$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getGroups_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create group
   */
  async function createGroup_ByUserId(userId: string, data: CreateGroupRequest): Promise<CreateGroupResponse> {
    const $ = new PublicGroup$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createGroup_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete user group by group ID
   */
  async function deleteGroup_ByUserId_ByGroupId(userId: string, groupId: string): Promise<unknown> {
    const $ = new PublicGroup$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteGroup_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user groups by group ID
   */
  async function getGroup_ByUserId_ByGroupId(userId: string, groupId: string): Promise<CreateGroupResponse> {
    const $ = new PublicGroup$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getGroup_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Replace group name and contents with new ones
   */
  async function updateGroup_ByUserId_ByGroupId(userId: string, groupId: string, data: CreateGroupRequest): Promise<CreateGroupResponse> {
    const $ = new PublicGroup$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateGroup_ByUserId_ByGroupId(userId, groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get content that belong to a group
   */
  async function getContents_ByUserId_ByGroupId(
    userId: string,
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<PaginatedContentDownloadResponse> {
    const $ = new PublicGroup$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getContents_ByUserId_ByGroupId(userId, groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get content belong to a group
   */
  async function getContents_ByUserId_ByGroupId_ByNS(
    userId: string,
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<PaginatedContentDownloadResponseV2> {
    const $ = new PublicGroup$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getContents_ByUserId_ByGroupId_ByNS(userId, groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getGroups_ByUserId,
    createGroup_ByUserId,
    deleteGroup_ByUserId_ByGroupId,
    getGroup_ByUserId_ByGroupId,
    updateGroup_ByUserId_ByGroupId,
    getContents_ByUserId_ByGroupId,
    getContents_ByUserId_ByGroupId_ByNS
  }
}
