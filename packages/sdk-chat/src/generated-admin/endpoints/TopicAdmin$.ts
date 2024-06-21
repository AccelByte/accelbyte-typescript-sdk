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
import { ActionAddUserToTopicResult } from '../../generated-definitions/ActionAddUserToTopicResult.js'
import { ActionDeleteTopicResult } from '../../generated-definitions/ActionDeleteTopicResult.js'
import { AddMemberParams } from '../../generated-definitions/AddMemberParams.js'
import { BanTopicMemberParam } from '../../generated-definitions/BanTopicMemberParam.js'
import { BanTopicMemberResult } from '../../generated-definitions/BanTopicMemberResult.js'
import { ChannelTopicResponse } from '../../generated-definitions/ChannelTopicResponse.js'
import { ChannelTopicSummaryResponse } from '../../generated-definitions/ChannelTopicSummaryResponse.js'
import { ChannelTopicWithPaginationResponse } from '../../generated-definitions/ChannelTopicWithPaginationResponse.js'
import { ChatMessageResponseArray } from '../../generated-definitions/ChatMessageResponseArray.js'
import { ChatMessageWithPaginationResponse } from '../../generated-definitions/ChatMessageWithPaginationResponse.js'
import { CreateNamespaceTopicParams } from '../../generated-definitions/CreateNamespaceTopicParams.js'
import { CreateTopicParams } from '../../generated-definitions/CreateTopicParams.js'
import { CreateTopicResponse } from '../../generated-definitions/CreateTopicResponse.js'
import { MessageRequest } from '../../generated-definitions/MessageRequest.js'
import { MessageResultWithAttributes } from '../../generated-definitions/MessageResultWithAttributes.js'
import { SendChatParams } from '../../generated-definitions/SendChatParams.js'
import { TopicInfoArray } from '../../generated-definitions/TopicInfoArray.js'
import { TopicLogWithPaginationResponse } from '../../generated-definitions/TopicLogWithPaginationResponse.js'
import { TopicMemberWithPaginationResponse } from '../../generated-definitions/TopicMemberWithPaginationResponse.js'
import { TopicResponseArray } from '../../generated-definitions/TopicResponseArray.js'
import { UnbanTopicMemberParam } from '../../generated-definitions/UnbanTopicMemberParam.js'
import { UnbanTopicMemberResult } from '../../generated-definitions/UnbanTopicMemberResult.js'
import { UpdateTopicParams } from '../../generated-definitions/UpdateTopicParams.js'

