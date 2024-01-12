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
import { RetrieveUserInfoCacheStatusResponseArray } from '../generated-definitions/RetrieveUserInfoCacheStatusResponseArray.js'
import { UserInfoAdmin$ } from './endpoints/UserInfoAdmin$.js'

export function UserInfoAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Get user info cache last updated time per namespace.&lt;br&gt;The query parameter namespaces can be a list of namespace separated by comma.&lt;br&gt;If query parameter namespaces is empty, user info cache status for all available namespaces will be returned. &lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:*:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getUserInfo(queryParams?: { namespaces?: string | null }): Promise<RetrieveUserInfoCacheStatusResponseArray> {
    const $ = new UserInfoAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUserInfo(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getUserInfo
  }
}
