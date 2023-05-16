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
import { SocialMatchmaking$ } from './endpoints/SocialMatchmaking$.js'
import { UpdatePlayTimeWeightRequest } from './definitions/UpdatePlayTimeWeightRequest.js'
import { UpdatePlayerPlaytimeWeightResponse } from './definitions/UpdatePlayerPlaytimeWeightResponse.js'

export function SocialMatchmakingApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:CHANNEL [UPDATE] Required Scope: social Update a connection weight between player and playtime. This endpoint is intended to be called by admin for debugging purpose on social matchmaking rule.
   */
  async function patchSocialPlaytimeWeight(data: UpdatePlayTimeWeightRequest): Promise<UpdatePlayerPlaytimeWeightResponse> {
    const $ = new SocialMatchmaking$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchSocialPlaytimeWeight(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    patchSocialPlaytimeWeight
  }
}
