/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { MatchTicketRequest } from '../../generated-definitions/MatchTicketRequest.js'
import { MatchTicketResponse } from '../../generated-definitions/MatchTicketResponse.js'
import { MatchTicketStatus } from '../../generated-definitions/MatchTicketStatus.js'
import { MatchTicketStatuses } from '../../generated-definitions/MatchTicketStatuses.js'

export class MatchTickets$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Creates a new request for matchmaking. Cross Platform: Allow player to play game with &#34;all&#34; registered platforms. 1. Cross Platform can be enabled through session service or create match ticket. a. via ticket: specify several cross_platform on create match ticket attributes. **[DEPRECATED]** client should not send from attribute &lt;code&gt;cross_platform&lt;/code&gt; will be populated from backend This value will override player attributes in session service. e.g. cross_platform:[xbox,psn,steam] b. via session service: set player/party cross_platform attributes. c. Enable match options ruleset with name cross_platform and type &#34;all&#34;. ``` { &#34;name&#34;: &#34;co-op&#34;, &#34;data&#34;: { &#34;alliance&#34;: { &#34;min_number&#34;: 1, &#34;max_number&#34;: 1, &#34;player_min_number&#34;: 1, &#34;player_max_number&#34;: 4 }, &#34;match_options&#34;: { &#34;options&#34;: [ {&#34;name&#34;: &#34;cross_platform&#34;, &#34;type&#34;: &#34;all&#34;} ] } } } ``` 2. Cross Platform can be disabled from the matchpool configuration &lt;code&gt;crossplay_disabled=true&lt;/code&gt; 3. When matchpool &lt;code&gt;crossplay_disabled=false&lt;/code&gt; * request attribute cross_platform is empty **[Recommended]**: * Matchmaking will consider Party leader &lt;code&gt;crossplayEnabled&lt;/code&gt; preference or Session attribute &lt;code&gt;crossplayEnabled&lt;/code&gt; preference. * When &lt;code&gt;crossplayEnabled=true&lt;/code&gt; &lt;code&gt;cross_platforms&lt;/code&gt; attributes will be populated from [active login methods](/iam/apidocs/#/Third%20Party%20Credential/RetrieveAllActiveThirdPartyLoginPlatformCredentialPublicV3) otherwise it will set to leader current platform * When &lt;code&gt;crossplayEnabled=false&lt;/code&gt; &lt;code&gt;cross_platforms&lt;/code&gt; attributes will be set to user&#39;s currentPlatform * request attribute cross_platform is not empty **[Not Recommended]**: * Cross Platform can be disabled with specify only ONE cross_platform. Current matchmaking use this behavior. e.g. cross_platform:[xbox] * Multiple cross_platform values is considered to be crossplay enabled 4. This behavior only works for Default Matchmaker. Custom matchmaker (custom gRPC matchmaker) need to consider this on its own implementation. ExcludedSessions: allow player to list out game sessions that they want to avoid matching, for example a match that they&#39;ve recently left or get kicked out from.
   */
  createMatchTicket(data: MatchTicketRequest): Promise<Response<MatchTicketResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-tickets'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MatchTicketResponse, 'MatchTicketResponse')
  }
  /**
   * Get my match tickets.
   */
  getMatchTicketsMe(queryParams?: { limit?: number; matchPool?: string | null; offset?: number }): Promise<Response<MatchTicketStatuses>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-tickets/me'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MatchTicketStatuses, 'MatchTicketStatuses')
  }
  /**
   * Deletes an existing matchmaking ticket.
   */
  deleteMatchTicket_ByTicketid(ticketid: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-tickets/{ticketid}'
      .replace('{namespace}', this.namespace)
      .replace('{ticketid}', ticketid)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get details for a specific match ticket
   */
  getMatchTicket_ByTicketid(ticketid: string): Promise<Response<MatchTicketStatus>> {
    const params = {} as AxiosRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-tickets/{ticketid}'
      .replace('{namespace}', this.namespace)
      .replace('{ticketid}', ticketid)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MatchTicketStatus, 'MatchTicketStatus')
  }
}
