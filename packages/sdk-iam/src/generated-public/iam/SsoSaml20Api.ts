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
import { SsoSaml20$ } from './endpoints/SsoSaml20$'

export function SsoSaml20Api(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  async function postAuthenticateSamlSso_ByPlatformId(
    platformId: string,
    queryParams: { state: string | null; code?: string | null; error?: string | null }
  ): Promise<unknown> {
    const $ = new SsoSaml20$(Network.create(requestConfig), namespace, cache)
    const resp = await $.postAuthenticateSamlSso_ByPlatformId(platformId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    postAuthenticateSamlSso_ByPlatformId
  }
}
