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
import { UserPlatformAccountClosureHistoriesResponse } from '../generated-definitions/UserPlatformAccountClosureHistoriesResponse.js'
import { PlatformAccountClosureHistoryAdmin$ } from './endpoints/PlatformAccountClosureHistoryAdmin$.js'

export function PlatformAccountClosureHistoryAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Get user&#39;s platform account closure histories. Scope: account ------ Supported platforms: * psn
   */
  async function getUsersPlatformsClosureHistories(queryParams?: {
    limit?: number
    offset?: number
    platform?: string | null
    userId?: string | null
  }): Promise<UserPlatformAccountClosureHistoriesResponse> {
    const $ = new PlatformAccountClosureHistoryAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUsersPlatformsClosureHistories(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getUsersPlatformsClosureHistories
  }
}
