/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { BulkUsersFreeFormNotificationRequestV1 } from '../../generated-definitions/BulkUsersFreeFormNotificationRequestV1.js'
import { CreateTemplateRequest } from '../../generated-definitions/CreateTemplateRequest.js'
import { CreateTopicRequestV1 } from '../../generated-definitions/CreateTopicRequestV1.js'
import { FreeFormNotificationRequestV1 } from '../../generated-definitions/FreeFormNotificationRequestV1.js'
import { GetAllNotificationTemplateSlugResp } from '../../generated-definitions/GetAllNotificationTemplateSlugResp.js'
import { GetAllNotificationTopicsResponse } from '../../generated-definitions/GetAllNotificationTopicsResponse.js'
import { Localization } from '../../generated-definitions/Localization.js'
import { NotificationTemplateResponseArray } from '../../generated-definitions/NotificationTemplateResponseArray.js'
import { NotificationTopicResponseV1 } from '../../generated-definitions/NotificationTopicResponseV1.js'
import { NotificationWithTemplateRequestV1 } from '../../generated-definitions/NotificationWithTemplateRequestV1.js'
import { UpdateTemplateRequest } from '../../generated-definitions/UpdateTemplateRequest.js'
import { UpdateTopicRequest } from '../../generated-definitions/UpdateTopicRequest.js'

