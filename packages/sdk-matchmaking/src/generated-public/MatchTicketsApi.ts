/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { MatchTicketRequest } from '../generated-definitions/MatchTicketRequest.js'
import { MatchTicketResponse } from '../generated-definitions/MatchTicketResponse.js'
import { MatchTicketStatus } from '../generated-definitions/MatchTicketStatus.js'
import { MatchTicketStatuses } from '../generated-definitions/MatchTicketStatuses.js'
import { MatchTickets$ } from './endpoints/MatchTickets$.js'

export function MatchTicketsApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function createMatchTicket(data: MatchTicketRequest): Promise<AxiosResponse<MatchTicketResponse>> {
    const $ = new MatchTickets$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createMatchTicket(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getMatchTicketsMe(queryParams?: {
    limit?: number
    matchPool?: string | null
    offset?: number
  }): Promise<AxiosResponse<MatchTicketStatuses>> {
    const $ = new MatchTickets$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMatchTicketsMe(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteMatchTicket_ByTicketid(ticketid: string): Promise<AxiosResponse<unknown>> {
    const $ = new MatchTickets$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteMatchTicket_ByTicketid(ticketid)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getMatchTicket_ByTicketid(ticketid: string): Promise<AxiosResponse<MatchTicketStatus>> {
    const $ = new MatchTickets$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMatchTicket_ByTicketid(ticketid)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Creates a new request for matchmaking. Cross Platform: Allow player to play game with &#34;all&#34; registered platforms. 1. Cross Platform can be enabled through session service or create match ticket. a. via ticket: specify several cross_platform on create match ticket attributes. **[DEPRECATED]** client should not send from attribute &lt;code&gt;cross_platform&lt;/code&gt; will be populated from backend This value will override player attributes in session service. e.g. cross_platform:[xbox,psn,steam] b. via session service: set player/party cross_platform attributes. c. Enable match options ruleset with name cross_platform and type &#34;all&#34;. ``` { &#34;name&#34;: &#34;co-op&#34;, &#34;data&#34;: { &#34;alliance&#34;: { &#34;min_number&#34;: 1, &#34;max_number&#34;: 1, &#34;player_min_number&#34;: 1, &#34;player_max_number&#34;: 4 }, &#34;match_options&#34;: { &#34;options&#34;: [ {&#34;name&#34;: &#34;cross_platform&#34;, &#34;type&#34;: &#34;all&#34;} ] } } } ``` 2. Cross Platform can be disabled from the matchpool configuration &lt;code&gt;crossplay_disabled=true&lt;/code&gt; 3. When matchpool &lt;code&gt;crossplay_disabled=false&lt;/code&gt; * request attribute cross_platform is empty **[Recommended]**: * Matchmaking will consider Party leader &lt;code&gt;crossplayEnabled&lt;/code&gt; preference or Session attribute &lt;code&gt;crossplayEnabled&lt;/code&gt; preference. * When &lt;code&gt;crossplayEnabled=true&lt;/code&gt; &lt;code&gt;cross_platforms&lt;/code&gt; attributes will be populated from [active login methods](/iam/apidocs/#/Third%20Party%20Credential/RetrieveAllActiveThirdPartyLoginPlatformCredentialPublicV3) otherwise it will set to leader current platform * When &lt;code&gt;crossplayEnabled=false&lt;/code&gt; &lt;code&gt;cross_platforms&lt;/code&gt; attributes will be set to user&#39;s currentPlatform * request attribute cross_platform is not empty **[Not Recommended]**: * Cross Platform can be disabled with specify only ONE cross_platform. Current matchmaking use this behavior. e.g. cross_platform:[xbox] * Multiple cross_platform values is considered to be crossplay enabled 4. This behavior only works for Default Matchmaker. Custom matchmaker (custom gRPC matchmaker) need to consider this on its own implementation. ExcludedSessions: allow player to list out game sessions that they want to avoid matching, for example a match that they&#39;ve recently left or get kicked out from.
     */
    createMatchTicket,
    /**
     * Get my match tickets.
     */
    getMatchTicketsMe,
    /**
     * Deletes an existing matchmaking ticket.
     */
    deleteMatchTicket_ByTicketid,
    /**
     * Get details for a specific match ticket
     */
    getMatchTicket_ByTicketid
  }
}
