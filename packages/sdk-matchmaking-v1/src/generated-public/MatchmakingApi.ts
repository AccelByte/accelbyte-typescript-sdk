/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ChannelRequest } from '../generated-definitions/ChannelRequest.js'
import { ChannelV1 } from '../generated-definitions/ChannelV1.js'
import { ChannelV1Array } from '../generated-definitions/ChannelV1Array.js'
import { CreateChannelResponse } from '../generated-definitions/CreateChannelResponse.js'
import { DequeueRequest } from '../generated-definitions/DequeueRequest.js'
import { GetChannelsResponse } from '../generated-definitions/GetChannelsResponse.js'
import { MatchResultRequest } from '../generated-definitions/MatchResultRequest.js'
import { MatchResultResponse } from '../generated-definitions/MatchResultResponse.js'
import { MatchmakingResult } from '../generated-definitions/MatchmakingResult.js'
import { RebalanceRequest } from '../generated-definitions/RebalanceRequest.js'
import { RebalanceResponse } from '../generated-definitions/RebalanceResponse.js'
import { TicketMetricResultRecord } from '../generated-definitions/TicketMetricResultRecord.js'
import { Matchmaking$ } from './endpoints/Matchmaking$.js'

export function MatchmakingApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getChannels(queryParams?: { limit?: number; offset?: number }): Promise<AxiosResponse<GetChannelsResponse>> {
    const $ = new Matchmaking$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getChannels(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createChannel(data: ChannelRequest): Promise<AxiosResponse<CreateChannelResponse>> {
    const $ = new Matchmaking$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createChannel(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createSession(data: MatchmakingResult): Promise<AxiosResponse<unknown>> {
    const $ = new Matchmaking$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createSession(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRebalance(data: RebalanceRequest): Promise<AxiosResponse<RebalanceResponse>> {
    const $ = new Matchmaking$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRebalance(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createMatchresult(data: MatchResultRequest): Promise<AxiosResponse<MatchResultResponse>> {
    const $ = new Matchmaking$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createMatchresult(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateSessionDequeue(data: DequeueRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Matchmaking$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateSessionDequeue(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteChannel_ByChannel(channel: string): Promise<AxiosResponse<unknown>> {
    const $ = new Matchmaking$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteChannel_ByChannel(channel)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getChannels_ByNS(): Promise<AxiosResponse<ChannelV1Array>> {
    const $ = new Matchmaking$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getChannels_ByNS()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStatus_ByMatchId(matchID: string): Promise<AxiosResponse<MatchmakingResult>> {
    const $ = new Matchmaking$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatus_ByMatchId(matchID)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getMetrics_ByChannelName(channelName: string): Promise<AxiosResponse<TicketMetricResultRecord>> {
    const $ = new Matchmaking$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMetrics_ByChannelName(channelName)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getChannel_ByChannelName(channelName: string): Promise<AxiosResponse<ChannelV1>> {
    const $ = new Matchmaking$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getChannel_ByChannelName(channelName)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Reads all available channels in a namespace
     */
    getChannels,
    /**
     * Creates a new matchmaking channel. Matchmaking channels is a list of pool name that is eligible for matchmaking processes. GameMode isolates each matchmaking pools. If match timeout is set to 0, by default, incoming matchmaking requests will be timed out after 1 hour. If max worker delay is set to 0, by default, it will wait for at max ~8 seconds during low volume. Rule Set Matching Rule used to classify the player. Player that has matched criteria will be grouped together within an ally. Valid value for criteria is &#34;distance&#34;
     */
    createChannel,
    /**
     * Queues joinable session so that it will be matched with player&#39;s match request tickets. The session queued must be in a channel/game mode that is set to have joinable flag. The session will be in queue until it is full or expired. Both the number of players and session queue timeout can be set in the channel&#39;s config. This endpoint is intended to be called by game server to let matchmaker know that the game server is ready for receiving more players through matchmaking tickets to its session. If a session is already queued, and game server wants to modify the data or renew the queue timeout (e.g. some player left and more empty slot opened up), simply call this endpoint with the updated session data.
     */
    createSession,
    /**
     * Do rebalance the teams based on MMR from given matchID, consider attribute name &#34;mmr&#34; (case-insensitive), or any first attribute with criteria &#34;distance&#34; Will return rebalanced mm result
     */
    updateRebalance,
    /**
     * Process match result into final attribute value and stores it to player attribute Will return final attribute value
     */
    createMatchresult,
    /**
     * Dequeues joinable session so that it will not be matched with player&#39;s match request tickets. This endpoint is intended to be called by game server to let matchmaker know that the game server does not want more players to its session, even though it is not full.
     */
    updateSessionDequeue,
    /**
     * Deletes a matchmaking channel. Matchmaking channels is a list of pool name that is eligible for matchmaking processes. GameMode isolates each matchmaking pools. Trying to delete non-existent channel will result deletion success
     */
    deleteChannel_ByChannel,
    /**
     * Reads all available channels in a namespace
     */
    getChannels_ByNS,
    /**
     * Queries the specified session&#39;s status. Game servers are expected to call this periodically as long as it has a session in queue to see if there are new players being matched to the session. Possible session statuses are &#34;sessionInQueue&#34;, &#34;sessionFull&#34;, and &#34;sessionTimeout&#34;. if party_id value empty/null, field will not show in response body.
     */
    getStatus_ByMatchId,
    /**
     * Get metric for a specific match pool Result: queue_time in seconds
     */
    getMetrics_ByChannelName,
    /**
     * Reads single channel based on namespace and channel name
     */
    getChannel_ByChannelName
  }
}
