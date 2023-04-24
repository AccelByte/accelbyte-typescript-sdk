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
import { CreateTemplateRequest } from './definitions/CreateTemplateRequest'
import { CreateTopicRequest } from './definitions/CreateTopicRequest'
import { FreeFormNotificationRequest } from './definitions/FreeFormNotificationRequest'
import { Notification$ } from './endpoints/Notification$'
import { NotificationTopicResponse } from './definitions/NotificationTopicResponse'
import { NotificationWithTemplateRequest } from './definitions/NotificationWithTemplateRequest'
import { TemplateLocalization } from './definitions/TemplateLocalization'
import { TemplateLocalizationResponse } from './definitions/TemplateLocalizationResponse'
import { TemplateResponseArray } from './definitions/TemplateResponseArray'
import { TopicByNamespacesResponse } from './definitions/TopicByNamespacesResponse'
import { UpdateTemplateRequest } from './definitions/UpdateTemplateRequest'
import { UpdateTopicRequest } from './definitions/UpdateTopicRequest'

export function NotificationApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TOPIC [READ]</code> with scope <code>social</code> <br>get topic by namespace.
   */
  async function getNotificationTopics(queryParams?: {
    limit?: number
    before?: string | null
    after?: string | null
  }): Promise<TopicByNamespacesResponse> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getNotificationTopics(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TOPIC [CREATE]</code> with scope <code>social</code> <br>Create new notification topic. <br>topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
   */
  async function createNotificationTopic(data: CreateTopicRequest): Promise<unknown> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createNotificationTopic(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:NOTIFICATION [CREATE]</code> with scope <code>social</code> <br>Sends notification to all connected users in a namespace.
   */
  async function createNotificationFreeform(data: FreeFormNotificationRequest): Promise<unknown> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createNotificationFreeform(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:NOTIFICATION [CREATE]</code> with scope <code>social</code> <br>Sends notification to all connected users in a namespace with predefined template. <br>In the request body, specify which template slug (template identifier) to use and the template language. <br>NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications
   */
  async function createNotificationTemplated(data: NotificationWithTemplateRequest): Promise<unknown> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createNotificationTemplated(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TEMPLATE [READ]</code> with scope <code>social</code> <br>Get all templates in a namespace
   */
  async function getNotificationTemplates(): Promise<TemplateResponseArray> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getNotificationTemplates()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TEMPLATE [CREATE]</code> with scope <code>social</code> <br>Create new notification template. Include handlebars {{key}} for replaceable contexts. The the key inside handlebars will be the key to be replaced when sending notification. Already existing template with the same slug and language can not be created. <br>Check model description for detailed input restrictions.
   */
  async function createNotificationTemplate(data: CreateTemplateRequest): Promise<unknown> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createNotificationTemplate(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TOPIC [READ]</code> with scope <code>social</code> <br>get topic information by topic name.
   */
  async function getNotificationTopic_ByTopic(topic: string): Promise<NotificationTopicResponse> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getNotificationTopic_ByTopic(topic)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TOPIC [UPDATE]</code> with scope <code>social</code> <br>update topic information by topic name. <br>topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
   */
  async function updateNotificationTopic_ByTopic(topic: string, data: UpdateTopicRequest): Promise<unknown> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateNotificationTopic_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TOPIC [DELETE]</code> with scope <code>social</code> <br>delete topic information by topic name. <br>topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
   */
  async function deleteNotificationTopic_ByTopic(topic: string): Promise<unknown> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteNotificationTopic_ByTopic(topic)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:USER:{userId}:NOTIFICATION [CREATE]</code> with scope <code>social</code> <br>Sends notification to a user.
   */
  async function createFreeformNotification_ByUserId(userId: string, data: FreeFormNotificationRequest): Promise<unknown> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createFreeformNotification_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TEMPLATE [READ]</code> with scope <code>social</code> <br>Get all templates in a namespace
   */
  async function getNotificationTemplate_ByTemplateSlug(
    templateSlug: string,
    queryParams?: { limit?: number; before?: string | null; after?: string | null }
  ): Promise<TemplateLocalizationResponse> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getNotificationTemplate_ByTemplateSlug(templateSlug, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TEMPLATE [DELETE]</code> with scope <code>social</code> <br>Delete localization template
   */
  async function deleteNotificationTemplate_ByTemplateSlug(templateSlug: string): Promise<unknown> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteNotificationTemplate_ByTemplateSlug(templateSlug)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:USER:{userId}:NOTIFICATION [CREATE]</code> with scope <code>social</code> <br>Sends notification to a user with predefined template. <br>In the request body, specify which template slug (template identifier) to use and the template language. <br>NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications
   */
  async function createTemplatedNotification_ByUserId(userId: string, data: NotificationWithTemplateRequest): Promise<unknown> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createTemplatedNotification_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TEMPLATE [READ]</code> with scope <code>social</code> <br>Get a template localization
   */
  async function getLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string
  ): Promise<TemplateLocalization> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TEMPLATE [UPDATE]</code> with scope <code>social</code> <br>Modify draft template
   */
  async function updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string,
    data: UpdateTemplateRequest
  ): Promise<unknown> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TEMPLATE [DELETE]</code> with scope <code>social</code> <br>Delete all template in a slug
   */
  async function deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string
  ): Promise<unknown> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TEMPLATE [CREATE]</code> with scope <code>social</code> <br>Publish notification template draft. Empty draft can not be published.
   */
  async function createPublishNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string
  ): Promise<unknown> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createPublishNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getNotificationTopics,
    createNotificationTopic,
    createNotificationFreeform,
    createNotificationTemplated,
    getNotificationTemplates,
    createNotificationTemplate,
    getNotificationTopic_ByTopic,
    updateNotificationTopic_ByTopic,
    deleteNotificationTopic_ByTopic,
    createFreeformNotification_ByUserId,
    getNotificationTemplate_ByTemplateSlug,
    deleteNotificationTemplate_ByTemplateSlug,
    createTemplatedNotification_ByUserId,
    getLanguageNotification_ByTemplateSlug_ByTemplateLanguage,
    updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage,
    deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage,
    createPublishNotification_ByTemplateSlug_ByTemplateLanguage
  }
}
