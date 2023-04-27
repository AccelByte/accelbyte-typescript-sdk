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
import { Section$ } from './endpoints/Section$.js'
import { SectionInfoArray } from './definitions/SectionInfoArray.js'

export function SectionApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This API is used to list active section contents.<p>Other detail info: <ul><li><i>Required permission</i>: resource=NAMESPACE:{namespace}:USER:{userId}:STORE, action=2 (READ)</li><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store sections)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store sections)</li><li><i>Returns</i>: active section contents</li></ul>
   */
  async function getSections_ByUserId(
    userId: string,
    queryParams?: { storeId?: string | null; viewId?: string | null; region?: string | null; language?: string | null }
  ): Promise<SectionInfoArray> {
    const $ = new Section$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getSections_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getSections_ByUserId
  }
}
