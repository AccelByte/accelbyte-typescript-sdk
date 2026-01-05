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
import { TopicAdminApi } from '../TopicAdminApi.js'

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

export enum Key_TopicAdmin {
  Chats = 'Chat.TopicAdmin.Chats',
  Topic = 'Chat.TopicAdmin.Topic',
  Topics = 'Chat.TopicAdmin.Topics',
  TopicLog = 'Chat.TopicAdmin.TopicLog',
  ChatFilter = 'Chat.TopicAdmin.ChatFilter',
  Topic_ByTopic = 'Chat.TopicAdmin.Topic_ByTopic',
  TopicChannel = 'Chat.TopicAdmin.TopicChannel',
  NamespaceTopic = 'Chat.TopicAdmin.NamespaceTopic',
  Chats_ByTopic = 'Chat.TopicAdmin.Chats_ByTopic',
  Chat_ByTopic = 'Chat.TopicAdmin.Chat_ByTopic',
  Shards_ByTopic = 'Chat.TopicAdmin.Shards_ByTopic',
  Channel_ByTopic = 'Chat.TopicAdmin.Channel_ByTopic',
  Members_ByTopic = 'Chat.TopicAdmin.Members_ByTopic',
  TopicChannelSummary = 'Chat.TopicAdmin.TopicChannelSummary',
  Topics_ByUserId = 'Chat.TopicAdmin.Topics_ByUserId',
  BanMember_ByTopic = 'Chat.TopicAdmin.BanMember_ByTopic',
  UnbanMember_ByTopic = 'Chat.TopicAdmin.UnbanMember_ByTopic',
  User_ByTopic_ByUserId = 'Chat.TopicAdmin.User_ByTopic_ByUserId',
  Chat_ByTopic_ByChatId = 'Chat.TopicAdmin.Chat_ByTopic_ByChatId'
}

/**
 * Get chat history in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TopicAdmin.Chats, input]
 * }
 * ```
 */
export const useTopicAdminApi_GetChats = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
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
    }
  },
  options?: Omit<UseQueryOptions<ChatMessageWithPaginationResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ChatMessageWithPaginationResponse>) => void
): UseQueryResult<ChatMessageWithPaginationResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTopicAdminApi_GetChats>[1]) => async () => {
    const response = await TopicAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getChats(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ChatMessageWithPaginationResponse, AxiosError<ApiError>>({
    queryKey: [Key_TopicAdmin.Chats, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get chat list of topic in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TopicAdmin.Topic, input]
 * }
 * ```
 */
export const useTopicAdminApi_GetTopic = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number; topicType?: string | null } },
  options?: Omit<UseQueryOptions<TopicResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TopicResponseArray>) => void
): UseQueryResult<TopicResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTopicAdminApi_GetTopic>[1]) => async () => {
    const response = await TopicAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTopic(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<TopicResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_TopicAdmin.Topic, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create new group topic in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TopicAdmin.Topic, input]
 * }
 * ```
 */
export const useTopicAdminApi_CreateTopicMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<CreateTopicResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTopicParams }>,
    'mutationKey'
  >,
  callback?: (data: CreateTopicResponse) => void
): UseMutationResult<CreateTopicResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTopicParams }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateTopicParams }) => {
    const response = await TopicAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createTopic(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TopicAdmin.Topic],
    mutationFn,
    ...options
  })
}

/**
 * Get topics in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TopicAdmin.Topics, input]
 * }
 * ```
 */
