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
import { GetGoalsResponse } from '../generated-definitions/GetGoalsResponse.js'
import { ListChallengeResponse } from '../generated-definitions/ListChallengeResponse.js'
import { ChallengeList$ } from './endpoints/ChallengeList$.js'

export function ChallengeListApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt;
   */
  async function getChallenges(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: string | null
    status?: 'INIT' | 'RETIRED' | 'TIED'
  }): Promise<ListChallengeResponse> {
    const $ = new ChallengeList$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getChallenges(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt;
   */
  async function getGoals_ByChallengeCode(
    challengeCode: string,
    queryParams?: { limit?: number; offset?: number; tags?: string[] }
  ): Promise<GetGoalsResponse> {
    const $ = new ChallengeList$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getGoals_ByChallengeCode(challengeCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getChallenges,
    getGoals_ByChallengeCode
  }
}
