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
import { AdminChannelAdminApi } from '../AdminChannelAdminApi.js'

import { ChannelRequest } from '../../generated-definitions/ChannelRequest.js'
import { ChannelResponse } from '../../generated-definitions/ChannelResponse.js'
import { PaginatedGetChannelResponse } from '../../generated-definitions/PaginatedGetChannelResponse.js'
import { UpdateChannelRequest } from '../../generated-definitions/UpdateChannelRequest.js'

export enum Key_AdminChannelAdmin {
  Channels = 'AdminChannelAdmin.Channels',
  Channel = 'AdminChannelAdmin.Channel',
  Channel_ByChannelId = 'AdminChannelAdmin.Channel_ByChannelId',
  Channels_ByUserId = 'AdminChannelAdmin.Channels_ByUserId',
  Channel_ByUserId_ByChannelId = 'AdminChannelAdmin.Channel_ByUserId_ByChannelId'
}

export const useAdmChannels = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedGetChannelResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedGetChannelResponse) => void
): UseQueryResult<PaginatedGetChannelResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmChannels>[1]) => async () => {
    const data = await AdminChannelAdminApi(sdk, { namespace: input.namespace }).getChannels(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedGetChannelResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminChannelAdmin.Channels, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateChannelMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<ChannelResponse, AxiosError<ApiError>, ApiArgs & { data: ChannelRequest }>, 'mutationKey'>,
  callback?: (data: ChannelResponse) => void
): UseMutationResult<ChannelResponse, AxiosError<ApiError>, ApiArgs & { data: ChannelRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ChannelRequest }) => {
    const data = await AdminChannelAdminApi(sdk, { namespace: input.namespace, config: input.config }).createChannel(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminChannelAdmin.Channel],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteChannel_ByChannelIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { channelId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { channelId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { channelId: string }) => {
    const data = await AdminChannelAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteChannel_ByChannelId(
      input.channelId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminChannelAdmin.Channel_ByChannelId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateChannel_ByChannelIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ChannelResponse, AxiosError<ApiError>, ApiArgs & { channelId: string; data: UpdateChannelRequest }>,
    'mutationKey'
  >,
  callback?: (data: ChannelResponse) => void
): UseMutationResult<ChannelResponse, AxiosError<ApiError>, ApiArgs & { channelId: string; data: UpdateChannelRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { channelId: string; data: UpdateChannelRequest }) => {
    const data = await AdminChannelAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateChannel_ByChannelId(
      input.channelId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminChannelAdmin.Channel_ByChannelId],
    mutationFn,
    ...options
  })
}

export const useAdmChannels_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { limit?: number; name?: string | null; offset?: number } },
  options?: Omit<UseQueryOptions<PaginatedGetChannelResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaginatedGetChannelResponse) => void
): UseQueryResult<PaginatedGetChannelResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmChannels_ByUserId>[1]) => async () => {
    const data = await AdminChannelAdminApi(sdk, { namespace: input.namespace }).getChannels_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaginatedGetChannelResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminChannelAdmin.Channels_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteChannel_ByUserId_ByChannelIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; channelId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; channelId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; channelId: string }) => {
    const data = await AdminChannelAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteChannel_ByUserId_ByChannelId(
      input.userId,
      input.channelId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminChannelAdmin.Channel_ByUserId_ByChannelId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateChannel_ByUserId_ByChannelIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ChannelResponse, AxiosError<ApiError>, ApiArgs & { userId: string; channelId: string; data: UpdateChannelRequest }>,
    'mutationKey'
  >,
  callback?: (data: ChannelResponse) => void
): UseMutationResult<
  ChannelResponse,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; channelId: string; data: UpdateChannelRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; channelId: string; data: UpdateChannelRequest }) => {
    const data = await AdminChannelAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateChannel_ByUserId_ByChannelId(
      input.userId,
      input.channelId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminChannelAdmin.Channel_ByUserId_ByChannelId],
    mutationFn,
    ...options
  })
}