export class TopicAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * Get chat history in a namespace.
   */
  getChats(queryParams?: {
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
  }): Promise<IResponse<ChatMessageWithPaginationResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/chat/admin/namespaces/{namespace}/chats'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ChatMessageWithPaginationResponse,
      'ChatMessageWithPaginationResponse'
    )
  }

  /**
   * Get chat list of topic in a namespace.
   */
  getTopic(queryParams?: { limit?: number; offset?: number; topicType?: string | null }): Promise<IResponse<TopicResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/chat/admin/namespaces/{namespace}/topic'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TopicResponseArray, 'TopicResponseArray')
  }

  /**
   * Create new group topic in a namespace.
   */
  createTopic(data: CreateTopicParams): Promise<IResponse<CreateTopicResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/admin/namespaces/{namespace}/topic'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CreateTopicResponse, 'CreateTopicResponse')
  }

  /**
   * Get topics in a namespace.
   */
  getTopics(queryParams?: {
    includeMembers?: boolean | null
    includePastMembers?: boolean | null
    includePastTopics?: boolean | null
    limit?: number
    offset?: number
    topic?: string[]
    topicSubType?: 'CLAN' | 'NAMESPACE' | 'NORMAL' | 'PARTY' | 'SESSION'
    topicType?: 'GROUP' | 'PERSONAL'
    userId?: string | null
  }): Promise<IResponse<TopicInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/chat/admin/namespaces/{namespace}/topics'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TopicInfoArray, 'TopicInfoArray')
  }

  /**
   * Get chat log of topic in a namespace.
   */
  getTopicLog(queryParams?: {
    endCreatedAt?: number
    limit?: number
    offset?: number
    senderUserId?: string | null
    startCreatedAt?: number
    topicId?: string | null
    topicIds?: string[]
    userId?: string | null
  }): Promise<IResponse<TopicLogWithPaginationResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/chat/admin/namespaces/{namespace}/topic/log'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      TopicLogWithPaginationResponse,
      'TopicLogWithPaginationResponse'
    )
  }

  /**
   * For testing purpose, doesn&#39;t send any message to the topic. Always do filter regardless of enableProfanityFilter configuration.
   */
  createChatFilter(data: MessageRequest, queryParams?: { detail?: boolean | null }): Promise<IResponse<MessageResultWithAttributes>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/chat/admin/namespaces/{namespace}/chat/filter'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      MessageResultWithAttributes,
      'MessageResultWithAttributes'
    )
  }

  /**
   * Delete topic in a namespace.
   */
  deleteTopic_ByTopic(topic: string): Promise<IResponse<ActionDeleteTopicResult>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/admin/namespaces/{namespace}/topic/{topic}'.replace('{namespace}', this.namespace).replace('{topic}', topic)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ActionDeleteTopicResult,
      'ActionDeleteTopicResult'
    )
  }

  /**
   * Update group topic in a namespace.
   */
  updateTopic_ByTopic(topic: string, data: UpdateTopicParams): Promise<IResponse<CreateTopicResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/admin/namespaces/{namespace}/topic/{topic}'.replace('{namespace}', this.namespace).replace('{topic}', topic)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CreateTopicResponse, 'CreateTopicResponse')
  }

  /**
   * Get channel chat list of topic in a namespace.
   */
  getTopicChannel(queryParams?: {
    limit?: number
    offset?: number
    topicName?: string | null
  }): Promise<IResponse<ChannelTopicWithPaginationResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/chat/admin/namespaces/{namespace}/topic/channel'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ChannelTopicWithPaginationResponse,
      'ChannelTopicWithPaginationResponse'
    )
  }

  /**
   * Create new namespace group topic in a namespace.
   */
  createNamespaceTopic(data: CreateNamespaceTopicParams): Promise<IResponse<CreateTopicResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/admin/namespaces/{namespace}/namespace-topic'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CreateTopicResponse, 'CreateTopicResponse')
  }

  /**
   * @deprecated
   * Get chat history in a namespace.
   */
  getChats_ByTopic_DEPRECATED(
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
  ): Promise<IResponse<ChatMessageWithPaginationResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/chat/admin/namespaces/{namespace}/topic/{topic}/chats'.replace('{namespace}', this.namespace).replace('{topic}', topic)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ChatMessageWithPaginationResponse,
      'ChatMessageWithPaginationResponse'
    )
  }

  /**
   * Send message to chat topic as system.
   */
  createChat_ByTopic(topic: string, data: SendChatParams): Promise<IResponse<ChatMessageResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/admin/namespaces/{namespace}/topic/{topic}/chats'.replace('{namespace}', this.namespace).replace('{topic}', topic)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ChatMessageResponseArray,
      'ChatMessageResponseArray'
    )
  }

  /**
   * Get shard list from topic.
   */
  getShards_ByTopic(topic: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/admin/namespaces/{namespace}/topic/{topic}/shards'.replace('{namespace}', this.namespace).replace('{topic}', topic)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get chat list of topic in a namespace.
   */
  getChannel_ByTopic(topic: string): Promise<IResponse<ChannelTopicResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/admin/namespaces/{namespace}/topic/{topic}/channel'.replace('{namespace}', this.namespace).replace('{topic}', topic)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ChannelTopicResponse, 'ChannelTopicResponse')
  }

  /**
   * Get topic members.
   */
  getMembers_ByTopic(
    topic: string,
    queryParams?: { isBanned?: boolean | null; isModerator?: boolean | null; limit?: number; offset?: number; shardId?: string | null }
  ): Promise<IResponse<TopicMemberWithPaginationResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/chat/admin/namespaces/{namespace}/topic/{topic}/members'.replace('{namespace}', this.namespace).replace('{topic}', topic)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      TopicMemberWithPaginationResponse,
      'TopicMemberWithPaginationResponse'
    )
  }

  /**
   * Get chat list of topic in a namespace.
   */
  getTopicChannelSummary(): Promise<IResponse<ChannelTopicSummaryResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/admin/namespaces/{namespace}/topic/channel/summary'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ChannelTopicSummaryResponse,
      'ChannelTopicSummaryResponse'
    )
  }

  /**
   * Get user&#39;s topics in a namespace.
   */
  getTopics_ByUserId(
    userId: string,
    queryParams?: {
      includePastTopics?: boolean | null
      limit?: number
      offset?: number
      topicSubType?: 'CLAN' | 'NAMESPACE' | 'NORMAL' | 'PARTY' | 'SESSION'
      topicType?: 'GROUP' | 'PERSONAL'
    }
  ): Promise<IResponse<TopicLogWithPaginationResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/chat/admin/namespaces/{namespace}/users/{userId}/topics'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      TopicLogWithPaginationResponse,
      'TopicLogWithPaginationResponse'
    )
  }

  /**
   * Ban users in some topic. banned user not assigned to shard for channel topic, and cannot send and query chat.
   */
  createBanMember_ByTopic(topic: string, data: BanTopicMemberParam): Promise<IResponse<BanTopicMemberResult>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/admin/namespaces/{namespace}/topic/{topic}/ban-members'
      .replace('{namespace}', this.namespace)
      .replace('{topic}', topic)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BanTopicMemberResult, 'BanTopicMemberResult')
  }

  /**
   * Unban users in some topic.
   */
  createUnbanMember_ByTopic(topic: string, data: UnbanTopicMemberParam): Promise<IResponse<UnbanTopicMemberResult>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/admin/namespaces/{namespace}/topic/{topic}/unban-members'
      .replace('{namespace}', this.namespace)
      .replace('{topic}', topic)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UnbanTopicMemberResult,
      'UnbanTopicMemberResult'
    )
  }

  /**
   * Remove member from topic in a namespace.
   */
  deleteUser_ByTopic_ByUserId(topic: string, userId: string): Promise<IResponse<ActionAddUserToTopicResult>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/admin/namespaces/{namespace}/topic/{topic}/user/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{topic}', topic)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ActionAddUserToTopicResult,
      'ActionAddUserToTopicResult'
    )
  }

  /**
   * Add new member for topic in a namespace.
   */
  createUser_ByTopic_ByUserId(topic: string, userId: string, data: AddMemberParams): Promise<IResponse<ActionAddUserToTopicResult>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/admin/namespaces/{namespace}/topic/{topic}/user/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{topic}', topic)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ActionAddUserToTopicResult,
      'ActionAddUserToTopicResult'
    )
  }

  /**
   * Delete chat.
   */
  deleteChat_ByTopic_ByChatId(topic: string, chatId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/admin/namespaces/{namespace}/topic/{topic}/chats/{chatId}'
      .replace('{namespace}', this.namespace)
      .replace('{topic}', topic)
      .replace('{chatId}', chatId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
