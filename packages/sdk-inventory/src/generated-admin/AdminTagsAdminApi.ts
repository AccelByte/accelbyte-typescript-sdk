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
import { CreateTagReq } from '../generated-definitions/CreateTagReq.js'
import { CreateTagResp } from '../generated-definitions/CreateTagResp.js'
import { ListTagsResp } from '../generated-definitions/ListTagsResp.js'

export function AdminTagsAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   *  This endpoint will list all tags in a namespace. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:TAG [READ]
   */
  async function getTags(queryParams?: {
    limit?: number
    offset?: number
    owner?: string | null
    sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'name' | 'name:asc' | 'name:desc'
  }): Promise<ListTagsResp> {
    const $ = new AdminTagsAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getTags(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  This endpoint will create a new tag. The tag name must be unique per namespace. It is safe to call this endpoint even if the tag already exists. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:TAG [CREATE]
   */
  async function createTag(data: CreateTagReq): Promise<CreateTagResp> {
    const $ = new AdminTagsAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createTag(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  This endpoint will delete a tag by tagName in a specified namespace. If the tagName doesn&#39;t exist in a namespace, it&#39;ll return not found. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:TAG [DELETE]
   */
  async function deleteTag_ByTagName(tagName: string): Promise<unknown> {
    const $ = new AdminTagsAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteTag_ByTagName(tagName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getTags,
    createTag,
    deleteTag_ByTagName
  }
}
