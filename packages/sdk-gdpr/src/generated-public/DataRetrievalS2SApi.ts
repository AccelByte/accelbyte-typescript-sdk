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
import { ListFinishedDataRequests } from '../generated-definitions/ListFinishedDataRequests.js'
import { S2SDataRequestSummary } from '../generated-definitions/S2SDataRequestSummary.js'
import { S2SDataRetrievalResponse } from '../generated-definitions/S2SDataRetrievalResponse.js'
import { S2SUserDataUrl } from '../generated-definitions/S2SUserDataUrl.js'
import { DataRetrievalS2S$ } from './endpoints/DataRetrievalS2S$.js'

export function DataRetrievalS2SApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getS2SRequestsFinished(queryParams: {
    end: string | null
    start: string | null
  }): Promise<AxiosResponse<ListFinishedDataRequests>> {
    const $ = new DataRetrievalS2S$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getS2SRequestsFinished(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getS2Request_ByRequestId(requestId: string): Promise<AxiosResponse<S2SDataRequestSummary>> {
    const $ = new DataRetrievalS2S$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getS2Request_ByRequestId(requestId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createRequestS2_ByUserId(userId: string): Promise<AxiosResponse<S2SDataRetrievalResponse>> {
    const $ = new DataRetrievalS2S$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createRequestS2_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function fetchGenerateS2_ByUserId_ByRequestDate(userId: string, requestDate: string): Promise<AxiosResponse<S2SUserDataUrl>> {
    const $ = new DataRetrievalS2S$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchGenerateS2_ByUserId_ByRequestDate(userId, requestDate)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Scope: account Get list of finished personal data requests based on the finished time period. Unfinished personal data requests will not appear here, i.e. have Status **Pending**, **In-Progress** or **Canceled**. **Anonymize userId for deleted account:** For user accounts that have been deleted, the **userId** field in this API will be anonymized automatically after **7 days** from the success deletion. This measure is implemented to ensure compliance with GDPR regulations. Please make sure to synchronize the data from this API before it undergoes anonymization. --- ## This API for S2S integration purpose only
     */
    getS2SRequestsFinished,
    /**
     * Scope: account Get Personal Data Request by Request Id. If the request has been completed, it will return a download url for the data package. --- ## This API for S2S integration purpose only
     */
    getS2Request_ByRequestId,
    /**
     * Scope: account Submit user personal data retrieval request. **Limitation:** This API only accepts requests with a publisher userId and does not support game userId requests at this time. --- ## This API for S2S integration purpose only **Notes:** 1. This API will **not send GDPR email notification** both for player and admin notification.
     */
    createRequestS2_ByUserId,
    /**
     * Scope: account Generate personal data download url. **Limitation:** This API only accepts requests with a publisher userId and does not support game userId requests at this time. --- ## This API for S2S integration purpose only
     */
    fetchGenerateS2_ByUserId_ByRequestDate
  }
}
