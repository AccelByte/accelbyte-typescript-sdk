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
import { RevocationConfigInfo } from '../generated-definitions/RevocationConfigInfo.js'
import { RevocationConfigUpdate } from '../generated-definitions/RevocationConfigUpdate.js'
import { RevocationHistoryPagingSlicedResult } from '../generated-definitions/RevocationHistoryPagingSlicedResult.js'
import { RevocationRequest } from '../generated-definitions/RevocationRequest.js'
import { RevocationResult } from '../generated-definitions/RevocationResult.js'
import { RevocationAdmin$ } from './endpoints/RevocationAdmin$.js'

export function RevocationAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function deleteRevocationConfig(): Promise<AxiosResponse<unknown>> {
    const $ = new RevocationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteRevocationConfig()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRevocationConfig(): Promise<AxiosResponse<RevocationConfigInfo>> {
    const $ = new RevocationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRevocationConfig()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRevocationConfig(data: RevocationConfigUpdate): Promise<AxiosResponse<RevocationConfigInfo>> {
    const $ = new RevocationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRevocationConfig(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRevocationHistory(queryParams?: {
    endTime?: string | null
    limit?: number
    offset?: number
    source?: 'DLC' | 'IAP' | 'ORDER' | 'OTHER'
    startTime?: string | null
    status?: 'FAIL' | 'SUCCESS'
    transactionId?: string | null
    userId?: string | null
  }): Promise<AxiosResponse<RevocationHistoryPagingSlicedResult>> {
    const $ = new RevocationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRevocationHistory(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRevocation_ByUserId(userId: string, data: RevocationRequest): Promise<AxiosResponse<RevocationResult>> {
    const $ = new RevocationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRevocation_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Delete revocation config.
     */
    deleteRevocationConfig,
    /**
     * Get revocation configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Revocation config&lt;/li&gt;&lt;/ul&gt;
     */
    getRevocationConfig,
    /**
     * Update revocation configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Revocation config&lt;/li&gt;&lt;/ul&gt;
     */
    updateRevocationConfig,
    /**
     * Query revocation histories in a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: query revocation history&lt;/li&gt;&lt;/ul&gt;
     */
    getRevocationHistory,
    /**
     * Do revocation.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revocation results&lt;/li&gt;&lt;/ul&gt;
     */
    updateRevocation_ByUserId
  }
}
