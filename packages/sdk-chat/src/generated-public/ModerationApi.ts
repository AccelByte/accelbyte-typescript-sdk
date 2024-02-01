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
import { ChatSnapshots } from '../generated-definitions/ChatSnapshots.js'
import { Moderation$ } from './endpoints/Moderation$.js'

export function ModerationApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Get the chat snapshot
   */
  async function getSnapshot_ByTopic_ByChatId(topic: string, chatId: string): Promise<ChatSnapshots> {
    const $ = new Moderation$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getSnapshot_ByTopic_ByChatId(topic, chatId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getSnapshot_ByTopic_ByChatId
  }
}
