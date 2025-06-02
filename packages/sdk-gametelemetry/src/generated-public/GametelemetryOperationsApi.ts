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
import { PlayTimeResponse } from '../generated-definitions/PlayTimeResponse.js'
import { TelemetryBody } from '../generated-definitions/TelemetryBody.js'
import { GametelemetryOperations$ } from './endpoints/GametelemetryOperations$.js'

export function GametelemetryOperationsApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function createProtectedEvent(data: TelemetryBody[]): Promise<AxiosResponse<unknown>> {
    const $ = new GametelemetryOperations$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createProtectedEvent(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPlaytimeProtected_BySteamId(steamId: string): Promise<AxiosResponse<PlayTimeResponse>> {
    const $ = new GametelemetryOperations$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlaytimeProtected_BySteamId(steamId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePlaytimeProtected_BySteamId_ByPlaytime(steamId: string, playtime: string): Promise<AxiosResponse<PlayTimeResponse>> {
    const $ = new GametelemetryOperations$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePlaytimeProtected_BySteamId_ByPlaytime(steamId, playtime)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This endpoint requires valid JWT token. This endpoint does not require permission. This endpoint send events into designated streaming pipeline and each request can contain single or multiple events. &lt;p&gt; Format of the event: - **EventNamespace (required)**: Namespace of the relevant game with domain name format. &lt;p&gt; Only accept input with valid characters. Allowed characters: &lt;b&gt;Aa-Zz0-9_.-&lt;/b&gt; &lt;p&gt; &lt;p&gt; It is encouraged to use alphanumeric only characters. &lt;b&gt;_.-&lt;/b&gt; will be deprecated soon &lt;p&gt; &lt;p&gt; Example: accelbyte &lt;/p&gt; - **EventName (required)**: Name of the event. &lt;p&gt; Only accept input with valid characters. Allowed characters: &lt;b&gt;Aa-Zz0-9_.-&lt;/b&gt; &lt;p&gt; &lt;p&gt; It is encouraged to use alphanumeric only characters. &lt;b&gt;_.-&lt;/b&gt; will be deprecated soon &lt;p&gt; &lt;p&gt; Example: player_killed, mission_accomplished &lt;/p&gt; - **Payload (required)**: An arbitrary json with the payload of the said event. &lt;p&gt; Default maximum payload size is &lt;b&gt;1MB&lt;/b&gt; &lt;p&gt; - **ClientTimestamp (optional)**: Timestamp of the event captured by the client SDK. - **DeviceType (optional)**: The device type of the user.
     */
    createProtectedEvent,
    /**
     * This endpoint requires valid JWT token. This endpoint does not require permission. This endpoint retrieves player&#39;s total playtime in Steam for a specific game (AppId) and store them in service&#39;s cache. Players&#39; Steam account must be set into public to enable the service fetch their total playtime data.
     */
    getPlaytimeProtected_BySteamId,
    /**
     * This endpoint requires valid JWT token. This endpoint does not require permission. This endpoint update player&#39;s total playtime in a specific game (AppId) from service&#39;s cache.
     */
    updatePlaytimeProtected_BySteamId_ByPlaytime
  }
}