export const useTopicAdminApi_GetTopics = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      includeMembers?: boolean | null
      includePastMembers?: boolean | null
      includePastTopics?: boolean | null
      limit?: number
      offset?: number
      topic?: string[]
      topicSubType?: 'CLAN' | 'NAMESPACE' | 'NORMAL' | 'PARTY' | 'SESSION'
      topicType?: 'GROUP' | 'PERSONAL'
      userId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<TopicInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TopicInfoArray>) => void
): UseQueryResult<TopicInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTopicAdminApi_GetTopics>[1]) => async () => {
    const response = await TopicAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTopics(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<TopicInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_TopicAdmin.Topics, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get chat log of topic in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TopicAdmin.TopicLog, input]
 * }
 * ```
 */
export const useTopicAdminApi_GetTopicLog = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      endCreatedAt?: number
      limit?: number
      offset?: number
      senderUserId?: string | null
      startCreatedAt?: number
      topicId?: string | null
      topicIds?: string[]
      userId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<TopicLogWithPaginationResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TopicLogWithPaginationResponse>) => void
): UseQueryResult<TopicLogWithPaginationResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTopicAdminApi_GetTopicLog>[1]) => async () => {
    const response = await TopicAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTopicLog(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<TopicLogWithPaginationResponse, AxiosError<ApiError>>({
    queryKey: [Key_TopicAdmin.TopicLog, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * For testing purpose, doesn&#39;t send any message to the topic. Always do filter regardless of enableProfanityFilter configuration.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TopicAdmin.ChatFilter, input]
 * }
 * ```
 */
export const useTopicAdminApi_FetchChatFilter = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { data: MessageRequest; queryParams?: { detail?: boolean | null } },
  options?: Omit<UseQueryOptions<MessageResultWithAttributes, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MessageResultWithAttributes>) => void
): UseQueryResult<MessageResultWithAttributes, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTopicAdminApi_FetchChatFilter>[1]) => async () => {
    const response = await TopicAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).fetchChatFilter(
      input.data,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<MessageResultWithAttributes, AxiosError<ApiError>>({
    queryKey: [Key_TopicAdmin.ChatFilter, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Delete topic in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TopicAdmin.Topic_ByTopic, input]
 * }
 * ```
 */
export const useTopicAdminApi_DeleteTopic_ByTopicMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<ActionDeleteTopicResult, AxiosError<ApiError>, SdkSetConfigParam & { topic: string }>, 'mutationKey'>,
  callback?: (data: ActionDeleteTopicResult) => void
): UseMutationResult<ActionDeleteTopicResult, AxiosError<ApiError>, SdkSetConfigParam & { topic: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { topic: string }) => {
    const response = await TopicAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteTopic_ByTopic(
      input.topic
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TopicAdmin.Topic_ByTopic],
    mutationFn,
    ...options
  })
}

/**
 * Update group topic in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TopicAdmin.Topic_ByTopic, input]
 * }
 * ```
 */
export const useTopicAdminApi_UpdateTopic_ByTopicMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<CreateTopicResponse, AxiosError<ApiError>, SdkSetConfigParam & { topic: string; data: UpdateTopicParams }>,
    'mutationKey'
  >,
  callback?: (data: CreateTopicResponse) => void
): UseMutationResult<CreateTopicResponse, AxiosError<ApiError>, SdkSetConfigParam & { topic: string; data: UpdateTopicParams }> => {
  const mutationFn = async (input: SdkSetConfigParam & { topic: string; data: UpdateTopicParams }) => {
    const response = await TopicAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateTopic_ByTopic(
      input.topic,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TopicAdmin.Topic_ByTopic],
    mutationFn,
    ...options
  })
}

/**
 * Get channel chat list of topic in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TopicAdmin.TopicChannel, input]
 * }
 * ```
 */
