/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { PlatformAccountClosureClientAdmin$ } from './endpoints/PlatformAccountClosureClientAdmin$.js'
import { PlatformAccountClosureClientRequest } from '../generated-definitions/PlatformAccountClosureClientRequest.js'
import { PlatformAccountClosureClientResponse } from '../generated-definitions/PlatformAccountClosureClientResponse.js'

export function PlatformAccountClosureClientAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * Get platform account closure config. Scope: account
   */
  async function getClosureClient_ByPlatform(platform: string): Promise<PlatformAccountClosureClientResponse> {
    const $ = new PlatformAccountClosureClientAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getClosureClient_ByPlatform(platform)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update platform account closure client. Scope: account
   */
  async function createClosureClient_ByPlatform(platform: string, data: PlatformAccountClosureClientRequest): Promise<unknown> {
    const $ = new PlatformAccountClosureClientAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createClosureClient_ByPlatform(platform, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getClosureClient_ByPlatform,
    createClosureClient_ByPlatform
  }
}
