/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { ChatMessageResponseArray } from '../../generated-definitions/ChatMessageResponseArray.js'
import { MuteUserRequest } from '../../generated-definitions/MuteUserRequest.js'
import { MutedTopicResponseArray } from '../../generated-definitions/MutedTopicResponseArray.js'
import { PublicBanTopicMembersRequest } from '../../generated-definitions/PublicBanTopicMembersRequest.js'
import { PublicBanTopicMembersResponse } from '../../generated-definitions/PublicBanTopicMembersResponse.js'
import { PublicUnbanTopicMembersRequest } from '../../generated-definitions/PublicUnbanTopicMembersRequest.js'
import { PublicUnbanTopicMembersResponse } from '../../generated-definitions/PublicUnbanTopicMembersResponse.js'
import { UnmuteUserRequest } from '../../generated-definitions/UnmuteUserRequest.js'

export class Topic$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * get chat muted topics in a namespace.
   */
  getMuted(): Promise<Response<MutedTopicResponseArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/public/namespaces/{namespace}/muted'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      MutedTopicResponseArray,
      'MutedTopicResponseArray'
    )
  }
  /**
   * get chat list of topic in a namespace.
   */
  getTopic(queryParams?: { limit?: number; offset?: number; topicType?: string | null }): Promise<Response<ChatMessageResponseArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/chat/public/namespaces/{namespace}/topic'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ChatMessageResponseArray,
      'ChatMessageResponseArray'
    )
  }
  /**
   * Mute user.
   */
  updateMute_ByTopic(topic: string, data: MuteUserRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/public/namespaces/{namespace}/topic/{topic}/mute'.replace('{namespace}', this.namespace).replace('{topic}', topic)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * get chat history in a namespace.
   */
  getChats_ByTopic(
    topic: string,
    queryParams?: { limit?: number; order?: string | null; startCreatedAt?: number }
  ): Promise<Response<ChatMessageResponseArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/chat/public/namespaces/{namespace}/topic/{topic}/chats'.replace('{namespace}', this.namespace).replace('{topic}', topic)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ChatMessageResponseArray,
      'ChatMessageResponseArray'
    )
  }
  /**
   * Unmute user.
   */
  updateUnmute_ByTopic(topic: string, data: UnmuteUserRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/public/namespaces/{namespace}/topic/{topic}/unmute'.replace('{namespace}', this.namespace).replace('{topic}', topic)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Ban topic members in a group topic.
   */
  updateBanMember_ByTopic(topic: string, data: PublicBanTopicMembersRequest): Promise<Response<PublicBanTopicMembersResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/public/namespaces/{namespace}/topic/{topic}/ban-members'
      .replace('{namespace}', this.namespace)
      .replace('{topic}', topic)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PublicBanTopicMembersResponse,
      'PublicBanTopicMembersResponse'
    )
  }
  /**
   * Unban topic members in a group topic.
   */
  updateUnbanMember_ByTopic(topic: string, data: PublicUnbanTopicMembersRequest): Promise<Response<PublicUnbanTopicMembersResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/public/namespaces/{namespace}/topic/{topic}/unban-members'
      .replace('{namespace}', this.namespace)
      .replace('{topic}', topic)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PublicUnbanTopicMembersResponse,
      'PublicUnbanTopicMembersResponse'
    )
  }
  /**
   * Delete chat.
   */
  deleteChat_ByTopic_ByChatId(topic: string, chatId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/public/namespaces/{namespace}/topic/{topic}/chats/{chatId}'
      .replace('{namespace}', this.namespace)
      .replace('{topic}', topic)
      .replace('{chatId}', chatId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
