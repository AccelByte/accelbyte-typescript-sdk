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
import { FreeFormNotificationRequest } from '../definitions/FreeFormNotificationRequest.js'
import { NotificationWithTemplateRequest } from '../definitions/NotificationWithTemplateRequest.js'
import { TemplateLocalization } from '../definitions/TemplateLocalization.js'
import { TemplateLocalizationResponse } from '../definitions/TemplateLocalizationResponse.js'
import { TemplateResponseArray } from '../definitions/TemplateResponseArray.js'
import { UpdateTemplateRequest } from '../definitions/UpdateTemplateRequest.js'

export class Admin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:NOTIFICATION [CREATE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;Sends notification to all connected users in a namespace.
   */
  createNotificationFreeform(data: FreeFormNotificationRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/freeform'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:NOTIFICATION [CREATE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;Sends notification to all connected users in a namespace with predefined template. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications
   */
  createNotificationTemplated(data: NotificationWithTemplateRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/templated'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:TEMPLATE [READ]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;Get all templates in a namespace
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
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:TEMPLATE [CREATE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;Create new notification template. Include handlebars {{key}} for replaceable contexts. The the key inside handlebars will be the key to be replaced when sending notification. Already existing template with the same slug and language can not be created. &lt;br&gt;Check model description for detailed input restrictions.
   */
  createNotificationTemplate(data: CreateTemplateRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/templates'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:TEMPLATE [DELETE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;Delete localization template
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
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:TEMPLATE [READ]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;Get all templates in a namespace
   */
  getNotificationTemplate_ByTemplateSlug(
    templateSlug: string,
    queryParams?: { after?: string | null; before?: string | null; limit?: number }
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
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:TEMPLATE [DELETE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;Delete all template in a slug
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
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:TEMPLATE [READ]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;Get a template localization
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
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:TEMPLATE [UPDATE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;Modify draft template
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
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:TEMPLATE [CREATE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;Publish notification template draft. Empty draft can not be published.
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
