/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
import { PublicChannelApi } from '../PublicChannelApi.js'

import { ChannelResponse } from '../../generated-definitions/ChannelResponse.js'
import { PaginatedGetChannelResponse } from '../../generated-definitions/PaginatedGetChannelResponse.js'
import { PublicChannelRequest } from '../../generated-definitions/PublicChannelRequest.js'
import { UpdateChannelRequest } from '../../generated-definitions/UpdateChannelRequest.js'

export enum Key_PublicChannel {
  Channels_ByUserId = 'Ugc.PublicChannel.Channels_ByUserId',
  Channel_ByUserId = 'Ugc.PublicChannel.Channel_ByUserId',
  Channel_ByUserId_ByChannelId = 'Ugc.PublicChannel.Channel_ByUserId_ByChannelId'
}

/**
 * Get user channel paginated
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicChannel.Channels_ByUserId, input]
 * }
 * ```
 */
export const usePublicChannelApi_GetChannels_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { limit?: number; name?: string | null; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedGetChannelResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaginatedGetChannelResponse>) => void
): UseQueryResult<PaginatedGetChannelResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicChannelApi_GetChannels_ByUserId>[1]) => async () => {
    const response = await PublicChannelApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getChannels_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PaginatedGetChannelResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicChannel.Channels_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create user channel
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicChannel.Channel_ByUserId, input]
 * }
 * ```
 */
export const usePublicChannelApi_CreateChannel_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ChannelResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: PublicChannelRequest }>,
    'mutationKey'
  >,
  callback?: (data: ChannelResponse) => void
): UseMutationResult<ChannelResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: PublicChannelRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: PublicChannelRequest }) => {
    const response = await PublicChannelApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createChannel_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicChannel.Channel_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Delete user channel
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicChannel.Channel_ByUserId_ByChannelId, input]
 * }
 * ```
 */
export const usePublicChannelApi_DeleteChannel_ByUserId_ByChannelIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; channelId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; channelId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; channelId: string }) => {
    const response = await PublicChannelApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteChannel_ByUserId_ByChannelId(input.userId, input.channelId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicChannel.Channel_ByUserId_ByChannelId],
    mutationFn,
    ...options
  })
}

/**
 * Update user channel
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicChannel.Channel_ByUserId_ByChannelId, input]
 * }
 * ```
 */
export const usePublicChannelApi_UpdateChannel_ByUserId_ByChannelIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      ChannelResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; channelId: string; data: UpdateChannelRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: ChannelResponse) => void
): UseMutationResult<
  ChannelResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; channelId: string; data: UpdateChannelRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; channelId: string; data: UpdateChannelRequest }) => {
    const response = await PublicChannelApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateChannel_ByUserId_ByChannelId(input.userId, input.channelId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicChannel.Channel_ByUserId_ByChannelId],
    mutationFn,
    ...options
  })
}
