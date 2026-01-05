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
import { ClawbackInfo } from '../generated-definitions/ClawbackInfo.js'
import { IapClawbackPagingSlicedResult } from '../generated-definitions/IapClawbackPagingSlicedResult.js'
import { StreamEvent } from '../generated-definitions/StreamEvent.js'
import { XblClawbackEvent } from '../generated-definitions/XblClawbackEvent.js'
import { ClawbackAdmin$ } from './endpoints/ClawbackAdmin$.js'

export function ClawbackAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function createIapClawbackXblMock(data: XblClawbackEvent): Promise<AxiosResponse<ClawbackInfo>> {
    const $ = new ClawbackAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createIapClawbackXblMock(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getIapClawbackHistories(queryParams?: {
    endTime?: string | null
    eventType?: 'CHARGEBACK' | 'CHARGEBACK_REVERSED' | 'OTHER' | 'REFUND' | 'REVOKED'
    externalOrderId?: string | null
    limit?: number
    offset?: number
    startTime?: string | null
    status?: 'FAIL' | 'IGNORED' | 'INIT' | 'SUCCESS'
    userId?: string | null
  }): Promise<AxiosResponse<IapClawbackPagingSlicedResult>> {
    const $ = new ClawbackAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIapClawbackHistories(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createIapClawbackPlaystationMock(data: StreamEvent): Promise<AxiosResponse<ClawbackInfo>> {
    const $ = new ClawbackAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createIapClawbackPlaystationMock(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Mock Sync XBox Clawback event.
     */
    createIapClawbackXblMock,
    /**
     * Query clawback history.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: paginated clawback history&lt;/li&gt;&lt;/ul&gt;
     */
    getIapClawbackHistories,
    /**
     * Mock Sync PlayStation Clawback event..
     */
    createIapClawbackPlaystationMock
  }
}
