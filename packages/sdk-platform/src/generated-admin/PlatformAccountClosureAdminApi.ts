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
import { PlatformAccountClosureHistoryInfoArray } from '../generated-definitions/PlatformAccountClosureHistoryInfoArray.js'
import { PlatformAccountClosureAdmin$ } from './endpoints/PlatformAccountClosureAdmin$.js'

export function PlatformAccountClosureAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Get user platform account closure history.&lt;br&gt;
   */
  async function getPlatformClosureHistory_ByUserId(userId: string): Promise<PlatformAccountClosureHistoryInfoArray> {
    const $ = new PlatformAccountClosureAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getPlatformClosureHistory_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getPlatformClosureHistory_ByUserId
  }
}
