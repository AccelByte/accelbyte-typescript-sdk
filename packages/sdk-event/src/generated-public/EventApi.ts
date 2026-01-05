/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Event } from '../generated-definitions/Event.js'
import { EventResponse } from '../generated-definitions/EventResponse.js'
import { Event$ } from './endpoints/Event$.js'

export function EventApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function getNamespace_ByNamespace(queryParams: {
    endDate: string | null
    pageSize: number
    startDate: string | null
    offset?: number
  }): Promise<AxiosResponse<EventResponse>> {
    const $ = new Event$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getNamespace_ByNamespace(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createNamespace_ByNamespace(data: Event): Promise<AxiosResponse<unknown>> {
    const $ = new Event$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createNamespace_ByNamespace(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUser_ByUserId(
    userId: string,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<AxiosResponse<EventResponse>> {
    const $ = new Event$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUser_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEventId_ByEventId(
    eventId: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<AxiosResponse<EventResponse>> {
    const $ = new Event$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEventId_ByEventId(eventId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEventType_ByEventType(
    eventType: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<AxiosResponse<EventResponse>> {
    const $ = new Event$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEventType_ByEventType(eventType, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEventId_ByUserId_ByEventId(
    userId: string,
    eventId: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<AxiosResponse<EventResponse>> {
    const $ = new Event$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEventId_ByUserId_ByEventId(userId, eventId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEventType_ByUserId_ByEventType(
    userId: string,
    eventType: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<AxiosResponse<EventResponse>> {
    const $ = new Event$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEventType_ByUserId_ByEventType(userId, eventType, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEventId_ByEventType_ByEventId(
    eventType: number,
    eventId: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<AxiosResponse<EventResponse>> {
    const $ = new Event$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEventId_ByEventType_ByEventId(eventType, eventId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEventId_ByUserId_ByEventType_ByEventId(
    userId: string,
    eventType: number,
    eventId: number,
    queryParams: { endDate: string | null; pageSize: number; startDate: string | null; offset?: number }
  ): Promise<AxiosResponse<EventResponse>> {
    const $ = new Event$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEventId_ByUserId_ByEventType_ByEventId(userId, eventType, eventId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * @deprecated
     * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt;
     */
    getNamespace_ByNamespace,
    /**
     * @deprecated
     * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [CREATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
     */
    createNamespace_ByNamespace,
    /**
     * @deprecated
     * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt;
     */
    getUser_ByUserId,
    /**
     * @deprecated
     * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt;
     */
    getEventId_ByEventId,
    /**
     * @deprecated
     * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
     */
    getEventType_ByEventType,
    /**
     * @deprecated
     * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt;
     */
    getEventId_ByUserId_ByEventId,
    /**
     * @deprecated
     * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]and scope &lt;code&gt;analytics&lt;/code&gt;
     */
    getEventType_ByUserId_ByEventType,
    /**
     * @deprecated
     * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
     */
    getEventId_ByEventType_ByEventId,
    /**
     * @deprecated
     * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
     */
    getEventId_ByUserId_ByEventType_ByEventId
  }
}
