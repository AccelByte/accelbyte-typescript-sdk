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
import { DataRetrievalResponse } from '../generated-definitions/DataRetrievalResponse.js'
import { UserDataUrl } from '../generated-definitions/UserDataUrl.js'
import { UserPersonalDataResponse } from '../generated-definitions/UserPersonalDataResponse.js'
import { DataRetrieval$ } from './endpoints/DataRetrieval$.js'

export function DataRetrievalApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getRequests_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<UserPersonalDataResponse>> {
    const $ = new DataRetrieval$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRequests_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postRequest_ByUserId(
    userId: string,
    data: { password: string | null; languageTag?: string | null }
  ): Promise<AxiosResponse<DataRetrievalResponse>> {
    const $ = new DataRetrieval$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postRequest_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteRequest_ByUserId_ByRequestDate(userId: string, requestDate: string): Promise<AxiosResponse<unknown>> {
    const $ = new DataRetrieval$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteRequest_ByUserId_ByRequestDate(userId, requestDate)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postGenerate_ByUserId_ByRequestDate(
    userId: string,
    requestDate: string,
    data: { password: string | null }
  ): Promise<AxiosResponse<UserDataUrl>> {
    const $ = new DataRetrieval$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postGenerate_ByUserId_ByRequestDate(userId, requestDate, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get user&#39;s personal data requests Requires valid user access token Scope: account
     */
    getRequests_ByUserId,
    /**
     * Submit personal data retrieval request. Scope: account ### Request Header: - **Content-Type: application/x-www-form-urlencoded**
     */
    postRequest_ByUserId,
    /**
     * Cancel user&#39;s personal data requests Requires valid user access token Scope: account
     */
    deleteRequest_ByUserId_ByRequestDate,
    /**
     * Generate personal data download url Requires valid user access token Scope: account ### Request Header: - **Content-Type: application/x-www-form-urlencoded**
     */
    postGenerate_ByUserId_ByRequestDate
  }
}
