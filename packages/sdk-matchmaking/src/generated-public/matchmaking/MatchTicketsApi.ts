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
import { MatchTicketRequest } from './definitions/MatchTicketRequest'
import { MatchTicketResponse } from './definitions/MatchTicketResponse'
import { MatchTicketStatus } from './definitions/MatchTicketStatus'
import { MatchTickets$ } from './endpoints/MatchTickets$'

export function MatchTicketsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:TICKET [CREATE] Required Scope: social Creates a new request for matchmaking. Cross Platform: Allow player to play game with "any" registered plaftforms. 1. Cross Platform can be enabled through session service or create match ticket. a. via ticket: specify several cross_platform on create match ticket attributes. This value will override player attributes in session service. e.g. cross_platform:[xbox,psn,steam] b. via session service: set player/party cross_platform attributes. c. Enable match options ruleset with name cross_platform and type "any". { "name": "co-op", "data": { "alliance": { "min_number": 1, "max_number": 1, "player_min_number": 1, "player_max_number": 4 }, "match_options": { "options": [ {“name”: “cross_platform”, “type”: “any”} ] } } } 2. Cross Platform can be disabled with specify only ONE cross_platform. Current matchmaking use this behavior. e.g. cross_platform:[xbox] 3. Matchmaking will consider Party leader cross_platform preference or Session attribute cross_platform preference. 4. This behavior only works for Default Matchmaker. Custom matchmaker (custom gRPC matchmaker) need to consider this on its own implementation.
   */
  async function createMatchTicket(data: MatchTicketRequest): Promise<MatchTicketResponse> {
    const $ = new MatchTickets$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createMatchTicket(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:TICKET [READ] Required Scope: social Get details for a specific match ticket
   */
  async function getMatchTicket_ByTicketid(ticketid: string): Promise<MatchTicketStatus> {
    const $ = new MatchTickets$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getMatchTicket_ByTicketid(ticketid)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:TICKET [DELETE] Required Scope: social Deletes an existing matchmaking ticket.
   */
  async function deleteMatchTicket_ByTicketid(ticketid: string): Promise<unknown> {
    const $ = new MatchTickets$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteMatchTicket_ByTicketid(ticketid)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createMatchTicket,
    getMatchTicket_ByTicketid,
    deleteMatchTicket_ByTicketid
  }
}
