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
import { CreateTemplateRequest } from '../../generated-definitions/CreateTemplateRequest.js'
import { FreeFormNotificationRequest } from '../../generated-definitions/FreeFormNotificationRequest.js'
import { NotificationWithTemplateRequest } from '../../generated-definitions/NotificationWithTemplateRequest.js'
import { TemplateLocalization } from '../../generated-definitions/TemplateLocalization.js'
import { TemplateLocalizationResponse } from '../../generated-definitions/TemplateLocalizationResponse.js'
import { TemplateResponseArray } from '../../generated-definitions/TemplateResponseArray.js'
import { UpdateTemplateRequest } from '../../generated-definitions/UpdateTemplateRequest.js'

export class Admin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Sends notification to all connected users in a namespace.
   */
  createNotificationFreeform(data: FreeFormNotificationRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/notification/namespaces/{namespace}/freeform'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Sends notification to all connected users in a namespace with predefined template. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications
   */
  createNotificationTemplated(data: NotificationWithTemplateRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/notification/namespaces/{namespace}/templated'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get all templates in a namespace
   */
  getNotificationTemplates(): Promise<Response<TemplateResponseArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/notification/namespaces/{namespace}/templates'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TemplateResponseArray, 'TemplateResponseArray')
  }
  /**
   * Create new notification template. Include handlebars {{key}} for replaceable contexts. The the key inside handlebars will be the key to be replaced when sending notification. Already existing template with the same slug and language can not be created. &lt;br&gt;Check model description for detailed input restrictions.
   */
  createNotificationTemplate(data: CreateTemplateRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/notification/namespaces/{namespace}/templates'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Delete localization template
   */
  deleteNotificationTemplate_ByTemplateSlug(templateSlug: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/notification/namespaces/{namespace}/templates/{templateSlug}'
      .replace('{namespace}', this.namespace)
      .replace('{templateSlug}', templateSlug)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get all templates in a namespace
   */
  getNotificationTemplate_ByTemplateSlug(
    templateSlug: string,
    queryParams?: { after?: string | null; before?: string | null; limit?: number }
  ): Promise<Response<TemplateLocalizationResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/notification/namespaces/{namespace}/templates/{templateSlug}'
      .replace('{namespace}', this.namespace)
      .replace('{templateSlug}', templateSlug)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      TemplateLocalizationResponse,
      'TemplateLocalizationResponse'
    )
  }
  /**
   * Delete all template in a slug
   */
  deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug: string, templateLanguage: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/notification/namespaces/{namespace}/templates/{templateSlug}/languages/{templateLanguage}'
      .replace('{namespace}', this.namespace)
      .replace('{templateSlug}', templateSlug)
      .replace('{templateLanguage}', templateLanguage)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get a template localization
   */
  getLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string
  ): Promise<Response<TemplateLocalization>> {
    const params = {} as AxiosRequestConfig
    const url = '/notification/namespaces/{namespace}/templates/{templateSlug}/languages/{templateLanguage}'
      .replace('{namespace}', this.namespace)
      .replace('{templateSlug}', templateSlug)
      .replace('{templateLanguage}', templateLanguage)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TemplateLocalization, 'TemplateLocalization')
  }
  /**
   * Modify draft template
   */
  updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string,
    data: UpdateTemplateRequest
  ): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/notification/namespaces/{namespace}/templates/{templateSlug}/languages/{templateLanguage}'
      .replace('{namespace}', this.namespace)
      .replace('{templateSlug}', templateSlug)
      .replace('{templateLanguage}', templateLanguage)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Publish notification template draft. Empty draft can not be published.
   */
  createPublishNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug: string, templateLanguage: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/notification/namespaces/{namespace}/templates/{templateSlug}/languages/{templateLanguage}/publish'
      .replace('{namespace}', this.namespace)
      .replace('{templateSlug}', templateSlug)
      .replace('{templateLanguage}', templateLanguage)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
