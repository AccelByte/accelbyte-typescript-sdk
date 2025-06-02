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
import { ChatMessageResponseArray } from '../generated-definitions/ChatMessageResponseArray.js'
import { MuteUserRequest } from '../generated-definitions/MuteUserRequest.js'
import { MutedTopicResponseArray } from '../generated-definitions/MutedTopicResponseArray.js'
import { PublicBanTopicMembersRequest } from '../generated-definitions/PublicBanTopicMembersRequest.js'
import { PublicBanTopicMembersResponse } from '../generated-definitions/PublicBanTopicMembersResponse.js'
import { PublicUnbanTopicMembersRequest } from '../generated-definitions/PublicUnbanTopicMembersRequest.js'
import { PublicUnbanTopicMembersResponse } from '../generated-definitions/PublicUnbanTopicMembersResponse.js'
import { UnmuteUserRequest } from '../generated-definitions/UnmuteUserRequest.js'
import { Topic$ } from './endpoints/Topic$.js'

export function TopicApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getMuted(): Promise<AxiosResponse<MutedTopicResponseArray>> {
    const $ = new Topic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMuted()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getTopic(queryParams?: {
    limit?: number
    offset?: number
    topicType?: string | null
  }): Promise<AxiosResponse<ChatMessageResponseArray>> {
    const $ = new Topic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTopic(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateMute_ByTopic(topic: string, data: MuteUserRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Topic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateMute_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getChats_ByTopic(
    topic: string,
    queryParams?: { limit?: number; order?: string | null; startCreatedAt?: number }
  ): Promise<AxiosResponse<ChatMessageResponseArray>> {
    const $ = new Topic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getChats_ByTopic(topic, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateUnmute_ByTopic(topic: string, data: UnmuteUserRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Topic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUnmute_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateBanMember_ByTopic(
    topic: string,
    data: PublicBanTopicMembersRequest
  ): Promise<AxiosResponse<PublicBanTopicMembersResponse>> {
    const $ = new Topic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateBanMember_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateUnbanMember_ByTopic(
    topic: string,
    data: PublicUnbanTopicMembersRequest
  ): Promise<AxiosResponse<PublicUnbanTopicMembersResponse>> {
    const $ = new Topic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUnbanMember_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteChat_ByTopic_ByChatId(topic: string, chatId: string): Promise<AxiosResponse<unknown>> {
    const $ = new Topic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteChat_ByTopic_ByChatId(topic, chatId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * get chat muted topics in a namespace.
     */
    getMuted,
    /**
     * get chat list of topic in a namespace.
     */
    getTopic,
    /**
     * Mute user.
     */
    updateMute_ByTopic,
    /**
     * get chat history in a namespace.
     */
    getChats_ByTopic,
    /**
     * Unmute user.
     */
    updateUnmute_ByTopic,
    /**
     * Ban topic members in a group topic.
     */
    updateBanMember_ByTopic,
    /**
     * Unban topic members in a group topic.
     */
    updateUnbanMember_ByTopic,
    /**
     * Delete chat.
     */
    deleteChat_ByTopic_ByChatId
  }
}
