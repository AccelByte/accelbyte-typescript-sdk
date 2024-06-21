/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiError } from '@accelbyte/sdk'
import { AxiosError } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
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
  Chats = 'TopicAdmin.Chats',
  Topic = 'TopicAdmin.Topic',
  Topics = 'TopicAdmin.Topics',
  TopicLog = 'TopicAdmin.TopicLog',
  ChatFilter = 'TopicAdmin.ChatFilter',
  Topic_ByTopic = 'TopicAdmin.Topic_ByTopic',
  TopicChannel = 'TopicAdmin.TopicChannel',
  NamespaceTopic = 'TopicAdmin.NamespaceTopic',
  Chat_ByTopic = 'TopicAdmin.Chat_ByTopic',
  Shards_ByTopic = 'TopicAdmin.Shards_ByTopic',
  Channel_ByTopic = 'TopicAdmin.Channel_ByTopic',
  Members_ByTopic = 'TopicAdmin.Members_ByTopic',
  TopicChannelSummary = 'TopicAdmin.TopicChannelSummary',
  Topics_ByUserId = 'TopicAdmin.Topics_ByUserId',
  BanMember_ByTopic = 'TopicAdmin.BanMember_ByTopic',
  UnbanMember_ByTopic = 'TopicAdmin.UnbanMember_ByTopic',
  User_ByTopic_ByUserId = 'TopicAdmin.User_ByTopic_ByUserId',
  Chat_ByTopic_ByChatId = 'TopicAdmin.Chat_ByTopic_ByChatId'
}

export const useAdmChats = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
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
    }
  },
  options?: Omit<UseQueryOptions<ChatMessageWithPaginationResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ChatMessageWithPaginationResponse) => void
): UseQueryResult<ChatMessageWithPaginationResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmChats>[1]) => async () => {
    const data = await TopicAdminApi(sdk, { namespace: input.namespace }).getChats(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ChatMessageWithPaginationResponse, AxiosError<ApiError>>({
    queryKey: [Key_TopicAdmin.Chats, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmTopic = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number; topicType?: string | null } },
  options?: Omit<UseQueryOptions<TopicResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: TopicResponseArray) => void
): UseQueryResult<TopicResponseArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmTopic>[1]) => async () => {
    const data = await TopicAdminApi(sdk, { namespace: input.namespace }).getTopic(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<TopicResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_TopicAdmin.Topic, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateTopicMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<CreateTopicResponse, AxiosError<ApiError>, ApiArgs & { data: CreateTopicParams }>, 'mutationKey'>,
  callback?: (data: CreateTopicResponse) => void
): UseMutationResult<CreateTopicResponse, AxiosError<ApiError>, ApiArgs & { data: CreateTopicParams }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CreateTopicParams }) => {
    const data = await TopicAdminApi(sdk, { namespace: input.namespace, config: input.config }).createTopic(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TopicAdmin.Topic],
    mutationFn,
    ...options
  })
}

