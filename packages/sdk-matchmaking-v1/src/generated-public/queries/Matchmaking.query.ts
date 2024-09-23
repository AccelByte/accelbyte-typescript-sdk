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
import { MatchmakingApi } from '../MatchmakingApi.js'

import { ChannelRequest } from '../../generated-definitions/ChannelRequest.js'
import { ChannelV1 } from '../../generated-definitions/ChannelV1.js'
import { ChannelV1Array } from '../../generated-definitions/ChannelV1Array.js'
import { CreateChannelResponse } from '../../generated-definitions/CreateChannelResponse.js'
import { DequeueRequest } from '../../generated-definitions/DequeueRequest.js'
import { GetChannelsResponse } from '../../generated-definitions/GetChannelsResponse.js'
import { MatchResultRequest } from '../../generated-definitions/MatchResultRequest.js'
import { MatchResultResponse } from '../../generated-definitions/MatchResultResponse.js'
import { MatchmakingResult } from '../../generated-definitions/MatchmakingResult.js'
import { RebalanceRequest } from '../../generated-definitions/RebalanceRequest.js'
import { RebalanceResponse } from '../../generated-definitions/RebalanceResponse.js'
import { TicketMetricResultRecord } from '../../generated-definitions/TicketMetricResultRecord.js'

export enum Key_Matchmaking {
  Channels = 'Matchmaking.Matchmaking.Channels',
  Channel = 'Matchmaking.Matchmaking.Channel',
  Session = 'Matchmaking.Matchmaking.Session',
  Rebalance = 'Matchmaking.Matchmaking.Rebalance',
  Matchresult = 'Matchmaking.Matchmaking.Matchresult',
  SessionDequeue = 'Matchmaking.Matchmaking.SessionDequeue',
  Channel_ByChannel = 'Matchmaking.Matchmaking.Channel_ByChannel',
  Channels_ByNS = 'Matchmaking.Matchmaking.Channels_ByNS',
  Status_ByMatchId = 'Matchmaking.Matchmaking.Status_ByMatchId',
  Metrics_ByChannelName = 'Matchmaking.Matchmaking.Metrics_ByChannelName',
  Channel_ByChannelName = 'Matchmaking.Matchmaking.Channel_ByChannelName'
}

/**
 * Reads all available channels in a namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Matchmaking.Channels, input]
 * }
 * ```
 */
export const useMatchmakingApi_GetChannels = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetChannelsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetChannelsResponse>) => void
): UseQueryResult<GetChannelsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMatchmakingApi_GetChannels>[1]) => async () => {
    const response = await MatchmakingApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getChannels(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetChannelsResponse, AxiosError<ApiError>>({
    queryKey: [Key_Matchmaking.Channels, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Creates a new matchmaking channel. Matchmaking channels is a list of pool name that is eligible for matchmaking processes. GameMode isolates each matchmaking pools. If match timeout is set to 0, by default, incoming matchmaking requests will be timed out after 1 hour. If max worker delay is set to 0, by default, it will wait for at max ~8 seconds during low volume. Rule Set Matching Rule used to classify the player. Player that has matched criteria will be grouped together within an ally. Valid value for criteria is &#34;distance&#34;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Matchmaking.Channel, input]
 * }
 * ```
 */
export const useMatchmakingApi_CreateChannelMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<CreateChannelResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ChannelRequest }>,
    'mutationKey'
  >,
  callback?: (data: CreateChannelResponse) => void
): UseMutationResult<CreateChannelResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ChannelRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ChannelRequest }) => {
    const response = await MatchmakingApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createChannel(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Matchmaking.Channel],
    mutationFn,
    ...options
  })
}

/**
 * Queues joinable session so that it will be matched with player&#39;s match request tickets. The session queued must be in a channel/game mode that is set to have joinable flag. The session will be in queue until it is full or expired. Both the number of players and session queue timeout can be set in the channel&#39;s config. This endpoint is intended to be called by game server to let matchmaker know that the game server is ready for receiving more players through matchmaking tickets to its session. If a session is already queued, and game server wants to modify the data or renew the queue timeout (e.g. some player left and more empty slot opened up), simply call this endpoint with the updated session data.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Matchmaking.Session, input]
 * }
 * ```
 */
export const useMatchmakingApi_CreateSessionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: MatchmakingResult }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: MatchmakingResult }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: MatchmakingResult }) => {
    const response = await MatchmakingApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createSession(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Matchmaking.Session],
    mutationFn,
    ...options
  })
}

/**
 * Do rebalance the teams based on MMR from given matchID, consider attribute name &#34;mmr&#34; (case-insensitive), or any first attribute with criteria &#34;distance&#34; Will return rebalanced mm result
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Matchmaking.Rebalance, input]
 * }
 * ```
 */
