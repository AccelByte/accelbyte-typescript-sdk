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
import { AdminAllReasonsResponse } from '../generated-definitions/AdminAllReasonsResponse.js'
import { AdminReasonListResponse } from '../generated-definitions/AdminReasonListResponse.js'
import { AdminReasonResponse } from '../generated-definitions/AdminReasonResponse.js'
import { AdminReasonsAdmin$ } from './endpoints/AdminReasonsAdmin$.js'
import { CreateReasonGroupRequest } from '../generated-definitions/CreateReasonGroupRequest.js'
import { CreateReasonRequest } from '../generated-definitions/CreateReasonRequest.js'
import { ReasonGroupListResponse } from '../generated-definitions/ReasonGroupListResponse.js'
import { ReasonGroupResponse } from '../generated-definitions/ReasonGroupResponse.js'
import { UnusedReasonListResponse } from '../generated-definitions/UnusedReasonListResponse.js'
import { UpdateReasonGroupRequest } from '../generated-definitions/UpdateReasonGroupRequest.js'

export function AdminReasonsAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * This endpoint get reasons with pagination
   */
  async function getReasons(queryParams?: {
    group?: string | null
    limit?: number
    offset?: number
    title?: string | null
  }): Promise<AdminReasonListResponse> {
    const $ = new AdminReasonsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getReasons(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint create a reason for a namespace.
   */
  async function createReason(data: CreateReasonRequest): Promise<AdminReasonResponse> {
    const $ = new AdminReasonsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createReason(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint get all reasons without pagination.
   */
  async function getReasonsAll(): Promise<AdminAllReasonsResponse> {
    const $ = new AdminReasonsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getReasonsAll()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Return list of reason groups ID and title under given namespace. To fetch the reasons inside a group, use get reason group endpoint.
   */
  async function getReasonGroups(queryParams?: { limit?: number; offset?: number }): Promise<ReasonGroupListResponse> {
    const $ = new AdminReasonsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getReasonGroups(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create a reason group for easier query. You can query reasons by specifying the group title in the list reasons query. Reason group title is case insensitive, meaning you can&#39;t have **reason** if you already create a reason titled **Reason**
   */
  async function createReasonGroup(data: CreateReasonGroupRequest): Promise<ReasonGroupResponse> {
    const $ = new AdminReasonsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createReasonGroup(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint get reasons not used by moderation rules.
   */
  async function getReasonsUnused(queryParams: {
    category: string | null
    extensionCategory?: string | null
  }): Promise<UnusedReasonListResponse> {
    const $ = new AdminReasonsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getReasonsUnused(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint delete a reason for a namespace with ID.
   */
  async function deleteReason_ByReasonId(reasonId: string): Promise<unknown> {
    const $ = new AdminReasonsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteReason_ByReasonId(reasonId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint get a single reason.
   */
  async function getReason_ByReasonId(reasonId: string): Promise<AdminReasonResponse> {
    const $ = new AdminReasonsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getReason_ByReasonId(reasonId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint update a reason for a namespace with ID.
   */
  async function patchReason_ByReasonId(reasonId: string, data: CreateReasonRequest): Promise<AdminReasonResponse> {
    const $ = new AdminReasonsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.patchReason_ByReasonId(reasonId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint delete a reason group for a namespace with ID.
   */
  async function deleteReasonGroup_ByGroupId(groupId: string): Promise<unknown> {
    const $ = new AdminReasonsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteReasonGroup_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getReasonGroup_ByGroupId(groupId: string): Promise<ReasonGroupResponse> {
    const $ = new AdminReasonsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getReasonGroup_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Reason group title is case insensitive, meaning you can&#39;t have **reason** if you already create a reason titled **Reason** If no reasonIds passed when updating, the current reasons under the reason group will be kept (reasons will not be removed from the group).
   */
  async function patchReasonGroup_ByGroupId(groupId: string, data: UpdateReasonGroupRequest): Promise<ReasonGroupResponse> {
    const $ = new AdminReasonsAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.patchReasonGroup_ByGroupId(groupId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getReasons,
    createReason,
    getReasonsAll,
    getReasonGroups,
    createReasonGroup,
    getReasonsUnused,
    deleteReason_ByReasonId,
    getReason_ByReasonId,
    patchReason_ByReasonId,
    deleteReasonGroup_ByGroupId,
    getReasonGroup_ByGroupId,
    patchReasonGroup_ByGroupId
  }
}
