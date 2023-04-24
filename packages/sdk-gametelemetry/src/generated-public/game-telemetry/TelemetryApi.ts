/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { Telemetry$ } from './endpoints/Telemetry$'

export function TelemetryApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This endpoint requires valid JWT token. This endpoint does not require permission. This endpoint send events into designated streaming pipeline and each request can contain single or multiple events. <p> Format of the event: - **EventNamespace (required)**: Namespace of the relevant game with domain name format. <p> Only accept input with valid characters. Allowed characters: <b>Aa-Zz0-9_.-</b> <p> <p> It is encouraged to use alphanumeric only characters. <b>_.-</b> will be deprecated soon <p> <p> Example: accelbyte </p> - **EventName (required)**: Name of the event. <p> Only accept input with valid characters. Allowed characters: <b>Aa-Zz0-9_.-</b> <p> <p> It is encouraged to use alphanumeric only characters. <b>_.-</b> will be deprecated soon <p> <p> Example: player_killed, mission_accomplished </p> - **Payload (required)**: An arbitrary json with the payload of the said event. <p> Default maximum payload size is <b>1MB</b> <p>
   */
  async function createProtectedEvent(): Promise<unknown> {
    const $ = new Telemetry$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createProtectedEvent()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint requires valid JWT token. This endpoint does not require permission. This endpoint retrieves player's total playtime in Steam for a specific game (AppId) and store them in service's cache. Players' Steam account must be set into public to enable the service fetch their total playtime data.
   */
  async function getPlaytimeProtected_BySteamId(steamId: string): Promise<unknown> {
    const $ = new Telemetry$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPlaytimeProtected_BySteamId(steamId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint requires valid JWT token. This endpoint does not require permission. This endpoint update player's total playtime in a specific game (AppId) from service's cache.
   */
  async function updatePlaytimeProtected_BySteamId_ByPlaytime(steamId: string, playtime: string): Promise<unknown> {
    const $ = new Telemetry$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updatePlaytimeProtected_BySteamId_ByPlaytime(steamId, playtime)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createProtectedEvent,
    getPlaytimeProtected_BySteamId,
    updatePlaytimeProtected_BySteamId_ByPlaytime
  }
}
