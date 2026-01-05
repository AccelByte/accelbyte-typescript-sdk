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
import { InvoiceSummary } from '../generated-definitions/InvoiceSummary.js'
import { InvoiceAdmin$ } from './endpoints/InvoiceAdmin$.js'

export function InvoiceAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getInvoiceSummary(queryParams: {
    endTime: string | null
    feature: string | null
    itemId: string | null
    itemType:
      | 'APP'
      | 'BUNDLE'
      | 'CODE'
      | 'COINS'
      | 'EXTENSION'
      | 'INGAMEITEM'
      | 'LOOTBOX'
      | 'MEDIA'
      | 'OPTIONBOX'
      | 'SEASON'
      | 'SUBSCRIPTION'
    startTime: string | null
  }): Promise<AxiosResponse<InvoiceSummary>> {
    const $ = new InvoiceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInvoiceSummary(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getInvoiceDetailsCsv(queryParams: {
    endTime: string | null
    feature: string | null
    itemId: string | null
    itemType:
      | 'APP'
      | 'BUNDLE'
      | 'CODE'
      | 'COINS'
      | 'EXTENSION'
      | 'INGAMEITEM'
      | 'LOOTBOX'
      | 'MEDIA'
      | 'OPTIONBOX'
      | 'SEASON'
      | 'SUBSCRIPTION'
    startTime: string | null
  }): Promise<AxiosResponse<unknown>> {
    const $ = new InvoiceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInvoiceDetailsCsv(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Generate invoice summary.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: query orders&lt;/li&gt;&lt;/ul&gt;
     */
    getInvoiceSummary,
    /**
     * Download invoice details as a csv file.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: invoice details csv file&lt;/li&gt;&lt;/ul&gt;
     */
    getInvoiceDetailsCsv
  }
}
