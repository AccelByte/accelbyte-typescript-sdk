/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { ChannelV1 } from '../generated-definitions/ChannelV1.js'
import { ImportConfigResponse } from '../generated-definitions/ImportConfigResponse.js'
import { MatchAddUserIntoSessionRequest } from '../generated-definitions/MatchAddUserIntoSessionRequest.js'
import { MatchingPartyArray } from '../generated-definitions/MatchingPartyArray.js'
import { MatchmakingAdmin$ } from './endpoints/MatchmakingAdmin$.js'
import { MatchmakingResultArray } from '../generated-definitions/MatchmakingResultArray.js'
import { StatResumeResponse } from '../generated-definitions/StatResumeResponse.js'
import { UpdateChannelRequest } from '../generated-definitions/UpdateChannelRequest.js'

export function MatchmakingAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Export channels configuration to file. Action Code: 510114
   */
  async function getChannelsExport(): Promise<unknown> {
    const $ = new MatchmakingAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getChannelsExport()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Import channels configuration from file. It will merge with existing channels. Available import strategy: - leaveOut: if channel with same key exist, the existing will be used and imported one will be ignored (default) - replace: if channel with same key exist, the imported channel will be used and existing one will be removed Action Code: 510113
   */
  async function createChannelImport(data: { file?: File; strategy?: string | null }): Promise<ImportConfigResponse> {
    const $ = new MatchmakingAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createChannelImport(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get all parties queueing in all channels.
   */
  async function getChannelsAllParties(): Promise<unknown> {
    const $ = new MatchmakingAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getChannelsAllParties()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Reads single channel based on namespace and channel name Action Code: 510112
   */
  async function getChannel_ByChannelName(channelName: string): Promise<ChannelV1> {
    const $ = new MatchmakingAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getChannel_ByChannelName(channelName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update channel based on namespace and channel name Action Code: 510111
   */
  async function patchChannel_ByChannelName(channelName: string, data: UpdateChannelRequest): Promise<unknown> {
    const $ = new MatchmakingAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchChannel_ByChannelName(channelName, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Bulk get sessions.
   */
  async function getChannelsAllSessionsBulk(queryParams?: { matchIDs?: string | null }): Promise<MatchmakingResultArray> {
    const $ = new MatchmakingAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getChannelsAllSessionsBulk(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  Get a channel&#39;s stat data (mean, stddev, min, max) according to the stats collected from statistics service. &#39;
   */
  async function getStats_ByChannelName(channelName: string): Promise<StatResumeResponse> {
    const $ = new MatchmakingAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getStats_ByChannelName(channelName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get all parties queueing in a channel.
   */
  async function getParties_ByChannelName(channelName: string): Promise<MatchingPartyArray> {
    const $ = new MatchmakingAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getParties_ByChannelName(channelName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get all sessions in a channel. if party_id value empty/null, field will not show in response body.
   */
  async function getSessions_ByChannelName(channelName: string): Promise<MatchmakingResultArray> {
    const $ = new MatchmakingAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getSessions_ByChannelName(channelName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete a session in a channel.
   */
  async function deleteSession_ByChannelName_ByMatchId(channelName: string, matchID: string): Promise<unknown> {
    const $ = new MatchmakingAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteSession_ByChannelName_ByMatchId(channelName, matchID)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Add user into the session in a channel.
   */
  async function createSession_ByChannelName_ByMatchId(
    channelName: string,
    matchID: string,
    data: MatchAddUserIntoSessionRequest
  ): Promise<unknown> {
    const $ = new MatchmakingAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createSession_ByChannelName_ByMatchId(channelName, matchID, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete a user from a session in the channel.
   */
  async function deleteUser_ByChannelName_ByMatchId_ByUserId(channelName: string, matchID: string, userID: string): Promise<unknown> {
    const $ = new MatchmakingAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteUser_ByChannelName_ByMatchId_ByUserId(channelName, matchID, userID)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getChannelsExport,
    createChannelImport,
    getChannelsAllParties,
    getChannel_ByChannelName,
    patchChannel_ByChannelName,
    getChannelsAllSessionsBulk,
    getStats_ByChannelName,
    getParties_ByChannelName,
    getSessions_ByChannelName,
    deleteSession_ByChannelName_ByMatchId,
    createSession_ByChannelName_ByMatchId,
    deleteUser_ByChannelName_ByMatchId_ByUserId
  }
}
