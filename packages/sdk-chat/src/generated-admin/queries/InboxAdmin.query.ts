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
import { InboxAdminApi } from '../InboxAdminApi.js'

import { AddInboxCategoryRequest } from '../../generated-definitions/AddInboxCategoryRequest.js'
import { AddInboxCategoryResponse } from '../../generated-definitions/AddInboxCategoryResponse.js'
import { GetInboxCategoriesResponseItemArray } from '../../generated-definitions/GetInboxCategoriesResponseItemArray.js'
import { GetInboxMessagesResponse } from '../../generated-definitions/GetInboxMessagesResponse.js'
import { GetInboxStatsResponse } from '../../generated-definitions/GetInboxStatsResponse.js'
import { GetInboxUsersResponse } from '../../generated-definitions/GetInboxUsersResponse.js'
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
  InboxStats = 'InboxAdmin.InboxStats',
  InboxMessages = 'InboxAdmin.InboxMessages',
  InboxMessage = 'InboxAdmin.InboxMessage',
  InboxCategories = 'InboxAdmin.InboxCategories',
  InboxCategory = 'InboxAdmin.InboxCategory',
  InboxMessage_ByMessageId = 'InboxAdmin.InboxMessage_ByMessageId',
  InboxCategory_ByCategory = 'InboxAdmin.InboxCategory_ByCategory',
  UsersInbox_ByInbox = 'InboxAdmin.UsersInbox_ByInbox',
  UnsendInbox_ByInbox = 'InboxAdmin.UnsendInbox_ByInbox',
  SendInbox_ByMessageId = 'InboxAdmin.SendInbox_ByMessageId',
  SchemaJsonInbox_ByCategory = 'InboxAdmin.SchemaJsonInbox_ByCategory'
}

