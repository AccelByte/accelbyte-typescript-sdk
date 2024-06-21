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
import { NativeUserBlockRequest } from '../generated-definitions/NativeUserBlockRequest.js'
import { NativeUserBlockResponseArray } from '../generated-definitions/NativeUserBlockResponseArray.js'
import { Blocks$ } from './endpoints/Blocks$.js'

export function BlocksApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Sync blocked user using server to server call to native first party server. Supported platforms: ps5, ps4 and pspc : the default environment would be sp-int, can be override using psnEnv. psnEnv consist of sp-int (default), prod-qa, np
   */
  async function patchSyncMeBlock(data: NativeUserBlockRequest[]): Promise<NativeUserBlockResponseArray> {
    const $ = new Blocks$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchSyncMeBlock(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    patchSyncMeBlock
  }
}
