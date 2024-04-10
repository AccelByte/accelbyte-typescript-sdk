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
import { MatchTicketRequest } from '../generated-definitions/MatchTicketRequest.js'
import { MatchTicketResponse } from '../generated-definitions/MatchTicketResponse.js'
import { MatchTicketStatus } from '../generated-definitions/MatchTicketStatus.js'
import { MatchTicketStatuses } from '../generated-definitions/MatchTicketStatuses.js'
import { MatchTickets$ } from './endpoints/MatchTickets$.js'

export function MatchTicketsApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Creates a new request for matchmaking. Cross Platform: Allow player to play game with &#34;all&#34; registered platforms. 1. Cross Platform can be enabled through session service or create match ticket. a. via ticket: specify several cross_platform on create match ticket attributes. **[DEPRECATED]** client should not send from attribute &lt;code&gt;cross_platform&lt;/code&gt; will be populated from backend This value will override player attributes in session service. e.g. cross_platform:[xbox,psn,steam] b. via session service: set player/party cross_platform attributes. c. Enable match options ruleset with name cross_platform and type &#34;all&#34;. ``` { &#34;name&#34;: &#34;co-op&#34;, &#34;data&#34;: { &#34;alliance&#34;: { &#34;min_number&#34;: 1, &#34;max_number&#34;: 1, &#34;player_min_number&#34;: 1, &#34;player_max_number&#34;: 4 }, &#34;match_options&#34;: { &#34;options&#34;: [ {&#34;name&#34;: &#34;cross_platform&#34;, &#34;type&#34;: &#34;all&#34;} ] } } } ``` 2. Cross Platform can be disabled from the matchpool configuration &lt;code&gt;crossplay_disabled=true&lt;/code&gt; 3. When matchpool &lt;code&gt;crossplay_disabled=false&lt;/code&gt; * request attribute cross_platform is empty **[Recommended]**: * Matchmaking will consider Party leader &lt;code&gt;crossplayEnabled&lt;/code&gt; preference or Session attribute &lt;code&gt;crossplayEnabled&lt;/code&gt; preference. * When &lt;code&gt;crossplayEnabled=true&lt;/code&gt; &lt;code&gt;cross_platforms&lt;/code&gt; attributes will be populated from [active login methods](/iam/apidocs/#/Third%20Party%20Credential/RetrieveAllActiveThirdPartyLoginPlatformCredentialPublicV3) otherwise it will set to leader current platform * When &lt;code&gt;crossplayEnabled=false&lt;/code&gt; &lt;code&gt;cross_platforms&lt;/code&gt; attributes will be set to user&#39;s currentPlatform * request attribute cross_platform is not empty **[Not Recommended]**: * Cross Platform can be disabled with specify only ONE cross_platform. Current matchmaking use this behavior. e.g. cross_platform:[xbox] * Multiple cross_platform values is considered to be crossplay enabled 4. This behavior only works for Default Matchmaker. Custom matchmaker (custom gRPC matchmaker) need to consider this on its own implementation.
   */
  async function createMatchTicket(data: MatchTicketRequest): Promise<MatchTicketResponse> {
    const $ = new MatchTickets$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createMatchTicket(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get my match tickets.
   */
  async function getMatchTicketsMe(queryParams?: {
    limit?: number
    matchPool?: string | null
    offset?: number
  }): Promise<MatchTicketStatuses> {
    const $ = new MatchTickets$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getMatchTicketsMe(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Deletes an existing matchmaking ticket.
   */
  async function deleteMatchTicket_ByTicketid(ticketid: string): Promise<unknown> {
    const $ = new MatchTickets$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteMatchTicket_ByTicketid(ticketid)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get details for a specific match ticket
   */
  async function getMatchTicket_ByTicketid(ticketid: string): Promise<MatchTicketStatus> {
    const $ = new MatchTickets$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getMatchTicket_ByTicketid(ticketid)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createMatchTicket,
    getMatchTicketsMe,
    deleteMatchTicket_ByTicketid,
    getMatchTicket_ByTicketid
  }
}
