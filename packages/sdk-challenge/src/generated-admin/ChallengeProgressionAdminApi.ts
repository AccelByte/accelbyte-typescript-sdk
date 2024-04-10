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
import { ChallengeProgressionAdmin$ } from './endpoints/ChallengeProgressionAdmin$.js'
import { EvaluatePlayerProgressionRequest } from '../generated-definitions/EvaluatePlayerProgressionRequest.js'

export function ChallengeProgressionAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:PROGRESSION [UPDATE]&lt;/li&gt;&lt;/ul&gt;
   */
  async function createProgresEvaluate(data: EvaluatePlayerProgressionRequest): Promise<unknown> {
    const $ = new ChallengeProgressionAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createProgresEvaluate(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createProgresEvaluate
  }
}
