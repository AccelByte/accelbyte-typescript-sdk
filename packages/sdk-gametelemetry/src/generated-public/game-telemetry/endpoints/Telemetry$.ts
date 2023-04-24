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

export class Telemetry$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This endpoint requires valid JWT token. This endpoint does not require permission. This endpoint send events into designated streaming pipeline and each request can contain single or multiple events. <p> Format of the event: - **EventNamespace (required)**: Namespace of the relevant game with domain name format. <p> Only accept input with valid characters. Allowed characters: <b>Aa-Zz0-9_.-</b> <p> <p> It is encouraged to use alphanumeric only characters. <b>_.-</b> will be deprecated soon <p> <p> Example: accelbyte </p> - **EventName (required)**: Name of the event. <p> Only accept input with valid characters. Allowed characters: <b>Aa-Zz0-9_.-</b> <p> <p> It is encouraged to use alphanumeric only characters. <b>_.-</b> will be deprecated soon <p> <p> Example: player_killed, mission_accomplished </p> - **Payload (required)**: An arbitrary json with the payload of the said event. <p> Default maximum payload size is <b>1MB</b> <p>
   */
  createProtectedEvent(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/game-telemetry/v1/protected/events'
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * This endpoint requires valid JWT token. This endpoint does not require permission. This endpoint retrieves player's total playtime in Steam for a specific game (AppId) and store them in service's cache. Players' Steam account must be set into public to enable the service fetch their total playtime data.
   */
  getPlaytimeProtected_BySteamId(steamId: string): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/game-telemetry/v1/protected/steamIds/{steamId}/playtime'.replace('{steamId}', steamId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This endpoint requires valid JWT token. This endpoint does not require permission. This endpoint update player's total playtime in a specific game (AppId) from service's cache.
   */
  updatePlaytimeProtected_BySteamId_ByPlaytime(steamId: string, playtime: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/game-telemetry/v1/protected/steamIds/{steamId}/playtime/{playtime}'
      .replace('{steamId}', steamId)
      .replace('{playtime}', playtime)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
