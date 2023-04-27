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
import { ListMatchFunctionsResponse } from './definitions/ListMatchFunctionsResponse.js'
import { MatchFunctionConfig } from './definitions/MatchFunctionConfig.js'
import { MatchFunctionRequest } from './definitions/MatchFunctionRequest.js'
import { MatchFunctions$ } from './endpoints/MatchFunctions$.js'

export function MatchFunctionsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:FUNCTIONS [READ] Required Scope: social List existing match functions.
   */
  async function getMatchFunctions(queryParams?: { offset?: number; limit?: number }): Promise<ListMatchFunctionsResponse> {
    const $ = new MatchFunctions$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getMatchFunctions(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Required Permission: NAMESPACE:{namespace}:MATCHMAKING:FUNCTIONS [CREATE] Required Scope: social Creates a new matchmaking function.
   */
  async function createMatchFunction(data: MatchFunctionRequest): Promise<unknown> {
    const $ = new MatchFunctions$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createMatchFunction(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Required Permission: NAMESPACE:{namespace}:MATCHMAKING:FUNCTIONS [UPDATE] Required Scope: social Update existing matchmaking function.
   */
  async function updateMatchFunction_ByName(name: string, data: MatchFunctionRequest): Promise<MatchFunctionConfig> {
    const $ = new MatchFunctions$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateMatchFunction_ByName(name, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:FUNCTIONS [DELETE] Required Scope: social Deletes an existing match function.
   */
  async function deleteMatchFunction_ByName(name: string): Promise<unknown> {
    const $ = new MatchFunctions$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteMatchFunction_ByName(name)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getMatchFunctions,
    createMatchFunction,
    updateMatchFunction_ByName,
    deleteMatchFunction_ByName
  }
}
