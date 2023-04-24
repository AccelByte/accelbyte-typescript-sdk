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
import { CreatorResponse } from './definitions/CreatorResponse'
import { PaginatedCreatorOverviewResponse } from './definitions/PaginatedCreatorOverviewResponse'
import { PublicCreator$ } from './endpoints/PublicCreator$'

export function PublicCreatorApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  async function getUsers(queryParams?: {
    sortby?: string | null
    orderby?: string | null
    limit?: number
    offset?: number
  }): Promise<PaginatedCreatorOverviewResponse> {
    const $ = new PublicCreator$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsers(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  async function getUser_ByUserId(userId: string): Promise<CreatorResponse> {
    const $ = new PublicCreator$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUser_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getUsers,
    getUser_ByUserId
  }
}
