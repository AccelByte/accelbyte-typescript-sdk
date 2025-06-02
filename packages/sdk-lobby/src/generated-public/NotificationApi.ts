/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { CreateTopicRequest } from '../generated-definitions/CreateTopicRequest.js'
import { FreeFormNotificationRequest } from '../generated-definitions/FreeFormNotificationRequest.js'
import { NotificationResponse } from '../generated-definitions/NotificationResponse.js'
import { NotificationTopicResponse } from '../generated-definitions/NotificationTopicResponse.js'
import { NotificationWithTemplateRequest } from '../generated-definitions/NotificationWithTemplateRequest.js'
import { TopicByNamespacesResponse } from '../generated-definitions/TopicByNamespacesResponse.js'
import { UpdateTopicRequest } from '../generated-definitions/UpdateTopicRequest.js'
import { Notification$ } from './endpoints/Notification$.js'

export function NotificationApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getNotificationMe(queryParams?: {
    endTime?: number
    limit?: number
    offset?: number
    startTime?: number
  }): Promise<AxiosResponse<NotificationResponse>> {
    const $ = new Notification$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getNotificationMe(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getNotificationTopics(queryParams?: {
    after?: string | null
    before?: string | null
    limit?: number
  }): Promise<AxiosResponse<TopicByNamespacesResponse>> {
    const $ = new Notification$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getNotificationTopics(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createNotificationTopic(data: CreateTopicRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Notification$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createNotificationTopic(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteNotificationTopic_ByTopic(topic: string): Promise<AxiosResponse<unknown>> {
    const $ = new Notification$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteNotificationTopic_ByTopic(topic)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getNotificationTopic_ByTopic(topic: string): Promise<AxiosResponse<NotificationTopicResponse>> {
    const $ = new Notification$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getNotificationTopic_ByTopic(topic)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateNotificationTopic_ByTopic(topic: string, data: UpdateTopicRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Notification$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateNotificationTopic_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createFreeformNotification_ByUserId(userId: string, data: FreeFormNotificationRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Notification$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFreeformNotification_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createTemplatedNotification_ByUserId(
    userId: string,
    data: NotificationWithTemplateRequest
  ): Promise<AxiosResponse<unknown>> {
    const $ = new Notification$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createTemplatedNotification_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get list of notifications in a namespace. The query parameters **startTime** and **endTime** can be filled with the **sequenceID** value in the notification, where the value is an epoch timestamp. Example **sequenceID** or epoch timestamp value: **1706595813**
     */
    getNotificationMe,
    /**
     * get topic by namespace.
     */
    getNotificationTopics,
    /**
     * Create new notification topic. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
     */
    createNotificationTopic,
    /**
     * delete topic information by topic name. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
     */
    deleteNotificationTopic_ByTopic,
    /**
     * get topic information by topic name.
     */
    getNotificationTopic_ByTopic,
    /**
     * update topic information by topic name. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
     */
    updateNotificationTopic_ByTopic,
    /**
     * Sends notification to a user.
     */
    createFreeformNotification_ByUserId,
    /**
     * Sends notification to a user with predefined template. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications
     */
    createTemplatedNotification_ByUserId
  }
}