export const useMatchmakingApi_UpdateRebalanceMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<RebalanceResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: RebalanceRequest }>,
    'mutationKey'
  >,
  callback?: (data: RebalanceResponse) => void
): UseMutationResult<RebalanceResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: RebalanceRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: RebalanceRequest }) => {
    const response = await MatchmakingApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateRebalance(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Matchmaking.Rebalance],
    mutationFn,
    ...options
  })
}

/**
 * Process match result into final attribute value and stores it to player attribute Will return final attribute value
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Matchmaking.Matchresult, input]
 * }
 * ```
 */
export const useMatchmakingApi_CreateMatchresultMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<MatchResultResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: MatchResultRequest }>,
    'mutationKey'
  >,
  callback?: (data: MatchResultResponse) => void
): UseMutationResult<MatchResultResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: MatchResultRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: MatchResultRequest }) => {
    const response = await MatchmakingApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createMatchresult(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Matchmaking.Matchresult],
    mutationFn,
    ...options
  })
}

/**
 * Dequeues joinable session so that it will not be matched with player&#39;s match request tickets. This endpoint is intended to be called by game server to let matchmaker know that the game server does not want more players to its session, even though it is not full.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Matchmaking.SessionDequeue, input]
 * }
 * ```
 */
export const useMatchmakingApi_UpdateSessionDequeueMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DequeueRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DequeueRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: DequeueRequest }) => {
    const response = await MatchmakingApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateSessionDequeue(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Matchmaking.SessionDequeue],
    mutationFn,
    ...options
  })
}

/**
 * Deletes a matchmaking channel. Matchmaking channels is a list of pool name that is eligible for matchmaking processes. GameMode isolates each matchmaking pools. Trying to delete non-existent channel will result deletion success
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Matchmaking.Channel_ByChannel, input]
 * }
 * ```
 */
export const useMatchmakingApi_DeleteChannel_ByChannelMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { channel: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { channel: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { channel: string }) => {
    const response = await MatchmakingApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteChannel_ByChannel(
      input.channel
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Matchmaking.Channel_ByChannel],
    mutationFn,
    ...options
  })
}

/**
 * Reads all available channels in a namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Matchmaking.Channels_ByNS, input]
 * }
 * ```
 */
export const useMatchmakingApi_GetChannels_ByNS = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ChannelV1Array, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ChannelV1Array>) => void
): UseQueryResult<ChannelV1Array, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMatchmakingApi_GetChannels_ByNS>[1]) => async () => {
    const response = await MatchmakingApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getChannels_ByNS()
    callback && callback(response)
    return response.data
  }

  return useQuery<ChannelV1Array, AxiosError<ApiError>>({
    queryKey: [Key_Matchmaking.Channels_ByNS, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Queries the specified session&#39;s status. Game servers are expected to call this periodically as long as it has a session in queue to see if there are new players being matched to the session. Possible session statuses are &#34;sessionInQueue&#34;, &#34;sessionFull&#34;, and &#34;sessionTimeout&#34;. if party_id value empty/null, field will not show in response body.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Matchmaking.Status_ByMatchId, input]
 * }
 * ```
 */
export const useMatchmakingApi_GetStatus_ByMatchId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { matchID: string },
  options?: Omit<UseQueryOptions<MatchmakingResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MatchmakingResult>) => void
): UseQueryResult<MatchmakingResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMatchmakingApi_GetStatus_ByMatchId>[1]) => async () => {
    const response = await MatchmakingApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getStatus_ByMatchId(
      input.matchID
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<MatchmakingResult, AxiosError<ApiError>>({
    queryKey: [Key_Matchmaking.Status_ByMatchId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get metric for a specific match pool Result: queue_time in seconds
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Matchmaking.Metrics_ByChannelName, input]
 * }
 * ```
 */
export const useMatchmakingApi_GetMetrics_ByChannelName = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { channelName: string },
  options?: Omit<UseQueryOptions<TicketMetricResultRecord, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TicketMetricResultRecord>) => void
): UseQueryResult<TicketMetricResultRecord, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMatchmakingApi_GetMetrics_ByChannelName>[1]) => async () => {
    const response = await MatchmakingApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getMetrics_ByChannelName(
      input.channelName
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<TicketMetricResultRecord, AxiosError<ApiError>>({
    queryKey: [Key_Matchmaking.Metrics_ByChannelName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Reads single channel based on namespace and channel name
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Matchmaking.Channel_ByChannelName, input]
 * }
 * ```
 */
export const useMatchmakingApi_GetChannel_ByChannelName = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { channelName: string },
  options?: Omit<UseQueryOptions<ChannelV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ChannelV1>) => void
): UseQueryResult<ChannelV1, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMatchmakingApi_GetChannel_ByChannelName>[1]) => async () => {
    const response = await MatchmakingApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getChannel_ByChannelName(
      input.channelName
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ChannelV1, AxiosError<ApiError>>({
    queryKey: [Key_Matchmaking.Channel_ByChannelName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
