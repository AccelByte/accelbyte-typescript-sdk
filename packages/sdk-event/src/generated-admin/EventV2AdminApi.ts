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
import { EventResponseV2 } from '../generated-definitions/EventResponseV2.js'
import { EventV2Admin$ } from './endpoints/EventV2Admin$.js'
import { GenericQueryPayload } from '../generated-definitions/GenericQueryPayload.js'

export function EventV2AdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * This endpoint is using POST which is somewhat unfamiliar, but it&#39;s logical that we have to send/post a filter (search term) in order to get the data. This endpoint will not return anything if you give it an empty filters in the request body.
   */
  async function createQuery(
    data: GenericQueryPayload,
    queryParams?: { endDate?: string | null; offset?: number; pageSize?: number; startDate?: string | null }
  ): Promise<EventResponseV2> {
    const $ = new EventV2Admin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createQuery(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get events from a specific user
   */
  async function getEvent_ByUserId(
    userId: string,
    queryParams?: { endDate?: string | null; eventName?: string | null; offset?: number; pageSize?: number; startDate?: string | null }
  ): Promise<EventResponseV2> {
    const $ = new EventV2Admin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getEvent_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createQuery,
    getEvent_ByUserId
  }
}
