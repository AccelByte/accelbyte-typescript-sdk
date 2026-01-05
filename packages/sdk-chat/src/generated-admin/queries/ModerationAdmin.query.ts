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
import { ModerationAdminApi } from '../ModerationAdminApi.js'

import { ChatSnapshots } from '../../generated-definitions/ChatSnapshots.js'

export enum Key_ModerationAdmin {
  Snapshot_ByChatId = 'Chat.ModerationAdmin.Snapshot_ByChatId'
}

/**
 * Delete the chat snapshot
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ModerationAdmin.Snapshot_ByChatId, input]
 * }
 * ```
 */
export const useModerationAdminApi_DeleteSnapshot_ByChatIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { chatId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { chatId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { chatId: string }) => {
    const response = await ModerationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteSnapshot_ByChatId(input.chatId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ModerationAdmin.Snapshot_ByChatId],
    mutationFn,
    ...options
  })
}

/**
 * Get the chat snapshot
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ModerationAdmin.Snapshot_ByChatId, input]
 * }
 * ```
 */
export const useModerationAdminApi_GetSnapshot_ByChatId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { chatId: string },
  options?: Omit<UseQueryOptions<ChatSnapshots, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ChatSnapshots>) => void
): UseQueryResult<ChatSnapshots, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useModerationAdminApi_GetSnapshot_ByChatId>[1]) => async () => {
    const response = await ModerationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getSnapshot_ByChatId(
      input.chatId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ChatSnapshots, AxiosError<ApiError>>({
    queryKey: [Key_ModerationAdmin.Snapshot_ByChatId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