export const useAdmTopics = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
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
  callback?: (data: TopicInfoArray) => void
): UseQueryResult<TopicInfoArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmTopics>[1]) => async () => {
    const data = await TopicAdminApi(sdk, { namespace: input.namespace }).getTopics(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<TopicInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_TopicAdmin.Topics, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmTopicLog = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
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
  callback?: (data: TopicLogWithPaginationResponse) => void
): UseQueryResult<TopicLogWithPaginationResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmTopicLog>[1]) => async () => {
    const data = await TopicAdminApi(sdk, { namespace: input.namespace }).getTopicLog(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<TopicLogWithPaginationResponse, AxiosError<ApiError>>({
    queryKey: [Key_TopicAdmin.TopicLog, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateChatFilterMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      MessageResultWithAttributes,
      AxiosError<ApiError>,
      ApiArgs & { data: MessageRequest; queryParams?: { detail?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: MessageResultWithAttributes) => void
): UseMutationResult<
  MessageResultWithAttributes,
  AxiosError<ApiError>,
  ApiArgs & { data: MessageRequest; queryParams?: { detail?: boolean | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { data: MessageRequest; queryParams?: { detail?: boolean | null } }) => {
    const data = await TopicAdminApi(sdk, { namespace: input.namespace, config: input.config }).createChatFilter(
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TopicAdmin.ChatFilter],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteTopic_ByTopicMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<ActionDeleteTopicResult, AxiosError<ApiError>, ApiArgs & { topic: string }>, 'mutationKey'>,
  callback?: (data: ActionDeleteTopicResult) => void
): UseMutationResult<ActionDeleteTopicResult, AxiosError<ApiError>, ApiArgs & { topic: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { topic: string }) => {
    const data = await TopicAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteTopic_ByTopic(input.topic)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TopicAdmin.Topic_ByTopic],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateTopic_ByTopicMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<CreateTopicResponse, AxiosError<ApiError>, ApiArgs & { topic: string; data: UpdateTopicParams }>,
    'mutationKey'
  >,
  callback?: (data: CreateTopicResponse) => void
): UseMutationResult<CreateTopicResponse, AxiosError<ApiError>, ApiArgs & { topic: string; data: UpdateTopicParams }> => {
  //
  const mutationFn = async (input: ApiArgs & { topic: string; data: UpdateTopicParams }) => {
    const data = await TopicAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateTopic_ByTopic(input.topic, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TopicAdmin.Topic_ByTopic],
    mutationFn,
    ...options
  })
}

export const useAdmTopicChannel = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number; topicName?: string | null } },
  options?: Omit<UseQueryOptions<ChannelTopicWithPaginationResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ChannelTopicWithPaginationResponse) => void
): UseQueryResult<ChannelTopicWithPaginationResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmTopicChannel>[1]) => async () => {
    const data = await TopicAdminApi(sdk, { namespace: input.namespace }).getTopicChannel(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ChannelTopicWithPaginationResponse, AxiosError<ApiError>>({
    queryKey: [Key_TopicAdmin.TopicChannel, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateNamespaceTopicMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<CreateTopicResponse, AxiosError<ApiError>, ApiArgs & { data: CreateNamespaceTopicParams }>,
    'mutationKey'
  >,
  callback?: (data: CreateTopicResponse) => void
): UseMutationResult<CreateTopicResponse, AxiosError<ApiError>, ApiArgs & { data: CreateNamespaceTopicParams }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CreateNamespaceTopicParams }) => {
    const data = await TopicAdminApi(sdk, { namespace: input.namespace, config: input.config }).createNamespaceTopic(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TopicAdmin.NamespaceTopic],
    mutationFn,
    ...options
  })
}

export const useAdmCreateChat_ByTopicMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ChatMessageResponseArray, AxiosError<ApiError>, ApiArgs & { topic: string; data: SendChatParams }>,
    'mutationKey'
  >,
  callback?: (data: ChatMessageResponseArray) => void
): UseMutationResult<ChatMessageResponseArray, AxiosError<ApiError>, ApiArgs & { topic: string; data: SendChatParams }> => {
  //
  const mutationFn = async (input: ApiArgs & { topic: string; data: SendChatParams }) => {
    const data = await TopicAdminApi(sdk, { namespace: input.namespace, config: input.config }).createChat_ByTopic(input.topic, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TopicAdmin.Chat_ByTopic],
    mutationFn,
    ...options
  })
}

