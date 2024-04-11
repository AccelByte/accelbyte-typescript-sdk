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
import { AdminTagsAdmin$ } from './endpoints/AdminTagsAdmin$.js'
import { ListTagsResponse } from '../generated-definitions/ListTagsResponse.js'
import { TagRequest } from '../generated-definitions/TagRequest.js'

export function AdminTagsAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * ## Description Retrieve list of available tags by namespace
   */
  async function getTags(queryParams?: { limit?: number; offset?: number }): Promise<ListTagsResponse> {
    const $ = new AdminTagsAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getTags(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Description This endpoint will create new tags
   */
  async function createTag(data: TagRequest): Promise<unknown> {
    const $ = new AdminTagsAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createTag(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ## Description This endpoint will delete tag by name
   */
  async function deleteTag_ByTag(tag: string): Promise<unknown> {
    const $ = new AdminTagsAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteTag_ByTag(tag)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getTags,
    createTag,
    deleteTag_ByTag
  }
}
