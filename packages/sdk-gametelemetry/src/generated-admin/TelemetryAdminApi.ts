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
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { ListBaseResponseStr } from '../generated-definitions/ListBaseResponseStr.js'
import { PagedResponseGetNamespaceEventResponse } from '../generated-definitions/PagedResponseGetNamespaceEventResponse.js'
import { TelemetryAdmin$ } from './endpoints/TelemetryAdmin$.js'

export function TelemetryAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * This endpoint requires valid JWT token and telemetry permission This endpoint retrieves namespace list
   */
  async function getNamespaces(): Promise<ListBaseResponseStr> {
    const $ = new TelemetryAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
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
  }): Promise<PagedResponseGetNamespaceEventResponse> {
    const $ = new TelemetryAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getEvents(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getNamespaces,
    getEvents
  }
}
