/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { ListRuleSetsResponse } from '../definitions/ListRuleSetsResponse.js'
import { RuleSetPayload } from '../definitions/RuleSetPayload.js'

export class RuleSets$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * List rule sets.
   */
  getRulesets(queryParams?: { limit?: number; name?: string | null; offset?: number }): Promise<IResponseWithSync<ListRuleSetsResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/rulesets'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ListRuleSetsResponse, 'ListRuleSetsResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Creates a new rules set. A rule set has a name and contains arbitrary data which is meaningful to some particular match function(s) The name is used for a match pool to select the ruleset data that should be sent to the match function when matchmaking in that pool. To use custom rules set please set enable_custom_match_function=true. Default (false).
   */
  createRuleset(data: RuleSetPayload): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/rulesets'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Deletes an existing rule set.
   */
  deleteRuleset_ByRuleset(ruleset: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/rulesets/{ruleset}'.replace('{namespace}', this.namespace).replace('{ruleset}', ruleset)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get details for a specific rule set
   */
  getRuleset_ByRuleset(ruleset: string): Promise<IResponseWithSync<RuleSetPayload>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/rulesets/{ruleset}'.replace('{namespace}', this.namespace).replace('{ruleset}', ruleset)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, RuleSetPayload, 'RuleSetPayload')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Updates an existing matchmaking rule set. To use custom rules set please set enable_custom_match_function=true. Default (false).
   */
  updateRuleset_ByRuleset(ruleset: string, data: RuleSetPayload): Promise<IResponse<RuleSetPayload>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/rulesets/{ruleset}'.replace('{namespace}', this.namespace).replace('{ruleset}', ruleset)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, RuleSetPayload, 'RuleSetPayload')
  }
}
