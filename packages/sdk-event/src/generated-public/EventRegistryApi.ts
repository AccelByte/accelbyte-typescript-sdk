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
import { EventRegistry } from '../generated-definitions/EventRegistry.js'
import { EventRegistry$ } from './endpoints/EventRegistry$.js'

export function EventRegistryApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * @deprecated
   * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [READ]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getRegistryEventIds(): Promise<EventRegistry> {
    const $ = new EventRegistry$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getRegistryEventIds()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [CREATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function createRegistryEventId(data: EventRegistry): Promise<unknown> {
    const $ = new EventRegistry$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createRegistryEventId(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [DELETE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function deleteRegistryEventId_ByEventId(eventId: string): Promise<unknown> {
    const $ = new EventRegistry$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteRegistryEventId_ByEventId(eventId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [READ]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getRegistryEventId_ByEventId(eventId: string): Promise<EventRegistry> {
    const $ = new EventRegistry$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getRegistryEventId_ByEventId(eventId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function createRegistryEventId_ByEventId(eventId: string, data: EventRegistry): Promise<unknown> {
    const $ = new EventRegistry$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createRegistryEventId_ByEventId(eventId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [READ]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getRegistryEventType_ByEventType(eventType: string): Promise<EventRegistry> {
    const $ = new EventRegistry$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getRegistryEventType_ByEventType(eventType)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getRegistryEventIds,
    createRegistryEventId,
    deleteRegistryEventId_ByEventId,
    getRegistryEventId_ByEventId,
    createRegistryEventId_ByEventId,
    getRegistryEventType_ByEventType
  }
}
