/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { MatchTicketsApi } from '../MatchTicketsApi.js'

import { MatchTicketRequest } from '../../generated-definitions/MatchTicketRequest.js'
import { MatchTicketResponse } from '../../generated-definitions/MatchTicketResponse.js'
import { MatchTicketStatus } from '../../generated-definitions/MatchTicketStatus.js'
import { MatchTicketStatuses } from '../../generated-definitions/MatchTicketStatuses.js'

export enum Key_MatchTickets {
  MatchTicket = 'Matchmaking.MatchTickets.MatchTicket',
  MatchTicketsMe = 'Matchmaking.MatchTickets.MatchTicketsMe',
  MatchTicket_ByTicketid = 'Matchmaking.MatchTickets.MatchTicket_ByTicketid'
}

/**
 * Creates a new request for matchmaking. Cross Platform: Allow player to play game with &#34;all&#34; registered platforms. 1. Cross Platform can be enabled through session service or create match ticket. a. via ticket: specify several cross_platform on create match ticket attributes. **[DEPRECATED]** client should not send from attribute &lt;code&gt;cross_platform&lt;/code&gt; will be populated from backend This value will override player attributes in session service. e.g. cross_platform:[xbox,psn,steam] b. via session service: set player/party cross_platform attributes. c. Enable match options ruleset with name cross_platform and type &#34;all&#34;. ``` { &#34;name&#34;: &#34;co-op&#34;, &#34;data&#34;: { &#34;alliance&#34;: { &#34;min_number&#34;: 1, &#34;max_number&#34;: 1, &#34;player_min_number&#34;: 1, &#34;player_max_number&#34;: 4 }, &#34;match_options&#34;: { &#34;options&#34;: [ {&#34;name&#34;: &#34;cross_platform&#34;, &#34;type&#34;: &#34;all&#34;} ] } } } ``` 2. Cross Platform can be disabled from the matchpool configuration &lt;code&gt;crossplay_disabled=true&lt;/code&gt; 3. When matchpool &lt;code&gt;crossplay_disabled=false&lt;/code&gt; * request attribute cross_platform is empty **[Recommended]**: * Matchmaking will consider Party leader &lt;code&gt;crossplayEnabled&lt;/code&gt; preference or Session attribute &lt;code&gt;crossplayEnabled&lt;/code&gt; preference. * When &lt;code&gt;crossplayEnabled=true&lt;/code&gt; &lt;code&gt;cross_platforms&lt;/code&gt; attributes will be populated from [active login methods](/iam/apidocs/#/Third%20Party%20Credential/RetrieveAllActiveThirdPartyLoginPlatformCredentialPublicV3) otherwise it will set to leader current platform * When &lt;code&gt;crossplayEnabled=false&lt;/code&gt; &lt;code&gt;cross_platforms&lt;/code&gt; attributes will be set to user&#39;s currentPlatform * request attribute cross_platform is not empty **[Not Recommended]**: * Cross Platform can be disabled with specify only ONE cross_platform. Current matchmaking use this behavior. e.g. cross_platform:[xbox] * Multiple cross_platform values is considered to be crossplay enabled 4. This behavior only works for Default Matchmaker. Custom matchmaker (custom gRPC matchmaker) need to consider this on its own implementation. ExcludedSessions: allow player to list out game sessions that they want to avoid matching, for example a match that they&#39;ve recently left or get kicked out from.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchTickets.MatchTicket, input]
 * }
 * ```
 */
export const useMatchTicketsApi_CreateMatchTicketMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<MatchTicketResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: MatchTicketRequest }>,
    'mutationKey'
  >,
  callback?: (data: MatchTicketResponse) => void
): UseMutationResult<MatchTicketResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: MatchTicketRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: MatchTicketRequest }) => {
    const response = await MatchTicketsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createMatchTicket(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_MatchTickets.MatchTicket],
    mutationFn,
    ...options
  })
}

/**
 * Get my match tickets.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchTickets.MatchTicketsMe, input]
 * }
 * ```
 */
export const useMatchTicketsApi_GetMatchTicketsMe = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; matchPool?: string | null; offset?: number } },
  options?: Omit<UseQueryOptions<MatchTicketStatuses, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MatchTicketStatuses>) => void
): UseQueryResult<MatchTicketStatuses, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMatchTicketsApi_GetMatchTicketsMe>[1]) => async () => {
    const response = await MatchTicketsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getMatchTicketsMe(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<MatchTicketStatuses, AxiosError<ApiError>>({
    queryKey: [Key_MatchTickets.MatchTicketsMe, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Deletes an existing matchmaking ticket.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchTickets.MatchTicket_ByTicketid, input]
 * }
 * ```
 */
export const useMatchTicketsApi_DeleteMatchTicket_ByTicketidMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { ticketid: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { ticketid: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { ticketid: string }) => {
    const response = await MatchTicketsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteMatchTicket_ByTicketid(input.ticketid)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_MatchTickets.MatchTicket_ByTicketid],
    mutationFn,
    ...options
  })
}

/**
 * Get details for a specific match ticket
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchTickets.MatchTicket_ByTicketid, input]
 * }
 * ```
 */
export const useMatchTicketsApi_GetMatchTicket_ByTicketid = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { ticketid: string },
  options?: Omit<UseQueryOptions<MatchTicketStatus, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<MatchTicketStatus>) => void
): UseQueryResult<MatchTicketStatus, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMatchTicketsApi_GetMatchTicket_ByTicketid>[1]) => async () => {
    const response = await MatchTicketsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getMatchTicket_ByTicketid(
      input.ticketid
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<MatchTicketStatus, AxiosError<ApiError>>({
    queryKey: [Key_MatchTickets.MatchTicket_ByTicketid, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
