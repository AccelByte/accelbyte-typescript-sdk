/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { PublicApi } from '../PublicApi.js'

import { ListServerResponse } from '../../generated-definitions/ListServerResponse.js'

export enum Key_Public {
  Qos = 'Qosmanager.Public.Qos',
  Qos_ByNS = 'Qosmanager.Public.Qos_ByNS'
}

/**
 * ``` This endpoint lists all QoS services available in all regions. This endpoint is intended to be called by game client to find out all available regions. After getting a list of QoS on each region, game client is expected to ping each one with UDP connection as described below: 1. Make UDP connection to each QoS&#39;s IP:Port 2. Send string &#34;PING&#34; after connection established 3. Wait for string &#34;PONG&#34; response 4. Note the request-response latency for each QoS in each region The game then can use ping latency information to either: 1. Inform the player on these latencies and let player choose preferred region 2. Send the latency list to Matchmaking Service so that player can be matched with other players in nearby regions ```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Public.Qos, input]
 * }
 * ```
 */
export const usePublicApi_GetQos = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ListServerResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListServerResponse>) => void
): UseQueryResult<ListServerResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicApi_GetQos>[1]) => async () => {
    const response = await PublicApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getQos()
    callback && callback(response)
    return response.data
  }

  return useQuery<ListServerResponse, AxiosError<ApiError>>({
    queryKey: [Key_Public.Qos, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * ``` This endpoint lists all QoS services available in all regions. This endpoint is intended to be called by game client to find out all available regions. After getting a list of QoS on each region, game client is expected to ping each one with UDP connection as described below: 1. Make UDP connection to each QoS&#39;s IP:Port 2. Send string &#34;PING&#34; after connection established 3. Wait for string &#34;PONG&#34; response 4. Note the request-response latency for each QoS in each region The game then can use ping latency information to either: 1. Inform the player on these latencies and let player choose preferred region 2. Send the latency list to Matchmaking Service so that player can be matched with other players in nearby regions ```
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Public.Qos_ByNS, input]
 * }
 * ```
 */
export const usePublicApi_GetQos_ByNS = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { status?: string | null } },
  options?: Omit<UseQueryOptions<ListServerResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListServerResponse>) => void
): UseQueryResult<ListServerResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePublicApi_GetQos_ByNS>[1]) => async () => {
    const response = await PublicApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getQos_ByNS(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ListServerResponse, AxiosError<ApiError>>({
    queryKey: [Key_Public.Qos_ByNS, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
