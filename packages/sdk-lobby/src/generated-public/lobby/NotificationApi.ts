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
import { CreateTopicRequest } from './definitions/CreateTopicRequest.js'
import { FreeFormNotificationRequest } from './definitions/FreeFormNotificationRequest.js'
import { Notification$ } from './endpoints/Notification$.js'
import { NotificationTopicResponse } from './definitions/NotificationTopicResponse.js'
import { NotificationWithTemplateRequest } from './definitions/NotificationWithTemplateRequest.js'
import { TopicByNamespacesResponse } from './definitions/TopicByNamespacesResponse.js'
import { UpdateTopicRequest } from './definitions/UpdateTopicRequest.js'

export function NotificationApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:TOPIC [READ]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;get topic by namespace.
   */
  async function getNotificationTopics(queryParams?: {
    after?: string | null
    before?: string | null
    limit?: number
  }): Promise<TopicByNamespacesResponse> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getNotificationTopics(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:TOPIC [CREATE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;Create new notification topic. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
   */
  async function createNotificationTopic(data: CreateTopicRequest): Promise<unknown> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createNotificationTopic(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:TOPIC [DELETE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;delete topic information by topic name. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
   */
  async function deleteNotificationTopic_ByTopic(topic: string): Promise<unknown> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteNotificationTopic_ByTopic(topic)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:TOPIC [READ]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;get topic information by topic name.
   */
  async function getNotificationTopic_ByTopic(topic: string): Promise<NotificationTopicResponse> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getNotificationTopic_ByTopic(topic)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:TOPIC [UPDATE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;update topic information by topic name. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
   */
  async function updateNotificationTopic_ByTopic(topic: string, data: UpdateTopicRequest): Promise<unknown> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateNotificationTopic_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:NOTIFICATION [CREATE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;Sends notification to a user.
   */
  async function createFreeformNotification_ByUserId(userId: string, data: FreeFormNotificationRequest): Promise<unknown> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createFreeformNotification_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:NOTIFICATION [CREATE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;Sends notification to a user with predefined template. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications
   */
  async function createTemplatedNotification_ByUserId(userId: string, data: NotificationWithTemplateRequest): Promise<unknown> {
    const $ = new Notification$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createTemplatedNotification_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getNotificationTopics,
    createNotificationTopic,
    deleteNotificationTopic_ByTopic,
    getNotificationTopic_ByTopic,
    updateNotificationTopic_ByTopic,
    createFreeformNotification_ByUserId,
    createTemplatedNotification_ByUserId
  }
}
