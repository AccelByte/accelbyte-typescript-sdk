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
import { Event } from '../generated-definitions/Event.js'
import { EventResponse } from '../generated-definitions/EventResponse.js'
import { Event$ } from './endpoints/Event$.js'

export function EventApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getNamespace_ByNamespace_DEPRECATED(queryParams: {
    endDate: string | null
    pageSize: number
    startDate: string | null
    offset?: number
  }): Promise<EventResponse> {
    const $ = new Event$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getNamespace_ByNamespace_DEPRECATED(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [CREATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function createNamespace_ByNamespace_DEPRECATED(data: Event): Promise<unknown> {
    const $ = new Event$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createNamespace_ByNamespace_DEPRECATED(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getUser_ByUserId_DEPRECATED(
    userId: string,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<EventResponse> {
    const $ = new Event$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUser_ByUserId_DEPRECATED(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getEventId_ByEventId_DEPRECATED(
    eventId: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<EventResponse> {
    const $ = new Event$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getEventId_ByEventId_DEPRECATED(eventId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getEventType_ByEventType_DEPRECATED(
    eventType: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<EventResponse> {
    const $ = new Event$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getEventType_ByEventType_DEPRECATED(eventType, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getEventId_ByUserId_ByEventId_DEPRECATED(
    userId: string,
    eventId: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<EventResponse> {
    const $ = new Event$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getEventId_ByUserId_ByEventId_DEPRECATED(userId, eventId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getEventType_ByUserId_ByEventType_DEPRECATED(
    userId: string,
    eventType: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<EventResponse> {
    const $ = new Event$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getEventType_ByUserId_ByEventType_DEPRECATED(userId, eventType, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getEventId_ByEventType_ByEventId_DEPRECATED(
    eventType: number,
    eventId: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<EventResponse> {
    const $ = new Event$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getEventId_ByEventType_ByEventId_DEPRECATED(eventType, eventId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getEventId_ByUserId_ByEventType_ByEventId_DEPRECATED(
    userId: string,
    eventType: number,
    eventId: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<EventResponse> {
    const $ = new Event$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getEventId_ByUserId_ByEventType_ByEventId_DEPRECATED(userId, eventType, eventId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getNamespace_ByNamespace_DEPRECATED,
    createNamespace_ByNamespace_DEPRECATED,
    getUser_ByUserId_DEPRECATED,
    getEventId_ByEventId_DEPRECATED,
    getEventType_ByEventType_DEPRECATED,
    getEventId_ByUserId_ByEventId_DEPRECATED,
    getEventType_ByUserId_ByEventType_DEPRECATED,
    getEventId_ByEventType_ByEventId_DEPRECATED,
    getEventId_ByUserId_ByEventType_ByEventId_DEPRECATED
  }
}
