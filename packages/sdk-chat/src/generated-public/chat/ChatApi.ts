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
import { Chat$ } from './endpoints/Chat$'

export function ChatApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This endpoint need valid user access token. No specific permission is required. Upgrade connection to websocket upon successful request.
   */
  async function getChat(): Promise<unknown> {
    const $ = new Chat$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getChat()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getChat
  }
}
