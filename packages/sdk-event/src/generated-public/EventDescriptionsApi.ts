/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { MultipleAgentType } from '../generated-definitions/MultipleAgentType.js'
import { MultipleEventId } from '../generated-definitions/MultipleEventId.js'
import { MultipleEventLevel } from '../generated-definitions/MultipleEventLevel.js'
import { MultipleEventType } from '../generated-definitions/MultipleEventType.js'
import { MultipleUx } from '../generated-definitions/MultipleUx.js'
import { EventDescriptions$ } from './endpoints/EventDescriptions$.js'

export function EventDescriptionsApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getDescriptionsUx(): Promise<AxiosResponse<MultipleUx>> {
    const $ = new EventDescriptions$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDescriptionsUx()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDescriptionsEventId(): Promise<AxiosResponse<MultipleEventId>> {
    const $ = new EventDescriptions$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDescriptionsEventId()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDescriptionsAgentType(): Promise<AxiosResponse<MultipleAgentType>> {
    const $ = new EventDescriptions$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDescriptionsAgentType()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDescriptionsEventType(): Promise<AxiosResponse<MultipleEventType>> {
    const $ = new EventDescriptions$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDescriptionsEventType()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDescriptionsEventLevel(): Promise<AxiosResponse<MultipleEventLevel>> {
    const $ = new EventDescriptions$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDescriptionsEventLevel()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDescriptionsUxListByUx(queryParams?: { ux?: string | null }): Promise<AxiosResponse<MultipleUx>> {
    const $ = new EventDescriptions$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDescriptionsUxListByUx(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDescriptionsEventIdListByEventIds(queryParams?: { eventIds?: string | null }): Promise<AxiosResponse<MultipleEventId>> {
    const $ = new EventDescriptions$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDescriptionsEventIdListByEventIds(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDescriptionsAgentTypeListByAgentTypes(queryParams?: {
    agentTypes?: string | null
  }): Promise<AxiosResponse<MultipleAgentType>> {
    const $ = new EventDescriptions$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDescriptionsAgentTypeListByAgentTypes(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDescriptionsEventTypeListByEventTypes(queryParams?: {
    eventTypes?: string | null
  }): Promise<AxiosResponse<MultipleEventType>> {
    const $ = new EventDescriptions$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDescriptionsEventTypeListByEventTypes(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDescriptionsEventLevelListByEventLevels(queryParams?: {
    eventLevels?: string | null
  }): Promise<AxiosResponse<MultipleEventLevel>> {
    const $ = new EventDescriptions$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDescriptionsEventLevelListByEventLevels(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    getDescriptionsUx,

    getDescriptionsEventId,

    getDescriptionsAgentType,

    getDescriptionsEventType,

    getDescriptionsEventLevel,

    getDescriptionsUxListByUx,

    getDescriptionsEventIdListByEventIds,

    getDescriptionsAgentTypeListByAgentTypes,

    getDescriptionsEventTypeListByEventTypes,

    getDescriptionsEventLevelListByEventLevels
  }
}
