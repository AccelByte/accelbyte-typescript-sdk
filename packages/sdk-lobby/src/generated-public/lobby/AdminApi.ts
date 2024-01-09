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
import { Admin$ } from './endpoints/Admin$.js'
import { CreateTemplateRequest } from './definitions/CreateTemplateRequest.js'
import { FreeFormNotificationRequest } from './definitions/FreeFormNotificationRequest.js'
import { NotificationWithTemplateRequest } from './definitions/NotificationWithTemplateRequest.js'
import { TemplateLocalization } from './definitions/TemplateLocalization.js'
import { TemplateLocalizationResponse } from './definitions/TemplateLocalizationResponse.js'
import { TemplateResponseArray } from './definitions/TemplateResponseArray.js'
import { UpdateTemplateRequest } from './definitions/UpdateTemplateRequest.js'

export function AdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Sends notification to all connected users in a namespace.
   */
  async function createNotificationFreeform(data: FreeFormNotificationRequest): Promise<unknown> {
    const $ = new Admin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createNotificationFreeform(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sends notification to all connected users in a namespace with predefined template. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications
   */
  async function createNotificationTemplated(data: NotificationWithTemplateRequest): Promise<unknown> {
    const $ = new Admin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createNotificationTemplated(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get all templates in a namespace
   */
  async function getNotificationTemplates(): Promise<TemplateResponseArray> {
    const $ = new Admin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getNotificationTemplates()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create new notification template. Include handlebars {{key}} for replaceable contexts. The the key inside handlebars will be the key to be replaced when sending notification. Already existing template with the same slug and language can not be created. &lt;br&gt;Check model description for detailed input restrictions.
   */
  async function createNotificationTemplate(data: CreateTemplateRequest): Promise<unknown> {
    const $ = new Admin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createNotificationTemplate(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete localization template
   */
  async function deleteNotificationTemplate_ByTemplateSlug(templateSlug: string): Promise<unknown> {
    const $ = new Admin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteNotificationTemplate_ByTemplateSlug(templateSlug)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get all templates in a namespace
   */
  async function getNotificationTemplate_ByTemplateSlug(
    templateSlug: string,
    queryParams?: { after?: string | null; before?: string | null; limit?: number }
  ): Promise<TemplateLocalizationResponse> {
    const $ = new Admin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getNotificationTemplate_ByTemplateSlug(templateSlug, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete all template in a slug
   */
  async function deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string
  ): Promise<unknown> {
    const $ = new Admin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get a template localization
   */
  async function getLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string
  ): Promise<TemplateLocalization> {
    const $ = new Admin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Modify draft template
   */
  async function updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string,
    data: UpdateTemplateRequest
  ): Promise<unknown> {
    const $ = new Admin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Publish notification template draft. Empty draft can not be published.
   */
  async function createPublishNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string
  ): Promise<unknown> {
    const $ = new Admin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createPublishNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createNotificationFreeform,
    createNotificationTemplated,
    getNotificationTemplates,
    createNotificationTemplate,
    deleteNotificationTemplate_ByTemplateSlug,
    getNotificationTemplate_ByTemplateSlug,
    deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage,
    getLanguageNotification_ByTemplateSlug_ByTemplateLanguage,
    updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage,
    createPublishNotification_ByTemplateSlug_ByTemplateLanguage
  }
}
