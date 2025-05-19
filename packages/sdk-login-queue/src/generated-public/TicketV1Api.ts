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
import { RefreshTicketResponse } from '../generated-definitions/RefreshTicketResponse.js'
import { TicketV1$ } from './endpoints/TicketV1$.js'

export function TicketV1Api(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function deleteTicket(): Promise<AxiosResponse<unknown>> {
    const $ = new TicketV1$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteTicket()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getTicket(): Promise<AxiosResponse<RefreshTicketResponse>> {
    const $ = new TicketV1$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTicket()
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Cancel ticket. This endpoint requires ticket to be placed in the authorization header with this format: &#34;Bearer ticketID&#34;
     */
    deleteTicket,
    /**
     * Refresh ticket. This endpoint requires ticket to be placed in the authorization header with this format: &#34;Bearer ticketID&#34;. When the ticketID is empty or not found the response status will be 401
     */
    getTicket
  }
}
