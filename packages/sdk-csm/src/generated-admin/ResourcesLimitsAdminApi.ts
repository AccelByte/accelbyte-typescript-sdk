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
import { CsmAppLimitsResponse } from '../generated-definitions/CsmAppLimitsResponse.js'
import { ResourcesLimitsAdmin$ } from './endpoints/ResourcesLimitsAdmin$.js'

export function ResourcesLimitsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getResourcesLimits_v2(): Promise<AxiosResponse<CsmAppLimitsResponse>> {
    const $ = new ResourcesLimitsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getResourcesLimits_v2()
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This endpoint return the Extend Apps Configurable Limits for front end to use for initial validation before app creation e.g. Replica Limit will be used to check max replica that can be created for the said environment by default CPU Limit will be used to validate max allowed CPU for the extend app that hasn&#39;t been created Memory Limit will be used to validate max allowed Memory for the extend app that hasn&#39;t been created MaxAppNotificationSubscription will be used to validate the maximum number of subscriber for an app status notification
     */
    getResourcesLimits_v2
  }
}
