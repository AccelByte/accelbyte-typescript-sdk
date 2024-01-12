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
import { AdminTagAdmin$ } from './endpoints/AdminTagAdmin$.js'
import { CreateTagRequest } from '../generated-definitions/CreateTagRequest.js'
import { CreateTagResponse } from '../generated-definitions/CreateTagResponse.js'
import { PaginatedGetTagResponse } from '../generated-definitions/PaginatedGetTagResponse.js'

export function AdminTagAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required permission ADMIN:NAMESPACE:{namespace}:UGCCONFIG [READ]
   */
  async function getTags(queryParams?: { limit?: number; offset?: number }): Promise<PaginatedGetTagResponse> {
    const $ = new AdminTagAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getTags(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission ADMIN:NAMESPACE:{namespace}:UGCCONFIG [CREATE] creates a new tag
   */
  async function createTag(data: CreateTagRequest): Promise<CreateTagResponse> {
    const $ = new AdminTagAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createTag(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission ADMIN:NAMESPACE:{namespace}:UGCCONFIG [DELETE]
   */
  async function deleteTag_ByTagId(tagId: string): Promise<unknown> {
    const $ = new AdminTagAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteTag_ByTagId(tagId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission ADMIN:NAMESPACE:{namespace}:UGCCONFIG [UPDATE] updates a tag
   */
  async function updateTag_ByTagId(tagId: string, data: CreateTagRequest): Promise<CreateTagResponse> {
    const $ = new AdminTagAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateTag_ByTagId(tagId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getTags,
    createTag,
    deleteTag_ByTagId,
    updateTag_ByTagId
  }
}
