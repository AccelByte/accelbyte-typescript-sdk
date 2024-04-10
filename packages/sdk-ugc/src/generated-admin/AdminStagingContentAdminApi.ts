/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { AdminStagingContentAdmin$ } from './endpoints/AdminStagingContentAdmin$.js'
import { ApproveStagingContentRequest } from '../generated-definitions/ApproveStagingContentRequest.js'
import { PaginatedListStagingContentResponse } from '../generated-definitions/PaginatedListStagingContentResponse.js'
import { StagingContentResponse } from '../generated-definitions/StagingContentResponse.js'

export function AdminStagingContentAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * List content that need admin&#39;s approval
   */
  async function getStagingContents(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: string | null
    status?: string | null
  }): Promise<PaginatedListStagingContentResponse> {
    const $ = new AdminStagingContentAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getStagingContents(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get staging content by ID
   */
  async function getStagingContent_ByContentId(contentId: string): Promise<StagingContentResponse> {
    const $ = new AdminStagingContentAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getStagingContent_ByContentId(contentId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * List user content&#39;s that need admin approval
   */
  async function getStagingContents_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; status?: string | null }
  ): Promise<PaginatedListStagingContentResponse> {
    const $ = new AdminStagingContentAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getStagingContents_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Approved content will shown to public player. Rejected content stays in staging area and couldn&#39;t be seen by other player
   */
  async function createApprove_ByContentId(contentId: string, data: ApproveStagingContentRequest): Promise<StagingContentResponse> {
    const $ = new AdminStagingContentAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createApprove_ByContentId(contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getStagingContents,
    getStagingContent_ByContentId,
    getStagingContents_ByUserId,
    createApprove_ByContentId
  }
}
