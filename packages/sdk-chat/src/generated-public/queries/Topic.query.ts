/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { TopicApi } from '../TopicApi.js'

import { ChatMessageResponseArray } from '../../generated-definitions/ChatMessageResponseArray.js'
import { MuteUserRequest } from '../../generated-definitions/MuteUserRequest.js'
import { MutedTopicResponseArray } from '../../generated-definitions/MutedTopicResponseArray.js'
import { PublicBanTopicMembersRequest } from '../../generated-definitions/PublicBanTopicMembersRequest.js'
import { PublicBanTopicMembersResponse } from '../../generated-definitions/PublicBanTopicMembersResponse.js'
import { PublicUnbanTopicMembersRequest } from '../../generated-definitions/PublicUnbanTopicMembersRequest.js'
import { PublicUnbanTopicMembersResponse } from '../../generated-definitions/PublicUnbanTopicMembersResponse.js'
import { UnmuteUserRequest } from '../../generated-definitions/UnmuteUserRequest.js'

export enum Key_Topic {
  Muted = 'Chat.Topic.Muted',
  Topic = 'Chat.Topic.Topic',
  Mute_ByTopic = 'Chat.Topic.Mute_ByTopic',
  Chats_ByTopic = 'Chat.Topic.Chats_ByTopic',
  Unmute_ByTopic = 'Chat.Topic.Unmute_ByTopic',
  BanMember_ByTopic = 'Chat.Topic.BanMember_ByTopic',
  UnbanMember_ByTopic = 'Chat.Topic.UnbanMember_ByTopic',
  Chat_ByTopic_ByChatId = 'Chat.Topic.Chat_ByTopic_ByChatId'
}

/**
 * get chat muted topics in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Topic.Muted, input]
 * }
 * ```
 */
export const useTopicApi_GetMuted = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<MutedTopicResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MutedTopicResponseArray>) => void
): UseQueryResult<MutedTopicResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTopicApi_GetMuted>[1]) => async () => {
    const response = await TopicApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getMuted()
    callback && callback(response)
    return response.data
  }

  return useQuery<MutedTopicResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Topic.Muted, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * get chat list of topic in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Topic.Topic, input]
 * }
 * ```
 */
export const useTopicApi_GetTopic = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number; topicType?: string | null } },
  options?: Omit<UseQueryOptions<ChatMessageResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ChatMessageResponseArray>) => void
): UseQueryResult<ChatMessageResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTopicApi_GetTopic>[1]) => async () => {
    const response = await TopicApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTopic(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ChatMessageResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Topic.Topic, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Mute user.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Topic.Mute_ByTopic, input]
 * }
 * ```
 */
export const useTopicApi_UpdateMute_ByTopicMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { topic: string; data: MuteUserRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { topic: string; data: MuteUserRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { topic: string; data: MuteUserRequest }) => {
    const response = await TopicApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateMute_ByTopic(
      input.topic,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Topic.Mute_ByTopic],
    mutationFn,
    ...options
  })
}

/**
 * get chat history in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Topic.Chats_ByTopic, input]
 * }
 * ```
 */
export const useTopicApi_GetChats_ByTopic = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { topic: string; queryParams?: { limit?: number; order?: string | null; startCreatedAt?: number } },
  options?: Omit<UseQueryOptions<ChatMessageResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ChatMessageResponseArray>) => void
): UseQueryResult<ChatMessageResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTopicApi_GetChats_ByTopic>[1]) => async () => {
    const response = await TopicApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getChats_ByTopic(
      input.topic,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ChatMessageResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Topic.Chats_ByTopic, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Unmute user.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Topic.Unmute_ByTopic, input]
 * }
 * ```
 */
export const useTopicApi_UpdateUnmute_ByTopicMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { topic: string; data: UnmuteUserRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { topic: string; data: UnmuteUserRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { topic: string; data: UnmuteUserRequest }) => {
    const response = await TopicApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateUnmute_ByTopic(
      input.topic,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Topic.Unmute_ByTopic],
    mutationFn,
    ...options
  })
}

/**
 * Ban topic members in a group topic.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Topic.BanMember_ByTopic, input]
 * }
 * ```
 */
export const useTopicApi_UpdateBanMember_ByTopicMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PublicBanTopicMembersResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { topic: string; data: PublicBanTopicMembersRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: PublicBanTopicMembersResponse) => void
): UseMutationResult<
  PublicBanTopicMembersResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { topic: string; data: PublicBanTopicMembersRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { topic: string; data: PublicBanTopicMembersRequest }) => {
    const response = await TopicApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateBanMember_ByTopic(
      input.topic,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Topic.BanMember_ByTopic],
    mutationFn,
    ...options
  })
}

/**
 * Unban topic members in a group topic.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Topic.UnbanMember_ByTopic, input]
 * }
 * ```
 */
export const useTopicApi_UpdateUnbanMember_ByTopicMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PublicUnbanTopicMembersResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { topic: string; data: PublicUnbanTopicMembersRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: PublicUnbanTopicMembersResponse) => void
): UseMutationResult<
  PublicUnbanTopicMembersResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { topic: string; data: PublicUnbanTopicMembersRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { topic: string; data: PublicUnbanTopicMembersRequest }) => {
    const response = await TopicApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateUnbanMember_ByTopic(
      input.topic,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Topic.UnbanMember_ByTopic],
    mutationFn,
    ...options
  })
}

/**
 * Delete chat.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Topic.Chat_ByTopic_ByChatId, input]
 * }
 * ```
 */
export const useTopicApi_DeleteChat_ByTopic_ByChatIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { topic: string; chatId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { topic: string; chatId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { topic: string; chatId: string }) => {
    const response = await TopicApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteChat_ByTopic_ByChatId(
      input.topic,
      input.chatId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Topic.Chat_ByTopic_ByChatId],
    mutationFn,
    ...options
  })
}
