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
import { AdminGroupAdmin$ } from './endpoints/AdminGroupAdmin$.js'

export function AdminGroupAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Get user group paginated
   */
  async function getGroups(queryParams?: { limit?: number; offset?: number }): Promise<PaginatedGroupResponse> {
    const $ = new AdminGroupAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getGroups(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create group
   */
  async function createGroup(data: CreateGroupRequest): Promise<CreateGroupResponse> {
    const $ = new AdminGroupAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createGroup(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete group by group ID
   */
  async function deleteGroup_ByGroupId(groupId: string): Promise<unknown> {
    const $ = new AdminGroupAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteGroup_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user group by group ID
   */
  async function getGroup_ByGroupId(groupId: string): Promise<CreateGroupResponse> {
    const $ = new AdminGroupAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getGroup_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Replace group name and contents with new ones.
   */
  async function updateGroup_ByGroupId(groupId: string, data: CreateGroupRequest): Promise<CreateGroupResponse> {
    const $ = new AdminGroupAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateGroup_ByGroupId(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user group paginated
   */
  async function getGroups_ByUserId(userId: string, queryParams?: { limit?: number; offset?: number }): Promise<PaginatedGroupResponse> {
    const $ = new AdminGroupAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getGroups_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get content belong to a group
   */
  async function getContents_ByGroupId(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<PaginatedContentDownloadResponse> {
    const $ = new AdminGroupAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getContents_ByGroupId(groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get contents belong to a group
   */
  async function getContents_ByGroupId_ByNS(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<PaginatedContentDownloadResponseV2> {
    const $ = new AdminGroupAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getContents_ByGroupId_ByNS(groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete group
   */
  async function deleteGroup_ByUserId_ByGroupId(userId: string, groupId: string): Promise<unknown> {
    const $ = new AdminGroupAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteGroup_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user group by group ID
   */
  async function getGroup_ByUserId_ByGroupId(userId: string, groupId: string): Promise<CreateGroupResponse> {
    const $ = new AdminGroupAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getGroup_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Replace group name and contents with new ones.
   */
  async function updateGroup_ByUserId_ByGroupId(userId: string, groupId: string, data: CreateGroupRequest): Promise<CreateGroupResponse> {
    const $ = new AdminGroupAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateGroup_ByUserId_ByGroupId(userId, groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get content belong to a group
   */
  async function getContents_ByUserId_ByGroupId(
    userId: string,
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<PaginatedContentDownloadResponse> {
    const $ = new AdminGroupAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getContents_ByUserId_ByGroupId(userId, groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get contents belong to a group
   */
  async function getContents_ByUserId_ByGroupId_ByNS(
    userId: string,
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<PaginatedContentDownloadResponseV2> {
    const $ = new AdminGroupAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getContents_ByUserId_ByGroupId_ByNS(userId, groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getGroups,
    createGroup,
    deleteGroup_ByGroupId,
    getGroup_ByGroupId,
    updateGroup_ByGroupId,
    getGroups_ByUserId,
    getContents_ByGroupId,
    getContents_ByGroupId_ByNS,
    deleteGroup_ByUserId_ByGroupId,
    getGroup_ByUserId_ByGroupId,
    updateGroup_ByUserId_ByGroupId,
    getContents_ByUserId_ByGroupId,
    getContents_ByUserId_ByGroupId_ByNS
  }
}
