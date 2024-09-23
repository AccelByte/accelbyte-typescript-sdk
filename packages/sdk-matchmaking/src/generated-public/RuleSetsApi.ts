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
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ListRuleSetsResponse } from '../generated-definitions/ListRuleSetsResponse.js'
import { RuleSetPayload } from '../generated-definitions/RuleSetPayload.js'
import { RuleSets$ } from './endpoints/RuleSets$.js'

export function RuleSetsApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getRulesets(queryParams?: {
    limit?: number
    name?: string | null
    offset?: number
  }): Promise<AxiosResponse<ListRuleSetsResponse>> {
    const $ = new RuleSets$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRulesets(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createRuleset(data: RuleSetPayload): Promise<AxiosResponse<unknown>> {
    const $ = new RuleSets$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createRuleset(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteRuleset_ByRuleset(ruleset: string): Promise<AxiosResponse<unknown>> {
    const $ = new RuleSets$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteRuleset_ByRuleset(ruleset)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRuleset_ByRuleset(ruleset: string): Promise<AxiosResponse<RuleSetPayload>> {
    const $ = new RuleSets$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRuleset_ByRuleset(ruleset)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRuleset_ByRuleset(ruleset: string, data: RuleSetPayload): Promise<AxiosResponse<RuleSetPayload>> {
    const $ = new RuleSets$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRuleset_ByRuleset(ruleset, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * List rule sets.
     */
    getRulesets,
    /**
     * Creates a new rules set. A rule set has a name and contains arbitrary data which is meaningful to some particular match function(s) The name is used for a match pool to select the ruleset data that should be sent to the match function when matchmaking in that pool. To use custom rules set please set enable_custom_match_function=true. Default (false). When custom enable_custom_match_function=true, the ruleset will only validate if the rule is valid json.
     */
    createRuleset,
    /**
     * Deletes an existing rule set.
     */
    deleteRuleset_ByRuleset,
    /**
     * Get details for a specific rule set
     */
    getRuleset_ByRuleset,
    /**
     * Updates an existing matchmaking rule set. To use custom rules set please set enable_custom_match_function=true. Default (false). When custom enable_custom_match_function=true, the ruleset will only validate if the rule is valid json.
     */
    updateRuleset_ByRuleset
  }
}
