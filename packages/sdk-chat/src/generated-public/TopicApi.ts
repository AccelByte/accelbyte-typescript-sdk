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
import { ChatMessageResponseArray } from '../generated-definitions/ChatMessageResponseArray.js'
import { MuteUserRequest } from '../generated-definitions/MuteUserRequest.js'
import { MutedTopicResponseArray } from '../generated-definitions/MutedTopicResponseArray.js'
import { PublicBanTopicMembersRequest } from '../generated-definitions/PublicBanTopicMembersRequest.js'
import { PublicBanTopicMembersResponse } from '../generated-definitions/PublicBanTopicMembersResponse.js'
import { PublicUnbanTopicMembersRequest } from '../generated-definitions/PublicUnbanTopicMembersRequest.js'
import { PublicUnbanTopicMembersResponse } from '../generated-definitions/PublicUnbanTopicMembersResponse.js'
import { Topic$ } from './endpoints/Topic$.js'
import { UnmuteUserRequest } from '../generated-definitions/UnmuteUserRequest.js'

export function TopicApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * get chat muted topics in a namespace.
   */
  async function getMuted(): Promise<MutedTopicResponseArray> {
    const $ = new Topic$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getMuted()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * get chat list of topic in a namespace.
   */
  async function getTopic(queryParams?: { limit?: number; offset?: number; topicType?: string | null }): Promise<ChatMessageResponseArray> {
    const $ = new Topic$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getTopic(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Mute user.
   */
  async function updateMute_ByTopic(topic: string, data: MuteUserRequest): Promise<unknown> {
    const $ = new Topic$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateMute_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * get chat history in a namespace.
   */
  async function getChats_ByTopic(
    topic: string,
    queryParams?: { limit?: number; order?: string | null; startCreatedAt?: number }
  ): Promise<ChatMessageResponseArray> {
    const $ = new Topic$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getChats_ByTopic(topic, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Unmute user.
   */
  async function updateUnmute_ByTopic(topic: string, data: UnmuteUserRequest): Promise<unknown> {
    const $ = new Topic$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateUnmute_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Ban topic members in a group topic.
   */
  async function createBanMember_ByTopic(topic: string, data: PublicBanTopicMembersRequest): Promise<PublicBanTopicMembersResponse> {
    const $ = new Topic$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createBanMember_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Unban topic members in a group topic.
   */
  async function createUnbanMember_ByTopic(topic: string, data: PublicUnbanTopicMembersRequest): Promise<PublicUnbanTopicMembersResponse> {
    const $ = new Topic$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createUnbanMember_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete chat.
   */
  async function deleteChat_ByTopic_ByChatId(topic: string, chatId: string): Promise<unknown> {
    const $ = new Topic$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteChat_ByTopic_ByChatId(topic, chatId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getMuted,
    getTopic,
    updateMute_ByTopic,
    getChats_ByTopic,
    updateUnmute_ByTopic,
    createBanMember_ByTopic,
    createUnbanMember_ByTopic,
    deleteChat_ByTopic_ByChatId
  }
}
