/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { PlayTimeResponse } from '../../generated-definitions/PlayTimeResponse.js'
import { TelemetryBody } from '../../generated-definitions/TelemetryBody.js'

export class GametelemetryOperations$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This endpoint requires valid JWT token. This endpoint does not require permission. This endpoint send events into designated streaming pipeline and each request can contain single or multiple events. &lt;p&gt; Format of the event: - **EventNamespace (required)**: Namespace of the relevant game with domain name format. &lt;p&gt; Only accept input with valid characters. Allowed characters: &lt;b&gt;Aa-Zz0-9_.-&lt;/b&gt; &lt;p&gt; &lt;p&gt; It is encouraged to use alphanumeric only characters. &lt;b&gt;_.-&lt;/b&gt; will be deprecated soon &lt;p&gt; &lt;p&gt; Example: accelbyte &lt;/p&gt; - **EventName (required)**: Name of the event. &lt;p&gt; Only accept input with valid characters. Allowed characters: &lt;b&gt;Aa-Zz0-9_.-&lt;/b&gt; &lt;p&gt; &lt;p&gt; It is encouraged to use alphanumeric only characters. &lt;b&gt;_.-&lt;/b&gt; will be deprecated soon &lt;p&gt; &lt;p&gt; Example: player_killed, mission_accomplished &lt;/p&gt; - **Payload (required)**: An arbitrary json with the payload of the said event. &lt;p&gt; Default maximum payload size is &lt;b&gt;1MB&lt;/b&gt; &lt;p&gt; - **ClientTimestamp (optional)**: Timestamp of the event captured by the client SDK. - **DeviceType (optional)**: The device type of the user.
   */
  createProtectedEvent(data: TelemetryBody[]): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/game-telemetry/v1/protected/events'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint requires valid JWT token. This endpoint does not require permission. This endpoint retrieves player&#39;s total playtime in Steam for a specific game (AppId) and store them in service&#39;s cache. Players&#39; Steam account must be set into public to enable the service fetch their total playtime data.
   */
  getPlaytimeProtected_BySteamId(steamId: string): Promise<Response<PlayTimeResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/game-telemetry/v1/protected/steamIds/{steamId}/playtime'.replace('{steamId}', steamId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PlayTimeResponse, 'PlayTimeResponse')
  }
  /**
   * This endpoint requires valid JWT token. This endpoint does not require permission. This endpoint update player&#39;s total playtime in a specific game (AppId) from service&#39;s cache.
   */
  updatePlaytimeProtected_BySteamId_ByPlaytime(steamId: string, playtime: string): Promise<Response<PlayTimeResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/game-telemetry/v1/protected/steamIds/{steamId}/playtime/{playtime}'
      .replace('{steamId}', steamId)
      .replace('{playtime}', playtime)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PlayTimeResponse, 'PlayTimeResponse')
  }
}
