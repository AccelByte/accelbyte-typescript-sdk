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
import { ActionAddUserToTopicResult } from '../generated-definitions/ActionAddUserToTopicResult.js'
import { ActionDeleteTopicResult } from '../generated-definitions/ActionDeleteTopicResult.js'
import { AddMemberParams } from '../generated-definitions/AddMemberParams.js'
import { BanTopicMemberParam } from '../generated-definitions/BanTopicMemberParam.js'
import { BanTopicMemberResult } from '../generated-definitions/BanTopicMemberResult.js'
import { ChannelTopicResponse } from '../generated-definitions/ChannelTopicResponse.js'
import { ChannelTopicSummaryResponse } from '../generated-definitions/ChannelTopicSummaryResponse.js'
import { ChannelTopicWithPaginationResponse } from '../generated-definitions/ChannelTopicWithPaginationResponse.js'
import { ChatMessageResponseArray } from '../generated-definitions/ChatMessageResponseArray.js'
import { ChatMessageWithPaginationResponse } from '../generated-definitions/ChatMessageWithPaginationResponse.js'
import { CreateNamespaceTopicParams } from '../generated-definitions/CreateNamespaceTopicParams.js'
import { CreateTopicParams } from '../generated-definitions/CreateTopicParams.js'
import { CreateTopicResponse } from '../generated-definitions/CreateTopicResponse.js'
import { MessageRequest } from '../generated-definitions/MessageRequest.js'
import { MessageResultWithAttributes } from '../generated-definitions/MessageResultWithAttributes.js'
import { SendChatParams } from '../generated-definitions/SendChatParams.js'
import { TopicInfoArray } from '../generated-definitions/TopicInfoArray.js'
import { TopicLogWithPaginationResponse } from '../generated-definitions/TopicLogWithPaginationResponse.js'
import { TopicMemberWithPaginationResponse } from '../generated-definitions/TopicMemberWithPaginationResponse.js'
import { TopicResponseArray } from '../generated-definitions/TopicResponseArray.js'
import { UnbanTopicMemberParam } from '../generated-definitions/UnbanTopicMemberParam.js'
import { UnbanTopicMemberResult } from '../generated-definitions/UnbanTopicMemberResult.js'
import { UpdateTopicParams } from '../generated-definitions/UpdateTopicParams.js'
import { TopicAdmin$ } from './endpoints/TopicAdmin$.js'