export const useTopicAdminApi_GetTopicChannel = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number; topicName?: string | null } },
  options?: Omit<UseQueryOptions<ChannelTopicWithPaginationResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ChannelTopicWithPaginationResponse>) => void
): UseQueryResult<ChannelTopicWithPaginationResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTopicAdminApi_GetTopicChannel>[1]) => async () => {
    const response = await TopicAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTopicChannel(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ChannelTopicWithPaginationResponse, AxiosError<ApiError>>({
    queryKey: [Key_TopicAdmin.TopicChannel, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create new namespace group topic in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TopicAdmin.NamespaceTopic, input]
 * }
 * ```
 */
export const useTopicAdminApi_CreateNamespaceTopicMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<CreateTopicResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateNamespaceTopicParams }>,
    'mutationKey'
  >,
  callback?: (data: CreateTopicResponse) => void
): UseMutationResult<CreateTopicResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateNamespaceTopicParams }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateNamespaceTopicParams }) => {
    const response = await TopicAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createNamespaceTopic(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TopicAdmin.NamespaceTopic],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Get chat history in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TopicAdmin.Chats_ByTopic, input]
 * }
 * ```
 */
export const useTopicAdminApi_GetChats_ByTopic = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    topic: string
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
  },
  options?: Omit<UseQueryOptions<ChatMessageWithPaginationResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ChatMessageWithPaginationResponse>) => void
): UseQueryResult<ChatMessageWithPaginationResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTopicAdminApi_GetChats_ByTopic>[1]) => async () => {
    const response = await TopicAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getChats_ByTopic(
      input.topic,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ChatMessageWithPaginationResponse, AxiosError<ApiError>>({
    queryKey: [Key_TopicAdmin.Chats_ByTopic, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Send message to chat topic as system.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TopicAdmin.Chat_ByTopic, input]
 * }
 * ```
 */
export const useTopicAdminApi_UpdateChat_ByTopicMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ChatMessageResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { topic: string; data: SendChatParams }>,
    'mutationKey'
  >,
  callback?: (data: ChatMessageResponseArray) => void
): UseMutationResult<ChatMessageResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { topic: string; data: SendChatParams }> => {
  const mutationFn = async (input: SdkSetConfigParam & { topic: string; data: SendChatParams }) => {
    const response = await TopicAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateChat_ByTopic(
      input.topic,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TopicAdmin.Chat_ByTopic],
    mutationFn,
    ...options
  })
}

/**
 * Get shard list from topic.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TopicAdmin.Shards_ByTopic, input]
 * }
 * ```
 */
export const useTopicAdminApi_GetShards_ByTopic = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { topic: string },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTopicAdminApi_GetShards_ByTopic>[1]) => async () => {
    const response = await TopicAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getShards_ByTopic(
      input.topic
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_TopicAdmin.Shards_ByTopic, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get chat list of topic in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TopicAdmin.Channel_ByTopic, input]
 * }
 * ```
 */
export const useTopicAdminApi_GetChannel_ByTopic = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { topic: string },
  options?: Omit<UseQueryOptions<ChannelTopicResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ChannelTopicResponse>) => void
): UseQueryResult<ChannelTopicResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTopicAdminApi_GetChannel_ByTopic>[1]) => async () => {
    const response = await TopicAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getChannel_ByTopic(
      input.topic
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ChannelTopicResponse, AxiosError<ApiError>>({
    queryKey: [Key_TopicAdmin.Channel_ByTopic, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get topic members.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TopicAdmin.Members_ByTopic, input]
 * }
 * ```
 */
export const useTopicAdminApi_GetMembers_ByTopic = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    topic: string
    queryParams?: { isBanned?: boolean | null; isModerator?: boolean | null; limit?: number; offset?: number; shardId?: string | null }
  },
  options?: Omit<UseQueryOptions<TopicMemberWithPaginationResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TopicMemberWithPaginationResponse>) => void
): UseQueryResult<TopicMemberWithPaginationResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTopicAdminApi_GetMembers_ByTopic>[1]) => async () => {
    const response = await TopicAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getMembers_ByTopic(
      input.topic,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<TopicMemberWithPaginationResponse, AxiosError<ApiError>>({
    queryKey: [Key_TopicAdmin.Members_ByTopic, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get chat list of topic in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TopicAdmin.TopicChannelSummary, input]
 * }
 * ```
 */
export const useTopicAdminApi_GetTopicChannelSummary = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ChannelTopicSummaryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ChannelTopicSummaryResponse>) => void
): UseQueryResult<ChannelTopicSummaryResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTopicAdminApi_GetTopicChannelSummary>[1]) => async () => {
    const response = await TopicAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTopicChannelSummary()
    callback && callback(response)
    return response.data
  }

  return useQuery<ChannelTopicSummaryResponse, AxiosError<ApiError>>({
    queryKey: [Key_TopicAdmin.TopicChannelSummary, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get user&#39;s topics in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TopicAdmin.Topics_ByUserId, input]
 * }
 * ```
 */
export const useTopicAdminApi_GetTopics_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: {
      includePastTopics?: boolean | null
      limit?: number
      offset?: number
      topicSubType?: 'CLAN' | 'NAMESPACE' | 'NORMAL' | 'PARTY' | 'SESSION'
      topicType?: 'GROUP' | 'PERSONAL'
    }
  },
  options?: Omit<UseQueryOptions<TopicLogWithPaginationResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TopicLogWithPaginationResponse>) => void
): UseQueryResult<TopicLogWithPaginationResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useTopicAdminApi_GetTopics_ByUserId>[1]) => async () => {
    const response = await TopicAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getTopics_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<TopicLogWithPaginationResponse, AxiosError<ApiError>>({
    queryKey: [Key_TopicAdmin.Topics_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Ban users in some topic. banned user not assigned to shard for channel topic, and cannot send and query chat.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TopicAdmin.BanMember_ByTopic, input]
 * }
 * ```
 */
export const useTopicAdminApi_UpdateBanMember_ByTopicMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BanTopicMemberResult, AxiosError<ApiError>, SdkSetConfigParam & { topic: string; data: BanTopicMemberParam }>,
    'mutationKey'
  >,
  callback?: (data: BanTopicMemberResult) => void
): UseMutationResult<BanTopicMemberResult, AxiosError<ApiError>, SdkSetConfigParam & { topic: string; data: BanTopicMemberParam }> => {
  const mutationFn = async (input: SdkSetConfigParam & { topic: string; data: BanTopicMemberParam }) => {
    const response = await TopicAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateBanMember_ByTopic(
      input.topic,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TopicAdmin.BanMember_ByTopic],
    mutationFn,
    ...options
  })
}

/**
 * Unban users in some topic.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TopicAdmin.UnbanMember_ByTopic, input]
 * }
 * ```
 */
export const useTopicAdminApi_UpdateUnbanMember_ByTopicMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UnbanTopicMemberResult, AxiosError<ApiError>, SdkSetConfigParam & { topic: string; data: UnbanTopicMemberParam }>,
    'mutationKey'
  >,
  callback?: (data: UnbanTopicMemberResult) => void
): UseMutationResult<UnbanTopicMemberResult, AxiosError<ApiError>, SdkSetConfigParam & { topic: string; data: UnbanTopicMemberParam }> => {
  const mutationFn = async (input: SdkSetConfigParam & { topic: string; data: UnbanTopicMemberParam }) => {
    const response = await TopicAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateUnbanMember_ByTopic(
      input.topic,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TopicAdmin.UnbanMember_ByTopic],
    mutationFn,
    ...options
  })
}

