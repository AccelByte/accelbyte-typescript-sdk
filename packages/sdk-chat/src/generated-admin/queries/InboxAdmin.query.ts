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
import { InboxAdminApi } from '../InboxAdminApi.js'

import { AddInboxCategoryRequest } from '../../generated-definitions/AddInboxCategoryRequest.js'
import { AddInboxCategoryResponse } from '../../generated-definitions/AddInboxCategoryResponse.js'
import { GetInboxCategoriesResponseItemArray } from '../../generated-definitions/GetInboxCategoriesResponseItemArray.js'
import { GetInboxMessagesResponse } from '../../generated-definitions/GetInboxMessagesResponse.js'
import { GetInboxStatsResponse } from '../../generated-definitions/GetInboxStatsResponse.js'
import { GetInboxUsersResponse } from '../../generated-definitions/GetInboxUsersResponse.js'
import { GetListTopicKafkaResponse } from '../../generated-definitions/GetListTopicKafkaResponse.js'
import { JsonSchemaType } from '../../generated-definitions/JsonSchemaType.js'
import { SaveInboxMessageRequest } from '../../generated-definitions/SaveInboxMessageRequest.js'
import { SaveInboxMessageResponse } from '../../generated-definitions/SaveInboxMessageResponse.js'
import { SendInboxMessageRequest } from '../../generated-definitions/SendInboxMessageRequest.js'
import { SendInboxMessageResponse } from '../../generated-definitions/SendInboxMessageResponse.js'
import { UnsendInboxMessageRequest } from '../../generated-definitions/UnsendInboxMessageRequest.js'
import { UnsendInboxMessageResponse } from '../../generated-definitions/UnsendInboxMessageResponse.js'
import { UpdateInboxCategoryRequest } from '../../generated-definitions/UpdateInboxCategoryRequest.js'
import { UpdateInboxMessageRequest } from '../../generated-definitions/UpdateInboxMessageRequest.js'

export enum Key_InboxAdmin {
  InboxStats = 'Chat.InboxAdmin.InboxStats',
  InboxMessages = 'Chat.InboxAdmin.InboxMessages',
  InboxMessage = 'Chat.InboxAdmin.InboxMessage',
  InboxCategories = 'Chat.InboxAdmin.InboxCategories',
  InboxCategory = 'Chat.InboxAdmin.InboxCategory',
  InboxListTopicKafka = 'Chat.InboxAdmin.InboxListTopicKafka',
  InboxMessage_ByMessageId = 'Chat.InboxAdmin.InboxMessage_ByMessageId',
  InboxCategory_ByCategory = 'Chat.InboxAdmin.InboxCategory_ByCategory',
  UsersInbox_ByInbox = 'Chat.InboxAdmin.UsersInbox_ByInbox',
  UnsendInbox_ByInbox = 'Chat.InboxAdmin.UnsendInbox_ByInbox',
  SendInbox_ByMessageId = 'Chat.InboxAdmin.SendInbox_ByMessageId',
  SchemaJsonInbox_ByCategory = 'Chat.InboxAdmin.SchemaJsonInbox_ByCategory'
}

/**
 * Get inbox stats
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_InboxAdmin.InboxStats, input]
 * }
 * ```
 */
