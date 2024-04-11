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
import { PaginatedListStagingContentResponse } from '../generated-definitions/PaginatedListStagingContentResponse.js'
import { PublicStagingContent$ } from './endpoints/PublicStagingContent$.js'
import { StagingContentResponse } from '../generated-definitions/StagingContentResponse.js'
import { UpdateStagingContentRequest } from '../generated-definitions/UpdateStagingContentRequest.js'

export function PublicStagingContentApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * List user staging contents
   */
  async function getStagingContents_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; status?: string | null }
  ): Promise<PaginatedListStagingContentResponse> {
    const $ = new PublicStagingContent$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getStagingContents_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete user staging content by ID
   */
  async function deleteStagingContent_ByUserId_ByContentId(userId: string, contentId: string): Promise<unknown> {
    const $ = new PublicStagingContent$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteStagingContent_ByUserId_ByContentId(userId, contentId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user staging content by ID
   */
  async function getStagingContent_ByUserId_ByContentId(userId: string, contentId: string): Promise<StagingContentResponse> {
    const $ = new PublicStagingContent$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getStagingContent_ByUserId_ByContentId(userId, contentId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update staging content
   */
  async function updateStagingContent_ByUserId_ByContentId(
    userId: string,
    contentId: string,
    data: UpdateStagingContentRequest
  ): Promise<StagingContentResponse> {
    const $ = new PublicStagingContent$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateStagingContent_ByUserId_ByContentId(userId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getStagingContents_ByUserId,
    deleteStagingContent_ByUserId_ByContentId,
    getStagingContent_ByUserId_ByContentId,
    updateStagingContent_ByUserId_ByContentId
  }
}
