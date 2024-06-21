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
import { ListTagsResp } from '../generated-definitions/ListTagsResp.js'
import { PublicTags$ } from './endpoints/PublicTags$.js'

export function PublicTagsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   *  This endpoint will list all tags in a namespace. The response body will be in the form of standard pagination.
   */
  async function getTags(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'name' | 'name:asc' | 'name:desc'
  }): Promise<ListTagsResp> {
    const $ = new PublicTags$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getTags(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getTags
  }
}
