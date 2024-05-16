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
import { EventRegistry } from '../generated-definitions/EventRegistry.js'
import { EventRegistry$ } from './endpoints/EventRegistry$.js'

export function EventRegistryApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * @deprecated
   * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [READ]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getRegistryEventIds_DEPRECATED(): Promise<EventRegistry> {
    const $ = new EventRegistry$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getRegistryEventIds_DEPRECATED()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [CREATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function createRegistryEventId_DEPRECATED(data: EventRegistry): Promise<unknown> {
    const $ = new EventRegistry$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createRegistryEventId_DEPRECATED(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [DELETE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function deleteRegistryEventId_ByEventId_DEPRECATED(eventId: string): Promise<unknown> {
    const $ = new EventRegistry$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteRegistryEventId_ByEventId_DEPRECATED(eventId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [READ]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getRegistryEventId_ByEventId_DEPRECATED(eventId: string): Promise<EventRegistry> {
    const $ = new EventRegistry$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getRegistryEventId_ByEventId_DEPRECATED(eventId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function createRegistryEventId_ByEventId_DEPRECATED(eventId: string, data: EventRegistry): Promise<unknown> {
    const $ = new EventRegistry$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createRegistryEventId_ByEventId_DEPRECATED(eventId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [READ]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getRegistryEventType_ByEventType_DEPRECATED(eventType: string): Promise<EventRegistry> {
    const $ = new EventRegistry$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getRegistryEventType_ByEventType_DEPRECATED(eventType)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getRegistryEventIds_DEPRECATED,
    createRegistryEventId_DEPRECATED,
    deleteRegistryEventId_ByEventId_DEPRECATED,
    getRegistryEventId_ByEventId_DEPRECATED,
    createRegistryEventId_ByEventId_DEPRECATED,
    getRegistryEventType_ByEventType_DEPRECATED
  }
}
