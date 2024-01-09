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
import { ChatMessageResponseArray } from '../definitions/ChatMessageResponseArray.js'
import { MuteUserRequest } from '../definitions/MuteUserRequest.js'
import { MutedTopicResponseArray } from '../definitions/MutedTopicResponseArray.js'
import { PublicBanTopicMembersRequest } from '../definitions/PublicBanTopicMembersRequest.js'
import { PublicBanTopicMembersResponse } from '../definitions/PublicBanTopicMembersResponse.js'
import { PublicUnbanTopicMembersRequest } from '../definitions/PublicUnbanTopicMembersRequest.js'
import { PublicUnbanTopicMembersResponse } from '../definitions/PublicUnbanTopicMembersResponse.js'
import { UnmuteUserRequest } from '../definitions/UnmuteUserRequest.js'

export class Topic$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * get chat muted topics in a namespace.
   */
  getMuted(): Promise<IResponseWithSync<MutedTopicResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/public/namespaces/{namespace}/muted'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, MutedTopicResponseArray, 'MutedTopicResponseArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * get chat list of topic in a namespace.
   */
  getTopic(queryParams?: {
    limit?: number
    offset?: number
    topicType?: string | null
  }): Promise<IResponseWithSync<ChatMessageResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/chat/public/namespaces/{namespace}/topic'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ChatMessageResponseArray, 'ChatMessageResponseArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Mute user.
   */
  updateMute_ByTopic(topic: string, data: MuteUserRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/public/namespaces/{namespace}/topic/{topic}/mute'.replace('{namespace}', this.namespace).replace('{topic}', topic)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * get chat history in a namespace.
   */
  getChats_ByTopic(
    topic: string,
    queryParams?: { limit?: number; order?: string | null; startCreatedAt?: number }
  ): Promise<IResponseWithSync<ChatMessageResponseArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/chat/public/namespaces/{namespace}/topic/{topic}/chats'.replace('{namespace}', this.namespace).replace('{topic}', topic)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ChatMessageResponseArray, 'ChatMessageResponseArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Unmute user.
   */
  updateUnmute_ByTopic(topic: string, data: UnmuteUserRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/public/namespaces/{namespace}/topic/{topic}/unmute'.replace('{namespace}', this.namespace).replace('{topic}', topic)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Ban topic members in a group topic.
   */
  createBanMember_ByTopic(topic: string, data: PublicBanTopicMembersRequest): Promise<IResponse<PublicBanTopicMembersResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/public/namespaces/{namespace}/topic/{topic}/ban-members'
      .replace('{namespace}', this.namespace)
      .replace('{topic}', topic)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, PublicBanTopicMembersResponse, 'PublicBanTopicMembersResponse')
  }

  /**
   * Unban topic members in a group topic.
   */
  createUnbanMember_ByTopic(topic: string, data: PublicUnbanTopicMembersRequest): Promise<IResponse<PublicUnbanTopicMembersResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/public/namespaces/{namespace}/topic/{topic}/unban-members'
      .replace('{namespace}', this.namespace)
      .replace('{topic}', topic)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, PublicUnbanTopicMembersResponse, 'PublicUnbanTopicMembersResponse')
  }

  /**
   * Delete chat.
   */
  deleteChat_ByTopic_ByChatId(topic: string, chatId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/public/namespaces/{namespace}/topic/{topic}/chats/{chatId}'
      .replace('{namespace}', this.namespace)
      .replace('{topic}', topic)
      .replace('{chatId}', chatId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