export const useAdmInboxStats = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { messageId?: string[] } },
  options?: Omit<UseQueryOptions<GetInboxStatsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetInboxStatsResponse) => void
): UseQueryResult<GetInboxStatsResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmInboxStats>[1]) => async () => {
    const data = await InboxAdminApi(sdk, { namespace: input.namespace }).getInboxStats(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<GetInboxStatsResponse, AxiosError<ApiError>>({
    queryKey: [Key_InboxAdmin.InboxStats, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmInboxMessages = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
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
  callback?: (data: GetInboxMessagesResponse) => void
): UseQueryResult<GetInboxMessagesResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmInboxMessages>[1]) => async () => {
    const data = await InboxAdminApi(sdk, { namespace: input.namespace }).getInboxMessages(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<GetInboxMessagesResponse, AxiosError<ApiError>>({
    queryKey: [Key_InboxAdmin.InboxMessages, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateInboxMessageMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<SaveInboxMessageResponse, AxiosError<ApiError>, ApiArgs & { data: SaveInboxMessageRequest }>,
    'mutationKey'
  >,
  callback?: (data: SaveInboxMessageResponse) => void
): UseMutationResult<SaveInboxMessageResponse, AxiosError<ApiError>, ApiArgs & { data: SaveInboxMessageRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: SaveInboxMessageRequest }) => {
    const data = await InboxAdminApi(sdk, { namespace: input.namespace, config: input.config }).createInboxMessage(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_InboxAdmin.InboxMessage],
    mutationFn,
    ...options
  })
}

export const useAdmInboxCategories = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<GetInboxCategoriesResponseItemArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetInboxCategoriesResponseItemArray) => void
): UseQueryResult<GetInboxCategoriesResponseItemArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmInboxCategories>[1]) => async () => {
    const data = await InboxAdminApi(sdk, { namespace: input.namespace }).getInboxCategories()
    callback && callback(data)
    return data
  }

  return useQuery<GetInboxCategoriesResponseItemArray, AxiosError<ApiError>>({
    queryKey: [Key_InboxAdmin.InboxCategories, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateInboxCategoryMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<AddInboxCategoryResponse, AxiosError<ApiError>, ApiArgs & { data: AddInboxCategoryRequest }>,
    'mutationKey'
  >,
  callback?: (data: AddInboxCategoryResponse) => void
): UseMutationResult<AddInboxCategoryResponse, AxiosError<ApiError>, ApiArgs & { data: AddInboxCategoryRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: AddInboxCategoryRequest }) => {
    const data = await InboxAdminApi(sdk, { namespace: input.namespace, config: input.config }).createInboxCategory(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_InboxAdmin.InboxCategory],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteInboxMessage_ByMessageIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { messageId: string; queryParams?: { force?: boolean | null } }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { messageId: string; queryParams?: { force?: boolean | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { messageId: string; queryParams?: { force?: boolean | null } }) => {
    const data = await InboxAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteInboxMessage_ByMessageId(
      input.messageId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_InboxAdmin.InboxMessage_ByMessageId],
    mutationFn,
    ...options
  })
}

export const useAdmPatchInboxMessage_ByMessageIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { messageId: string; data: UpdateInboxMessageRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { messageId: string; data: UpdateInboxMessageRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { messageId: string; data: UpdateInboxMessageRequest }) => {
    const data = await InboxAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchInboxMessage_ByMessageId(
      input.messageId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_InboxAdmin.InboxMessage_ByMessageId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteInboxCategory_ByCategoryMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { category: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { category: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { category: string }) => {
    const data = await InboxAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteInboxCategory_ByCategory(
      input.category
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_InboxAdmin.InboxCategory_ByCategory],
    mutationFn,
    ...options
  })
}

export const useAdmPatchInboxCategory_ByCategoryMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { category: string; data: UpdateInboxCategoryRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { category: string; data: UpdateInboxCategoryRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { category: string; data: UpdateInboxCategoryRequest }) => {
    const data = await InboxAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchInboxCategory_ByCategory(
      input.category,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_InboxAdmin.InboxCategory_ByCategory],
    mutationFn,
    ...options
  })
}

export const useAdmUsersInbox_ByInbox = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { inbox: string; queryParams?: { limit?: number; offset?: number; status?: 'READ' | 'UNREAD'; userId?: string | null } },
  options?: Omit<UseQueryOptions<GetInboxUsersResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetInboxUsersResponse) => void
): UseQueryResult<GetInboxUsersResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmUsersInbox_ByInbox>[1]) => async () => {
    const data = await InboxAdminApi(sdk, { namespace: input.namespace }).getUsersInbox_ByInbox(input.inbox, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<GetInboxUsersResponse, AxiosError<ApiError>>({
    queryKey: [Key_InboxAdmin.UsersInbox_ByInbox, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateUnsendInbox_ByInboxMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UnsendInboxMessageResponse, AxiosError<ApiError>, ApiArgs & { inbox: string; data: UnsendInboxMessageRequest }>,
    'mutationKey'
  >,
  callback?: (data: UnsendInboxMessageResponse) => void
): UseMutationResult<UnsendInboxMessageResponse, AxiosError<ApiError>, ApiArgs & { inbox: string; data: UnsendInboxMessageRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { inbox: string; data: UnsendInboxMessageRequest }) => {
    const data = await InboxAdminApi(sdk, { namespace: input.namespace, config: input.config }).createUnsendInbox_ByInbox(
      input.inbox,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_InboxAdmin.UnsendInbox_ByInbox],
    mutationFn,
    ...options
  })
}

export const useAdmCreateSendInbox_ByMessageIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<SendInboxMessageResponse, AxiosError<ApiError>, ApiArgs & { messageId: string; data: SendInboxMessageRequest }>,
    'mutationKey'
  >,
  callback?: (data: SendInboxMessageResponse) => void
): UseMutationResult<SendInboxMessageResponse, AxiosError<ApiError>, ApiArgs & { messageId: string; data: SendInboxMessageRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { messageId: string; data: SendInboxMessageRequest }) => {
    const data = await InboxAdminApi(sdk, { namespace: input.namespace, config: input.config }).createSendInbox_ByMessageId(
      input.messageId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_InboxAdmin.SendInbox_ByMessageId],
    mutationFn,
    ...options
  })
}

export const useAdmSchemaJsonInbox_ByCategory = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { category: string },
  options?: Omit<UseQueryOptions<JsonSchemaType, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: JsonSchemaType) => void
): UseQueryResult<JsonSchemaType, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSchemaJsonInbox_ByCategory>[1]) => async () => {
    const data = await InboxAdminApi(sdk, { namespace: input.namespace }).getSchemaJsonInbox_ByCategory(input.category)
    callback && callback(data)
    return data
  }

  return useQuery<JsonSchemaType, AxiosError<ApiError>>({
    queryKey: [Key_InboxAdmin.SchemaJsonInbox_ByCategory, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