export const useInboxAdminApi_GetInboxStats = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { messageId?: string[] } },
  options?: Omit<UseQueryOptions<GetInboxStatsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetInboxStatsResponse>) => void
): UseQueryResult<GetInboxStatsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useInboxAdminApi_GetInboxStats>[1]) => async () => {
    const response = await InboxAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getInboxStats(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetInboxStatsResponse, AxiosError<ApiError>>({
    queryKey: [Key_InboxAdmin.InboxStats, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get inbox messages
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_InboxAdmin.InboxMessages, input]
 * }
 * ```
 */
export const useInboxAdminApi_GetInboxMessages = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      activeOnly?: boolean | null
      endCreatedAt?: number
      limit?: number
      messageId?: string[]
      offset?: number
      order?: string | null
      scope?: 'NAMESPACE' | 'USER'
      startCreatedAt?: number
      status?: 'DRAFT' | 'SENT' | 'UNSENT'
      transient?: boolean | null
    }
  },
  options?: Omit<UseQueryOptions<GetInboxMessagesResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetInboxMessagesResponse>) => void
): UseQueryResult<GetInboxMessagesResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useInboxAdminApi_GetInboxMessages>[1]) => async () => {
    const response = await InboxAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getInboxMessages(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetInboxMessagesResponse, AxiosError<ApiError>>({
    queryKey: [Key_InboxAdmin.InboxMessages, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Save inbox message
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_InboxAdmin.InboxMessage, input]
 * }
 * ```
 */
export const useInboxAdminApi_CreateInboxMessageMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<SaveInboxMessageResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: SaveInboxMessageRequest }>,
    'mutationKey'
  >,
  callback?: (data: SaveInboxMessageResponse) => void
): UseMutationResult<SaveInboxMessageResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: SaveInboxMessageRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: SaveInboxMessageRequest }) => {
    const response = await InboxAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createInboxMessage(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_InboxAdmin.InboxMessage],
    mutationFn,
    ...options
  })
}

/**
 * Get inbox categories
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_InboxAdmin.InboxCategories, input]
 * }
 * ```
 */
export const useInboxAdminApi_GetInboxCategories = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<GetInboxCategoriesResponseItemArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetInboxCategoriesResponseItemArray>) => void
): UseQueryResult<GetInboxCategoriesResponseItemArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useInboxAdminApi_GetInboxCategories>[1]) => async () => {
    const response = await InboxAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getInboxCategories()
    callback && callback(response)
    return response.data
  }

  return useQuery<GetInboxCategoriesResponseItemArray, AxiosError<ApiError>>({
    queryKey: [Key_InboxAdmin.InboxCategories, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Add inbox category.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_InboxAdmin.InboxCategory, input]
 * }
 * ```
 */
export const useInboxAdminApi_CreateInboxCategoryMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<AddInboxCategoryResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: AddInboxCategoryRequest }>,
    'mutationKey'
  >,
  callback?: (data: AddInboxCategoryResponse) => void
): UseMutationResult<AddInboxCategoryResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: AddInboxCategoryRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: AddInboxCategoryRequest }) => {
    const response = await InboxAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createInboxCategory(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_InboxAdmin.InboxCategory],
    mutationFn,
    ...options
  })
}

/**
 * Get list kafka topic. example result chat,sessionNotification
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_InboxAdmin.InboxListTopicKafka, input]
 * }
 * ```
 */
export const useInboxAdminApi_GetInboxListTopicKafka = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<GetListTopicKafkaResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetListTopicKafkaResponse>) => void
): UseQueryResult<GetListTopicKafkaResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useInboxAdminApi_GetInboxListTopicKafka>[1]) => async () => {
    const response = await InboxAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getInboxListTopicKafka()
    callback && callback(response)
    return response.data
  }

  return useQuery<GetListTopicKafkaResponse, AxiosError<ApiError>>({
    queryKey: [Key_InboxAdmin.InboxListTopicKafka, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Delete inbox message
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_InboxAdmin.InboxMessage_ByMessageId, input]
 * }
 * ```
 */
export const useInboxAdminApi_DeleteInboxMessage_ByMessageIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { messageId: string; queryParams?: { force?: boolean | null } }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { messageId: string; queryParams?: { force?: boolean | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { messageId: string; queryParams?: { force?: boolean | null } }) => {
    const response = await InboxAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteInboxMessage_ByMessageId(input.messageId, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_InboxAdmin.InboxMessage_ByMessageId],
    mutationFn,
    ...options
  })
}

/**
 * Update inbox message
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_InboxAdmin.InboxMessage_ByMessageId, input]
 * }
 * ```
 */
export const useInboxAdminApi_PatchInboxMessage_ByMessageIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { messageId: string; data: UpdateInboxMessageRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { messageId: string; data: UpdateInboxMessageRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { messageId: string; data: UpdateInboxMessageRequest }) => {
    const response = await InboxAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchInboxMessage_ByMessageId(input.messageId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_InboxAdmin.InboxMessage_ByMessageId],
    mutationFn,
    ...options
  })
}

