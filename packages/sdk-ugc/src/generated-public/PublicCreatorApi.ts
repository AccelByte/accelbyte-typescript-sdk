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
import { CreatorResponse } from '../generated-definitions/CreatorResponse.js'
import { PaginatedCreatorOverviewResponse } from '../generated-definitions/PaginatedCreatorOverviewResponse.js'
import { PublicCreator$ } from './endpoints/PublicCreator$.js'

export function PublicCreatorApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  async function getUsers(queryParams?: {
    limit?: number
    offset?: number
    orderby?: string | null
    sortby?: string | null
  }): Promise<PaginatedCreatorOverviewResponse> {
    const $ = new PublicCreator$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getUsers(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Public user can access without token or if token specified, requires valid user token
   */
  async function getUser_ByUserId(userId: string): Promise<CreatorResponse> {
    const $ = new PublicCreator$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getUser_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getUsers,
    getUser_ByUserId
  }
}
