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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { ModerationApi } from '../ModerationApi.js'

import { ChatSnapshots } from '../../generated-definitions/ChatSnapshots.js'

export enum Key_Moderation {
  Snapshot_ByTopic_ByChatId = 'Chat.Moderation.Snapshot_ByTopic_ByChatId'
}

/**
 * Get the chat snapshot
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Moderation.Snapshot_ByTopic_ByChatId, input]
 * }
 * ```
 */
export const useModerationApi_GetSnapshot_ByTopic_ByChatId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { topic: string; chatId: string },
  options?: Omit<UseQueryOptions<ChatSnapshots, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ChatSnapshots>) => void
): UseQueryResult<ChatSnapshots, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useModerationApi_GetSnapshot_ByTopic_ByChatId>[1]) => async () => {
    const response = await ModerationApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getSnapshot_ByTopic_ByChatId(input.topic, input.chatId)
    callback && callback(response)
    return response.data
  }

  return useQuery<ChatSnapshots, AxiosError<ApiError>>({
    queryKey: [Key_Moderation.Snapshot_ByTopic_ByChatId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
