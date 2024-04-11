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
import { AppMessageDeclarationArray } from '../generated-definitions/AppMessageDeclarationArray.js'
import { LobbyOperations$ } from './endpoints/LobbyOperations$.js'

export function LobbyOperationsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * get the list of messages.
   */
  async function getMessages(): Promise<AppMessageDeclarationArray> {
    const $ = new LobbyOperations$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getMessages()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getMessages
  }
}
