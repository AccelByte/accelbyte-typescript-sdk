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
import { HeartbeatRequest } from '../generated-definitions/HeartbeatRequest.js'
import { Server$ } from './endpoints/Server$.js'

export function ServerApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * ``` Required permission: QOS:SERVER [CREATE][UPDATE] Required scope: social This endpoint is intended to be called by QoS service to register and periodically let QoS Manager know that it is still alive. ```
   */
  async function createServerHeartbeat(data: HeartbeatRequest): Promise<unknown> {
    const $ = new Server$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createServerHeartbeat(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createServerHeartbeat
  }
}
