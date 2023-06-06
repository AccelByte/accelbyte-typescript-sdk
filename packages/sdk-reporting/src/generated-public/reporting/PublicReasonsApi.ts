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
import { PublicReasonListResponse } from './definitions/PublicReasonListResponse.js'
import { PublicReasons$ } from './endpoints/PublicReasons$.js'
import { ReasonGroupListResponse } from './definitions/ReasonGroupListResponse.js'

export function PublicReasonsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  async function getReasons(queryParams?: {
    group?: string | null
    limit?: number
    offset?: number
    title?: string | null
  }): Promise<PublicReasonListResponse> {
    const $ = new PublicReasons$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getReasons(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Return list of reason groups ID and title under given namespace.
   */
  async function getReasonGroups(queryParams?: { limit?: number; offset?: number }): Promise<ReasonGroupListResponse> {
    const $ = new PublicReasons$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getReasonGroups(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getReasons,
    getReasonGroups
  }
}
