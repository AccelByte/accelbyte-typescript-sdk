/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
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

export class Matchmaking$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Reads all available channels in a namespace
   */
  getChannels(queryParams?: { limit?: number; offset?: number }): Promise<Response<GetChannelsResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/matchmaking/namespaces/{namespace}/channels'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GetChannelsResponse, 'GetChannelsResponse')
  }
  /**
   * Creates a new matchmaking channel. Matchmaking channels is a list of pool name that is eligible for matchmaking processes. GameMode isolates each matchmaking pools. If match timeout is set to 0, by default, incoming matchmaking requests will be timed out after 1 hour. If max worker delay is set to 0, by default, it will wait for at max ~8 seconds during low volume. Rule Set Matching Rule used to classify the player. Player that has matched criteria will be grouped together within an ally. Valid value for criteria is &#34;distance&#34;
   */
  createChannel(data: ChannelRequest): Promise<Response<CreateChannelResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/matchmaking/namespaces/{namespace}/channels'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CreateChannelResponse, 'CreateChannelResponse')
  }
  /**
   * Queues joinable session so that it will be matched with player&#39;s match request tickets. The session queued must be in a channel/game mode that is set to have joinable flag. The session will be in queue until it is full or expired. Both the number of players and session queue timeout can be set in the channel&#39;s config. This endpoint is intended to be called by game server to let matchmaker know that the game server is ready for receiving more players through matchmaking tickets to its session. If a session is already queued, and game server wants to modify the data or renew the queue timeout (e.g. some player left and more empty slot opened up), simply call this endpoint with the updated session data.
   */
  createSession(data: MatchmakingResult): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/matchmaking/namespaces/{namespace}/sessions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Do rebalance the teams based on MMR from given matchID, consider attribute name &#34;mmr&#34; (case-insensitive), or any first attribute with criteria &#34;distance&#34; Will return rebalanced mm result
   */
  updateRebalance(data: RebalanceRequest): Promise<Response<RebalanceResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/matchmaking/namespaces/{namespace}/rebalance'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RebalanceResponse, 'RebalanceResponse')
  }
  /**
   * Process match result into final attribute value and stores it to player attribute Will return final attribute value
   */
  createMatchresult(data: MatchResultRequest): Promise<Response<MatchResultResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/matchmaking/namespaces/{namespace}/matchresult'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MatchResultResponse, 'MatchResultResponse')
  }
  /**
   * Dequeues joinable session so that it will not be matched with player&#39;s match request tickets. This endpoint is intended to be called by game server to let matchmaker know that the game server does not want more players to its session, even though it is not full.
   */
  updateSessionDequeue(data: DequeueRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/matchmaking/namespaces/{namespace}/sessions/dequeue'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Deletes a matchmaking channel. Matchmaking channels is a list of pool name that is eligible for matchmaking processes. GameMode isolates each matchmaking pools. Trying to delete non-existent channel will result deletion success
   */
  deleteChannel_ByChannel(channel: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/matchmaking/namespaces/{namespace}/channels/{channel}'
      .replace('{namespace}', this.namespace)
      .replace('{channel}', channel)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Reads all available channels in a namespace
   */
  getChannels_ByNS(): Promise<Response<ChannelV1Array>> {
    const params = {} as AxiosRequestConfig
    const url = '/matchmaking/v1/public/namespaces/{namespace}/channels'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ChannelV1Array, 'ChannelV1Array')
  }
  /**
   * Queries the specified session&#39;s status. Game servers are expected to call this periodically as long as it has a session in queue to see if there are new players being matched to the session. Possible session statuses are &#34;sessionInQueue&#34;, &#34;sessionFull&#34;, and &#34;sessionTimeout&#34;. if party_id value empty/null, field will not show in response body.
   */
  getStatus_ByMatchId(matchID: string): Promise<Response<MatchmakingResult>> {
    const params = {} as AxiosRequestConfig
    const url = '/matchmaking/namespaces/{namespace}/sessions/{matchID}/status'
      .replace('{namespace}', this.namespace)
      .replace('{matchID}', matchID)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MatchmakingResult, 'MatchmakingResult')
  }
  /**
   * Get metric for a specific match pool Result: queue_time in seconds
   */
  getMetrics_ByChannelName(channelName: string): Promise<Response<TicketMetricResultRecord>> {
    const params = {} as AxiosRequestConfig
    const url = '/matchmaking/namespaces/{namespace}/channels/{channelName}/metrics'
      .replace('{namespace}', this.namespace)
      .replace('{channelName}', channelName)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      TicketMetricResultRecord,
      'TicketMetricResultRecord'
    )
  }
  /**
   * Reads single channel based on namespace and channel name
   */
  getChannel_ByChannelName(channelName: string): Promise<Response<ChannelV1>> {
    const params = {} as AxiosRequestConfig
    const url = '/matchmaking/v1/public/namespaces/{namespace}/channels/{channelName}'
      .replace('{namespace}', this.namespace)
      .replace('{channelName}', channelName)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ChannelV1, 'ChannelV1')
  }
}
