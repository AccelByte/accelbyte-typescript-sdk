/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
import { CreateMockTicket } from '../generated-definitions/CreateMockTicket.js'
import { GetMockMatchesResponse } from '../generated-definitions/GetMockMatchesResponse.js'
import { GetMockTicketsResponse } from '../generated-definitions/GetMockTicketsResponse.js'
import { MatchingParty } from '../generated-definitions/MatchingParty.js'
import { MockTicketArray } from '../generated-definitions/MockTicketArray.js'
import { QueryMockBy } from '../generated-definitions/QueryMockBy.js'
import { MockMatchmakingAdmin$ } from './endpoints/MockMatchmakingAdmin$.js'

export function MockMatchmakingAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function deleteMock_ByChannelName(channelName: string): Promise<AxiosResponse<unknown>> {
    const $ = new MockMatchmakingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteMock_ByChannelName(channelName)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getMocksMatches_ByChannelName(channelName: string): Promise<AxiosResponse<GetMockMatchesResponse>> {
    const $ = new MockMatchmakingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMocksMatches_ByChannelName(channelName)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function fetchMockMatche_ByChannelName(channelName: string, data: QueryMockBy): Promise<AxiosResponse<GetMockMatchesResponse>> {
    const $ = new MockMatchmakingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchMockMatche_ByChannelName(channelName, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getMocksTickets_ByChannelName(channelName: string): Promise<AxiosResponse<GetMockTicketsResponse>> {
    const $ = new MockMatchmakingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMocksTickets_ByChannelName(channelName)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createMockTicket_ByChannelName(channelName: string, data: CreateMockTicket): Promise<AxiosResponse<MockTicketArray>> {
    const $ = new MockMatchmakingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createMockTicket_ByChannelName(channelName, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createMockTicketBulk_ByChannelName(channelName: string, data: MatchingParty[]): Promise<AxiosResponse<unknown>> {
    const $ = new MockMatchmakingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createMockTicketBulk_ByChannelName(channelName, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function fetchMockTicketQuery_ByChannelName(
    channelName: string,
    data: QueryMockBy
  ): Promise<AxiosResponse<GetMockTicketsResponse>> {
    const $ = new MockMatchmakingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchMockTicketQuery_ByChannelName(channelName, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     *  Delete all mock tickets and matches in a channel. &#39;
     */
    deleteMock_ByChannelName,
    /**
     *  Read all mock matches in a channel resulted from matching mock tickets. &#39;
     */
    getMocksMatches_ByChannelName,
    /**
     *  Read mock matches that has timestamp older than specified timestamp in a channel resulted from matching mock tickets. &#39;
     */
    fetchMockMatche_ByChannelName,
    /**
     *  Read all mock tickets in a channel. &#39;
     */
    getMocksTickets_ByChannelName,
    /**
     *  Create and queue mock tickets into specified game mode&#39;s pool. Ticket&#39;s MMRs will be randomized using Normal distribution according to the input mean and standard deviation. All mock tickets and matches will be cleaned up automatically after 1 day. &#39;
     */
    createMockTicket_ByChannelName,
    /**
     *  Create and queue mock tickets into specified game mode&#39;s pool. The tickets input will be used as is. &#39;
     */
    createMockTicketBulk_ByChannelName,
    /**
     *  Read mock tickets after the specified timestamp in a channel. &#39;
     */
    fetchMockTicketQuery_ByChannelName
  }
}
