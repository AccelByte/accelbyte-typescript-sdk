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
import { EventResponseV2 } from '../generated-definitions/EventResponseV2.js'
import { EventV2$ } from './endpoints/EventV2$.js'

export function EventV2Api(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getEvent_ByUserId_v2(
    userId: string,
    queryParams?: { endDate?: string | null; eventName?: string | null; offset?: number; pageSize?: number; startDate?: string | null }
  ): Promise<AxiosResponse<EventResponseV2>> {
    const $ = new EventV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEvent_ByUserId_v2(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEdithistory_ByUserId_v2(
    userId: string,
    queryParams?: { endDate?: string | null; offset?: number; pageSize?: number; startDate?: string | null; type?: string | null }
  ): Promise<AxiosResponse<EventResponseV2>> {
    const $ = new EventV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEdithistory_ByUserId_v2(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Requires valid user access token
     */
    getEvent_ByUserId_v2,
    /**
     * Available Type: * email * password * displayname * dateofbirth * country * language
     */
    getEdithistory_ByUserId_v2
  }
}
