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
import { ModerationRuleActiveRequest } from '../generated-definitions/ModerationRuleActiveRequest.js'
import { ModerationRuleRequest } from '../generated-definitions/ModerationRuleRequest.js'
import { ModerationRuleResponse } from '../generated-definitions/ModerationRuleResponse.js'
import { ModerationRulesList } from '../generated-definitions/ModerationRulesList.js'
import { ModerationRuleAdmin$ } from './endpoints/ModerationRuleAdmin$.js'

export function ModerationRuleAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function createRule(data: ModerationRuleRequest): Promise<AxiosResponse<unknown>> {
    const $ = new ModerationRuleAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createRule(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRules(queryParams?: {
    category?: string | null
    extensionCategory?: string | null
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<ModerationRulesList>> {
    const $ = new ModerationRuleAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRules(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteRule_ByRuleId(ruleId: string): Promise<AxiosResponse<unknown>> {
    const $ = new ModerationRuleAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteRule_ByRuleId(ruleId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRule_ByRuleId(ruleId: string, data: ModerationRuleRequest): Promise<AxiosResponse<ModerationRuleResponse>> {
    const $ = new ModerationRuleAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRule_ByRuleId(ruleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRule_ByRuleId(ruleId: string): Promise<AxiosResponse<ModerationRuleResponse>> {
    const $ = new ModerationRuleAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRule_ByRuleId(ruleId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateStatus_ByRuleId(ruleId: string, data: ModerationRuleActiveRequest): Promise<AxiosResponse<unknown>> {
    const $ = new ModerationRuleAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStatus_ByRuleId(ruleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This endpoint create moderation rule. Supported Category: - UGC - USER - CHAT - EXTENSION Supported Action (GOING TO DEPRECATE, for replacement please use &#34;actions&#34;): * HideContent Supported Actions: * **hideContent**: Hide the content * **banAccount**: Ban the user account * **deleteChat**: Delete chat
     */
    createRule,
    /**
     * This endpoint get moderation rules.
     */
    getRules,
    /**
     * This endpoint delete moderation rule.
     */
    deleteRule_ByRuleId,
    /**
     * This endpoint update moderation rule. Supported Category:- UGC - USER - CHAT - EXTENSION Supported Action (GOING TO DEPRECATE, for replacement please use &#34;actions&#34;): * HideContent Supported Actions: * **hideContent**: Hide the content * **banAccount**: Ban the user account * **deleteChat**: Delete chat
     */
    updateRule_ByRuleId,
    /**
     * This endpoint get moderation rule.
     */
    getRule_ByRuleId,
    /**
     * This endpoint enable/disable moderation rule status.
     */
    updateStatus_ByRuleId
  }
}
