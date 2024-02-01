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
import { AdminConfigAdmin$ } from './endpoints/AdminConfigAdmin$.js'
import { PaginatedGetConfigsResponse } from '../generated-definitions/PaginatedGetConfigsResponse.js'
import { UpdateConfigRequest } from '../generated-definitions/UpdateConfigRequest.js'

export function AdminConfigAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:UGCCONFIG [READ]&lt;/b&gt;
   */
  async function getConfigs(queryParams?: { limit?: number; offset?: number }): Promise<PaginatedGetConfigsResponse> {
    const $ = new AdminConfigAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getConfigs(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:UGCCONFIG [UPDATE]&lt;/b&gt;. It will create a new config if the &lt;i&gt;key&lt;/i&gt; doesn&#39;t exist. Allowed key value: - &lt;i&gt;contentReview&lt;/i&gt;: &lt;i&gt;enabled&lt;/i&gt;,&lt;i&gt;disabled&lt;/i&gt;
   */
  async function patchConfig_ByKey(key: string, data: UpdateConfigRequest): Promise<unknown> {
    const $ = new AdminConfigAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.patchConfig_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getConfigs,
    patchConfig_ByKey
  }
}
