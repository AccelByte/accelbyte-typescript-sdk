/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { ModerationRuleActiveRequest } from '../../generated-definitions/ModerationRuleActiveRequest.js'
import { ModerationRuleRequest } from '../../generated-definitions/ModerationRuleRequest.js'
import { ModerationRuleResponse } from '../../generated-definitions/ModerationRuleResponse.js'
import { ModerationRulesList } from '../../generated-definitions/ModerationRulesList.js'

export class ModerationRuleAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This endpoint create moderation rule. Supported Category: - UGC - USER - CHAT - EXTENSION Supported Action (GOING TO DEPRECATE, for replacement please use &#34;actions&#34;): * HideContent Supported Actions: * **hideContent**: Hide the content * **banAccount**: Ban the user account * **deleteChat**: Delete chat
   */
  createRule(data: ModerationRuleRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/rule'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint get moderation rules.
   */
  getRules(queryParams?: {
    category?: string | null
    extensionCategory?: string | null
    limit?: number
    offset?: number
  }): Promise<Response<ModerationRulesList>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/rules'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ModerationRulesList, 'ModerationRulesList')
  }
  /**
   * This endpoint delete moderation rule.
   */
  deleteRule_ByRuleId(ruleId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/rule/{ruleId}'
      .replace('{namespace}', this.namespace)
      .replace('{ruleId}', ruleId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint update moderation rule. Supported Category:- UGC - USER - CHAT - EXTENSION Supported Action (GOING TO DEPRECATE, for replacement please use &#34;actions&#34;): * HideContent Supported Actions: * **hideContent**: Hide the content * **banAccount**: Ban the user account * **deleteChat**: Delete chat
   */
  updateRule_ByRuleId(ruleId: string, data: ModerationRuleRequest): Promise<Response<ModerationRuleResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/rule/{ruleId}'
      .replace('{namespace}', this.namespace)
      .replace('{ruleId}', ruleId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ModerationRuleResponse,
      'ModerationRuleResponse'
    )
  }
  /**
   * This endpoint get moderation rule.
   */
  getRule_ByRuleId(ruleId: string): Promise<Response<ModerationRuleResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/rules/{ruleId}'
      .replace('{namespace}', this.namespace)
      .replace('{ruleId}', ruleId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ModerationRuleResponse,
      'ModerationRuleResponse'
    )
  }
  /**
   * This endpoint enable/disable moderation rule status.
   */
  updateStatus_ByRuleId(ruleId: string, data: ModerationRuleActiveRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/reporting/v1/admin/namespaces/{namespace}/rule/{ruleId}/status'
      .replace('{namespace}', this.namespace)
      .replace('{ruleId}', ruleId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