export const useAdmShards_ByTopic = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { topic: string },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmShards_ByTopic>[1]) => async () => {
    const data = await TopicAdminApi(sdk, { namespace: input.namespace }).getShards_ByTopic(input.topic)
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_TopicAdmin.Shards_ByTopic, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmChannel_ByTopic = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { topic: string },
  options?: Omit<UseQueryOptions<ChannelTopicResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ChannelTopicResponse) => void
): UseQueryResult<ChannelTopicResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmChannel_ByTopic>[1]) => async () => {
    const data = await TopicAdminApi(sdk, { namespace: input.namespace }).getChannel_ByTopic(input.topic)
    callback && callback(data)
    return data
  }

  return useQuery<ChannelTopicResponse, AxiosError<ApiError>>({
    queryKey: [Key_TopicAdmin.Channel_ByTopic, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmMembers_ByTopic = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    topic: string
    queryParams?: { isBanned?: boolean | null; isModerator?: boolean | null; limit?: number; offset?: number; shardId?: string | null }
  },
  options?: Omit<UseQueryOptions<TopicMemberWithPaginationResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: TopicMemberWithPaginationResponse) => void
): UseQueryResult<TopicMemberWithPaginationResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmMembers_ByTopic>[1]) => async () => {
    const data = await TopicAdminApi(sdk, { namespace: input.namespace }).getMembers_ByTopic(input.topic, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<TopicMemberWithPaginationResponse, AxiosError<ApiError>>({
    queryKey: [Key_TopicAdmin.Members_ByTopic, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmTopicChannelSummary = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<ChannelTopicSummaryResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ChannelTopicSummaryResponse) => void
): UseQueryResult<ChannelTopicSummaryResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmTopicChannelSummary>[1]) => async () => {
    const data = await TopicAdminApi(sdk, { namespace: input.namespace }).getTopicChannelSummary()
    callback && callback(data)
    return data
  }

  return useQuery<ChannelTopicSummaryResponse, AxiosError<ApiError>>({
    queryKey: [Key_TopicAdmin.TopicChannelSummary, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmTopics_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
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
  callback?: (data: TopicLogWithPaginationResponse) => void
): UseQueryResult<TopicLogWithPaginationResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmTopics_ByUserId>[1]) => async () => {
    const data = await TopicAdminApi(sdk, { namespace: input.namespace }).getTopics_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<TopicLogWithPaginationResponse, AxiosError<ApiError>>({
    queryKey: [Key_TopicAdmin.Topics_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateBanMember_ByTopicMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BanTopicMemberResult, AxiosError<ApiError>, ApiArgs & { topic: string; data: BanTopicMemberParam }>,
    'mutationKey'
  >,
  callback?: (data: BanTopicMemberResult) => void
): UseMutationResult<BanTopicMemberResult, AxiosError<ApiError>, ApiArgs & { topic: string; data: BanTopicMemberParam }> => {
  //
  const mutationFn = async (input: ApiArgs & { topic: string; data: BanTopicMemberParam }) => {
    const data = await TopicAdminApi(sdk, { namespace: input.namespace, config: input.config }).createBanMember_ByTopic(
      input.topic,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TopicAdmin.BanMember_ByTopic],
    mutationFn,
    ...options
  })
}

export const useAdmCreateUnbanMember_ByTopicMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UnbanTopicMemberResult, AxiosError<ApiError>, ApiArgs & { topic: string; data: UnbanTopicMemberParam }>,
    'mutationKey'
  >,
  callback?: (data: UnbanTopicMemberResult) => void
): UseMutationResult<UnbanTopicMemberResult, AxiosError<ApiError>, ApiArgs & { topic: string; data: UnbanTopicMemberParam }> => {
  //
  const mutationFn = async (input: ApiArgs & { topic: string; data: UnbanTopicMemberParam }) => {
    const data = await TopicAdminApi(sdk, { namespace: input.namespace, config: input.config }).createUnbanMember_ByTopic(
      input.topic,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TopicAdmin.UnbanMember_ByTopic],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteUser_ByTopic_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ActionAddUserToTopicResult, AxiosError<ApiError>, ApiArgs & { topic: string; userId: string }>,
    'mutationKey'
  >,
  callback?: (data: ActionAddUserToTopicResult) => void
): UseMutationResult<ActionAddUserToTopicResult, AxiosError<ApiError>, ApiArgs & { topic: string; userId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { topic: string; userId: string }) => {
    const data = await TopicAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteUser_ByTopic_ByUserId(
      input.topic,
      input.userId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TopicAdmin.User_ByTopic_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateUser_ByTopic_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      ActionAddUserToTopicResult,
      AxiosError<ApiError>,
      ApiArgs & { topic: string; userId: string; data: AddMemberParams }
    >,
    'mutationKey'
  >,
  callback?: (data: ActionAddUserToTopicResult) => void
): UseMutationResult<
  ActionAddUserToTopicResult,
  AxiosError<ApiError>,
  ApiArgs & { topic: string; userId: string; data: AddMemberParams }
> => {
  //
  const mutationFn = async (input: ApiArgs & { topic: string; userId: string; data: AddMemberParams }) => {
    const data = await TopicAdminApi(sdk, { namespace: input.namespace, config: input.config }).createUser_ByTopic_ByUserId(
      input.topic,
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TopicAdmin.User_ByTopic_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteChat_ByTopic_ByChatIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { topic: string; chatId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { topic: string; chatId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { topic: string; chatId: string }) => {
    const data = await TopicAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteChat_ByTopic_ByChatId(
      input.topic,
      input.chatId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TopicAdmin.Chat_ByTopic_ByChatId],
    mutationFn,
    ...options
  })
}
