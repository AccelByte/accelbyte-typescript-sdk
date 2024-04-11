/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
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
import { TopicAdmin$ } from './endpoints/TopicAdmin$.js'
import { TopicInfoArray } from '../generated-definitions/TopicInfoArray.js'
import { TopicLogWithPaginationResponse } from '../generated-definitions/TopicLogWithPaginationResponse.js'
import { TopicMemberWithPaginationResponse } from '../generated-definitions/TopicMemberWithPaginationResponse.js'
import { TopicResponseArray } from '../generated-definitions/TopicResponseArray.js'
import { UnbanTopicMemberParam } from '../generated-definitions/UnbanTopicMemberParam.js'
import { UnbanTopicMemberResult } from '../generated-definitions/UnbanTopicMemberResult.js'
import { UpdateTopicParams } from '../generated-definitions/UpdateTopicParams.js'

export function TopicAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Get chat history in a namespace.
   */
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
  }): Promise<ChatMessageWithPaginationResponse> {
    const $ = new TopicAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getChats(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get chat list of topic in a namespace.
   */
  async function getTopic(queryParams?: { limit?: number; offset?: number; topicType?: string | null }): Promise<TopicResponseArray> {
    const $ = new TopicAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getTopic(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create new group topic in a namespace.
   */
  async function createTopic(data: CreateTopicParams): Promise<CreateTopicResponse> {
    const $ = new TopicAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createTopic(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get topics in a namespace.
   */
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
  }): Promise<TopicInfoArray> {
    const $ = new TopicAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getTopics(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get chat log of topic in a namespace.
   */
  async function getTopicLog(queryParams?: {
    endCreatedAt?: number
    limit?: number
    offset?: number
    senderUserId?: string | null
    startCreatedAt?: number
    topicId?: string | null
    topicIds?: string[]
    userId?: string | null
  }): Promise<TopicLogWithPaginationResponse> {
    const $ = new TopicAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getTopicLog(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * For testing purpose, doesn&#39;t send any message to the topic. Always do filter regardless of enableProfanityFilter configuration.
   */
  async function createChatFilter(data: MessageRequest, queryParams?: { detail?: boolean | null }): Promise<MessageResultWithAttributes> {
    const $ = new TopicAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createChatFilter(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete topic in a namespace.
   */
  async function deleteTopic_ByTopic(topic: string): Promise<ActionDeleteTopicResult> {
    const $ = new TopicAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteTopic_ByTopic(topic)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update group topic in a namespace.
   */
  async function updateTopic_ByTopic(topic: string, data: UpdateTopicParams): Promise<CreateTopicResponse> {
    const $ = new TopicAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateTopic_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get channel chat list of topic in a namespace.
   */
  async function getTopicChannel(queryParams?: {
    limit?: number
    offset?: number
    topicName?: string | null
  }): Promise<ChannelTopicWithPaginationResponse> {
    const $ = new TopicAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getTopicChannel(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create new namespace group topic in a namespace.
   */
  async function createNamespaceTopic(data: CreateNamespaceTopicParams): Promise<CreateTopicResponse> {
    const $ = new TopicAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createNamespaceTopic(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Get chat history in a namespace.
   */
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
    }
  ): Promise<ChatMessageWithPaginationResponse> {
    const $ = new TopicAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getChats_ByTopic(topic, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Send message to chat topic as system.
   */
  async function createChat_ByTopic(topic: string, data: SendChatParams): Promise<ChatMessageResponseArray> {
    const $ = new TopicAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createChat_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get shard list from topic.
   */
  async function getShards_ByTopic(topic: string): Promise<unknown> {
    const $ = new TopicAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getShards_ByTopic(topic)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get chat list of topic in a namespace.
   */
  async function getChannel_ByTopic(topic: string): Promise<ChannelTopicResponse> {
    const $ = new TopicAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getChannel_ByTopic(topic)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get topic members.
   */
  async function getMembers_ByTopic(
    topic: string,
    queryParams?: { isBanned?: boolean | null; isModerator?: boolean | null; limit?: number; offset?: number; shardId?: string | null }
  ): Promise<TopicMemberWithPaginationResponse> {
    const $ = new TopicAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getMembers_ByTopic(topic, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get chat list of topic in a namespace.
   */
  async function getTopicChannelSummary(): Promise<ChannelTopicSummaryResponse> {
    const $ = new TopicAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getTopicChannelSummary()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user&#39;s topics in a namespace.
   */
  async function getTopics_ByUserId(
    userId: string,
    queryParams?: {
      includePastTopics?: boolean | null
      limit?: number
      offset?: number
      topicSubType?: 'CLAN' | 'NAMESPACE' | 'NORMAL' | 'PARTY' | 'SESSION'
      topicType?: 'GROUP' | 'PERSONAL'
    }
  ): Promise<TopicLogWithPaginationResponse> {
    const $ = new TopicAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getTopics_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Ban users in some topic. banned user not assigned to shard for channel topic, and cannot send and query chat.
   */
  async function createBanMember_ByTopic(topic: string, data: BanTopicMemberParam): Promise<BanTopicMemberResult> {
    const $ = new TopicAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createBanMember_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Unban users in some topic.
   */
  async function createUnbanMember_ByTopic(topic: string, data: UnbanTopicMemberParam): Promise<UnbanTopicMemberResult> {
    const $ = new TopicAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createUnbanMember_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Remove member from topic in a namespace.
   */
  async function deleteUser_ByTopic_ByUserId(topic: string, userId: string): Promise<ActionAddUserToTopicResult> {
    const $ = new TopicAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteUser_ByTopic_ByUserId(topic, userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Add new member for topic in a namespace.
   */
  async function createUser_ByTopic_ByUserId(topic: string, userId: string, data: AddMemberParams): Promise<ActionAddUserToTopicResult> {
    const $ = new TopicAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createUser_ByTopic_ByUserId(topic, userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete chat.
   */
  async function deleteChat_ByTopic_ByChatId(topic: string, chatId: string): Promise<unknown> {
    const $ = new TopicAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteChat_ByTopic_ByChatId(topic, chatId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getChats,
    getTopic,
    createTopic,
    getTopics,
    getTopicLog,
    createChatFilter,
    deleteTopic_ByTopic,
    updateTopic_ByTopic,
    getTopicChannel,
    createNamespaceTopic,
    getChats_ByTopic,
    createChat_ByTopic,
    getShards_ByTopic,
    getChannel_ByTopic,
    getMembers_ByTopic,
    getTopicChannelSummary,
    getTopics_ByUserId,
    createBanMember_ByTopic,
    createUnbanMember_ByTopic,
    deleteUser_ByTopic_ByUserId,
    createUser_ByTopic_ByUserId,
    deleteChat_ByTopic_ByChatId
  }
}
