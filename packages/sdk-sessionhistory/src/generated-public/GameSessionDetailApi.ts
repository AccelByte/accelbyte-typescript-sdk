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
import { GameSessionDetailQueryResponse } from '../generated-definitions/GameSessionDetailQueryResponse.js'
import { GameSessionDetail$ } from './endpoints/GameSessionDetail$.js'

export function GameSessionDetailApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Get all game sessions history for current user.
   */
  async function getUsersMeGamesessions(queryParams?: {
    limit?: number
    offset?: number
    order?: string | null
  }): Promise<GameSessionDetailQueryResponse> {
    const $ = new GameSessionDetail$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUsersMeGamesessions(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getUsersMeGamesessions
  }
}
