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
import { ChallengeProgression$ } from './endpoints/ChallengeProgression$.js'
import { UserProgressionResponse } from '../generated-definitions/UserProgressionResponse.js'

export function ChallengeProgressionApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE:PROGRESSION [UPDATE]&lt;/li&gt;&lt;/ul&gt;
   */
  async function createUserMeProgresEvaluate(): Promise<unknown> {
    const $ = new ChallengeProgression$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createUserMeProgresEvaluate()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE:PROGRESSION [READ]&lt;/li&gt;&lt;/ul&gt;
   */
  async function getUserMeProgres_ByChallengeCode(
    challengeCode: string,
    queryParams?: { goalCode?: string | null }
  ): Promise<UserProgressionResponse> {
    const $ = new ChallengeProgression$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getUserMeProgres_ByChallengeCode(challengeCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createUserMeProgresEvaluate,
    getUserMeProgres_ByChallengeCode
  }
}
