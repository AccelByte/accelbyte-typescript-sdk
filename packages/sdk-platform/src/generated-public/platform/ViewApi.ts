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
import { View$ } from './endpoints/View$'
import { ViewInfoArray } from './definitions/ViewInfoArray'

export function ViewApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This API is used to get all views.<p>Other detail info: <ul><li><i>Required permission</i>: resource=NAMESPACE:{namespace}:USER:{userId}:STORE, action=2 (READ)</li><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store views)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store views)</li><li><i>Returns</i>: all views</li></ul>
   */
  async function getViews_ByUserId(
    userId: string,
    queryParams?: { storeId?: string | null; language?: string | null }
  ): Promise<ViewInfoArray> {
    const $ = new View$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getViews_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getViews_ByUserId
  }
}
