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
import { UserProgressionResponse } from '../generated-definitions/UserProgressionResponse.js'
import { ChallengeProgression$ } from './endpoints/ChallengeProgression$.js'

export function ChallengeProgressionApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE:PROGRESSION [UPDATE]&lt;/li&gt;&lt;/ul&gt;
   */
  async function createUserMeProgresEvaluate(): Promise<unknown> {
    const $ = new ChallengeProgression$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createUserMeProgresEvaluate()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE:PROGRESSION [READ]&lt;/li&gt;&lt;/ul&gt;
   */
  async function getUserMeProgres_ByChallengeCode(
    challengeCode: string,
    queryParams?: { dateTime?: string | null; goalCode?: string | null; limit?: number; offset?: number; tags?: string[] }
  ): Promise<UserProgressionResponse> {
    const $ = new ChallengeProgression$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUserMeProgres_ByChallengeCode(challengeCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE:PROGRESSION [READ]&lt;/li&gt;&lt;/ul&gt;
   */
  async function getIndexMeUser_ByChallengeCode_ByIndex(
    challengeCode: string,
    index: number,
    queryParams?: { goalCode?: string | null; limit?: number; offset?: number; tags?: string[] }
  ): Promise<UserProgressionResponse> {
    const $ = new ChallengeProgression$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getIndexMeUser_ByChallengeCode_ByIndex(challengeCode, index, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createUserMeProgresEvaluate,
    getUserMeProgres_ByChallengeCode,
    getIndexMeUser_ByChallengeCode_ByIndex
  }
}
