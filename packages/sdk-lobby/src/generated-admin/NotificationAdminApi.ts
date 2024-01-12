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
import { BulkUsersFreeFormNotificationRequestV1 } from '../generated-definitions/BulkUsersFreeFormNotificationRequestV1.js'
import { CreateTemplateRequest } from '../generated-definitions/CreateTemplateRequest.js'
import { CreateTopicRequestV1 } from '../generated-definitions/CreateTopicRequestV1.js'
import { FreeFormNotificationRequestV1 } from '../generated-definitions/FreeFormNotificationRequestV1.js'
import { GetAllNotificationTemplateSlugResp } from '../generated-definitions/GetAllNotificationTemplateSlugResp.js'
import { GetAllNotificationTopicsResponse } from '../generated-definitions/GetAllNotificationTopicsResponse.js'
import { Localization } from '../generated-definitions/Localization.js'
import { NotificationAdmin$ } from './endpoints/NotificationAdmin$.js'
import { NotificationTemplateResponseArray } from '../generated-definitions/NotificationTemplateResponseArray.js'
import { NotificationTopicResponseV1 } from '../generated-definitions/NotificationTopicResponseV1.js'
import { NotificationWithTemplateRequestV1 } from '../generated-definitions/NotificationWithTemplateRequestV1.js'
import { UpdateTemplateRequest } from '../generated-definitions/UpdateTemplateRequest.js'
import { UpdateTopicRequest } from '../generated-definitions/UpdateTopicRequest.js'

export function NotificationAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Get topic by namespace.&lt;br/&gt; Action Code: 50213
   */
  async function getNotificationTopics(queryParams?: {
    after?: string | null
    before?: string | null
    limit?: number
  }): Promise<GetAllNotificationTopicsResponse> {
    const $ = new NotificationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getNotificationTopics(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create new notification topic. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created&lt;br/&gt; Action Code: 50214
   */
  async function createNotificationTopic(data: CreateTopicRequestV1): Promise<unknown> {
    const $ = new NotificationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createNotificationTopic(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get all templates in a namespace&lt;br&gt; Action Code: 50203
   */
  async function getNotificationTemplates(): Promise<NotificationTemplateResponseArray> {
    const $ = new NotificationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getNotificationTemplates()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create new notification template. Include handlebars {{key}} for replaceable contexts. The key inside handlebars will be the key to be replaced when sending notification. Already existing template with the same slug and language can not be created. &lt;br&gt;Check model description for detailed input restrictions.&lt;br&gt; Action Code: 50204
   */
  async function createNotificationTemplate(data: CreateTemplateRequest): Promise<unknown> {
    const $ = new NotificationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createNotificationTemplate(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sends notification to all connected users in a namespace.&lt;br&gt; Action Code: 50201
   */
  async function createNotificationFreeformNotify(data: FreeFormNotificationRequestV1): Promise<unknown> {
    const $ = new NotificationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createNotificationFreeformNotify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sends notification to all connected users in a namespace with predefined template. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications&lt;br/&gt; Action Code: 50202
   */
  async function createNotificationTemplateNotify(data: NotificationWithTemplateRequestV1): Promise<unknown> {
    const $ = new NotificationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createNotificationTemplateNotify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete topic information by topic name. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created &lt;br/&gt; Action Code: 50217
   */
  async function deleteNotificationTopic_ByTopicName(topicName: string): Promise<unknown> {
    const $ = new NotificationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteNotificationTopic_ByTopicName(topicName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get topic information by topic name.&lt;br/&gt; Action Code: 50215
   */
  async function getNotificationTopic_ByTopicName(topicName: string): Promise<NotificationTopicResponseV1> {
    const $ = new NotificationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getNotificationTopic_ByTopicName(topicName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update topic information by topic name. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created &lt;br/&gt; Action Code: 50216
   */
  async function updateNotificationTopic_ByTopicName(topicName: string, data: UpdateTopicRequest): Promise<unknown> {
    const $ = new NotificationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateNotificationTopic_ByTopicName(topicName, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete template slug in notification template&lt;br&gt; Action Code: 50206
   */
  async function deleteNotificationTemplate_ByTemplateSlug(templateSlug: string): Promise<unknown> {
    const $ = new NotificationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteNotificationTemplate_ByTemplateSlug(templateSlug)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get all templates in a namespace&lt;br&gt; Action Code: 50205
   */
  async function getNotificationTemplate_ByTemplateSlug(
    templateSlug: string,
    queryParams?: { after?: string | null; before?: string | null; limit?: number }
  ): Promise<GetAllNotificationTemplateSlugResp> {
    const $ = new NotificationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getNotificationTemplate_ByTemplateSlug(templateSlug, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sends notification to multiple user. Action Code: 50211
   */
  async function createNotificationBulkUserFreeformNotify(data: BulkUsersFreeFormNotificationRequestV1): Promise<unknown> {
    const $ = new NotificationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createNotificationBulkUserFreeformNotify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sends notification to a user. Action Code: 50211
   */
  async function createFreeformNotifyNotification_ByUserId(userId: string, data: FreeFormNotificationRequestV1): Promise<unknown> {
    const $ = new NotificationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createFreeformNotifyNotification_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sends templated notification to a user. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications&lt;br&gt; Action Code: 50212
   */
  async function createTemplateNotifyNotification_ByUserId(userId: string, data: NotificationWithTemplateRequestV1): Promise<unknown> {
    const $ = new NotificationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createTemplateNotifyNotification_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sends notification to a party.
   */
  async function createFreeformNotifyNotification_ByPartyId(partyId: string, data: FreeFormNotificationRequestV1): Promise<unknown> {
    const $ = new NotificationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createFreeformNotifyNotification_ByPartyId(partyId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sends templated notification to a party. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications&lt;br&gt;
   */
  async function createTemplateNotifyNotification_ByPartyId(partyId: string, data: NotificationWithTemplateRequestV1): Promise<unknown> {
    const $ = new NotificationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createTemplateNotifyNotification_ByPartyId(partyId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete template localization&lt;br/&gt; Action Code: 50209
   */
  async function deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string
  ): Promise<unknown> {
    const $ = new NotificationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get a template localization&lt;br/&gt; Action Code: 50207
   */
  async function getLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string
  ): Promise<Localization> {
    const $ = new NotificationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update template localization&lt;br/&gt; Action Code: 50208
   */
  async function updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string,
    data: UpdateTemplateRequest
  ): Promise<unknown> {
    const $ = new NotificationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Publish notification template draft. Empty draft can not be published.&lt;br/&gt; Action Code: 50210
   */
  async function createPublishNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string
  ): Promise<unknown> {
    const $ = new NotificationAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createPublishNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getNotificationTopics,
    createNotificationTopic,
    getNotificationTemplates,
    createNotificationTemplate,
    createNotificationFreeformNotify,
    createNotificationTemplateNotify,
    deleteNotificationTopic_ByTopicName,
    getNotificationTopic_ByTopicName,
    updateNotificationTopic_ByTopicName,
    deleteNotificationTemplate_ByTemplateSlug,
    getNotificationTemplate_ByTemplateSlug,
    createNotificationBulkUserFreeformNotify,
    createFreeformNotifyNotification_ByUserId,
    createTemplateNotifyNotification_ByUserId,
    createFreeformNotifyNotification_ByPartyId,
    createTemplateNotifyNotification_ByPartyId,
    deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage,
    getLanguageNotification_ByTemplateSlug_ByTemplateLanguage,
    updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage,
    createPublishNotification_ByTemplateSlug_ByTemplateLanguage
  }
}
