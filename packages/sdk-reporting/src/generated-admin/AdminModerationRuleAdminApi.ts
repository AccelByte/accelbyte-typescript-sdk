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
import { AdminModerationRuleAdmin$ } from './endpoints/AdminModerationRuleAdmin$.js'
import { ModerationRuleActiveRequest } from '../generated-definitions/ModerationRuleActiveRequest.js'
import { ModerationRuleRequest } from '../generated-definitions/ModerationRuleRequest.js'
import { ModerationRuleResponse } from '../generated-definitions/ModerationRuleResponse.js'
import { ModerationRulesList } from '../generated-definitions/ModerationRulesList.js'

export function AdminModerationRuleAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * This endpoint create moderation rule. Supported Category: - UGC - USER - CHAT - EXTENSION Supported Action (GOING TO DEPRECATE, for replacement please use &#34;actions&#34;): * HideContent Supported Actions: * **hideContent**: Hide the content * **banAccount**: Ban the user account * **deleteChat**: Delete chat
   */
  async function createRule(data: ModerationRuleRequest): Promise<unknown> {
    const $ = new AdminModerationRuleAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createRule(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint get moderation rules.
   */
  async function getRules(queryParams?: {
    category?: string | null
    extensionCategory?: string | null
    limit?: number
    offset?: number
  }): Promise<ModerationRulesList> {
    const $ = new AdminModerationRuleAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getRules(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint delete moderation rule.
   */
  async function deleteRule_ByRuleId(ruleId: string): Promise<unknown> {
    const $ = new AdminModerationRuleAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteRule_ByRuleId(ruleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint update moderation rule. Supported Category:- UGC - USER - CHAT - EXTENSION Supported Action (GOING TO DEPRECATE, for replacement please use &#34;actions&#34;): * HideContent Supported Actions: * **hideContent**: Hide the content * **banAccount**: Ban the user account * **deleteChat**: Delete chat
   */
  async function updateRule_ByRuleId(ruleId: string, data: ModerationRuleRequest): Promise<ModerationRuleResponse> {
    const $ = new AdminModerationRuleAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateRule_ByRuleId(ruleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint get moderation rule.
   */
  async function getRule_ByRuleId(ruleId: string): Promise<ModerationRuleResponse> {
    const $ = new AdminModerationRuleAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getRule_ByRuleId(ruleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint enable/disable moderation rule status.
   */
  async function updateStatus_ByRuleId(ruleId: string, data: ModerationRuleActiveRequest): Promise<unknown> {
    const $ = new AdminModerationRuleAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateStatus_ByRuleId(ruleId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createRule,
    getRules,
    deleteRule_ByRuleId,
    updateRule_ByRuleId,
    getRule_ByRuleId,
    updateStatus_ByRuleId
  }
}
