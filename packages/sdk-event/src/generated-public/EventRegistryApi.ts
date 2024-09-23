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
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { EventRegistry } from '../generated-definitions/EventRegistry.js'
import { EventRegistry$ } from './endpoints/EventRegistry$.js'

export function EventRegistryApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getRegistryEventIds(): Promise<AxiosResponse<EventRegistry>> {
    const $ = new EventRegistry$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRegistryEventIds()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createRegistryEventId(data: EventRegistry): Promise<AxiosResponse<unknown>> {
    const $ = new EventRegistry$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createRegistryEventId(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteRegistryEventId_ByEventId(eventId: string): Promise<AxiosResponse<unknown>> {
    const $ = new EventRegistry$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteRegistryEventId_ByEventId(eventId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRegistryEventId_ByEventId(eventId: string): Promise<AxiosResponse<EventRegistry>> {
    const $ = new EventRegistry$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRegistryEventId_ByEventId(eventId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createRegistryEventId_ByEventId(eventId: string, data: EventRegistry): Promise<AxiosResponse<unknown>> {
    const $ = new EventRegistry$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createRegistryEventId_ByEventId(eventId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRegistryEventType_ByEventType(eventType: string): Promise<AxiosResponse<EventRegistry>> {
    const $ = new EventRegistry$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRegistryEventType_ByEventType(eventType)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * @deprecated
     * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [READ]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
     */
    getRegistryEventIds,
    /**
     * @deprecated
     * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [CREATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
     */
    createRegistryEventId,
    /**
     * @deprecated
     * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [DELETE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
     */
    deleteRegistryEventId_ByEventId,
    /**
     * @deprecated
     * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [READ]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
     */
    getRegistryEventId_ByEventId,
    /**
     * @deprecated
     * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
     */
    createRegistryEventId_ByEventId,
    /**
     * @deprecated
     * Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EVENT [READ]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt;
     */
    getRegistryEventType_ByEventType
  }
}