export function TopicAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getChats(queryParams?: {
    chatId?: string[]
    endCreatedAt?: number
    keyword?: string | null
    limit?: number
    offset?: number
    order?: string | null
    senderUserId?: string | null
    shardId?: string | null
    startCreatedAt?: number
    topic?: string[]
    unfiltered?: boolean | null
  }): Promise<AxiosResponse<ChatMessageWithPaginationResponse>> {
    const $ = new TopicAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getChats(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getTopic(queryParams?: {
    limit?: number
    offset?: number
    topicType?: string | null
  }): Promise<AxiosResponse<TopicResponseArray>> {
    const $ = new TopicAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTopic(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createTopic(data: CreateTopicParams): Promise<AxiosResponse<CreateTopicResponse>> {
    const $ = new TopicAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createTopic(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getTopics(queryParams?: {
    includeMembers?: boolean | null
    includePastMembers?: boolean | null
    includePastTopics?: boolean | null
    limit?: number
    offset?: number
    topic?: string[]
    topicSubType?: 'CLAN' | 'NAMESPACE' | 'NORMAL' | 'PARTY' | 'SESSION'
    topicType?: 'GROUP' | 'PERSONAL'
    userId?: string | null
  }): Promise<AxiosResponse<TopicInfoArray>> {
    const $ = new TopicAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTopics(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getTopicLog(queryParams?: {
    endCreatedAt?: number
    limit?: number
    offset?: number
    senderUserId?: string | null
    startCreatedAt?: number
    topicId?: string | null
    topicIds?: string[]
    userId?: string | null
  }): Promise<AxiosResponse<TopicLogWithPaginationResponse>> {
    const $ = new TopicAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTopicLog(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function fetchChatFilter(
    data: MessageRequest,
    queryParams?: { detail?: boolean | null }
  ): Promise<AxiosResponse<MessageResultWithAttributes>> {
    const $ = new TopicAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchChatFilter(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteTopic_ByTopic(topic: string): Promise<AxiosResponse<ActionDeleteTopicResult>> {
    const $ = new TopicAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteTopic_ByTopic(topic)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateTopic_ByTopic(topic: string, data: UpdateTopicParams): Promise<AxiosResponse<CreateTopicResponse>> {
    const $ = new TopicAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateTopic_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getTopicChannel(queryParams?: {
    limit?: number
    offset?: number
    topicName?: string | null
  }): Promise<AxiosResponse<ChannelTopicWithPaginationResponse>> {
    const $ = new TopicAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTopicChannel(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createNamespaceTopic(data: CreateNamespaceTopicParams): Promise<AxiosResponse<CreateTopicResponse>> {
    const $ = new TopicAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createNamespaceTopic(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getChats_ByTopic(
    topic: string,
    queryParams?: {
      endCreatedAt?: number
      keyword?: string | null
      limit?: number
      offset?: number
      order?: string | null
      senderUserId?: string | null
      shardId?: string | null
      startCreatedAt?: number
      unfiltered?: boolean | null
    }
  ): Promise<AxiosResponse<ChatMessageWithPaginationResponse>> {
    const $ = new TopicAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getChats_ByTopic(topic, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateChat_ByTopic(topic: string, data: SendChatParams): Promise<AxiosResponse<ChatMessageResponseArray>> {
    const $ = new TopicAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateChat_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getShards_ByTopic(topic: string): Promise<AxiosResponse<unknown>> {
    const $ = new TopicAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getShards_ByTopic(topic)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getChannel_ByTopic(topic: string): Promise<AxiosResponse<ChannelTopicResponse>> {
    const $ = new TopicAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getChannel_ByTopic(topic)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getMembers_ByTopic(
    topic: string,
    queryParams?: { isBanned?: boolean | null; isModerator?: boolean | null; limit?: number; offset?: number; shardId?: string | null }
  ): Promise<AxiosResponse<TopicMemberWithPaginationResponse>> {
    const $ = new TopicAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMembers_ByTopic(topic, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getTopicChannelSummary(): Promise<AxiosResponse<ChannelTopicSummaryResponse>> {
    const $ = new TopicAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTopicChannelSummary()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getTopics_ByUserId(
    userId: string,
    queryParams?: {
      includePastTopics?: boolean | null
      limit?: number
      offset?: number
      topicSubType?: 'CLAN' | 'NAMESPACE' | 'NORMAL' | 'PARTY' | 'SESSION'
      topicType?: 'GROUP' | 'PERSONAL'
    }
  ): Promise<AxiosResponse<TopicLogWithPaginationResponse>> {
    const $ = new TopicAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTopics_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateBanMember_ByTopic(topic: string, data: BanTopicMemberParam): Promise<AxiosResponse<BanTopicMemberResult>> {
    const $ = new TopicAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateBanMember_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateUnbanMember_ByTopic(topic: string, data: UnbanTopicMemberParam): Promise<AxiosResponse<UnbanTopicMemberResult>> {
    const $ = new TopicAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUnbanMember_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteUser_ByTopic_ByUserId(topic: string, userId: string): Promise<AxiosResponse<ActionAddUserToTopicResult>> {
    const $ = new TopicAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteUser_ByTopic_ByUserId(topic, userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateUser_ByTopic_ByUserId(
    topic: string,
    userId: string,
    data: AddMemberParams
  ): Promise<AxiosResponse<ActionAddUserToTopicResult>> {
    const $ = new TopicAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUser_ByTopic_ByUserId(topic, userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteChat_ByTopic_ByChatId(topic: string, chatId: string): Promise<AxiosResponse<unknown>> {
    const $ = new TopicAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteChat_ByTopic_ByChatId(topic, chatId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get chat history in a namespace.
     */
    getChats,
    /**
     * Get chat list of topic in a namespace.
     */
    getTopic,
    /**
     * Create new group topic in a namespace.
     */
    createTopic,
    /**
     * Get topics in a namespace.
     */
    getTopics,
    /**
     * Get chat log of topic in a namespace.
     */
    getTopicLog,
    /**
     * For testing purpose, doesn&#39;t send any message to the topic. Always do filter regardless of enableProfanityFilter configuration.
     */
    fetchChatFilter,
    /**
     * Delete topic in a namespace.
     */
    deleteTopic_ByTopic,
    /**
     * Update group topic in a namespace.
     */
    updateTopic_ByTopic,
    /**
     * Get channel chat list of topic in a namespace.
     */
    getTopicChannel,
    /**
     * Create new namespace group topic in a namespace.
     */
    createNamespaceTopic,
    /**
     * @deprecated
     * Get chat history in a namespace.
     */
    getChats_ByTopic,
    /**
     * Send message to chat topic as system.
     */
    updateChat_ByTopic,
    /**
     * Get shard list from topic.
     */
    getShards_ByTopic,
    /**
     * Get chat list of topic in a namespace.
     */
    getChannel_ByTopic,
    /**
     * Get topic members.
     */
    getMembers_ByTopic,
    /**
     * Get chat list of topic in a namespace.
     */
    getTopicChannelSummary,
    /**
     * Get user&#39;s topics in a namespace.
     */
    getTopics_ByUserId,
    /**
     * Ban users in some topic. banned user not assigned to shard for channel topic, and cannot send and query chat.
     */
    updateBanMember_ByTopic,
    /**
     * Unban users in some topic.
     */
    updateUnbanMember_ByTopic,
    /**
     * Remove member from topic in a namespace.
     */
    deleteUser_ByTopic_ByUserId,
    /**
     * Add new member for topic in a namespace.
     */
    updateUser_ByTopic_ByUserId,
    /**
     * Delete chat.
     */
    deleteChat_ByTopic_ByChatId
  }
}
