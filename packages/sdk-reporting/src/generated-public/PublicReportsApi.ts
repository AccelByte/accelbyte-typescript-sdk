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
import { SubmitReportRequest } from '../generated-definitions/SubmitReportRequest.js'
import { SubmitReportResponse } from '../generated-definitions/SubmitReportResponse.js'
import { PublicReports$ } from './endpoints/PublicReports$.js'

export function PublicReportsApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function createReport(data: SubmitReportRequest): Promise<AxiosResponse<SubmitReportResponse>> {
    const $ = new PublicReports$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createReport(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * User need to be authenticated to access this endpoint. Submit a report and will return ticket for reported object. New ticket will be created if no OPEN ticket present for reported object (based by objectId and objectType) in a namespace. User can only submit report once for each different user / object reported in the same OPEN ticket. Reporting the same user / object in the same OPEN ticket will return HTTP code 409 (conflict). Fill the &#39;reason&#39; field with a &#39;reason title&#39; Supported category: - UGC - USER - CHAT - EXTENSION
     */
    createReport
  }
}
