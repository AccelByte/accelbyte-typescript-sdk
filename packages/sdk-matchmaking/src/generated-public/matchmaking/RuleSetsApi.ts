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
import { ListRuleSetsResponse } from './definitions/ListRuleSetsResponse'
import { RuleSetPayload } from './definitions/RuleSetPayload'
import { RuleSets$ } from './endpoints/RuleSets$'

export function RuleSetsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:RULES [READ] Required Scope: social List rule sets.
   */
  async function getRulesets(queryParams?: { offset?: number; limit?: number }): Promise<ListRuleSetsResponse> {
    const $ = new RuleSets$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRulesets(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:RULES [CREATE] Required Scope: social Creates a new rules set. A rule set has a name and contains arbitrary data which is meaningful to some particular match function(s) The name is used for a match pool to select the ruleset data that should be sent to the match function when matchmaking in that pool. To use custom rules set please set enable_custom_match_function=true. Default (false).
   */
  async function createRuleset(data: RuleSetPayload): Promise<unknown> {
    const $ = new RuleSets$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createRuleset(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:RULES [READ] Required Scope: social Get details for a specific rule set
   */
  async function getRuleset_ByRuleset(ruleset: string): Promise<RuleSetPayload> {
    const $ = new RuleSets$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRuleset_ByRuleset(ruleset)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:RULES [UPDATE] Required Scope: social Updates an existing matchmaking rule set. To use custom rules set please set enable_custom_match_function=true. Default (false).
   */
  async function updateRuleset_ByRuleset(ruleset: string, data: RuleSetPayload): Promise<RuleSetPayload> {
    const $ = new RuleSets$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateRuleset_ByRuleset(ruleset, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:RULES [DELETE] Required Scope: social Deletes an existing rule set.
   */
  async function deleteRuleset_ByRuleset(ruleset: string): Promise<unknown> {
    const $ = new RuleSets$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteRuleset_ByRuleset(ruleset)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getRulesets,
    createRuleset,
    getRuleset_ByRuleset,
    updateRuleset_ByRuleset,
    deleteRuleset_ByRuleset
  }
}
