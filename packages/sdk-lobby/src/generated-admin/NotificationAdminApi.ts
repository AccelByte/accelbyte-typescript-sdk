/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { BulkUsersFreeFormNotificationRequestV1 } from '../generated-definitions/BulkUsersFreeFormNotificationRequestV1.js'
import { CreateTemplateRequest } from '../generated-definitions/CreateTemplateRequest.js'
import { CreateTopicRequestV1 } from '../generated-definitions/CreateTopicRequestV1.js'
import { FreeFormNotificationRequestV1 } from '../generated-definitions/FreeFormNotificationRequestV1.js'
import { GetAllNotificationTemplateSlugResp } from '../generated-definitions/GetAllNotificationTemplateSlugResp.js'
import { GetAllNotificationTopicsResponse } from '../generated-definitions/GetAllNotificationTopicsResponse.js'
import { Localization } from '../generated-definitions/Localization.js'
import { NotificationTemplateResponseArray } from '../generated-definitions/NotificationTemplateResponseArray.js'
import { NotificationTopicResponseV1 } from '../generated-definitions/NotificationTopicResponseV1.js'
import { NotificationWithTemplateRequestV1 } from '../generated-definitions/NotificationWithTemplateRequestV1.js'
import { UpdateTemplateRequest } from '../generated-definitions/UpdateTemplateRequest.js'
import { UpdateTopicRequest } from '../generated-definitions/UpdateTopicRequest.js'
import { NotificationAdmin$ } from './endpoints/NotificationAdmin$.js'

export function NotificationAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function getNotificationTopics(queryParams?: {
    after?: string | null
    before?: string | null
    limit?: number
  }): Promise<AxiosResponse<GetAllNotificationTopicsResponse>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getNotificationTopics(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createNotificationTopic(data: CreateTopicRequestV1): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createNotificationTopic(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getNotificationTemplates(): Promise<AxiosResponse<NotificationTemplateResponseArray>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getNotificationTemplates()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createNotificationTemplate(data: CreateTemplateRequest): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createNotificationTemplate(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createNotificationFreeformNotify(data: FreeFormNotificationRequestV1): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createNotificationFreeformNotify(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createNotificationTemplateNotify(data: NotificationWithTemplateRequestV1): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createNotificationTemplateNotify(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteNotificationTopic_ByTopicName(topicName: string): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteNotificationTopic_ByTopicName(topicName)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getNotificationTopic_ByTopicName(topicName: string): Promise<AxiosResponse<NotificationTopicResponseV1>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getNotificationTopic_ByTopicName(topicName)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateNotificationTopic_ByTopicName(topicName: string, data: UpdateTopicRequest): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateNotificationTopic_ByTopicName(topicName, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteNotificationTemplate_ByTemplateSlug(templateSlug: string): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteNotificationTemplate_ByTemplateSlug(templateSlug)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getNotificationTemplate_ByTemplateSlug(
    templateSlug: string,
    queryParams?: { after?: string | null; before?: string | null; limit?: number }
  ): Promise<AxiosResponse<GetAllNotificationTemplateSlugResp>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getNotificationTemplate_ByTemplateSlug(templateSlug, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createNotificationBulkUserFreeformNotify(data: BulkUsersFreeFormNotificationRequestV1): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createNotificationBulkUserFreeformNotify(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createFreeformNotifyNotification_ByUserId(
    userId: string,
    data: FreeFormNotificationRequestV1
  ): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFreeformNotifyNotification_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createTemplateNotifyNotification_ByUserId(
    userId: string,
    data: NotificationWithTemplateRequestV1
  ): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createTemplateNotifyNotification_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createFreeformNotifyNotification_ByPartyId(
    partyId: string,
    data: FreeFormNotificationRequestV1
  ): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFreeformNotifyNotification_ByPartyId(partyId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createTemplateNotifyNotification_ByPartyId(
    partyId: string,
    data: NotificationWithTemplateRequestV1
  ): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createTemplateNotifyNotification_ByPartyId(partyId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string
  ): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string
  ): Promise<AxiosResponse<Localization>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string,
    data: UpdateTemplateRequest
  ): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createPublishNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string
  ): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPublishNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get topic by namespace.&lt;br/&gt; Action Code: 50213
     */
    getNotificationTopics,
    /**
     * Create new notification topic. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created&lt;br/&gt; Action Code: 50214
     */
    createNotificationTopic,
    /**
     * Get all templates in a namespace&lt;br&gt; Action Code: 50203
     */
    getNotificationTemplates,
    /**
     * Create new notification template. Include handlebars {{key}} for replaceable contexts. The key inside handlebars will be the key to be replaced when sending notification. Already existing template with the same slug and language can not be created. &lt;br&gt;Check model description for detailed input restrictions.&lt;br&gt; Action Code: 50204
     */
    createNotificationTemplate,
    /**
     * Sends notification to all connected users in a namespace.&lt;br&gt; Action Code: 50201
     */
    createNotificationFreeformNotify,
    /**
     * Sends notification to all connected users in a namespace with predefined template. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications&lt;br/&gt; Action Code: 50202
     */
    createNotificationTemplateNotify,
    /**
     * Delete topic information by topic name. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created &lt;br/&gt; Action Code: 50217
     */
    deleteNotificationTopic_ByTopicName,
    /**
     * Get topic information by topic name.&lt;br/&gt; Action Code: 50215
     */
    getNotificationTopic_ByTopicName,
    /**
     * Update topic information by topic name. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created &lt;br/&gt; Action Code: 50216
     */
    updateNotificationTopic_ByTopicName,
    /**
     * Delete template slug in notification template&lt;br&gt; Action Code: 50206
     */
    deleteNotificationTemplate_ByTemplateSlug,
    /**
     * Get all templates in a namespace&lt;br&gt; Action Code: 50205
     */
    getNotificationTemplate_ByTemplateSlug,
    /**
     * Sends notification to multiple user. Action Code: 50211
     */
    createNotificationBulkUserFreeformNotify,
    /**
     * Sends notification to a user. Action Code: 50211
     */
    createFreeformNotifyNotification_ByUserId,
    /**
     * Sends templated notification to a user. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications&lt;br&gt; Action Code: 50212
     */
    createTemplateNotifyNotification_ByUserId,
    /**
     * @deprecated
     * Sends notification to a party.
     */
    createFreeformNotifyNotification_ByPartyId,
    /**
     * @deprecated
     * Sends templated notification to a party. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications&lt;br&gt;
     */
    createTemplateNotifyNotification_ByPartyId,
    /**
     * Delete template localization&lt;br/&gt; Action Code: 50209
     */
    deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage,
    /**
     * Get a template localization&lt;br/&gt; Action Code: 50207
     */
    getLanguageNotification_ByTemplateSlug_ByTemplateLanguage,
    /**
     * Update template localization&lt;br/&gt; Action Code: 50208
     */
    updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage,
    /**
     * Publish notification template draft. Empty draft can not be published.&lt;br/&gt; Action Code: 50210
     */
    createPublishNotification_ByTemplateSlug_ByTemplateLanguage
  }
}
