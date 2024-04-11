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
import { Event } from '../generated-definitions/Event.js'
import { Event$ } from './endpoints/Event$.js'
import { EventResponse } from '../generated-definitions/EventResponse.js'

export function EventApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getNamespace_ByNamespace(queryParams: {
    endDate: string | null
    pageSize: number
    startDate: string | null
    offset?: number
  }): Promise<EventResponse> {
    const $ = new Event$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getNamespace_ByNamespace(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [CREATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function createNamespace_ByNamespace(data: Event): Promise<unknown> {
    const $ = new Event$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createNamespace_ByNamespace(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getUser_ByUserId(
    userId: string,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<EventResponse> {
    const $ = new Event$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getUser_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getEventId_ByEventId(
    eventId: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<EventResponse> {
    const $ = new Event$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getEventId_ByEventId(eventId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getEventType_ByEventType(
    eventType: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<EventResponse> {
    const $ = new Event$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getEventType_ByEventType(eventType, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getEventId_ByUserId_ByEventId(
    userId: string,
    eventId: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<EventResponse> {
    const $ = new Event$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getEventId_ByUserId_ByEventId(userId, eventId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getEventType_ByUserId_ByEventType(
    userId: string,
    eventType: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<EventResponse> {
    const $ = new Event$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getEventType_ByUserId_ByEventType(userId, eventType, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getEventId_ByEventType_ByEventId(
    eventType: number,
    eventId: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<EventResponse> {
    const $ = new Event$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getEventId_ByEventType_ByEventId(eventType, eventId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
   */
  async function getEventId_ByUserId_ByEventType_ByEventId(
    userId: string,
    eventType: number,
    eventId: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<EventResponse> {
    const $ = new Event$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getEventId_ByUserId_ByEventType_ByEventId(userId, eventType, eventId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getNamespace_ByNamespace,
    createNamespace_ByNamespace,
    getUser_ByUserId,
    getEventId_ByEventId,
    getEventType_ByEventType,
    getEventId_ByUserId_ByEventId,
    getEventType_ByUserId_ByEventType,
    getEventId_ByEventType_ByEventId,
    getEventId_ByUserId_ByEventType_ByEventId
  }
}
