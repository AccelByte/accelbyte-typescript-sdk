/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { CreateMockTicket } from '../../generated-definitions/CreateMockTicket.js'
import { GetMockMatchesResponse } from '../../generated-definitions/GetMockMatchesResponse.js'
import { GetMockTicketsResponse } from '../../generated-definitions/GetMockTicketsResponse.js'
import { MatchingParty } from '../../generated-definitions/MatchingParty.js'
import { MockTicketArray } from '../../generated-definitions/MockTicketArray.js'
import { QueryMockBy } from '../../generated-definitions/QueryMockBy.js'

export class MockMatchmakingAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   *  Delete all mock tickets and matches in a channel. &#39;
   */
  deleteMock_ByChannelName(channelName: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/{channelName}/mocks'
      .replace('{namespace}', this.namespace)
      .replace('{channelName}', channelName)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   *  Read all mock matches in a channel resulted from matching mock tickets. &#39;
   */
  getMocksMatches_ByChannelName(channelName: string): Promise<IResponse<GetMockMatchesResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/{channelName}/mocks/matches'
      .replace('{namespace}', this.namespace)
      .replace('{channelName}', channelName)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetMockMatchesResponse,
      'GetMockMatchesResponse'
    )
  }

  /**
   *  Read mock matches that has timestamp older than specified timestamp in a channel resulted from matching mock tickets. &#39;
   */
  createMockMatche_ByChannelName(channelName: string, data: QueryMockBy): Promise<IResponse<GetMockMatchesResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/{channelName}/mocks/matches'
      .replace('{namespace}', this.namespace)
      .replace('{channelName}', channelName)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetMockMatchesResponse,
      'GetMockMatchesResponse'
    )
  }

  /**
   *  Read all mock tickets in a channel. &#39;
   */
  getMocksTickets_ByChannelName(channelName: string): Promise<IResponse<GetMockTicketsResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/{channelName}/mocks/tickets'
      .replace('{namespace}', this.namespace)
      .replace('{channelName}', channelName)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetMockTicketsResponse,
      'GetMockTicketsResponse'
    )
  }

  /**
   *  Create and queue mock tickets into specified game mode&#39;s pool. Ticket&#39;s MMRs will be randomized using Normal distribution according to the input mean and standard deviation. All mock tickets and matches will be cleaned up automatically after 1 day. &#39;
   */
  createMockTicket_ByChannelName(channelName: string, data: CreateMockTicket): Promise<IResponse<MockTicketArray>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/{channelName}/mocks/tickets'
      .replace('{namespace}', this.namespace)
      .replace('{channelName}', channelName)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MockTicketArray, 'MockTicketArray')
  }

  /**
   *  Create and queue mock tickets into specified game mode&#39;s pool. The tickets input will be used as is. &#39;
   */
  createMockTicketBulk_ByChannelName(channelName: string, data: MatchingParty[]): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/{channelName}/mocks/tickets/bulk'
      .replace('{namespace}', this.namespace)
      .replace('{channelName}', channelName)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   *  Read mock tickets after the specified timestamp in a channel. &#39;
   */
  createMockTicketQuery_ByChannelName(channelName: string, data: QueryMockBy): Promise<IResponse<GetMockTicketsResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/matchmaking/v1/admin/namespaces/{namespace}/channels/{channelName}/mocks/tickets/query'
      .replace('{namespace}', this.namespace)
      .replace('{channelName}', channelName)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetMockTicketsResponse,
      'GetMockTicketsResponse'
    )
  }
}
