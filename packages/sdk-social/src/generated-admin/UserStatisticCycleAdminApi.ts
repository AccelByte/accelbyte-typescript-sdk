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
import { UserStatCycleItemPagingSlicedResult } from '../generated-definitions/UserStatCycleItemPagingSlicedResult.js'
import { UserStatisticCycleAdmin$ } from './endpoints/UserStatisticCycleAdmin$.js'

export function UserStatisticCycleAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * List user&#39;s statCycleItems by statCycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycle items&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStatCycleitems_ByUserId_ByCycleId(
    userId: string,
    cycleId: string,
    queryParams?: { isPublic?: boolean | null; limit?: number; offset?: number; sortBy?: string | null; statCodes?: string | null }
  ): Promise<UserStatCycleItemPagingSlicedResult> {
    const $ = new UserStatisticCycleAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getStatCycleitems_ByUserId_ByCycleId(userId, cycleId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getStatCycleitems_ByUserId_ByCycleId
  }
}
