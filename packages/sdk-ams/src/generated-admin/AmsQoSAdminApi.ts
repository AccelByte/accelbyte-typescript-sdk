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
import { QoSEndpointResponse } from '../generated-definitions/QoSEndpointResponse.js'
import { UpdateServerRequest } from '../generated-definitions/UpdateServerRequest.js'
import { AmsQoSAdmin$ } from './endpoints/AmsQoSAdmin$.js'

export function AmsQoSAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getQos(queryParams?: { status?: string | null }): Promise<AxiosResponse<QoSEndpointResponse>> {
    const $ = new AmsQoSAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getQos(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchQo_ByRegion(region: string, data: UpdateServerRequest): Promise<AxiosResponse<unknown>> {
    const $ = new AmsQoSAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchQo_ByRegion(region, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * ``` Required Permission: ADMIN:NAMESPACE:{namespace}:QOS:SERVER [READ] This endpoint lists all QoS services available in all regions. This endpoint is intended to be called by game client to find out all available regions. After getting a list of QoS on each region, game client is expected to ping each one with UDP connection as described below: 1. Make UDP connection to each QoS&#39;s IP:Port 2. Send string &#34;PING&#34; after connection established 3. Wait for string &#34;PONG&#34; response 4. Note the request-response latency for each QoS in each region The game then can use ping latency information to either: 1. Inform the player on these latencies and let player choose preferred region 2. Send the latency list to Matchmaking Service so that player can be matched with other players in nearby regions
     */
    getQos,
    /**
     * ``` Required Permission: ADMIN:NAMESPACE:{namespace}:QOS:SERVER [UPDATE] This endpoint updates the registered QoS service&#39;s configurable configuration.
     */
    patchQo_ByRegion
  }
}
