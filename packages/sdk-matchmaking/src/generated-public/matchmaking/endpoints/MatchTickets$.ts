/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { MatchTicketRequest } from '../definitions/MatchTicketRequest.js'
import { MatchTicketResponse } from '../definitions/MatchTicketResponse.js'
import { MatchTicketStatus } from '../definitions/MatchTicketStatus.js'

export class MatchTickets$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:TICKET [CREATE] Required Scope: social Creates a new request for matchmaking. Cross Platform: Allow player to play game with "any" registered plaftforms. 1. Cross Platform can be enabled through session service or create match ticket. a. via ticket: specify several cross_platform on create match ticket attributes. This value will override player attributes in session service. e.g. cross_platform:[xbox,psn,steam] b. via session service: set player/party cross_platform attributes. c. Enable match options ruleset with name cross_platform and type "any". { "name": "co-op", "data": { "alliance": { "min_number": 1, "max_number": 1, "player_min_number": 1, "player_max_number": 4 }, "match_options": { "options": [ {“name”: “cross_platform”, “type”: “any”} ] } } } 2. Cross Platform can be disabled with specify only ONE cross_platform. Current matchmaking use this behavior. e.g. cross_platform:[xbox] 3. Matchmaking will consider Party leader cross_platform preference or Session attribute cross_platform preference. 4. This behavior only works for Default Matchmaker. Custom matchmaker (custom gRPC matchmaker) need to consider this on its own implementation.
   */
  createMatchTicket(data: MatchTicketRequest): Promise<IResponse<MatchTicketResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-tickets'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, MatchTicketResponse, 'MatchTicketResponse')
  }

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:TICKET [READ] Required Scope: social Get details for a specific match ticket
   */
  getMatchTicket_ByTicketid(ticketid: string): Promise<IResponseWithSync<MatchTicketStatus>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-tickets/{ticketid}'
      .replace('{namespace}', this.namespace)
      .replace('{ticketid}', ticketid)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, MatchTicketStatus, 'MatchTicketStatus')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required Permission: NAMESPACE:{namespace}:MATCHMAKING:TICKET [DELETE] Required Scope: social Deletes an existing matchmaking ticket.
   */
  deleteMatchTicket_ByTicketid(ticketid: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/match-tickets/{ticketid}'
      .replace('{namespace}', this.namespace)
      .replace('{ticketid}', ticketid)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
