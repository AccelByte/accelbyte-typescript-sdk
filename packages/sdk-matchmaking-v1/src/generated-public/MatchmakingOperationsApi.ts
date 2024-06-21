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
import { AppMessageDeclarationArray } from '../generated-definitions/AppMessageDeclarationArray.js'
import { MatchmakingOperations$ } from './endpoints/MatchmakingOperations$.js'

export function MatchmakingOperationsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  async function getVersion(): Promise<unknown> {
    const $ = new MatchmakingOperations$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getVersion()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * get the list of messages.
   */
  async function getMessages(): Promise<AppMessageDeclarationArray> {
    const $ = new MatchmakingOperations$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getMessages()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getVersion,
    getMessages
  }
}
