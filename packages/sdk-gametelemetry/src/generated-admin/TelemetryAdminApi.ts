/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { TelemetryAdmin$ } from './endpoints/TelemetryAdmin$.js'

export function TelemetryAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This endpoint requires valid JWT token and telemetry permission This endpoint retrieves namespace list
   */
  async function getNamespaces(): Promise<unknown> {
    const $ = new TelemetryAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getNamespaces()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint requires valid JWT token and telemetry permission This endpoint retrieves event list
   */
  async function getEvents(queryParams?: {
    startTime?: string | null
    endTime?: string | null
    offset?: number
    limit?: number
    userId?: string | null
    flightId?: string | null
    eventId?: string | null
    eventName?: string | null
    eventPayload?: string | null
  }): Promise<unknown> {
    const $ = new TelemetryAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEvents(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getNamespaces,
    getEvents
  }
}