export class NotificationAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * Get topic by namespace.&lt;br/&gt; Action Code: 50213
   */
  getNotificationTopics(queryParams?: {
    after?: string | null
    before?: string | null
    limit?: number
  }): Promise<IResponse<GetAllNotificationTopicsResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/lobby/v1/admin/notification/namespaces/{namespace}/topics'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetAllNotificationTopicsResponse,
      'GetAllNotificationTopicsResponse'
    )
  }

  /**
   * Create new notification topic. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created&lt;br/&gt; Action Code: 50214
   */
  createNotificationTopic(data: CreateTopicRequestV1): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/notification/namespaces/{namespace}/topics'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get all templates in a namespace&lt;br&gt; Action Code: 50203
   */
  getNotificationTemplates(): Promise<IResponse<NotificationTemplateResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/notification/namespaces/{namespace}/templates'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      NotificationTemplateResponseArray,
      'NotificationTemplateResponseArray'
    )
  }

  /**
   * Create new notification template. Include handlebars {{key}} for replaceable contexts. The key inside handlebars will be the key to be replaced when sending notification. Already existing template with the same slug and language can not be created. &lt;br&gt;Check model description for detailed input restrictions.&lt;br&gt; Action Code: 50204
   */
  createNotificationTemplate(data: CreateTemplateRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/notification/namespaces/{namespace}/templates'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Sends notification to all connected users in a namespace.&lt;br&gt; Action Code: 50201
   */
  createNotificationFreeformNotify(data: FreeFormNotificationRequestV1): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/notification/namespaces/{namespace}/freeform/notify'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Sends notification to all connected users in a namespace with predefined template. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications&lt;br/&gt; Action Code: 50202
   */
  createNotificationTemplateNotify(data: NotificationWithTemplateRequestV1): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/notification/namespaces/{namespace}/templates/notify'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Delete topic information by topic name. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created &lt;br/&gt; Action Code: 50217
   */
  deleteNotificationTopic_ByTopicName(topicName: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/notification/namespaces/{namespace}/topics/{topicName}'
      .replace('{namespace}', this.namespace)
      .replace('{topicName}', topicName)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get topic information by topic name.&lt;br/&gt; Action Code: 50215
   */
  getNotificationTopic_ByTopicName(topicName: string): Promise<IResponse<NotificationTopicResponseV1>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/notification/namespaces/{namespace}/topics/{topicName}'
      .replace('{namespace}', this.namespace)
      .replace('{topicName}', topicName)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      NotificationTopicResponseV1,
      'NotificationTopicResponseV1'
    )
  }

  /**
   * Update topic information by topic name. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created &lt;br/&gt; Action Code: 50216
   */
  updateNotificationTopic_ByTopicName(topicName: string, data: UpdateTopicRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/notification/namespaces/{namespace}/topics/{topicName}'
      .replace('{namespace}', this.namespace)
      .replace('{topicName}', topicName)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Delete template slug in notification template&lt;br&gt; Action Code: 50206
   */
  deleteNotificationTemplate_ByTemplateSlug(templateSlug: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/notification/namespaces/{namespace}/templates/{templateSlug}'
      .replace('{namespace}', this.namespace)
      .replace('{templateSlug}', templateSlug)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get all templates in a namespace&lt;br&gt; Action Code: 50205
   */
  getNotificationTemplate_ByTemplateSlug(
    templateSlug: string,
    queryParams?: { after?: string | null; before?: string | null; limit?: number }
  ): Promise<IResponse<GetAllNotificationTemplateSlugResp>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/lobby/v1/admin/notification/namespaces/{namespace}/templates/{templateSlug}'
      .replace('{namespace}', this.namespace)
      .replace('{templateSlug}', templateSlug)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetAllNotificationTemplateSlugResp,
      'GetAllNotificationTemplateSlugResp'
    )
  }

  /**
   * Sends notification to multiple user. Action Code: 50211
   */
  createNotificationBulkUserFreeformNotify(data: BulkUsersFreeFormNotificationRequestV1): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/notification/namespaces/{namespace}/bulkUsers/freeform/notify'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Sends notification to a user. Action Code: 50211
   */
  createFreeformNotifyNotification_ByUserId(userId: string, data: FreeFormNotificationRequestV1): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/notification/namespaces/{namespace}/users/{userId}/freeform/notify'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Sends templated notification to a user. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications&lt;br&gt; Action Code: 50212
   */
  createTemplateNotifyNotification_ByUserId(userId: string, data: NotificationWithTemplateRequestV1): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/notification/namespaces/{namespace}/users/{userId}/templates/notify'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Sends notification to a party.
   */
  createFreeformNotifyNotification_ByPartyId(partyId: string, data: FreeFormNotificationRequestV1): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/notification/namespaces/{namespace}/parties/{partyId}/freeform/notify'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Sends templated notification to a party. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications&lt;br&gt;
   */
  createTemplateNotifyNotification_ByPartyId(partyId: string, data: NotificationWithTemplateRequestV1): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/notification/namespaces/{namespace}/parties/{partyId}/templates/notify'
      .replace('{namespace}', this.namespace)
      .replace('{partyId}', partyId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Delete template localization&lt;br/&gt; Action Code: 50209
   */
  deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/notification/namespaces/{namespace}/templates/{templateSlug}/languages/{templateLanguage}'
      .replace('{namespace}', this.namespace)
      .replace('{templateSlug}', templateSlug)
      .replace('{templateLanguage}', templateLanguage)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get a template localization&lt;br/&gt; Action Code: 50207
   */
  getLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string
  ): Promise<IResponse<Localization>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/notification/namespaces/{namespace}/templates/{templateSlug}/languages/{templateLanguage}'
      .replace('{namespace}', this.namespace)
      .replace('{templateSlug}', templateSlug)
      .replace('{templateLanguage}', templateLanguage)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, Localization, 'Localization')
  }

  /**
   * Update template localization&lt;br/&gt; Action Code: 50208
   */
  updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string,
    data: UpdateTemplateRequest
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/notification/namespaces/{namespace}/templates/{templateSlug}/languages/{templateLanguage}'
      .replace('{namespace}', this.namespace)
      .replace('{templateSlug}', templateSlug)
      .replace('{templateLanguage}', templateLanguage)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Publish notification template draft. Empty draft can not be published.&lt;br/&gt; Action Code: 50210
   */
  createPublishNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug: string, templateLanguage: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/notification/namespaces/{namespace}/templates/{templateSlug}/languages/{templateLanguage}/publish'
      .replace('{namespace}', this.namespace)
      .replace('{templateSlug}', templateSlug)
      .replace('{templateLanguage}', templateLanguage)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
