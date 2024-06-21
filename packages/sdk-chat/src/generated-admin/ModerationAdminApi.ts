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
import { ChatSnapshots } from '../generated-definitions/ChatSnapshots.js'
import { ModerationAdmin$ } from './endpoints/ModerationAdmin$.js'

export function ModerationAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Delete the chat snapshot
   */
  async function deleteSnapshot_ByChatId(chatId: string): Promise<unknown> {
    const $ = new ModerationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteSnapshot_ByChatId(chatId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get the chat snapshot
   */
  async function getSnapshot_ByChatId(chatId: string): Promise<ChatSnapshots> {
    const $ = new ModerationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getSnapshot_ByChatId(chatId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteSnapshot_ByChatId,
    getSnapshot_ByChatId
  }
}
