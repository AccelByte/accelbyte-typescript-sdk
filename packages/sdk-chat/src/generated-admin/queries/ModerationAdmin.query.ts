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
import { ModerationAdminApi } from '../ModerationAdminApi.js'

import { ChatSnapshots } from '../../generated-definitions/ChatSnapshots.js'

export enum Key_ModerationAdmin {
  Snapshot_ByChatId = 'ModerationAdmin.Snapshot_ByChatId'
}

export const useAdmDeleteSnapshot_ByChatIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { chatId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { chatId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { chatId: string }) => {
    const data = await ModerationAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteSnapshot_ByChatId(input.chatId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ModerationAdmin.Snapshot_ByChatId],
    mutationFn,
    ...options
  })
}

export const useAdmSnapshot_ByChatId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { chatId: string },
  options?: Omit<UseQueryOptions<ChatSnapshots, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ChatSnapshots) => void
): UseQueryResult<ChatSnapshots, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSnapshot_ByChatId>[1]) => async () => {
    const data = await ModerationAdminApi(sdk, { namespace: input.namespace }).getSnapshot_ByChatId(input.chatId)
    callback && callback(data)
    return data
  }

  return useQuery<ChatSnapshots, AxiosError<ApiError>>({
    queryKey: [Key_ModerationAdmin.Snapshot_ByChatId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
