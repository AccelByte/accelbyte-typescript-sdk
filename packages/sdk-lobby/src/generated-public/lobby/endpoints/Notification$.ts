/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { CreateTemplateRequest } from '../definitions/CreateTemplateRequest.js'
import { CreateTopicRequest } from '../definitions/CreateTopicRequest.js'
import { FreeFormNotificationRequest } from '../definitions/FreeFormNotificationRequest.js'
import { NotificationTopicResponse } from '../definitions/NotificationTopicResponse.js'
import { NotificationWithTemplateRequest } from '../definitions/NotificationWithTemplateRequest.js'
import { TemplateLocalization } from '../definitions/TemplateLocalization.js'
import { TemplateLocalizationResponse } from '../definitions/TemplateLocalizationResponse.js'
import { TemplateResponseArray } from '../definitions/TemplateResponseArray.js'
import { TopicByNamespacesResponse } from '../definitions/TopicByNamespacesResponse.js'
import { UpdateTemplateRequest } from '../definitions/UpdateTemplateRequest.js'
import { UpdateTopicRequest } from '../definitions/UpdateTopicRequest.js'

export class Notification$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TOPIC [READ]</code> with scope <code>social</code> <br>get topic by namespace.
   */
  getNotificationTopics(queryParams?: {
    limit?: number
    before?: string | null
    after?: string | null
  }): Promise<IResponseWithSync<TopicByNamespacesResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/topics'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, TopicByNamespacesResponse, 'TopicByNamespacesResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TOPIC [CREATE]</code> with scope <code>social</code> <br>Create new notification topic. <br>topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
   */
  createNotificationTopic(data: CreateTopicRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/topics'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:NOTIFICATION [CREATE]</code> with scope <code>social</code> <br>Sends notification to all connected users in a namespace.
   */
  createNotificationFreeform(data: FreeFormNotificationRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/freeform'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:NOTIFICATION [CREATE]</code> with scope <code>social</code> <br>Sends notification to all connected users in a namespace with predefined template. <br>In the request body, specify which template slug (template identifier) to use and the template language. <br>NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications
   */
  createNotificationTemplated(data: NotificationWithTemplateRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/templated'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TEMPLATE [READ]</code> with scope <code>social</code> <br>Get all templates in a namespace
   */
  getNotificationTemplates(): Promise<IResponseWithSync<TemplateResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/templates'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, TemplateResponseArray, 'TemplateResponseArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TEMPLATE [CREATE]</code> with scope <code>social</code> <br>Create new notification template. Include handlebars {{key}} for replaceable contexts. The the key inside handlebars will be the key to be replaced when sending notification. Already existing template with the same slug and language can not be created. <br>Check model description for detailed input restrictions.
   */
  createNotificationTemplate(data: CreateTemplateRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/templates'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TOPIC [READ]</code> with scope <code>social</code> <br>get topic information by topic name.
   */
  getNotificationTopic_ByTopic(topic: string): Promise<IResponseWithSync<NotificationTopicResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/topics/{topic}'.replace('{namespace}', this.namespace).replace('{topic}', topic)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, NotificationTopicResponse, 'NotificationTopicResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TOPIC [UPDATE]</code> with scope <code>social</code> <br>update topic information by topic name. <br>topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
   */
  updateNotificationTopic_ByTopic(topic: string, data: UpdateTopicRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/topics/{topic}'.replace('{namespace}', this.namespace).replace('{topic}', topic)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TOPIC [DELETE]</code> with scope <code>social</code> <br>delete topic information by topic name. <br>topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
   */
  deleteNotificationTopic_ByTopic(topic: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/topics/{topic}'.replace('{namespace}', this.namespace).replace('{topic}', topic)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:USER:{userId}:NOTIFICATION [CREATE]</code> with scope <code>social</code> <br>Sends notification to a user.
   */
  createFreeformNotification_ByUserId(userId: string, data: FreeFormNotificationRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/users/{userId}/freeform'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TEMPLATE [READ]</code> with scope <code>social</code> <br>Get all templates in a namespace
   */
  getNotificationTemplate_ByTemplateSlug(
    templateSlug: string,
    queryParams?: { limit?: number; before?: string | null; after?: string | null }
  ): Promise<IResponseWithSync<TemplateLocalizationResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/templates/{templateSlug}'
      .replace('{namespace}', this.namespace)
      .replace('{templateSlug}', templateSlug)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, TemplateLocalizationResponse, 'TemplateLocalizationResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TEMPLATE [DELETE]</code> with scope <code>social</code> <br>Delete localization template
   */
  deleteNotificationTemplate_ByTemplateSlug(templateSlug: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/templates/{templateSlug}'
      .replace('{namespace}', this.namespace)
      .replace('{templateSlug}', templateSlug)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:USER:{userId}:NOTIFICATION [CREATE]</code> with scope <code>social</code> <br>Sends notification to a user with predefined template. <br>In the request body, specify which template slug (template identifier) to use and the template language. <br>NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications
   */
  createTemplatedNotification_ByUserId(userId: string, data: NotificationWithTemplateRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/users/{userId}/templated'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TEMPLATE [READ]</code> with scope <code>social</code> <br>Get a template localization
   */
  getLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string
  ): Promise<IResponseWithSync<TemplateLocalization>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/templates/{templateSlug}/languages/{templateLanguage}'
      .replace('{namespace}', this.namespace)
      .replace('{templateSlug}', templateSlug)
      .replace('{templateLanguage}', templateLanguage)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, TemplateLocalization, 'TemplateLocalization')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TEMPLATE [UPDATE]</code> with scope <code>social</code> <br>Modify draft template
   */
  updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string,
    data: UpdateTemplateRequest
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/templates/{templateSlug}/languages/{templateLanguage}'
      .replace('{namespace}', this.namespace)
      .replace('{templateSlug}', templateSlug)
      .replace('{templateLanguage}', templateLanguage)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TEMPLATE [DELETE]</code> with scope <code>social</code> <br>Delete all template in a slug
   */
  deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/templates/{templateSlug}/languages/{templateLanguage}'
      .replace('{namespace}', this.namespace)
      .replace('{templateSlug}', templateSlug)
      .replace('{templateLanguage}', templateLanguage)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:TEMPLATE [CREATE]</code> with scope <code>social</code> <br>Publish notification template draft. Empty draft can not be published.
   */
  createPublishNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug: string, templateLanguage: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/templates/{templateSlug}/languages/{templateLanguage}/publish'
      .replace('{namespace}', this.namespace)
      .replace('{templateSlug}', templateSlug)
      .replace('{templateLanguage}', templateLanguage)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
