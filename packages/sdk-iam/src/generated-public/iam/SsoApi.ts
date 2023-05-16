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
import { Sso$ } from './endpoints/Sso$.js'

export function SsoApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  async function getSso_ByPlatformId(platformId: string, queryParams?: { payload?: string | null }): Promise<unknown> {
    const $ = new Sso$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getSso_ByPlatformId(platformId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Logout user&#39;s session on platform that logged in using SSO. Supported platforms: - discourse
   */
  async function createLogout_ByPlatformId(platformId: string): Promise<unknown> {
    const $ = new Sso$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createLogout_ByPlatformId(platformId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getSso_ByPlatformId,
    createLogout_ByPlatformId
  }
}