/**
 * Remove member from topic in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TopicAdmin.User_ByTopic_ByUserId, input]
 * }
 * ```
 */
export const useTopicAdminApi_DeleteUser_ByTopic_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ActionAddUserToTopicResult, AxiosError<ApiError>, SdkSetConfigParam & { topic: string; userId: string }>,
    'mutationKey'
  >,
  callback?: (data: ActionAddUserToTopicResult) => void
): UseMutationResult<ActionAddUserToTopicResult, AxiosError<ApiError>, SdkSetConfigParam & { topic: string; userId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { topic: string; userId: string }) => {
    const response = await TopicAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteUser_ByTopic_ByUserId(
      input.topic,
      input.userId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TopicAdmin.User_ByTopic_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Add new member for topic in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TopicAdmin.User_ByTopic_ByUserId, input]
 * }
 * ```
 */
export const useTopicAdminApi_UpdateUser_ByTopic_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      ActionAddUserToTopicResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { topic: string; userId: string; data: AddMemberParams }
    >,
    'mutationKey'
  >,
  callback?: (data: ActionAddUserToTopicResult) => void
): UseMutationResult<
  ActionAddUserToTopicResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { topic: string; userId: string; data: AddMemberParams }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { topic: string; userId: string; data: AddMemberParams }) => {
    const response = await TopicAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateUser_ByTopic_ByUserId(
      input.topic,
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TopicAdmin.User_ByTopic_ByUserId],
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
 *    queryKey: [Key_TopicAdmin.Chat_ByTopic_ByChatId, input]
 * }
 * ```
 */
export const useTopicAdminApi_DeleteChat_ByTopic_ByChatIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { topic: string; chatId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { topic: string; chatId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { topic: string; chatId: string }) => {
    const response = await TopicAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteChat_ByTopic_ByChatId(
      input.topic,
      input.chatId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_TopicAdmin.Chat_ByTopic_ByChatId],
    mutationFn,
    ...options
  })
}