/**
 * Delete inbox category
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_InboxAdmin.InboxCategory_ByCategory, input]
 * }
 * ```
 */
export const useInboxAdminApi_DeleteInboxCategory_ByCategoryMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { category: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { category: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { category: string }) => {
    const response = await InboxAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteInboxCategory_ByCategory(input.category)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_InboxAdmin.InboxCategory_ByCategory],
    mutationFn,
    ...options
  })
}

/**
 * Update inbox category
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_InboxAdmin.InboxCategory_ByCategory, input]
 * }
 * ```
 */
export const useInboxAdminApi_PatchInboxCategory_ByCategoryMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { category: string; data: UpdateInboxCategoryRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { category: string; data: UpdateInboxCategoryRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { category: string; data: UpdateInboxCategoryRequest }) => {
    const response = await InboxAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchInboxCategory_ByCategory(input.category, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_InboxAdmin.InboxCategory_ByCategory],
    mutationFn,
    ...options
  })
}

/**
 * Get inbox users
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_InboxAdmin.UsersInbox_ByInbox, input]
 * }
 * ```
 */
export const useInboxAdminApi_GetUsersInbox_ByInbox = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    inbox: string
    queryParams?: { limit?: number; offset?: number; status?: 'READ' | 'UNREAD'; userId?: string | null }
  },
  options?: Omit<UseQueryOptions<GetInboxUsersResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetInboxUsersResponse>) => void
): UseQueryResult<GetInboxUsersResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useInboxAdminApi_GetUsersInbox_ByInbox>[1]) => async () => {
    const response = await InboxAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersInbox_ByInbox(
      input.inbox,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetInboxUsersResponse, AxiosError<ApiError>>({
    queryKey: [Key_InboxAdmin.UsersInbox_ByInbox, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Unsend inbox message
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_InboxAdmin.UnsendInbox_ByInbox, input]
 * }
 * ```
 */
export const useInboxAdminApi_UpdateUnsendInbox_ByInboxMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UnsendInboxMessageResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { inbox: string; data: UnsendInboxMessageRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: UnsendInboxMessageResponse) => void
): UseMutationResult<
  UnsendInboxMessageResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { inbox: string; data: UnsendInboxMessageRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { inbox: string; data: UnsendInboxMessageRequest }) => {
    const response = await InboxAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateUnsendInbox_ByInbox(
      input.inbox,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_InboxAdmin.UnsendInbox_ByInbox],
    mutationFn,
    ...options
  })
}

/**
 * Send inbox message
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_InboxAdmin.SendInbox_ByMessageId, input]
 * }
 * ```
 */
export const useInboxAdminApi_UpdateSendInbox_ByMessageIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      SendInboxMessageResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { messageId: string; data: SendInboxMessageRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: SendInboxMessageResponse) => void
): UseMutationResult<
  SendInboxMessageResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { messageId: string; data: SendInboxMessageRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { messageId: string; data: SendInboxMessageRequest }) => {
    const response = await InboxAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateSendInbox_ByMessageId(
      input.messageId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_InboxAdmin.SendInbox_ByMessageId],
    mutationFn,
    ...options
  })
}

/**
 * Get category schema.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_InboxAdmin.SchemaJsonInbox_ByCategory, input]
 * }
 * ```
 */
export const useInboxAdminApi_GetSchemaJsonInbox_ByCategory = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { category: string },
  options?: Omit<UseQueryOptions<JsonSchemaType, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<JsonSchemaType>) => void
): UseQueryResult<JsonSchemaType, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useInboxAdminApi_GetSchemaJsonInbox_ByCategory>[1]) => async () => {
    const response = await InboxAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getSchemaJsonInbox_ByCategory(input.category)
    callback && callback(response)
    return response.data
  }

  return useQuery<JsonSchemaType, AxiosError<ApiError>>({
    queryKey: [Key_InboxAdmin.SchemaJsonInbox_ByCategory, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
