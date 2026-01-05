/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { ListServerResponse } from '../generated-definitions/ListServerResponse.js'
import { Public$ } from './endpoints/Public$.js'

export function PublicApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function getQos(): Promise<AxiosResponse<ListServerResponse>> {
    const $ = new Public$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getQos()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getQos_ByNS(queryParams?: { status?: string | null }): Promise<AxiosResponse<ListServerResponse>> {
    const $ = new Public$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getQos_ByNS(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * ``` This endpoint lists all QoS services available in all regions. This endpoint is intended to be called by game client to find out all available regions. After getting a list of QoS on each region, game client is expected to ping each one with UDP connection as described below: 1. Make UDP connection to each QoS&#39;s IP:Port 2. Send string &#34;PING&#34; after connection established 3. Wait for string &#34;PONG&#34; response 4. Note the request-response latency for each QoS in each region The game then can use ping latency information to either: 1. Inform the player on these latencies and let player choose preferred region 2. Send the latency list to Matchmaking Service so that player can be matched with other players in nearby regions ```
     */
    getQos,
    /**
     * ``` This endpoint lists all QoS services available in all regions. This endpoint is intended to be called by game client to find out all available regions. After getting a list of QoS on each region, game client is expected to ping each one with UDP connection as described below: 1. Make UDP connection to each QoS&#39;s IP:Port 2. Send string &#34;PING&#34; after connection established 3. Wait for string &#34;PONG&#34; response 4. Note the request-response latency for each QoS in each region The game then can use ping latency information to either: 1. Inform the player on these latencies and let player choose preferred region 2. Send the latency list to Matchmaking Service so that player can be matched with other players in nearby regions ```
     */
    getQos_ByNS
  }
}
