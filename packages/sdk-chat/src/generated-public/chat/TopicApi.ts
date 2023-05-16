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
import { ChatMessageResponseArray } from './definitions/ChatMessageResponseArray.js'
import { MuteUserRequest } from './definitions/MuteUserRequest.js'
import { MutedTopicResponseArray } from './definitions/MutedTopicResponseArray.js'
import { PublicBanTopicMembersRequest } from './definitions/PublicBanTopicMembersRequest.js'
import { PublicBanTopicMembersResponse } from './definitions/PublicBanTopicMembersResponse.js'
import { PublicUnbanTopicMembersRequest } from './definitions/PublicUnbanTopicMembersRequest.js'
import { PublicUnbanTopicMembersResponse } from './definitions/PublicUnbanTopicMembersResponse.js'
import { Topic$ } from './endpoints/Topic$.js'
import { UnmuteUserRequest } from './definitions/UnmuteUserRequest.js'

export function TopicApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * get chat muted topics in a namespace.
   */
  async function getMuted(): Promise<MutedTopicResponseArray> {
    const $ = new Topic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getMuted()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * get chat list of topic in a namespace.
   */
  async function getTopic(queryParams?: { topicType?: string | null; offset?: number; limit?: number }): Promise<ChatMessageResponseArray> {
    const $ = new Topic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getTopic(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required group permission : <code>NAMESPACE:{namespace}:CHAT:TOPIC [DELETE]</code> with scope <code>social</code> <br>Mute user.
   */
  async function updateMute_ByTopic(topic: string, data: MuteUserRequest): Promise<unknown> {
    const $ = new Topic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateMute_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * get chat history in a namespace.
   */
  async function getChats_ByTopic(
    topic: string,
    queryParams?: { startCreatedAt?: number; limit?: number; order?: string | null }
  ): Promise<ChatMessageResponseArray> {
    const $ = new Topic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getChats_ByTopic(topic, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required group permission : <code>NAMESPACE:{namespace}:CHAT:TOPIC [DELETE]</code> with scope <code>social</code> <br>Unmute user.
   */
  async function updateUnmute_ByTopic(topic: string, data: UnmuteUserRequest): Promise<unknown> {
    const $ = new Topic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateUnmute_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:CHAT:TOPIC [UPDATE]</code> with scope <code>social</code> <br>ban topic members in a group topic.
   */
  async function createBanMember_ByTopic(topic: string, data: PublicBanTopicMembersRequest): Promise<PublicBanTopicMembersResponse> {
    const $ = new Topic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createBanMember_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission : <code>NAMESPACE:{namespace}:CHAT:TOPIC [UPDATE]</code> with scope <code>social</code> <br>unban topic members in a group topic.
   */
  async function createUnbanMember_ByTopic(topic: string, data: PublicUnbanTopicMembersRequest): Promise<PublicUnbanTopicMembersResponse> {
    const $ = new Topic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUnbanMember_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required group permission : <code>NAMESPACE:{namespace}:CHAT:TOPIC [DELETE]</code> with scope <code>social</code> <br>Delete chat.
   */
  async function deleteChat_ByTopic_ByChatId(topic: string, chatId: string): Promise<unknown> {
    const $ = new Topic$(Network.create(requestConfig), namespace, cache)
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
