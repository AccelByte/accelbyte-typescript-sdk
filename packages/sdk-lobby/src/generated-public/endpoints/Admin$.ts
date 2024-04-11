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
import { CreateTemplateRequest } from '../../generated-definitions/CreateTemplateRequest.js'
import { FreeFormNotificationRequest } from '../../generated-definitions/FreeFormNotificationRequest.js'
import { NotificationWithTemplateRequest } from '../../generated-definitions/NotificationWithTemplateRequest.js'
import { TemplateLocalization } from '../../generated-definitions/TemplateLocalization.js'
import { TemplateLocalizationResponse } from '../../generated-definitions/TemplateLocalizationResponse.js'
import { TemplateResponseArray } from '../../generated-definitions/TemplateResponseArray.js'
import { UpdateTemplateRequest } from '../../generated-definitions/UpdateTemplateRequest.js'

export class Admin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * Sends notification to all connected users in a namespace.
   */
  createNotificationFreeform(data: FreeFormNotificationRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/freeform'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Sends notification to all connected users in a namespace with predefined template. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications
   */
  createNotificationTemplated(data: NotificationWithTemplateRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/templated'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get all templates in a namespace
   */
  getNotificationTemplates(): Promise<IResponse<TemplateResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/templates'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, TemplateResponseArray, 'TemplateResponseArray')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Create new notification template. Include handlebars {{key}} for replaceable contexts. The the key inside handlebars will be the key to be replaced when sending notification. Already existing template with the same slug and language can not be created. &lt;br&gt;Check model description for detailed input restrictions.
   */
  createNotificationTemplate(data: CreateTemplateRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/templates'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Delete localization template
   */
  deleteNotificationTemplate_ByTemplateSlug(templateSlug: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/templates/{templateSlug}'
      .replace('{namespace}', this.namespace)
      .replace('{templateSlug}', templateSlug)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get all templates in a namespace
   */
  getNotificationTemplate_ByTemplateSlug(
    templateSlug: string,
    queryParams?: { after?: string | null; before?: string | null; limit?: number }
  ): Promise<IResponse<TemplateLocalizationResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/templates/{templateSlug}'
      .replace('{namespace}', this.namespace)
      .replace('{templateSlug}', templateSlug)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, TemplateLocalizationResponse, 'TemplateLocalizationResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Delete all template in a slug
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

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get a template localization
   */
  getLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string
  ): Promise<IResponse<TemplateLocalization>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/templates/{templateSlug}/languages/{templateLanguage}'
      .replace('{namespace}', this.namespace)
      .replace('{templateSlug}', templateSlug)
      .replace('{templateLanguage}', templateLanguage)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, TemplateLocalization, 'TemplateLocalization')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Modify draft template
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

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Publish notification template draft. Empty draft can not be published.
   */
  createPublishNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug: string, templateLanguage: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/templates/{templateSlug}/languages/{templateLanguage}/publish'
      .replace('{namespace}', this.namespace)
      .replace('{templateSlug}', templateSlug)
      .replace('{templateLanguage}', templateLanguage)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
