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
import { CreateTopicRequest } from '../../generated-definitions/CreateTopicRequest.js'
import { FreeFormNotificationRequest } from '../../generated-definitions/FreeFormNotificationRequest.js'
import { NotificationResponse } from '../../generated-definitions/NotificationResponse.js'
import { NotificationTopicResponse } from '../../generated-definitions/NotificationTopicResponse.js'
import { NotificationWithTemplateRequest } from '../../generated-definitions/NotificationWithTemplateRequest.js'
import { TopicByNamespacesResponse } from '../../generated-definitions/TopicByNamespacesResponse.js'
import { UpdateTopicRequest } from '../../generated-definitions/UpdateTopicRequest.js'

export class Notification$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get list of notifications in a namespace. The query parameters **startTime** and **endTime** can be filled with the **sequenceID** value in the notification, where the value is an epoch timestamp. Example **sequenceID** or epoch timestamp value: **1706595813**
   */
  getNotificationMe(queryParams?: {
    endTime?: number
    limit?: number
    offset?: number
    startTime?: number
  }): Promise<Response<NotificationResponse>> {
    const params = { limit: 25, ...queryParams } as AxiosRequestConfig
    const url = '/notification/namespaces/{namespace}/me'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, NotificationResponse, 'NotificationResponse')
  }
  /**
   * get topic by namespace.
   */
  getNotificationTopics(queryParams?: {
    after?: string | null
    before?: string | null
    limit?: number
  }): Promise<Response<TopicByNamespacesResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/notification/namespaces/{namespace}/topics'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      TopicByNamespacesResponse,
      'TopicByNamespacesResponse'
    )
  }
  /**
   * Create new notification topic. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
   */
  createNotificationTopic(data: CreateTopicRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/notification/namespaces/{namespace}/topics'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * delete topic information by topic name. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
   */
  deleteNotificationTopic_ByTopic(topic: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/notification/namespaces/{namespace}/topics/{topic}'.replace('{namespace}', this.namespace).replace('{topic}', topic)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * get topic information by topic name.
   */
  getNotificationTopic_ByTopic(topic: string): Promise<Response<NotificationTopicResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/notification/namespaces/{namespace}/topics/{topic}'.replace('{namespace}', this.namespace).replace('{topic}', topic)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      NotificationTopicResponse,
      'NotificationTopicResponse'
    )
  }
  /**
   * update topic information by topic name. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
   */
  updateNotificationTopic_ByTopic(topic: string, data: UpdateTopicRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/notification/namespaces/{namespace}/topics/{topic}'.replace('{namespace}', this.namespace).replace('{topic}', topic)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Sends notification to a user.
   */
  createFreeformNotification_ByUserId(userId: string, data: FreeFormNotificationRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/notification/namespaces/{namespace}/users/{userId}/freeform'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Sends notification to a user with predefined template. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications
   */
  createTemplatedNotification_ByUserId(userId: string, data: NotificationWithTemplateRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/notification/namespaces/{namespace}/users/{userId}/templated'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
