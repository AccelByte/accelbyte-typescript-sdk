/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { ChannelRequest } from './definitions/ChannelRequest.js'
import { ChannelV1 } from './definitions/ChannelV1.js'
import { ChannelV1Array } from './definitions/ChannelV1Array.js'
import { CreateChannelResponse } from './definitions/CreateChannelResponse.js'
import { DequeueRequest } from './definitions/DequeueRequest.js'
import { GetChannelsResponse } from './definitions/GetChannelsResponse.js'
import { MatchResultRequest } from './definitions/MatchResultRequest.js'
import { MatchResultResponse } from './definitions/MatchResultResponse.js'
import { Matchmaking$ } from './endpoints/Matchmaking$.js'
import { MatchmakingResult } from './definitions/MatchmakingResult.js'
import { RebalanceRequest } from './definitions/RebalanceRequest.js'
import { RebalanceResponse } from './definitions/RebalanceResponse.js'
import { TicketMetricResultRecord } from './definitions/TicketMetricResultRecord.js'

export function MatchmakingApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:CHANNEL [READ] Required Scope: social Reads all available channels in a namespace
   */
  async function getChannels(queryParams?: { limit?: number; offset?: number }): Promise<GetChannelsResponse> {
    const $ = new Matchmaking$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getChannels(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:CHANNEL [CREATE] Required Scope: social Creates a new matchmaking channel. Matchmaking channels is a list of pool name that is eligible for matchmaking processes. GameMode isolates each matchmaking pools. If match timeout is set to 0, by default, incoming matchmaking requests will be timed out after 1 hour. If max worker delay is set to 0, by default, it will wait for at max ~8 seconds during low volume. Rule Set Matching Rule used to classify the player. Player that has matched criteria will be grouped together within an ally. Valid value for criteria is &#34;distance&#34;
   */
  async function createChannel(data: ChannelRequest): Promise<CreateChannelResponse> {
    const $ = new Matchmaking$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createChannel(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: NAMESPACE:{namespace}:SESSION [CREATE] Required Scope: social Queues joinable session so that it will be matched with player&#39;s match request tickets. The session queued must be in a channel/game mode that is set to have joinable flag. The session will be in queue until it is full or expired. Both the number of players and session queue timeout can be set in the channel&#39;s config. This endpoint is intended to be called by game server to let matchmaker know that the game server is ready for receiving more players through matchmaking tickets to its session. If a session is already queued, and game server wants to modify the data or renew the queue timeout (e.g. some player left and more empty slot opened up), simply call this endpoint with the updated session data.
   */
  async function createSession(data: MatchmakingResult): Promise<unknown> {
    const $ = new Matchmaking$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createSession(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:REBALANCE [Update] Required Scope: social Do rebalance the teams based on MMR from given matchID, consider attribute name &#34;mmr&#34; (case-insensitive), or any first attribute with criteria &#34;distance&#34; Will return rebalanced mm result
   */
  async function createRebalance(data: RebalanceRequest): Promise<RebalanceResponse> {
    const $ = new Matchmaking$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createRebalance(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHRESULT [CREATE] Required Scope: social Process match result into final attribute value and stores it to player attribute Will return final attribute value
   */
  async function createMatchresult(data: MatchResultRequest): Promise<MatchResultResponse> {
    const $ = new Matchmaking$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createMatchresult(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: NAMESPACE:{namespace}:SESSION [UPDATE] Required Scope: social Dequeues joinable session so that it will not be matched with player&#39;s match request tickets. This endpoint is intended to be called by game server to let matchmaker know that the game server does not want more players to its session, even though it is not full.
   */
  async function createSessionDequeue(data: DequeueRequest): Promise<unknown> {
    const $ = new Matchmaking$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createSessionDequeue(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:CHANNEL [Delete] Required Scope: social Deletes a matchmaking channel. Matchmaking channels is a list of pool name that is eligible for matchmaking processes. GameMode isolates each matchmaking pools. Trying to delete non-existent channel will result deletion success
   */
  async function deleteChannel_ByChannel(channel: string): Promise<unknown> {
    const $ = new Matchmaking$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteChannel_ByChannel(channel)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Reads all available channels in a namespace
   */
  async function getChannels_ByNS(): Promise<ChannelV1Array> {
    const $ = new Matchmaking$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getChannels_ByNS()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: NAMESPACE:{namespace}:SESSION [READ] Required Scope: social Queries the specified session&#39;s status. Game servers are expected to call this periodically as long as it has a session in queue to see if there are new players being matched to the session. Possible session statuses are &#34;sessionInQueue&#34;, &#34;sessionFull&#34;, and &#34;sessionTimeout&#34;. if party_id value empty/null, field will not show in response body.
   */
  async function getStatus_ByMatchId(matchID: string): Promise<MatchmakingResult> {
    const $ = new Matchmaking$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getStatus_ByMatchId(matchID)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:CHANNEL:METRICS [READ] Required Scope: social Get metric for a specific match pool Result: queue_time in seconds
   */
  async function getMetrics_ByChannelName(channelName: string): Promise<TicketMetricResultRecord> {
    const $ = new Matchmaking$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getMetrics_ByChannelName(channelName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Reads single channel based on namespace and channel name
   */
  async function getChannel_ByChannelName(channelName: string): Promise<ChannelV1> {
    const $ = new Matchmaking$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getChannel_ByChannelName(channelName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getChannels,
    createChannel,
    createSession,
    createRebalance,
    createMatchresult,
    createSessionDequeue,
    deleteChannel_ByChannel,
    getChannels_ByNS,
    getStatus_ByMatchId,
    getMetrics_ByChannelName,
    getChannel_ByChannelName
  }
}
