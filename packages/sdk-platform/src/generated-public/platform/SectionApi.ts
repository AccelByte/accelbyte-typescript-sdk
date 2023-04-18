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
import { Section$ } from './endpoints/Section$'
import { SectionInfoArray } from './definitions/SectionInfoArray'

export function SectionApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

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
