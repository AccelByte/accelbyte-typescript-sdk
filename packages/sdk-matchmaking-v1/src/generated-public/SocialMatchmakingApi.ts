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
import { SocialMatchmaking$ } from './endpoints/SocialMatchmaking$.js'
import { UpdatePlayTimeWeightRequest } from '../generated-definitions/UpdatePlayTimeWeightRequest.js'
import { UpdatePlayerPlaytimeWeightResponse } from '../generated-definitions/UpdatePlayerPlaytimeWeightResponse.js'

export function SocialMatchmakingApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Update a connection weight between player and playtime. This endpoint is intended to be called by admin for debugging purpose on social matchmaking rule.
   */
  async function patchSocialPlaytimeWeight(data: UpdatePlayTimeWeightRequest): Promise<UpdatePlayerPlaytimeWeightResponse> {
    const $ = new SocialMatchmaking$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.patchSocialPlaytimeWeight(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    patchSocialPlaytimeWeight
  }
}
