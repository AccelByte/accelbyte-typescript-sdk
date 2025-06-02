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
import { TicketAcquireRequest } from '../generated-definitions/TicketAcquireRequest.js'
import { TicketAcquireResult } from '../generated-definitions/TicketAcquireResult.js'
import { TicketBoothId } from '../generated-definitions/TicketBoothId.js'
import { TicketDynamicInfo } from '../generated-definitions/TicketDynamicInfo.js'
import { TicketSaleDecrementRequest } from '../generated-definitions/TicketSaleDecrementRequest.js'
import { TicketSaleIncrementRequest } from '../generated-definitions/TicketSaleIncrementRequest.js'
import { TicketSaleIncrementResult } from '../generated-definitions/TicketSaleIncrementResult.js'
import { TicketAdmin$ } from './endpoints/TicketAdmin$.js'

export function TicketAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getTicket_ByBoothName(boothName: string): Promise<AxiosResponse<TicketDynamicInfo>> {
    const $ = new TicketAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTicket_ByBoothName(boothName)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getId_ByBoothName(boothName: string): Promise<AxiosResponse<TicketBoothId>> {
    const $ = new TicketAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getId_ByBoothName(boothName)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDecrement_ByBoothName(boothName: string, data: TicketSaleDecrementRequest): Promise<AxiosResponse<unknown>> {
    const $ = new TicketAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDecrement_ByBoothName(boothName, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateIncrement_ByBoothName(
    boothName: string,
    data: TicketSaleIncrementRequest
  ): Promise<AxiosResponse<TicketSaleIncrementResult>> {
    const $ = new TicketAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIncrement_ByBoothName(boothName, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createTicket_ByUserId_ByBoothName(
    userId: string,
    boothName: string,
    data: TicketAcquireRequest
  ): Promise<AxiosResponse<TicketAcquireResult>> {
    const $ = new TicketAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createTicket_ByUserId_ByBoothName(userId, boothName, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Get ticket(code/key) dynamic based on booth name.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: ticket dynamic&lt;/li&gt;&lt;/ul&gt;
     */
    getTicket_ByBoothName,
    /**
     * Get ticket(code/key) booth ID.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: ticket booth id&lt;/li&gt;&lt;/ul&gt;
     */
    getId_ByBoothName,
    /**
     * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Decrease ticket(code/key) sale if requested orderNo is already increased.
     */
    updateDecrement_ByBoothName,
    /**
     * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; increase ticket(code/key) sale.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Ticket sale increment result&lt;/li&gt;&lt;/ul&gt;
     */
    updateIncrement_ByBoothName,
    /**
     * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Acquire ticket(code/key) based on booth name.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: acquire result&lt;/li&gt;&lt;/ul&gt;
     */
    createTicket_ByUserId_ByBoothName
  }
}
